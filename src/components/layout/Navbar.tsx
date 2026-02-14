import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
} as const;

const linkItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" } },
} as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(to: string) {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 lg:px-12 transition-all duration-300",
          scrolled && "bg-bg-primary/90 backdrop-blur-lg border-b border-white/5"
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1.5 shrink-0">
          <span className="font-heading text-gold text-3xl leading-none">3-6</span>
          <span className="font-heading text-off-white text-sm tracking-widest uppercase leading-none">
            Consulting
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "text-sm tracking-wide transition-colors duration-200",
                isActive(to) ? "text-gold" : "text-off-white hover:text-gold"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden ml-auto p-2 text-off-white hover:text-gold transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 flex flex-col items-center justify-center"
          >
            <motion.div
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map(({ label, to }) => (
                <motion.div key={to} variants={linkItemVariants}>
                  <Link
                    to={to}
                    className={cn(
                      "text-3xl font-heading uppercase tracking-wider transition-colors duration-200",
                      isActive(to) ? "text-gold" : "text-off-white hover:text-gold"
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
