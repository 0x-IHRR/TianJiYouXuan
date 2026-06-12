"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";

const processSteps = [
  {
    number: "01",
    label: "Discovery",
    title: "深入源头",
    body: "从产地、工艺、稳定性与长期供应能力开始，而不是从包装和流量开始",
    src: "/media/homepage-layers/hero-still-life.png",
  },
  {
    number: "02",
    label: "Deconstruction",
    title: "拆解成本与路径",
    body: "看见一件好物真正的成本结构、流通损耗、服务链条与隐性风险",
    src: "/media/homepage-layers/table-invitation.png",
  },
  {
    number: "03",
    label: "Blind Tasting",
    title: "盲测与复访",
    body: "去掉品牌光环，只保留体验本身。能否复访，比第一次惊艳更重要",
    src: "/media/homepage-layers/film-window-compact.png",
  },
  {
    number: "04",
    label: "Final Selection",
    title: "只留下少数答案",
    body: "最终被推荐的，不是最热闹的选项，而是最能减少会员试错的选项",
    src: "/media/subpages/philosophy/hero-philosophy-still-life.png",
  },
];

const signals = [
  { title: "真实来源", body: "可追溯的上游关系，而非临时拼接的渠道" },
  { title: "稳定交付", body: "品质、服务和复购体验都能经受时间复核" },
  { title: "低决策压", body: "会员无需反复比较，只需确认是否适合自己的生活秩序" },
];

export default function CurationPage() {
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-63%"]);

  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex h-[100vh] items-end overflow-hidden px-6 pb-24 md:px-10">
        <Image
          src="/media/homepage-layers/hero-still-life.png"
          alt="极致甄选的暗光静物"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-62 saturate-[0.78]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/52 to-black/25" />
        <div className="pointer-events-none absolute right-[-4rem] top-24 font-display text-[16rem] leading-none text-white/[0.04] md:text-[30rem]">
          1/10000
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.52em] text-[hsl(var(--accent))]">
              Supply Chain
            </p>
            <h1 className="text-metal mt-8 max-w-5xl font-serif text-[clamp(4rem,10vw,10rem)] leading-none text-white">
              极致甄选
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-2xl tracking-[0.16em] text-white/70 md:text-4xl">
              深入源头，只取万分之一
            </p>
          </FadeUp>
        </div>
      </section>

      <section ref={processRef} className="relative h-[420vh] bg-[#0a0a0a]">
        <div className="sticky top-0 flex h-[100vh] flex-col justify-center overflow-hidden px-6 md:px-10">
          <div className="mx-auto mb-16 w-full max-w-7xl">
            <FadeUp>
              <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
                The Process
              </p>
              <h2 className="text-metal mt-6 max-w-4xl font-serif text-[clamp(3rem,6vw,6.5rem)] leading-none text-white">
                甄选不是推荐，是拆解
              </h2>
            </FadeUp>
          </div>

          <motion.div style={{ x }} className="flex w-max gap-6 md:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="liquid-glass-strong relative h-[58vh] w-[82vw] shrink-0 overflow-hidden rounded-[2.25rem] p-3 md:w-[46rem]"
              >
                <Image
                  src={step.src}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 82vw, 46rem"
                  className="object-cover opacity-54 saturate-[0.78]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/36 to-black/10" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-10">
                  <p className="font-display text-7xl leading-none text-white/12 md:text-9xl">
                    {step.number}
                  </p>
                  <p className="mt-auto font-display text-xs uppercase tracking-[0.44em] text-[hsl(var(--accent))]">
                    {step.label}
                  </p>
                  <h3 className="text-metal mt-5 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none text-white">
                    {step.title}
                  </h3>
                  <p className="mt-7 max-w-lg text-sm leading-8 text-white/62">{step.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-32 md:grid-cols-12 md:gap-20 md:px-10">
        <FadeUp className="md:col-span-7">
          <AnimatedText
            text="减少试错成本，不是替你决定生活，而是把不值得浪费时间的选项先挡在门外。"
            className="text-metal font-serif text-[clamp(2.8rem,5.8vw,6.5rem)] leading-tight text-white text-pretty"
          />
        </FadeUp>

        <div className="space-y-8 md:col-span-5 md:pt-28">
          {signals.map((signal, index) => (
            <FadeUp key={signal.title} delay={index * 0.08}>
              <div className="liquid-glass-strong rounded-[2rem] p-8">
                <h3 className="font-serif text-3xl text-white">{signal.title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/58">{signal.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6">
        <Image
          src="/media/style-reference/brand-banner-dark.png"
          alt="甄选法则暗色底图"
          fill
          sizes="100vw"
          className="object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-black/72" />
        <AnimatedText
          text="在这里，你不必再做任何消费决策。"
          className="relative z-10 max-w-5xl text-center font-serif text-[clamp(3rem,7vw,8rem)] leading-tight text-white text-pretty"
        />
      </section>
    </main>
  );
}
