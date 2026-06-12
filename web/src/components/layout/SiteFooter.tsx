import Link from "next/link";

const footerLinks = [
  { label: "会员体系", href: "/membership" },
  { label: "理念与价值", href: "/philosophy" },
  { label: "申请会员", href: "/apply" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-6 pb-12 pt-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-serif text-4xl text-white/90 md:text-6xl">
          天机优选.
        </p>

        <div className="mt-20 flex flex-col gap-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <span>WeChat</span>
            <span>Xiaohongshu</span>
            <span>© 2026 Tianji Youxuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
