"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const galleryItems = [
  {
    title: "Sanctuary Lobby",
    subtitle: "隐匿之所的第一道安静",
    src: "/media/generated/tianji/spaces-lobby-sanctuary.png",
    rotate: -8,
    width: "clamp(14rem, 24vw, 28rem)",
  },
  {
    title: "Gifting Token",
    subtitle: "商务馈赠的克制凭证",
    src: "/media/generated/tianji/curation-black-gift-card.png",
    rotate: 7,
    width: "clamp(13rem, 20vw, 24rem)",
  },
  {
    title: "Threshold",
    subtitle: "秩序感来自边界",
    src: "/media/generated/tianji/membership-threshold-tunnel.png",
    rotate: 5,
    width: "clamp(15rem, 25vw, 30rem)",
  },
  {
    title: "Long View",
    subtitle: "真实关系慢慢显影",
    src: "/media/generated/tianji/philosophy-hourglass-black-sand.png",
    rotate: -5,
    width: "clamp(12rem, 19vw, 23rem)",
  },
  {
    title: "Weekly Rhythm",
    subtitle: "同频关系在圆桌中沉淀",
    src: "/media/generated/tianji/events-blurred-roundtable.png",
    rotate: 0,
    width: "clamp(16rem, 28vw, 34rem)",
  },
  {
    title: "Tea Silence",
    subtitle: "空间秩序里的低声交流",
    src: "/media/generated/tianji/spaces-tea-ceremony.png",
    rotate: -3,
    width: "clamp(13rem, 22vw, 27rem)",
  },
  {
    title: "Inner Pass",
    subtitle: "圈层通行凭证",
    src: "/media/generated/tianji/curation-silver-card-walnut.png",
    rotate: 6,
    width: "clamp(14rem, 23vw, 28rem)",
  },
  {
    title: "Film Frame",
    subtitle: "品牌影像的窗口",
    src: "/media/homepage-layers/film-window-frame.png",
    rotate: 4,
    width: "clamp(12rem, 20vw, 25rem)",
  },
  {
    title: "Compact Film",
    subtitle: "关系在暗处显影",
    src: "/media/homepage-layers/film-window-compact.png",
    rotate: -7,
    width: "clamp(12rem, 19vw, 23rem)",
  },
  {
    title: "Clean Field",
    subtitle: "选择之前的留白",
    src: "/media/homepage-clean-background-v1.png",
    rotate: 8,
    width: "clamp(15rem, 26vw, 32rem)",
  },
  {
    title: "Banner Dark",
    subtitle: "私密会所的底色",
    src: "/media/style-reference/brand-banner-dark.png",
    rotate: -2,
    width: "clamp(16rem, 28vw, 34rem)",
  },
  {
    title: "Brand Mark",
    subtitle: "身份不是噪音",
    src: "/media/style-reference/brand-logo-light.jpeg",
    rotate: 5,
    width: "clamp(12rem, 18vw, 22rem)",
  },
];

const galleryLoops = 1;
const orderedPaths = galleryItems.map((_, index) => ({
  fromX: 0,
  fromY: 0,
  outX: index % 2 === 0 ? -1200 : 1200,
  outY: 0,
  exitRotate: index % 2 === 0 ? -3 : 3,
}));

const itemDuration = 0.14;
const itemSpacing = (1 - itemDuration) / (galleryItems.length - 1);

function clampUnit(value: number) {
  return Math.max(0, Math.min(1, value));
}

function easeInOut(value: number) {
  return value * value * (3 - 2 * value);
}

