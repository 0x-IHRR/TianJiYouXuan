import type { Metadata } from "next";

import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "会员体系",
};

const membershipCards = [
  {
    index: "01",
    eyebrow: "Boundary",
    title: "秩序与边界",
    body: "先筛选场景，再谈服务。会员体系建立的是可信选择的入口。",
    className: "md:col-span-5 md:row-span-2 md:min-h-[27rem]",
  },
  {
    index: "02",
    eyebrow: "Supply",
    title: "供应链资源",
    body: "从品质消费切入，把稳定来源、服务确认和复访体验放在同一个场景里。",
    className: "md:col-span-7 md:min-h-[17rem]",
  },
  {
    index: "03",
    eyebrow: "Salon",
    title: "线下会所",
    body: "真正的关系需要低噪音空间：可停留、可观察、可慢慢建立信任。",
    className: "md:col-span-4 md:min-h-[19rem]",
  },
  {
    index: "04",
    eyebrow: "Long Term",
    title: "长期同行",
    body: "身份不是重点，持续出现、持续贡献、持续判断才是会员价值。",
    className: "md:col-span-8 md:min-h-[19rem]",
  },
];

export default function MembershipPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:px-10">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.44em] text-[hsl(var(--accent))]">
            Membership System
          </p>
          <h1 className="text-metal mt-7 max-w-4xl font-serif text-[clamp(3.5rem,9vw,8.5rem)] leading-none text-white">
            会员体系
          </h1>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {membershipCards.map((card, index) => (
            <FadeUp key={card.title} delay={index * 0.08} className={card.className}>
              <article className="liquid-glass group relative flex h-full min-h-[18rem] overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06] md:p-9">
                <span className="pointer-events-none absolute -left-5 -top-12 font-display text-[10rem] leading-none text-white/5 md:text-[15rem]">
                  {card.index}
                </span>
                <div className="relative z-10 mt-auto max-w-xl">
                  <p className="font-display text-xs uppercase tracking-[0.42em] text-[hsl(var(--accent))]">
                    {card.eyebrow}
                  </p>
                  <h2 className="text-metal mt-5 font-serif text-[clamp(2rem,4vw,4rem)] leading-tight text-white">
                    {card.title}
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                    {card.body}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.15),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
