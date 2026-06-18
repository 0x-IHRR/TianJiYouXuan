"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { motion } from "motion/react";

import { Magnet } from "@/components/animations/Magnet";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "会员体系", href: "/membership" },
  { label: "理念价值", href: "/philosophy" },
  { label: "隐匿之所", href: "/spaces" },
  { label: "极致甄选", href: "/curation" },
  { label: "每周节奏", href: "/events" },
];

const xuanzongLogoStyle: CSSProperties = {
  fontFamily: '"XuanZong", var(--font-sans-sc), sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
};

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
        scrolled
          ? "bg-black/60 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-4 pt-6 md:px-10 md:pt-8">
        <style>{`
          @font-face {
            font-family: "XuanZong";
            src: url("/fonts/xuanzong.otf") format("opentype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
        <Link
          href="/"
          className="group/logo flex items-center gap-3 transition-opacity duration-300"
        >
          <Image
            src="/media/logo-transparent.png"
            alt="Tianji Logo"
            width={32}
            height={32}
            className="size-8 object-contain"
            priority
          />
          <span
            className="font-xuanzong -translate-y-[3px] text-[1.58rem] leading-none tracking-[0.18em] text-white transition-colors duration-500 group-hover/logo:text-[#b88a2a] md:text-[1.76rem]"
            style={xuanzongLogoStyle}
          >
            天机优选
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group font-serif text-sm uppercase tracking-widest text-white/60 transition-colors duration-500 md:hover:text-white"
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:shadow-[0_0_12px_rgba(255,255,255,0.55)] after:transition-all after:duration-500 md:group-hover:after:w-full">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Magnet>
            <Link
              href="/apply"
              className="liquid-glass rounded-full border !border-white/10 !bg-white/5 px-6 py-2 text-xs tracking-[0.2em] text-white/80 shadow-[0_0_15px_rgba(255,255,255,0)] transition-all duration-300 md:hover:!bg-white/10 md:hover:text-white md:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent))]/70"
            >
              APPLY
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
                  className="liquid-glass size-11 rounded-full text-white md:hover:bg-white/10"
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
                <SheetTitle
                  className="font-xuanzong whitespace-nowrap text-xl tracking-[0.32em] text-white"
                  style={xuanzongLogoStyle}
                >
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
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href}
                            className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-xl text-white transition-colors md:hover:text-[hsl(var(--accent))]"
                          >
                            <span>{item.label}</span>
                            <ArrowRight className="size-5" aria-hidden="true" />
                          </Link>
                        }
                      />
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
