import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const primaryLinkClass =
  "inline-flex items-center justify-center rounded-[6px] border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-[color:color-mix(in_oklch,var(--primary),black_18%)]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:color-mix(in_oklch,var(--border),white_4%)] bg-[rgba(255,253,248,0.94)] backdrop-blur-md">
      <div className="section-wrap">
        <div className="flex items-center justify-between gap-5 py-4">
          <Link href="/" className="min-w-0 shrink-0">
            <span className="block truncate text-lg font-bold tracking-[0.02em] text-foreground">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.66rem] font-semibold tracking-[0.16em] text-muted-foreground sm:block">
              {siteConfig.englishName.toUpperCase()}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/apply" className={primaryLinkClass}>
              加入会员
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-[6px] border border-[color:color-mix(in_oklch,var(--border),white_10%)] bg-transparent"
                  />
                }
              >
                <Menu />
                <span className="sr-only">打开导航</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-border bg-background p-0"
              >
                <SheetHeader className="border-b border-border pb-5">
                  <SheetTitle className="font-heading text-xl">
                    {siteConfig.name}
                  </SheetTitle>
                  <SheetDescription>
                    资源整合、学习成长、事业发展与品质生活的会员俱乐部。
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col px-4 py-6">
                  <div className="space-y-4">
                    {siteConfig.navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between border-b border-border py-3 text-base"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/apply" className={`${primaryLinkClass} w-full`}>
                      加入会员
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
