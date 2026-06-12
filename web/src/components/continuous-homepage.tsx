import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  BriefcaseBusiness,
  Gem,
  Handshake,
  Heart,
  PlayCircle,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import styles from "./continuous-homepage.module.css";

const valueIcons = [
  Gem,
  BookOpen,
  Handshake,
  BriefcaseBusiness,
  TrendingUp,
  Heart,
];

const activityIcons = [Users, Handshake, BookOpen, ShoppingBag];

export function ContinuousHomepage() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main} aria-label="天机优选官网首页">
        <HeroSection />
        <ValueSection />
        <ActivitiesSection />
        <SpacesSection />
        <AudienceSection />
        <FilmSection />
        <JoinSection />
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
        <h1 id="home-title">
          <span>天机优选</span>
          <span>会员俱乐部</span>
        </h1>
        <p>{siteConfig.hero.description}</p>
        <div className={styles.heroActions}>
          <Link href="/membership" className={styles.primaryAction}>
            {siteConfig.hero.primaryAction}
          </Link>
          <Link href="/film" className={styles.secondaryAction}>
            <PlayCircle aria-hidden="true" />
            {siteConfig.hero.secondaryAction}
          </Link>
        </div>
      </Reveal>

      <Reveal className={styles.heroMedia} delay={0.08}>
        <Image
          src={siteConfig.assets.brandBanner}
          alt="天机优选品牌横幅"
          fill
          priority
          sizes="(max-width: 980px) 100vw, 46vw"
        />
      </Reveal>

      <Reveal className={styles.pillarBar} delay={0.12}>
        {siteConfig.hero.pillars.map((pillar) => (
          <span key={pillar}>{pillar}</span>
        ))}
      </Reveal>
    </section>
  );
}

function ValueSection() {
  return (
    <section className={styles.section} aria-labelledby="values-title">
      <SectionHeader
        eyebrow="MEMBER VALUE"
        title="会员价值不止于消费。"
        description="从品质生活到认知成长，天机优选为会员提供更高效的选择与连接。"
      />
      <div className={styles.valueGrid}>
        {siteConfig.home.values.map((value, index) => {
          const Icon = valueIcons[index];
          return (
            <Reveal key={value.title} delay={index * 0.04}>
              <article className={styles.valueCard}>
                <Icon aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section id="activities" className={styles.section} aria-labelledby="activities-title">
      <SectionHeader
        eyebrow="ACTIVITIES & RESOURCES"
        title="用真实活动承接资源与关系。"
        description="主题分享、资源对接、学习沙龙与生活品鉴，让交流从线上认识走向真实场景。"
      />
      <div className={styles.activityGrid}>
        {siteConfig.home.activities.map((activity, index) => {
          const Icon = activityIcons[index];
          return (
            <Reveal key={activity.title} delay={index * 0.05}>
              <article className={styles.activityCard}>
                <div className={styles.activityIcon}>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function SpacesSection() {
  return (
    <section className={styles.spaceSection} aria-labelledby="spaces-title">
      <Reveal className={styles.spaceImage}>
        <Image
          src={siteConfig.assets.brandLogoLight}
          alt="天机优选品牌识别"
          fill
          sizes="(max-width: 980px) 100vw, 38vw"
        />
      </Reveal>
      <Reveal className={styles.spaceCopy} delay={0.08}>
        <p className={styles.eyebrow}>CLUB SCENES</p>
        <h2 id="spaces-title">会员场景连接生活、学习与事业。</h2>
        <p>
          围绕商务交流、学习分享、生活品鉴和项目对接，天机优选让每一次相遇都有更清晰的价值方向。
        </p>
        <div className={styles.tagList}>
          {siteConfig.home.spaces.map((space) => (
            <span key={space}>{space}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={styles.audienceSection} aria-labelledby="audience-title">
      <Reveal>
        <p className={styles.eyebrow}>WHO IT IS FOR</p>
        <h2 id="audience-title">适合希望把消费、学习和资源连接起来的人。</h2>
      </Reveal>
      <div className={styles.audienceList}>
        {siteConfig.home.audience.map((item) => (
          <Reveal key={item}>
            <span>{item}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FilmSection() {
  return (
    <section className={styles.filmSection} aria-labelledby="film-title">
      <Reveal className={styles.filmCopy}>
        <p className={styles.eyebrow}>BRAND FILM</p>
        <h2 id="film-title">让品牌影片承担真实感。</h2>
        <p>{siteConfig.film.description}</p>
        <Link href="/film" className={styles.secondaryAction}>
          <PlayCircle aria-hidden="true" />
          进入影片页
        </Link>
      </Reveal>
      <Reveal className={styles.filmCover} delay={0.08}>
        <Image
          src={siteConfig.assets.filmCover}
          alt="天机优选品牌影片封面"
          fill
          sizes="(max-width: 980px) 100vw, 48vw"
        />
      </Reveal>
    </section>
  );
}

function JoinSection() {
  return (
    <section className={styles.joinSection} aria-labelledby="join-title">
      <Reveal className={styles.joinPanel}>
        <p className={styles.eyebrow}>JOIN TIANJI SELECTION</p>
        <h2 id="join-title">加入天机优选，开启高价值同行。</h2>
        <p>
          欢迎先了解会员俱乐部与品牌影片，加入通道开放后将提供更完整的会员沟通方式。
        </p>
        <Link href="/apply" className={styles.primaryAction}>
          查看加入说明
        </Link>
      </Reveal>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className={styles.sectionHeader}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </Reveal>
  );
}
