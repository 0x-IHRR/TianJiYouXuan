"use client";

import Link from "next/link";

import { Magnet } from "@/components/animations/Magnet";

const footerLinks = [
  { label: "会员体系", href: "/membership" },
  { label: "理念价值", href: "/philosophy" },
  { label: "隐匿之所", href: "/spaces" },
  { label: "极致甄选", href: "/curation" },
  { label: "每周节奏", href: "/events" },
];

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-0 flex h-screen flex-col justify-end overflow-hidden bg-[#050505] px-6 pb-8 pt-20 text-white md:px-10 md:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(212,175,55,0.13),transparent_36%),linear-gradient(180deg,rgba(10,10,10,0.4),#050505_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end">
        <div className="grid gap-10 border-y border-white/10 py-10 md:grid-cols-3 md:gap-16 md:py-12">
          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.5em] text-white/30">
              Navigate
            </p>
            <nav className="mt-6 flex flex-col items-start gap-4">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-serif text-sm tracking-widest text-white/52 transition-colors duration-500 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.5em] text-white/30">
              Offline Sanctuary
            </p>
            <div className="mt-6 space-y-3 text-xs uppercase tracking-widest text-white/40">
              <p>31°14′N 121°29′E</p>
              <p>China · Shanghai</p>
              <p className="text-white/24">Invitation Address Only</p>
            </div>
          </div>

          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.5em] text-white/30">
              Concierge
            </p>
            <div className="mt-6 space-y-3 text-xs tracking-widest text-white/40">
              <a
                href="mailto:invite@tianjiyouxuan.com"
                className="transition-colors duration-500 hover:text-white"
              >
                invite@tianjiyouxuan.com
              </a>
              <p className="uppercase">Application by referral</p>
              <p className="text-white/24">Response within 72 hours</p>
            </div>
          </div>
        </div>

        <div className="relative py-10 md:py-12">
          <p className="text-center font-display text-[10px] uppercase tracking-[0.5em] text-white/30">
            T I A N J I &nbsp; C U R A T I O N
          </p>
          <p className="text-metal mt-5 text-center font-serif text-[clamp(4rem,15vw,12rem)] leading-none tracking-widest text-white/90">
            天机优选
          </p>

          <Magnet
            strength={5}
            className="absolute right-0 top-[calc(50%-2.5rem)] hidden md:block"
          >
            <button
              type="button"
              aria-label="返回顶部"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center text-xs uppercase tracking-[0.3em] text-white/40 transition-all duration-500 hover:text-white focus-visible:outline-none"
            >
              Top
            </button>
          </Magnet>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.34em] text-white/24 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tianji Youxuan</p>
          <p>Private Offline Lifestyle Club</p>
        </div>
      </div>
    </footer>
  );
}
