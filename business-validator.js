const VALIDATOR_DATA = {
  updatedAt: "2026-07-17",
  evidenceTypes: [
    {
      id: "verified_fact",
      label: "已验证事实",
      summary: "真实截图、真实订单、真实输出、已发生的内部记录。",
      rule: "只能写已经发生的事实。"
    },
    {
      id: "public_data",
      label: "公开数据",
      summary: "公开页面、文档、接口或资料。",
      rule: "必须附来源和日期。"
    },
    {
      id: "user_input",
      label: "用户提供",
      summary: "你本人明确给出的方向、资源和边界。",
      rule: "不可替换成模型猜测。"
    },
    {
      id: "model_inference",
      label: "模型推测",
      summary: "用于规划，但不能冒充事实。",
      rule: "必须和事实分开展示。"
    }
  ],
  engines: [
    {
      name: "生成器",
      output: "商业方案草稿、产品结构、关键假设",
      rule: "负责提出方案，不负责给自己打分。"
    },
    {
      name: "评审器",
      output: "证据检查、五维评分、最大风险、缺失信息",
      rule: "专门负责反驳、挑错和补证据。"
    },
    {
      name: "计算器",
      output: "定价、毛利、回本单量、现金流压力",
      rule: "只做确定性计算，不写空泛判断。"
    }
  ],
  schemaSnippet: {
    project: {
      id: "",
      title: "",
      lane_type: "",
      target_customer: [],
      offer_stack: {},
      channels: []
    },
    assumptions: [],
    evidence: [],
    dimensions: [
      {
        name: "真实需求",
        score: 68,
        confidence: "medium",
        evidence: [],
        assumptions: [],
        missing_info: [],
        next_test: []
      }
    ],
    financial_model: {},
    seven_day_plan: [],
    overall_decision: "小规模验证"
  },
  directions: [
    {
      id: "redskill",
      title: "小红书 RedSkill",
      laneType: "内容获客 + 数字产品",
      role: "主引流与中低客单主线",
      priorityTag: "先推",
      overallScore: 72,
      confidence: "medium",
      summary: "离当前可执行闭环最近，现有 Skill、发布日历、承接话术和复盘模板都已经具备。",
      worthIt: "值得做，而且适合成为最近 14 天的主推线。",
      biggestRisk: "如果只卖低价教程和资料，利润会被时间成本吃掉。",
      firstStepTomorrow: "只选一个最强 Skill 做入口，不再并行发多个主题。",
      currentEvidence: [
        "已有发布日历、私信承接话术、线索表和复盘看板",
        "GitHub 仓库定位已预留为 xiaohongshuredskill",
        "内容和产品路径已经被拆成免费包、轻付费、合集和定制"
      ],
      bestUse: "最适合作为稳定引流、验证需求和中低客单转化的主线。",
      financial: {
        firstPaidOffer: "39.9-69.8 使用指南/调试",
        upgradeOffer: "99-199 合集/答疑/轻服务",
        setupCost: 1000,
        contributionHint: "低价单验证付费意愿，利润主要依赖合集和升级服务。"
      },
      dimensions: [
        {
          name: "真实需求",
          score: 71,
          confidence: "medium",
          formula: "重复问题 30% + 证据质量 25% + 付费动机 25% + 7天可验证性 20%",
          evidence: [
            {
              type: "verified_fact",
              statement: "内容人味化、图片转 PPT、视觉卡片等 Skill 已被放入第一梯队。",
              source: "docs/skill-growth-priority-board.md"
            },
            {
              type: "verified_fact",
              statement: "资料包引流笔记、小红书评论痛点聚类等方向已进入技能体系。",
              source: "docs/skill-batch-plan-2026-07-06.md"
            }
          ],
          assumptions: [
            "用户愿意先领取再决定是否付费。",
            "最强需求来自具体场景，不是泛兴趣。"
          ],
          missingInfo: [
            "缺少真实曝光、领取、付费数据。",
            "缺少主题之间的强弱排序结果。"
          ],
          nextTests: [
            "只用一个 Skill 发 3 条不同形式内容。",
            "记录领取用户最常见场景。"
          ]
        },
        {
          name: "产品与利润",
          score: 66,
          confidence: "medium",
          formula: "第一单清晰度 25% + 升级空间 25% + 毛利可估度 25% + 回本模型 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "服务阶梯已分为免费包、调试教程、合集和私有化部署。",
              source: "docs/skill-service-offers.md"
            }
          ],
          assumptions: [
            "低价产品的作用是筛选用户，不是承担全部利润。",
            "后续利润需要靠合集和轻服务补足。"
          ],
          missingInfo: [
            "没有单个 Skill 的完整毛利模型。"
          ],
          nextTests: [
            "给一个 Skill 建立完整成本模型。"
          ]
        },
        {
          name: "获客效率",
          score: 79,
          confidence: "medium",
          formula: "渠道明确度 25% + 内容与产品匹配度 25% + 素材资产 25% + CAC 可控度 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "发布日历、评论关键词和私信话术已经完整规划 14 天。",
              source: "docs/skill-launch-calendar-14days.md"
            },
            {
              type: "verified_fact",
              statement: "系统已把小红书定义为破圈和私信入口。",
              source: "docs/skill-growth-priority-board.md"
            }
          ],
          assumptions: [
            "痛点、对比和演示内容会比泛方法更有效。"
          ],
          missingInfo: [
            "没有真实 A/B 数据。"
          ],
          nextTests: [
            "只测一个关键词入口，记录收藏、私信和领取。"
          ]
        },
        {
          name: "交付能力",
          score: 77,
          confidence: "high",
          formula: "交付清晰度 25% + 工具模板 25% + 时间返工可控度 25% + 外部依赖 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "已有 Skill 包、发布素材、承接表和复盘模板。",
              source: "docs/skill-launch-kits-index.md"
            }
          ],
          assumptions: [
            "首批交付以精简 Skill、使用指南和 FAQ 为主。"
          ],
          missingInfo: [
            "缺少用户安装失败点和客服耗时记录。"
          ],
          nextTests: [
            "记录 5 个真实使用问题。"
          ]
        },
        {
          name: "现金流与风险",
          score: 62,
          confidence: "medium",
          formula: "前期现金压力 20% + 平台依赖 20% + 政策风险 20% + 售后风险 20% + 信任脆弱度 20%",
          evidence: [
            {
              type: "verified_fact",
              statement: "前期现金成本低，当前主要是内容和答疑时间成本。",
              source: "docs/skill-service-offers.md"
            },
            {
              type: "verified_fact",
              statement: "当前尚无真实曝光、下载、线索和付费累计数据。",
              source: "docs/skill-performance-dashboard.md"
            }
          ],
          assumptions: [
            "平台波动可通过多内容形态分散。"
          ],
          missingInfo: [
            "缺少退款率和真实 CAC。"
          ],
          nextTests: [
            "开始每日回填曝光、咨询、付费和耗时。"
          ]
        }
      ],
      sevenDayPlan: [
        "只选一个主推 Skill，不再并行测试多个主题。",
        "补评论关键词和私信第一句。",
        "发一条痛点内容。",
        "发一条前后对比内容。",
        "发一条现场演示内容。",
        "记录领取用户的使用问题，补 FAQ。",
        "第 7 天重新评分。"
      ]
    },
    {
      id: "overseas-ordering",
      title: "海外接单",
      laneType: "高客单服务",
      role: "主收入候选",
      priorityTag: "重点做",
      overallScore: 69,
      confidence: "medium",
      summary: "客单价上限高，但更依赖信任、案例和场景诊断，适合先卖轻诊断，再升级到流程搭建和拓客系统。",
      worthIt: "值得做，但不建议一上来卖重服务。",
      biggestRisk: "高客单服务需要信任和案例，泛内容很难直接成交。",
      firstStepTomorrow: "确定一个轻诊断入口，并用案例型内容测试真实场景回复。",
      currentEvidence: [
        "GTM、LinkedIn 和社交销售相关 Skill 在当前优先级中靠前",
        "海外研究工作台已具备调研 -> 内容 -> 获客分支",
        "私域承接话术已指向外贸服务商、SaaS 创始人和顾问"
      ],
      bestUse: "最适合作为高客单收入线，但需要诊断、报价前表单和案例沉淀。",
      financial: {
        firstPaidOffer: "299 轻诊断",
        upgradeOffer: "1499 流程搭建/拓客系统",
        setupCost: 1500,
        contributionHint: "如果只卖低价诊断，回本慢；如果升级到标准服务，回本速度明显改善。"
      },
      dimensions: [
        {
          name: "真实需求",
          score: 76,
          confidence: "medium",
          formula: "重复问题 30% + 证据质量 25% + 付费动机 25% + 7天可验证性 20%",
          evidence: [
            {
              type: "verified_fact",
              statement: "海外相关获客 Skill 在当前增长优先级中排名靠前。",
              source: "docs/skill-growth-priority-board.md"
            },
            {
              type: "verified_fact",
              statement: "研究工作台已具备海外调研到内容/获客的分支结构。",
              source: "site/research-workbench.js"
            }
          ],
          assumptions: [
            "用户更愿意为场景诊断和系统搭建付费，而不是只买模板。"
          ],
          missingInfo: [
            "没有真实付费转化记录。"
          ],
          nextTests: [
            "追问 5 个真实海外接单场景。"
          ]
        },
        {
          name: "产品与利润",
          score: 74,
          confidence: "medium",
          formula: "第一单清晰度 25% + 升级空间 25% + 毛利可估度 25% + 回本模型 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "现有 Skill 已覆盖 GTM、LinkedIn、Lead Magnet 和私有化承接。",
              source: "site/app.js"
            }
          ],
          assumptions: [
            "轻诊断适合作为第一单，高客单服务适合作为升级。"
          ],
          missingInfo: [
            "没有真实交付耗时。"
          ],
          nextTests: [
            "写一版轻诊断定价和边界说明。"
          ]
        },
        {
          name: "获客效率",
          score: 63,
          confidence: "medium",
          formula: "渠道明确度 25% + 内容与产品匹配度 25% + 素材资产 25% + CAC 可控度 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "已有 LinkedIn/公众号/小红书工具分享的承接结构。",
              source: "docs/skill-launch-calendar-14days.md"
            }
          ],
          assumptions: [
            "案例型内容会比泛方法更容易换来高意向场景。"
          ],
          missingInfo: [
            "没有真实咨询率和报价率。"
          ],
          nextTests: [
            "对比案例内容和方法内容的咨询质量。"
          ]
        },
        {
          name: "交付能力",
          score: 72,
          confidence: "medium",
          formula: "交付清晰度 25% + 工具模板 25% + 时间返工可控度 25% + 外部依赖 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "现有技能库已能覆盖调研、内容、拓客、承接和复盘。",
              source: "docs/company-employee-skills.json"
            }
          ],
          assumptions: [
            "首批交付先做轻诊断，不碰长周期项目。"
          ],
          missingInfo: [
            "没有标准化诊断交付清单。"
          ],
          nextTests: [
            "写一版轻诊断交付清单。"
          ]
        },
        {
          name: "现金流与风险",
          score: 58,
          confidence: "low",
          formula: "前期现金压力 20% + 平台依赖 20% + 政策风险 20% + 售后风险 20% + 信任脆弱度 20%",
          evidence: [
            {
              type: "verified_fact",
              statement: "前期不需要库存，但更依赖案例和回款周期。",
              source: "docs/skill-service-offers.md"
            }
          ],
          assumptions: [
            "成交周期较长，信任不足会拉长回款。"
          ],
          missingInfo: [
            "没有回款周期和返工数据。"
          ],
          nextTests: [
            "记录从首次咨询到愿意报价的天数。"
          ]
        }
      ],
      sevenDayPlan: [
        "写一版海外接单诊断入口。",
        "发一条案例型内容。",
        "整理 5 个真实场景。",
        "做报价前诊断表。",
        "记录一次完整诊断的耗时。",
        "补 FAQ 和风险边界。",
        "第 7 天重新评分。"
      ]
    },
    {
      id: "xianyu-virtual",
      title: "闲鱼虚拟资料",
      laneType: "低价渠道试验",
      role: "现金流和渠道测试",
      priorityTag: "保留试验",
      overallScore: 66,
      confidence: "medium",
      summary: "有真实实验、真实订单和证据墙，但平台依赖和低客单问题更明显，适合作为试验和现金流补充。",
      worthIt: "值得留着跑，但控制投入深度，不要当唯一品牌主线。",
      biggestRisk: "平台依赖和低客单会放大信任、退款和规则风险。",
      firstStepTomorrow: "盘点已经可卖的虚拟资料 SKU，并剔除高风险或不稳定项。",
      currentEvidence: [
        "30 天内容队列记录了闲鱼真实实验和不同切面",
        "当天素材明确写到 AI 已把商品自动发布到闲鱼成功",
        "证据墙已包含商品池、聊天、交易金额和订单成功截图"
      ],
      bestUse: "最适合作为现金流和信任内容试验线，而不是品牌主线。",
      financial: {
        firstPaidOffer: "29.9 低价资料包",
        upgradeOffer: "59.9 组合包/SOP",
        setupCost: 600,
        contributionHint: "单个低价 SKU 需要走量，不能承担整个品牌利润。"
      },
      dimensions: [
        {
          name: "真实需求",
          score: 69,
          confidence: "medium",
          formula: "重复问题 30% + 证据质量 25% + 付费动机 25% + 7天可验证性 20%",
          evidence: [
            {
              type: "verified_fact",
              statement: "30 天队列记录“AI 真的帮我在闲鱼跑出单了”。",
              source: "/Users/macmini/Documents/对标复刻/outputs/xhs-30-day-publishing-queue.md"
            },
            {
              type: "verified_fact",
              statement: "当天内容素材明确写到 AI 已经把商品自动发布到闲鱼成功。",
              source: "/Users/macmini/Documents/对标复刻/outputs/xhs-today-material-2026-07-05.md"
            }
          ],
          assumptions: [
            "低价资料有稳定但更分散的需求。"
          ],
          missingInfo: [
            "缺少按 SKU 的销量和咨询分类。"
          ],
          nextTests: [
            "盘点 3 个最适合继续卖的 SKU。"
          ]
        },
        {
          name: "产品与利润",
          score: 56,
          confidence: "low",
          formula: "第一单清晰度 25% + 升级空间 25% + 毛利可估度 25% + 回本模型 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "资料包和封面/发布素材已能标准化产出。",
              source: "/Users/macmini/Documents/对标复刻/outputs/xhs-day-18-package-2026-07-22/README.md"
            }
          ],
          assumptions: [
            "组合包可以提升客单价，但单个低价包利润有限。"
          ],
          missingInfo: [
            "没有 SKU 级毛利和退款数据。"
          ],
          nextTests: [
            "对 29.9 和 59.9 两档价格做回本比较。"
          ]
        },
        {
          name: "获客效率",
          score: 72,
          confidence: "medium",
          formula: "渠道明确度 25% + 内容与产品匹配度 25% + 素材资产 25% + CAC 可控度 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "30 天队列已经把一个真实实验拆成连续内容切面。",
              source: "/Users/macmini/Documents/对标复刻/outputs/xhs-30-day-publishing-queue.md"
            },
            {
              type: "verified_fact",
              statement: "现有规则已把闲鱼定义为低价领取入口。",
              source: "docs/skill-growth-priority-board.md"
            }
          ],
          assumptions: [
            "证据型内容比纯卖货内容更容易获得信任。"
          ],
          missingInfo: [
            "没有按内容类型拆分的咨询与成交数据。"
          ],
          nextTests: [
            "比较“结果型内容”和“教程型内容”的咨询差异。"
          ]
        },
        {
          name: "交付能力",
          score: 84,
          confidence: "high",
          formula: "交付清晰度 25% + 工具模板 25% + 时间返工可控度 25% + 外部依赖 25%",
          evidence: [
            {
              type: "verified_fact",
              statement: "资料包、发布文案、配图说明已经能够批量产出。",
              source: "/Users/macmini/Documents/对标复刻/outputs/xhs-day-18-package-2026-07-22/README.md"
            }
          ],
          assumptions: [
            "更多交付动作可以压缩为标准化虚拟包。"
          ],
          missingInfo: [
            "缺少售后边界和高风险 SKU 清单。"
          ],
          nextTests: [
            "做 SKU 白名单和售后边界。"
          ]
        },
        {
          name: "现金流与风险",
          score: 49,
          confidence: "medium",
          formula: "前期现金压力 20% + 平台依赖 20% + 政策风险 20% + 售后风险 20% + 信任脆弱度 20%",
          evidence: [
            {
              type: "verified_fact",
              statement: "平台动作涉及闲鱼账号和自动化边界，风险不能忽略。",
              source: "AGENTS.md"
            },
            {
              type: "verified_fact",
              statement: "内部内容反复强调当前仍在试验期，并非完全跑通。",
              source: "/Users/macmini/Documents/对标复刻/outputs/xhs-today-material-2026-07-05.md"
            }
          ],
          assumptions: [
            "低客单会放大平台波动影响。"
          ],
          missingInfo: [
            "没有结构化的退款和风险事件记录。"
          ],
          nextTests: [
            "单独记录平台风险事件和售后负担。"
          ]
        }
      ],
      sevenDayPlan: [
        "盘点 3 个能继续卖的 SKU。",
        "整理订单、聊天和商品池证据。",
        "定义 29.9 和 59.9 两档结构。",
        "列平台风险和自动化边界。",
        "发一条结果型内容并记录咨询。",
        "统计咨询和售后负担。",
        "第 7 天重新评分。"
      ]
    }
  ]
};

