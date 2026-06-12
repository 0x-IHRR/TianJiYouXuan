"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const galleryItems = [
  {
    title: "Private Lobby",
    subtitle: "被筛选过的入口",
    src: "/media/homepage-layers/hero-still-life.png",
    x: -36,
    y: -22,
    rotate: -8,
    width: "clamp(14rem, 24vw, 28rem)",
  },
  {
    title: "Quiet Table",
    subtitle: "供应链与品鉴场景",
    src: "/media/homepage-layers/table-invitation.png",
    x: 28,
    y: -10,
    rotate: 7,
    width: "clamp(13rem, 20vw, 24rem)",
  },
  {
    title: "Threshold",
    subtitle: "秩序感来自边界",
    src: "/media/homepage-layers/doorway-band.png",
    x: -18,
    y: 18,
    rotate: 5,
    width: "clamp(15rem, 25vw, 30rem)",
  },
  {
    title: "Long View",
    subtitle: "真实关系慢慢显影",
    src: "/media/homepage-layers/film-window-balanced.png",
    x: 34,
    y: 24,
    rotate: -5,
    width: "clamp(12rem, 19vw, 23rem)",
  },
  {
    title: "Member Room",
    subtitle: "线下会所的暗光深度",
    src: "/media/subpages/membership/hero-membership-salon.png",
    x: 0,
    y: 0,
    rotate: 0,
    width: "clamp(16rem, 28vw, 34rem)",
  },
  {
    title: "Philosophy Still",
    subtitle: "真实与长期的静物",
    src: "/media/subpages/philosophy/hero-philosophy-still-life.png",
    x: -30,
    y: 8,
    rotate: -3,
    width: "clamp(13rem, 22vw, 27rem)",
  },
  {
    title: "Invitation",
    subtitle: "门槛与同频的邀请",
    src: "/media/subpages/apply/hero-application-invitation.png",
    x: 24,
    y: 18,
    rotate: 6,
    width: "clamp(14rem, 23vw, 28rem)",
  },
  {
    title: "Film Frame",
    subtitle: "品牌影像的窗口",
    src: "/media/homepage-layers/film-window-frame.png",
    x: -8,
    y: -26,
    rotate: 4,
    width: "clamp(12rem, 20vw, 25rem)",
  },
  {
    title: "Compact Film",
    subtitle: "关系在暗处显影",
    src: "/media/homepage-layers/film-window-compact.png",
    x: 38,
    y: -20,
    rotate: -7,
    width: "clamp(12rem, 19vw, 23rem)",
  },
  {
    title: "Clean Field",
    subtitle: "选择之前的留白",
    src: "/media/homepage-clean-background-v1.png",
    x: -34,
    y: 24,
    rotate: 8,
    width: "clamp(15rem, 26vw, 32rem)",
  },
  {
    title: "Banner Dark",
    subtitle: "私密会所的底色",
    src: "/media/style-reference/brand-banner-dark.png",
    x: 16,
    y: -4,
    rotate: -2,
    width: "clamp(16rem, 28vw, 34rem)",
  },
  {
    title: "Brand Mark",
    subtitle: "身份不是噪音",
    src: "/media/style-reference/brand-logo-light.jpeg",
    x: -24,
    y: -14,
    rotate: 5,
    width: "clamp(12rem, 18vw, 22rem)",
  },
];

const galleryLoops = 3;
const cosmicPaths = [
  { fromX: -920, fromY: -620, focusX: -260, focusY: -120, outX: 1080, outY: 620 },
  { fromX: 980, fromY: -540, focusX: 240, focusY: -96, outX: -1120, outY: 560 },
  { fromX: -820, fromY: 640, focusX: -180, focusY: 150, outX: 1040, outY: -720 },
  { fromX: 860, fromY: 580, focusX: 210, focusY: 120, outX: -980, outY: -700 },
  { fromX: -1040, fromY: -120, focusX: -24, focusY: 0, outX: 1120, outY: 120 },
  { fromX: 1080, fromY: 80, focusX: 28, focusY: 22, outX: -1160, outY: -180 },
  { fromX: -720, fromY: -760, focusX: -220, focusY: 92, outX: 940, outY: -820 },
  { fromX: 720, fromY: -720, focusX: 210, focusY: -150, outX: -920, outY: 820 },
  { fromX: -980, fromY: 360, focusX: -300, focusY: 36, outX: 1180, outY: -420 },
  { fromX: 1020, fromY: 420, focusX: 300, focusY: 42, outX: -1200, outY: -460 },
  { fromX: -420, fromY: -820, focusX: -80, focusY: -180, outX: 720, outY: 920 },
  { fromX: 440, fromY: 820, focusX: 92, focusY: 172, outX: -760, outY: -940 },
];

