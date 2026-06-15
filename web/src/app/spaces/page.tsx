"use client";

import Image from "next/image";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";
import { TiltCard } from "@/components/animations/TiltCard";

const spaces = [
  {
    number: "01",
    title: "接待大厅",
    label: "Reception",
    body: "商务接待、洽谈交流、活动签到，在抵达的第一刻完成身份确认与节奏切换",
    className: "md:col-span-5",
  },
  {
    number: "02",
    title: "商务会议室",
    label: "Board Room",
    body: "会议培训、项目路演、团队讨论，为需要深度判断的对话保留完整时间",
    className: "md:col-span-7 md:mt-24",
  },
  {
    number: "03",
    title: "学习交流区",
    label: "Reading",
    body: "自主学习、阅读充电、思想碰撞，让认知先于表达发生",
    className: "md:col-span-4 md:col-start-2",
  },
  {
    number: "04",
    title: "茶室空间",
    label: "Tea Room",
    body: "茶道品茗、商务洽谈、静心交流，适合低声、缓慢、彼此留白的关系建立",
    className: "md:col-span-5 md:mt-32",
  },
  {
    number: "05",
    title: "培训教室",
    label: "Learning",
    body: "课程培训、主题分享、专业讲座，让每一次聚集都有可沉淀的内容",
    className: "md:col-span-6 md:col-start-1",
  },
  {
    number: "06",
    title: "休闲洽谈区",
    label: "Lounge",
    body: "轻松交流、朋友会面、放松身心，把正式会谈之外的信任慢慢留住",
    className: "md:col-span-6 md:mt-20",
  },
];

export default function SpacesPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex min-h-[90vh] items-end overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-28">
        <Image
          src="/media/generated/tianji/spaces-lobby-sanctuary.png"
          alt="隐匿之所的暗光接待大厅"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58 saturate-[0.76]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/64 to-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.56em] text-[hsl(var(--accent))]">
              The Sanctuary
            </p>
            <h1 className="text-metal mt-8 max-w-3xl text-balance font-serif text-6xl leading-tight text-white md:text-8xl">
              隐匿之所
            </h1>
            <p className="mt-8 max-w-xl text-pretty font-serif text-xl leading-loose tracking-[0.18em] text-white/68 md:text-2xl">
              合理使用资源，共享美好空间
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pt-44">
        <FadeUp>
          <div className="mx-auto max-w-6xl text-center">
            <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
              Spaces
            </p>
            <h2 className="text-metal mx-auto mt-8 max-w-5xl font-serif text-[clamp(1.9rem,5.4vw,5.8rem)] leading-tight tracking-[0.04em] text-white [line-break:strict] [word-break:keep-all] md:tracking-[0.08em]">
              <span className="whitespace-nowrap">空间不负责热闹，</span>
              <br />
              <span className="whitespace-nowrap">只负责让关系安静发生</span>
            </h2>
            <p className="mx-auto mt-10 max-w-2xl text-sm leading-loose tracking-wider text-white/52 text-pretty md:text-base">
              会所的边界并非冷漠，而是对每一次到访、每一段谈话和每一位会员的保护。不同空间承载不同密度的交流，避免噪音覆盖真正重要的判断。
            </p>
          </div>
        </FadeUp>

        <div className="mt-28 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
          {spaces.map((space, index) => (
            <FadeUp key={space.title} delay={index * 0.06} className={space.className}>
              <TiltCard className="liquid-glass-strong group relative min-h-[18rem] overflow-hidden rounded-[2rem] p-7 transition-colors duration-700 hover:bg-white/[0.055] md:p-9">
                <div className="pointer-events-none absolute -right-10 -top-12 font-display text-[9rem] leading-none text-white/[0.035] transition-colors duration-700 group-hover:text-[hsl(var(--accent))]/10 md:text-[12rem]">
                  {space.number}
                </div>
                <p className="font-display text-xs uppercase tracking-[0.46em] text-[hsl(var(--accent))]">
                  {space.label}
                </p>
                <h3 className="text-metal mt-7 max-w-md text-balance font-serif text-3xl leading-tight text-white md:text-5xl">
                  {space.title}
                </h3>
                <p className="mt-8 max-w-lg text-sm leading-loose text-white/56 text-pretty md:text-base">
                  {space.body}
                </p>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-28">
        <Image
          src="/media/generated/tianji/spaces-tea-ceremony.png"
          alt="安静茶室中的一盏热茶"
          fill
          sizes="100vw"
          className="object-cover opacity-24 saturate-[0.7]"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/66" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.11),transparent_34rem)]" />
        <AnimatedText
          text="真正的共享空间，先由共同遵守的秩序保护"
          className="relative z-10 max-w-4xl text-center font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-snug tracking-widest text-white text-pretty"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-40 pt-10 md:px-10 md:pb-52">
        <FadeUp>
          <p className="border-y border-white/10 py-16 text-center font-serif text-3xl tracking-widest text-white/40 md:py-24 md:text-5xl">
            预约优先&nbsp;&nbsp;|&nbsp;&nbsp;保持安静&nbsp;&nbsp;|&nbsp;&nbsp;会员专属
          </p>
        </FadeUp>
      </section>
    </main>
  );
}
