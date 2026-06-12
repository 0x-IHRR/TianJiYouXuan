import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

type SiteFooterProps = {
  variant?: "light" | "dark";
};

export function SiteFooter({ variant = "light" }: SiteFooterProps) {
  const isDark = variant === "dark";
  const footerClass = isDark
    ? "section-wrap bg-[#0c0c0c] pb-8 text-[#d7e2ea]"
    : "section-wrap pb-8";
  const panelClass = isDark
    ? "grid gap-8 border-t border-white/12 py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
    : "grid gap-8 border-t border-[color:color-mix(in_oklch,var(--border),transparent_8%)] py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end";
  const titleClass = isDark
    ? "text-2xl font-bold text-[#f5fbff]"
    : "text-2xl font-bold text-foreground";
  const mutedClass = isDark
    ? "mt-3 max-w-xl text-sm leading-7 text-[#a8b5bf]"
    : "mt-3 max-w-xl text-sm leading-7 text-muted-foreground";
  const metaClass = isDark
    ? "mt-4 text-xs font-semibold tracking-[0.14em] text-[#798691] uppercase"
    : "mt-4 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase";
  const linksClass = isDark
    ? "flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#a8b5bf]"
    : "flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground";
  const linkHoverClass = isDark
    ? "transition hover:text-[#f5fbff]"
    : "transition hover:text-foreground";
  const joinClass = isDark
    ? "font-semibold text-[#f1b24d] transition hover:text-[#f5fbff]"
    : "font-semibold text-primary transition hover:text-foreground";

  return (
    <footer className={footerClass}>
      <div className={panelClass}>
        <div>
          <p className={titleClass}>{siteConfig.name}</p>
          <p className={mutedClass}>
            {siteConfig.description}
          </p>
          <p className={metaClass}>
            © 2026 TIANJI SELECTION
          </p>
        </div>
        <div className={linksClass}>
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={linkHoverClass}>
              {item.label}
            </Link>
          ))}
          <Link href="/apply" className={joinClass}>
            加入会员
          </Link>
        </div>
      </div>
    </footer>
  );
}
