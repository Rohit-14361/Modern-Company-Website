import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const team = [
  {
    name:     "Rohit Kumar",
    role:     "Founder & CEO",
    bio:      "Full-stack architect with 10+ years building scalable SaaS platforms and leading AI integration projects.",
    initials: "RK",
    color:    "#C6FA50",
    skills:   ["React", "Node.js", "AI/ML"],
  },
  {
    name:     "Priya Sharma",
    role:     "Chief Design Officer",
    bio:      "Award-winning UX designer specializing in data-dense dashboards and conversion-optimized user journeys.",
    initials: "PS",
    color:    "#00ff99",
    skills:   ["Figma", "Design Systems", "UX Research"],
  },
  {
    name:     "Arjun Mehta",
    role:     "Head of Engineering",
    bio:      "DevOps & cloud expert who has architected infrastructure handling 10M+ requests per day with 99.99% uptime.",
    initials: "AM",
    color:    "#00ffff",
    skills:   ["AWS", "Kubernetes", "Python"],
  },
  {
    name:     "Sara Nair",
    role:     "AI Research Lead",
    bio:      "PhD in Machine Learning. Integrates LLMs and custom models into production workflows for enterprise clients.",
    initials: "SN",
    color:    "#f59e0b",
    skills:   ["LLMs", "TensorFlow", "MLOps"],
  },
];

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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-y-5 mb-16"
        >
          <span className="section-badge">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meet the{" "}
            <span className="gradient-text">Minds Behind</span>
            {" "}Digi Labs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A diverse team of engineers, designers, and strategists passionate about
            building digital products that genuinely make a difference.
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
                  style={{
                    background:  `${member.color}20`,
                    border:      `2px solid ${member.color}50`,
                    color:        member.color,
                  }}
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

export default TeamSection;
