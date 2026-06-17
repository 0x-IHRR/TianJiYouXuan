import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FlyThroughGallery } from "@/components/animations/FlyThroughGallery";
import { HeroVideo } from "@/components/animations/HeroVideo";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";
import { ScrollIndicator } from "@/components/animations/ScrollIndicator";
import { SilentMetrics } from "@/components/animations/SilentMetrics";

const entrances = [
  {
    number: "01",
    title: "会员体系",
    description: "用清晰的会员边界，筛选稳定关系与可信资源",
    href: "/membership",
    image: "/media/generated/tianji/membership-threshold-tunnel.png",
    alt: "象征会员体系的暗光长廊",
  },
  {
    number: "02",
    title: "理念价值",
    description: "摒弃即时的短视交易，我们选择做时间的朋友",
    href: "/philosophy",
    image: "/media/generated/tianji/philosophy-hourglass-black-sand.png",
    alt: "象征理念与长期的黑沙漏",
  },
  {
    number: "03",
    title: "隐匿之所",
    description: "城市中心的物理避难所，为您屏蔽喧嚣重建秩序",
    href: "/spaces",
    image: "/media/generated/tianji/spaces-lobby-sanctuary.png",
    alt: "城市中心的隐秘庇护所",
  },
  {
    number: "04",
    title: "极致甄选",
    description: "极致的供应链溯源，把顶级生活方式放回真实场景",
    href: "/curation",
    image: "/media/generated/tianji/curation-black-gift-card.png",
    alt: "极致甄选的黑金卡片",
  },
  {
    number: "05",
    title: "每周节奏",
    description: "不从众的私密圆桌，摒弃无效社交，只与对的人对话",
    href: "/events",
    image: "/media/generated/tianji/events-blurred-roundtable.png",
    alt: "私密圆桌活动",
  },
];

const archetypeQuotes = [
  {
    quote: "在信息过载的时代，我需要一个能替我做减法的地方。",
    attribution: "医疗科技领域连续创业者",
  },
  {
    quote: "秩序感，是最高级的自由。",
    attribution: "家族信托合伙人",
  },
];

export default function Home() {
  return (
    <main aria-label="天机优选官网首页" className="bg-[#0a0a0a]">
      <section className="relative h-[100dvh] w-full overflow-x-clip">
        <HeroVideo />

        <div className="pointer-events-none absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <ScrollIndicator />
      </section>

      <section className="flex min-h-[60vh] items-center justify-center bg-[#0a0a0a] px-6 py-20">
        <AnimatedText
          text={"在可信的选择中，重塑生活秩序\n真正的奢侈，并非占有更多，而是省去筛选的疲惫"}
          className="max-w-5xl text-center font-serif text-[clamp(1.5rem,6vw,4.5rem)] leading-snug text-white text-pretty tracking-widest"
        />
      </section>

      <section className="relative z-20 bg-[#0a0a0a] py-0 md:py-40">
        <div className="flex w-full flex-col gap-1 md:mx-auto md:h-[70vh] md:max-w-7xl md:flex-row md:gap-4 md:px-6">
          {entrances.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative h-[100svh] w-full shrink-0 overflow-hidden md:h-full md:flex-1 md:rounded-[2rem]"
              style={{ willChange: "flex-grow, transform, opacity" }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="transform-gpu object-cover opacity-55 saturate-[0.78] transition-[opacity,transform] duration-700 ease-out will-change-transform group-hover:scale-105 group-hover:opacity-[0.86] group-hover:saturate-100 group-focus-visible:scale-105 group-focus-visible:opacity-[0.86]"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/28 to-white/5 transition duration-700 group-hover:from-black/80 group-hover:via-black/12 group-focus-visible:from-black/80 group-focus-visible:via-black/12" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100 [background:radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.2),transparent_34%)]" />

              <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 md:p-8">
                <div className="flex items-baseline gap-4 md:gap-5">
                  <span className="font-display text-sm tracking-[0.34em] text-[hsl(var(--accent))]/80 md:text-base">
                    {item.number}
                  </span>
                  <h2 className="text-metal font-serif text-3xl leading-none text-white md:text-[clamp(2rem,3.2vw,4rem)]">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-5 max-w-md translate-y-2 text-sm leading-relaxed text-white/80 opacity-70 transition-all duration-700 ease-out md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SilentMetrics />

      <section className="flex min-h-[80vh] items-start justify-center bg-[#0a0a0a] px-6 pb-32 pt-12">
        <AnimatedText
          text={"选择，是一种秩序；\n连接，是一种力量；\n共益，是一种未来。"}
          className="max-w-4xl break-words text-center font-serif text-[clamp(1.5rem,6vw,4.5rem)] leading-snug text-white text-balance tracking-widest"
        />
      </section>

      <FlyThroughGallery />

      <section className="bg-[#0a0a0a] px-0 pb-24 pt-48 md:pb-28 md:pt-64">
        <p className="mb-12 text-center font-serif text-sm uppercase tracking-[0.3em] text-white/50">
          同频的印记
        </p>
        <InfiniteMarquee />
      </section>

      <section className="bg-[#0a0a0a] px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="mb-14 text-center font-serif text-sm uppercase tracking-[0.3em] text-white/50">
            The Inner Circle
          </p>
          <div className="space-y-8 md:space-y-12">
            {archetypeQuotes.map((item, index) => (
              <figure
                key={item.attribution}
                className={`liquid-glass-strong max-w-3xl rounded-[2rem] p-8 md:p-12 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <blockquote className="font-serif text-2xl leading-loose text-white/70 italic text-pretty md:text-3xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 w-full text-right text-xs tracking-widest text-[hsl(var(--accent))]">
                  — {item.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-[50vh] flex-col items-center justify-center border-t border-white/5 bg-[#0a0a0a] px-6 py-32">
        <h2 className="mb-12 flex items-center justify-center gap-8 text-center font-serif text-3xl tracking-[0.4em] text-white md:text-5xl">
          <span>不从众</span>
          <span className="text-xl text-white/30">/</span>
          <span>只同频</span>
        </h2>
        <Link
          href="/apply"
          className="liquid-glass rounded-full px-10 py-4 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70"
        >
          申请加入
        </Link>
      </section>
    </main>
  );
}
