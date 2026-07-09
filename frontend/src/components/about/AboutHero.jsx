import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedCounter from "../common/Stats";

const aboutStats = [
  { value: 12,  suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 50,  suffix: "+", label: "Team Members" },
  { value: 30,  suffix: "+", label: "Countries Served" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative bg-[#050816] pt-36 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Auras */}
      <div className="aura-radial w-[600px] h-[600px] bg-[#C6FA50]/7 -top-40 -left-40" aria-hidden="true" />
      <div className="aura-radial w-[400px] h-[400px] bg-[#00ff99]/6 top-0 -right-20"   aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-y-7"
          >
            <motion.div variants={fadeUp(0)}>
              <span className="section-badge">About Us</span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.1)}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight"
            >
              We Build the{" "}
              <span className="gradient-text">Digital Future</span>
              <br />
              You Deserve
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              className="text-gray-400 text-xl leading-relaxed max-w-xl"
            >
              Digi Labs is an AI-powered digital transformation company helping modern
              enterprises automate, innovate, and grow. Since 2012, we've delivered over
              500 projects across 30+ countries with a relentless focus on quality and results.
            </motion.p>

            <motion.div variants={fadeUp(0.3)} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button id="about-hero-cta" className="btn-primary text-base px-8 py-4 glow-lime">
                  Work With Us →
                </button>
              </Link>
              <Link to="/services">
                <button id="about-services-btn" className="btn-ghost text-base px-8 py-4">
                  Our Services ↗
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Stat grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-5"
          >
            {aboutStats.map((s) => (
              <div key={s.label} className="glass-card p-7 flex flex-col gap-y-2">
                <p className="text-4xl font-black text-white">
                  <AnimatedCounter target={s.value} suffix={s.suffix} duration={1800} />
                </p>
                <p className="text-gray-400 text-sm font-medium">{s.label}</p>
                <div className="mt-2 w-8 h-[2px] bg-[#C6FA50]/60 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
