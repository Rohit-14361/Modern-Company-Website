import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi2";
import AnimatedCounter from "../common/Stats";

const features = [
  { title: "Tailored Digital Presence",    desc: "Custom platforms that reflect your brand identity and captivate your audience at every touchpoint." },
  { title: "Growth-Driven Innovation",     desc: "Strategic roadmaps and iterative development that adapt to market shifts and scale with your ambitions." },
  { title: "AI-First Architecture",        desc: "Intelligence baked into your products from day one — smarter decisions, faster execution." },
  { title: "24/7 Managed Support",         desc: "Round-the-clock monitoring, maintenance, and optimization so you can focus on what matters most." },
];

const missionStats = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 2,   suffix: "M+", label: "Revenue Generated" },
  { value: 98,  suffix: "%", label: "Client Retention" },
];

function Mission() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeLeft  = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
  const fadeRight = { hidden: { opacity: 0, x:  50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
  const stagger   = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
  const fadeItem  = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section
      id="mission"
      ref={ref}
      className="relative bg-[#0a0f1e] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Aura */}
      <div className="aura-radial w-[600px] h-[600px] bg-[#C6FA50]/5 -bottom-40 -right-40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-badge">Our Mission</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: Headline + Description + Stats ──────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col gap-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Digital Solutions<br />
              That{" "}
              <span className="gradient-text-lime">Scale With You</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              We deliver tailored digital experiences that are simple, scalable, and focused on
              your business growth. Whether you're just starting online or ready to expand, we
              build platforms that evolve with your needs.
            </p>

            {/* Mission stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-white/8">
              {missionStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-y-1">
                  <p className="text-3xl font-black text-white">
                    <AnimatedCounter target={s.value} suffix={s.suffix} duration={1800} />
                  </p>
                  <p className="text-xs text-gray-500 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link to="/about">
                <button id="mission-discover-btn" className="btn-primary text-sm px-6 py-3">
                  Discover Our Story
                </button>
              </Link>
              <Link to="/services">
                <button id="mission-services-btn" className="btn-ghost text-sm px-6 py-3">
                  Our Services ↗
                </button>
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Feature List ───────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col gap-y-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeItem}
                className="glass-card p-6 flex gap-x-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="shrink-0 mt-0.5">
                  <HiCheckCircle className="w-6 h-6 text-[#C6FA50] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
