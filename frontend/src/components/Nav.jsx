import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
];

function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          border-b border-white/5 px-6 md:px-12 lg:px-20
          ${scrolled ? "nav-scrolled" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-x-2 group">
            <div className="relative w-9 h-9">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#C6FA50]/60 spin-slow-anim" />
              <div className="absolute inset-1 rounded-full bg-[#C6FA50]/20 flex items-center justify-center">
                <span className="text-[#C6FA50] font-black text-sm">D</span>
              </div>
            </div>
            <span className="font-bold text-2xl text-white group-hover:text-[#C6FA50] transition-colors duration-300">
              Digi<span className="text-[#C6FA50]">Labs</span>
            </span>
          </Link>

          {/* ── Desktop Links ─────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group relative text-base font-medium transition-colors duration-300 pb-1
                    ${active ? "text-[#C6FA50]" : "text-gray-300 hover:text-white"}`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C6FA50] transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button
                id="nav-cta-btn"
                className="btn-primary text-sm px-6 py-3"
              >
                Let's Talk →
              </button>
            </Link>
          </div>

          {/* ── Mobile Hamburger ──────────────────────────────── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg border border-white/10 hover:border-[#C6FA50]/40 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            {/* Panel */}
            <div className="absolute top-0 right-0 h-full w-72 bg-[#0a0f1e] border-l border-white/10 px-8 py-24 flex flex-col gap-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    className={`block text-xl font-semibold transition-colors
                      ${location.pathname === link.to ? "text-[#C6FA50]" : "text-gray-300 hover:text-white"}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Link to="/contact">
                  <button className="btn-primary w-full text-base">Let's Talk →</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
