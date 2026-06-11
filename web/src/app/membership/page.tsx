import { Metadata } from "next";

import { SubpageShell } from "@/components/subpage-shell";
import styles from "@/components/subpage-design.module.css";

export const metadata: Metadata = {
  title: "会员体系",
};

const sections = [
  {
    index: "01",
    title: "成员关系",
    body: "我们先定义关系，再讨论权益。成员感来自长期陪伴、线下接触与更少试错，而不是一张被夸张包装的卡。",
  },
  {
    index: "02",
    title: "进入路径",
    body: "路径会保持克制，不用强销售打断判断。首版先保留结构与语气，后续再补具体步骤与规则。",
  },
  {
    index: "03",
    title: "服务边界",
    body: "会员体系会围绕品质选择、生活方式与可信关系展开，不会把一切都做成无限承诺的万能入口。",
  },
];

const pendingAssets = ["会员层级细则", "线下服务边界", "申请与审核规则", "真实会员权益说明"];

export default function MembershipPage() {
  return (
    <SubpageShell
      eyebrow="MEMBERSHIP"
      title="长期相处，先于权益。"
      description="会员体系不是标签，而是一种更长期的关系。这里先把判断框架立起来，后续再补具体条款、层级与路径细节。"
      visualSrc="/media/subpages/membership/hero-membership-salon.png"
      visualAlt="暖色会所空间里的木桌、陶器与拱形入口"
      visualLabel="Membership"
    >
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.kicker}>RELATION FIRST</p>
            <h2 className={styles.sectionTitle}>先确认关系，再进入权益。</h2>
          </div>
          <p className={styles.sectionDescription}>
            会员体系不急着列满所有条款。首版页面先保留用户判断所需的三件事：关系是什么、如何进入、边界在哪里。
          </p>
        </div>
        <div className={styles.pathGrid}>
          {sections.map((section) => (
            <article key={section.title} className={styles.pathItem}>
              <p className={styles.pathIndex}>{section.index}</p>
              <h3 className={styles.pathTitle}>{section.title}</h3>
              <p className={styles.pathText}>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.splitBand}>
          <div>
            <p className={styles.kicker}>CONTENT RESERVED</p>
            <h2 className={styles.sectionTitle}>真实规则出来前，先把位置留准确。</h2>
            <p className={styles.sectionDescription}>
              这里不填虚假的等级、价格或权益清单。后续拿到真实会员制度后，可以直接替换这些待补充位置。
            </p>
          </div>
          <aside className={styles.placeholderPanel} aria-label="会员体系待补充内容">
            <h3 className={styles.placeholderTitle}>待补充内容位</h3>
            <p className={styles.placeholderText}>
              用于承接真实制度、服务说明与审核规则，当前仅保留信息架构。
            </p>
            <div className={styles.placeholderList}>
              {pendingAssets.map((asset) => (
                <div key={asset} className={styles.placeholderItem}>
                  <span>{asset}</span>
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
