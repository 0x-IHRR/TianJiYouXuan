import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function HomeEntrances() {
  return (
    <section id="entrances" className="section-wrap py-12 lg:py-18">
      <Reveal>
        <div className="mb-8 max-w-2xl">
          <p className="quiet-label">THREE ENTRANCES</p>
          <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
            三扇门，不让首页替你做完所有判断。
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {siteConfig.entrances.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08}>
              <Link href={item.href} className="group doorway-link">
                <div className="relative z-10">
                  <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
                    {item.index}
                  </p>
                  <h3 className="mt-20 font-heading text-3xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-sm text-foreground">
                  <span>继续进入</span>
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
