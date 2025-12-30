import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import opsfuxionLogo from "@/assets/opsfuxion-logo.jpg";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isApplyPage = location.pathname === "/apply";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Apply", path: "/apply" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - Embossed Style */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden embossed-logo">
            <img
              src={opsfuxionLogo}
              alt="OpsFuxion Logo"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30 pointer-events-none" />
          </div>
          <div className="hidden sm:block">
            <span className="font-orbitron font-bold text-lg tracking-wider embossed-text">
              Ops<span className="text-primary">Fu</span>
              <span className="gold-text">X</span>
              <span className="text-primary">ion</span>
            </span>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Orchestrate Intelligence
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "neon-text"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      style={{ boxShadow: "0 0 10px hsl(var(--neon-blue))" }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button - Hidden on Apply page */}
          {!isApplyPage && (
            <Link
              to="/apply"
              className="hidden md:inline-block btn-neon text-sm py-2 px-4 md:py-3 md:px-6 font-orbitron"
            >
              Apply Now
            </Link>
          )}

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/50"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-3 font-medium text-sm transition-colors ${
                      location.pathname === link.path
                        ? "neon-text bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {!isApplyPage && (
                <li className="px-4 pt-4">
                  <Link
                    to="/apply"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block btn-neon text-sm py-3 px-6 font-orbitron text-center"
                  >
                    Apply Now
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
