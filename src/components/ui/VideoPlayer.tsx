import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";
import { cn } from "../../lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({
  src,
  poster,
  className,
  overlayClassName,
  children,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-hide controls after 3s of inactivity
  const resetHideTimer = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setShowControls(true);
    hideTimerRef.current = setTimeout(() => {
      if (!isDragging) setShowControls(false);
    }, 3000);
  }, [isDragging]);

  // Sync video state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
    };

    const onLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const onProgress = () => {
      if (video.buffered.length > 0) {
        setBuffered((video.buffered.end(video.buffered.length - 1) / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("progress", onProgress);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("progress", onProgress);
    };
  }, []);

  // Sync volume
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = muted;
  }, [volume, muted]);

  // Fullscreen change listener
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && muted) setMuted(false);
    if (val === 0) setMuted(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = pct * video.duration;
  };

  const handleProgressDrag = useCallback(
    (e: MouseEvent) => {
      const video = videoRef.current;
      const bar = progressRef.current;
      if (!video || !bar) return;
      const rect = bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      video.currentTime = pct * video.duration;
    },
    []
  );

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressClick(e);

    const onMove = (ev: MouseEvent) => handleProgressDrag(ev);
    const onUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await containerRef.current.requestFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative group", className)}
      onMouseMove={resetHideTimer}
      onMouseEnter={resetHideTimer}
      onMouseLeave={() => {
        if (!isDragging) setShowControls(false);
      }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted={muted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark overlay for content readability */}
      {overlayClassName && <div className={overlayClassName} />}

      {/* Page content layered on top */}
      {children}

      {/* Muted indicator — subtle icon in corner when controls are hidden */}
      <AnimatePresence>
        {muted && !showControls && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
              resetHideTimer();
            }}
            className="absolute bottom-6 right-6 z-30 bg-black/50 backdrop-blur-sm rounded-full p-3 text-off-white/70 hover:text-gold hover:bg-black/70 transition-all duration-200 cursor-pointer"
            aria-label="Unmute video"
          >
            <VolumeX className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Control bar */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 z-30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient fade behind controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            <div className="relative px-4 pb-4 pt-10">
              {/* Progress bar */}
              <div
                ref={progressRef}
                className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 group/progress hover:h-1.5 transition-all duration-150"
                onMouseDown={handleDragStart}
              >
                {/* Buffered */}
                <div
                  className="absolute top-0 left-0 h-full bg-white/20 rounded-full pointer-events-none"
                  style={{ width: `${buffered}%` }}
                />
                {/* Progress */}
                <div
                  className="absolute top-0 left-0 h-full bg-gold rounded-full pointer-events-none"
                  style={{ width: `${progress}%` }}
                />
                {/* Scrubber dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-150 pointer-events-none shadow-lg"
                  style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
                />
              </div>

              {/* Controls row */}
              <div className="flex items-center gap-3">
                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="text-off-white hover:text-gold transition-colors duration-150 cursor-pointer"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <Pause className="w-5 h-5" fill="currentColor" />
                  ) : (
                    <Play className="w-5 h-5" fill="currentColor" />
                  )}
                </button>

                {/* Time */}
                <span className="text-xs text-off-white/70 font-mono tabular-nums min-w-[70px]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Volume */}
                <div
                  className="relative flex items-center gap-2"
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <button
                    onClick={toggleMute}
                    className="text-off-white hover:text-gold transition-colors duration-150 cursor-pointer"
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted || volume === 0 ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {showVolumeSlider && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 80, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.01}
                          value={muted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-20 h-1 accent-gold cursor-pointer"
                          aria-label="Volume"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="text-off-white hover:text-gold transition-colors duration-150 cursor-pointer"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize className="w-5 h-5" />
                  ) : (
                    <Maximize className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
