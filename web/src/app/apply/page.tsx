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
            <p className={styles.kicker}>APPLICATION RESERVED</p>
            <h2 className={styles.sectionTitle}>正式入口开放前，不用假表单制造完成感。</h2>
            <p className={styles.sectionDescription}>
              加入天机优选需要真实字段、隐私文本和承接方式。当前页面只保留说明与导航。
            </p>
            <Link href="/membership" className={styles.quietLink}>
              先了解会员俱乐部
            </Link>
          </div>
          <aside className={styles.placeholderPanel} aria-label="申请入口待确认内容">
            <h3 className={styles.placeholderTitle}>待确认事项</h3>
            <p className={styles.placeholderText}>
              以下内容确认后，再开放正式申请流程。
            </p>
            <div className={styles.placeholderList}>
              {siteConfig.apply.notes.map((note) => (
                <div key={note} className={styles.placeholderItem}>
                  <span>{note}</span>
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
