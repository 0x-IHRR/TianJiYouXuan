"use client";

import Image from "next/image";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";
import { TiltCard } from "@/components/animations/TiltCard";

const curationSignals = [
  {
    number: "01",
    title: "源头关系",
    body: "把选择前移到供应链深处，而不是在包装和流量中做表面比较",
  },
  {
    number: "02",
    title: "稳定复核",
    body: "好物不是一次惊艳，而是长期交付、复购体验和服务稳定性的总和",
  },
  {
    number: "03",
    title: "降低试错",
    body: "替会员过滤掉不值得消耗时间的选项，让消费重新回到生活秩序里",
  },
];

const giftingTiers = [
  {
    value: "500",
    label: "商务馈赠",
    body: "轻量表达心意，适合初次拜访、节日问候与克制得体的关系开启",
  },
  {
    value: "1000",
    label: "商务馈赠",
    body: "适合高信任关系中的体面表达，不制造负担，只打开一次稳定连接",
  },
  {
    value: "2000",
    label: "圈层通行凭证",
    body: "不是消费券，而是一张进入会员场景、会所资源与精选关系的通行凭证",
  },
];

const usage = ["商务馈赠", "线下场景通行", "价值不浪费", "资源连接凭证"];

export default function CurationPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-28">
        <Image
          src="/media/generated/tianji/curation-black-gift-card.png"
          alt="极致甄选的暗光静物"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58 saturate-[0.76]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/62 to-black/28" />
        <div className="pointer-events-none absolute right-[-2rem] top-28 font-display text-[7rem] leading-none text-white/[0.035] md:text-[13rem]">
          1/10000
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.56em] text-[hsl(var(--accent))]">
              Supply Chain
            </p>
            <h1 className="text-metal mt-8 max-w-3xl text-balance font-serif text-6xl leading-tight text-white md:text-8xl">
              极致甄选
            </h1>
            <p className="mt-8 max-w-xl text-pretty font-serif text-xl leading-loose tracking-[0.18em] text-white/68 md:text-2xl">
              深入源头，只取少数答案
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="flex min-h-[70vh] items-center justify-center bg-[#0a0a0a] px-6 py-24">
        <AnimatedText
          text="每一次消费，都是一次价值交换；让消费产生价值，让资源创造财富。"
          className="max-w-5xl text-center font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-snug tracking-widest text-white text-pretty"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        <FadeUp>
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
              Curation Logic
            </p>
            <h2 className="text-metal mx-auto mt-8 max-w-5xl font-serif text-[clamp(2rem,5.2vw,5.8rem)] leading-tight text-white md:whitespace-nowrap">
              不增加选择
              <span className="mx-5 text-white/18">/</span>
              <br className="md:hidden" />
              只减少试错
            </h2>
          </div>
        </FadeUp>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {curationSignals.map((signal, index) => (
            <FadeUp key={signal.title} delay={index * 0.08}>
              <TiltCard
                className="liquid-glass-strong min-h-[18rem] rounded-[1.75rem] p-7 md:p-9"
                innerClassName="flex h-full flex-col"
              >
                <span className="font-display text-5xl leading-none text-white/12 md:text-6xl">
                  {signal.number}
                </span>
                <div className="mt-auto">
                  <h3 className="max-w-md font-serif text-2xl leading-tight text-white md:whitespace-nowrap md:text-3xl">
                    {signal.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-loose text-white/56 text-pretty md:text-base">
                    {signal.body}
                  </p>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.12),transparent_34rem)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeUp>
            <p className="text-center font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
              Gifting Mechanism
            </p>
            <h2 className="text-metal mx-auto mt-8 max-w-3xl text-center font-serif text-4xl leading-tight text-white md:text-6xl">
              礼遇机制
            </h2>
          </FadeUp>

          <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {giftingTiers.map((tier, index) => (
              <FadeUp
                key={tier.value}
                delay={index * 0.08}
                className={index % 2 === 1 ? "md:translate-y-12" : ""}
              >
                <TiltCard className="liquid-glass group relative min-h-[28rem] overflow-hidden rounded-[2rem] p-8 md:p-9">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_28%,rgba(212,175,55,0.18)_54%,transparent_72%)] opacity-45 transition-opacity duration-700 group-hover:opacity-75" />
                  <div className="absolute -right-24 -top-24 size-56 rounded-full bg-[hsl(var(--accent))]/12 blur-3xl" />
                  <p className="relative z-10 font-display text-xs uppercase tracking-[0.48em] text-[hsl(var(--accent))]">
                    PRIVATE GIFTING
                  </p>
                  <div className="relative z-10 mt-16 flex items-end gap-4">
                    <span className="pb-4 font-display text-4xl text-white/55">¥</span>
                    <span className="font-display text-8xl leading-none text-white md:text-9xl">
                      {tier.value}
                    </span>
                  </div>
                  <h3 className="relative z-10 mt-12 font-serif text-3xl leading-tight text-white md:whitespace-nowrap">
                    {tier.label}
                  </h3>
                  <p className="relative z-10 mt-6 max-w-sm text-sm leading-loose text-white/58 text-pretty">
                    {tier.body}
                  </p>
                </TiltCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-44 pt-8 md:px-10 md:pb-56">
        <FadeUp>
          <div className="liquid-glass-strong grid grid-cols-1 gap-8 rounded-[2rem] p-8 md:grid-cols-4 md:p-10">
            {usage.map((item, index) => (
              <div key={item} className="border-white/10 md:border-l md:first:border-l-0 md:pl-8 md:first:pl-0">
                <p className="font-display text-sm text-[hsl(var(--accent))]/70">
                  0{index + 1}
                </p>
                <p className="mt-5 font-serif text-2xl leading-tight tracking-[0.18em] text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
