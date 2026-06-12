"use client";

import { motion, useReducedMotion } from "motion/react";

export function ScrollIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2" aria-hidden="true">
      <motion.div
        className="w-px bg-white/70"
        initial={{ height: 0, opacity: 0 }}
        animate={reduceMotion ? { height: 40, opacity: 0.7 } : { height: [0, 40, 0], opacity: [0, 1, 0] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }
        }
      />
    </div>
  );
}
