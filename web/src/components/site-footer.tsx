import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="section-wrap pb-8">
      <div className="grid gap-8 border-t border-[color:color-mix(in_oklch,var(--border),transparent_8%)] py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="text-2xl font-bold text-foreground">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            联系方式、备案信息、社媒链接待补充
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Link href="/apply" className="font-semibold text-primary transition hover:text-foreground">
            加入会员
          </Link>
        </div>
      </div>
    </footer>
  );
}
