import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "品牌影片",
};

const pendingMaterials = ["正式标题", "短简介", "幕后素材", "发布链接"];

export default function FilmPage() {
  return (
    <SubpageShell
      eyebrow="BRAND FILM"
      title="先看见气质。"
      description="空间、节奏与靠近的理由，先交给真实影像。"
      visualSrc={siteConfig.film.posterSrc}
      visualAlt="天机优选品牌影片封面"
      visualLabel="Brand Film"
    >
      <section className={styles.section}>
        <div className={styles.filmStage}>
          <div className={styles.videoFrame}>
            <video
              controls
              playsInline
              preload="metadata"
              className={styles.video}
            >
              <source src={siteConfig.film.videoSrc} type="video/mp4" />
            </video>
          </div>
          <aside className={styles.placeholderPanel} aria-label="品牌影片待补充素材">
            <h2 className={styles.placeholderTitle}>影片之外，先留白。</h2>
            <p className={styles.placeholderText}>
              其余素材等真实内容到位后再补，不用文字抢影片的工作。
            </p>
            <div className={styles.placeholderList}>
              {pendingMaterials.map((material) => (
                <div key={material} className={styles.placeholderItem}>
                  <span>{material}</span>
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
