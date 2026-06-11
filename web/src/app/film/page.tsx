import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "品牌影片",
};

export default function FilmPage() {
  return (
    <SubpageShell
      eyebrow="BRAND FILM"
      title="先看空间、节奏与靠近的理由。"
      description="影片页不额外制造营销话术，只让真实影像承担第一层判断。"
    >
      <section className="section-wrap pb-16 lg:pb-20">
        <div className="soft-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <video
            controls
            playsInline
            preload="metadata"
            poster={siteConfig.film.posterSrc}
            className="aspect-video w-full rounded-[1.5rem] bg-[#20150c]"
          >
            <source src={siteConfig.film.videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
    </SubpageShell>
  );
}
