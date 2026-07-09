import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { year: "2012", title: "Founded",           desc: "Digi Labs started as a two-person studio focused on web development." },
  { year: "2015", title: "First Enterprise",  desc: "Landed our first Fortune 500 client and expanded to a team of 12." },
  { year: "2018", title: "AI Division",       desc: "Launched our dedicated AI/ML practice, pioneering automation at scale." },
  { year: "2021", title: "Global Expansion",  desc: "Opened offices in 3 countries and surpassed 300 active clients." },
  { year: "2024", title: "500+ Projects",     desc: "Delivered our 500th successful project with zero missed deadlines." },
  { year: "2026", title: "Today & Beyond",    desc: "Continuing to lead the digital transformation revolution worldwide." },
];

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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
          {/* Static vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2"
            aria-hidden="true"
          />
          {/* Animated fill line */}
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
                  <div
                    className={`w-full md:w-[45%]
                      ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                  >
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

export default Timeline;
