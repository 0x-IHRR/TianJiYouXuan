import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "品牌影片",
};

const pendingMaterials = ["影片正式标题", "影片文字简介", "幕后花絮素材", "社媒发布链接"];

export default function FilmPage() {
  return (
    <SubpageShell
      eyebrow="BRAND FILM"
      title="先看见气质。"
      description="空间、节奏与靠近的理由，先交给真实影像。影片页不额外制造营销话术，只让真实素材承担第一层判断。"
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
              poster={siteConfig.film.posterSrc}
              className={styles.video}
            >
              <source src={siteConfig.film.videoSrc} type="video/mp4" />
            </video>
          </div>
          <aside className={styles.placeholderPanel} aria-label="品牌影片待补充素材">
            <h2 className={styles.placeholderTitle}>影片资产位</h2>
            <p className={styles.placeholderText}>
              已接入现有品牌影片与封面。其余传播素材先留出位置，等真实素材到位后再替换。
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
