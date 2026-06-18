import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_SC, ZCOOL_XiaoWei } from "next/font/google";

import { LiveWhispers } from "@/components/animations/LiveWhispers";
import { Preloader } from "@/components/animations/Preloader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-sc",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-sc",
  display: "swap",
});

const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-logo-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "天机优选",
    template: "%s | 天机优选",
  },
  description: "以供应链资源为基础的线下生活方式会所",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerifSC.variable} ${cormorantGaramond.variable} ${zcoolXiaoWei.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <div className="relative z-10 flex-1 bg-[#0a0a0a]">{children}</div>
        <SiteFooter />
        <LiveWhispers />
        <Preloader />
      </body>
    </html>
  );
}
