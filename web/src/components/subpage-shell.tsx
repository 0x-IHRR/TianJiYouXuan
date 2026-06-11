import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SubpageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SubpageShell({
  eyebrow,
  title,
  description,
  children,
}: SubpageShellProps) {
  return (
    <div className="page-ambient">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-wrap pt-16 pb-10 sm:pt-20 lg:pt-24">
          <p className="quiet-label">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.08] text-foreground">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-muted-foreground">
            {description}
          </p>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
