"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState } from "react";

type EntranceItem = {
  number: string;
  title: string;
  href: string;
  image: string;
  alt: string;
};

type EntranceHoverRevealProps = {
  items: EntranceItem[];
};

export function EntranceHoverReveal({ items }: EntranceHoverRevealProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 180, damping: 26, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 26, mass: 0.35 });
  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <div
      className="relative mx-auto max-w-7xl"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden aspect-video w-[min(34rem,38vw)] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-[0_34px_100px_rgba(0,0,0,0.72)] md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: activeItem ? 1 : 0,
          scale: activeItem ? 1 : 0.84,
          rotate: activeItem ? -1.5 : -5,
        }}
        transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        {activeItem ? (
          <>
            <Image
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.alt}
              fill
              loading="eager"
              sizes="38vw"
              className="object-cover opacity-90 saturate-[0.82]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/10" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_12%,rgba(255,255,255,0.16)_36%,transparent_54%)] opacity-70 mix-blend-screen" />
          </>
        ) : null}
      </motion.div>

      <div className="space-y-0">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={(event) => {
              setActiveIndex(index);
              mouseX.set(event.clientX);
              mouseY.set(event.clientY);
            }}
            onMouseMove={(event) => {
              mouseX.set(event.clientX);
              mouseY.set(event.clientY);
            }}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            className="group flex w-full items-baseline gap-5 border-t border-white/10 py-9 text-white/40 transition-colors duration-500 last:border-b hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70 md:gap-10 md:py-12"
          >
            <span className="font-display text-xl tracking-[0.28em] text-[hsl(var(--accent))]/70 md:text-2xl">
              {item.number}
            </span>
            <span className="text-metal font-serif text-5xl leading-none transition-transform duration-500 group-hover:translate-x-3 md:text-7xl">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
