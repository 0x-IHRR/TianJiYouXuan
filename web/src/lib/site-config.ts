export const siteConfig = {
  name: "天机优选",
  englishName: "Tianji Selection",
  description:
    "以品质消费为入口，以学习成长为纽带，以资源链接为核心价值的会员俱乐部。",
  navigation: [
    { label: "首页", href: "/" },
    { label: "会员俱乐部", href: "/membership" },
    { label: "活动与资源", href: "/#activities" },
    { label: "品牌影片", href: "/film" },
    { label: "理念", href: "/philosophy" },
  ],
  assets: {
    brandBanner: "/media/style-reference/brand-banner-dark.png",
    brandLogoLight: "/media/style-reference/brand-logo-light.jpeg",
    filmCover: "/media/style-reference/film-cover-black.png",
  },
  hero: {
    eyebrow: "TIANJI SELECTION MEMBERS CLUB",
    title: "天机优选会员俱乐部",
    description:
      "让每一次消费创造更大的价值。天机优选连接品质生活、认知成长、资源对接与事业机会，陪伴会员在更高价值的人群与场景中持续成长。",
    primaryAction: "了解会员俱乐部",
    secondaryAction: "观看品牌影片",
    pillars: ["资源整合", "学习成长", "事业发展", "财富增值"],
  },
  home: {
    values: [
      {
        title: "优质资源",
        body: "整合品质消费、生活服务与合作资源，让选择更有效率。",
      },
      {
        title: "学习成长",
        body: "围绕 AI、财商、趋势与个人成长，组织持续学习内容。",
      },
      {
        title: "资源链接",
        body: "为创业者、企业家、投资人与专业人士创造可信连接。",
      },
      {
        title: "事业发展",
        body: "通过交流、路演与资源协同，帮助机会被更清楚地看见。",
      },
      {
        title: "财富增值",
        body: "关注认知升级、价值判断与长期资产意识，不承诺收益。",
      },
      {
        title: "美好生活",
        body: "把健康、社交、品鉴与精神归属纳入会员的日常体验。",
      },
    ],
    activities: [
      {
        title: "主题分享会",
        body: "围绕 AI、趋势、财商与行业机会，邀请不同领域成员分享。",
      },
      {
        title: "资源对接会",
        body: "帮助优质项目、合作伙伴与真实需求在同一场景中相遇。",
      },
      {
        title: "学习沙龙",
        body: "以小规模、可讨论的方式，持续提升会员认知与行动能力。",
      },
      {
        title: "生活品鉴",
        body: "通过茶话、健康、户外与私享场景，建立更自然的关系连接。",
      },
    ],
    spaces: [
      "商务交流",
      "学习分享",
      "茶叙品鉴",
      "项目路演",
      "资源对接",
    ],
    audience: [
      "创业者",
      "企业经营者",
      "投资人与资源方",
      "职场精英",
      "学习型生活方式用户",
    ],
  },
  film: {
    title: "品牌影片",
    description: "用真实影像呈现天机优选的品牌主张与会员俱乐部方向。",
    posterSrc: "/media/style-reference/film-cover-black.png",
    videoSrc: "/media/brand-film-web.mp4",
  },
  membership: {
    title: "会员俱乐部介绍",
    description:
      "天机优选不是单一消费平台，而是围绕资源、学习、活动与关系连接建立的会员俱乐部。",
    sections: [
      {
        title: "会员获得什么",
        body: "获得优质资源、主题活动、学习内容、资源对接与生活品鉴场景。",
      },
      {
        title: "会员如何参与",
        body: "通过活动、沙龙、项目交流与社群承接，在真实互动中建立连接。",
      },
      {
        title: "边界是什么",
        body: "不承诺投资收益，不虚构会员等级，不在官网发布未经确认的价格与权益。",
      },
    ],
  },
  philosophy: {
    title: "品牌方法论",
    description:
      "天机优选相信，高价值生活不只来自消费本身，而来自消费背后的认知、资源与关系。",
    principles: [
      "让消费从一次交易，变成发现资源与建立信任的入口。",
      "让学习从信息摄入，变成可讨论、可实践、可连接的成长场景。",
      "让资源从零散关系，变成更清晰、更可信、更长期的协同网络。",
      "让会员关系从身份标签，回到真实场景里的长期同行。",
    ],
  },
  apply: {
    title: "加入天机优选",
    description:
      "正式申请入口开放前，这里只说明加入方式与信息边界，不设置假表单。",
    notes: [
      "真实申请字段待确认",
      "隐私文本待确认",
      "提交链路待确认",
      "人工承接方式待确认",
    ],
  },
} as const;
