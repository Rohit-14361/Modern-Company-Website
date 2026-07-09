import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuBotMessageSquare,
  LuCode,
  LuRocket,
  LuShield,
  LuZap,
  LuHeadphones,
  LuGlobe,
} from "react-icons/lu";
import { HiMiniArrowTrendingUp, HiOutlineChartBar } from "react-icons/hi2";
import Footer from "../components/Footer";
import AnimatedCounter from "../components/common/Stats";

/* ─── Data ─────────────────────────────────────────────────────── */
const services = [
  {
    id: "ai-integration",
    icon: <LuBotMessageSquare />,
    title: "AI Integration",
    desc: "Embed advanced AI & LLMs into your workflows for intelligent decision-making, automation, and personalised user experiences.",
    accent: "#C6FA50",
    features: ["LLM Pipelines", "Custom Models", "NLP Solutions"],
  },
  {
    id: "process-automation",
    icon: <LuZap />,
    title: "Process Automation",
    desc: "Automate repetitive tasks and complex multi-step workflows, freeing your team to focus on high-value strategic work.",
    accent: "#00ff99",
    features: ["RPA", "API Orchestration", "Workflow Engines"],
  },
  {
    id: "scalable-infrastructure",
    icon: <HiMiniArrowTrendingUp />,
    title: "Scalable Infrastructure",
    desc: "Cloud-native architecture built to handle spikes in demand effortlessly — from startup to enterprise scale.",
    accent: "#00ffff",
    features: ["AWS / GCP", "Kubernetes", "Auto-scaling"],
  },
  {
    id: "custom-development",
    icon: <LuCode />,
    title: "Custom Development",
    desc: "Bespoke web, mobile, and API solutions built precisely to your requirements — no bloat, no compromise.",
    accent: "#C6FA50",
    features: ["React / Next.js", "Node.js / Python", "REST & GraphQL"],
  },
  {
    id: "data-analytics",
    icon: <HiOutlineChartBar />,
    title: "Data & Analytics",
    desc: "Transform raw data into actionable intelligence with interactive dashboards, reports, and predictive models.",
    accent: "#00ff99",
    features: ["Real-time Dashboards", "BI Tools", "ML Forecasting"],
  },
  {
    id: "cybersecurity",
    icon: <LuShield />,
    title: "Security & Compliance",
    desc: "Enterprise-grade security baked in from day one — penetration testing, compliance audits, and data protection.",
    accent: "#00ffff",
    features: ["Pen Testing", "GDPR / ISO 27001", "VAPT"],
  },
  {
    id: "global-deployment",
    icon: <LuGlobe />,
    title: "Global Deployment",
    desc: "Deploy your product to global audiences with CDN, multi-region infrastructure, and localisation support.",
    accent: "#C6FA50",
    features: ["CDN / Edge", "Multi-region DB", "i18n Support"],
  },
  {
    id: "managed-support",
    icon: <LuHeadphones />,
    title: "Managed Support",
    desc: "Round-the-clock monitoring, incident response, and proactive maintenance to keep your systems at peak performance.",
    accent: "#00ff99",
    features: ["24/7 Monitoring", "SLA Backed", "Dedicated Team"],
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 99,  suffix: "%", label: "Uptime Guaranteed" },
  { value: 50,  suffix: "+", label: "Expert Engineers" },
  { value: 30,  suffix: "+", label: "Countries Served" },
];

const process = [
  { step: "01", title: "Discovery",    desc: "We analyse your goals, systems, and pain points to scope the ideal solution." },
  { step: "02", title: "Proposal",     desc: "You receive a detailed technical proposal, timeline, and transparent cost breakdown." },
  { step: "03", title: "Build",        desc: "Our engineers build, test, and iterate in agile sprints with weekly demos." },
  { step: "04", title: "Launch & Grow", desc: "We deploy, monitor, and continuously optimise for lasting impact." },
];

/* ─── Card component ────────────────────────────────────────────── */
function ServiceCard({ service, index, inView }) {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.05 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-7 flex flex-col gap-y-5 group transition-all duration-300 hover:-translate-y-2"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}35`, color: service.accent }}
      >
        {service.icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C6FA50] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
      </div>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {service.features.map((f) => (
          <span
            key={f}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
      />
    </motion.div>
  );
}

/* ─── Main Services page ────────────────────────────────────────── */
function Services() {
  const heroRef      = useRef(null);
  const statsRef     = useRef(null);
  const gridRef      = useRef(null);
  const processRef   = useRef(null);
  const ctaRef       = useRef(null);

  const statsInView   = useInView(statsRef,   { once: true, margin: "-80px" });
  const gridInView    = useInView(gridRef,    { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const ctaInView     = useInView(ctaRef,     { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-[#050816]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="services-hero"
        ref={heroRef}
        className="relative pt-36 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="aura-radial w-[600px] h-[600px] bg-[#C6FA50]/7 -top-40 -left-40" aria-hidden="true" />
        <div className="aura-radial w-[400px] h-[400px] bg-[#00ff99]/6 top-0 -right-20"  aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">Our Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight"
          >
            Solutions Built to{" "}
            <span className="gradient-text">Scale & Succeed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed max-w-2xl"
          >
            From AI integration to global deployment — every service we offer is designed
            to deliver measurable results for modern, ambitious businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/contact">
              <button id="services-cta-btn" className="btn-primary text-base px-8 py-4 glow-lime">
                Get a Free Consultation →
              </button>
            </Link>
            <Link to="/about">
              <button id="services-about-btn" className="btn-ghost text-base px-8 py-4">
                About Us ↗
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-[#0a0f1e] border-y border-white/6 py-12 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-y-1 text-center">
              <p className="text-4xl font-black text-white">
                <AnimatedCounter target={s.value} suffix={s.suffix} duration={1600} />
              </p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
              <div className="mt-1 w-6 h-[2px] bg-[#C6FA50]/50 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────── */}
      <section
        id="services-grid"
        ref={gridRef}
        className="relative bg-[#050816] py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="aura-radial w-[700px] h-[700px] bg-[#00ff99]/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Everything You Need,{" "}
              <span className="gradient-text">Under One Roof</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ──────────────────────────────────────── */}
      <section
        id="how-we-work"
        ref={processRef}
        className="bg-[#0a0f1e] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      >
        <div className="aura-radial w-[500px] h-[500px] bg-[#C6FA50]/6 bottom-0 right-0" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-y-5 mb-16"
          >
            <span className="section-badge">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              From Enquiry to{" "}
              <span className="gradient-text">Live Product</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-7 flex flex-col gap-y-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-4xl font-black gradient-text-lime">{p.step}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#C6FA50] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        id="services-cta"
        ref={ctaRef}
        className="bg-[#050816] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      >
        <div
          className="aura-radial w-[800px] h-[800px] opacity-15"
          style={{
            background: "radial-gradient(circle, #C6FA50 0%, transparent 70%)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-y-8"
        >
          <span className="section-badge">Ready to Start?</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
            Let's Build{" "}
            <span className="gradient-text">Something Extraordinary</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Tell us about your project and get a free consultation with one of our
            senior engineers — no commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <button id="services-bottom-cta" className="btn-primary text-base px-10 py-4 glow-lime">
                Get Free Consultation →
              </button>
            </Link>
            <Link to="/about">
              <button id="services-bottom-about" className="btn-ghost text-base px-10 py-4">
                Meet the Team ↗
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;