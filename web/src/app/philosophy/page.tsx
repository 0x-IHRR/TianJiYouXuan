import type { Metadata } from "next";

import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "理念与价值",
};

export default function PhilosophyPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <article className="mx-auto max-w-4xl px-6 pb-32 pt-40 md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
            Philosophy
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
            理念与价值
          </h1>
        </FadeUp>

        <div className="prose prose-invert mt-16 max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-muted-foreground prose-p:leading-8">
          <FadeUp>
            <p>
              天机优选相信，高价值生活不只来自消费本身，而来自消费背后的认知、资源与关系。
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>选择，是一种秩序</h2>
            <p>
              当选择太多，品质生活真正缺少的不是更多信息，而是可信来源、清晰边界与更少试错。
            </p>
          </FadeUp>
          <FadeUp delay={0.16}>
            <h2>连接，是一种力量</h2>
            <p>
              连接不应只停留在交换名片，而应发生在服务、活动、品鉴与长期协作的真实场景里。
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <h2>共益，是一种未来</h2>
            <p>
              一个会所的长期价值，来自成员、供应链与服务体系之间更稳定、更可信的互相成就。
            </p>
          </FadeUp>
        </div>
      </article>
    </main>
  );
}
