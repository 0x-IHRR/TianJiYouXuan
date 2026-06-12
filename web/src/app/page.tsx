import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FlyThroughGallery } from "@/components/animations/FlyThroughGallery";
import { ScrollIndicator } from "@/components/animations/ScrollIndicator";

const entrances = [
  {
    number: "01",
    title: "秩序与边界",
    description: "用清晰的会员边界，筛选稳定关系与可信资源",
    href: "/membership",
    image: "/media/subpages/membership/hero-membership-salon.png",
    alt: "天机优选会员体系空间",
  },
  {
    number: "02",
    title: "真实与长期",
    description: "把供应链、品鉴与线下连接放回真实生活现场",
    href: "/philosophy",
    image: "/media/subpages/philosophy/hero-philosophy-still-life.png",
    alt: "天机优选理念静物",
  },
  {
    number: "03",
    title: "门槛与同频",
    description: "申请不是即时交易，而是彼此确认节奏与价值观",
    href: "/apply",
    image: "/media/subpages/apply/hero-application-invitation.png",
    alt: "天机优选申请邀请",
  },
];

export default function Home() {
  return (
    <main aria-label="天机优选官网首页" className="bg-[#0a0a0a]">
      <section className="relative h-[100dvh] w-full overflow-x-clip">
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

        <div className="pointer-events-none absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <ScrollIndicator />
      </section>

      <section className="flex min-h-[60vh] items-center justify-center bg-[#0a0a0a] px-6 py-20">
        <AnimatedText
          text={"在可信的选择中，重塑生活秩序\n真正的奢侈，并非占有更多，而是省去筛选的疲惫"}
          className="max-w-5xl text-center font-serif text-[clamp(1.8rem,3.5vw,4rem)] leading-snug text-white text-pretty tracking-widest"
        />
      </section>

      <section className="relative z-20 bg-[#0a0a0a] py-32 md:py-40">
        <div className="mx-auto flex h-[60vh] max-w-7xl flex-col gap-4 px-6 md:flex-row">
          {entrances.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="liquid-glass-strong group relative flex flex-1 transform-gpu overflow-hidden rounded-[2rem] bg-black transition-[flex-grow,opacity,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform hover:flex-[3] focus-visible:flex-[3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70"
              style={{ willChange: "flex-grow, transform, opacity" }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="transform-gpu object-cover opacity-55 saturate-[0.78] transition-[opacity,transform,filter] duration-700 ease-out will-change-transform group-hover:scale-105 group-hover:opacity-[0.86] group-hover:saturate-100 group-focus-visible:scale-105 group-focus-visible:opacity-[0.86]"
                style={{ willChange: "transform, opacity, filter" }}
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
                <p className="mt-5 max-w-md translate-y-4 text-sm leading-relaxed text-white/72 opacity-0 transition-[opacity,transform] duration-700 ease-out will-change-transform group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex min-h-[80vh] items-center justify-center bg-[#0a0a0a] px-6 py-32">
        <AnimatedText
          text="选择，是一种秩序；连接，是一种力量；共益，是一种未来"
          className="max-w-5xl -translate-y-12 text-center font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-snug text-white text-pretty md:-translate-y-16"
        />
      </section>

      <FlyThroughGallery />

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
