import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";

export const metadata: Metadata = {
  title: "申请会员",
};

const steps = [
  {
    title: "先判断是否适合",
    body: "这里不是把所有人都快速推向注册，而是先确认你是否认同这种更长期、更克制的生活方式关系。",
  },
  {
    title: "再进入轻量意向",
    body: "首版会保留轻量意向的入口位置，字段与隐私说明确认后再接入真实提交。",
  },
  {
    title: "最后再决定是否继续",
    body: "商城注册会在后续路径中承接，不会在首页第一秒就把你推到货架和表单前面。",
  },
];

export default function ApplyPage() {
  return (
    <SubpageShell
      eyebrow="APPLY"
      title="申请不是一脚踏进去，而是顺理成章地继续往前。"
      description="申请页先把路径气质建立起来。真实提交能力会在下一轮接入，不提前伪装成已经可用。"
    >
      <section className="section-wrap grid gap-5 pb-16 lg:grid-cols-3 lg:pb-20">
        {steps.map((step) => (
          <article key={step.title} className="soft-panel rounded-[1.75rem] p-6">
            <h2 className="font-heading text-2xl text-foreground">{step.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {step.body}
            </p>
          </article>
        ))}
      </section>
    </SubpageShell>
  );
}
