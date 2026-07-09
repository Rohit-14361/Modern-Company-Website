import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from "react-icons/hi2";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const infos = [
  {
    icon:    <HiOutlineEnvelope />,
    label:   "Email Us",
    value:   "hello@digilabs.io",
    href:    "mailto:hello@digilabs.io",
    accent:  "#C6FA50",
  },
  {
    icon:    <HiOutlinePhone />,
    label:   "Call Us",
    value:   "+91 98765 43210",
    href:    "tel:+919876543210",
    accent:  "#00ff99",
  },
  {
    icon:    <HiOutlineMapPin />,
    label:   "Visit Us",
    value:   "Patna, Bihar, India — 800001",
    href:    "https://maps.google.com/?q=Patna,Bihar,India",
    accent:  "#00ffff",
  },
  {
    icon:    <HiOutlineClock />,
    label:   "Working Hours",
    value:   "Mon – Fri, 9am – 6pm IST",
    href:    null,
    accent:  "#C6FA50",
  },
];

const socials = [
  { icon: <FaFacebookSquare />, href: "#", label: "Facebook",    color: "#1877F2" },
  { icon: <FaInstagram />,      href: "#", label: "Instagram",   color: "#E1306C" },
  { icon: <FaXTwitter />,       href: "#", label: "X (Twitter)", color: "#ffffff" },
  { icon: <FaLinkedin />,       href: "#", label: "LinkedIn",    color: "#0A66C2" },
];

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-y-8"
    >
      {/* Header */}
      <div className="flex flex-col gap-y-4">
        <span className="section-badge w-fit">Contact Us</span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
          Let's Start a{" "}
          <span className="gradient-text">Conversation</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Have a project in mind? Want to explore what AI can do for your business?
          We'd love to hear from you — drop us a message and we'll be in touch within 2 hours.
        </p>
      </div>

      {/* Info cards */}
      <div className="flex flex-col gap-y-4">
        {infos.map((info) => (
          <div
            key={info.label}
            className="glass-card p-5 flex items-center gap-x-5 group transition-all duration-300 hover:-translate-y-0.5"
          >
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${info.accent}18`, border: `1px solid ${info.accent}35`, color: info.accent }}
            >
              {info.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm text-gray-200 hover:text-[#C6FA50] transition-colors duration-200 font-medium"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sm text-gray-200 font-medium">{info.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-4">Follow Us</p>
        <div className="flex gap-x-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              whileHover={{ scale: 1.12 }}
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 text-lg transition-all duration-300 hover:border-white/30"
              style={{ color: "inherit" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = s.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Live chat pill */}
      <div className="flex items-center gap-x-3 px-5 py-3 rounded-full border border-[#00ff99]/25 bg-[#00ff99]/8 w-fit">
        <span className="w-2 h-2 rounded-full bg-[#00ff99] animate-pulse" />
        <p className="text-sm text-[#00ff99] font-medium">Team is online right now</p>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
