"use client";

import { useLayoutEffect, useState } from "react";
import { motion } from "motion/react";

const COUNTER_DURATION = 1000;
const CURTAIN_DURATION = 600;

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useLayoutEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const start = performance.now();
    let frame = 0;

    document.body.style.overflow = "hidden";
    document.body.classList.add("preloader-active");

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNTER_DURATION, 1);
      setPercent(Math.round(progress * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const liftTimer = window.setTimeout(() => {
      cancelAnimationFrame(frame);
      setPercent(100);
      setIsLifting(true);
      document.body.classList.add("preloader-revealing");
    }, COUNTER_DURATION);

    const doneTimer = window.setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("preloader-active", "preloader-revealing");
      setIsMounted(false);
    }, COUNTER_DURATION + CURTAIN_DURATION);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(liftTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("preloader-active", "preloader-revealing");
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: isLifting ? "-100%" : "0%" }}
      transition={{
        duration: CURTAIN_DURATION / 1000,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-[#0a0a0a]"
      aria-label="Tianji Curation loading"
    >
      <div className="text-center">
        <p className="whitespace-nowrap font-display text-sm uppercase tracking-[0.55em] text-white/55 md:text-base">
          T I A N J I&nbsp;&nbsp;&nbsp;C U R A T I O N
        </p>
        <p className="mt-10 font-display text-xl font-light tabular-nums tracking-[0.28em] text-white/70 md:text-2xl">
          {String(percent).padStart(2, "0")}%
        </p>
      </div>
    </motion.div>
  );
}
