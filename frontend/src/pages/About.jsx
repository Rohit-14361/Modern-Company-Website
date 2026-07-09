import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import {
  LuRocket,
  LuHeart,
  LuZap,
  LuCode,
  LuTarget,
} from "react-icons/lu";
import AnimatedCounter from "../components/common/Stats";

/* ─── Data ──────────────────────────────────────────────────── */

const values = [
  {
    icon: <HiOutlineLightBulb />,
    title: "Innovation First",
    desc: "We push the boundaries of what's possible, embracing emerging tech to craft solutions that lead — never follow.",
    accent: "#C6FA50",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Client-Centric",
    desc: "Every line of code, every design decision is driven by one goal: your success. We listen before we build.",
    accent: "#00ff99",
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: "Global Mindset",
    desc: "Built for scale and diverse markets, our solutions are designed to work seamlessly across borders.",
    accent: "#00ffff",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Integrity & Trust",
    desc: "Transparent communication, honest timelines, and secure delivery — we earn trust with every project.",
    accent: "#C6FA50",
  },
];

const team = [
  {
    name: "Rohit Kumar",
    role: "Founder & CEO",
    bio: "Full-stack architect with 10+ years building scalable SaaS platforms and leading AI integration projects.",
    initials: "RK",
    color: "#C6FA50",
    skills: ["React", "Node.js", "AI/ML"],
  },
  {
    name: "JayPrakash Kumar",
    role: "Chief Design Officer",
    bio: "Award-winning UX designer specializing in data-dense dashboards and conversion-optimized user journeys.",
    initials: "PS",
    color: "#00ff99",
    skills: ["Figma", "Design Systems", "UX Research"],
  },
  {
    name: "Raja Kumar",
    role: "Head of Engineering",
    bio: "DevOps & cloud expert who has architected infrastructure handling 10M+ requests per day with 99.99% uptime.",
    initials: "AM",
    color: "#00ffff",
    skills: ["AWS", "Kubernetes", "Python"],
  },
  {
    name: "Aniket Kumar",
    role: "AI Research Lead",
    bio: "PhD in Machine Learning. Integrates LLMs and custom models into production workflows for enterprise clients.",
    initials: "SN",
    color: "#f59e0b",
    skills: ["LLMs", "TensorFlow", "MLOps"],
  },
];

const milestones = [
  { year: "2012", title: "Founded",           desc: "Digi Labs started as a two-person studio focused on web development." },
  { year: "2015", title: "First Enterprise",  desc: "Landed our first Fortune 500 client and expanded to a team of 12." },
  { year: "2018", title: "AI Division",       desc: "Launched our dedicated AI/ML practice, pioneering automation at scale." },
  { year: "2021", title: "Global Expansion",  desc: "Opened offices in 3 countries and surpassed 300 active clients." },
  { year: "2024", title: "500+ Projects",     desc: "Delivered our 500th successful project with zero missed deadlines." },
  { year: "2026", title: "Today & Beyond",    desc: "Continuing to lead the digital transformation revolution worldwide." },
];

const aboutStats = [
  { value: 12,  suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 50,  suffix: "+", label: "Team Members" },
  { value: 30,  suffix: "+", label: "Countries Served" },
];

/* ─── Animation helpers ─────────────────────────────────────── */
const fadeUp   = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

/* ─── Section: Hero ─────────────────────────────────────────── */
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
              Digi Labs is an AI-powered digital transformation company helping
              modern enterprises automate, innovate, and grow. Since 2012, we've
              delivered over 500 projects across 30+ countries with a relentless
              focus on quality and results.
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

