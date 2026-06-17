"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const whispers = [
  "一位资深藏家 正在浏览隐匿之所...",
  "医疗科技领域连续创业者 刚刚申请了会籍",
  "家族信托合伙人 刚刚加入",
  "秩序感，是最高级的自由。",
];

export function LiveWhispers() {
  const [current, setCurrent] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const clearWhisperTimers = () => {
      timeoutsRef.current.forEach((timer) => window.clearTimeout(timer));
      timeoutsRef.current = [];
    };

    const queueTimeout = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timeoutsRef.current.push(timer);
    };

    const showNext = () => {
      const randomMsg = whispers[Math.floor(Math.random() * whispers.length)];
      setCurrent(randomMsg);
      queueTimeout(() => setCurrent(null), 5000);
      queueTimeout(showNext, 8000 + Math.random() * 7000);
    };

    queueTimeout(showNext, 4000);
    return clearWhisperTimers;
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-8 left-6 z-50 md:bottom-12 md:left-10">
      <AnimatePresence>
        {current && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: reduceMotion ? 0.2 : 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 border-l-[1.5px] border-[hsl(var(--accent))]/40 bg-gradient-to-r from-black/80 via-black/40 to-transparent py-2 pl-4 pr-16 backdrop-blur-sm"
          >
            <p className="font-serif text-[11px] leading-relaxed tracking-[0.2em] text-white/60">
              {current}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
