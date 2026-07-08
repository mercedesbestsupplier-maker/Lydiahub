const RESEARCH_DATA = [
  {
    "id": "overseas-research",
    "ownerId": "market-intel",
    "title": "Alice 的海外市场调研工作台",
    "market": "海外市场",
    "headline": "从海外社区、SaaS 评价、外包需求和应用差评里，把真实痛点变成可验证的产品机会。",
    "summary": "适合海外 SaaS、AI 工具、独立站、B2B 服务、跨境项目立项前验证。",
    "sourcePlatforms": [
      "Reddit",
      "G2/Capterra",
      "Upwork",
      "App Store / Google Play"
    ],
    "inputs": [
      "行业关键词",
      "目标国家",
      "竞品链接",
      "用户评论 / 差评",
      "想验证的机会方向"
    ],
    "outputs": [
      "痛点证据卡",
      "需求价值评分",
      "竞品缺口",
      "7 天 MVP 验证路线",
      "一页纸机会报告"
    ],
    "scenarios": [
      "海外 SaaS 立项",
      "AI 工具验证",
      "独立站机会判断",
      "外贸服务新方向筛选"
    ],
    "successSignals": [
      "用户反复抱怨",
      "已有预算或付费替代品",
      "竞争产品存在集中差评",
      "可在 7 天内跑最小验证"
    ],
    "firstQuestion": "先确认你要看的是哪个国家、哪类用户、哪条产品线，不然海外证据会混在一起。",
    "ownerStyle": "Alice 像一个冷静的研究总监，先找原话、差评和真实预算，再判断要不要继续往下做。",
    "handoffRule": "只有当她确认用户真的在抱怨、真的有替代品、真的存在付费可能，才会往内容、MVP 或成交线派单。",
    "branches": [
      {
        "id": "content",
        "title": "调研后转内容选题",
        "ownerId": "overseas-social",
        "summary": "把海外用户原话转成 LinkedIn、X、TikTok、独立站博客的内容切口。",
        "outputs": [
          "内容角度清单",
          "标题钩子",
          "平台适配文案",
          "评论区关键词"
        ],
        "packId": "overseas-social-pack",
        "teammateId": "overseas-social",
        "flowId": "content",
        "teammate": {
          "id": "overseas-social",
          "name": "Mia",
          "title": "海外社媒经理",
          "department": "全球内容与社媒部",
          "avatar": "<img src=\"./assets/avatars/overseas-social.svg\" alt=\"avatar\" />",
          "personality": "外向、本地化强、懂英文平台语气。",
          "motto": "同一个卖点，到不同平台要换一种说法。",
          "bestFor": [
            "LinkedIn",
            "TikTok",
            "Instagram",
            "英文内容本地化"
          ],
          "color": "#f7819f"
        },
        "packTitle": "",
        "handoffNote": "接下来会由 Mia 接手，她更擅长 LinkedIn, TikTok, Instagram。",
        "playbookFocus": "先确定国家和平台，再做英文语气、本地化表达和跨平台分发。",
        "packHref": "./index.html?teammate=overseas-social&minStars=4#downloads",
        "flowHref": "./research-actions.html?desk=overseas-research&flow=content",
        "teammatePage": "./teammates/overseas-social.html",
        "skills": [
          {
            "number": 4021,
            "slug": "overseas-social-growth-manager",
            "title": "海外社媒增长经理",
            "category": "海外社媒运营",
            "mainCategory": "海外社媒运营",
            "platform": "LinkedIn / TikTok / Instagram / X",
            "signal": "把产品卖点、本地化表达、平台语气和互动节奏组合成海外社媒增长计划。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "海外社媒运营",
              "跨境卖家",
              "SaaS创始人",
              "海外创作者"
            ],
            "scenes": [
              "英文发帖",
              "本地化",
              "海外分发",
              "账号增长"
            ],
            "business": "海外增长",
            "categoryNote": "跨境和B2B用户付费能力强，适合做英文内容和获客工具包。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/overseas-social-growth-manager.zip",
            "source": "../skills/overseas-social-growth-manager/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "overseas-social",
            "inputHint": "产品/服务、目标国家、平台、品牌语气、受众、竞品内容、发布频率",
            "outputHint": "海外社媒定位、内容月历、平台版本、互动话术和复盘指标",
            "workflowChain": [
              "明确目标市场",
              "翻译卖点为本地化表达",
              "生成平台内容",
              "设计互动和复盘"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Mia",
            "teammateTitle": "海外社媒经理",
            "teammateDepartment": "全球内容与社媒部",
            "teammateAvatar": "<img src=\"./assets/avatars/overseas-social.svg\" alt=\"avatar\" />",
            "teammatePersonality": "外向、本地化强、懂英文平台语气。",
            "teammateMotto": "同一个卖点，到不同平台要换一种说法。",
            "teammateColor": "#f7819f",
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "solo-founder"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          },
          {
            "number": 4022,
            "slug": "linkedin-social-selling-system",
            "title": "LinkedIn 社交销售系统",
            "category": "海外社媒运营",
            "mainCategory": "海外社媒运营",
            "platform": "LinkedIn",
            "signal": "把发帖、评论、资料页、私信和 Lead Magnet 组合成 LinkedIn 获客系统。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "B2B销售",
              "SaaS创始人",
              "外贸服务商",
              "顾问"
            ],
            "scenes": [
              "LinkedIn获客",
              "社交销售",
              "暖私信",
              "内容获客"
            ],
            "business": "海外增长",
            "categoryNote": "跨境和B2B用户付费能力强，适合做英文内容和获客工具包。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/linkedin-social-selling-system.zip",
            "source": "../skills/linkedin-social-selling-system/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "overseas-social",
            "inputHint": "目标客户、个人资料、服务卖点、案例、对标账号、互动记录",
            "outputHint": "资料页优化、发帖主题、评论策略、暖私信、资料包和每日动作清单",
            "workflowChain": [
              "优化主页承接",
              "设计内容和评论入口",
              "生成暖私信",
              "安排每日社交销售动作"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Mia",
            "teammateTitle": "海外社媒经理",
            "teammateDepartment": "全球内容与社媒部",
            "teammateAvatar": "<img src=\"./assets/avatars/overseas-social.svg\" alt=\"avatar\" />",
            "teammatePersonality": "外向、本地化强、懂英文平台语气。",
            "teammateMotto": "同一个卖点，到不同平台要换一种说法。",
            "teammateColor": "#f7819f",
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          },
          {
            "number": 4023,
            "slug": "tiktok-instagram-localization-studio",
            "title": "TikTok/Instagram 本地化内容工作室",
            "category": "海外社媒运营",
            "mainCategory": "海外社媒运营",
            "platform": "TikTok / Instagram / Reels",
            "signal": "把中文卖点改造成海外用户听得懂、愿意停留和互动的短内容。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "跨境卖家",
              "海外运营",
              "品牌内容运营",
              "海外创作者"
            ],
            "scenes": [
              "本地化",
              "短视频脚本",
              "海外种草",
              "Instagram内容"
            ],
            "business": "海外增长",
            "categoryNote": "跨境和B2B用户付费能力强，适合做英文内容和获客工具包。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/tiktok-instagram-localization-studio.zip",
            "source": "../skills/tiktok-instagram-localization-studio/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "overseas-social",
            "inputHint": "中文素材、目标国家、产品卖点、目标用户、视频/图片素材、禁忌",
            "outputHint": "英文脚本、caption、hashtag、视觉建议、文化风险和多版本测试",
            "workflowChain": [
              "提炼非中文语境卖点",
              "替换文化表达",
              "生成短视频和图文版本",
              "检查平台和文化风险"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Mia",
            "teammateTitle": "海外社媒经理",
            "teammateDepartment": "全球内容与社媒部",
            "teammateAvatar": "<img src=\"./assets/avatars/overseas-social.svg\" alt=\"avatar\" />",
            "teammatePersonality": "外向、本地化强、懂英文平台语气。",
            "teammateMotto": "同一个卖点，到不同平台要换一种说法。",
            "teammateColor": "#f7819f",
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "solo-founder"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          },
          {
            "number": 4024,
            "slug": "global-content-calendar-operator",
            "title": "海外节点内容日历运营",
            "category": "海外社媒运营",
            "mainCategory": "海外社媒运营",
            "platform": "节日营销 / 海外社媒 / Email",
            "signal": "围绕海外节日、促销节点和行业事件生成内容与活动计划。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "海外社媒运营",
              "跨境卖家",
              "品牌运营",
              "电商运营"
            ],
            "scenes": [
              "节日营销",
              "内容排期",
              "海外促销",
              "多平台分发"
            ],
            "business": "海外增长",
            "categoryNote": "跨境和B2B用户付费能力强，适合做英文内容和获客工具包。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/global-content-calendar-operator.zip",
            "source": "../skills/global-content-calendar-operator/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "overseas-social",
            "inputHint": "目标市场、产品、月份、促销节点、平台、预算、内容库存",
            "outputHint": "节点日历、主题安排、促销话术、素材清单和发布节奏",
            "workflowChain": [
              "筛选高相关节点",
              "匹配产品和用户场景",
              "生成多平台内容",
              "安排预热和复盘"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Mia",
            "teammateTitle": "海外社媒经理",
            "teammateDepartment": "全球内容与社媒部",
            "teammateAvatar": "<img src=\"./assets/avatars/overseas-social.svg\" alt=\"avatar\" />",
            "teammatePersonality": "外向、本地化强、懂英文平台语气。",
            "teammateMotto": "同一个卖点，到不同平台要换一种说法。",
            "teammateColor": "#f7819f",
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "solo-founder"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          }
        ]
      },
      {
        "id": "product",
        "title": "调研后转产品机会",
        "ownerId": "chief-of-staff",
        "summary": "把真实痛点转成功能机会、MVP 路线和优先级判断，决定做不做。",
        "outputs": [
          "机会排序",
          "MVP 路线",
          "放弃条件",
          "验证实验清单"
        ],
        "packId": "solo-daily-operating",
        "teammateId": "chief-of-staff",
        "flowId": "mvp",
        "teammate": {
          "id": "chief-of-staff",
          "name": "阿序",
          "title": "任务调度总监",
          "department": "总经理办公室",
          "avatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
          "personality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
          "motto": "先判断任务归属，再让最合适的同事开工。",
          "bestFor": [
            "任务分诊",
            "团队调度",
            "优先级判断",
            "经营复盘"
          ],
          "color": "#d7ff58"
        },
        "packTitle": "一人公司每日经营包",
        "handoffNote": "接下来会由 阿序 接手，她更擅长 任务分诊, 团队调度, 优先级判断。",
        "playbookFocus": "先排优先级，再决定最小试卖动作和今天先推进哪一条线。",
        "packHref": "./index.html?pack=solo-daily-operating&minStars=4#downloads",
        "flowHref": "./research-actions.html?desk=overseas-research&flow=mvp",
        "teammatePage": "./teammates/chief-of-staff.html",
        "skills": [
          {
            "number": 2021,
            "slug": "company-workbench-021",
            "title": "办公室主任需求分诊台",
            "category": "办公白领效率",
            "mainCategory": "办公白领效率",
            "platform": "一人公司工作台",
            "signal": "用户只输入目标，办公室主任自动拆成市场、内容、拓客、成交、交付等任务包。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "职场白领",
              "助理",
              "项目经理",
              "运营",
              "管理者"
            ],
            "scenes": [
              "会议纪要",
              "周报汇报",
              "PPT大纲",
              "邮件沟通",
              "SOP流程"
            ],
            "business": "办公提效",
            "categoryNote": "人群最大、使用高频，适合做免费引流和办公效率合集。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/company-workbench-021.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "TradingClaw范式",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "chief-of-staff",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "inputHint": "目标、当前资源、时间限制、你最担心的卡点。",
            "outputHint": "优先级判断、任务拆解、需要调用的同事和 Skill 组合。",
            "workflowChain": [
              "澄清目标",
              "拆成岗位任务",
              "生成今日作战清单"
            ],
            "audienceTags": [
              "office-worker",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "高频提效",
              "适合新手",
              "规划作战包"
            ]
          },
          {
            "number": 2030,
            "slug": "company-workbench-030",
            "title": "一人公司每日作战清单",
            "category": "办公白领效率",
            "mainCategory": "办公白领效率",
            "platform": "个人工作台",
            "signal": "把今天要做的市场、内容、销售、交付动作排成可执行清单。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "职场白领",
              "助理",
              "项目经理",
              "运营",
              "管理者"
            ],
            "scenes": [
              "会议纪要",
              "周报汇报",
              "PPT大纲",
              "邮件沟通",
              "SOP流程"
            ],
            "business": "办公提效",
            "categoryNote": "人群最大、使用高频，适合做免费引流和办公效率合集。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/company-workbench-030.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "TradingClaw范式",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "chief-of-staff",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "inputHint": "目标、当前资源、时间限制、你最担心的卡点。",
            "outputHint": "优先级判断、任务拆解、需要调用的同事和 Skill 组合。",
            "workflowChain": [
              "澄清目标",
              "拆成岗位任务",
              "生成今日作战清单"
            ],
            "audienceTags": [
              "office-worker",
              "solo-founder"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "高频提效",
              "适合新手",
              "规划作战包"
            ]
          },
          {
            "number": 4003,
            "slug": "one-person-company-dispatch-director",
            "title": "一人公司任务分诊与团队调度",
            "category": "办公白领效率",
            "mainCategory": "办公白领效率",
            "platform": "一人公司工作台",
            "signal": "用户只说目标时，先判断任务类型、风险、资料缺口和最适合调用的同事。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "一人公司老板",
              "项目经理",
              "运营负责人",
              "创作者团队"
            ],
            "scenes": [
              "任务分诊",
              "团队调度",
              "项目拆解",
              "每日作战"
            ],
            "business": "经营管理",
            "categoryNote": "人群最大、使用高频，适合做免费引流和办公效率合集。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/one-person-company-dispatch-director.zip",
            "source": "../skills/one-person-company-dispatch-director/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "chief-of-staff",
            "inputHint": "目标、已有资料、时间限制、业务场景、希望输出、不能触碰的风险边界",
            "outputHint": "任务分诊表、派单顺序、每位同事输入材料、交付物、风险提醒和下一步动作",
            "workflowChain": [
              "识别目标和任务类型",
              "匹配最合适的同事与细分 Skill",
              "输出派单顺序和交付标准",
              "提醒资料缺口与风险边界"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "audienceTags": [
              "office-worker",
              "solo-founder"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "高频提效",
              "适合新手",
              "正式执行包"
            ]
          },
          {
            "number": 4001,
            "slug": "best-of-orchestration-blueprint",
            "title": "最佳实践组装蓝图",
            "category": "产品创业与 SaaS 增长",
            "mainCategory": "产品创业与 SaaS 增长",
            "platform": "一人公司工作台 / 员工能力系统",
            "signal": "不照搬任何一个项目，只抽取各类高星项目最强的任务分解、角色协作、状态记忆、命令体系和工作流商品化能力。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 98,
            "roles": [
              "一人公司老板",
              "技术博主",
              "产品经理",
              "独立开发者"
            ],
            "scenes": [
              "竞品拆解",
              "能力组装",
              "产品架构",
              "Skill体系设计"
            ],
            "business": "产品增长",
            "categoryNote": "适合技术 IP 和高客单咨询，但受众比办公电商窄。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/best-of-orchestration-blueprint.zip",
            "source": "../skills/best-of-orchestration-blueprint/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "chief-of-staff",
            "inputHint": "候选项目、目标用户、业务场景、可用工具、许可限制、想保留/舍弃的能力",
            "outputHint": "项目优势拆解表、只采用的最强模块、舍弃原因、我们的原创组合方案和落地路线",
            "workflowChain": [
              "核验每个项目的定位和许可",
              "拆出最强可复用模块",
              "剔除过重或不适合普通用户的部分",
              "组合成自己的员工能力系统"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "audienceTags": [
              "office-worker",
              "solo-founder"
            ],
            "difficulty": "需要资料",
            "valueTags": [
              "辅助决策",
              "适合老板",
              "正式执行包"
            ]
          }
        ]
      },
      {
        "id": "sales",
        "title": "调研后转销售线索",
        "ownerId": "lead-gen",
        "summary": "把买家需求、外包需求和企业痛点转成开发信切口、背调线索和破冰话术。",
        "outputs": [
          "买家线索简报",
          "开发信角度",
          "资格判断问题",
          "跟进节奏"
        ],
        "packId": "foreign-trade-leads",
        "teammateId": "lead-gen",
        "flowId": "close",
        "teammate": {
          "id": "lead-gen",
          "name": "Leo",
          "title": "海外拓客负责人",
          "department": "销售获客部",
          "avatar": "<img src=\"./assets/avatars/lead-gen.svg\" alt=\"avatar\" />",
          "personality": "主动、直接、结果导向，不怕冷启动。",
          "motto": "客户不会自己出现，线索要被设计出来。",
          "bestFor": [
            "开发信",
            "私信破冰",
            "Lead Magnet",
            "客户名单跟进"
          ],
          "color": "#9ad26a"
        },
        "packTitle": "外贸客户开发包",
        "handoffNote": "接下来会由 Leo 接手，她更擅长 开发信, 私信破冰, Lead Magnet。",
        "playbookFocus": "先确认客户类型和国家，再判断是发模板、继续问诊还是推进成交。",
        "packHref": "./index.html?pack=foreign-trade-leads&minStars=4#downloads",
        "flowHref": "./research-actions.html?desk=overseas-research&flow=close",
        "teammatePage": "./teammates/lead-gen.html",
        "skills": [
          {
            "number": 4025,
            "slug": "b2b-lead-generation-director",
            "title": "B2B 拓客负责人工作台",
            "category": "销售获客与 B2B 私信",
            "mainCategory": "销售获客与 B2B 私信",
            "platform": "LinkedIn / Email / CRM / WhatsApp",
            "signal": "把客户画像、名单分层、破冰、跟进和 Lead Magnet 组合成拓客系统。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "B2B销售",
              "BD",
              "外贸业务员",
              "SaaS创始人"
            ],
            "scenes": [
              "私信获客",
              "冷邮件",
              "客户名单",
              "Lead Magnet"
            ],
            "business": "销售成交",
            "categoryNote": "离钱最近，适合接私有化部署、销售SOP和企业咨询。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/b2b-lead-generation-director.zip",
            "source": "../skills/b2b-lead-generation-director/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "lead-gen",
            "inputHint": "目标客户、产品卖点、客户名单、触达平台、案例、预算和转化目标",
            "outputHint": "客户分层、破冰话术、开发信、跟进节奏、Lead Magnet 和 CRM 字段",
            "workflowChain": [
              "定义 ICP",
              "分层客户名单",
              "生成多渠道触达",
              "安排跟进和线索评分"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Leo",
            "teammateTitle": "海外拓客负责人",
            "teammateDepartment": "销售获客部",
            "teammateAvatar": "<img src=\"./assets/avatars/lead-gen.svg\" alt=\"avatar\" />",
            "teammatePersonality": "主动、直接、结果导向，不怕冷启动。",
            "teammateMotto": "客户不会自己出现，线索要被设计出来。",
            "teammateColor": "#9ad26a",
            "audienceTags": [
              "crossborder-seller",
              "office-worker",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "正式执行包"
            ]
          },
          {
            "number": 4026,
            "slug": "buyer-research-to-cold-email",
            "title": "买家背调到开发信",
            "category": "销售获客与 B2B 私信",
            "mainCategory": "销售获客与 B2B 私信",
            "platform": "官网 / LinkedIn / Email",
            "signal": "把目标买家资料变成低骚扰、高相关的开发信和跟进序列。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "外贸业务员",
              "B2B销售",
              "顾问",
              "SaaS销售"
            ],
            "scenes": [
              "买家背调",
              "开发信",
              "客户跟进",
              "英文销售"
            ],
            "business": "销售成交",
            "categoryNote": "离钱最近，适合接私有化部署、销售SOP和企业咨询。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/buyer-research-to-cold-email.zip",
            "source": "../skills/buyer-research-to-cold-email/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "lead-gen",
            "inputHint": "公司官网信息、联系人资料、触发事件、产品卖点、过往沟通",
            "outputHint": "买家简报、破冰角度、首封开发信、跟进序列和退出话术",
            "workflowChain": [
              "提炼公司信号",
              "匹配痛点和卖点",
              "写低压开发信",
              "安排跟进节奏"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Leo",
            "teammateTitle": "海外拓客负责人",
            "teammateDepartment": "销售获客部",
            "teammateAvatar": "<img src=\"./assets/avatars/lead-gen.svg\" alt=\"avatar\" />",
            "teammatePersonality": "主动、直接、结果导向，不怕冷启动。",
            "teammateMotto": "客户不会自己出现，线索要被设计出来。",
            "teammateColor": "#9ad26a",
            "audienceTags": [
              "crossborder-seller",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "正式执行包"
            ]
          },
          {
            "number": 4027,
            "slug": "lead-magnet-webinar-funnel",
            "title": "资料包/Webinar 获客漏斗",
            "category": "销售获客与 B2B 私信",
            "mainCategory": "销售获客与 B2B 私信",
            "platform": "LinkedIn / 小红书 / Email / 社群",
            "signal": "设计免费资料包、Webinar 或诊断工具，把内容流量变成线索。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "SaaS创始人",
              "顾问",
              "知识付费博主",
              "工具开发者"
            ],
            "scenes": [
              "Lead Magnet",
              "Webinar",
              "免费资料",
              "线索承接"
            ],
            "business": "销售成交",
            "categoryNote": "离钱最近，适合接私有化部署、销售SOP和企业咨询。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/lead-magnet-webinar-funnel.zip",
            "source": "../skills/lead-magnet-webinar-funnel/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "lead-gen",
            "inputHint": "目标客户、后端产品、痛点、已有素材、交付形式、领取渠道",
            "outputHint": "引流资产主题、落地页文案、领取流程、跟进序列和升级路径",
            "workflowChain": [
              "定位高意图痛点",
              "设计免费资产",
              "写领取和推广文案",
              "安排后续跟进和成交"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Leo",
            "teammateTitle": "海外拓客负责人",
            "teammateDepartment": "销售获客部",
            "teammateAvatar": "<img src=\"./assets/avatars/lead-gen.svg\" alt=\"avatar\" />",
            "teammatePersonality": "主动、直接、结果导向，不怕冷启动。",
            "teammateMotto": "客户不会自己出现，线索要被设计出来。",
            "teammateColor": "#9ad26a",
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "正式执行包"
            ]
          },
          {
            "number": 4042,
            "slug": "linkedin-growth-skill-pack",
            "title": "LinkedIn 增长 Skill 包",
            "category": "销售获客与 B2B 私信",
            "mainCategory": "销售获客与 B2B 私信",
            "platform": "LinkedIn / B2B 内容 / 私信",
            "signal": "LinkedIn 获客离成交近，适合跨境、SaaS、顾问和外贸人群做高客单服务承接。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "B2B销售",
              "SaaS创始人",
              "外贸服务商",
              "顾问"
            ],
            "scenes": [
              "LinkedIn获客",
              "社交销售",
              "内容引流",
              "暖私信"
            ],
            "business": "销售成交",
            "categoryNote": "离钱最近，适合接私有化部署、销售SOP和企业咨询。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/linkedin-growth-skill-pack.zip",
            "source": "../skills/linkedin-growth-skill-pack/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "lead-gen",
            "inputHint": "ICP、个人主页、服务卖点、案例、目标国家、对标账号、每日可投入时间",
            "outputHint": "主页优化建议、内容栏目、评论清单、暖私信序列、Lead Magnet 和 14 天执行表",
            "workflowChain": [
              "明确目标客户和信任资产",
              "设计内容和评论入口",
              "生成低骚扰私信",
              "安排每日动作和线索评分"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "Leo",
            "teammateTitle": "海外拓客负责人",
            "teammateDepartment": "销售获客部",
            "teammateAvatar": "<img src=\"./assets/avatars/lead-gen.svg\" alt=\"avatar\" />",
            "teammatePersonality": "主动、直接、结果导向，不怕冷启动。",
            "teammateMotto": "客户不会自己出现，线索要被设计出来。",
            "teammateColor": "#9ad26a",
            "audienceTags": [
              "crossborder-seller",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "正式执行包"
            ]
          }
        ]
      }
    ],
    "preset": {
      "teammate": "market-intel",
      "category": "研究报告与咨询分析",
      "market": "海外市场",
      "minStars": 4
    },
    "owner": {
      "id": "market-intel",
      "name": "Alice",
      "title": "海外市场调研总监",
      "department": "海外市场调研部",
      "avatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
      "personality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
      "motto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
      "bestFor": [
        "海外痛点挖掘",
        "SaaS差评分析",
        "付费意愿判断",
        "海外MVP验证"
      ],
      "color": "#87c7d6"
    },
    "assetDownload": "../dist/research/overseas-research-research-kit.zip",
    "skills": [
      {
        "number": 3006,
        "slug": "demand-validation-006",
        "title": "G2 差评机会分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "SaaS 评价 / 软件评论",
        "signal": "从软件差评里提取用户不满、功能缺口、迁移成本和可切入机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-006.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3008,
        "slug": "demand-validation-008",
        "title": "App Store 差评挖掘器",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "App Store / Google Play",
        "signal": "从移动应用差评里发现体验问题、功能缺口和可复制的小工具机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-008.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3009,
        "slug": "demand-validation-009",
        "title": "Upwork 需求信号分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "外包项目 / 招标需求",
        "signal": "从项目需求描述中提炼企业正在付费解决的问题和可产品化机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-009.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3029,
        "slug": "demand-validation-029",
        "title": "AI 工具机会筛选器",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "AI 工具 / SaaS / 自动化",
        "signal": "筛选哪些重复任务适合做成 AI 工具，哪些只适合做内容或服务。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-029.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3031,
        "slug": "demand-validation-031",
        "title": "海外需求一页纸机会报告",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "海外社区 / 评价 / 外包需求",
        "signal": "把海外痛点证据、目标用户、竞品缺口、付费意愿和 MVP 路线整合成一页纸报告。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-031.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3007,
        "slug": "demand-validation-007",
        "title": "Capterra 评价缺口分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "B2B 软件评价",
        "signal": "按行业和产品类型整理评价中的痛点、缺失功能和付费用户抱怨。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-007.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 83,
          "painIntensity": 80,
          "willingness": 82,
          "competitionGap": 75,
          "executionEase": 70
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      }
    ],
    "downloads": [
      {
        "number": 3006,
        "slug": "demand-validation-006",
        "title": "G2 差评机会分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "SaaS 评价 / 软件评论",
        "signal": "从软件差评里提取用户不满、功能缺口、迁移成本和可切入机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-006.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3008,
        "slug": "demand-validation-008",
        "title": "App Store 差评挖掘器",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "App Store / Google Play",
        "signal": "从移动应用差评里发现体验问题、功能缺口和可复制的小工具机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-008.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3009,
        "slug": "demand-validation-009",
        "title": "Upwork 需求信号分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "外包项目 / 招标需求",
        "signal": "从项目需求描述中提炼企业正在付费解决的问题和可产品化机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-009.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3029,
        "slug": "demand-validation-029",
        "title": "AI 工具机会筛选器",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "AI 工具 / SaaS / 自动化",
        "signal": "筛选哪些重复任务适合做成 AI 工具，哪些只适合做内容或服务。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-029.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3031,
        "slug": "demand-validation-031",
        "title": "海外需求一页纸机会报告",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "海外社区 / 评价 / 外包需求",
        "signal": "把海外痛点证据、目标用户、竞品缺口、付费意愿和 MVP 路线整合成一页纸报告。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-031.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 93,
          "painIntensity": 90,
          "willingness": 92,
          "competitionGap": 85,
          "executionEase": 80
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3007,
        "slug": "demand-validation-007",
        "title": "Capterra 评价缺口分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "B2B 软件评价",
        "signal": "按行业和产品类型整理评价中的痛点、缺失功能和付费用户抱怨。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-007.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "海外市场",
        "teammateId": "market-intel",
        "demandScores": {
          "marketSize": 83,
          "painIntensity": 80,
          "willingness": 82,
          "competitionGap": 75,
          "executionEase": 70
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "Alice",
        "teammateTitle": "海外市场调研总监",
        "teammateDepartment": "海外市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/market-intel.svg\" alt=\"avatar\" />",
        "teammatePersonality": "冷静、证据控，习惯从海外社区和评价里找用户原话。",
        "teammateMotto": "先证明海外用户真的在反复抱怨，再判断值不值得做。",
        "teammateColor": "#87c7d6",
        "inputHint": "海外行业、目标国家、竞品、评价来源或用户原话。",
        "outputHint": "海外痛点证据、付费意愿、竞品缺口和 MVP 验证动作。",
        "workflowChain": [
          "收集海外信号",
          "量化需求价值",
          "输出机会报告"
        ],
        "audienceTags": [
          "crossborder-seller",
          "solo-founder"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "海外市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      }
    ],
    "teammatePage": "./teammates/market-intel.html",
    "filterHref": "./index.html?teammate=market-intel&category=%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A%E4%B8%8E%E5%92%A8%E8%AF%A2%E5%88%86%E6%9E%90&market=%E6%B5%B7%E5%A4%96%E5%B8%82%E5%9C%BA&minStars=4#downloads"
  },
  {
    "id": "china-research",
    "ownerId": "china-research",
    "title": "林夏的中国市场调研工作台",
    "market": "中国市场",
    "headline": "从小红书、抖音、知乎、B站、微信和本地反馈里，把热度和真实付费需求分开看。",
    "summary": "适合中文内容产品、知识付费、本地服务、电商项目、私域项目前置调研。",
    "sourcePlatforms": [
      "小红书",
      "抖音",
      "知乎 / B站",
      "微信社群 / 本地反馈"
    ],
    "inputs": [
      "中文关键词",
      "目标人群",
      "对标内容 / 竞品",
      "评论 / 私信问题",
      "想验证的项目方向"
    ],
    "outputs": [
      "用户痛点分类",
      "内容切口清单",
      "付费意愿判断",
      "MVP 试探路径",
      "中国需求一页纸报告"
    ],
    "scenarios": [
      "知识付费方向验证",
      "自媒体产品机会判断",
      "门店本地获客方向研究",
      "私域服务需求洞察"
    ],
    "successSignals": [
      "重复高频提问",
      "用户愿意求资料 / 求陪跑 / 求模板",
      "竞品评论里有明显缺口",
      "低成本内容或服务可先试卖"
    ],
    "firstQuestion": "先确认这些中文用户是在围观、在吐槽，还是已经开始问模板、问价格、问陪跑。",
    "ownerStyle": "林夏更像一个很懂中文平台的需求总监，会先拆评论情绪，再看这件事有没有转化和付费信号。",
    "handoffRule": "只有当她确认用户不只是热闹，而是真有解决问题的冲动，才会往内容、试卖或私域成交线派单。",
    "branches": [
      {
        "id": "content",
        "title": "调研后转内容选题",
        "ownerId": "content-cmo",
        "summary": "把评论区和用户问题直接转成小红书、公众号、短视频的爆文选题和标题封面。",
        "outputs": [
          "爆文选题",
          "封面标题",
          "评论区关键词",
          "内容栏目矩阵"
        ],
        "packId": "xhs-viral-start",
        "teammateId": "content-cmo",
        "flowId": "content",
        "teammate": {
          "id": "content-cmo",
          "name": "小燃",
          "title": "内容增长主编",
          "department": "CMO 内容增长部",
          "avatar": "<img src=\"./assets/avatars/content-cmo.svg\" alt=\"avatar\" />",
          "personality": "锋利、有网感、擅长把普通信息讲出传播性。",
          "motto": "先让人停下来，再让人愿意私信。",
          "bestFor": [
            "爆文选题",
            "标题封面",
            "短视频脚本",
            "矩阵分发"
          ],
          "color": "#ffb35b"
        },
        "packTitle": "小红书起号爆文包",
        "handoffNote": "接下来会由 小燃 接手，她更擅长 爆文选题, 标题封面, 短视频脚本。",
        "playbookFocus": "先把证据改成标题、封面、开头和评论承接，再决定要不要上短视频版本。",
        "packHref": "./index.html?pack=xhs-viral-start&minStars=4#downloads",
        "flowHref": "./research-actions.html?desk=china-research&flow=content",
        "teammatePage": "./teammates/content-cmo.html",
        "skills": [
          {
            "number": 4017,
            "slug": "creator-growth-editor-in-chief",
            "title": "内容增长主编工作台",
            "category": "自媒体内容增长",
            "mainCategory": "自媒体内容增长",
            "platform": "小红书 / 抖音 / 公众号 / 视频号",
            "signal": "把选题、标题、封面、正文、评论承接和复盘串成内容增长生产线。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "自媒体创作者",
              "小红书运营",
              "品牌内容运营",
              "个人IP"
            ],
            "scenes": [
              "爆款选题",
              "内容规划",
              "私域引流",
              "账号增长"
            ],
            "business": "内容增长",
            "categoryNote": "最适合做免费引流入口，覆盖起号、爆文、涨粉和转化。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/creator-growth-editor-in-chief.zip",
            "source": "../skills/creator-growth-editor-in-chief/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "content-cmo",
            "inputHint": "账号定位、目标用户、产品/服务、对标内容、素材库存、商业目标",
            "outputHint": "内容增长策略、栏目设计、爆文选题、发布节奏、转化路径和复盘表",
            "workflowChain": [
              "定位商业目标",
              "拆内容栏目",
              "生成选题与标题封面",
              "设计私信承接和复盘"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "小燃",
            "teammateTitle": "内容增长主编",
            "teammateDepartment": "CMO 内容增长部",
            "teammateAvatar": "<img src=\"./assets/avatars/content-cmo.svg\" alt=\"avatar\" />",
            "teammatePersonality": "锋利、有网感、擅长把普通信息讲出传播性。",
            "teammateMotto": "先让人停下来，再让人愿意私信。",
            "teammateColor": "#ffb35b",
            "audienceTags": [
              "creator-ip",
              "solo-founder",
              "private-domain",
              "career-education"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          },
          {
            "number": 4018,
            "slug": "viral-content-production-line",
            "title": "爆款内容生产线",
            "category": "自媒体内容增长",
            "mainCategory": "自媒体内容增长",
            "platform": "小红书 / 抖音 / 短视频 / 图文",
            "signal": "把一个主题批量生成多角度标题、开头、正文、脚本和互动设计。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "自媒体创作者",
              "短视频博主",
              "内容运营",
              "知识博主"
            ],
            "scenes": [
              "批量生产",
              "爆文仿写",
              "标题封面",
              "内容矩阵"
            ],
            "business": "内容增长",
            "categoryNote": "最适合做免费引流入口，覆盖起号、爆文、涨粉和转化。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/viral-content-production-line.zip",
            "source": "../skills/viral-content-production-line/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "content-cmo",
            "inputHint": "主题、目标人群、产品卖点、参考案例、平台、禁用表达",
            "outputHint": "选题矩阵、标题钩子、正文/脚本、封面字、评论引导和发布检查",
            "workflowChain": [
              "拆核心痛点",
              "生成多角度选题",
              "做平台化表达",
              "补上互动和转化"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "小燃",
            "teammateTitle": "内容增长主编",
            "teammateDepartment": "CMO 内容增长部",
            "teammateAvatar": "<img src=\"./assets/avatars/content-cmo.svg\" alt=\"avatar\" />",
            "teammatePersonality": "锋利、有网感、擅长把普通信息讲出传播性。",
            "teammateMotto": "先让人停下来，再让人愿意私信。",
            "teammateColor": "#ffb35b",
            "audienceTags": [
              "creator-ip",
              "solo-founder",
              "private-domain",
              "career-education"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          },
          {
            "number": 4019,
            "slug": "xhs-cover-title-ab-lab",
            "title": "小红书封面标题 A/B 实验室",
            "category": "自媒体内容增长",
            "mainCategory": "自媒体内容增长",
            "platform": "小红书 / 图文平台",
            "signal": "围绕同一笔记生成多组标题、封面字、首图结构和风险提醒。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "小红书博主",
              "品牌种草运营",
              "知识付费博主",
              "本地商家"
            ],
            "scenes": [
              "封面标题",
              "点击率优化",
              "种草笔记",
              "A/B测试"
            ],
            "business": "小红书获客",
            "categoryNote": "最适合做免费引流入口，覆盖起号、爆文、涨粉和转化。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/xhs-cover-title-ab-lab.zip",
            "source": "../skills/xhs-cover-title-ab-lab/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "content-cmo",
            "inputHint": "笔记主题、正文草稿、目标用户、对标风格、产品/资料包、禁用词",
            "outputHint": "A/B 标题、封面主副标题、首图结构、推荐排序和发布前检查",
            "workflowChain": [
              "提炼点击利益点",
              "生成多组标题封面",
              "按风险和转化排序",
              "给出测试建议"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "小燃",
            "teammateTitle": "内容增长主编",
            "teammateDepartment": "CMO 内容增长部",
            "teammateAvatar": "<img src=\"./assets/avatars/content-cmo.svg\" alt=\"avatar\" />",
            "teammatePersonality": "锋利、有网感、擅长把普通信息讲出传播性。",
            "teammateMotto": "先让人停下来，再让人愿意私信。",
            "teammateColor": "#ffb35b",
            "audienceTags": [
              "creator-ip",
              "solo-founder",
              "private-domain",
              "career-education"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          },
          {
            "number": 4020,
            "slug": "longform-to-matrix-publisher",
            "title": "长文矩阵分发主编",
            "category": "一稿多发与内容复用",
            "mainCategory": "一稿多发与内容复用",
            "platform": "公众号 / 小红书 / LinkedIn / X / 短视频",
            "signal": "把长文、直播稿、播客稿拆成多平台内容矩阵。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "内容运营",
              "创作者团队",
              "播客主",
              "品牌运营"
            ],
            "scenes": [
              "内容复用",
              "矩阵分发",
              "长文拆解",
              "素材资产化"
            ],
            "business": "内容资产复用",
            "categoryNote": "被大量付费工具验证过，一份素材变多份资产，价值非常好讲。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/longform-to-matrix-publisher.zip",
            "source": "../skills/longform-to-matrix-publisher/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "content-cmo",
            "inputHint": "长文/转写稿、核心观点、目标平台、账号语气、产品或 CTA",
            "outputHint": "多平台分发包、标题、封面字、短视频脚本、轮播大纲和发布节奏",
            "workflowChain": [
              "提炼核心观点",
              "按平台拆形态",
              "改写平台语气",
              "安排发布节奏和承接"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "小燃",
            "teammateTitle": "内容增长主编",
            "teammateDepartment": "CMO 内容增长部",
            "teammateAvatar": "<img src=\"./assets/avatars/content-cmo.svg\" alt=\"avatar\" />",
            "teammatePersonality": "锋利、有网感、擅长把普通信息讲出传播性。",
            "teammateMotto": "先让人停下来，再让人愿意私信。",
            "teammateColor": "#ffb35b",
            "audienceTags": [
              "creator-ip",
              "solo-founder",
              "private-domain",
              "career-education"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "适合引流",
              "可批量生产",
              "正式执行包"
            ]
          }
        ]
      },
      {
        "id": "product",
        "title": "调研后转产品机会",
        "ownerId": "chief-of-staff",
        "summary": "把国内需求信号整理成服务包、模板包、MVP 或轻咨询产品的判断依据。",
        "outputs": [
          "产品切口",
          "试卖路径",
          "优先级排序",
          "最小验证动作"
        ],
        "packId": "solo-daily-operating",
        "teammateId": "chief-of-staff",
        "flowId": "mvp",
        "teammate": {
          "id": "chief-of-staff",
          "name": "阿序",
          "title": "任务调度总监",
          "department": "总经理办公室",
          "avatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
          "personality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
          "motto": "先判断任务归属，再让最合适的同事开工。",
          "bestFor": [
            "任务分诊",
            "团队调度",
            "优先级判断",
            "经营复盘"
          ],
          "color": "#d7ff58"
        },
        "packTitle": "一人公司每日经营包",
        "handoffNote": "接下来会由 阿序 接手，她更擅长 任务分诊, 团队调度, 优先级判断。",
        "playbookFocus": "先排优先级，再决定最小试卖动作和今天先推进哪一条线。",
        "packHref": "./index.html?pack=solo-daily-operating&minStars=4#downloads",
        "flowHref": "./research-actions.html?desk=china-research&flow=mvp",
        "teammatePage": "./teammates/chief-of-staff.html",
        "skills": [
          {
            "number": 2021,
            "slug": "company-workbench-021",
            "title": "办公室主任需求分诊台",
            "category": "办公白领效率",
            "mainCategory": "办公白领效率",
            "platform": "一人公司工作台",
            "signal": "用户只输入目标，办公室主任自动拆成市场、内容、拓客、成交、交付等任务包。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "职场白领",
              "助理",
              "项目经理",
              "运营",
              "管理者"
            ],
            "scenes": [
              "会议纪要",
              "周报汇报",
              "PPT大纲",
              "邮件沟通",
              "SOP流程"
            ],
            "business": "办公提效",
            "categoryNote": "人群最大、使用高频，适合做免费引流和办公效率合集。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/company-workbench-021.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "TradingClaw范式",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "chief-of-staff",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "inputHint": "目标、当前资源、时间限制、你最担心的卡点。",
            "outputHint": "优先级判断、任务拆解、需要调用的同事和 Skill 组合。",
            "workflowChain": [
              "澄清目标",
              "拆成岗位任务",
              "生成今日作战清单"
            ],
            "audienceTags": [
              "office-worker",
              "solo-founder",
              "private-domain"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "高频提效",
              "适合新手",
              "规划作战包"
            ]
          },
          {
            "number": 2030,
            "slug": "company-workbench-030",
            "title": "一人公司每日作战清单",
            "category": "办公白领效率",
            "mainCategory": "办公白领效率",
            "platform": "个人工作台",
            "signal": "把今天要做的市场、内容、销售、交付动作排成可执行清单。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "职场白领",
              "助理",
              "项目经理",
              "运营",
              "管理者"
            ],
            "scenes": [
              "会议纪要",
              "周报汇报",
              "PPT大纲",
              "邮件沟通",
              "SOP流程"
            ],
            "business": "办公提效",
            "categoryNote": "人群最大、使用高频，适合做免费引流和办公效率合集。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/company-workbench-030.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "TradingClaw范式",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "chief-of-staff",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "inputHint": "目标、当前资源、时间限制、你最担心的卡点。",
            "outputHint": "优先级判断、任务拆解、需要调用的同事和 Skill 组合。",
            "workflowChain": [
              "澄清目标",
              "拆成岗位任务",
              "生成今日作战清单"
            ],
            "audienceTags": [
              "office-worker",
              "solo-founder"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "高频提效",
              "适合新手",
              "规划作战包"
            ]
          },
          {
            "number": 4003,
            "slug": "one-person-company-dispatch-director",
            "title": "一人公司任务分诊与团队调度",
            "category": "办公白领效率",
            "mainCategory": "办公白领效率",
            "platform": "一人公司工作台",
            "signal": "用户只说目标时，先判断任务类型、风险、资料缺口和最适合调用的同事。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "一人公司老板",
              "项目经理",
              "运营负责人",
              "创作者团队"
            ],
            "scenes": [
              "任务分诊",
              "团队调度",
              "项目拆解",
              "每日作战"
            ],
            "business": "经营管理",
            "categoryNote": "人群最大、使用高频，适合做免费引流和办公效率合集。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/one-person-company-dispatch-director.zip",
            "source": "../skills/one-person-company-dispatch-director/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "chief-of-staff",
            "inputHint": "目标、已有资料、时间限制、业务场景、希望输出、不能触碰的风险边界",
            "outputHint": "任务分诊表、派单顺序、每位同事输入材料、交付物、风险提醒和下一步动作",
            "workflowChain": [
              "识别目标和任务类型",
              "匹配最合适的同事与细分 Skill",
              "输出派单顺序和交付标准",
              "提醒资料缺口与风险边界"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "audienceTags": [
              "office-worker",
              "solo-founder"
            ],
            "difficulty": "5分钟可用",
            "valueTags": [
              "高频提效",
              "适合新手",
              "正式执行包"
            ]
          },
          {
            "number": 4001,
            "slug": "best-of-orchestration-blueprint",
            "title": "最佳实践组装蓝图",
            "category": "产品创业与 SaaS 增长",
            "mainCategory": "产品创业与 SaaS 增长",
            "platform": "一人公司工作台 / 员工能力系统",
            "signal": "不照搬任何一个项目，只抽取各类高星项目最强的任务分解、角色协作、状态记忆、命令体系和工作流商品化能力。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 98,
            "roles": [
              "一人公司老板",
              "技术博主",
              "产品经理",
              "独立开发者"
            ],
            "scenes": [
              "竞品拆解",
              "能力组装",
              "产品架构",
              "Skill体系设计"
            ],
            "business": "产品增长",
            "categoryNote": "适合技术 IP 和高客单咨询，但受众比办公电商窄。",
            "status": "已打包",
            "packageStatus": "packaged",
            "download": "../dist/skills/best-of-orchestration-blueprint.zip",
            "source": "../skills/best-of-orchestration-blueprint/SKILL.md",
            "hasPackage": true,
            "packageKind": "execution",
            "downloadLabel": "下载执行包",
            "teammateId": "chief-of-staff",
            "inputHint": "候选项目、目标用户、业务场景、可用工具、许可限制、想保留/舍弃的能力",
            "outputHint": "项目优势拆解表、只采用的最强模块、舍弃原因、我们的原创组合方案和落地路线",
            "workflowChain": [
              "核验每个项目的定位和许可",
              "拆出最强可复用模块",
              "剔除过重或不适合普通用户的部分",
              "组合成自己的员工能力系统"
            ],
            "sourceTag": "员工能力包",
            "teammateName": "阿序",
            "teammateTitle": "任务调度总监",
            "teammateDepartment": "总经理办公室",
            "teammateAvatar": "<img src=\"./assets/avatars/chief-of-staff.svg\" alt=\"avatar\" />",
            "teammatePersonality": "冷静、会拆解，像靠谱的二号位，知道什么事该派给谁。",
            "teammateMotto": "先判断任务归属，再让最合适的同事开工。",
            "teammateColor": "#d7ff58",
            "audienceTags": [
              "office-worker",
              "solo-founder"
            ],
            "difficulty": "需要资料",
            "valueTags": [
              "辅助决策",
              "适合老板",
              "正式执行包"
            ]
          }
        ]
      },
      {
        "id": "sales",
        "title": "调研后转销售线索",
        "ownerId": "customer-success",
        "summary": "把评论、私信、社群问题转成更容易成交的关键词、追问和承接动作。",
        "outputs": [
          "高意向问题清单",
          "私信第一句",
          "升级信号",
          "成交路径"
        ],
        "packId": "private-domain-close",
        "teammateId": "customer-success",
        "flowId": "close",
        "teammate": {
          "id": "customer-success",
          "name": "安妮",
          "title": "客服与复购经理",
          "department": "客服与私域成交部",
          "avatar": "<img src=\"./assets/avatars/customer-success.svg\" alt=\"avatar\" />",
          "personality": "耐心、共情、擅长灭火和二次转化。",
          "motto": "一次售后，可能是下一次复购的开头。",
          "bestFor": [
            "客服回复",
            "差评处理",
            "退款挽留",
            "社群促活"
          ],
          "color": "#ffd86b"
        },
        "packTitle": "私域客服成交包",
        "handoffNote": "接下来会由 安妮 接手，她更擅长 客服回复, 差评处理, 退款挽留。",
        "playbookFocus": "先降低用户决策压力，再通过场景追问和案例把对话推向成交。",
        "packHref": "./index.html?pack=private-domain-close&minStars=4#downloads",
        "flowHref": "./research-actions.html?desk=china-research&flow=close",
        "teammatePage": "./teammates/customer-success.html",
        "skills": [
          {
            "number": 2011,
            "slug": "crossborder-workflow-011",
            "title": "Shopify 产品页转化文案",
            "category": "电商与跨境卖家",
            "mainCategory": "电商与跨境卖家",
            "platform": "Shopify / DTC 独立站",
            "signal": "把产品卖点改成首屏文案、信任背书、FAQ、购买理由和加购提示。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "电商卖家",
              "跨境卖家",
              "店铺运营",
              "TikTok Shop运营"
            ],
            "scenes": [
              "商品文案",
              "客服售后",
              "Listing优化",
              "广告素材",
              "达人合作"
            ],
            "business": "电商转化",
            "categoryNote": "直接影响转化和收入，用户付费意愿强。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/crossborder-workflow-011.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "Acciowork映射",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "customer-success",
            "teammateName": "安妮",
            "teammateTitle": "客服与复购经理",
            "teammateDepartment": "客服与私域成交部",
            "teammateAvatar": "<img src=\"./assets/avatars/customer-success.svg\" alt=\"avatar\" />",
            "teammatePersonality": "耐心、共情、擅长灭火和二次转化。",
            "teammateMotto": "一次售后，可能是下一次复购的开头。",
            "teammateColor": "#ffd86b",
            "inputHint": "用户问题、订单状态、情绪强度、可提供补偿方案。",
            "outputHint": "客服回复、安抚话术、补救方案和复购引导。",
            "workflowChain": [
              "判断情绪与责任",
              "生成回复",
              "设计后续挽回"
            ],
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "规划作战包"
            ]
          },
          {
            "number": 2014,
            "slug": "crossborder-workflow-014",
            "title": "独立站 FAQ 与售后政策生成器",
            "category": "私域社群与客服成交",
            "mainCategory": "私域社群与客服成交",
            "platform": "Shopify / WooCommerce",
            "signal": "生成退换货、物流、尺码、支付、保修等 FAQ，减少客服压力并提升信任。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "私域运营",
              "社群运营",
              "客服",
              "知识付费运营",
              "本地商家"
            ],
            "scenes": [
              "社群促活",
              "私信成交",
              "客服回复",
              "复购唤醒",
              "用户分层"
            ],
            "business": "私域成交",
            "categoryNote": "离成交近，适合小红书私信、社群和付费答疑转化。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/crossborder-workflow-014.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "Acciowork映射",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "customer-success",
            "teammateName": "安妮",
            "teammateTitle": "客服与复购经理",
            "teammateDepartment": "客服与私域成交部",
            "teammateAvatar": "<img src=\"./assets/avatars/customer-success.svg\" alt=\"avatar\" />",
            "teammatePersonality": "耐心、共情、擅长灭火和二次转化。",
            "teammateMotto": "一次售后，可能是下一次复购的开头。",
            "teammateColor": "#ffd86b",
            "inputHint": "用户问题、订单状态、情绪强度、可提供补偿方案。",
            "outputHint": "客服回复、安抚话术、补救方案和复购引导。",
            "workflowChain": [
              "判断情绪与责任",
              "生成回复",
              "设计后续挽回"
            ],
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "规划作战包"
            ]
          },
          {
            "number": 2015,
            "slug": "crossborder-workflow-015",
            "title": "跨境客服多语言回复库",
            "category": "私域社群与客服成交",
            "mainCategory": "私域社群与客服成交",
            "platform": "Amazon / Shopify / TikTok Shop",
            "signal": "针对物流延迟、退款、尺码、破损、差评生成多语言客服回复。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "私域运营",
              "社群运营",
              "客服",
              "知识付费运营",
              "本地商家"
            ],
            "scenes": [
              "社群促活",
              "私信成交",
              "客服回复",
              "复购唤醒",
              "用户分层"
            ],
            "business": "私域成交",
            "categoryNote": "离成交近，适合小红书私信、社群和付费答疑转化。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/crossborder-workflow-015.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "Acciowork映射",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "customer-success",
            "teammateName": "安妮",
            "teammateTitle": "客服与复购经理",
            "teammateDepartment": "客服与私域成交部",
            "teammateAvatar": "<img src=\"./assets/avatars/customer-success.svg\" alt=\"avatar\" />",
            "teammatePersonality": "耐心、共情、擅长灭火和二次转化。",
            "teammateMotto": "一次售后，可能是下一次复购的开头。",
            "teammateColor": "#ffd86b",
            "inputHint": "用户问题、订单状态、情绪强度、可提供补偿方案。",
            "outputHint": "客服回复、安抚话术、补救方案和复购引导。",
            "workflowChain": [
              "判断情绪与责任",
              "生成回复",
              "设计后续挽回"
            ],
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "规划作战包"
            ]
          },
          {
            "number": 2016,
            "slug": "crossborder-workflow-016",
            "title": "差评挽回与评价回复助手",
            "category": "私域社群与客服成交",
            "mainCategory": "私域社群与客服成交",
            "platform": "Amazon / Trustpilot / 店铺评价",
            "signal": "把差评场景转成安抚、补偿、解释和二次沟通方案。",
            "stars": 5,
            "starsText": "★★★★★",
            "priority": "马上优先做",
            "score": 99,
            "roles": [
              "私域运营",
              "社群运营",
              "客服",
              "知识付费运营",
              "本地商家"
            ],
            "scenes": [
              "社群促活",
              "私信成交",
              "客服回复",
              "复购唤醒",
              "用户分层"
            ],
            "business": "私域成交",
            "categoryNote": "离成交近，适合小红书私信、社群和付费答疑转化。",
            "status": "有规划包",
            "packageStatus": "planning",
            "download": "../dist/planning-skills/crossborder-workflow-016.zip",
            "source": "",
            "hasPackage": true,
            "sourceTag": "Acciowork映射",
            "packageKind": "planning",
            "downloadLabel": "下载规划包",
            "teammateId": "customer-success",
            "teammateName": "安妮",
            "teammateTitle": "客服与复购经理",
            "teammateDepartment": "客服与私域成交部",
            "teammateAvatar": "<img src=\"./assets/avatars/customer-success.svg\" alt=\"avatar\" />",
            "teammatePersonality": "耐心、共情、擅长灭火和二次转化。",
            "teammateMotto": "一次售后，可能是下一次复购的开头。",
            "teammateColor": "#ffd86b",
            "inputHint": "用户问题、订单状态、情绪强度、可提供补偿方案。",
            "outputHint": "客服回复、安抚话术、补救方案和复购引导。",
            "workflowChain": [
              "判断情绪与责任",
              "生成回复",
              "设计后续挽回"
            ],
            "audienceTags": [
              "crossborder-seller",
              "creator-ip",
              "private-domain"
            ],
            "difficulty": "轻量上手",
            "valueTags": [
              "直接影响成交",
              "适合高客单",
              "规划作战包"
            ]
          }
        ]
      }
    ],
    "preset": {
      "teammate": "china-research",
      "category": "研究报告与咨询分析",
      "market": "中国市场",
      "minStars": 4
    },
    "owner": {
      "id": "china-research",
      "name": "林夏",
      "title": "中国市场调研总监",
      "department": "中国市场调研部",
      "avatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
      "personality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
      "motto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
      "bestFor": [
        "中文评论洞察",
        "小红书抖音痛点",
        "本地需求验证",
        "私域机会判断"
      ],
      "color": "#78d8a6"
    },
    "assetDownload": "../dist/research/china-research-research-kit.zip",
    "skills": [
      {
        "number": 3014,
        "slug": "demand-validation-014",
        "title": "微信社群问题聚类",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "微信群 / 私域社群",
        "signal": "把社群里的重复提问、求推荐、求模板整理成可售卖服务和产品机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-014.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3016,
        "slug": "demand-validation-016",
        "title": "淘宝京东差评机会分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "淘宝 / 京东 / 电商差评",
        "signal": "从商品差评里提取质量、体验、包装、售后和细分人群需求。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-016.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3018,
        "slug": "demand-validation-018",
        "title": "中国知识付费痛点挖掘",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "小红书 / 公众号 / 社群",
        "signal": "从学习焦虑、求资料、求陪跑、求模板中判断知识付费产品机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-018.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3032,
        "slug": "demand-validation-032",
        "title": "中国需求一页纸机会报告",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "中文社区 / 内容平台 / 私域反馈",
        "signal": "把国内痛点证据、目标人群、内容切口、变现路径和验证动作整合成一页纸报告。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-032.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3012,
        "slug": "demand-validation-012",
        "title": "知乎问答需求挖掘",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "知乎 / 问答社区",
        "signal": "从长问题和高赞回答里提取焦虑、未满足需求和可知识付费切口。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-012.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 82,
          "painIntensity": 83,
          "willingness": 77,
          "competitionGap": 73,
          "executionEase": 79
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3013,
        "slug": "demand-validation-013",
        "title": "B站评论需求洞察",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "B站视频评论 / 弹幕",
        "signal": "从长视频评论和弹幕里提取教程需求、工具需求、购买顾虑和内容空白。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-013.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 82,
          "painIntensity": 83,
          "willingness": 77,
          "competitionGap": 73,
          "executionEase": 79
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3015,
        "slug": "demand-validation-015",
        "title": "V2EX开发者需求雷达",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "V2EX / 中文开发者社区",
        "signal": "从开发者吐槽、求助和工具讨论里挖掘技术产品、插件和自动化机会。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-015.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 82,
          "painIntensity": 83,
          "willingness": 77,
          "competitionGap": 73,
          "executionEase": 79
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3017,
        "slug": "demand-validation-017",
        "title": "本地生活点评需求挖掘",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "大众点评 / 美团 / 同城评价",
        "signal": "从本地商家评价中发现服务流程、套餐设计、门店获客和复购机会。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-017.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 82,
          "painIntensity": 83,
          "willingness": 77,
          "competitionGap": 73,
          "executionEase": 79
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      }
    ],
    "downloads": [
      {
        "number": 3014,
        "slug": "demand-validation-014",
        "title": "微信社群问题聚类",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "微信群 / 私域社群",
        "signal": "把社群里的重复提问、求推荐、求模板整理成可售卖服务和产品机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-014.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3016,
        "slug": "demand-validation-016",
        "title": "淘宝京东差评机会分析",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "淘宝 / 京东 / 电商差评",
        "signal": "从商品差评里提取质量、体验、包装、售后和细分人群需求。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-016.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3018,
        "slug": "demand-validation-018",
        "title": "中国知识付费痛点挖掘",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "小红书 / 公众号 / 社群",
        "signal": "从学习焦虑、求资料、求陪跑、求模板中判断知识付费产品机会。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-018.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3032,
        "slug": "demand-validation-032",
        "title": "中国需求一页纸机会报告",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "中文社区 / 内容平台 / 私域反馈",
        "signal": "把国内痛点证据、目标人群、内容切口、变现路径和验证动作整合成一页纸报告。",
        "stars": 5,
        "starsText": "★★★★★",
        "priority": "马上优先做",
        "score": 96,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-032.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 92,
          "painIntensity": 93,
          "willingness": 87,
          "competitionGap": 83,
          "executionEase": 89
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3012,
        "slug": "demand-validation-012",
        "title": "知乎问答需求挖掘",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "知乎 / 问答社区",
        "signal": "从长问题和高赞回答里提取焦虑、未满足需求和可知识付费切口。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-012.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 82,
          "painIntensity": 83,
          "willingness": 77,
          "competitionGap": 73,
          "executionEase": 79
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      },
      {
        "number": 3013,
        "slug": "demand-validation-013",
        "title": "B站评论需求洞察",
        "category": "研究报告与咨询分析",
        "mainCategory": "研究报告与咨询分析",
        "platform": "B站视频评论 / 弹幕",
        "signal": "从长视频评论和弹幕里提取教程需求、工具需求、购买顾虑和内容空白。",
        "stars": 4,
        "starsText": "★★★★☆",
        "priority": "第二梯队",
        "score": 84,
        "roles": [
          "咨询顾问",
          "市场研究",
          "老板",
          "投研",
          "运营负责人"
        ],
        "scenes": [
          "行业研究",
          "竞品分析",
          "用户调研",
          "高管简报",
          "决策备忘录"
        ],
        "business": "咨询分析",
        "categoryNote": "高客单潜力强，但需要资料质量和事实核验。",
        "status": "有规划包",
        "packageStatus": "planning",
        "download": "../dist/planning-skills/demand-validation-013.zip",
        "source": "",
        "hasPackage": true,
        "marketScope": "中国市场",
        "teammateId": "china-research",
        "demandScores": {
          "marketSize": 82,
          "painIntensity": 83,
          "willingness": 77,
          "competitionGap": 73,
          "executionEase": 79
        },
        "sourceTag": "需求验证能力库",
        "packageKind": "planning",
        "downloadLabel": "下载规划包",
        "teammateName": "林夏",
        "teammateTitle": "中国市场调研总监",
        "teammateDepartment": "中国市场调研部",
        "teammateAvatar": "<img src=\"./assets/avatars/china-research.svg\" alt=\"avatar\" />",
        "teammatePersonality": "敏锐、接地气，擅长从中文评论和社群问题里找生意机会。",
        "teammateMotto": "不要只看热度，要看用户是不是愿意为解决方案掏钱。",
        "teammateColor": "#78d8a6",
        "inputHint": "中文平台关键词、目标人群、竞品内容、评论或社群问题。",
        "outputHint": "中国市场痛点证据、内容切口、变现路径和验证动作。",
        "workflowChain": [
          "收集中文信号",
          "识别付费场景",
          "输出国内机会报告"
        ],
        "audienceTags": [
          "creator-ip",
          "solo-founder",
          "private-domain"
        ],
        "difficulty": "需要资料",
        "valueTags": [
          "中国市场",
          "辅助决策",
          "适合老板",
          "规划作战包"
        ]
      }
    ],
    "teammatePage": "./teammates/china-research.html",
    "filterHref": "./index.html?teammate=china-research&category=%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A%E4%B8%8E%E5%92%A8%E8%AF%A2%E5%88%86%E6%9E%90&market=%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA&minStars=4#downloads"
  }
];