/* ─── Section: Our Story ────────────────────────────────────── */
function OurStory() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="our-story"
      ref={ref}
      className="bg-[#0a0f1e] py-28 px-6 md:px-12 lg:px-20 overflow-hidden relative"
    >
      <div className="aura-radial w-[500px] h-[500px] bg-[#00ff99]/5 bottom-0 right-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left — visual card stack */}
        <motion.div
          variants={fadeLeft(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          {/* Main card */}
          <div className="glass-card p-10 flex flex-col gap-y-6 relative z-10">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#C6FA50]/15 border border-[#C6FA50]/30 flex items-center justify-center text-[#C6FA50] text-2xl float-anim">
              <LuRocket />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To democratize digital transformation — making AI-powered automation
              accessible, reliable, and impactful for businesses of every size, everywhere.
            </p>
            <div className="flex gap-3 flex-wrap">
              {["Innovation", "Scale", "Trust", "Impact"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C6FA50]/10 border border-[#C6FA50]/25 text-[#C6FA50]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative floating pill */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 glass-card px-5 py-4 flex items-center gap-x-3 z-20"
          >
            <div className="w-3 h-3 rounded-full bg-[#00ff99] animate-pulse" />
            <p className="text-sm text-white font-semibold">500+ Happy Clients</p>
          </motion.div>

          {/* Decorative bg card */}
          <div className="absolute -top-4 -left-4 w-full h-full glass-card opacity-40 rounded-2xl -z-10" />
        </motion.div>

        {/* Right — Story text */}
        <motion.div
          variants={fadeRight(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col gap-y-7"
        >
          <span className="section-badge w-fit">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            12 Years of{" "}
            <span className="gradient-text-lime">Building What Matters</span>
          </h2>
          <div className="flex flex-col gap-y-5 text-gray-400 text-base leading-relaxed">
            <p>
              Digi Labs was born in 2012 from a simple belief: that great software changes lives.
              What started as a two-person freelance studio in a small co-working space quickly
              evolved into a full-service digital transformation powerhouse.
            </p>
            <p>
              Our breakthrough came in 2018 when we launched our dedicated AI practice — long
              before "AI" became a buzzword. We spent years quietly building the expertise that
              now powers automation for some of the world's leading enterprises.
            </p>
            <p>
              Today, our 50+ team spans designers, engineers, data scientists, and strategists
              united by one purpose: to help businesses unlock their full potential through
              intelligent digital solutions.
            </p>
          </div>
          <div className="flex items-center gap-x-4 pt-2">
            <div className="flex gap-x-2">
              {[LuZap, LuHeart, LuTarget].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/4 flex items-center justify-center text-[#C6FA50] text-lg"
                >
                  <Icon />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">Speed · Passion · Precision</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Section: Core Values ──────────────────────────────────── */
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
      <div className="aura-radial w-[600px] h-[600px] bg-[#C6FA50]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
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
                style={{ background: `${v.accent}18`, border: `1px solid ${v.accent}35`, color: v.accent }}
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

/* ─── Section: Team ─────────────────────────────────────────── */
function TeamSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      ref={ref}
      className="bg-[#0a0f1e] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="aura-radial w-[500px] h-[500px] bg-[#00ffff]/5 top-0 left-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center text-center gap-y-5 mb-16"
        >
          <span className="section-badge">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meet the{" "}
            <span className="gradient-text">Minds Behind</span>
            {" "}Digi Labs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A diverse team of engineers, designers, and strategists passionate about building
            digital products that genuinely make a difference.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              id={`team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-7 flex flex-col gap-y-5 group text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center gap-y-4">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black transition-transform duration-300 group-hover:scale-105 mx-auto"
                  style={{ background: `${member.color}20`, border: `2px solid ${member.color}50`, color: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C6FA50] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: member.color }}>
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed text-center">{member.bio}</p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Timeline ─────────────────────────────────────── */
function Timeline() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="bg-[#050816] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="aura-radial w-[500px] h-[500px] bg-[#C6FA50]/6 bottom-0 right-0" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */} 
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center text-center gap-y-5 mb-20"
        >
          <span className="section-badge">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            12 Years of{" "}
            <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2" aria-hidden="true" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#C6FA50] via-[#00ff99] to-[#00ffff] -translate-x-1/2"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center gap-x-8 md:gap-x-0
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                    pl-16 md:pl-0`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
                      <span className="gradient-text-lime text-sm font-bold uppercase tracking-widest">
                        {m.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[#C6FA50] transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C6FA50] border-4 border-[#050816] z-10 shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: CTA ──────────────────────────────────────────── */
function AboutCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about-cta"
      ref={ref}
      className="bg-[#0a0f1e] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Glow */}
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
        variants={fadeUp(0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-y-8"
      >
        <span className="section-badge">Join the Journey</span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
          Ready to Build{" "}
          <span className="gradient-text">Something Great</span>?
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Whether you're a startup or an enterprise, we have the expertise and passion
          to transform your digital vision into a reality that scales.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <button id="about-cta-primary" className="btn-primary text-base px-10 py-4 glow-lime">
              Start Your Project →
            </button>
          </Link>
          <Link to="/services">
            <button id="about-cta-services" className="btn-ghost text-base px-10 py-4">
              Explore Services ↗
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Main About Page ───────────────────────────────────────── */
function About() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <AboutHero />
      <OurStory />
      <CoreValues />
      <TeamSection />
      <Timeline />
      <AboutCTA />
      <Footer />
    </div>
  );
}

export default About;