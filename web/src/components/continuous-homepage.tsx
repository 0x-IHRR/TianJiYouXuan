import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import styles from "./continuous-homepage.module.css";

const marqueeWords = [
  "品质消费",
  "学习成长",
  "资源链接",
  "事业发展",
  "财富增值",
  "长期同行",
];

type MarqueeItem = (typeof siteConfig.home.marqueeItems)[number];

export function ContinuousHomepage() {
  return (
    <div className={styles.shell}>
      <SiteHeader variant="dark" />
      <main className={styles.main} aria-label="天机优选官网首页">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ValueSection />
        <PathwaySection />
      </main>
      <SiteFooter variant="dark" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <Reveal className={styles.heroHeading}>
        <h1 id="home-title">
          <span>天机优选</span>
          <span>会员俱乐部</span>
        </h1>
      </Reveal>

      <Reveal className={styles.heroFigure} delay={0.18}>
        <Image
          src="/media/homepage-layers/hero-still-life.png"
          alt="天机优选会员俱乐部视觉"
          fill
          priority
          loading="eager"
          sizes="(max-width: 760px) 72vw, 42vw"
        />
      </Reveal>

      <div className={styles.heroBottom}>
        <Reveal className={styles.heroIntro} delay={0.28}>
          <p>{siteConfig.hero.description}</p>
        </Reveal>
        <Reveal delay={0.36}>
          <PrimaryButton href="/apply">申请会员</PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const firstRow = siteConfig.home.marqueeItems.slice(0, 3);
  const secondRow = siteConfig.home.marqueeItems.slice(3);

  return (
    <section className={styles.marqueeSection} aria-label="天机优选视觉与关键词">
      <MarqueeRow items={firstRow} />
      <MarqueeRow items={secondRow} reverse />
    </section>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: MarqueeItem[];
  reverse?: boolean;
}) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className={styles.marqueeMask}>
      <div className={reverse ? styles.marqueeTrackReverse : styles.marqueeTrack}>
        {repeatedItems.map((item, index) => (
          <article className={styles.marqueeTile} key={`${item.title}-${index}`}>
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 760px) 72vw, 420px"
            />
            <span>{marqueeWords[index % marqueeWords.length]}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <Reveal className={`${styles.decorImage} ${styles.decorOne}`} delay={0.04}>
        <Image
          src="/media/homepage-layers/doorway-band.png"
          alt=""
          fill
          sizes="220px"
        />
      </Reveal>
      <Reveal className={`${styles.decorImage} ${styles.decorTwo}`} delay={0.12}>
        <Image
          src="/media/homepage-layers/table-invitation.png"
          alt=""
          fill
          sizes="220px"
        />
      </Reveal>
      <Reveal className={`${styles.decorImage} ${styles.decorThree}`} delay={0.18}>
        <Image
          src="/media/homepage-layers/film-window-compact.png"
          alt=""
          fill
          sizes="220px"
        />
      </Reveal>

      <div className={styles.aboutCopy}>
        <Reveal>
          <h2 id="about-title" className={styles.displayHeading}>
            关于天机优选
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p>
            天机优选以品质消费为入口，以学习成长为纽带，以资源链接为核心价值，
            它不是单一消费平台，而是面向长期同行者的会员俱乐部
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <PrimaryButton href="/membership">进入会员</PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}

function ValueSection() {
  const values = siteConfig.home.values.slice(0, 5);

  return (
    <section className={styles.valueSection} aria-labelledby="value-title">
      <Reveal>
        <h2 id="value-title" className={styles.displayHeading}>
          会员价值
        </h2>
      </Reveal>
      <div className={styles.valueList}>
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * 0.05}>
            <article className={styles.valueItem}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PathwaySection() {
  return (
    <section className={styles.pathwaySection} aria-labelledby="pathway-title">
      <Reveal>
        <h2 id="pathway-title" className={styles.displayHeading}>
          进入路径
        </h2>
      </Reveal>

      <div className={styles.pathwayStack}>
        {siteConfig.home.pathways.map((pathway, index) => (
          <article
            className={styles.pathwayCard}
            key={pathway.title}
            style={{ "--card-index": index } as CSSProperties}
          >
            <div className={styles.cardTop}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{pathway.category}</p>
              <h3>{pathway.title}</h3>
              <Link href={pathway.href} className={styles.ghostButton}>
                {pathway.action}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>

            <p className={styles.cardDescription}>{pathway.description}</p>

            <div className={styles.cardImages}>
              <div className={styles.imageColumn}>
                {pathway.images.slice(0, 2).map((src, imageIndex) => (
                  <div className={styles.cardImageSmall} key={src}>
                    <Image
                      src={src}
                      alt={`${pathway.title}视觉 ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 760px) 100vw, 34vw"
                    />
                  </div>
                ))}
              </div>
              <div className={styles.cardImageLarge}>
                <Image
                  src={pathway.images[2]}
                  alt={`${pathway.title}主视觉`}
                  fill
                  sizes="(max-width: 760px) 100vw, 54vw"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <Reveal className={styles.finalCta} delay={0.12}>
        <p>{siteConfig.apply.description}</p>
        <div className={styles.finalActions}>
          <PrimaryButton href="/apply">申请会员</PrimaryButton>
          <Link href="/film" className={styles.filmLink}>
            <PlayCircle aria-hidden="true" />
            观看影片
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link href={href} className={styles.primaryButton}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </Link>
  );
}
