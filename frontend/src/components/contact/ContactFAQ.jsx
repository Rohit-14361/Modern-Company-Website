import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "../common/Stats";

const faqStats = [
  { value: 2,   suffix: "hr",  label: "Avg. Response Time" },
  { value: 98,  suffix: "%",   label: "Client Satisfaction" },
  { value: 500, suffix: "+",   label: "Projects Completed" },
];

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We respond to all enquiries within 2 business hours during Mon–Fri 9am–6pm PST.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely! We love working with startups and have flexible engagement models to suit any budget.",
  },
  {
    q: "Can you handle the full project end-to-end?",
    a: "Yes — from discovery and design through development, deployment, and ongoing support.",
  },
];

function ContactFAQ() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact-faq"
      ref={ref}
      className="bg-[#0a0f1e] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="aura-radial w-[500px] h-[500px] bg-[#C6FA50]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-y-8"
        >
          <div>
            <span className="section-badge">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-5 mb-4 tracking-tight">
              Trusted by <span className="gradient-text-lime">500+ Businesses</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              From solo founders to enterprise teams, Digi Labs has been the digital
              partner that delivers — on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {faqStats.map((s) => (
              <div key={s.label} className="glass-card p-5 flex flex-col gap-y-1 text-center">
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter target={s.value} suffix={s.suffix} duration={1500} />
                </p>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — FAQs */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-y-4"
        >
          <h3 className="text-xl font-bold text-white mb-2">Common Questions</h3>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="glass-card p-6 group hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="font-semibold text-white mb-2 group-hover:text-[#C6FA50] transition-colors duration-300">
                {faq.q}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactFAQ;
