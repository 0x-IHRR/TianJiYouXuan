export const siteConfig = {
  name: "天机优选",
  englishName: "Tianji Selection",
  description:
    "以会员制组织品质生活、线下关系与长期信任，让价值先于销售发生。",
  navigation: [
    { label: "品牌影片", href: "/film" },
    { label: "会员体系", href: "/membership" },
    { label: "理念与价值", href: "/philosophy" },
  ],
  hero: {
    eyebrow: "MEMBERSHIP SALON",
    title: "为更少试错的人，留一处更稳的选择。",
    description:
      "不是把商品堆得更多，而是把生活方式、线下关系与可信选择，安静地组织成一个长期成员系统。",
    inscriptions: [
      "身份不是喧哗",
      "选择不必反复",
      "关系来自线下",
    ],
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
      title: "会员体系",
      subtitle: "先看成员关系、进入路径与服务边界。",
      href: "/membership",
    },
    {
      index: "02",
      title: "理念与价值",
      subtitle: "从供应链、线下体验与长期信任，理解这件事为什么成立。",
      href: "/philosophy",
    },
    {
      index: "03",
      title: "申请会员",
      subtitle: "如果你认同这种生活方式，可以先沿着低压力路径继续往前。",
      href: "/apply",
    },
  ],
  closing: {
    quote: "真正稀缺的，不是更多选择，而是更少后悔。",
    note: "首页只负责让你看见气质，剩下的判断，交给下一扇门。",
  },
} as const;
