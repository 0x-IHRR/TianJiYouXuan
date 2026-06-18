"use client";

import Link from "next/link";

import { Magnet } from "@/components/animations/Magnet";

const ruleLinks = [
  { label: "会员公约", href: "/rules/conduct" },
  { label: "服务协议", href: "/rules/terms" },
  { label: "隐私政策", href: "/rules/privacy" },
];

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-0 flex h-screen flex-col justify-end overflow-hidden bg-[#050505] px-6 pb-8 pt-20 text-white md:px-10 md:pb-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(212,175,55,0.13),transparent_36%),linear-gradient(180deg,rgba(10,10,10,0.4),#050505_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end">
        <div className="grid gap-6 border-y border-white/10 py-6 md:grid-cols-3 md:gap-16 md:py-12">
          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.5em] text-white/30">
              Protocols
            </p>
            <nav className="mt-6 flex flex-col items-start gap-4">
              {ruleLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-serif text-sm tracking-widest text-white/52 transition-colors duration-500 md:hover:text-white"
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
                className="transition-colors duration-500 md:hover:text-white"
              >
                invite@tianjiyouxuan.com
              </a>
              <p className="uppercase">Application by referral</p>
              <p className="text-white/24">Response within 72 hours</p>
            </div>
          </div>
        </div>

        <div className="relative py-10 md:py-12">
          <p className="text-center font-display text-[10px] uppercase tracking-[0.2em] text-white/30 md:tracking-[0.5em]">
            T I A N J I &nbsp; C U R A T I O N
          </p>

          <div className="relative mx-auto mt-5 w-fit text-center font-xuanzong text-5xl leading-none tracking-widest md:font-logo md:text-[clamp(4.5rem,16vw,13rem)] md:font-black md:tracking-[0.15em]">
            {/* Local Engine with Slow-Motion Timeline (Kept from V58) */}
            <style>{`
              @keyframes mercury-sweep-engine {
                0% { background-position: 200% center; }   
                50% { background-position: -100% center; } 
                100% { background-position: -100% center; } 
              }
            `}</style>

            {/* Base Layer: 3D Extrusion & Deep Shadows */}
            <span
              className="absolute left-0 top-[3px] select-none text-[#1a1a1a]"
              style={{
                /* Slightly lightened the first layer of bevel to match the brighter platinum top */
                textShadow:
                  "0 1px 0 #555, 0 2px 0 #222, 0 8px 24px rgba(0,0,0,1), 0 12px 32px rgba(0,0,0,0.8)",
              }}
              aria-hidden="true"
            >
              天机优选
            </span>

            {/* Surface Layer: Platinum Base with Razor-Thin Champagne Flow */}
            <span
              className="relative z-10 block"
              style={{
                backgroundColor: "#7a7a7c", /* Premium Titanium Platinum Base */
                /* Razor-thin highlight (48.5% to 51.5%) tinted with Champagne (#fffaf0) */
                backgroundImage: "linear-gradient(110deg, transparent 48.5%, #fffaf0 50%, transparent 51.5%)",
                backgroundSize: "200% 100%",
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                /* Extreme Slow-Motion: Total 20s cycle (10 seconds of slow crawling light) */
                animation: "mercury-sweep-engine 20s ease-in-out infinite",
              }}
            >
              天机优选
            </span>
          </div>

          <Magnet
            strength={5}
            className="absolute right-0 top-[calc(50%-2.5rem)] hidden md:block"
          >
            <button
              type="button"
              aria-label="返回顶部"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center text-xs uppercase tracking-[0.3em] text-white/40 transition-all duration-500 md:hover:text-white focus-visible:outline-none"
            >
              Top
            </button>
          </Magnet>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/24 md:flex-row md:items-center md:justify-between md:tracking-[0.34em]">
          <p>© 2026 Tianji Youxuan</p>
          <p>Private Offline Lifestyle Club</p>
        </div>
      </div>
    </footer>
  );
}
