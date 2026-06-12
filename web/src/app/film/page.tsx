import type { Metadata } from "next";

import { FadeUp } from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "品牌影片",
};

export default function FilmPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
            Brand Film
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight text-white md:text-7xl">
            品牌影片
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            用真实影像进入天机优选的品牌气质，在克制、私密、可信的场景中理解会员关系
          </p>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="liquid-glass-strong mt-16 overflow-hidden rounded-[2.5rem] p-3">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/media/style-reference/film-cover-black.png"
              className="aspect-video w-full rounded-[2rem] object-cover"
            >
              <source src="/media/brand-film-web.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
