import { Metadata } from "next";
import Link from "next/link";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";

export const metadata: Metadata = {
  title: "申请会员",
};

const steps = [
  {
    index: "01",
    title: "先停一下",
    body: "不是所有靠近都需要立刻发生。",
  },
  {
    index: "02",
    title: "再确认气质",
    body: "如果你认同这里的节奏，再继续往前。",
  },
  {
    index: "03",
    title: "最后进入",
    body: "真实申请能力准备好后，再开放提交。",
  },
];

const formAssets = ["意向字段", "隐私文本", "提交接口", "承接方式"];

export default function ApplyPage() {
  return (
    <SubpageShell
      eyebrow="APPLY"
      title="申请，是继续靠近。"
      description="如果气质相近，再轻轻往前一步。"
      visualSrc="/media/subpages/apply/hero-application-invitation.png"
      visualAlt="木桌上的空白邀请卡、信封、陶杯与暖色墙面"
      visualLabel="Application"
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>LOW PRESSURE PATH</p>
            <h2 className={styles.sectionTitle}>不要把靠近做成压迫。</h2>
          </div>
          <p className={styles.sectionDescription}>
            这页只保留节奏，不急着把人推向表单。
          </p>
        </div>
        <div className={styles.pathGrid}>
          {steps.map((step) => (
            <article key={step.title} className={styles.pathItem}>
              <p className={styles.pathIndex}>{step.index}</p>
              <h3 className={styles.pathTitle}>{step.title}</h3>
              <p className={styles.pathText}>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.splitBand}>
          <div>
            <p className={styles.kicker}>APPLICATION RESERVED</p>
            <h2 className={styles.sectionTitle}>真实入口准备好前，先不假装。</h2>
            <p className={styles.sectionDescription}>
              等字段、隐私文本和提交链路确认后，再出现正式入口。
            </p>
            <Link href="/membership" className={styles.quietLink}>
              先看会员体系
            </Link>
          </div>
          <aside className={styles.placeholderPanel} aria-label="申请页待补充内容">
            <h3 className={styles.placeholderTitle}>入口占位</h3>
            <p className={styles.placeholderText}>
              这些必须真实存在，不用 mock 表单替代。
            </p>
            <div className={styles.placeholderList}>
              {formAssets.map((asset) => (
                <div key={asset} className={styles.placeholderItem}>
                  <span>{asset}</span>
                  <span className={styles.pendingTag}>待确认</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </SubpageShell>
  );
}
