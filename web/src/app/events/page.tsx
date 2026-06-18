"use client";

import Image from "next/image";

import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeUp } from "@/components/animations/FadeUp";
import { TiltCard } from "@/components/animations/TiltCard";

const weeklyRhythm = [
  {
    day: "周一",
    english: "MONDAY",
    title: "AI 成长夜",
    body: "AI 工具、AI 创业、AI 变现，把技术热度转化为可执行的认知更新",
  },
  {
    day: "周二",
    english: "TUESDAY",
    title: "财富认知夜",
    body: "趋势分析、商业模式、投资逻辑，在变化中训练长期判断",
  },
  {
    day: "周三",
    english: "WEDNESDAY",
    title: "资源链接夜",
    body: "资源交换、项目对接、会员介绍，让关系从认识进入真实协作",
  },
  {
    day: "周四",
    english: "THURSDAY",
    title: "健康生活夜",
    body: "抗衰、养生、美学、形象管理，把体面生活还给身体本身",
  },
  {
    day: "周五",
    english: "FRIDAY",
    title: "创业分享夜",
    body: "创业故事、企业经营、商业经验，在真实案例里复盘选择的代价",
  },
  {
    day: "周六",
    english: "SATURDAY",
    title: "会员茶话会",
    body: "轻松交流、交朋友、拓人脉，让非正式时刻沉淀更稳定的信任",
  },
  {
    day: "周日",
    english: "SUNDAY",
    title: "家庭成长日",
    body: "夫妻成长、亲子教育、家庭幸福，把成长从个人延伸到亲密关系",
  },
];

export default function EventsPage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex min-h-[82vh] items-end overflow-hidden px-6 pb-20 pt-24 md:min-h-[92vh] md:px-10 md:pb-28 md:pt-32">
        <Image
          src="/media/generated/tianji/events-blurred-roundtable.png"
          alt="同频会员活动现场"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58 saturate-[0.72]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/68 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <FadeUp>
            <p className="font-display text-xs uppercase tracking-[0.56em] text-[hsl(var(--accent))]">
              Weekly Rhythm
            </p>
            <h1 className="text-metal mt-8 max-w-3xl text-balance font-serif text-4xl leading-tight text-white md:text-8xl">
              同频的印记
            </h1>
            <p className="mt-6 max-w-xl text-pretty font-serif text-base leading-loose tracking-[0.18em] text-white/68 md:mt-8 md:text-2xl">
              每周固定发生，
              <br className="hidden md:block" />
              让关系在节奏里被筛选
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] px-6 pb-20 md:px-10 md:pb-44">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-[56vh] items-center justify-center md:min-h-[72vh]">
            <div className="mx-auto max-w-5xl text-center">
              <FadeUp>
                <p className="font-display text-xs uppercase tracking-[0.5em] text-[hsl(var(--accent))]">
                  Not A Calendar
                </p>
              </FadeUp>
              <AnimatedText
                text={"不是排期 / \n是筛选同频的节奏"}
                className="text-metal mx-auto mt-8 max-w-5xl font-serif text-3xl leading-tight text-white text-balance md:text-[clamp(2rem,5.2vw,5.8rem)] md:whitespace-nowrap"
              />
              <FadeUp>
                <p className="mx-auto mt-10 max-w-2xl text-sm leading-loose tracking-wider text-white/50 text-pretty md:text-base">
                  七天主题不是为了制造热闹，而是让学习、交流、合作与成长在固定节奏中持续发生。
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/14 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {weeklyRhythm.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <FadeUp key={event.english} delay={index * 0.05}>
                    <div
                      className="relative grid grid-cols-[2rem_1fr] gap-8 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-12"
                    >
                      <div className="absolute left-4 top-8 size-3 -translate-x-1/2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_24px_rgba(212,175,55,0.38)] md:left-1/2" />

                      <TiltCard
                        className={`liquid-glass-strong group relative col-start-2 min-h-[20rem] overflow-hidden rounded-[2rem] p-7 transition-colors duration-700 md:p-9 md:hover:bg-white/[0.055] ${
                          isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"
                        }`}
                      >
                        <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="font-display text-xs uppercase tracking-[0.46em] text-[hsl(var(--accent))]">
                              {event.english}
                            </p>
                            <p className="mt-3 font-serif text-xl tracking-[0.22em] text-white/50">
                              {event.day}
                            </p>
                          </div>
                          <span className="w-fit rounded-full border border-white/15 bg-white/[0.045] px-5 py-2.5 font-display text-[10px] uppercase tracking-[0.32em] text-white/70 shadow-[0_0_0_rgba(255,255,255,0)] transition-all duration-500 md:group-hover:border-[hsl(var(--accent))]/45 md:group-hover:bg-white/[0.075] md:group-hover:text-white md:group-hover:shadow-[0_0_22px_rgba(212,175,55,0.16)]">
                            SIGN UP / 报名中
                          </span>
                        </div>
                        <h3 className="text-metal mt-16 max-w-xl font-serif text-4xl leading-tight text-white md:whitespace-nowrap md:text-5xl">
                          {event.title}
                        </h3>
                        <p className="mt-7 max-w-lg text-sm leading-loose text-white/58 text-pretty md:text-base">
                          {event.body}
                        </p>
                      </TiltCard>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[56vh] items-center justify-center bg-black px-6 py-16 md:min-h-[68vh] md:py-24">
        <AnimatedText
          text="每一次活动，都是一次成长的机会；每一次相遇，都是一次机会链接。"
          className="max-w-5xl text-center font-serif text-3xl leading-snug tracking-widest text-white text-pretty md:text-[clamp(2rem,4.5vw,4.5rem)]"
        />
      </section>
    </main>
  );
}
