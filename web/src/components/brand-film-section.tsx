import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function BrandFilmSection() {
  return (
    <section id="film" className="section-wrap py-12 lg:py-16">
      <Reveal>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="quiet-label">{siteConfig.film.title}</p>
            <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
              影片被嵌进空间里，而不是挂在页面上。
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            {siteConfig.film.description}
          </p>
        </div>

        <Link
          href="/film"
          className="group soft-panel relative block overflow-hidden rounded-[2rem] border-white/55"
        >
          <div className="relative aspect-[16/9] min-h-[18rem]">
            <Image
              src={siteConfig.film.posterSrc}
              alt="品牌影片封面"
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,21,9,0.08),rgba(35,21,9,0.46))]" />
            <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-black/15 px-3 py-1 text-[0.68rem] tracking-[0.28em] text-white uppercase backdrop-blur-sm">
              Brand Film
            </div>
            <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
              <div className="flex size-18 items-center justify-center rounded-full border border-white/35 bg-white/12 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition group-hover:scale-105">
                <Play className="ml-1 size-6 fill-current" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
              <div>
                <p className="font-heading text-2xl">先看气质，再决定是否靠近。</p>
                <p className="mt-2 max-w-lg text-sm text-white/78">
                  这一层只给观看入口，不用文字把一切解释完。
                </p>
              </div>
              <ArrowUpRight className="hidden size-5 shrink-0 sm:block" />
            </div>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
