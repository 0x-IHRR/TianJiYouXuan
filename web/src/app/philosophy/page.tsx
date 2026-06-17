import Image from "next/image";
import type { Metadata } from "next";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";
import { TiltCard } from "@/components/animations/TiltCard";

export const metadata: Metadata = {
  title: "真实与长期",
};

const pillars = [
  {
    number: "01",
    label: "Refuse Noise",
    title: "拒绝快感式消费",
    body: "更多选择不是价值",
    className: "md:col-span-8 md:min-h-[25rem]",
  },
  {
    number: "02",
    label: "Real Scene",
    title: "回到真实场景",
    body: "离开现场，承诺只是噪音",
    className: "md:col-span-4 md:min-h-[32rem]",
  },
  {
    number: "03",
    label: "Long Compounding",
    title: "让信任复利",
    body: "长期关系会自己筛选答案",
    className: "md:col-span-12 md:min-h-[22rem]",
  },
];

export default function PhilosophyPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden px-6 pb-24 md:px-10">
        <Image
          src="/media/generated/tianji/philosophy-hourglass-black-sand.png"
          alt="象征真实与长期的黑沙漏"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-64 saturate-[0.72]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/48 to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.52em] text-[hsl(var(--accent))]">
              Philosophy
            </p>
            <h1 className="text-metal mt-8 max-w-2xl text-balance font-serif text-6xl leading-tight text-white md:text-8xl">
              真实与长期
            </h1>
            <p className="mt-8 max-w-xl text-pretty font-serif text-xl leading-loose tracking-[0.16em] text-white/70 md:text-2xl">
              对抗喧嚣的
              <br className="hidden md:block" />
              唯一解药
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="flex min-h-[100dvh] items-center justify-center bg-black px-6 py-28">
        <AnimatedText
          text={"我们不是普通消费者，\n我们是新时代的觉醒者。"}
          className="text-metal mx-auto max-w-6xl text-center font-serif text-[clamp(1.9rem,5.4vw,5.7rem)] leading-[1.35] tracking-[0.14em] text-white text-balance md:leading-[1.22] md:tracking-[0.18em]"
        />
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-32 md:grid-cols-12 md:gap-24 md:px-10">
        {pillars.map((pillar, index) => (
          <FadeUp key={pillar.label} delay={index * 0.1} className={pillar.className}>
            <TiltCard
              className="liquid-glass-strong group relative h-full min-h-[20rem] overflow-hidden rounded-[2rem] p-8 transition-colors duration-700 hover:bg-white/[0.055] md:p-10"
              innerClassName="flex h-full"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-7xl leading-none text-white/[0.05] md:text-9xl">
                {pillar.number}
              </span>
              <div className="relative z-10 mt-auto max-w-3xl">
                <p className="font-display text-xs uppercase tracking-[0.45em] text-[hsl(var(--accent))]">
                  {pillar.label}
                </p>
                <h2 className="text-metal mt-6 max-w-2xl text-balance font-serif text-3xl leading-tight text-white md:text-5xl">
                  {pillar.title}
                </h2>
                <p className="mt-7 max-w-xl font-serif text-xl leading-loose tracking-[0.16em] text-white/52 text-pretty transition-colors duration-500 group-hover:text-white/78 md:text-2xl">
                  {pillar.body}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.13),transparent_30%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </TiltCard>
          </FadeUp>
        ))}
      </section>

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-32">
        <Image
          src="/media/generated/tianji/philosophy-hourglass-black-sand.png"
          alt="长期关系在暗处显影"
          fill
          sizes="100vw"
          className="object-cover opacity-24 blur-[1px] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/72" />
        <div className="relative z-10 max-w-4xl text-center">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
              The Long View
            </p>
          </FadeUp>
          <AnimatedText
            text={"时间会筛掉\n大多数答案"}
            className="text-metal mt-8 text-center font-serif text-4xl leading-tight text-white text-balance md:text-6xl"
          />
        </div>
      </section>
    </main>
  );
}
