import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "理念",
};

export default function PhilosophyPage() {
  return (
    <SubpageShell
      eyebrow="PHILOSOPHY"
      title={siteConfig.philosophy.title}
      description={siteConfig.philosophy.description}
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>VALUE METHOD</p>
            <h2 className={styles.sectionTitle}>让消费、学习与资源连接成为一套方法。</h2>
          </div>
          <p className={styles.sectionDescription}>
            这页不做抽象宣言，而是解释天机优选为什么要把品质消费、认知成长和圈层连接放在一起。
          </p>
        </div>
        <div className={styles.statementList}>
          {siteConfig.philosophy.principles.map((principle) => (
            <article key={principle} className={styles.statement}>
              <p className={styles.statementText}>{principle}</p>
            </article>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
