import Image from "next/image";
import type { Metadata } from "next";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "秩序与边界",
};

const criteria = [
  {
    number: "01",
    label: "Invitation Only",
    title: "被邀请，而非被销售",
    body: "入口来自可信关系的引荐。我们先确认节奏、边界与价值观，再讨论服务本身",
  },
  {
    number: "02",
    label: "Background Alignment",
    title: "背景同频",
    body: "不以身份标签判断人，只看长期行为、稳定信用、真实需求与可持续贡献",
  },
  {
    number: "03",
    label: "Quiet Participation",
    title: "低噪音参与",
    body: "会员空间不是展示场。稳定出现、克制表达、尊重隐私，是进入关系的基础",
  },
  {
    number: "04",
    label: "Long Term Trust",
    title: "长期信任",
    body: "每一次品鉴、活动、资源连接都会回到一个问题：这是否值得长期复访",
  },
];

const tiers = [
  { name: "Observer", value: "01", text: "先进入少量开放场景，观察是否同频" },
  { name: "Member", value: "02", text: "进入稳定会所活动与甄选服务体系" },
  { name: "Circle", value: "03", text: "参与更深层资源协同与私密议题讨论" },
];

export default function MembershipPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex h-[100vh] items-end overflow-hidden px-6 pb-24 md:px-10">
        <Image
          src="/media/subpages/membership/hero-membership-salon.png"
          alt="暗光会所空间"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 saturate-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-black/25" />
        <div className="pointer-events-none absolute -left-8 top-20 font-display text-[18rem] leading-none text-white/[0.04] md:text-[32rem]">
          01
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.52em] text-[hsl(var(--accent))]">
              Membership Boundary
            </p>
            <h1 className="text-metal mt-8 max-w-5xl font-serif text-[clamp(4rem,10vw,10rem)] leading-none text-white">
              秩序与边界
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-32 md:grid-cols-12 md:gap-24 md:px-10">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <FadeUp>
              <p className="font-display text-xs uppercase tracking-[0.45em] text-[hsl(var(--accent))]">
                Threshold
              </p>
              <h2 className="text-metal mt-6 font-serif text-[clamp(3rem,6vw,6rem)] leading-none text-white">
                同频的门槛
              </h2>
            </FadeUp>
          </div>
        </div>

        <div className="space-y-10 md:col-span-7">
          {criteria.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <div className="liquid-glass-strong group relative min-h-[18rem] overflow-hidden rounded-[2rem] p-8 transition duration-700 hover:-translate-y-2 hover:bg-white/[0.055] md:p-10">
                <span className="absolute right-6 top-4 font-display text-8xl leading-none text-white/[0.04] md:text-9xl">
                  {item.number}
                </span>
                <div className="relative z-10 max-w-xl">
                  <p className="font-display text-xs uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                    {item.label}
                  </p>
                  <h3 className="text-metal mt-8 font-serif text-[clamp(2rem,4vw,4.2rem)] leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-7 max-w-md text-sm leading-8 text-white/58 transition-opacity duration-500 group-hover:text-white/78">
                    {item.body}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_28%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:px-10">
        {tiers.map((tier, index) => (
          <FadeUp
            key={tier.name}
            delay={index * 0.08}
            className={index === 1 ? "md:col-span-5" : "md:col-span-3"}
          >
            <div className="liquid-glass relative min-h-[18rem] overflow-hidden rounded-[2rem] p-8">
              <p className="font-display text-7xl text-white/10">{tier.value}</p>
              <h3 className="mt-10 font-display text-xs uppercase tracking-[0.46em] text-[hsl(var(--accent))]">
                {tier.name}
              </h3>
              <p className="mt-5 font-serif text-2xl leading-snug text-white md:text-3xl">
                {tier.text}
              </p>
            </div>
          </FadeUp>
        ))}
      </section>

      <section className="flex min-h-[100vh] items-center justify-center bg-black px-6">
        <AnimatedText
          text="自由，源于我们共同遵守的秩序。"
          className="text-metal max-w-5xl text-center font-serif text-[clamp(2.8rem,6vw,7rem)] leading-tight text-white text-pretty"
        />
      </section>
    </main>
  );
}