const els = {
  trackCount: document.getElementById("trackCount"),
  dimensionCount: document.getElementById("dimensionCount"),
  engineCount: document.getElementById("engineCount"),
  summaryGrid: document.getElementById("summaryGrid"),
  directionList: document.getElementById("directionList"),
  directionDetail: document.getElementById("directionDetail"),
  dimensionGrid: document.getElementById("dimensionGrid"),
  legendGrid: document.getElementById("legendGrid"),
  comparisonTable: document.getElementById("comparisonTable"),
  pipelineGrid: document.getElementById("pipelineGrid"),
  schemaBox: document.getElementById("schemaBox"),
  dayPlanGrid: document.getElementById("dayPlanGrid")
};

const state = {
  directionId: new URLSearchParams(window.location.search).get("track") || VALIDATOR_DATA.directions[0].id
};

function selectedDirection() {
  return VALIDATOR_DATA.directions.find((item) => item.id === state.directionId) || VALIDATOR_DATA.directions[0];
}

function renderHeroMetrics() {
  els.trackCount.textContent = String(VALIDATOR_DATA.directions.length);
  els.dimensionCount.textContent = "5";
  els.engineCount.textContent = String(VALIDATOR_DATA.engines.length);
}

function renderSummary() {
  const direction = selectedDirection();
  const avg = Math.round(direction.dimensions.reduce((sum, item) => sum + item.score, 0) / direction.dimensions.length);
  els.summaryGrid.innerHTML = `
    <article class="validator-card lead">
      <p class="validator-kicker">当前方向</p>
      <h2>${direction.title}</h2>
      <p class="hero-subtitle" style="font-size:16px;max-width:none">${direction.summary}</p>
      <div style="margin-top:16px">
        <span class="direction-pill">${direction.laneType}</span>
        <span class="direction-pill">${direction.role}</span>
        <span class="direction-pill">置信度 ${direction.confidence}</span>
      </div>
    </article>
    <article class="validator-card">
      <p class="validator-kicker">值不值得做</p>
      <div class="validator-score">${avg}</div>
      <p class="small-muted">${direction.worthIt}</p>
    </article>
    <article class="validator-card">
      <p class="validator-kicker">最大风险</p>
      <div style="font-size:18px;font-weight:900;line-height:1.4">${direction.biggestRisk}</div>
    </article>
    <article class="validator-card">
      <p class="validator-kicker">明天第一步</p>
      <div style="font-size:18px;font-weight:900;line-height:1.4">${direction.firstStepTomorrow}</div>
    </article>
  `;
}

