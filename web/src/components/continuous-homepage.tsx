import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Play } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import styles from "./continuous-homepage.module.css";

const media = {
  hero: "/media/homepage-layers/hero-still-life.png",
  membership: "/media/homepage-layers/table-invitation.png",
  film: siteConfig.film.posterSrc,
};

export function ContinuousHomepage() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main} aria-label="天机优选首页">
        <HeroSection />
        <ProofSection />
        <FilmSection />
        <MembershipSection />
        <EntrancesSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <Reveal className={styles.heroCopy}>
        <p className={styles.eyebrow}>{siteConfig.hero.eyebrow}</p>
        <h1 id="home-title" className={styles.heroTitle}>
          {siteConfig.hero.title}
        </h1>
        <p className={styles.heroDescription}>{siteConfig.hero.description}</p>
        <a href="#film" className={styles.scrollCue}>
          <span>{siteConfig.hero.note}</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </Reveal>

      <Reveal className={styles.heroMedia} delay={0.08}>
        <div className={styles.mediaPlate}>
          <Image
            src={media.hero}
            alt="暖色会所静物与木桌场景"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
            className={styles.mediaImage}
          />
          <div className={styles.mediaCaption}>
            <span>01</span>
            <strong>图片是气质材料，不是页面结构。</strong>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProofSection() {
  return (
    <section className={styles.proofSection} aria-labelledby="proof-title">
      <Reveal className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{siteConfig.home.proof.eyebrow}</p>
        <h2 id="proof-title">{siteConfig.home.proof.title}</h2>
        <p>{siteConfig.home.proof.description}</p>
      </Reveal>

      <div className={styles.proofGrid}>
        {siteConfig.home.proof.points.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.06}>
            <article className={styles.proofItem}>
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

function FilmSection() {
  return (
    <section id="film" className={styles.filmSection} aria-labelledby="film-title">
      <Reveal className={styles.filmHeader}>
        <div>
          <p className={styles.eyebrow}>BRAND FILM</p>
          <h2 id="film-title">真实影像负责建立第一层信任。</h2>
        </div>
        <p>
          {siteConfig.film.description}
          首页只提供观看入口，不把影片变成首屏背景，也不强制自动播放。
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <Link href="/film" className={styles.filmCard} aria-label="进入品牌影片页">
          <Image
            src={media.film}
            alt="天机优选品牌影片封面"
            fill
            sizes="(max-width: 900px) 100vw, 88vw"
            className={styles.filmImage}
          />
          <span className={styles.filmShade} aria-hidden="true" />
          <span className={styles.playButton} aria-hidden="true">
            <Play />
          </span>
          <span className={styles.filmMeta}>
            <small>02 / Brand Film</small>
            <strong>先看空间、节奏与气质，再决定是否继续靠近。</strong>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}

function MembershipSection() {
  return (
    <section className={styles.membershipSection} aria-labelledby="membership-title">
      <Reveal className={styles.membershipMedia}>
        <Image
          src={media.membership}
          alt="木桌、邀请卡与暖色会所空间"
          fill
          sizes="(max-width: 900px) 100vw, 40vw"
          className={styles.mediaImage}
        />
      </Reveal>

      <Reveal className={styles.membershipCopy} delay={0.08}>
        <p className={styles.eyebrow}>{siteConfig.home.membership.eyebrow}</p>
        <h2 id="membership-title">{siteConfig.home.membership.title}</h2>
        <p>{siteConfig.home.membership.description}</p>
        <div className={styles.noteGrid}>
          {siteConfig.home.membership.notes.map((note) => (
            <span key={note}>
              <Check aria-hidden="true" />
              {note}
            </span>
          ))}
        </div>
        <Link href="/membership" className={styles.quietAction}>
          <span>查看会员体系</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}

function EntrancesSection() {
  return (
    <section className={styles.entrancesSection} aria-labelledby="entrances-title">
      <Reveal className={styles.sectionHeader}>
        <p className={styles.eyebrow}>THREE ENTRANCES</p>
        <h2 id="entrances-title">首页不讲完，只给三条继续进入的路。</h2>
      </Reveal>

      <div className={styles.entranceGrid}>
        {siteConfig.entrances.map((item, index) => (
          <Reveal key={item.href} delay={index * 0.06}>
            <Link href={item.href} className={styles.entranceCard}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <ArrowUpRight aria-hidden="true" />
            </Link>
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
        <span>{siteConfig.closing.note}</span>
      </Reveal>
    </section>
  );
}
