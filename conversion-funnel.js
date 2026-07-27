const FUNNEL_DATA = {
  "stages": [
    [
      "S0",
      "评论关键词",
      "用户只评论了关键词，还不知道具体需求。",
      "发领取方式，轻问使用场景。"
    ],
    [
      "S1",
      "领取免费包",
      "用户愿意领取，但未表达业务场景。",
      "确认是否能安装，给一个低门槛使用提示。"
    ],
    [
      "S2",
      "描述具体场景",
      "用户说出了行业、岗位、任务或当前卡点。",
      "追问输入材料、输出要求和使用对象。"
    ],
    [
      "S3",
      "高意向诊断",
      "用户提到团队、客户、批量、部署、私有化、预算或付费答疑。",
      "转入诊断，收集约束和报价所需信息。"
    ],
    [
      "S4",
      "服务成交",
      "用户认可范围，需要教程、社群、调试或定制。",
      "给出服务阶梯和下一步交付方式。"
    ]
  ],
  "offers": [
    {
      "name": "免费 Skill 包",
      "price": "0 元",
      "for": "只想先试用、验证是否适合自己场景的用户。",
      "deliverable": "精简版 Skill、基础使用说明、评论/私信领取。",
      "risk": "不承诺结果，不含一对一调试。"
    },
    {
      "name": "部署教程 / 单 Skill 调试",
      "price": "19.9-69.8 元",
      "for": "装不上、不会用、想看一步步教程的轻度付费用户。",
      "deliverable": "安装教程、常见问题、一次轻量答疑或调试建议。",
      "risk": "不处理复杂账号、支付、平台风控和企业流程。"
    },
    {
      "name": "岗位合集 / 付费答疑社群",
      "price": "99-199 元",
      "for": "希望一次拿到一类岗位能力包和持续答疑的人。",
      "deliverable": "岗位 Skill 合集、使用案例、每周答疑、复盘模板。",
      "risk": "社群只答疑和示范，不替用户发布、不代运营。"
    },
    {
      "name": "私有化定制部署",
      "price": "按场景评估",
      "for": "B2B 获客、浏览器自动化、跨境电商、团队工作台等高客单需求。",
      "deliverable": "需求诊断、专属 Skill、员工包、质检清单、部署和运维方案。",
      "risk": "需要先确认账号边界、数据权限、合规风险和维护范围。"
    }
  ],
  "items": [
    {
      "slug": "ai-content-humanizer-director",
      "title": "AI 内容人味化总监",
      "teammate_id": "content-cmo",
      "category": "自媒体内容增长",
      "business": "内容增长",
      "stars": 5,
      "score": 100,
      "channel": "小红书图文 + 抖音短视频",
      "monetization": "免费精简 Skill 引流，售卖合集、调试服务和账号诊断。",
      "hook": "别再发一眼 AI 的文案了：给我原文，我帮你改成能发的小红书/抖音版本。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/ai-content-humanizer-director.zip",
      "evidence": "已打包 zip；雷达命中 2 次；业务价值：内容增长",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content"
      ],
      "keyword": "模板",
      "audience": "自媒体创作者、内容运营、知识博主",
      "defaultStage": "S2",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 自媒体创作者、内容运营、知识博主，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「AI 内容人味化总监」免费版领取说明。你先说下准备用它解决哪个场景？比如：AI 文案太像模板，还是 改了半天还是不自然？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "gtm-engineer-skill-pack",
      "title": "GTM 获客工程师 Skill 包",
      "teammate_id": "lead-gen",
      "category": "销售获客与 B2B 私信",
      "business": "销售成交",
      "stars": 5,
      "score": 100,
      "channel": "LinkedIn/公众号案例 + 小红书工具分享",
      "monetization": "免费开发信/LinkedIn 模板引流，承接高客单 GTM 咨询和私有化部署。",
      "hook": "别一上来投广告，先用 30 天 GTM 实验验证谁真的会买。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/gtm-engineer-skill-pack.zip",
      "evidence": "已打包 zip；雷达命中 2 次；业务价值：销售成交",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "GTM",
      "audience": "B2B 销售、SaaS 创始人、外贸服务商、顾问",
      "defaultStage": "S3",
      "leadScoreHint": 83,
      "replies": {
        "comment": "收到，评论「GTM」的我会统一发领取方式。这个 Skill 主要适合 B2B 销售、SaaS 创始人、外贸服务商、顾问，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「GTM 获客工程师 Skill 包」免费版领取说明。你先说下准备用它解决哪个场景？比如：不知道找谁，还是 私信像群发？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "linkedin-growth-skill-pack",
      "title": "LinkedIn 增长 Skill 包",
      "teammate_id": "lead-gen",
      "category": "销售获客与 B2B 私信",
      "business": "销售成交",
      "stars": 5,
      "score": 100,
      "channel": "LinkedIn/公众号案例 + 小红书工具分享",
      "monetization": "免费开发信/LinkedIn 模板引流，承接高客单 GTM 咨询和私有化部署。",
      "hook": "B2B 获客不是群发私信，而是主页、内容、评论和暖私信一起跑。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/linkedin-growth-skill-pack.zip",
      "evidence": "已打包 zip；雷达命中 2 次；业务价值：销售成交",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "LinkedIn",
      "audience": "B2B 销售、SaaS 创始人、外贸服务商、顾问",
      "defaultStage": "S3",
      "leadScoreHint": 83,
      "replies": {
        "comment": "收到，评论「LinkedIn」的我会统一发领取方式。这个 Skill 主要适合 B2B 销售、SaaS 创始人、外贸服务商、顾问，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「LinkedIn 增长 Skill 包」免费版领取说明。你先说下准备用它解决哪个场景？比如：不知道找谁，还是 私信像群发？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "video-cut-workflow-director",
      "title": "视频切片与剪辑流程总监",
      "teammate_id": "content-cmo",
      "category": "短视频与直播",
      "business": "短视频转化",
      "stars": 5,
      "score": 98,
      "channel": "抖音/视频号演示 + 小红书教程",
      "monetization": "免费切片模板引流，承接剪辑 SOP、代剪流程和训练营。",
      "hook": "一条长视频不知道剪哪里？先让 Skill 帮你找爆点和切片顺序。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/video-cut-workflow-director.zip",
      "evidence": "已打包 zip；雷达命中 1 次；业务价值：短视频转化",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "模板",
      "audience": "短视频博主、直播运营、课程博主",
      "defaultStage": "S2",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 短视频博主、直播运营、课程博主，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「视频切片与剪辑流程总监」免费版领取说明。你先说下准备用它解决哪个场景？比如：长视频不知道剪哪里，还是 剪出来没有爆点？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "image-to-editable-ppt-assistant",
      "title": "图片/PDF 转可编辑 PPT 助手",
      "teammate_id": "office-analyst",
      "category": "办公白领效率",
      "business": "办公提效",
      "stars": 5,
      "score": 96,
      "channel": "小红书职场 + 公众号长文",
      "monetization": "免费办公模板引流，承接部署教程、付费答疑和企业内训。",
      "hook": "截图和 PDF 也能变成可编辑 PPT，适合周报、方案和老板汇报。",
      "cta": "评论「办公」领取安装包；需要部署教程和答疑可进群。",
      "download": "../dist/skills/image-to-editable-ppt-assistant.zip",
      "evidence": "已打包 zip；雷达命中 2 次；业务价值：办公提效",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "办公",
      "audience": "职场白领、助理、运营、项目经理",
      "defaultStage": "S2",
      "leadScoreHint": 73,
      "replies": {
        "comment": "收到，评论「办公」的我会统一发领取方式。这个 Skill 主要适合 职场白领、助理、运营、项目经理，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「图片/PDF 转可编辑 PPT 助手」免费版领取说明。你先说下准备用它解决哪个场景？比如：材料很多但没有结构，还是 截图/PDF 不能编辑？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "skill-market-curator",
      "title": "强 Skill 市场雷达策展官",
      "teammate_id": "chief-of-staff",
      "category": "产品创业与 SaaS 增长",
      "business": "产品增长",
      "stars": 5,
      "score": 94,
      "channel": "GitHub/公众号/小红书技术运营",
      "monetization": "免费开源工具引流，承接定制 Skill、自动化部署和顾问服务。",
      "hook": "每天自动找高星 Skill，不靠灵感，靠市场已经投票过的需求。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/skill-market-curator.zip",
      "evidence": "已打包 zip；雷达命中 21 次；业务价值：产品增长",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「强 Skill 市场雷达策展官」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "visual-card-content-system",
      "title": "内容视觉卡片系统",
      "teammate_id": "content-cmo",
      "category": "品牌设计与视觉素材",
      "business": "视觉转化",
      "stars": 5,
      "score": 93,
      "channel": "小红书设计/运营图文",
      "monetization": "免费封面/卡片模板引流，承接视觉模板包和设计提示词包。",
      "hook": "把一句观点做成能收藏的卡片，比单纯发文字更容易传播。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/visual-card-content-system.zip",
      "evidence": "已打包 zip；雷达命中 2 次；业务价值：视觉转化",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content"
      ],
      "keyword": "模板",
      "audience": "品牌运营、自媒体创作者、设计助理",
      "defaultStage": "S2",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 品牌运营、自媒体创作者、设计助理，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「内容视觉卡片系统」免费版领取说明。你先说下准备用它解决哪个场景？比如：观点不错但不适合转发，还是 封面没有点击点？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "linkedin-social-selling-system",
      "title": "LinkedIn 社交销售系统",
      "teammate_id": "overseas-social",
      "category": "海外社媒运营",
      "business": "海外增长",
      "stars": 5,
      "score": 93,
      "channel": "LinkedIn + 小红书跨境圈",
      "monetization": "免费海外内容包引流，承接跨境社媒月度运营包。",
      "hook": "B2B 获客不是群发私信，而是主页、内容、评论和暖私信一起跑。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/linkedin-social-selling-system.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：海外增长",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "LinkedIn",
      "audience": "跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营",
      "defaultStage": "S1",
      "leadScoreHint": 48,
      "replies": {
        "comment": "收到，评论「LinkedIn」的我会统一发领取方式。这个 Skill 主要适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「LinkedIn 社交销售系统」免费版领取说明。你先说下准备用它解决哪个场景？比如：不知道找谁，还是 私信像群发？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "amazon-shopify-listing-conversion-pack",
      "title": "Amazon/Shopify Listing 转化包",
      "teammate_id": "commerce-operator",
      "category": "电商与跨境卖家",
      "business": "电商转化",
      "stars": 5,
      "score": 92,
      "channel": "小红书卖家圈 + 公众号案例",
      "monetization": "免费 Listing/客服模板引流，承接店铺转化优化和客服 SOP。",
      "hook": "Listing 不是翻译参数，而是把卖点、信任和购买顾虑一次讲清楚。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/amazon-shopify-listing-conversion-pack.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：电商转化",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "跨境",
      "audience": "跨境卖家、电商运营、独立站卖家",
      "defaultStage": "S3",
      "leadScoreHint": 73,
      "replies": {
        "comment": "收到，评论「跨境」的我会统一发领取方式。这个 Skill 主要适合 跨境卖家、电商运营、独立站卖家，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「Amazon/Shopify Listing 转化包」免费版领取说明。你先说下准备用它解决哪个场景？比如：卖点说不清，还是 Listing 像机翻？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "crossborder-commerce-operator",
      "title": "跨境电商运营负责人",
      "teammate_id": "commerce-operator",
      "category": "电商与跨境卖家",
      "business": "电商转化",
      "stars": 5,
      "score": 92,
      "channel": "小红书卖家圈 + 公众号案例",
      "monetization": "免费 Listing/客服模板引流，承接店铺转化优化和客服 SOP。",
      "hook": "跨境卖家最缺的不是想法，是从选品到转化素材的一条闭环。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/crossborder-commerce-operator.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：电商转化",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "跨境",
      "audience": "跨境卖家、电商运营、独立站卖家",
      "defaultStage": "S3",
      "leadScoreHint": 73,
      "replies": {
        "comment": "收到，评论「跨境」的我会统一发领取方式。这个 Skill 主要适合 跨境卖家、电商运营、独立站卖家，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「跨境电商运营负责人」免费版领取说明。你先说下准备用它解决哪个场景？比如：卖点说不清，还是 Listing 像机翻？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "ppt-report-outline-studio",
      "title": "PPT 汇报大纲工作室",
      "teammate_id": "office-analyst",
      "category": "办公白领效率",
      "business": "办公提效",
      "stars": 5,
      "score": 91,
      "channel": "小红书职场 + 公众号长文",
      "monetization": "免费办公模板引流，承接部署教程、付费答疑和企业内训。",
      "hook": "截图和 PDF 也能变成可编辑 PPT，适合周报、方案和老板汇报。",
      "cta": "评论「办公」领取安装包；需要部署教程和答疑可进群。",
      "download": "../dist/skills/ppt-report-outline-studio.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：办公提效",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "办公",
      "audience": "职场白领、助理、运营、项目经理",
      "defaultStage": "S2",
      "leadScoreHint": 63,
      "replies": {
        "comment": "收到，评论「办公」的我会统一发领取方式。这个 Skill 主要适合 职场白领、助理、运营、项目经理，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「PPT 汇报大纲工作室」免费版领取说明。你先说下准备用它解决哪个场景？比如：材料很多但没有结构，还是 截图/PDF 不能编辑？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "office-productivity-chief",
      "title": "办公效率参谋长",
      "teammate_id": "office-analyst",
      "category": "办公白领效率",
      "business": "办公提效",
      "stars": 5,
      "score": 91,
      "channel": "小红书职场 + 公众号长文",
      "monetization": "免费办公模板引流，承接部署教程、付费答疑和企业内训。",
      "hook": "办公效率参谋长：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论「办公」领取安装包；需要部署教程和答疑可进群。",
      "download": "../dist/skills/office-productivity-chief.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：办公提效",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "办公",
      "audience": "职场白领、助理、运营、项目经理",
      "defaultStage": "S2",
      "leadScoreHint": 63,
      "replies": {
        "comment": "收到，评论「办公」的我会统一发领取方式。这个 Skill 主要适合 职场白领、助理、运营、项目经理，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「办公效率参谋长」免费版领取说明。你先说下准备用它解决哪个场景？比如：材料很多但没有结构，还是 截图/PDF 不能编辑？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "wechat-private-domain-question-cluster",
      "title": "微信私域问题聚类",
      "teammate_id": "china-research",
      "category": "私域社群与客服成交",
      "business": "私域成交",
      "stars": 5,
      "score": 90,
      "channel": "小红书运营圈 + 私域社群",
      "monetization": "免费话术包引流，承接社群转化 SOP 和私域陪跑。",
      "hook": "评论和私信里藏着成交机会，关键是别只会机械回复。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/wechat-private-domain-question-cluster.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：私域成交",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "话术",
      "audience": "私域运营、客服、知识付费博主、本地商家",
      "defaultStage": "S1",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「话术」的我会统一发领取方式。这个 Skill 主要适合 私域运营、客服、知识付费博主、本地商家，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「微信私域问题聚类」免费版领取说明。你先说下准备用它解决哪个场景？比如：评论私信很多但接不住，还是 回复太生硬？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "community-private-message-close-pack",
      "title": "社群私信成交话术包",
      "teammate_id": "customer-success",
      "category": "私域社群与客服成交",
      "business": "私域成交",
      "stars": 5,
      "score": 90,
      "channel": "小红书运营圈 + 私域社群",
      "monetization": "免费话术包引流，承接社群转化 SOP 和私域陪跑。",
      "hook": "评论和私信里藏着成交机会，关键是别只会机械回复。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/community-private-message-close-pack.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：私域成交",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "话术",
      "audience": "私域运营、客服、知识付费博主、本地商家",
      "defaultStage": "S1",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「话术」的我会统一发领取方式。这个 Skill 主要适合 私域运营、客服、知识付费博主、本地商家，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「社群私信成交话术包」免费版领取说明。你先说下准备用它解决哪个场景？比如：评论私信很多但接不住，还是 回复太生硬？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "private-domain-customer-success-manager",
      "title": "私域客服与复购经理",
      "teammate_id": "customer-success",
      "category": "私域社群与客服成交",
      "business": "私域成交",
      "stars": 5,
      "score": 90,
      "channel": "小红书运营圈 + 私域社群",
      "monetization": "免费话术包引流，承接社群转化 SOP 和私域陪跑。",
      "hook": "评论和私信里藏着成交机会，关键是别只会机械回复。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/private-domain-customer-success-manager.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：私域成交",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "话术",
      "audience": "私域运营、客服、知识付费博主、本地商家",
      "defaultStage": "S1",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「话术」的我会统一发领取方式。这个 Skill 主要适合 私域运营、客服、知识付费博主、本地商家，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「私域客服与复购经理」免费版领取说明。你先说下准备用它解决哪个场景？比如：评论私信很多但接不住，还是 回复太生硬？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "crossborder-review-customer-service-pack",
      "title": "跨境差评与客服挽回包",
      "teammate_id": "customer-success",
      "category": "私域社群与客服成交",
      "business": "私域成交",
      "stars": 5,
      "score": 90,
      "channel": "小红书运营圈 + 私域社群",
      "monetization": "免费话术包引流，承接社群转化 SOP 和私域陪跑。",
      "hook": "差评和售后不是麻烦，是复购、口碑和 SOP 的入口。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/crossborder-review-customer-service-pack.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：私域成交",
      "market_tags": [
        "china",
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "话术",
      "audience": "私域运营、客服、知识付费博主、本地商家",
      "defaultStage": "S1",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「话术」的我会统一发领取方式。这个 Skill 主要适合 私域运营、客服、知识付费博主、本地商家，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「跨境差评与客服挽回包」免费版领取说明。你先说下准备用它解决哪个场景？比如：评论私信很多但接不住，还是 回复太生硬？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "b2b-lead-generation-director",
      "title": "B2B 拓客负责人工作台",
      "teammate_id": "lead-gen",
      "category": "销售获客与 B2B 私信",
      "business": "销售成交",
      "stars": 5,
      "score": 90,
      "channel": "LinkedIn/公众号案例 + 小红书工具分享",
      "monetization": "免费开发信/LinkedIn 模板引流，承接高客单 GTM 咨询和私有化部署。",
      "hook": "把获客动作做成每天能执行的清单，而不是靠临时想话术。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/b2b-lead-generation-director.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：销售成交",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "Skill",
      "audience": "B2B 销售、SaaS 创始人、外贸服务商、顾问",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 B2B 销售、SaaS 创始人、外贸服务商、顾问，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「B2B 拓客负责人工作台」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "buyer-research-to-cold-email",
      "title": "买家背调到开发信",
      "teammate_id": "lead-gen",
      "category": "销售获客与 B2B 私信",
      "business": "销售成交",
      "stars": 5,
      "score": 90,
      "channel": "LinkedIn/公众号案例 + 小红书工具分享",
      "monetization": "免费开发信/LinkedIn 模板引流，承接高客单 GTM 咨询和私有化部署。",
      "hook": "把获客动作做成每天能执行的清单，而不是靠临时想话术。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/buyer-research-to-cold-email.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：销售成交",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "Skill",
      "audience": "B2B 销售、SaaS 创始人、外贸服务商、顾问",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 B2B 销售、SaaS 创始人、外贸服务商、顾问，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「买家背调到开发信」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "lead-magnet-webinar-funnel",
      "title": "资料包/Webinar 获客漏斗",
      "teammate_id": "lead-gen",
      "category": "销售获客与 B2B 私信",
      "business": "销售成交",
      "stars": 5,
      "score": 90,
      "channel": "LinkedIn/公众号案例 + 小红书工具分享",
      "monetization": "免费开发信/LinkedIn 模板引流，承接高客单 GTM 咨询和私有化部署。",
      "hook": "把获客动作做成每天能执行的清单，而不是靠临时想话术。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/lead-magnet-webinar-funnel.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：销售成交",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "Skill",
      "audience": "B2B 销售、SaaS 创始人、外贸服务商、顾问",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 B2B 销售、SaaS 创始人、外贸服务商、顾问，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「资料包/Webinar 获客漏斗」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "sales-objection-close-playbook",
      "title": "销售异议成交推进手册",
      "teammate_id": "sales-closer",
      "category": "销售获客与 B2B 私信",
      "business": "销售成交",
      "stars": 5,
      "score": 90,
      "channel": "LinkedIn/公众号案例 + 小红书工具分享",
      "monetization": "免费开发信/LinkedIn 模板引流，承接高客单 GTM 咨询和私有化部署。",
      "hook": "把获客动作做成每天能执行的清单，而不是靠临时想话术。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/sales-objection-close-playbook.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：销售成交",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "close"
      ],
      "keyword": "Skill",
      "audience": "B2B 销售、SaaS 创始人、外贸服务商、顾问",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 B2B 销售、SaaS 创始人、外贸服务商、顾问，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「销售异议成交推进手册」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "douyin-comment-demand-radar",
      "title": "抖音评论需求雷达",
      "teammate_id": "china-research",
      "category": "短视频与直播",
      "business": "短视频转化",
      "stars": 5,
      "score": 88,
      "channel": "抖音/视频号演示 + 小红书教程",
      "monetization": "免费切片模板引流，承接剪辑 SOP、代剪流程和训练营。",
      "hook": "抖音评论需求雷达：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/douyin-comment-demand-radar.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：短视频转化",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "模板",
      "audience": "短视频博主、直播运营、课程博主",
      "defaultStage": "S2",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 短视频博主、直播运营、课程博主，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「抖音评论需求雷达」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "creator-growth-editor-in-chief",
      "title": "内容增长主编工作台",
      "teammate_id": "content-cmo",
      "category": "自媒体内容增长",
      "business": "内容增长",
      "stars": 5,
      "score": 87,
      "channel": "小红书图文 + 抖音短视频",
      "monetization": "免费精简 Skill 引流，售卖合集、调试服务和账号诊断。",
      "hook": "把选题、标题、正文和转化路径做成流水线，降低创作内耗。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/creator-growth-editor-in-chief.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：内容增长",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content"
      ],
      "keyword": "模板",
      "audience": "自媒体创作者、内容运营、知识博主",
      "defaultStage": "S2",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 自媒体创作者、内容运营、知识博主，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「内容增长主编工作台」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "xhs-cover-title-ab-lab",
      "title": "小红书封面标题 A/B 实验室",
      "teammate_id": "content-cmo",
      "category": "自媒体内容增长",
      "business": "小红书获客",
      "stars": 5,
      "score": 87,
      "channel": "小红书 + 公众号",
      "monetization": "免费 Skill 引流，承接教程、答疑和定制服务。",
      "hook": "小红书封面标题 A/B 实验室：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/xhs-cover-title-ab-lab.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：小红书获客",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「小红书封面标题 A/B 实验室」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "xhs-comment-pain-cluster",
      "title": "小红书评论痛点聚类",
      "teammate_id": "china-research",
      "category": "自媒体内容增长",
      "business": "内容增长",
      "stars": 5,
      "score": 87,
      "channel": "小红书图文 + 抖音短视频",
      "monetization": "免费精简 Skill 引流，售卖合集、调试服务和账号诊断。",
      "hook": "把选题、标题、正文和转化路径做成流水线，降低创作内耗。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/xhs-comment-pain-cluster.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：内容增长",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content"
      ],
      "keyword": "模板",
      "audience": "自媒体创作者、内容运营、知识博主",
      "defaultStage": "S2",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 自媒体创作者、内容运营、知识博主，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「小红书评论痛点聚类」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "viral-content-production-line",
      "title": "爆款内容生产线",
      "teammate_id": "content-cmo",
      "category": "自媒体内容增长",
      "business": "内容增长",
      "stars": 5,
      "score": 87,
      "channel": "小红书图文 + 抖音短视频",
      "monetization": "免费精简 Skill 引流，售卖合集、调试服务和账号诊断。",
      "hook": "把选题、标题、正文和转化路径做成流水线，降低创作内耗。",
      "cta": "评论「模板」领取免费 Skill；合集和一对一调试走私信。",
      "download": "../dist/skills/viral-content-production-line.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：内容增长",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content"
      ],
      "keyword": "模板",
      "audience": "自媒体创作者、内容运营、知识博主",
      "defaultStage": "S2",
      "leadScoreHint": 55,
      "replies": {
        "comment": "收到，评论「模板」的我会统一发领取方式。这个 Skill 主要适合 自媒体创作者、内容运营、知识博主，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「爆款内容生产线」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "china-demand-research-director",
      "title": "中国需求调研总监",
      "teammate_id": "china-research",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 83,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "中国需求调研总监：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/china-demand-research-director.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「中国需求调研总监」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "overseas-demand-research-director",
      "title": "海外需求调研总监",
      "teammate_id": "market-intel",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 83,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "海外需求调研总监：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/overseas-demand-research-director.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「海外需求调研总监」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "tiktok-instagram-localization-studio",
      "title": "TikTok/Instagram 本地化内容工作室",
      "teammate_id": "overseas-social",
      "category": "海外社媒运营",
      "business": "海外增长",
      "stars": 5,
      "score": 80,
      "channel": "LinkedIn + 小红书跨境圈",
      "monetization": "免费海外内容包引流，承接跨境社媒月度运营包。",
      "hook": "TikTok/Instagram 本地化内容工作室：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/tiktok-instagram-localization-studio.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：海外增长",
      "market_tags": [
        "china",
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "Skill",
      "audience": "跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「TikTok/Instagram 本地化内容工作室」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "overseas-social-growth-manager",
      "title": "海外社媒增长经理",
      "teammate_id": "overseas-social",
      "category": "海外社媒运营",
      "business": "海外增长",
      "stars": 5,
      "score": 80,
      "channel": "LinkedIn + 小红书跨境圈",
      "monetization": "免费海外内容包引流，承接跨境社媒月度运营包。",
      "hook": "海外社媒增长经理：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/overseas-social-growth-manager.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：海外增长",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "Skill",
      "audience": "跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「海外社媒增长经理」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "global-content-calendar-operator",
      "title": "海外节点内容日历运营",
      "teammate_id": "overseas-social",
      "category": "海外社媒运营",
      "business": "海外增长",
      "stars": 5,
      "score": 80,
      "channel": "LinkedIn + 小红书跨境圈",
      "monetization": "免费海外内容包引流，承接跨境社媒月度运营包。",
      "hook": "海外节点内容日历运营：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/global-content-calendar-operator.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：海外增长",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "content",
        "close"
      ],
      "keyword": "Skill",
      "audience": "跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「海外节点内容日历运营」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "browser-automation-skill-adapter",
      "title": "浏览器自动化 Skill 适配器",
      "teammate_id": "chief-of-staff",
      "category": "产品创业与 SaaS 增长",
      "business": "产品增长",
      "stars": 5,
      "score": 79,
      "channel": "GitHub/公众号/小红书技术运营",
      "monetization": "免费开源工具引流，承接定制 Skill、自动化部署和顾问服务。",
      "hook": "浏览器自动化 Skill 适配器：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/browser-automation-skill-adapter.zip",
      "evidence": "已打包 zip；雷达命中 1 次；业务价值：产品增长",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「浏览器自动化 Skill 适配器」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "meeting-to-executive-brief",
      "title": "会议到高管简报",
      "teammate_id": "office-analyst",
      "category": "办公白领效率",
      "business": "办公提效",
      "stars": 5,
      "score": 79,
      "channel": "小红书职场 + 公众号长文",
      "monetization": "免费办公模板引流，承接部署教程、付费答疑和企业内训。",
      "hook": "会议到高管简报：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论「办公」领取安装包；需要部署教程和答疑可进群。",
      "download": "../dist/skills/meeting-to-executive-brief.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：办公提效",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "办公",
      "audience": "职场白领、助理、运营、项目经理",
      "defaultStage": "S2",
      "leadScoreHint": 63,
      "replies": {
        "comment": "收到，评论「办公」的我会统一发领取方式。这个 Skill 主要适合 职场白领、助理、运营、项目经理，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「会议到高管简报」免费版领取说明。你先说下准备用它解决哪个场景？比如：材料很多但没有结构，还是 截图/PDF 不能编辑？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "multi-employee-quality-gate",
      "title": "多员工质量门禁编排器",
      "teammate_id": "chief-of-staff",
      "category": "产品创业与 SaaS 增长",
      "business": "经营管理",
      "stars": 5,
      "score": 77,
      "channel": "公众号方法论 + 小红书老板笔记",
      "monetization": "免费检查表引流，承接老板工作台和流程咨询。",
      "hook": "多员工质量门禁编排器：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/multi-employee-quality-gate.zip",
      "evidence": "已打包 zip；雷达命中 5 次；业务价值：经营管理",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「多员工质量门禁编排器」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "claude-cloud-to-codex-skill-adapter",
      "title": "云端工作流转 Codex Skill 适配器",
      "teammate_id": "chief-of-staff",
      "category": "产品创业与 SaaS 增长",
      "business": "产品增长",
      "stars": 5,
      "score": 76,
      "channel": "GitHub/公众号/小红书技术运营",
      "monetization": "免费开源工具引流，承接定制 Skill、自动化部署和顾问服务。",
      "hook": "云端工作流转 Codex Skill 适配器：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/claude-cloud-to-codex-skill-adapter.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：产品增长",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「云端工作流转 Codex Skill 适配器」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "open-source-commercial-opportunity-analyzer",
      "title": "开源项目商业化机会分析",
      "teammate_id": "market-intel",
      "category": "产品创业与 SaaS 增长",
      "business": "产品增长",
      "stars": 5,
      "score": 76,
      "channel": "GitHub/公众号/小红书技术运营",
      "monetization": "免费开源工具引流，承接定制 Skill、自动化部署和顾问服务。",
      "hook": "开源项目商业化机会分析：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/open-source-commercial-opportunity-analyzer.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：产品增长",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「开源项目商业化机会分析」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "best-of-orchestration-blueprint",
      "title": "最佳实践组装蓝图",
      "teammate_id": "chief-of-staff",
      "category": "产品创业与 SaaS 增长",
      "business": "产品增长",
      "stars": 5,
      "score": 76,
      "channel": "GitHub/公众号/小红书技术运营",
      "monetization": "免费开源工具引流，承接定制 Skill、自动化部署和顾问服务。",
      "hook": "最佳实践组装蓝图：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/best-of-orchestration-blueprint.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：产品增长",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「最佳实践组装蓝图」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "g2-capterra-gap-analyzer",
      "title": "G2/Capterra 差评缺口分析",
      "teammate_id": "market-intel",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 75,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "差评和售后不是麻烦，是复购、口碑和 SOP 的入口。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/g2-capterra-gap-analyzer.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「G2/Capterra 差评缺口分析」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "reddit-pain-radar",
      "title": "Reddit 社区痛点雷达",
      "teammate_id": "market-intel",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 75,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "Reddit 社区痛点雷达：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/reddit-pain-radar.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「Reddit 社区痛点雷达」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "upwork-demand-signal-analyzer",
      "title": "Upwork 付费需求信号分析",
      "teammate_id": "market-intel",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 75,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "Upwork 付费需求信号分析：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/upwork-demand-signal-analyzer.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「Upwork 付费需求信号分析」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "app-store-review-miner",
      "title": "应用商店差评挖掘器",
      "teammate_id": "market-intel",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 75,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "差评和售后不是麻烦，是复购、口碑和 SOP 的入口。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/app-store-review-miner.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "overseas"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「应用商店差评挖掘器」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "zhihu-bilibili-demand-miner",
      "title": "知乎/B站长内容需求挖掘",
      "teammate_id": "china-research",
      "category": "研究报告与咨询分析",
      "business": "咨询分析",
      "stars": 5,
      "score": 75,
      "channel": "公众号深度文 + 小红书清单",
      "monetization": "免费调研框架引流，承接行业报告和机会验证咨询。",
      "hook": "知乎/B站长内容需求挖掘：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/zhihu-bilibili-demand-miner.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：咨询分析",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "content",
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「知乎/B站长内容需求挖掘」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "longform-to-matrix-publisher",
      "title": "长文矩阵分发主编",
      "teammate_id": "content-cmo",
      "category": "一稿多发与内容复用",
      "business": "内容资产复用",
      "stars": 5,
      "score": 72,
      "channel": "小红书 + 公众号",
      "monetization": "免费 Skill 引流，承接教程、答疑和定制服务。",
      "hook": "长文矩阵分发主编：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/longform-to-matrix-publisher.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：内容资产复用",
      "market_tags": [
        "china"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「长文矩阵分发主编」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "risk-finance-review-officer",
      "title": "财务法务风控官工作台",
      "teammate_id": "risk-finance",
      "category": "财务经营与老板助手",
      "business": "经营管理",
      "stars": 5,
      "score": 72,
      "channel": "公众号方法论 + 小红书老板笔记",
      "monetization": "免费检查表引流，承接老板工作台和流程咨询。",
      "hook": "财务法务风控官工作台：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/risk-finance-review-officer.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：经营管理",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「财务法务风控官工作台」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "multi-employee-workflow-composer",
      "title": "多员工协作流程编排器",
      "teammate_id": "chief-of-staff",
      "category": "产品创业与 SaaS 增长",
      "business": "产品增长",
      "stars": 5,
      "score": 68,
      "channel": "GitHub/公众号/小红书技术运营",
      "monetization": "免费开源工具引流，承接定制 Skill、自动化部署和顾问服务。",
      "hook": "多员工协作流程编排器：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论/私信「Skill」领取免费版；需要接入业务流程可预约定制。",
      "download": "../dist/skills/multi-employee-workflow-composer.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：产品增长",
      "market_tags": [
        "overseas",
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S3",
      "leadScoreHint": 65,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「多员工协作流程编排器」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "one-person-company-dispatch-director",
      "title": "一人公司任务分诊与团队调度",
      "teammate_id": "chief-of-staff",
      "category": "办公白领效率",
      "business": "经营管理",
      "stars": 5,
      "score": 68,
      "channel": "公众号方法论 + 小红书老板笔记",
      "monetization": "免费检查表引流，承接老板工作台和流程咨询。",
      "hook": "一人公司任务分诊与团队调度：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/one-person-company-dispatch-director.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：经营管理",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「一人公司任务分诊与团队调度」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "task-cost-risk-router",
      "title": "任务成本与风险路由器",
      "teammate_id": "chief-of-staff",
      "category": "财务经营与老板助手",
      "business": "经营管理",
      "stars": 5,
      "score": 64,
      "channel": "公众号方法论 + 小红书老板笔记",
      "monetization": "免费检查表引流，承接老板工作台和流程咨询。",
      "hook": "任务成本与风险路由器：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/task-cost-risk-router.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：经营管理",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「任务成本与风险路由器」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    },
    {
      "slug": "contract-cost-risk-checklist",
      "title": "合同成本风险核对清单",
      "teammate_id": "risk-finance",
      "category": "法务合同与合规检查",
      "business": "风险检查",
      "stars": 4,
      "score": 51,
      "channel": "公众号清单 + 私域答疑",
      "monetization": "免费风险清单引流，只做初筛和专业咨询准备，不替代律师/财务。",
      "hook": "合同成本风险核对清单：把高频业务动作封装成一个可下载 Skill。",
      "cta": "评论关键词领取免费包；复杂场景私信做诊断。",
      "download": "../dist/skills/contract-cost-risk-checklist.zip",
      "evidence": "已打包 zip；雷达命中 0 次；业务价值：风险检查",
      "market_tags": [
        "universal"
      ],
      "flow_tags": [
        "mvp"
      ],
      "keyword": "Skill",
      "audience": "一人公司老板、独立开发者、运营负责人",
      "defaultStage": "S1",
      "leadScoreHint": 40,
      "replies": {
        "comment": "收到，评论「Skill」的我会统一发领取方式。这个 Skill 主要适合 一人公司老板、独立开发者、运营负责人，先收藏，晚点我补一个实操案例。",
        "dm_first": "这是「合同成本风险核对清单」免费版领取说明。你先说下准备用它解决哪个场景？比如：工具很多但不知道先做哪个，还是 流程散在不同平台？",
        "qualification": "为了不乱推荐，我先问 3 个问题：你是自己用还是团队/客户用？已有素材是什么格式？你希望最后输出成文案、表格、PPT、SOP 还是自动化流程？",
        "low_ticket": "如果只是装不上或不知道怎么开始，可以先看部署教程/单 Skill 调试；如果你要一类岗位能力包，可以看合集和答疑社群。",
        "high_ticket": "如果你想接进自己的固定业务流程，我需要先看真实场景、输入材料、输出格式、账号边界和风险点，再判断能不能做私有化定制。",
        "boundary": "提醒一下：涉及账号登录、付款、发布、合同、医疗、财务等高风险动作，我只能帮你准备材料和流程，最终要人工确认。"
      }
    }
  ]
};
const RESEARCH_CONTEXTS = {
  "china-research": {
    "marketLabel": "中国市场",
    "employeeLabel": "林夏 · 中国市场调研总监",
    "closerLabel": "安可 · 私域客服成交主管",
    "summary": "更适合先发免费包、补案例、问真实使用场景，再把高意向用户转进私域、合集和轻咨询。",
    "backHref": "./research-workbench.html?desk=china-research",
    "receiverId": "customer-success"
  },
  "overseas-research": {
    "marketLabel": "海外市场",
    "employeeLabel": "Alice · 海外市场调研总监",
    "closerLabel": "Leo · B2B 获客负责人",
    "summary": "更适合先确认国家、业务类型、团队规模和预算，再决定发模板、约诊断还是推进定制部署。",
    "backHref": "./research-workbench.html?desk=overseas-research",
    "receiverId": "lead-gen"
  }
};
const TEAMMATE_PERSONAS = {
  "chief-of-staff": {
    "name": "阿序",
    "title": "任务调度总监",
    "avatar": "序",
    "personality": "冷静、会拆解，习惯先排优先级，再决定今天到底该推哪一批。",
    "motto": "先判断任务归属，再让最合适的同事开工。",
    "style": "像一个靠谱的参谋长，会先盯收益/成本比，再排今天的动作顺序。",
    "strengths": [
      "任务分诊",
      "优先级判断",
      "路线组合",
      "经营节奏"
    ],
    "color": "#d7ff58"
  },
  "market-intel": {
    "name": "Alice",
    "title": "海外市场调研总监",
    "avatar": "A",
    "personality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
    "motto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
    "style": "像研究型负责人，偏爱证据、原话、差评和付费信号。",
    "strengths": [
      "海外痛点挖掘",
      "SaaS 差评分析",
      "付费意愿判断",
      "海外 MVP 验证"
    ],
    "color": "#87c7d6"
  },
  "china-research": {
    "name": "林夏",
    "title": "中国市场调研总监",
    "avatar": "夏",
    "personality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
    "motto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
    "style": "像很懂中文平台的人，先拆评论情绪、再看用户会不会来问、来留资、来付费。",
    "strengths": [
      "中文评论洞察",
      "小红书抖音痛点",
      "本地需求验证",
      "私域机会判断"
    ],
    "color": "#78d8a6"
  },
  "content-cmo": {
    "name": "小燃",
    "title": "内容增长主编",
    "avatar": "燃",
    "personality": "锋利、有网感、擅长把普通信息讲出传播性。",
    "motto": "先让人停下来，再让人愿意私信。",
    "style": "像内容总编，拿到线索后第一反应是标题、封面、钩子和评论区承接。",
    "strengths": [
      "爆文选题",
      "标题封面",
      "短视频脚本",
      "矩阵分发"
    ],
    "color": "#ffb35b"
  },
  "overseas-social": {
    "name": "Mia",
    "title": "海外社媒经理",
    "avatar": "M",
    "personality": "外向、本地化强、懂英文平台语气。",
    "motto": "同一个卖点，到不同平台要换一种说法。",
    "style": "像全球内容负责人，会先想平台语境、表达方式和本地化切口。",
    "strengths": [
      "LinkedIn",
      "TikTok",
      "Instagram",
      "英文内容本地化"
    ],
    "color": "#f7819f"
  },
  "lead-gen": {
    "name": "Leo",
    "title": "海外拓客负责人",
    "avatar": "L",
    "personality": "主动、直接、结果导向，不怕冷启动。",
    "motto": "客户不会自己出现，线索要被设计出来。",
    "style": "像销售负责人，拿到信号就会先问国家、客户类型、预算和成交节奏。",
    "strengths": [
      "开发信",
      "私信破冰",
      "Lead Magnet",
      "客户名单跟进"
    ],
    "color": "#9ad26a"
  },
  "customer-success": {
    "name": "安妮",
    "title": "客服与复购经理",
    "avatar": "安",
    "personality": "耐心、共情、擅长灭火和二次转化。",
    "motto": "一次售后，可能是下一次复购的开头。",
    "style": "像私域承接负责人，会先降低用户决策压力，再一步步把对话推向成交。",
    "strengths": [
      "客服回复",
      "差评处理",
      "退款挽留",
      "社群促活"
    ],
    "color": "#ffd86b"
  },
  "commerce-operator": {
    "name": "多多",
    "title": "选品与Listing负责人",
    "avatar": "多",
    "personality": "细节控、转化控，喜欢把卖点落到页面上。",
    "motto": "产品不是写清楚就够了，要写到让人想买。",
    "style": "像店铺转化负责人，会盯卖点、页面、FAQ 和购买顾虑。",
    "strengths": [
      "Listing 优化",
      "产品页",
      "广告素材",
      "包装卖点"
    ],
    "color": "#ff8a5c"
  },
  "office-analyst": {
    "name": "简白",
    "title": "办公参谋",
    "avatar": "简",
    "personality": "清爽、高效、把复杂材料整理成能执行的东西。",
    "motto": "把信息压缩成行动，把行动整理成结果。",
    "style": "像老板身边很稳的参谋，先帮你把材料理清，再决定今天推哪种效率工具。",
    "strengths": [
      "会议纪要",
      "周报汇报",
      "PPT 大纲",
      "邮件沟通"
    ],
    "color": "#f2f0e6"
  },
  "sales-closer": {
    "name": "乔安",
    "title": "销售成交顾问",
    "avatar": "乔",
    "personality": "温和但会推进，擅长把犹豫变成下一步。",
    "motto": "好成交不是压迫，是帮客户降低决策成本。",
    "style": "像会谈单的人，先顺着对方的顾虑走，再慢慢把话题推向预算、交付和下一步。",
    "strengths": [
      "询盘回复",
      "报价谈判",
      "异议处理",
      "复购催单"
    ],
    "color": "#cfa7ff"
  },
  "risk-finance": {
    "name": "玄青",
    "title": "财务法务风控官",
    "avatar": "玄",
    "personality": "谨慎、条理强，永远先看风险边界。",
    "motto": "赚钱之前，先别把坑挖大。",
    "style": "像风险官，会先看合同、付款、权限和数据边界，再决定能不能继续推。",
    "strengths": [
      "合同摘要",
      "成本利润",
      "合规清单",
      "风险初筛"
    ],
    "color": "#b8c2cc"
  }
};
const TEAMMATE_PLAYBOOKS = {
  "content-cmo": {
    "focus": "先把证据变成传播素材，再把传播素材变成评论区承接。",
    "sequence": [
      "先抓用户原话",
      "再改标题封面",
      "再定开头钩子",
      "最后补评论区关键词和 CTA"
    ],
    "skill_slugs": [
      "ai-content-humanizer-director",
      "video-cut-workflow-director",
      "visual-card-content-system"
    ],
    "signals": [
      "标题能直接点中痛点",
      "封面一眼能看懂好处",
      "评论区有用户追问下一步",
      "内容能自然带出领取或私信动作"
    ]
  },
  "overseas-social": {
    "focus": "先确定平台语境和国家差异，再做本地化表达和跨平台分发。",
    "sequence": [
      "先确认国家/平台",
      "再改表达语气",
      "再拆成平台版本",
      "最后补评论区和私信承接"
    ],
    "skill_slugs": [
      "linkedin-social-selling-system",
      "tiktok-instagram-localization-studio",
      "overseas-social-growth-manager"
    ],
    "signals": [
      "文案不再像直译",
      "平台表达自然",
      "用户能听懂卖点",
      "内容能引出演示、邮箱或私信"
    ]
  },
  "chief-of-staff": {
    "focus": "先排优先级，再决定今天哪一批 Skill 值得主推，不让团队动作散掉。",
    "sequence": [
      "先看商业价值",
      "再看当前市场来源",
      "再选最短变现路径",
      "最后决定今天只主推哪几项"
    ],
    "skill_slugs": [
      "skill-market-curator",
      "one-person-company-dispatch-director",
      "best-of-orchestration-blueprint"
    ],
    "signals": [
      "今天的推广对象少而准",
      "内容/成交/交付顺序不打架",
      "优先推能形成案例的 Skill",
      "每一步都更接近收入"
    ]
  },
  "lead-gen": {
    "focus": "先把用户分层，再决定发免费包、发模板、继续诊断还是推进定制。",
    "sequence": [
      "先问国家和客户类型",
      "再问业务场景",
      "再判断预算和使用对象",
      "最后决定卖模板、合集还是定制"
    ],
    "skill_slugs": [
      "gtm-engineer-skill-pack",
      "linkedin-growth-skill-pack",
      "buyer-research-to-cold-email"
    ],
    "signals": [
      "用户开始说团队或客户",
      "愿意提供真实输入材料",
      "开始问部署或长期用法",
      "出现预算或交付边界问题"
    ]
  },
  "customer-success": {
    "focus": "先降低用户决策压力，再把对话平稳推进到成交或复购。",
    "sequence": [
      "先发免费包",
      "再轻问场景",
      "再补案例和使用提示",
      "最后再推合集、社群或轻咨询"
    ],
    "skill_slugs": [
      "community-private-message-close-pack",
      "private-domain-customer-success-manager",
      "wechat-private-domain-question-cluster"
    ],
    "signals": [
      "用户愿意继续回复",
      "开始说真实卡点",
      "开始问价格或交付",
      "从单次领取变成持续沟通"
    ]
  },
  "office-analyst": {
    "focus": "先理清材料，再决定最省时间的交付方式，不让执行卡在信息混乱上。",
    "sequence": [
      "先收原始材料",
      "再压缩成结构",
      "再决定输出格式",
      "最后补汇报或执行模板"
    ],
    "skill_slugs": [
      "image-to-editable-ppt-assistant",
      "ppt-report-outline-studio",
      "office-productivity-chief"
    ],
    "signals": [
      "材料被迅速结构化",
      "老板或客户能直接看结论",
      "减少来回改版",
      "输出能直接进入下一步执行"
    ]
  },
  "commerce-operator": {
    "focus": "先把卖点讲清，再把顾虑堵住，最后让页面和客服一起为转化服务。",
    "sequence": [
      "先定用户最关心的卖点",
      "再补 FAQ/信任点",
      "再对齐页面和客服话术",
      "最后补促成购买的动作"
    ],
    "skill_slugs": [
      "amazon-shopify-listing-conversion-pack",
      "crossborder-commerce-operator",
      "crossborder-review-customer-service-pack"
    ],
    "signals": [
      "卖点不再空泛",
      "FAQ 能提前挡顾虑",
      "客服反馈开始反哺页面",
      "更容易拿到点击和下单"
    ]
  }
};
const PLAYBOOK_TITLES = {
  "ai-content-humanizer-director": "AI 内容人味化总监",
  "gtm-engineer-skill-pack": "GTM 获客工程师 Skill 包",
  "linkedin-growth-skill-pack": "LinkedIn 增长 Skill 包",
  "video-cut-workflow-director": "视频切片与剪辑流程总监",
  "image-to-editable-ppt-assistant": "图片/PDF 转可编辑 PPT 助手",
  "skill-market-curator": "强 Skill 市场雷达策展官",
  "visual-card-content-system": "内容视觉卡片系统",
  "linkedin-social-selling-system": "LinkedIn 社交销售系统",
  "amazon-shopify-listing-conversion-pack": "Amazon/Shopify Listing 转化包",
  "crossborder-commerce-operator": "跨境电商运营负责人",
  "ppt-report-outline-studio": "PPT 汇报大纲工作室",
  "office-productivity-chief": "办公效率参谋长",
  "wechat-private-domain-question-cluster": "微信私域问题聚类",
  "community-private-message-close-pack": "社群私信成交话术包",
  "private-domain-customer-success-manager": "私域客服与复购经理",
  "crossborder-review-customer-service-pack": "跨境差评与客服挽回包",
  "b2b-lead-generation-director": "B2B 拓客负责人工作台",
  "buyer-research-to-cold-email": "买家背调到开发信",
  "lead-magnet-webinar-funnel": "资料包/Webinar 获客漏斗",
  "sales-objection-close-playbook": "销售异议成交推进手册",
  "douyin-comment-demand-radar": "抖音评论需求雷达",
  "creator-growth-editor-in-chief": "内容增长主编工作台",
  "xhs-cover-title-ab-lab": "小红书封面标题 A/B 实验室",
  "xhs-comment-pain-cluster": "小红书评论痛点聚类",
  "viral-content-production-line": "爆款内容生产线",
  "china-demand-research-director": "中国需求调研总监",
  "overseas-demand-research-director": "海外需求调研总监",
  "tiktok-instagram-localization-studio": "TikTok/Instagram 本地化内容工作室",
  "overseas-social-growth-manager": "海外社媒增长经理",
  "global-content-calendar-operator": "海外节点内容日历运营",
  "browser-automation-skill-adapter": "浏览器自动化 Skill 适配器",
  "meeting-to-executive-brief": "会议到高管简报",
  "multi-employee-quality-gate": "多员工质量门禁编排器",
  "claude-cloud-to-codex-skill-adapter": "云端工作流转 Codex Skill 适配器",
  "open-source-commercial-opportunity-analyzer": "开源项目商业化机会分析",
  "best-of-orchestration-blueprint": "最佳实践组装蓝图",
  "g2-capterra-gap-analyzer": "G2/Capterra 差评缺口分析",
  "reddit-pain-radar": "Reddit 社区痛点雷达",
  "upwork-demand-signal-analyzer": "Upwork 付费需求信号分析",
  "app-store-review-miner": "应用商店差评挖掘器",
  "zhihu-bilibili-demand-miner": "知乎/B站长内容需求挖掘",
  "longform-to-matrix-publisher": "长文矩阵分发主编",
  "risk-finance-review-officer": "财务法务风控官工作台",
  "multi-employee-workflow-composer": "多员工协作流程编排器",
  "one-person-company-dispatch-director": "一人公司任务分诊与团队调度",
  "task-cost-risk-router": "任务成本与风险路由器",
  "contract-cost-risk-checklist": "合同成本风险核对清单"
};

const stageGrid = document.getElementById("stageGrid");
const leadTable = document.getElementById("leadTable");
const replyList = document.getElementById("replyList");
const replyDetail = document.getElementById("replyDetail");
const handoffCard = document.getElementById("handoffCard");
const focusCard = document.getElementById("focusCard");
const focusTitle = document.getElementById("focusTitle");
const focusSummary = document.getElementById("focusSummary");
const focusMeta = document.getElementById("focusMeta");
const focusActions = document.getElementById("focusActions");
const decisionGrid = document.getElementById("funnelDecisionGrid");
const recommendTitle = document.getElementById("recommendTitle");
const recommendSummary = document.getElementById("recommendSummary");
const recommendNextTitle = document.getElementById("recommendNextTitle");
const recommendNextSummary = document.getElementById("recommendNextSummary");
const intakeGrid = document.getElementById("intakeGrid");
const routeGrid = document.getElementById("funnelRouteGrid");
let activeReplyText = "";
let activeDmText = "";
let activeIntakeText = "";
document.getElementById("leadCount").textContent = FUNNEL_DATA.items.length;

const TEAMMATE_LABELS = {
  "chief-of-staff": "阿序 · 一人公司参谋长",
  "market-intel": "Alice · 海外市场调研总监",
  "china-research": "林夏 · 中国市场调研总监",
  "content-cmo": "小燃 · 内容增长主编",
  "lead-gen": "Leo · B2B 获客负责人",
  "overseas-social": "Mia · 海外社媒增长经理",
  "commerce-operator": "周舟 · 跨境电商运营负责人",
  "customer-success": "安可 · 私域客服成交主管",
  "office-analyst": "乔木 · 办公效率分析师",
  "risk-finance": "沈衡 · 风险财务审查官",
  "talent-coach": "知夏 · 人才培训教练"
};

function pageParams() {
  return new URLSearchParams(window.location.search);
}

function currentContext() {
  const params = pageParams();
  const desk = params.get("desk") || "";
  const flow = params.get("flow") || "";
  const slug = params.get("slug") || "";
  return {
    desk,
    flow,
    slug,
    detail: RESEARCH_CONTEXTS[desk] || null
  };
}

function marketMatch(item, desk) {
  if (!desk) return true;
  if (desk === "china-research") {
    return item.market_tags.includes("china") || item.market_tags.includes("universal");
  }
  if (desk === "overseas-research") {
    return item.market_tags.includes("overseas") || item.market_tags.includes("universal");
  }
  return true;
}

function flowMatch(item, flow) {
  if (!flow) return true;
  return item.flow_tags.includes(flow);
}

function filteredItems() {
  const { desk, flow, slug } = currentContext();
  const marketMatched = FUNNEL_DATA.items.filter((item) => marketMatch(item, desk));
  const narrowed = flow ? marketMatched.filter((item) => flowMatch(item, flow)) : marketMatched;
  const source = narrowed.length ? narrowed : marketMatched;
  return [...source].sort((a, b) => {
    if (slug) {
      if (a.slug === slug && b.slug !== slug) return -1;
      if (b.slug === slug && a.slug !== slug) return 1;
    }
    return (b.leadScoreHint || 0) - (a.leadScoreHint || 0);
  });
}

function contextHref(base, extra = {}, hash = "") {
  const { desk, flow, slug } = currentContext();
  const url = new URL(base, window.location.href);
  if (desk) url.searchParams.set("desk", desk);
  if (flow) url.searchParams.set("flow", flow);
  if (slug) url.searchParams.set("slug", slug);
  Object.entries(extra).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    url.searchParams.set(key, value);
  });
  if (hash) {
    url.hash = hash.startsWith("#") ? hash : `#${hash}`;
  }
  return `${url.pathname.split('/').pop()}${url.search}${url.hash}`;
}

function renderComboCards(combos) {
  if (!combos.length) return "";
  return `
    <div class="combo-grid">
      ${combos.map((combo) => `
        <div class="combo-card">
          <strong>${combo.title}</strong>
          <span class="small-muted">${combo.keyword} · ${combo.defaultStage}</span>
          <a class="card-action" href="${contextHref('./conversion-funnel.html', { teammate: combo.teammate_id, slug: combo.slug }, 'leadTable')}">查看这条承接线</a>
        </div>
      `).join("")}
    </div>
  `;
}

function focusItem() {
  const params = pageParams();
  const slug = params.get("slug") || "";
  const teammate = params.get("teammate") || "";
  const items = filteredItems();
  if (slug) {
    return items.find((item) => item.slug === slug)
      || items.find((item) => item.teammate_id === teammate)
      || items[0];
  }
  if (teammate) {
    return items.find((item) => item.teammate_id === teammate) || items[0];
  }
  return items[0];
}

function renderStages() {
  stageGrid.innerHTML = FUNNEL_DATA.stages.map(([id, name, signal, action]) => `
    <article class="funnel-card">
      <p class="eyebrow">${id}</p>
      <h3>${name}</h3>
      <p class="small-muted">${signal}</p>
      <p><strong>下一步：</strong>${action}</p>
    </article>
  `).join("");
}

function renderLeadTable(activeSlug = "") {
  const params = pageParams();
  const activeTeammate = params.get("teammate") || "";
  const rows = filteredItems().filter((item) => !activeTeammate || item.teammate_id === activeTeammate);
  leadTable.innerHTML = `
    <thead><tr><th>#</th><th>Skill</th><th>关键词</th><th>业务</th><th>线索分</th><th>默认阶段</th></tr></thead>
    <tbody>
      ${rows.map((item, index) => `
        <tr data-slug="${item.slug}" style="${item.slug === activeSlug ? "background: rgba(215,255,88,.2);" : ""}">
          <td>${index + 1}</td>
          <td>${item.title}</td>
          <td><strong>${item.keyword}</strong></td>
          <td>${item.business}</td>
          <td>${item.leadScoreHint}</td>
          <td>${item.defaultStage}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function renderReplyList(activeSlug = FUNNEL_DATA.items[0].slug) {
  const params = pageParams();
  const activeTeammate = params.get("teammate") || "";
  const rows = filteredItems().filter((item) => !activeTeammate || item.teammate_id === activeTeammate);
  replyList.innerHTML = rows.map((item) => `
    <button class="reply-button ${item.slug === activeSlug ? "active" : ""}" type="button" data-slug="${item.slug}">
      <strong>${item.title}</strong><br />
      <span class="small-muted">${item.keyword} · ${item.leadScoreHint} 分</span>
    </button>
  `).join("");
  replyList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => renderReplyDetail(button.dataset.slug));
  });
}

function renderReplyDetail(slug = FUNNEL_DATA.items[0].slug) {
  const items = filteredItems();
  const item = items.find((entry) => entry.slug === slug) || items[0];
  if (!item) {
    replyDetail.innerHTML = `<p class="small-muted">当前没有可展示的承接对象。</p>`;
    replyList.innerHTML = "";
    leadTable.innerHTML = "";
    intakeGrid.innerHTML = "";
    return;
  }
  renderReplyList(item.slug);
  renderLeadTable(item.slug);
  renderIntake(item);
  renderDecisionDesk(item);
  renderRoutes(item);
  const recommendation = recommendedOffer(item);
  const nextAction = recommendedNextAction(item);
  recommendTitle.textContent = recommendation.title;
  recommendSummary.textContent = recommendation.summary;
  recommendNextTitle.textContent = nextAction.title;
  recommendNextSummary.textContent = nextAction.summary;
  const dmOpeners = {
  "ai-content-humanizer-director": [
    "刚看到你对「模板」有兴趣，我先把 AI 内容人味化总监 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 自媒体创作者、内容运营、知识博主。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "gtm-engineer-skill-pack": [
    "刚看到你对「GTM」有兴趣，我先把 GTM 获客工程师 Skill 包 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 B2B 销售、SaaS 创始人、外贸服务商、顾问。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "linkedin-growth-skill-pack": [
    "刚看到你对「LinkedIn」有兴趣，我先把 LinkedIn 增长 Skill 包 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 B2B 销售、SaaS 创始人、外贸服务商、顾问。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "video-cut-workflow-director": [
    "刚看到你对「模板」有兴趣，我先把 视频切片与剪辑流程总监 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 短视频博主、直播运营、课程博主。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "image-to-editable-ppt-assistant": [
    "刚看到你对「办公」有兴趣，我先把 图片/PDF 转可编辑 PPT 助手 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 职场白领、助理、运营、项目经理。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "skill-market-curator": [
    "刚看到你对「Skill」有兴趣，我先把 强 Skill 市场雷达策展官 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "visual-card-content-system": [
    "刚看到你对「模板」有兴趣，我先把 内容视觉卡片系统 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 品牌运营、自媒体创作者、设计助理。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "linkedin-social-selling-system": [
    "刚看到你对「LinkedIn」有兴趣，我先把 LinkedIn 社交销售系统 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "amazon-shopify-listing-conversion-pack": [
    "刚看到你对「跨境」有兴趣，我先把 Amazon/Shopify Listing 转化包 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 跨境卖家、电商运营、独立站卖家。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "crossborder-commerce-operator": [
    "刚看到你对「跨境」有兴趣，我先把 跨境电商运营负责人 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 跨境卖家、电商运营、独立站卖家。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "ppt-report-outline-studio": [
    "刚看到你对「办公」有兴趣，我先把 PPT 汇报大纲工作室 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 职场白领、助理、运营、项目经理。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "office-productivity-chief": [
    "刚看到你对「办公」有兴趣，我先把 办公效率参谋长 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 职场白领、助理、运营、项目经理。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "wechat-private-domain-question-cluster": [
    "刚看到你对「话术」有兴趣，我先把 微信私域问题聚类 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 私域运营、客服、知识付费博主、本地商家。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "community-private-message-close-pack": [
    "刚看到你对「话术」有兴趣，我先把 社群私信成交话术包 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 私域运营、客服、知识付费博主、本地商家。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "private-domain-customer-success-manager": [
    "刚看到你对「话术」有兴趣，我先把 私域客服与复购经理 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 私域运营、客服、知识付费博主、本地商家。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "crossborder-review-customer-service-pack": [
    "刚看到你对「话术」有兴趣，我先把 跨境差评与客服挽回包 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 私域运营、客服、知识付费博主、本地商家。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "b2b-lead-generation-director": [
    "刚看到你对「Skill」有兴趣，我先把 B2B 拓客负责人工作台 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 B2B 销售、SaaS 创始人、外贸服务商、顾问。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "buyer-research-to-cold-email": [
    "刚看到你对「Skill」有兴趣，我先把 买家背调到开发信 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 B2B 销售、SaaS 创始人、外贸服务商、顾问。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "lead-magnet-webinar-funnel": [
    "刚看到你对「Skill」有兴趣，我先把 资料包/Webinar 获客漏斗 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 B2B 销售、SaaS 创始人、外贸服务商、顾问。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "sales-objection-close-playbook": [
    "刚看到你对「Skill」有兴趣，我先把 销售异议成交推进手册 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 B2B 销售、SaaS 创始人、外贸服务商、顾问。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "douyin-comment-demand-radar": [
    "刚看到你对「模板」有兴趣，我先把 抖音评论需求雷达 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 短视频博主、直播运营、课程博主。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "creator-growth-editor-in-chief": [
    "刚看到你对「模板」有兴趣，我先把 内容增长主编工作台 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 自媒体创作者、内容运营、知识博主。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "xhs-cover-title-ab-lab": [
    "刚看到你对「Skill」有兴趣，我先把 小红书封面标题 A/B 实验室 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "xhs-comment-pain-cluster": [
    "刚看到你对「模板」有兴趣，我先把 小红书评论痛点聚类 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 自媒体创作者、内容运营、知识博主。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "viral-content-production-line": [
    "刚看到你对「模板」有兴趣，我先把 爆款内容生产线 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 自媒体创作者、内容运营、知识博主。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "china-demand-research-director": [
    "刚看到你对「Skill」有兴趣，我先把 中国需求调研总监 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "overseas-demand-research-director": [
    "刚看到你对「Skill」有兴趣，我先把 海外需求调研总监 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "tiktok-instagram-localization-studio": [
    "刚看到你对「Skill」有兴趣，我先把 TikTok/Instagram 本地化内容工作室 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "overseas-social-growth-manager": [
    "刚看到你对「Skill」有兴趣，我先把 海外社媒增长经理 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "global-content-calendar-operator": [
    "刚看到你对「Skill」有兴趣，我先把 海外节点内容日历运营 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 跨境卖家、外贸服务商、SaaS 创始人、海外社媒运营。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "browser-automation-skill-adapter": [
    "刚看到你对「Skill」有兴趣，我先把 浏览器自动化 Skill 适配器 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "meeting-to-executive-brief": [
    "刚看到你对「办公」有兴趣，我先把 会议到高管简报 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 职场白领、助理、运营、项目经理。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "multi-employee-quality-gate": [
    "刚看到你对「Skill」有兴趣，我先把 多员工质量门禁编排器 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "claude-cloud-to-codex-skill-adapter": [
    "刚看到你对「Skill」有兴趣，我先把 云端工作流转 Codex Skill 适配器 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "open-source-commercial-opportunity-analyzer": [
    "刚看到你对「Skill」有兴趣，我先把 开源项目商业化机会分析 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "best-of-orchestration-blueprint": [
    "刚看到你对「Skill」有兴趣，我先把 最佳实践组装蓝图 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "g2-capterra-gap-analyzer": [
    "刚看到你对「Skill」有兴趣，我先把 G2/Capterra 差评缺口分析 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "reddit-pain-radar": [
    "刚看到你对「Skill」有兴趣，我先把 Reddit 社区痛点雷达 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "upwork-demand-signal-analyzer": [
    "刚看到你对「Skill」有兴趣，我先把 Upwork 付费需求信号分析 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "app-store-review-miner": [
    "刚看到你对「Skill」有兴趣，我先把 应用商店差评挖掘器 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "zhihu-bilibili-demand-miner": [
    "刚看到你对「Skill」有兴趣，我先把 知乎/B站长内容需求挖掘 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "longform-to-matrix-publisher": [
    "刚看到你对「Skill」有兴趣，我先把 长文矩阵分发主编 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "risk-finance-review-officer": [
    "刚看到你对「Skill」有兴趣，我先把 财务法务风控官工作台 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "multi-employee-workflow-composer": [
    "刚看到你对「Skill」有兴趣，我先把 多员工协作流程编排器 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "one-person-company-dispatch-director": [
    "刚看到你对「Skill」有兴趣，我先把 一人公司任务分诊与团队调度 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "task-cost-risk-router": [
    "刚看到你对「Skill」有兴趣，我先把 任务成本与风险路由器 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ],
  "contract-cost-risk-checklist": [
    "刚看到你对「Skill」有兴趣，我先把 合同成本风险核对清单 的免费版给你。你现在最想先解决哪一步？",
    "我先不急着发一堆说明，想先确认下：你拿这个 Skill，是准备自己用，还是给团队/客户用？",
    "这个工具最适合 一人公司老板、独立开发者、运营负责人。如果你愿意，我可以按你现在的真实场景，告诉你先用哪个版本最省时间。"
  ]
};
  const humanOpeners = dmOpeners[item.slug] || [];
  activeReplyText = `评论区回复：\n${item.replies.comment}\n\n私信第一句：\n${item.replies.dm_first}\n\n资格判断追问：\n${item.replies.qualification}\n\n低客单承接：\n${item.replies.low_ticket}\n\n高客单承接：\n${item.replies.high_ticket}\n\n风险边界：\n${item.replies.boundary}`;
  activeDmText = humanOpeners.join("\n");
  replyDetail.innerHTML = `
    <p class="eyebrow">${item.business} · ${item.defaultStage}</p>
    <h3>${item.title}</h3>
    <p><strong>评论关键词：</strong>${item.keyword}</p>
    <div class="reply-box">${activeReplyText}</div>
    <div class="reply-actions">
      <button class="card-action" type="button" id="copyReplyBundle">复制整套回复包</button>
      <button class="github-link" type="button" id="copyDmOpeners">复制更像真人的私信首句</button>
    </div>
    <div class="reply-box" style="margin-top: 14px;">更像真人的私信首句：\n${humanOpeners.join("\n")}</div>
    <p class="mini-note">建议：先发第一句，再根据用户回答决定要不要继续发资格判断追问，不要一上来把整套话术砸给对方。</p>
  `;
  document.getElementById("copyReplyBundle")?.addEventListener("click", () => copyText(activeReplyText));
  document.getElementById("copyDmOpeners")?.addEventListener("click", () => copyText(activeDmText));
}

async function copyText(text) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("copy failed", error);
  }
}

function recommendedOffer(item) {
  if (item.defaultStage === "S4" || item.leadScoreHint >= 85) {
    return {
      title: "优先推荐：私有化定制部署",
      summary: "这类线索已经更接近团队、批量流程或客户交付，不要停留在免费包，应该直接进入诊断和定制范围确认。"
    };
  }
  if (item.defaultStage === "S3" || item.leadScoreHint >= 70) {
    return {
      title: "优先推荐：岗位合集 / 付费答疑社群",
      summary: "这类线索通常已经有明确场景和持续需求，先卖合集、员工包或答疑，比直接卖单个教程更顺。"
    };
  }
  if (item.defaultStage === "S2" || item.leadScoreHint >= 55) {
    return {
      title: "优先推荐：部署教程 / 单 Skill 调试",
      summary: "这类线索通常已经愿意尝试，但会卡在安装、不会跑第一遍或想确认是否适合自己。"
    };
  }
  return {
    title: "优先推荐：免费 Skill 包",
    summary: "这类线索还偏早期，先让对方低门槛试一下，比急着卖更容易往后推进。"
  };
}

function recommendedNextAction(item) {
  if (item.defaultStage === "S4" || item.leadScoreHint >= 85) {
    return {
      title: "现在先约诊断或确认方案范围",
      summary: "这类线索已经接近成交，不要再只发免费资料了，先确认团队、流程、交付范围、维护边界和预算。"
    };
  }
  if (item.defaultStage === "S3" || item.leadScoreHint >= 70) {
    return {
      title: "现在先问预算、频率和使用对象",
      summary: "这类线索通常已经有持续需求，优先确认是自己用、团队用还是客户交付，再决定卖合集还是定制。"
    };
  }
  if (item.defaultStage === "S2" || item.leadScoreHint >= 55) {
    return {
      title: "现在先补资料，确认真实场景",
      summary: "先问他现在卡在哪一步、手上有什么输入材料、想要什么输出，再决定给教程还是继续追问。"
    };
  }
  return {
    title: "现在先发免费包，再轻问场景",
    summary: "这类线索还在早期，先让对方低门槛拿到东西，再顺手问一句准备用在哪个真实任务里。"
  };
}

function decisionMetrics(item) {
  const { desk, flow } = currentContext();
  const marketFit = desk
    ? (marketMatch(item, desk) ? (item.market_tags.includes("universal") ? 84 : 96) : 58)
    : (item.market_tags.includes("universal") ? 88 : 94);
  const flowFit = flow
    ? (flowMatch(item, flow) ? 95 : 68)
    : (item.flow_tags.includes("close") ? 94 : item.flow_tags.includes("mvp") ? 87 : 82);
  const stageBoost = {
    S0: 0,
    S1: 6,
    S2: 14,
    S3: 22,
    S4: 30
  }[item.defaultStage] || 0;
  const leadHeat = Math.min(99, (item.leadScoreHint || 0) + stageBoost);
  const qualificationNeed = item.defaultStage === "S4"
    ? 96
    : item.defaultStage === "S3"
      ? 92
      : item.defaultStage === "S2"
        ? 84
        : 72;
  const serviceReadiness = leadHeat >= 90
    ? 96
    : leadHeat >= 75
      ? 89
      : leadHeat >= 60
        ? 81
        : 72;
  const priority = Math.min(
    99,
    Math.round((item.leadScoreHint || 0) * 0.42 + marketFit * 0.14 + flowFit * 0.12 + leadHeat * 0.18 + qualificationNeed * 0.06 + serviceReadiness * 0.08)
  );
  const label = item.defaultStage === "S4" || leadHeat >= 92
    ? "先约诊断"
    : item.defaultStage === "S3" || leadHeat >= 78
      ? "先问预算与部署"
      : item.defaultStage === "S2" || leadHeat >= 62
        ? "先问真实场景"
        : "先发免费包";
  const advice = label === "先约诊断"
    ? "这条线索已经接近服务成交，先收范围、输入材料、交付边界和预算，再谈价格。"
    : label === "先问预算与部署"
      ? "这条线索已经不只是领取资源，先确认是不是团队/客户场景，再决定卖合集还是定制。"
      : label === "先问真实场景"
        ? "这条线索已经有一点兴趣，先问卡点、输入材料和输出要求，不要急着卖。"
        : "这条线索还在早期，先发免费包降低门槛，再顺手问一句准备用在哪个任务里。";
  const warning = item.defaultStage === "S4" || item.defaultStage === "S3"
    ? "这类线索容易直接碰到账号、付款、客户隐私和交付边界，报价前一定先做问诊。"
    : item.defaultStage === "S2"
      ? "这类线索最怕话术太重，先像真人一样追问一两句，不要一上来发整套销售文案。"
      : "这类线索最怕过度推销，先交付一点确定性的帮助，再决定要不要继续推进。";
  return { marketFit, flowFit, leadHeat, qualificationNeed, serviceReadiness, priority, label, advice, warning };
}

function renderDecisionDesk(item) {
  if (!decisionGrid || !item) return;
  const metrics = decisionMetrics(item);
  decisionGrid.innerHTML = [
    { title: "当前承接 Skill", body: item.title },
    { title: "当前建议", body: `${metrics.label} · ${metrics.priority} 分` },
    { title: "市场匹配度", body: `${metrics.marketFit} / 100` },
    { title: "分支匹配度", body: `${metrics.flowFit} / 100` },
    { title: "线索热度", body: `${metrics.leadHeat} / 100` },
    { title: "问诊必要度", body: `${metrics.qualificationNeed} / 100` },
    { title: "为什么这样接", body: metrics.advice },
    { title: "当前提醒", body: metrics.warning }
  ].map((entry) => `
    <div class="detail-box">
      <span>${entry.title}</span>
      <strong>${entry.body}</strong>
    </div>
  `).join("");
}

function intakeQuestions(item) {
  return [
    {
      title: "1. 业务场景",
      body: `你准备用「${item.title}」解决哪一个真实任务？现在卡在哪一步？`
    },
    {
      title: "2. 使用对象",
      body: "这是你自己用，还是团队/客户一起用？有没有协作者和交付对象？"
    },
    {
      title: "3. 输入材料",
      body: "你现在已经有什么材料？是文档、表格、截图、评论、产品资料，还是账号后台？"
    },
    {
      title: "4. 期望输出",
      body: "你最终想拿到什么？是文案、表格、PPT、SOP、自动化流程，还是可交付给客户的成品？"
    },
    {
      title: "5. 批量与部署",
      body: "这个需求是一次性的，还是之后会反复用？要不要接进固定 SOP、团队流程或客户项目里？"
    },
    {
      title: "6. 风险与边界",
      body: "是否涉及账号登录、付款、发布、客户隐私、合同、财务、医疗或其他高风险动作？"
    }
  ];
}

function renderIntake(item) {
  const cards = intakeQuestions(item);
  activeIntakeText = cards.map((card) => `${card.title}\n${card.body}`).join("\n\n");
  const cardsHtml = cards.map((card) => `
    <article class="intake-card">
      <strong>${card.title}</strong>
      <p class="small-muted">${card.body}</p>
    </article>
  `).join("");
  intakeGrid.innerHTML = `
    ${cardsHtml}
    <article class="intake-card">
      <strong>复制问诊清单</strong>
      <p class="small-muted">先把这 6 个问题发给高意向用户，再决定是卖教程、合集，还是转私有化定制。</p>
      <div class="reply-actions">
        <button class="card-action" type="button" id="copyIntakeChecklist">复制报价问诊表</button>
      </div>
      <p class="mini-note">建议：先问业务场景，再问输入和输出，最后再碰预算和高风险边界。</p>
    </article>
  `;
  document.getElementById("copyIntakeChecklist")?.addEventListener("click", () => copyText(activeIntakeText));
}

function renderRoutes(item) {
  if (!routeGrid || !item) return;
  const detail = currentContext().detail;
  const fallbackEntry = `./index.html?teammate=${item.teammate_id}#teammates`;
  const entryHref = detail ? detail.backHref : fallbackEntry;
  routeGrid.innerHTML = [
    {
      kicker: "回内容入口",
      title: "回发布素材包",
      body: "继续看这条 Skill 对应的标题、封面、正文和私信承接素材，方便补发内容入口。",
      href: contextHref('./launch-kits.html', { slug: item.slug }),
      cta: "回素材包"
    },
    {
      kicker: "回排班",
      title: "回运营作战板",
      body: "如果要判断这条线索是不是今天主推的重点，就回作战板看它在整条产品线里的顺位。",
      href: contextHref('./growth-board.html', { slug: item.slug }),
      cta: "回作战板"
    },
    {
      kicker: "继续交付",
      title: item.download ? "下载当前 Skill" : "下载线索跟进表",
      body: item.download
        ? "如果用户已经准备试用，就直接把当前 Skill 发给他，再根据反馈继续推进。"
        : "如果这条 Skill 还没打成包，就先用线索跟进表把阶段、预算和下一步记下来。",
      href: item.download || "../docs/skill-lead-tracker-template.csv",
      cta: item.download ? "下载 Skill" : "下载跟进表"
    },
    {
      kicker: "回上一步",
      title: detail ? "回到调研工作台" : "回到对应入口",
      body: detail
        ? "如果你还不确定这条线索值不值得重投入，就回调研台看市场证据和岗位分流。"
        : "如果你想继续扩成岗位能力包，就回这位同事的主页看更多可下载 Skill。",
      href: entryHref,
      cta: detail ? "回调研台" : "回同事页"
    }
  ].map((entry) => `
    <article class="featured-card">
      <span class="card-kicker">${entry.kicker}</span>
      <h3>${entry.title}</h3>
      <p class="signal">${entry.body}</p>
      <div class="card-actions">
        <a class="card-action" href="${entry.href}">${entry.cta}</a>
      </div>
    </article>
  `).join("");
}

function renderFocusCard(item) {
  const teammateLabel = TEAMMATE_LABELS[item.teammate_id] || item.teammate_id;
  const params = pageParams();
  const teammate = params.get("teammate") || "";
  const slug = params.get("slug") || "";
  const { flow, detail } = currentContext();
  if (!teammate && !slug && !detail) {
    if (handoffCard) handoffCard.hidden = true;
    focusCard.hidden = true;
    return;
  }
  const persona = TEAMMATE_PERSONAS[(detail && detail.receiverId) || item.teammate_id];
  const playbook = TEAMMATE_PLAYBOOKS[(detail && detail.receiverId) || item.teammate_id];
  const combos = (playbook?.skill_slugs || []).map((slug) => FUNNEL_DATA.items.find((entry) => entry.slug === slug)).filter(Boolean);
  const comboHtml = renderComboCards(combos);
  if (persona && handoffCard) {
    handoffCard.hidden = false;
    handoffCard.style.setProperty("--employee-color", persona.color || "var(--acid)");
    handoffCard.innerHTML = `
      <div class="handoff-head">
        <div class="handoff-avatar">${persona.avatar}</div>
        <div>
          <p class="eyebrow">当前接手人</p>
          <h2>${persona.name} · ${persona.title}</h2>
          <p class="small-muted">${persona.personality}</p>
        </div>
      </div>
      <p style="margin-top:12px;">${persona.style}</p>
      <p class="small-muted">工作信条：${persona.motto}</p>
      ${playbook ? `<p class="small-muted">她接到线索后的默认打法：${playbook.focus}</p>` : ""}
      ${playbook ? `<p class="small-muted">通常顺序：${playbook.sequence.join(" -> ")}</p>` : ""}
      ${playbook ? `<p class="small-muted">她这类线索常配合这些 Skill：${playbook.skill_slugs.map((slug) => PLAYBOOK_TITLES[slug] || slug).join("、")}</p>` : ""}
      ${playbook ? `<p class="small-muted">她会盯这些成交信号：${playbook.signals.join("；")}</p>` : ""}
      <div class="focus-meta" style="margin-top:14px;">
        ${persona.strengths.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
      ${comboHtml}
    `;
  }
  focusCard.hidden = false;
  const flowLabel = flow === "content" ? "内容发布" : flow === "mvp" ? "MVP 试卖" : flow === "close" ? "成交承接" : "承接";
  if (detail) {
    focusTitle.textContent = `${detail.closerLabel} 正在承接来自 ${detail.marketLabel} 的「${item.title}」线索。`;
    focusSummary.textContent = `${detail.summary} 当前分支是「${flowLabel}」，所以我先把更匹配的回复、追问和服务档位置顶给你。`;
  } else {
    focusTitle.textContent = `${teammateLabel} 当前更适合承接「${item.title}」`;
    focusSummary.textContent = `这条入口是从具体同事或具体 Skill 跳进来的，所以我先把最可能成交的承接对象、关键词和回复库置顶给你。`;
  }
  focusMeta.innerHTML = [
    `<span class="pill">评论关键词：${item.keyword}</span>`,
    `<span class="pill">默认阶段：${item.defaultStage}</span>`,
    `<span class="pill">线索分：${item.leadScoreHint}</span>`,
    `<span class="pill">业务：${item.business}</span>`,
    detail ? `<span class="pill">来源：${detail.marketLabel}</span>` : ""
  ].join("");
  focusActions.innerHTML = `
    <a class="card-action" href="./skill-radar.html?skill=${item.slug}">回到这组雷达信号</a>
    <a class="github-link" href="./radar-specs.html?slug=${item.slug}">查看对应增强简报</a>
    <a class="github-link" href="${contextHref('./launch-kits.html', { slug: item.slug })}">回到发布素材包</a>
    <a class="github-link" href="./index.html?teammate=${item.teammate_id}&status=packaged&minStars=4#downloads">看这位同事的可下载 Skill</a>
    <a class="github-link" href="${item.download}" download>下载当前 Skill</a>
  `;
}

renderStages();
const initialItem = focusItem();
document.getElementById("leadCount").textContent = filteredItems().length;
renderFocusCard(initialItem);
renderReplyDetail(initialItem?.slug || "");
