import { Metadata } from "next";
import Image from "next/image";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "品牌影片",
};

export default function FilmPage() {
  return (
    <SubpageShell
      eyebrow="BRAND FILM"
      title={siteConfig.film.title}
      description={siteConfig.film.description}
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
          <aside className={styles.filmPoster} aria-label="品牌影片封面">
            <Image
              src={siteConfig.film.posterSrc}
              alt="天机优选品牌影片封面"
              fill
              sizes="(max-width: 980px) 100vw, 32vw"
            />
          </aside>
        </div>
      </section>
    </SubpageShell>
  );
}
