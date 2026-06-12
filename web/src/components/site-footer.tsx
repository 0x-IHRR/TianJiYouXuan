import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="section-wrap pb-8">
      <div className="grid gap-8 border-t border-[color:color-mix(in_oklch,var(--border),transparent_8%)] py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="font-heading text-3xl text-foreground">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-xs tracking-[0.22em] text-muted-foreground uppercase">
            Logo、社媒链接、联系方式、备案信息待补充
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <Link href="/film" className="transition hover:text-foreground">
            品牌影片
          </Link>
          <Link href="/membership" className="transition hover:text-foreground">
            会员体系
          </Link>
          <Link href="/philosophy" className="transition hover:text-foreground">
            理念与价值
          </Link>
          <Link href="/apply" className="transition hover:text-foreground">
            申请会员
          </Link>
        </div>
      </div>
    </footer>
  );
}
