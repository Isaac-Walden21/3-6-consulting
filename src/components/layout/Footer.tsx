import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t-2 border-gold pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 - Brand */}
          <div>
            <div className="font-heading text-2xl text-gold tracking-wide">
              3-6 <span className="text-off-white">CONSULTING</span>
            </div>
            <p className="mt-4 text-light-gray leading-relaxed">
              Protecting what matters most.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h3 className="font-heading text-gold text-lg mb-4 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-light-gray hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h3 className="font-heading text-gold text-lg mb-4 tracking-wide">
              CONTACT
            </h3>
            <a
              href="mailto:michael@3-6consulting.com"
              className="text-light-gray hover:text-gold transition-colors duration-200"
            >
              michael@3-6consulting.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-light-gray/60">
            &copy; {new Date().getFullYear()} 3-6 Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
