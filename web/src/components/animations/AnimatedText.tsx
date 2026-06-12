"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const characters = Array.from(text);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {characters.map((character, index) => (
        <CharacterReveal
          key={`${character}-${index}`}
          character={character}
          index={index}
          length={characters.length}
          progress={scrollYProgress}
          reduceMotion={Boolean(reduceMotion)}
        />
      ))}
    </p>
  );
}

function CharacterReveal({
  character,
  index,
  length,
  progress,
  reduceMotion,
}: {
  character: string;
  index: number;
  length: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduceMotion: boolean;
}) {
  const start = index / length;
  const end = Math.min(1, start + 0.18);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span
      aria-hidden="true"
      style={{ opacity: reduceMotion ? 1 : opacity }}
      className="inline-block whitespace-pre-wrap"
    >
      {character}
    </motion.span>
  );
}
