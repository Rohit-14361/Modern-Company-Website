import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuSearch, LuPen, LuCode, LuRocket } from "react-icons/lu";

const steps = [
  {
    no:    "01",
    icon:  <LuSearch />,
    title: "Discover",
    desc:  "Understand your goals, users, and workflows — then map the fastest path to value.",
    accent: "#C6FA50",
  },
  {
    no:    "02",
    icon:  <LuPen />,
    title: "Design",
    desc:  "Prototype the experience and define the architecture for reliable, scalable automation.",
    accent: "#00ff99",
  },
  {
    no:    "03",
    icon:  <LuCode />,
    title: "Develop",
    desc:  "Build integrations and automations with clean engineering and measurable outcomes.",
    accent: "#00ffff",
  },
  {
    no:    "04",
    icon:  <LuRocket />,
    title: "Deploy",
    desc:  "Launch, monitor, and iterate — so your solution keeps improving long after go-live.",
    accent: "#C6FA50",
  },
];

function OurProcess() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="our-process"
      ref={ref}
      className="relative bg-[#050816] py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="aura-radial w-[500px] h-[500px] bg-[#C6FA50]/6 bottom-0 left-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-y-5 mb-20"
        >
          <span className="section-badge">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            A Clear Workflow —{" "}
            <span className="gradient-text">From Idea to Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            We keep everything structured so your automation scales smoothly from concept to
            continuous delivery.
          </p>
        </motion.div>

        {/* ── Steps ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Desktop connecting line */}
          <div className="absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" aria-hidden="true" />

          {/* Animated fill line */}
          <motion.div
            className="absolute top-10 left-0 h-[1px] bg-gradient-to-r from-[#C6FA50] via-[#00ff99] to-[#00ffff] hidden lg:block"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            aria-hidden="true"
          />

          {steps.map((s, idx) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass-card p-7 flex flex-col gap-y-5 transition-all duration-400 hover:-translate-y-2"
            >
              {/* Step number + icon */}
              <div className="flex items-center gap-x-4">
                {/* Number dot */}
                <div
                  className="relative w-11 h-11 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background:   `${s.accent}18`,
                    borderColor:  `${s.accent}50`,
                  }}
                >
                  <span className="font-black text-xs" style={{ color: s.accent }}>{s.no}</span>
                </div>
                {/* Icon */}
                <div
                  className="text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ color: s.accent }}
                >
                  {s.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C6FA50] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="mt-auto h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
              />

              {/* Connector arrow between cards (desktop) */}
              {idx < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3.5 top-9 w-7 h-7 rounded-full border-2 border-white/10 bg-[#050816] hidden lg:flex items-center justify-center text-gray-500 text-xs z-10"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
