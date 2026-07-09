import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  Company: [
    { label: "Home",     to: "/" },
    { label: "About",    to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact",  to: "/contact" },
  ],
  Services: [
    { label: "AI Integration",     to: "/services" },
    { label: "Process Automation", to: "/services" },
    { label: "Custom Development", to: "/services" },
    { label: "Performance Ops",    to: "/services" },
  ],
  Contact: [
    { label: "hello@digilabs.io",      to: "mailto:hello@digilabs.io" },
    { label: "+91 98765 43210",          to: "tel:+919876543210" },
    { label: "Patna, Bihar, India",      to: "#" },
    { label: "Mon–Fri, 9am–6pm IST",    to: "#" },
  ],
};

const socials = [
  { icon: <FaFacebookSquare />, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: <FaInstagram />,      href: "#", label: "Instagram", color: "#E1306C" },
  { icon: <FaXTwitter />,       href: "#", label: "X (Twitter)", color: "#ffffff" },
  { icon: <FaLinkedin />,       href: "#", label: "LinkedIn", color: "#0A66C2" },
];

function Footer() {
  return (
    <footer id="footer" className="bg-[#07091a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10">

        {/* ── Top row ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-y-6">
            {/* Logo */}
            <div className="flex items-center gap-x-2">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full border-2 border-[#C6FA50]/60" />
                <div className="absolute inset-1 rounded-full bg-[#C6FA50]/20 flex items-center justify-center">
                  <span className="text-[#C6FA50] font-black text-sm">D</span>
                </div>
              </div>
              <span className="font-bold text-2xl text-white">
                Digi<span className="text-[#C6FA50]">Labs</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-powered automation solutions for modern enterprises. We build
              digital experiences that scale, grow, and endure.
            </p>

            {/* Social icons */}
            <div className="flex gap-x-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, color: s.color }}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 text-lg hover:border-white/25 transition-colors duration-300"
                  style={{ color: "inherit" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-gray-400 text-sm hover:text-[#C6FA50] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* ── Bottom row ──────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Digi Labs. All rights reserved.</p>
          <p>
            Made with{" "}
            <span className="text-red-400">❤️</span>{" "}
            by{" "}
            <span className="text-[#C6FA50] font-medium">Rohit Kumar</span>
          </p>
          <div className="flex gap-x-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
