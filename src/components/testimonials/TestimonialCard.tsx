import type { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-bg-secondary rounded-xl p-8 border border-white/5 h-full flex flex-col">
      <span
        className="text-gold text-5xl font-heading leading-none mb-4"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="text-off-white leading-relaxed flex-1 italic">
        {testimonial.quote}
      </p>

      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="font-heading text-lg text-off-white">
          {testimonial.name}
        </p>
        <p className="text-gold text-sm mt-1">
          {testimonial.role}, {testimonial.organization}
        </p>
      </div>
    </div>
  );
}
