import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";

export const metadata: Metadata = {
  title: "理念与价值",
};

const principles = [
  "减少试错，比堆更多选择更重要。",
  "线下体验，是信任真正成立的地方。",
  "供应链的价值，最终要翻译成稳定、体面、长期的生活感受。",
];

export default function PhilosophyPage() {
  return (
    <SubpageShell
      eyebrow="PHILOSOPHY"
      title="我们更关心你为什么愿意留下，而不是如何被说服。"
      description="理念页先给出价值主张的骨架：稳定来源、线下承接、长期关系，都会比大声宣传更重要。"
    >
      <section className="section-wrap pb-16 lg:pb-20">
        <div className="soft-panel rounded-[2rem] p-8 sm:p-10">
          <div className="space-y-5">
            {principles.map((principle) => (
              <div
                key={principle}
                className="border-b border-white/35 pb-5 last:border-b-0 last:pb-0"
              >
                <p className="font-heading text-2xl text-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
