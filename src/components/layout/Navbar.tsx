import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Premium", href: "/premium" },
  { name: "Blog", href: "/blog" },
  { name: "Tools", href: "/tools" },
  { name: "Portfolio", href: "/portfolio" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-white/5 shadow-sm py-3"
          : "bg-transparent border-b border-white/5 py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all">
            <Brain size={18} />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight uppercase text-white group-hover:text-brand-blue transition-colors">
            Wadan<span className="text-brand-blue">Momand</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white relative py-2",
                  location.pathname === link.href
                    ? "text-white"
                    : "text-slate-400"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors shadow-md shadow-slate-900/10 hover:shadow-lg"
          >
            Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/5 shadow-xl p-4 md:hidden flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 mx-4 px-5 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold text-center"
            >
              Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
