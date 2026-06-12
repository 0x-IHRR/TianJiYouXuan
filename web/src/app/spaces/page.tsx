"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";

const spaceScenes = [
  {
    label: "Tea Room",
    title: "低声交谈的茶室",
    body: "光线被压低，时间被放慢，关系在没有打扰的地方自然展开",
    src: "/media/homepage-layers/table-invitation.png",
    className: "md:col-start-2 md:col-span-5",
    speed: -120,
  },
  {
    label: "Reading Room",
    title: "只为停留而设的阅读室",
    body: "书、器物与少量座席构成安静的缓冲区，让判断先于表达发生",
    src: "/media/homepage-layers/film-window-balanced.png",
    className: "md:col-start-7 md:col-span-5 md:mt-44",
    speed: 120,
  },
  {
    label: "Private Lounge",
    title: "隐于城市背面的会客厅",
    body: "没有公开展示，没有过度招牌，只有被邀请者才知道的抵达路径",
    src: "/media/homepage-layers/doorway-band.png",
    className: "md:col-start-4 md:col-span-6 md:mt-20",
    speed: -80,
  },
];

const details = [
  { number: "01", title: "无声抵达", body: "路径克制，入口隐蔽，让每次到访都避开不必要的围观" },
  { number: "02", title: "分区停留", body: "茶、阅读、私享与小型会谈互不干扰，形成不同节奏的关系容器" },
  { number: "03", title: "极少席位", body: "空间不追求热闹，只保留足够深的停留感与判断密度" },
];

export default function SpacesPage() {
  const galleryRef = useRef<HTMLElement>(null);

  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex h-[100vh] items-end overflow-hidden px-6 pb-24 md:px-10">
        <Image
          src="/media/homepage-layers/doorway-band.png"
          alt="隐匿之所的暗光入口"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-62 saturate-[0.78]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.52em] text-[hsl(var(--accent))]">
              The Sanctuary
            </p>
            <h1 className="text-metal mt-8 max-w-5xl font-serif text-[clamp(4rem,10vw,10rem)] leading-none text-white">
              隐匿之所
            </h1>
          </FadeUp>
        </div>
      </section>

      <section ref={galleryRef} className="relative min-h-[220vh] bg-[#0a0a0a] px-6 py-32 md:px-10">
        <div className="sticky top-24 z-20 mx-auto max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
              Spatial Rhythm
            </p>
            <h2 className="text-metal mt-6 max-w-4xl font-serif text-[clamp(3rem,6vw,6.5rem)] leading-none text-white">
              空间不是装饰，是筛选噪音的方式
            </h2>
          </FadeUp>
        </div>

        <div className="mx-auto mt-40 grid max-w-7xl grid-cols-1 gap-20 md:grid-cols-12 md:gap-y-32">
          {spaceScenes.map((scene, index) => (
            <ParallaxSpaceCard
              key={scene.title}
              scene={scene}
              index={index}
              targetRef={galleryRef}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-12 md:gap-20 md:px-10">
        <FadeUp className="md:col-span-5">
          <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
            Details
          </p>
          <h2 className="text-metal mt-8 font-serif text-[clamp(3rem,7vw,7rem)] leading-none text-white">
            大隐隐于市
          </h2>
        </FadeUp>

        <div className="space-y-8 md:col-span-7">
          {details.map((detail, index) => (
            <FadeUp key={detail.title} delay={index * 0.08}>
              <div className="liquid-glass-strong grid min-h-[12rem] grid-cols-[5rem_1fr] gap-6 rounded-[2rem] p-7 md:grid-cols-[7rem_1fr] md:p-9">
                <span className="font-display text-5xl leading-none text-white/12 md:text-7xl">
                  {detail.number}
                </span>
                <div>
                  <h3 className="font-serif text-3xl text-white md:text-4xl">{detail.title}</h3>
                  <p className="mt-5 max-w-lg text-sm leading-8 text-white/58">{detail.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="flex min-h-[80vh] items-center justify-center bg-black px-6">
        <AnimatedText
          text="真正私密的地方，不需要被所有人看见。它只需要让抵达的人，终于安静下来。"
          className="max-w-5xl text-center font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-tight text-white text-pretty"
        />
      </section>
    </main>
  );
}

function ParallaxSpaceCard({
  scene,
  index,
  targetRef,
}: {
  scene: (typeof spaceScenes)[number];
  index: number;
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [scene.speed, scene.speed * -1]);

  return (
    <motion.div style={{ y }} className={scene.className}>
      <FadeUp delay={index * 0.08}>
        <div className="liquid-glass-strong group overflow-hidden rounded-[2.25rem] p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
            <Image
              src={scene.src}
              alt={scene.title}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover opacity-86 saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-white/5" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="font-display text-xs uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                {scene.label}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-white md:text-5xl">
                {scene.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-8 text-white/62">{scene.body}</p>
            </div>
          </div>
        </div>
      </FadeUp>
    </motion.div>
  );
}