const params = new URLSearchParams(window.location.search);
const activeId = params.get("desk") || RESEARCH_DATA[0].id;
const activeSkillSlug = params.get("skill") || "";
const heroTitle = document.getElementById("researchHeroTitle");
const heroSubtitle = document.getElementById("researchHeroSubtitle");
const panelNote = document.getElementById("researchPanelNote");
const workbenchCount = document.getElementById("researchWorkbenchCount");
const skillCount = document.getElementById("researchSkillCount");
const packCount = document.getElementById("researchPackCount");
const handoffCard = document.getElementById("researchHandoffCard");
const grid = document.getElementById("researchWorkbenchGrid");
const priorityGrid = document.getElementById("researchPriorityGrid");
const decisionGrid = document.getElementById("researchDecisionGrid");
const scenarioGrid = document.getElementById("researchScenarioGrid");
const ioGrid = document.getElementById("researchIoGrid");
const signalGrid = document.getElementById("researchSignalGrid");
const branchGrid = document.getElementById("researchBranchGrid");
const routeGrid = document.getElementById("researchRouteGrid");
const downloadGrid = document.getElementById("researchDownloadGrid");
const skillGrid = document.getElementById("researchSkillGrid");

function assetHref(path) {
  if (!path) return "";
  return path.replace(/^\.\.\//, "./");
}

function contextHref(base, extra = {}, hash = "") {
  const url = new URL(base, window.location.href);
  Object.entries({ ...extra }).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    url.searchParams.set(key, value);
  });
  if (hash) {
    url.hash = hash.startsWith("#") ? hash : `#${hash}`;
  }
  return `${url.pathname.split('/').pop()}${url.search}${url.hash}`;
}

