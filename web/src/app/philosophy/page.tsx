import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";

export const metadata: Metadata = {
  title: "理念与价值",
};

const principles = [
  {
    number: "01",
    text: "减少试错，比堆更多选择更重要。",
  },
  {
    number: "02",
    text: "线下体验，是信任真正成立的地方。",
  },
  {
    number: "03",
    text: "供应链的价值，最终要翻译成稳定、体面、长期的生活感受。",
  },
];

const reservedProofs = ["供应链真实说明", "线下空间素材", "品牌价值短片段", "公开资质与联系方式"];

export default function PhilosophyPage() {
  return (
    <SubpageShell
      eyebrow="PHILOSOPHY"
      title="价值先于说服。"
      description="我们更关心你为什么愿意留下，而不是如何被说服。理念页先给出价值主张的骨架：稳定来源、线下承接、长期关系，都会比大声宣传更重要。"
      visualSrc="/media/subpages/philosophy/hero-philosophy-still-life.png"
      visualAlt="暖色会所书房里的木桌、空白书页、铜尺与陶杯"
      visualLabel="Philosophy"
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>VALUE BEFORE SALES</p>
            <h2 className={styles.sectionTitle}>让价值先被看见，申请只是之后的动作。</h2>
          </div>
          <p className={styles.sectionDescription}>
            这一页承担的是信任解释，而不是促销说服。它应该帮助潜在会员判断：这套关系是否值得长期靠近。
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
            <h2 className={styles.sectionTitle}>理念最终要回到真实证据。</h2>
            <p className={styles.sectionDescription}>
              这里后续不适合放虚构案例或漂亮数字。更适合放真实供应链、线下空间、品牌影片切片和可公开的资质信息。
            </p>
          </div>
          <aside className={styles.placeholderPanel} aria-label="理念页待补充素材">
            <h3 className={styles.placeholderTitle}>证据素材位</h3>
            <p className={styles.placeholderText}>
              当前只确定信息位置，不替品牌编造未经确认的背书。
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
