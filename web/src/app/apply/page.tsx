import { Metadata } from "next";
import Link from "next/link";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "加入会员",
};

export default function ApplyPage() {
  return (
    <SubpageShell
      eyebrow="JOIN"
      title={siteConfig.apply.title}
      description={siteConfig.apply.description}
    >
      <section className={styles.section}>
        <div className={styles.splitBand}>
          <div>
            <p className={styles.kicker}>MEMBERS CLUB</p>
            <h2 className={styles.sectionTitle}>先了解价值，再走向更深的连接。</h2>
            <p className={styles.sectionDescription}>
              天机优选面向重视认知成长、资源连接与品质生活的同行者。加入通道开放后，将提供更完整的会员沟通方式。
            </p>
            <Link href="/membership" className={styles.quietLink}>
              了解会员俱乐部
            </Link>
          </div>
          <aside className={styles.infoPanel} aria-label="加入路径">
            <h3 className={styles.infoTitle}>加入路径</h3>
            <p className={styles.infoText}>
              从品牌了解开始，逐步进入会员俱乐部的活动、资源与长期同行关系。
            </p>
            <div className={styles.infoList}>
              {siteConfig.apply.paths.map((path) => (
                <div key={path} className={styles.infoItem}>
                  <span>{path}</span>
                </div>
              ))}
            </div>
            <Link href="/film" className={styles.secondaryLink}>
              观看品牌影片
            </Link>
          </aside>
        </div>
      </section>
    </SubpageShell>
  );
}