function renderDirectionList() {
  const direction = selectedDirection();
  els.directionList.innerHTML = VALIDATOR_DATA.directions.map((item) => `
    <button class="direction-button ${item.id === direction.id ? "active" : ""}" data-direction="${item.id}" type="button">
      <strong>${item.title}</strong>
      <small>${item.laneType} · ${item.role}</small>
      <small>总分 ${item.overallScore} · 置信度 ${item.confidence} · ${item.priorityTag}</small>
    </button>
  `).join("");

  els.directionDetail.innerHTML = `
    <p class="validator-kicker">Direction Detail</p>
    <h3>${direction.title}</h3>
    <p class="small-muted">${direction.summary}</p>
    <div style="margin:14px 0">
      <span class="direction-pill">${direction.priorityTag}</span>
      <span class="direction-pill">总分 ${direction.overallScore}</span>
      <span class="direction-pill">置信度 ${direction.confidence}</span>
    </div>
    <div class="validator-bullets">
      <div><strong>当前角色</strong><br />${direction.role}</div>
      <div><strong>最适合的用途</strong><br />${direction.bestUse}</div>
      <div><strong>第一单</strong><br />${direction.financial.firstPaidOffer}</div>
      <div><strong>升级产品</strong><br />${direction.financial.upgradeOffer}</div>
      <div><strong>准备成本</strong><br />约 ${direction.financial.setupCost} 元（内部假设）</div>
      <div><strong>当前证据</strong><br />${direction.currentEvidence.map((item) => `- ${item}`).join("<br />")}</div>
    </div>
  `;

  els.directionList.querySelectorAll("[data-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      state.directionId = button.dataset.direction;
      const url = new URL(window.location.href);
      url.searchParams.set("track", state.directionId);
      window.history.replaceState({}, "", url);
      renderAll();
    });
  });
}