function wrapUnit(value: number) {
  return ((value % 1) + 1) % 1;
}

function phaseToDepth(phase: number, item: (typeof galleryItems)[number], index: number) {
  const path = cosmicPaths[index % cosmicPaths.length];

  if (phase < 0.34) {
    const t = phase / 0.34;

    return {
      z: -2000 + t * 1920,
      x: path.fromX + (path.focusX - path.fromX) * t,
      y: path.fromY + (path.focusY - path.fromY) * t,
      scale: 0.68 + t * 0.3,
      blur: 4 - t * 3.5,
      opacity: Math.min(1, t * 2),
      rotate: item.rotate + (item.rotate * 0.14 - item.rotate) * t,
    };
  }

  if (phase < 0.68) {
    const t = (phase - 0.34) / 0.34;

    return {
      z: -80 + t * 160,
      x: path.focusX + (path.focusX * 0.62 - path.focusX) * t,
      y: path.focusY + (path.focusY * 0.58 - path.focusY) * t,
      scale: 0.98 + t * 0.08,
      blur: 0,
      opacity: 1,
      rotate: item.rotate * 0.14 + (item.rotate * 0.05 - item.rotate * 0.14) * t,
    };
  }

  if (phase < 0.9) {
    const t = (phase - 0.68) / 0.22;

    return {
      z: 80 + t * 1020,
      x: path.focusX * 0.62 + (path.outX - path.focusX * 0.62) * t,
      y: path.focusY * 0.58 + (path.outY - path.focusY * 0.58) * t,
      scale: 1.06 + t * 0.5,
      blur: t * 4,
      opacity: 1 - t,
      rotate: item.rotate * 0.05 + (item.rotate * -0.14 - item.rotate * 0.05) * t,
    };
  }

  return {
    z: -2000,
    x: path.fromX,
    y: path.fromY,
    scale: 0.68,
    blur: 4,
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
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[600vh] w-full bg-[#0a0a0a]"
      aria-label="天机优选影像廊"
    >
      <div className="sticky top-0 flex h-[100vh] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_28%,rgba(0,0,0,0.62)_76%)]" />

        <div
          className="relative h-full w-full"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {galleryItems.map((item, index) => (
            <FlyThroughCard
              key={item.title}
              item={item}
              index={index}
              progress={smoothProgress}
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
  const itemOffset = index / galleryItems.length;
  const transform = useTransform(progress, (value) => {
    const phase = wrapUnit(value * galleryLoops + itemOffset);
    const depth = phaseToDepth(phase, item, index);

    return `translate(-50%, -50%) translate3d(${depth.x}px, ${depth.y}px, ${depth.z}px) rotateZ(${depth.rotate}deg) scale(${depth.scale})`;
  });
  const filter = useTransform(progress, (value) => {
    const phase = wrapUnit(value * galleryLoops + itemOffset);
    const depth = phaseToDepth(phase, item, index);

    return `blur(${depth.blur}px)`;
  });
  const opacity = useTransform(progress, (value) => {
    const phase = wrapUnit(value * galleryLoops + itemOffset);
    const depth = phaseToDepth(phase, item, index);

    return depth.opacity;
  });

  return (
    <motion.article
      className="liquid-glass-strong group absolute left-1/2 top-1/2 aspect-[16/9] w-[min(84vw,42rem)] min-w-[40vw] max-w-2xl overflow-hidden rounded-[2rem] bg-black p-3"
      style={{
        transform: reduceMotion
          ? `translate(-50%, -50%) translate3d(${cosmicPaths[index % cosmicPaths.length].focusX * 0.5}px, ${cosmicPaths[index % cosmicPaths.length].focusY * 0.5}px, 0px)`
          : transform,
        filter: reduceMotion ? "none" : filter,
        opacity: reduceMotion ? 1 : opacity,
        transformStyle: "preserve-3d",
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
      <div className="relative h-full overflow-hidden rounded-[1.55rem]">
        <Image
          src={item.src}
          alt={item.subtitle}
          fill
          loading="eager"
          sizes="(max-width: 768px) 84vw, 42rem"
          className="object-cover opacity-90 saturate-[0.88] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
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
