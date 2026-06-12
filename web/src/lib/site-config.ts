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
    note: "先感知气质，再选择从哪一扇门继续进入。",
    inscriptions: [
      "身份不是喧哗",
      "选择不必反复",
      "关系来自线下",
    ],
  },
  home: {
    proof: {
      eyebrow: "WHY IT EXISTS",
      title: "官网先帮助用户判断，而不是急着完成说服。",
      description:
        "潜在会员来到这里，真正要确认的是信任、体面、长期关系和更少试错。图片、影片和文字都应该服务这个判断，而不是让页面被素材牵着走。",
      points: [
        {
          index: "01",
          title: "选择被收窄",
          body: "减少无效比较，把注意力留给更稳定、更适合长期接触的选择。",
        },
        {
          index: "02",
          title: "关系在线下发生",
          body: "会所感不是视觉滤镜，而是让用户相信后续存在真实接触和持续服务。",
        },
        {
          index: "03",
          title: "申请保持低压力",
          body: "申请是彼此确认是否适合，不是把用户快速推向货架、表单或强销售。",
        },
      ],
    },
    membership: {
      eyebrow: "MEMBERSHIP LOGIC",
      title: "把会员制讲成关系，而不是权益清单。",
      description:
        "首版不编造等级、价格或权益。先把关系感、边界感和进入路径表达清楚，后续真实制度可以直接替换到对应位置。",
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
