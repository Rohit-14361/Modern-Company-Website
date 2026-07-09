import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const values = [
  {
    icon:   <HiOutlineLightBulb />,
    title:  "Innovation First",
    desc:   "We push the boundaries of what's possible, embracing emerging tech to craft solutions that lead — never follow.",
    accent: "#C6FA50",
  },
  {
    icon:   <HiOutlineUsers />,
    title:  "Client-Centric",
    desc:   "Every line of code, every design decision is driven by one goal: your success. We listen before we build.",
    accent: "#00ff99",
  },
  {
    icon:   <HiOutlineGlobeAlt />,
    title:  "Global Mindset",
    desc:   "Built for scale and diverse markets, our solutions are designed to work seamlessly across borders.",
    accent: "#00ffff",
  },
  {
    icon:   <HiOutlineShieldCheck />,
    title:  "Integrity & Trust",
    desc:   "Transparent communication, honest timelines, and secure delivery — we earn trust with every project.",
    accent: "#C6FA50",
  },
];

function CoreValues() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="core-values"
      ref={ref}
      className="bg-[#050816] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="aura-radial w-[600px] h-[600px] bg-[#C6FA50]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-y-5 mb-16"
        >
          <span className="section-badge">Our Values</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Principles That{" "}
            <span className="gradient-text">Drive Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            These aren't just words on a wall — they're the standards we hold ourselves
            to on every single project.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 flex gap-x-6 group transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:  `${v.accent}18`,
                  border:      `1px solid ${v.accent}35`,
                  color:        v.accent,
                }}
              >
                {v.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C6FA50] transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
