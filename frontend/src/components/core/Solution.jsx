import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuBotMessageSquare } from "react-icons/lu";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { HiShieldCheck } from "react-icons/hi2";
import { LuCode } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";

const services = [
  {
    id: "ai-integration",
    icon:    <LuBotMessageSquare />,
    title:   "AI Integration",
    desc:    "Seamlessly embed advanced AI models into your workflows for intelligent decision-making and automation.",
    accent:  "#C6FA50",
  },
  {
    id: "scalable-solutions",
    icon:    <HiMiniArrowTrendingUp />,
    title:   "Scalable Solutions",
    desc:    "Infrastructure that grows with your business — handling surges in demand effortlessly and reliably.",
    accent:  "#00ff99",
  },
  {
    id: "process-automation",
    icon:    <BiRightTopArrowCircle />,
    title:   "Process Automation",
    desc:    "Automate repetitive tasks and complex workflows to free your team for strategic, high-value work.",
    accent:  "#00ffff",
  },
  {
    id: "secure-by-design",
    icon:    <HiShieldCheck />,
    title:   "Secure by Design",
    desc:    "Enterprise-grade security built in from day one — data privacy, compliance, and resilience.",
    accent:  "#C6FA50",
  },
  {
    id: "custom-development",
    icon:    <LuCode />,
    title:   "Custom Development",
    desc:    "Bespoke web, mobile, and API solutions tailored precisely to your business requirements.",
    accent:  "#00ff99",
  },
  {
    id: "performance-ops",
    icon:    <MdSpeed />,
    title:   "Performance Ops",
    desc:    "Continuous monitoring, optimisation, and SLA-backed support to keep your systems at peak speed.",
    accent:  "#00ffff",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ServiceCard({ service, index }) {
  return (
    <motion.div
      id={service.id}
      variants={cardVariants}
      custom={index}
      className="glass-card p-7 flex flex-col gap-y-5 group cursor-default
                 transition-all duration-400 hover:-translate-y-2"
      style={{ "--card-accent": service.accent }}
    >
      {/* Icon bubble */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl
                   transition-all duration-300 group-hover:scale-110"
        style={{
          background:  `${service.accent}18`,
          border:      `1px solid ${service.accent}35`,
          color:        service.accent,
        }}
      >
        {service.icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C6FA50] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
      </div>

      {/* Bottom accent line */}
      <div
        className="mt-auto h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
      />
    </motion.div>
  );
}

function Solution() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative bg-[#050816] py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Aura */}
      <div className="aura-radial w-[700px] h-[700px] bg-[#00ff99]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-y-5 mb-16"
        >
          <span className="section-badge">Powerful Solutions</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Scale & Succeed</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Comprehensive automation and digital tools designed to transform your operations
            and accelerate measurable business outcomes.
          </p>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Solution;
