import { AnimatedText } from "@/components/animations/AnimatedText";
import { EntranceHoverReveal } from "@/components/animations/EntranceHoverReveal";
import { FlyThroughGallery } from "@/components/animations/FlyThroughGallery";
import { ScrollIndicator } from "@/components/animations/ScrollIndicator";

const entrances = [
  {
    number: "01",
    title: "秩序与边界",
    href: "/membership",
    image: "/media/subpages/membership/hero-membership-salon.png",
    alt: "天机优选会员体系空间",
  },
  {
    number: "02",
    title: "真实与长期",
    href: "/philosophy",
    image: "/media/subpages/philosophy/hero-philosophy-still-life.png",
    alt: "天机优选理念静物",
  },
  {
    number: "03",
    title: "门槛与同频",
    href: "/apply",
    image: "/media/subpages/apply/hero-application-invitation.png",
    alt: "天机优选申请邀请",
  },
];

export default function Home() {
  return (
    <main aria-label="天机优选官网首页" className="bg-[#0a0a0a]">
      <section className="relative h-[100dvh] w-full overflow-x-clip">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/brand-film-cover.png"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/media/brand-film-web.mp4" type="video/mp4" />
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        <div className="pointer-events-none absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <div className="absolute bottom-12 left-6 z-20 max-w-sm md:left-12">
          <p className="text-metal mb-2 font-serif text-2xl text-white">
            重塑生活秩序。
          </p>
          <p className="text-xs tracking-widest text-muted-foreground">
            以供应链资源为基础的线下生活方式会所
          </p>
        </div>

        <ScrollIndicator />
      </section>

      <section className="flex min-h-[60vh] items-center justify-center bg-[#0A0A0A] px-6 py-28">
        <AnimatedText
          text="在可信的选择中，重塑生活秩序。"
          className="text-metal max-w-5xl text-center font-serif text-[clamp(2.4rem,6.8vw,7rem)] leading-tight text-white text-pretty md:leading-[1.08]"
        />
      </section>

      <section className="relative z-20 bg-[#0a0a0a] px-6 py-32 md:px-10 md:py-40">
        <EntranceHoverReveal items={entrances} />
      </section>

      <section className="flex min-h-[80vh] items-center justify-center bg-[#0a0a0a] px-6 py-32">
        <AnimatedText
          text="选择，是一种秩序；连接，是一种力量；共益，是一种未来。"
          className="max-w-5xl text-center font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-snug text-white text-pretty"
        />
      </section>

      <FlyThroughGallery />
    </main>
  );
}