function activeBench() {
  return RESEARCH_DATA.find((item) => item.id === activeId) || RESEARCH_DATA[0];
}

function focusSkill(current) {
  if (activeSkillSlug) {
    const selected = current.skills.find((item) => item.slug === activeSkillSlug);
    if (selected) return selected;
  }
  return current.skills[0] || null;
}

function scoreValues(skill) {
  const fallback = {
    marketSize: Math.min((skill.score || 82) + 3, 98),
    painIntensity: Math.min((skill.score || 82) + 1, 96),
    willingness: Math.min((skill.score || 82), 95),
    competitionGap: Math.max((skill.score || 82) - 6, 68),
    executionEase: Math.max((skill.score || 82) - 3, 70),
  };
  return skill.demandScores || fallback;
}

function opportunityMetrics(current, skill) {
  if (!skill) return null;
  const scores = scoreValues(skill);
  const downloadCount = current.downloads.length;
  const branchCount = current.branches.length;
  const packagedCount = current.skills.filter((item) => item.hasPackage).length;
  const proof = Math.round((scores.marketSize + scores.painIntensity + scores.willingness) / 3);
  const executionReady = Math.round((scores.executionEase + Math.min(98, 70 + packagedCount * 4 + branchCount * 3)) / 2);
  const whitespace = Math.round((scores.competitionGap + Math.max(72, 90 - downloadCount * 2)) / 2);
  const priority = Math.min(99, Math.round(proof * 0.5 + executionReady * 0.25 + whitespace * 0.25));
  const label = priority >= 92 ? "立即试卖" : priority >= 85 ? "本周验证" : priority >= 76 ? "先观察再试" : "持续搜证据";
  const recommend = label === "立即试卖"
    ? "这条机会的证据和执行条件都比较足，适合直接进入最小试卖或内容验证。"
    : label === "本周验证"
      ? "这条机会适合本周安排一轮最小验证，重点确认用户是否真的愿意付费或留资。"
      : label === "先观察再试"
        ? "这条机会可以留在候选清单，先借相邻方向做试探内容或问诊。"
        : "这条机会还需要继续补证据，暂时不要重投入。";
  const risk = scores.willingness < 82
    ? "付费意愿还不够扎实，先别急着做重交付。"
    : scores.executionEase < 78
      ? "执行门槛不低，先拆成更轻的验证动作。"
      : scores.competitionGap < 78
        ? "同类已经不少，升级前先拉开差异化。"
        : "风险主要在承接动作，先补试卖文案和转化路径。";
  return {
    scores,
    proof,
    executionReady,
    whitespace,
    priority,
    label,
    recommend,
    risk
  };
}

