"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { motion } from "motion/react";

import { Magnet } from "@/components/animations/Magnet";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "会员体系", href: "/membership" },
  { label: "理念与价值", href: "/philosophy" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "liquid-glass" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-4 pt-6 md:px-10 md:pt-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.2em] text-white transition-colors duration-300 hover:text-[hsl(var(--accent))]"
        >
          天机优选
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Magnet>
            <Link
              href="/apply"
              className="liquid-glass flex items-center gap-2 rounded-full px-8 py-2.5 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70"
            >
              Apply
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Magnet>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="liquid-glass size-11 rounded-full text-white hover:bg-white/10"
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">打开导航</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="liquid-glass-strong w-[86vw] border-l border-white/10 bg-[#0a0a0a]/92 p-0 text-white"
            >
              <SheetHeader className="border-b border-white/10 p-6 text-left">
                <SheetTitle className="font-serif text-2xl tracking-[0.16em] text-white">
                  天机优选
                </SheetTitle>
                <SheetDescription className="text-sm leading-7 text-muted-foreground">
                  以供应链资源为基础的线下生活方式会所
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-1 flex-col px-6 py-8">
                <div className="space-y-2">
                  {[...navLinks, { label: "申请会员", href: "/apply" }].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.1 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-2xl text-white transition-colors hover:text-[hsl(var(--accent))]"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="size-5" aria-hidden="true" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
