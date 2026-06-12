"use client";

import type { HTMLMotionProps } from "motion/react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

type TiltCardProps = HTMLMotionProps<"div"> & {
  innerClassName?: string;
};

const springConfig = {
  stiffness: 300,
  damping: 30,
  mass: 0.7,
};

export function TiltCard({
  children,
  className,
  innerClassName,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);

  return (
    <motion.div
      {...props}
      className={cn("transform-gpu will-change-transform", className)}
      style={{
        ...style,
        perspective: 1000,
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(event) => {
        onMouseMove?.(event);

        if (reduceMotion) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event);
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className={cn("relative h-full transform-gpu", innerClassName)}
        style={{
          transform: reduceMotion ? "none" : "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
