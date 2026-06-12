import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScrollIndicator } from "@/components/animations/ScrollIndicator";

const entrances = [
  {
    label: "01 - MEMBERSHIP",
    title: "秩序与边界",
    description: "了解线下会所与品质消费的连接体系。",
    href: "/membership",
  },
  {
    label: "02 - PHILOSOPHY",
    title: "真实与长期",
    description: "我们如何通过供应链，减少生活中的试错成本。",
    href: "/philosophy",
  },
  {
    label: "03 - APPLY",
    title: "门槛与同频",
    description: "申请不是一次仓促的决定，而是彼此选择的开始。",
    href: "/apply",
  },
];

export default function Home() {
  return (
    <main aria-label="天机优选官网首页" className="bg-[#0a0a0a]">
      <section className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-x-clip">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/brand-film-cover.png"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/media/brand-film-web.mp4" type="video/mp4" />
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-[#0a0a0a]" />

        <div className="relative z-20 flex flex-col items-center">
          <FadeUp delay={0.2}>
            <h1 className="max-w-5xl px-4 text-center font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-wide text-white text-pretty">
              在可信的选择中，重塑生活秩序。
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-8 max-w-2xl px-4 text-center text-[clamp(1rem,1.5vw,1.25rem)] tracking-[0.15em] text-muted-foreground text-pretty">
              以供应链资源为基础的线下生活方式会所
            </p>
          </FadeUp>
        </div>

        <ScrollIndicator />
      </section>

      <section className="relative z-20 bg-[#0a0a0a] px-6 pb-40 pt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
          {entrances.map((item, index) => (
            <FadeUp key={item.href} delay={index * 0.15}>
              <Link
                href={item.href}
                className="liquid-glass-strong group relative flex min-h-[23rem] cursor-pointer flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70 sm:p-10"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
                  {item.label}
                </span>
                <h2 className="mt-4 font-serif text-3xl text-white">
                  {item.title}
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
                <ArrowRight
                  className="absolute bottom-8 right-8 size-6 -translate-x-4 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="flex min-h-[80vh] items-center justify-center bg-[#0a0a0a] px-6 py-32">
        <AnimatedText
          text="选择，是一种秩序；连接，是一种力量；共益，是一种未来。"
          className="max-w-5xl text-center font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-snug text-white text-pretty"
        />
      </section>
    </main>
  );
}
