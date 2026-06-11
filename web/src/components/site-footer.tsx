import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="section-wrap pb-8">
      <div className="flex flex-col gap-6 border-t border-white/45 py-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-2xl text-foreground">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
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