function phaseToDepth(phase: number, item: (typeof galleryItems)[number], index: number) {
  const path = orderedPaths[index % orderedPaths.length];

  if (phase < 0.42) {
    const t = easeInOut(phase / 0.42);

    return {
      z: -2000 + t * 1900,
      x: path.fromX,
      y: path.fromY,
      scale: 0.72 + t * 0.26,
      opacity: clampUnit(t * 1.18),
      rotate: item.rotate + (item.rotate * 0.16 - item.rotate) * t,
    };
  }

  if (phase < 0.68) {
    const t = easeInOut((phase - 0.42) / 0.26);

    return {
      z: -100 + t * 120,
      x: 0,
      y: 0,
      scale: 0.98 + t * 0.02,
      opacity: 1,
      rotate: item.rotate * 0.16 + (item.rotate * 0.02 - item.rotate * 0.16) * t,
    };
  }

  if (phase < 1) {
    const t = easeInOut((phase - 0.68) / 0.32);

    return {
      z: 20 + t * 360,
      x: path.outX * t,
      y: path.outY,
      scale: 1 - t * 0.08,
      opacity: 1 - t,
      rotate: item.rotate * 0.02 + (path.exitRotate - item.rotate * 0.02) * t,
    };
  }

  return {
    z: -2000,
    x: 0,
    y: 0,
    scale: 0.72,
    opacity: 0,
    rotate: item.rotate,
  };
}

export function FlyThroughGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[200svh] w-full bg-[#0a0a0a] md:h-[350vh]"
      style={{ contentVisibility: "auto" }}
      aria-label="天机优选影像廊"
    >
      <div className="sticky top-0 flex h-[100vh] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_28%,rgba(0,0,0,0.62)_76%)]" />

        <div
          className="relative h-full w-full transform-gpu will-change-transform"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {galleryItems.map((item, index) => (
            <FlyThroughCard
              key={item.title}
              item={item}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>
    </section>
  );
}

function FlyThroughCard({
  item,
  index,
  progress,
}: {
  item: (typeof galleryItems)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const itemStart = index * itemSpacing;
  const resolvePhase = (value: number) =>
    clampUnit((value * galleryLoops - itemStart) / itemDuration);
  const transform = useTransform(progress, (value) => {
    const phase = resolvePhase(value);
    const depth = phaseToDepth(phase, item, index);

    return `translate(-50%, -50%) translate3d(${depth.x}px, ${depth.y}px, ${depth.z}px) rotateZ(${depth.rotate}deg) scale(${depth.scale})`;
  });
  const opacity = useTransform(progress, (value) => {
    const rawPhase = (value * galleryLoops - itemStart) / itemDuration;

    if (rawPhase < 0 || rawPhase > 1) {
      return 0;
    }

    const phase = clampUnit(rawPhase);
    const depth = phaseToDepth(phase, item, index);

    return depth.opacity;
  });

  return (
    <motion.article
      className="liquid-glass-strong group absolute left-1/2 top-1/2 aspect-[16/9] w-[min(84vw,42rem)] min-w-[40vw] max-w-2xl transform-gpu overflow-hidden rounded-[2rem] bg-black p-3 will-change-transform"
      style={{
        transform: reduceMotion
          ? "translate(-50%, -50%) translate3d(0px, 0px, 0px)"
          : transform,
        opacity: reduceMotion ? (index === 0 ? 1 : 0) : opacity,
        transformStyle: "preserve-3d",
        willChange: "transform",
        width: item.width,
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        event.currentTarget.style.setProperty("--mx", `${x}%`);
        event.currentTarget.style.setProperty("--my", `${y}%`);
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.setProperty("--mx", "50%");
        event.currentTarget.style.setProperty("--my", "20%");
      }}
    >
      <div className="relative h-full transform-gpu overflow-hidden rounded-[1.55rem] will-change-transform">
        <Image
          src={item.src}
          alt={item.subtitle}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
          loading={index === 0 ? undefined : "lazy"}
          className="transform-gpu object-cover opacity-90 saturate-[0.88] transition-[opacity,transform] duration-700 will-change-transform group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/6 to-white/5" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_var(--mx,50%)_var(--my,20%),rgba(255,255,255,0.28),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.34em] text-[hsl(var(--accent))]">
            {item.title}
          </p>
          <p className="mt-2 font-serif text-xl text-white">{item.subtitle}</p>
        </div>
      </div>
    </motion.article>
  );
}