function renderWorkbenchLead(current) {
  const handoffNames = current.branches.map((branch) => `${branch.teammate.name} · ${branch.teammate.title}`).join("、");
  if (heroTitle) heroTitle.textContent = current.title;
  if (heroSubtitle) {
    heroSubtitle.textContent = `${current.headline} ${
      current.market === "海外市场"
        ? "她更适合先看海外社区、SaaS 评价和外包信号，再决定要不要往下做。"
        : "她更适合先看中文评论、私信和内容反馈，再判断有没有传播和转化空间。"
    }`;
  }
  if (panelNote) {
    panelNote.textContent = `当前总监：${current.owner.name}。${current.owner.motto}`;
  }
  if (!handoffCard) return;
  handoffCard.style.setProperty("--employee-color", current.owner.color || "var(--acid)");
  handoffCard.innerHTML = `
    <div class="handoff-head">
      <div class="handoff-avatar">${current.owner.avatar}</div>
      <div>
        <p class="eyebrow">当前总监台</p>
        <h2>${current.owner.name} · ${current.owner.title}</h2>
        <p class="small-muted">${current.owner.personality}</p>
      </div>
    </div>
    <p style="margin-top:12px;">${current.ownerStyle || current.owner.personality}</p>
    <p class="small-muted">她先问：${current.firstQuestion}</p>
    <p class="small-muted">主要看这些来源：${current.sourcePlatforms.join("、")}</p>
    <p class="small-muted">证据够了之后通常会交给：${handoffNames}</p>
    <p class="small-muted">${current.handoffRule}</p>
    <div class="handoff-tags">
      ${current.owner.bestFor.map((tag) => `<span class="pill">${tag}</span>`).join("")}
    </div>
    <div class="card-actions" style="margin-top:14px;">
      <a class="card-action" href="${current.teammatePage}">进入总监专题页</a>
      <a class="github-link" href="${assetHref(current.assetDownload)}" download>下载调研模板包</a>
    </div>
  `;
}

