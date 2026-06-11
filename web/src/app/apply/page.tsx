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
    title: "先判断是否适合",
    body: "这里不是把所有人都快速推向注册，而是先确认你是否认同这种更长期、更克制的生活方式关系。",
  },
  {
    index: "02",
    title: "再进入轻量意向",
    body: "首版会保留轻量意向的入口位置，字段与隐私说明确认后再接入真实提交。",
  },
  {
    index: "03",
    title: "最后再决定是否继续",
    body: "商城注册会在后续路径中承接，不会在首页第一秒就把你推到货架和表单前面。",
  },
];

const formAssets = ["意向信息字段", "隐私说明文本", "提交接口", "后续承接方式"];

export default function ApplyPage() {
  return (
    <SubpageShell
      eyebrow="APPLY"
      title="申请，是继续靠近。"
      description="申请不是一脚踏进去，而是顺理成章地继续往前。真实提交能力会在下一轮接入，不提前伪装成已经可用。"
      visualSrc="/media/subpages/apply/hero-application-invitation.png"
      visualAlt="木桌上的空白邀请卡、信封、陶杯与暖色墙面"
      visualLabel="Application"
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>LOW PRESSURE PATH</p>
            <h2 className={styles.sectionTitle}>轻量意向，不做压迫式转化。</h2>
          </div>
          <p className={styles.sectionDescription}>
            申请页应该承接首页的身份感和信任感。真正的表单字段、隐私说明、提交流程还没确认前，只保留入口结构。
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
            <h2 className={styles.sectionTitle}>真实申请能力下一轮再接入。</h2>
            <p className={styles.sectionDescription}>
              这里先不给用户一个“看起来能提交、实际未接通”的假表单。等字段与隐私文本确认后，再换成正式轻量意向表。
            </p>
            <Link href="/membership" className={styles.quietLink}>
              先看会员体系
            </Link>
          </div>
          <aside className={styles.placeholderPanel} aria-label="申请页待补充内容">
            <h3 className={styles.placeholderTitle}>申请模块占位</h3>
            <p className={styles.placeholderText}>
              这些是正式上线前必须确认的内容，不使用 mock 表单替代。
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
