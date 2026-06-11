import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function QuietClosing() {
  return (
    <section className="section-wrap py-16 lg:py-20">
      <Reveal className="soft-panel rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="mx-auto max-w-4xl font-heading text-3xl leading-[1.35] text-foreground sm:text-4xl">
          {siteConfig.closing.quote}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
          {siteConfig.closing.note}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/apply"
            className="inline-flex items-center rounded-full border border-[color:color-mix(in_oklch,var(--border),white_10%)] px-4 py-2 text-sm text-foreground transition hover:bg-white/50"
          >
            申请会员
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
