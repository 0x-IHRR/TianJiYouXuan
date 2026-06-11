import { ArrowDown } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="section-wrap pt-16 pb-12 sm:pt-20 lg:pt-24">
      <Reveal className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:items-end">
        <div className="max-w-4xl">
          <p className="quiet-label">{siteConfig.hero.eyebrow}</p>
          <h1 className="mt-8 max-w-5xl font-heading text-[clamp(2.8rem,6vw,6.2rem)] leading-[1.05] text-[color:color-mix(in_oklch,var(--foreground),black_8%)]">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-8 text-muted-foreground sm:text-[1.12rem]">
            {siteConfig.hero.description}
          </p>
          <a
            href="#film"
            className="mt-14 inline-flex items-center gap-3 text-sm tracking-[0.22em] text-muted-foreground uppercase transition hover:text-foreground"
          >
            <span>向下进入</span>
            <ArrowDown className="size-4" />
          </a>
        </div>

        <div className="relative hidden min-h-[24rem] lg:block">
          <div className="absolute inset-x-8 inset-y-0 rounded-t-[10rem] rounded-b-[2.5rem] border border-white/45 bg-white/22 shadow-[inset_0_0_0_1px_rgba(164,130,91,0.08)]" />
          <div className="absolute inset-x-14 inset-y-8 rounded-t-[9rem] rounded-b-[2rem] border border-[rgba(129,96,54,0.16)]" />
          <div className="absolute inset-x-20 top-14 h-px bg-gradient-to-r from-transparent via-[rgba(120,89,54,0.35)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 space-y-6">
            {siteConfig.hero.inscriptions.map((item, index) => (
              <div key={item} className="pl-5">
                <p className="text-[0.72rem] tracking-[0.3em] text-muted-foreground uppercase">
                  刻痕 0{index + 1}
                </p>
                <p className="mt-2 font-heading text-2xl leading-tight text-foreground/88">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
