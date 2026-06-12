export const siteConfig = {
  name: "天机优选",
  englishName: "Tianji Selection",
  description:
    "把选择收窄，把关系放慢，让价值先于销售发生。",
  navigation: [
    { label: "品牌影片", href: "/film" },
    { label: "会员体系", href: "/membership" },
    { label: "理念与价值", href: "/philosophy" },
  ],
  hero: {
    eyebrow: "TIANJI SELECTION",
    title: "天机优选",
    description: "为更少试错的人，留一处更稳的选择。",
    note: "向下进入",
    inscriptions: [
      "身份不是喧哗",
      "选择不必反复",
      "关系来自线下",
    ],
  },
  home: {
    values: {
      eyebrow: "VALUE FIELD",
      title: "让价值先于热闹。",
      points: [
        {
          index: "01",
          title: "选择收窄",
          body: "少一点比较",
        },
        {
          index: "02",
          title: "关系放慢",
          body: "慢一点靠近",
        },
        {
          index: "03",
          title: "价值先行",
          body: "先确认气质",
        },
      ],
    },
    relation: {
      eyebrow: "RELATION",
      title: "不是会员说明，而是相处方式。",
      description:
        "有些选择适合被慢慢确认。这里保留距离、节奏和进入路径。",
      notes: ["减少试错", "线下承接", "长期信任", "体面距离"],
    },
  },
  film: {
    title: "品牌影片",
    description:
      "先看空间、节奏与气质，再决定是否继续靠近。",
    posterSrc: "/media/brand-film-cover.png",
    videoSrc: "/media/brand-film-web.mp4",
  },
  entrances: [
    {
      index: "01",
      title: "品牌影片",
      subtitle: "先看空间、节奏与气质。",
      href: "/film",
    },
    {
      index: "02",
      title: "理念与价值",
      subtitle: "看我们相信什么，也看我们不做什么。",
      href: "/philosophy",
    },
    {
      index: "03",
      title: "申请会员",
      subtitle: "如果气质相近，再轻轻往前一步。",
      href: "/apply",
    },
  ],
  closing: {
    quote: "真正稀缺的，不是更多选择，而是更少后悔。",
    note: "申请会员",
  },
} as const;
