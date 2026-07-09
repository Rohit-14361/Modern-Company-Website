import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * AnimatedCounter — counts up from 0 to `target` when it enters the viewport.
 * @param {number}  target   — final value to count up to
 * @param {string}  suffix   — appended after the number (e.g. "+", "%")
 * @param {number}  duration — total animation duration in ms (default 2000)
 */
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref               = useRef(null);
  const inView            = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    const start     = performance.now();
    const startVal  = 0;

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startVal + eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}

export default AnimatedCounter;
