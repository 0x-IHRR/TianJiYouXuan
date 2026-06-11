import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";

export const metadata: Metadata = {
  title: "会员体系",
};

const sections = [
  {
    title: "成员关系",
    body: "我们先定义关系，再讨论权益。成员感来自长期陪伴、线下接触与更少试错，而不是一张被夸张包装的卡。",
  },
  {
    title: "进入路径",
    body: "路径会保持克制，不用强销售打断判断。首版先保留结构与语气，后续再补具体步骤与规则。",
  },
  {
    title: "服务边界",
    body: "会员体系会围绕品质选择、生活方式与可信关系展开，不会把一切都做成无限承诺的万能入口。",
  },
];

export default function MembershipPage() {
  return (
    <SubpageShell
      eyebrow="MEMBERSHIP"
      title="会员体系不是标签，而是一种更长期的相处方式。"
      description="这一页先把判断框架立起来，后续再补具体条款、层级与路径细节。"
    >
      <section className="section-wrap grid gap-5 pb-16 lg:grid-cols-3 lg:pb-20">
        {sections.map((section) => (
          <article key={section.title} className="soft-panel rounded-[1.75rem] p-6">
            <h2 className="font-heading text-2xl text-foreground">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {section.body}
            </p>
          </article>
        ))}
      </section>
    </SubpageShell>
  );
}