function renderDimensions() {
  const direction = selectedDirection();
  els.dimensionGrid.innerHTML = direction.dimensions.map((dimension) => `
    <article class="dimension-card">
      <div class="dimension-meta">
        <div>
          <div class="validator-kicker">${dimension.name}</div>
          <div class="small-muted">${dimension.formula}</div>
        </div>
        <div class="dimension-score">${dimension.score}</div>
      </div>
      <div class="small-muted">置信度：${dimension.confidence}</div>
      <div class="dimension-block">
        <strong>证据</strong>
        ${dimension.evidence.map((item) => `<div><code>${item.type}</code> ${item.statement}<br /><span class="small-muted">${item.source}</span></div>`).join("")}
      </div>
      <div class="dimension-block">
        <strong>假设</strong>
        ${dimension.assumptions.map((item) => `<div>- ${item}</div>`).join("")}
      </div>
      <div class="dimension-block">
        <strong>缺失信息</strong>
        ${dimension.missingInfo.map((item) => `<div>- ${item}</div>`).join("")}
      </div>
      <div class="dimension-block">
        <strong>7天验证动作</strong>
        ${dimension.nextTests.map((item) => `<div>- ${item}</div>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderLegend() {
  els.legendGrid.innerHTML = VALIDATOR_DATA.evidenceTypes.map((item) => `
    <article class="legend-card">
      <p class="validator-kicker">${item.label}</p>
      <strong>${item.id}</strong>
      <p class="small-muted">${item.summary}</p>
      <p class="small-muted">${item.rule}</p>
    </article>
  `).join("");
}

function renderComparison() {
  const headers = ["方向", "总分", "真实需求", "产品与利润", "获客效率", "交付能力", "现金流与风险", "当前建议"];
  const rows = VALIDATOR_DATA.directions.map((direction) => {
    const scoreByName = Object.fromEntries(direction.dimensions.map((item) => [item.name, item.score]));
    return `
      <tr>
        <td><strong>${direction.title}</strong><br /><span class="small-muted">${direction.laneType}</span></td>
        <td>${direction.overallScore}</td>
        <td>${scoreByName["真实需求"]}</td>
        <td>${scoreByName["产品与利润"]}</td>
        <td>${scoreByName["获客效率"]}</td>
        <td>${scoreByName["交付能力"]}</td>
        <td>${scoreByName["现金流与风险"]}</td>
        <td>${direction.priorityTag}：${direction.worthIt}</td>
      </tr>
    `;
  }).join("");

  els.comparisonTable.innerHTML = `
    <thead>
      <tr>${headers.map((item) => `<th>${item}</th>`).join("")}</tr>
    </thead>
    <tbody>${rows}</tbody>
  `;
}

function renderPipeline() {
  els.pipelineGrid.innerHTML = VALIDATOR_DATA.engines.map((engine) => `
    <article class="validator-card">
      <p class="validator-kicker">${engine.name}</p>
      <h3>${engine.output}</h3>
      <p class="small-muted">${engine.rule}</p>
    </article>
  `).join("");
}

function renderSchema() {
  els.schemaBox.textContent = JSON.stringify(VALIDATOR_DATA.schemaSnippet, null, 2);
}

function renderDayPlan() {
  const direction = selectedDirection();
  els.dayPlanGrid.innerHTML = direction.sevenDayPlan.map((item, index) => `
    <article class="validator-card">
      <p class="validator-kicker">Day ${index + 1}</p>
      <h3>${item}</h3>
    </article>
  `).join("");
}

function renderAll() {
  renderSummary();
  renderDirectionList();
  renderDimensions();
  renderComparison();
  renderDayPlan();
}

function init() {
  renderHeroMetrics();
  renderLegend();
  renderPipeline();
  renderSchema();
  renderAll();
}

init();
