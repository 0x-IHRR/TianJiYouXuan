import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const primaryLinkClass =
  "inline-flex items-center justify-center rounded-full border border-[color:color-mix(in_oklch,var(--primary),white_36%)] bg-[color:color-mix(in_oklch,var(--primary),white_14%)] px-4 py-2 text-sm text-primary-foreground shadow-[0_10px_28px_rgba(88,66,40,0.12)] transition hover:-translate-y-0.5 hover:bg-[color:color-mix(in_oklch,var(--primary),white_7%)]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent">
      <div className="section-wrap pt-4">
        <div className="flex items-center justify-between rounded-full border border-white/65 bg-[rgba(255,252,244,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(93,70,42,0.08)] backdrop-blur-xl sm:px-5">
          <Link href="/" className="min-w-0">
            <span className="block truncate font-heading text-lg tracking-[0.04em] text-foreground">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.68rem] tracking-[0.26em] text-muted-foreground sm:block">
              {siteConfig.englishName.toUpperCase()}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/apply" className={primaryLinkClass}>
              申请会员
            </Link>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-white/60 bg-white/55"
                  />
                }
              >
                <Menu />
                <span className="sr-only">打开导航</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-white/60 bg-[color:color-mix(in_oklch,var(--background),white_36%)] p-0"
              >
                <SheetHeader className="border-b border-white/45 pb-5">
                  <SheetTitle className="font-heading text-xl">
                    {siteConfig.name}
                  </SheetTitle>
                  <SheetDescription>
                    一处克制、可信、以长期关系为前提的成员空间。
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col px-4 py-6">
                  <div className="space-y-4">
                    {siteConfig.navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between border-b border-white/35 py-3 text-base"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/apply" className={`${primaryLinkClass} w-full`}>
                      申请会员
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
