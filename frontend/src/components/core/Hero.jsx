import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Wave from "../Wave";
import AnimatedCounter from "../common/Stats";

/* ── Stagger variants ──────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 99,  suffix: "%", label: "Uptime Guarantee" },
  { value: 50,  suffix: "+", label: "Expert Team" },
  { value: 12,  suffix: "",  label: "Years of Excellence" },
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center bg-[#050816] pt-32 pb-0 text-white overflow-hidden min-h-screen"
    >
      {/* ── Background auras ─────────────────────────────── */}
      <div
        className="aura-radial w-[700px] h-[700px] bg-[#C6FA50]/8 -top-60 -left-60"
        aria-hidden="true"
      />
      <div
        className="aura-radial w-[500px] h-[500px] bg-[#00ff99]/6 -top-40 -right-40"
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span className="section-badge mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FA50] inline-block animate-pulse" />
            ✦ AI-Powered · Trusted by 500+ Businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight"
        >
          Empowering Your Business
          <br />
          Through{" "}
          <span className="gradient-text">Digital Transformation</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="mt-7 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          We build scalable, AI-driven software solutions that automate operations,
          accelerate growth, and future-proof modern enterprises.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <button id="hero-cta-primary" className="btn-primary text-base px-8 py-4 glow-lime">
              Get Started — It's Free
            </button>
          </Link>
          <Link to="/services">
            <button id="hero-cta-secondary" className="btn-ghost text-base px-8 py-4">
              View Our Work ↗
            </button>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-y-1">
              <p className="text-3xl md:text-4xl font-extrabold text-white">
                <AnimatedCounter target={s.value} suffix={s.suffix} duration={1800} />
              </p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
              <div className="mt-1 w-8 h-[2px] bg-[#C6FA50]/50 rounded-full" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── 3-D Wave Canvas ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="relative z-10 w-full h-[300px] md:h-[480px] lg:h-[560px] mt-10"
      >
        <Wave />
      </motion.div>
    </section>
  );
}

export default Hero;
