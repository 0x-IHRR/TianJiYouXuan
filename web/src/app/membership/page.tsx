import { Metadata } from "next";
import Link from "next/link";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "会员俱乐部",
};

export default function MembershipPage() {
  return (
    <SubpageShell
      eyebrow="MEMBERS CLUB"
      title={siteConfig.membership.title}
      description={siteConfig.membership.description}
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>HOW IT WORKS</p>
            <h2 className={styles.sectionTitle}>会员价值来自真实场景。</h2>
          </div>
          <p className={styles.sectionDescription}>
            资源、学习、活动与关系连接共同构成会员体验，帮助会员在真实场景中持续成长。
          </p>
        </div>
        <div className={styles.pathGrid}>
          {siteConfig.membership.sections.map((section) => (
            <article key={section.title} className={styles.pathItem}>
              <h3 className={styles.pathTitle}>{section.title}</h3>
              <p className={styles.pathText}>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.splitBand}>
          <div>
            <p className={styles.kicker}>MEMBER VALUE</p>
            <h2 className={styles.sectionTitle}>资源、学习、活动与关系连接共同构成会员体验。</h2>
            <p className={styles.sectionDescription}>
              天机优选更适合把消费视为入口、把认知成长和资源协同视为长期价值的人。
            </p>
            <Link href="/apply" className={styles.quietLink}>
              查看加入说明
            </Link>
          </div>
          <aside className={styles.infoPanel} aria-label="会员价值关键词">
            <h3 className={styles.infoTitle}>会员关键词</h3>
            <p className={styles.infoText}>
              围绕高价值人群的长期同行，持续连接资源、认知、事业与财富成长。
            </p>
            <div className={styles.infoList}>
              {siteConfig.hero.pillars.map((item) => (
                <div key={item} className={styles.infoItem}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </SubpageShell>
  );
}
