import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_SC({
  variable: "--font-sans-sc",
  weight: ["400", "500", "700"],
  display: "swap",
});

const headingFont = Noto_Serif_SC({
  variable: "--font-serif-sc",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "天机优选",
    template: "%s | 天机优选",
  },
  description: "一个以会员制组织品质生活、线下关系与长期信任的会所式官网。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
