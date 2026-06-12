import type { Metadata } from "next";
import "@fontsource/lxgw-wenkai";
import "@fontsource/ma-shan-zheng";
import "@fontsource/zcool-xiaowei";
import "./globals.css";

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
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
