import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import styles from "./continuous-homepage.module.css";

export function ContinuousHomepage() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main} aria-label="天机优选首页">
        <HeroSection />
        <PathsSection />
        <ValueSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <Reveal className={styles.heroInner}>
        <p className={styles.eyebrow}>{siteConfig.hero.eyebrow}</p>
        <h1 id="home-title" className={styles.heroTitle}>
          {siteConfig.hero.title}
        </h1>
        <p className={styles.heroDescription}>{siteConfig.hero.description}</p>
        <a href="#paths" className={styles.scrollCue}>
          <span>{siteConfig.hero.note}</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}

function PathsSection() {
  return (
    <section id="paths" className={styles.pathsSection} aria-labelledby="paths-title">
      <Reveal className={styles.sectionIntro}>
        <p className={styles.eyebrow}>THREE ENTRANCES</p>
        <h2 id="paths-title">先选择靠近的方式。</h2>
      </Reveal>

      <div className={styles.pathList}>
        {siteConfig.entrances.map((item, index) => (
          <Reveal key={item.href} delay={index * 0.05}>
            <Link href={item.href} className={styles.pathRow}>
              <span className={styles.pathIndex}>{item.index}</span>
              <span className={styles.pathTitle}>{item.title}</span>
              <span className={styles.pathText}>{item.subtitle}</span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className={styles.valueSection} aria-labelledby="value-title">
      <Reveal className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{siteConfig.home.values.eyebrow}</p>
        <h2 id="value-title">{siteConfig.home.values.title}</h2>
      </Reveal>

      <div className={styles.valueList}>
        {siteConfig.home.values.points.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.05}>
            <article className={styles.valueItem}>
              <span>{point.index}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className={styles.closingSection} aria-label="首页收束">
      <Reveal className={styles.closingPanel}>
        <p>{siteConfig.closing.quote}</p>
        <Link href="/apply" className={styles.closingLink}>
          <span>{siteConfig.closing.note}</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
