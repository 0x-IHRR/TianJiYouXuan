import Image from "next/image";
import type { Metadata } from "next";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";
import { TiltCard } from "@/components/animations/TiltCard";

export const metadata: Metadata = {
  title: "秩序与边界",
};

const criteria = [
  {
    number: "01",
    label: "Invitation Only",
    title: (
      <>
        被邀请，
        <br className="hidden md:block" />
        而非被销售
      </>
    ),
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
    title: (
      <>
        低噪音
        <br className="hidden md:block" />
        参与
      </>
    ),
    body: "会员空间不是展示场。稳定出现、克制表达、尊重隐私，是进入关系的基础",
  },
  {
    number: "04",
    label: "Long Term Trust",
    title: "长期信任",
    body: "每一次品鉴、活动、资源连接都会回到一个问题：这是否值得长期复访",
  },
];

const membershipTiers = [
  {
    number: "01",
    name: "星火",
    identity: "天机同行者",
    price: "500",
    boundary: "先进入少量开放场景，确认节奏是否同频",
  },
  {
    number: "02",
    name: "远见",
    identity: "天机探索者",
    price: "3,000",
    boundary: "进入稳定学习与趋势交流，建立长期判断",
  },
  {
    number: "03",
    name: "领航",
    identity: "天机赋能者",
    price: "10,000",
    boundary: "参与资源链接、项目交流与更高密度的会员场景",
  },
  {
    number: "04",
    name: "共创",
    identity: "天机共创者",
    price: "50,000",
    boundary: "进入私董会、企业参访与高端圈层协同",
  },
  {
    number: "05",
    name: "天机会成员",
    identity: "天机理事",
    price: "100,000+",
    boundary: "共建核心资源圈，参与品牌、资源与生态的长期共创",
  },
];

export default function MembershipPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden px-6 pb-24 md:px-10">
        <Image
          src="/media/generated/tianji/membership-threshold-tunnel.png"
          alt="象征会员门槛与秩序边界的暗光长廊"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-64 saturate-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-black/25" />
        <div className="pointer-events-none absolute left-2 top-24 font-display text-7xl leading-none text-white/[0.045] md:left-0 md:text-8xl">
          01
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.52em] text-[hsl(var(--accent))]">
              Membership Boundary
            </p>
            <h1 className="text-metal mt-8 max-w-2xl text-balance font-serif text-6xl leading-tight text-white md:text-8xl">
              秩序与边界
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[5rem_1fr] md:gap-20 md:px-10 md:py-28">
        <div>
          <div className="md:sticky md:top-24">
            <FadeUp>
              <p className="font-display text-xs uppercase tracking-[0.45em] text-[hsl(var(--accent))] md:hidden">
                Threshold
              </p>
              <h2 className="text-metal mt-6 font-serif text-4xl leading-tight text-white [line-break:strict] [word-break:keep-all] md:[text-orientation:upright] md:[writing-mode:vertical-rl] md:text-6xl md:leading-none md:tracking-[0.18em]">
                同频的门槛
              </h2>
              <p className="mt-8 max-w-xs text-sm leading-loose tracking-wider text-white/50 text-pretty md:hidden">
                我们不以身份标签判断人，而是寻找在时间中被验证过的真实同频者。门槛，是对所有入局者的保护。
              </p>
            </FadeUp>
          </div>
        </div>

        <div className="space-y-10">
          <FadeUp>
            <p className="hidden max-w-2xl text-sm leading-loose tracking-wider text-white/52 text-pretty md:block md:text-base">
              我们不以身份标签判断人，而是寻找在时间中被验证过的真实同频者。门槛，是对所有入局者的保护。
            </p>
          </FadeUp>
          {criteria.map((item, index) => (
            <FadeUp key={item.label} delay={index * 0.08}>
              <TiltCard className="liquid-glass-strong group relative min-h-[16rem] overflow-hidden rounded-[1.75rem] p-7 transition-colors duration-700 md:p-9 md:hover:bg-white/[0.055]">
                <span className="absolute right-6 top-5 font-display text-6xl leading-none text-white/[0.045] md:text-8xl">
                  {item.number}
                </span>
                <div className="relative z-10 max-w-xl">
                  <p className="font-display text-xs uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                    {item.label}
                  </p>
                  <h3 className="text-metal mt-8 max-w-lg text-balance font-serif text-3xl leading-tight text-white md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-7 max-w-md text-sm leading-loose text-white/58 text-pretty transition-opacity duration-500 md:text-base md:group-hover:text-white/78">
                    {item.body}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.16),transparent_28%)] opacity-0 transition-opacity duration-700 md:group-hover:opacity-100" />
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[5rem_1fr] md:gap-20 md:px-10 md:py-36">
        <FadeUp>
          <div className="md:sticky md:top-24">
            <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))] md:hidden">
              Identity Stack
            </p>
            <h2 className="text-metal mt-8 font-serif text-4xl leading-tight text-white [line-break:strict] [word-break:keep-all] md:[text-orientation:upright] md:[writing-mode:vertical-rl] md:text-6xl md:leading-none md:tracking-[0.18em]">
              身份不是价格
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-7">
          {membershipTiers.map((tier, index) => (
            <FadeUp key={tier.name} delay={index * 0.06}>
              <TiltCard className="liquid-glass-strong group relative min-h-[13rem] overflow-hidden rounded-[2rem] p-7 transition-colors duration-700 md:p-9 md:hover:bg-white/[0.055]">
                <span className="absolute right-7 top-7 font-display text-[10px] uppercase tracking-[0.42em] text-white/20">
                  ¥ {tier.price}
                </span>
                <div className="pointer-events-none absolute -right-6 bottom-[-2rem] font-display text-[8rem] leading-none text-white/[0.035] transition-colors duration-700 md:text-[10rem] md:group-hover:text-[hsl(var(--accent))]/10">
                  {tier.number}
                </div>
                <div className="relative z-10 grid gap-8 md:grid-cols-[10rem_1fr] md:items-end">
                  <div>
                    <p className="font-display text-xs uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                      Tier {tier.number}
                    </p>
                    <h3 className="text-metal mt-6 font-serif text-4xl leading-none text-white md:text-6xl">
                      {tier.name}
                    </h3>
                  </div>
                  <div>
                    <p className="font-serif text-2xl leading-tight tracking-[0.18em] text-white/86 md:text-3xl">
                      {tier.identity}
                    </p>
                    <p className="mt-5 max-w-2xl text-sm leading-loose tracking-wider text-white/52 text-pretty md:text-base">
                      {tier.boundary}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="flex min-h-[100dvh] items-center justify-center bg-black px-6">
        <AnimatedText
          text={"自由\n源于我们共同遵守的秩序"}
          className="text-metal max-w-3xl text-center font-serif text-4xl leading-loose text-white text-pretty md:text-6xl"
        />
      </section>
    </main>
  );
}
