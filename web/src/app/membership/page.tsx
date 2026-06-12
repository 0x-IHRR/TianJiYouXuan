import type { Metadata } from "next";

import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "会员体系",
};

export default function MembershipPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <article className="mx-auto max-w-4xl px-6 pb-32 pt-40 md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
            Membership
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
            会员体系
          </h1>
        </FadeUp>

        <div className="prose prose-invert mt-16 max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-muted-foreground prose-p:leading-8">
          <FadeUp>
            <p>
              天机优选不是单一消费平台，而是一套围绕线下会所、品质消费与可信连接组织起来的会员体系。
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2>秩序</h2>
            <p>
              会员体系先建立选择边界：什么值得进入，什么应该被过滤，什么适合在真实关系中慢慢确认。
            </p>
          </FadeUp>
          <FadeUp delay={0.16}>
            <h2>资源</h2>
            <p>
              供应链资源让生活选择更清晰，也让品质消费从一次交易变成长期服务、场景连接与关系信任。
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <h2>同行</h2>
            <p>
              好的会员关系不是身份标签，而是在长期、真实、可复访的场景里，看见彼此的判断力与行动方式。
            </p>
          </FadeUp>
        </div>
      </article>
    </main>
  );
}
