import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuRocket, LuZap, LuHeart, LuTarget } from "react-icons/lu";

const fadeLeft  = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});
const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

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
            <div className="w-14 h-14 rounded-2xl bg-[#C6FA50]/15 border border-[#C6FA50]/30 flex items-center justify-center text-[#C6FA50] text-2xl float-anim">
              <LuRocket />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To democratize digital transformation — making AI-powered automation accessible,
              reliable, and impactful for businesses of every size, everywhere.
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

          {/* Floating pill */}
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
              Digi Labs was born in 2012 from a simple belief: that great software changes
              lives. What started as a two-person freelance studio quickly evolved into a
              full-service digital transformation powerhouse.
            </p>
            <p>
              Our breakthrough came in 2018 when we launched our dedicated AI practice —
              long before "AI" became a buzzword. We spent years quietly building the
              expertise that now powers automation for leading enterprises worldwide.
            </p>
            <p>
              Today, our 50+ team spans designers, engineers, data scientists, and
              strategists united by one purpose: to help businesses unlock their full
              potential through intelligent digital solutions.
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

export default OurStory;
