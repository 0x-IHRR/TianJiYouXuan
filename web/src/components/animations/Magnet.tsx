"use client";

import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnet({ children, className, strength = 3 }: MagnetProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 });

  return (
    <motion.div
      className={className}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={(event) => {
        if (reduceMotion) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const nextX = (event.clientX - rect.left - rect.width / 2) / strength;
        const nextY = (event.clientY - rect.top - rect.height / 2) / strength;
        x.set(nextX);
        y.set(nextY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