function renderWorkbenchCards() {
  const current = activeBench();
  grid.innerHTML = RESEARCH_DATA.map((item) => `
    <button class="pack-card" type="button" data-desk="${item.id}" style="${item.id === current.id ? "border-color: var(--ink); background: rgba(215,255,88,.24);" : ""}">
      <span class="card-kicker">${item.market}</span>
      <h3>${item.title}</h3>
      <p class="signal">${item.headline}</p>
      <p class="small-muted">${item.summary}</p>
      <p class="small-muted">${item.firstQuestion}</p>
      <div class="metric-strip">
        ${item.sourcePlatforms.map((tag) => `<span class="metric-chip">${tag}</span>`).join("")}
      </div>
      <p class="small-muted">后续常交给：${item.branches.map((branch) => branch.teammate.name).join("、")}</p>
      <div class="value-tags">
        ${item.owner.bestFor.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
    </button>
  `).join("");
  grid.querySelectorAll("[data-desk]").forEach((button) => {
    button.addEventListener("click", () => {
      const url = new URL(window.location.href);
      url.searchParams.set("desk", button.dataset.desk);
      window.location.href = url.toString();
    });
  });
}

function renderWorkbenchDetail() {
  const current = activeBench();
  const currentSkill = focusSkill(current);
  const currentOpportunity = opportunityMetrics(current, currentSkill);
  renderWorkbenchLead(current);
  workbenchCount.textContent = RESEARCH_DATA.length;
  skillCount.textContent = current.skills.length;
  packCount.textContent = 1 + current.downloads.length;

  if (priorityGrid) {
    priorityGrid.innerHTML = current.skills.map((skill) => {
      const metrics = opportunityMetrics(current, skill);
      const active = currentSkill && currentSkill.slug === skill.slug;
      return `
        <article class="skill-card" style="${active ? "border-color: var(--ink); background: rgba(215,255,88,.12);" : ""}">
          <div class="card-top">
            <span class="badge">${metrics.label}</span>
            <span class="stars">${skill.starsText}</span>
          </div>
          <div>
            <h3 class="card-title">${skill.title}</h3>
            <div class="slug">${skill.slug}</div>
          </div>
          <p class="signal">${metrics.recommend}</p>
          <div class="card-meta">
            <span class="pill">优先级 ${metrics.priority}</span>
            <span class="pill">${skill.marketScope}</span>
            <span class="pill">${skill.status}</span>
          </div>
          <div class="card-actions">
            <a class="card-action" href="${contextHref('./research-workbench.html', { desk: current.id, skill: skill.slug })}">${active ? "当前聚焦" : "聚焦这个机会"}</a>
            ${skill.download ? `<a class="github-link" href="${assetHref(skill.download)}" download>${skill.downloadLabel || "下载 Skill"}</a>` : `<span class="github-link disabled">待制作</span>`}
          </div>
        </article>
      `;
    }).join("");
  }

  if (decisionGrid && currentSkill && currentOpportunity) {
    decisionGrid.innerHTML = [
      {
        title: "当前聚焦机会",
        body: currentSkill.title
      },
      {
        title: "机会结论",
        body: `${currentOpportunity.label} · ${currentOpportunity.priority} 分`
      },
      {
        title: "市场证据强度",
        body: `${currentOpportunity.proof} / 99`
      },
      {
        title: "执行就绪度",
        body: `${currentOpportunity.executionReady} / 99`
      },
      {
        title: "市场空位",
        body: `${currentOpportunity.whitespace} / 99`
      },
      {
        title: "建议动作",
        body: currentOpportunity.recommend
      },
      {
        title: "主要提醒",
        body: currentOpportunity.risk
      },
      {
        title: "适合交给谁",
        body: current.branches.map((branch) => `${branch.teammate.name} · ${branch.title}`).join("；")
      }
    ].map((item) => `
      <div class="detail-box">
        <span>${item.title}</span>
        <strong>${item.body}</strong>
      </div>
    `).join("");
  }

  scenarioGrid.innerHTML = current.scenarios.map((item, index) => `
    <div class="detail-box">
      <span>场景 ${index + 1}</span>
      <strong>${item}</strong>
    </div>
  `).join("");

  ioGrid.innerHTML = [
    {
      title: "需要准备的输入",
      body: current.inputs.join("、")
    },
    {
      title: "你会拿到的输出",
      body: current.outputs.join("、")
    },
    {
      title: "推荐入口",
      body: currentSkill ? `先聚焦「${currentSkill.title}」，判断值不值得做，再下载模板包和对应 Skill。` : "先拿调研模板包，再看当前最强 Skill，最后进对应同事页继续承接。"
    }
  ].map((item) => `
    <div class="detail-box">
      <span>${item.title}</span>
      <strong>${item.body}</strong>
    </div>
  `).join("");

  signalGrid.innerHTML = current.successSignals.map((item, index) => `
    <div class="detail-box">
      <span>信号 ${index + 1}</span>
      <strong>${item}</strong>
    </div>
  `).join("");

  branchGrid.innerHTML = current.branches.map((branch) => `
    <article class="featured-card">
      <span class="card-kicker">调研后分叉</span>
      <h3>${branch.title}</h3>
      <p class="small-muted">${branch.teammate.name} · ${branch.teammate.title}</p>
      <p class="signal">${branch.summary}</p>
      <p class="small-muted">${branch.handoffNote}</p>
      ${branch.playbookFocus ? `<p class="small-muted">她通常会这样接：${branch.playbookFocus}</p>` : ""}
      <div class="value-tags">
        ${branch.outputs.map((item) => `<span class="pill">${item}</span>`).join("")}
      </div>
      <p class="small-muted">${branch.packTitle || "进入对应岗位资源"}</p>
      <div class="card-actions">
        <a class="card-action" href="${branch.flowHref}">进入执行工作台</a>
        <a class="github-link" href="${branch.teammatePage}">进入对应同事页</a>
      </div>
    </article>
  `).join("");

  if (routeGrid && currentSkill && currentOpportunity) {
    routeGrid.innerHTML = [
      {
        kicker: "继续搜证据",
        title: "回到下载中心看同类 Skill",
        body: "如果你还没确定方向，先看同市场、同分类的高星资源，不急着做单点判断。",
        href: current.filterHref,
        cta: "看同类资源"
      },
      {
        kicker: "做最小验证",
        title: "去执行工作台",
        body: currentOpportunity.priority >= 85
          ? "这条机会已经可以安排最小验证，直接交给后续岗位继续推进。"
          : "先选一个最轻的执行方向，把证据变成内容、试卖或私信承接。",
        href: current.branches[0]?.flowHref || "./research-actions.html",
        cta: "去执行工作台"
      },
      {
        kicker: "升级成正式 Skill",
        title: "去规划作战包中心",
        body: "如果你已经判断这条需求值得长期做，就去规划中心看怎么升级成正式技能。",
        href: currentSkill ? contextHref('./planning-center.html', { teammate: currentSkill.teammateId, slug: currentSkill.slug }) : "./planning-center.html",
        cta: "去规划中心"
      },
      {
        kicker: "回到总库",
        title: "去外脑能力库",
        body: "如果你想继续从市场信号反推机会，就去雷达里看外部高星证据。",
        href: currentSkill ? contextHref('./skill-radar.html', { skill: currentSkill.slug }) : "./skill-radar.html",
        cta: "去雷达中心"
      }
    ].map((item) => `
      <article class="featured-card">
        <span class="card-kicker">${item.kicker}</span>
        <h3>${item.title}</h3>
        <p class="signal">${item.body}</p>
        <div class="card-actions">
          <a class="card-action" href="${item.href}">${item.cta}</a>
        </div>
      </article>
    `).join("");
  }

  downloadGrid.innerHTML = [
    `
      <article class="featured-card">
        <span class="badge">工作台资源</span>
        <h3>${current.title} 模板包</h3>
        <p class="signal">内含调研报告模板、问诊表、机会评分卡和结构化工作台说明。</p>
        <div class="card-actions">
          <a class="card-action" href="${assetHref(current.assetDownload)}" download>下载模板包</a>
          <a class="github-link" href="${current.teammatePage}">进入同事专题页</a>
        </div>
      </article>
    `,
    ...current.branches.map((branch) => `
      <article class="featured-card">
        <span class="badge">调研后分叉</span>
        <h3>${branch.title}</h3>
        <p class="signal">${branch.summary}</p>
        <p class="small-muted">${branch.skills.length ? `优先 Skill：${branch.skills[0].title}` : "先进入对应岗位资源页查看"}</p>
        <div class="card-actions">
          <a class="card-action" href="${branch.flowHref}">进入执行工作台</a>
          <a class="github-link" href="${branch.packHref}">去拿对应包</a>
          <a class="github-link" href="${branch.teammatePage}">进入对应同事页</a>
        </div>
      </article>
    `),
    ...current.downloads.map((skill) => `
      <article class="featured-card">
        <span class="badge">${skill.category}</span>
        <h3>${skill.title}</h3>
        <p class="signal">${skill.signal}</p>
        <div class="card-actions">
          <a class="card-action" href="${assetHref(skill.download)}" download>下载 Skill</a>
          <a class="github-link" href="${current.filterHref}">看同类资源</a>
        </div>
      </article>
    `)
  ].join("");

  skillGrid.innerHTML = current.skills.map((skill) => {
    const metrics = opportunityMetrics(current, skill);
    const active = currentSkill && currentSkill.slug === skill.slug;
    return `
      <article class="skill-card" style="${active ? "border-color: var(--ink); background: rgba(215,255,88,.12);" : ""}">
        <div class="card-top">
          <span class="badge">${skill.category}</span>
          <span class="stars">${skill.starsText}</span>
        </div>
        <div>
          <h3 class="card-title">${skill.title}</h3>
          <div class="slug">${skill.slug}</div>
        </div>
        <p class="signal">${skill.signal}</p>
        <div class="card-meta">
          <span class="pill">${skill.marketScope}</span>
          <span class="pill">优先级 ${metrics.priority}</span>
          <span class="pill">${skill.status}</span>
        </div>
        <div class="card-actions">
          <a class="card-action" href="${contextHref('./research-workbench.html', { desk: current.id, skill: skill.slug })}">${active ? "当前聚焦" : "看这条机会"}</a>
          ${skill.download ? `<a class="github-link" href="${assetHref(skill.download)}" download>${skill.downloadLabel || "下载 zip"}</a>` : `<span class="github-link disabled">待制作</span>`}
        </div>
      </article>
    `;
  }).join("");
}

renderWorkbenchCards();
renderWorkbenchDetail();
