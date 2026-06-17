import type { Metadata } from "next";
import Image from "next/image";

import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "申请成为会员",
};

const steps = [
  {
    title: "提交意向",
    subtitle: "留下基础信息与所在城市",
  },
  {
    title: "顾问沟通",
    subtitle: "确认需求、期望与适配度",
  },
  {
    title: "资质确认",
    subtitle: "理解边界，也确认彼此同频",
  },
  {
    title: "正式入会",
    subtitle: "进入线下会所与会员服务体系",
  },
];

export default function ApplyPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <section className="flex h-[45vh] flex-col justify-end bg-gradient-to-b from-[#111] to-[#0a0a0a] px-6 pb-16 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <FadeUp>
            <h1 className="font-serif text-5xl text-white md:text-7xl">
              申请成为会员
            </h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 text-lg tracking-wide text-muted-foreground">
              提交您的意向，我们的顾问将与您联系
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 md:px-10 lg:grid-cols-12">
        <aside className="lg:col-span-5">
          <div className="sticky top-32">
            <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
              Process
            </p>
            <div className="mt-10 space-y-16">
              {steps.map((step, index) => (
                <FadeUp key={step.title} delay={index * 0.08}>
                  <div className="flex">
                    <span className="font-serif text-3xl text-white/20">
                      {index + 1}.
                    </span>
                    <div>
                      <h2 className="ml-4 text-lg text-white">{step.title}</h2>
                      <p className="ml-12 mt-1 block text-sm text-muted-foreground">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </aside>

        <FadeUp className="lg:col-span-7" delay={0.14}>
          <form className="liquid-glass-strong rounded-[2.5rem] p-8 md:p-12">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Name"
              className="mb-10 w-full border-b border-white/10 bg-transparent pb-3 text-lg text-white transition-colors placeholder:text-white/30 focus:border-[hsl(var(--accent))] focus:outline-none"
            />

            <label className="sr-only" htmlFor="contact">
              Contact
            </label>
            <input
              id="contact"
              name="contact"
              autoComplete="tel"
              placeholder="Contact (Phone/WeChat)"
              className="mb-10 w-full border-b border-white/10 bg-transparent pb-3 text-lg text-white transition-colors placeholder:text-white/30 focus:border-[hsl(var(--accent))] focus:outline-none"
            />

            <label className="sr-only" htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              autoComplete="address-level2"
              placeholder="City"
              className="mb-10 w-full border-b border-white/10 bg-transparent pb-3 text-lg text-white transition-colors placeholder:text-white/30 focus:border-[hsl(var(--accent))] focus:outline-none"
            />

            <button
              type="button"
              className="liquid-glass mt-4 w-full rounded-full py-5 text-white uppercase tracking-widest transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70"
            >
              Submit Intention
            </button>

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
                  Direct Connect
                </p>
                <p className="mt-2 text-sm text-white/40">
                  或直接扫码添加专属顾问微信
                </p>
              </div>
              <div className="liquid-glass relative size-20 shrink-0 overflow-hidden rounded-xl border border-white/10 p-1">
                <Image
                  src="/media/qr-tianji-club.png"
                  alt="专属顾问微信"
                  width={80}
                  height={80}
                  className="size-full object-cover opacity-70 mix-blend-luminosity transition-all duration-500 hover:opacity-100 hover:mix-blend-normal"
                />
              </div>
            </div>
          </form>
        </FadeUp>
      </section>
    </main>
  );
}
