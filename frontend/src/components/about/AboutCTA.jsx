import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

function AboutCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about-cta"
      ref={ref}
      className="bg-[#0a0f1e] py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Radial glow */}
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
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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

export default AboutCTA;
