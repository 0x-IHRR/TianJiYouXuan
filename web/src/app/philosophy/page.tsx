import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";

export const metadata: Metadata = {
  title: "理念与价值",
};

const principles = [
  {
    number: "01",
    text: "选择越多，越需要有人替你守住边界。",
  },
  {
    number: "02",
    text: "信任不是一句承诺，而是一次次线下接触。",
  },
  {
    number: "03",
    text: "价值最终要变成稳定、体面、可持续的生活感受。",
  },
];

const reservedProofs = ["真实来源", "线下空间", "价值短片", "公开凭证"];

export default function PhilosophyPage() {
  return (
    <SubpageShell
      eyebrow="PHILOSOPHY"
      title="价值先于说服。"
      description="我们更关心你为什么愿意留下，而不是如何被说服。"
      visualSrc="/media/subpages/philosophy/hero-philosophy-still-life.png"
      visualAlt="暖色会所书房里的木桌、空白书页、铜尺与陶杯"
      visualLabel="Philosophy"
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>VALUE BEFORE SALES</p>
            <h2 className={styles.sectionTitle}>让价值先被看见。</h2>
          </div>
          <p className={styles.sectionDescription}>
            这里不解释会员，也不堆砌卖点。只把我们相信的东西放在明处。
          </p>
        </div>
        <div className={styles.statementList}>
          {principles.map((principle) => (
            <article key={principle.number} className={styles.statement}>
              <p className={styles.statementNumber}>{principle.number}</p>
              <p className={styles.statementText}>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.splitBand}>
          <div>
            <p className={styles.kicker}>PROOF RESERVED</p>
            <h2 className={styles.sectionTitle}>没有证据的位置，就保持安静。</h2>
            <p className={styles.sectionDescription}>
              后续适合放真实来源、空间、影片切片和公开凭证。现在不放漂亮数字。
            </p>
          </div>
          <aside className={styles.placeholderPanel} aria-label="理念页待补充素材">
            <h3 className={styles.placeholderTitle}>证据位</h3>
            <p className={styles.placeholderText}>
              宁可留白，也不替品牌编造背书。
            </p>
            <div className={styles.placeholderList}>
              {reservedProofs.map((proof) => (
                <div key={proof} className={styles.placeholderItem}>
                  <span>{proof}</span>
                  <span className={styles.pendingTag}>待补充</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </SubpageShell>
  );
}
