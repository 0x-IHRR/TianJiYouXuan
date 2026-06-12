import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";

export const metadata: Metadata = {
  title: "会员体系",
};

const sections = [
  {
    index: "01",
    title: "留一点距离",
    body: "好的关系不急着证明自己。先保留边界，再决定是否继续靠近。",
  },
  {
    index: "02",
    title: "慢一点确认",
    body: "进入不是被推动，而是在几次接触里确认彼此是否适合。",
  },
  {
    index: "03",
    title: "少一点承诺",
    body: "不把一切都说满，真实制度和服务边界留给后续确认。",
  },
];

const pendingAssets = ["进入方式", "线下边界", "真实规则", "后续承接"];

export default function MembershipPage() {
  return (
    <SubpageShell
      eyebrow="MEMBERSHIP"
      title="相处方式，先于身份。"
      description="这里不急着列权益。先让你看见节奏、边界和靠近方式。"
      visualSrc="/media/subpages/membership/hero-membership-salon.png"
      visualAlt="暖色会所空间里的木桌、陶器与拱形入口"
      visualLabel="Membership"
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>RELATION FIRST</p>
            <h2 className={styles.sectionTitle}>先看关系如何发生。</h2>
          </div>
          <p className={styles.sectionDescription}>
            这页不承担说明书功能。它只保留三种感觉：距离、节奏、边界。
          </p>
        </div>
        <div className={styles.pathGrid}>
          {sections.map((section) => (
            <article key={section.title} className={styles.pathItem}>
              <p className={styles.pathIndex}>{section.index}</p>
              <h3 className={styles.pathTitle}>{section.title}</h3>
              <p className={styles.pathText}>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.splitBand}>
          <div>
            <p className={styles.kicker}>CONTENT RESERVED</p>
            <h2 className={styles.sectionTitle}>不确定的内容，先留白。</h2>
            <p className={styles.sectionDescription}>
              等真实规则出现后，再补足路径和边界。现在不编造身份、价格或权益。
            </p>
          </div>
          <aside className={styles.placeholderPanel} aria-label="会员体系待补充内容">
            <h3 className={styles.placeholderTitle}>留白位</h3>
            <p className={styles.placeholderText}>
              用于承接真实规则，当前只表达边界感。
            </p>
            <div className={styles.placeholderList}>
              {pendingAssets.map((asset) => (
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
