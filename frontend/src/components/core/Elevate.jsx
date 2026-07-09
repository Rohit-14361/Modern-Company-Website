import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/* ── Technology / partner marquee items ─────────────────────── */
const techItems = [
  { label: "React",        color: "#61DAFB" },
  { label: "Next",      color: "#61DAFB" },
  { label: "Express",        color: "#61DAFB" },
  { label: "Node.js",      color: "#8CC84B" },
  { label: "Python",       color: "#FFD43B" },
  { label: "OpenAI",       color: "#ffffff" },
  { label: "AWS",          color: "#FF9900" },
  { label: "PostgreSQL",   color: "#336791" },
  { label: "Docker",       color: "#2496ED" },
  { label: "Razorpay",       color: "#635BFF" },
];

/* ── Floating particle dots ─────────────────────────────────── */
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top:  `${Math.floor(Math.random() * 80 + 10)}%`,
  left: `${Math.floor(Math.random() * 80 + 10)}%`,
  delay: i * 0.4,
  size: i % 3 === 0 ? "w-2 h-2" : "w-1.5 h-1.5",
}));

function Elevate() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative bg-[#0a0f1e] py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ── Radial lime glow ───────────────────────────────── */}
      <div
        className="aura-radial w-[900px] h-[900px] opacity-20"
        style={{
          background: "radial-gradient(circle, #C6FA50 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />

      {/* ── Floating particles ──────────────────────────────── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full bg-[#C6FA50]/20 ${p.size}`}
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + p.delay, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Headline & CTA ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-y-8"
          >
            <span className="section-badge w-fit">Ready to Launch?</span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight">
              Ready to{" "}
              <span className="gradient-text">Elevate</span>
              <br />
              Your Brand?
            </h2>

            <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
              Let's talk about your vision and build a digital experience that drives
              real, measurable growth. Your transformation starts here.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button id="elevate-cta-btn" className="btn-primary text-base px-8 py-4 glow-lime">
                  Start a Conversation →
                </button>
              </Link>
              <Link to="/about">
                <button id="elevate-learn-btn" className="btn-ghost text-base px-8 py-4">
                  Learn About Us
                </button>
              </Link>
            </div>

            {/* Social proof line */}
            <div className="flex items-center gap-x-3">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["#C6FA50", "#00ff99", "#00ffff", "#f59e0b"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0a0f1e] flex items-center justify-center text-xs font-bold"
                    style={{ background: c, color: "#050816", zIndex: 4 - i }}
                  >
                    {["R", "S", "A", "P"][i]}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">500+ businesses</span> already growing with us
              </p>
            </div>
          </motion.div>

          {/* ── Right: Quick Contact Card ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-8 flex flex-col gap-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                <p className="text-gray-400 text-sm">We typically respond within 2 hours.</p>
              </div>

              <div className="flex flex-col gap-y-4">
                <input
                  id="elevate-name-input"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C6FA50]/50 focus:ring-1 focus:ring-[#C6FA50]/30 transition-all"
                />
                <input
                  id="elevate-email-input"
                  type="email"
                  placeholder="Work email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C6FA50]/50 focus:ring-1 focus:ring-[#C6FA50]/30 transition-all"
                />
                <textarea
                  id="elevate-message-input"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C6FA50]/50 focus:ring-1 focus:ring-[#C6FA50]/30 transition-all resize-none"
                />
                <Link to="/contact">
                  <button
                    id="elevate-send-btn"
                    className="btn-primary w-full text-base py-4"
                  >
                    Send Message →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tech Marquee Strip ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <p className="text-center text-gray-600 text-sm font-medium mb-8 uppercase tracking-widest">
            Technologies We Excel In
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0f1e] to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0f1e] to-transparent" />

            <div className="flex overflow-hidden">
              <div className="marquee-track">
                {[...techItems, ...techItems].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-x-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/3 whitespace-nowrap text-sm font-medium text-gray-300 hover:border-white/25 hover:text-white transition-all"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: t.color }}
                    />
                    {t.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Elevate;
