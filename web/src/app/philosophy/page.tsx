import type { Metadata } from "next";

import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "理念与价值",
};

const philosophyCards = [
  {
    index: "01",
    eyebrow: "Choice",
    title: "选择是一种秩序",
    body: "不追求更多选项，而是让可信来源替代反复试错。",
    className: "md:col-span-8 md:min-h-[20rem]",
  },
  {
    index: "02",
    eyebrow: "Connection",
    title: "连接是一种力量",
    body: "连接发生在真实服务、真实场景和可复访的关系里。",
    className: "md:col-span-4 md:row-span-2 md:min-h-[32rem]",
  },
  {
    index: "03",
    eyebrow: "Mutual Benefit",
    title: "共益是一种未来",
    body: "会员、供应链和会所空间形成稳定互相成就的关系。",
    className: "md:col-span-5 md:min-h-[18rem]",
  },
  {
    index: "04",
    eyebrow: "Quiet Luxury",
    title: "高级来自克制",
    body: "少一点噪音，多一点确认；少一点展示，多一点长期价值。",
    className: "md:col-span-7 md:min-h-[18rem]",
  },
];

export default function PhilosophyPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:px-10">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.44em] text-[hsl(var(--accent))]">
            Philosophy
          </p>
          <h1 className="text-metal mt-7 max-w-5xl font-serif text-[clamp(3.4rem,8vw,8rem)] leading-none text-white">
            理念与价值
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="font-wenkai mt-12 max-w-3xl text-xl leading-10 text-white/68 md:text-2xl">
            高价值生活不是更高频的消费，而是更少噪音、更准判断、更可信的连接。
          </p>
        </FadeUp>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-24">
          {philosophyCards.map((card, index) => (
            <FadeUp key={card.title} delay={0.08 + index * 0.08} className={card.className}>
              <article className="liquid-glass group relative flex h-full min-h-[18rem] overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06] md:p-9">
                <span className="pointer-events-none absolute -left-6 -top-12 font-display text-[10rem] leading-none text-white/5 md:text-[15rem]">
                  {card.index}
                </span>
                <div className="relative z-10 mt-auto max-w-2xl">
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
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.11),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
