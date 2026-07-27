const HQ_ROLES = [
  { id: "all", label: "全局", owner: "Root", note: "先看全公司", color: "#d7ff58", initials: "HQ" },
  { id: "ceo", label: "CEO", owner: "总调度", note: "排优先级、定方向", color: "#ffe08a", initials: "CEO" },
  { id: "research", label: "Research", owner: "找证据", note: "调研、验证、找证据", color: "#87c7d6", initials: "RS" },
  { id: "content", label: "Content", owner: "写转化", note: "内容、offer、话术", color: "#ffb35b", initials: "CT" },
  { id: "ops", label: "Ops", owner: "接流程", note: "交付、自动化、落地", color: "#78d8a6", initials: "OP" },
  { id: "review", label: "Review", owner: "压风险", note: "验收、风控、上线前检查", color: "#f3a6a2", initials: "RV" },
];

const HQ_STATUSES = [
  { id: "inbox", label: "Inbox", tone: "neutral" },
  { id: "todo", label: "Todo", tone: "neutral" },
  { id: "running", label: "Running", tone: "positive" },
  { id: "review", label: "Review", tone: "warning" },
  { id: "blocked", label: "Blocked", tone: "danger" },
  { id: "done", label: "Done", tone: "muted" },
];

const HQ_AUTOMATIONS = [
  {
    id: "auto-morning-radar",
    name: "08:30 市场雷达回收",
    owner: "Research",
    status: "ACTIVE",
    nextRun: "今天 18:30",
    summary: "自动抓取竞品、新需求和评论样本，把高信号条目扔回 Inbox。",
    output: "新机会、竞品证据、评论切片",
  },
  {
    id: "auto-block-watch",
    name: "阻塞任务 2h 催办",
    owner: "CEO",
    status: "ACTIVE",
    nextRun: "每 2 小时",
    summary: "凡是 Blocked 超过两小时的卡片，自动提醒负责人并拉 CEO 进场。",
    output: "阻塞提醒、优先级重排建议",
  },
  {
    id: "auto-follow-up",
    name: "私信线索 20:00 跟进",
    owner: "Content",
    status: "PAUSED",
    nextRun: "手动恢复",
    summary: "把今天领包、留言和高意图咨询统一转成二次跟进话术。",
    output: "跟进清单、二次话术",
  },
  {
    id: "auto-night-review",
    name: "23:00 日终复盘包",
    owner: "Review",
    status: "ACTIVE",
    nextRun: "今天 23:00",
    summary: "汇总完成卡、失败卡、自动化输出和明日风险，生成 CEO 晚报。",
    output: "日报、风险清单、明日待办",
  },
];

const HQ_TASKS = [
  {
    id: "task-offer-angle",
    title: "收窄一人公司主 offer 的切入口",
    summary: "从“万能 AI 团队”改成“能带来线索和交付的 Codex 内嵌生产系统”，避免信息太散。",
    status: "review",
    role: "ceo",
    owner: "CEO / Root Agent",
    priority: "P0",
    source: "task://offer-positioning",
    nextStep: "确认标题和一句话承诺，再发给 Content 做对外话术。",
    risk: "如果口径太宽，后续所有页面都在讲不同的产品。",
    acceptance: "一句主承诺 + 两句补充说明 + 三个关键使用场景统一。",
    deps: ["task-proof-chain", "task-hq-wire"],
    tags: ["定位", "一人公司", "首页口径"],
    lastUpdate: "6 分钟前",
  },
  {
    id: "task-proof-chain",
    title: "补齐 Codex 内嵌 HQ 的证据链",
    summary: "把 thread、automation、task board、review 抽成四段证据，给 CEO 判断是否能正式挂出来。",
    status: "todo",
    role: "research",
    owner: "Research / 证据官",
    priority: "P1",
    source: "task://proof-assembly",
    nextStep: "补两个和 Hermes 看板差异最大的能力点截图。",
    risk: "如果证据还是抽象概念，页面会显得像 PPT。",
    acceptance: "4 段证据卡，每段有原始能力、用户收益和落地限制。",
    deps: [],
    tags: ["证据", "对比", "能力边界"],
    lastUpdate: "12 分钟前",
  },
  {
    id: "task-lead-magnet",
    title: "设计免费线索入口 Skill 的领取链路",
    summary: "用一个免费包换来高意图线索，不让 HQ 只剩任务感而没有成交入口。",
    status: "inbox",
    role: "content",
    owner: "Content / 增长主编",
    priority: "P1",
    source: "task://lead-magnet",
    nextStep: "决定送什么最轻，但能让人立刻试出价值。",
    risk: "送太重，交付压力大；送太轻，收不到高意图线索。",
    acceptance: "免费入口、CTA、领取后下一步脚本明确。",
    deps: ["task-offer-angle"],
    tags: ["引流", "CTA", "私信承接"],
    lastUpdate: "刚进入",
  },
  {
    id: "task-wireframe",
    title: "把 HQ 线框转成真实页面结构",
    summary: "先用单屏驾驶舱替代长首页，信息架构必须先稳定，再做内容填充。",
    status: "running",
    role: "ops",
    owner: "Ops / 前端执行",
    priority: "P0",
    source: "task://hq-prototype",
    nextStep: "完成右侧抽屉动作和角色筛选联动。",
    risk: "如果还是长页面，会继续像展示站，不像作战中枢。",
    acceptance: "顶部总览、角色栏、看板、详情抽屉四块可用。",
    deps: [],
    tags: ["前端", "HQ", "任务中枢"],
    lastUpdate: "刚刚",
  },
  {
    id: "task-xhs-script",
    title: "重写小红书私信跟进脚本",
    summary: "把“下载 Skill”后的第二跳话术从介绍型改成诊断型，引导更自然。",
    status: "running",
    role: "content",
    owner: "Content / 私信转化",
    priority: "P1",
    source: "task://dm-follow-up",
    nextStep: "先拆三种用户阶段：围观、试用、已咨询。",
    risk: "如果脚本太像销售，用户会直接走掉。",
    acceptance: "三段话术 + 一个转入诊断的自然问题。",
    deps: ["task-lead-magnet"],
    tags: ["私信", "转化", "脚本"],
    lastUpdate: "9 分钟前",
  },
  {
    id: "task-comment-cluster",
    title: "清洗跨境卖家评论样本并抽高频痛点",
    summary: "从评论和咨询里筛出最适合变成免费入口的几个问题，反推内容题目和产品入口。",
    status: "running",
    role: "research",
    owner: "Research / 评论矿工",
    priority: "P1",
    source: "task://comment-cluster",
    nextStep: "把“不会做 Listing”“没人回询盘”“不知道先卖什么”聚成三类。",
    risk: "样本如果过散，会做不出清晰入口。",
    acceptance: "3 个主痛点类目 + 每类 5 条原话证据。",
    deps: [],
    tags: ["评论", "痛点", "跨境"],
    lastUpdate: "15 分钟前",
  },
  {
    id: "task-review-copy",
    title: "送审 HQ 首页口径和 CTA 组合",
    summary: "把标题、口号、CTA 和免费入口合成一版，交给 Review 检查是否过度承诺。",
    status: "review",
    role: "review",
    owner: "Review / 风险门",
    priority: "P0",
    source: "task://hq-copy-review",
    nextStep: "重点检查‘内嵌 Codex’是否被用户理解成改原生客户端。",
    risk: "承诺不准确会导致体验预期错位。",
    acceptance: "保留亮点，但不误导能力边界。",
    deps: ["task-offer-angle", "task-lead-magnet"],
    tags: ["审稿", "风控", "CTA"],
    lastUpdate: "18 分钟前",
  },
  {
    id: "task-auto-rules",
    title: "整理阻塞任务自动化升级规则",
    summary: "Blocked 超过 2 小时的卡什么时候推给 CEO，什么时候直接归档，什么时候要求补证据。",
    status: "review",
    role: "ops",
    owner: "Ops / 自动化编排",
    priority: "P2",
    source: "task://blocked-rules",
    nextStep: "补一个“重复失败 2 次”的升级动作。",
    risk: "规则太松会失控，太紧又会吵人。",
    acceptance: "3 条升级规则 + 2 条静默规则。",
    deps: [],
    tags: ["自动化", "blocked", "升级规则"],
    lastUpdate: "27 分钟前",
  },
  {
    id: "task-pricing",
    title: "定价页结构还没有统一口径",
    summary: "免费、合集、诊断、定制四层价格现在各页说法不一致。",
    status: "blocked",
    role: "ceo",
    owner: "CEO / 决策",
    priority: "P0",
    source: "task://pricing-structure",
    nextStep: "先定四层梯度，再让 Content 回填话术。",
    risk: "价格层级乱，会直接影响转化。",
    acceptance: "四层价格结构和每层交付边界明确。",
    deps: ["task-offer-angle"],
    tags: ["定价", "结构", "决策"],
    lastUpdate: "1 小时前",
  },
  {
    id: "task-cta-pack",
    title: "免费包下载页 CTA 还像资料页，不像任务入口",
    summary: "现有下载入口只会让人领包，不会继续被引到 Codex HQ 的后续动作。",
    status: "blocked",
    role: "content",
    owner: "Content / 路径设计",
    priority: "P1",
    source: "task://download-cta",
    nextStep: "下载完成后增加‘继续在 HQ 里看下一步’的动作。",
    risk: "只下载不继续，转化断在第一步。",
    acceptance: "下载后出现二跳动作卡和可复制下一步提示。",
    deps: ["task-wireframe"],
    tags: ["下载页", "CTA", "路径"],
    lastUpdate: "48 分钟前",
  },
  {
    id: "task-tag-schema",
    title: "线索分层标签 schema",
    summary: "把围观、试用、咨询、可成交四层标签统一下来，后续所有任务复用。",
    status: "done",
    role: "ops",
    owner: "Ops / 数据整理",
    priority: "P2",
    source: "task://lead-schema",
    nextStep: "明天把它接进私信记录页和晚报自动化。",
    risk: "暂无阻塞。",
    acceptance: "标签、定义、升级条件都已经写进模板。",
    deps: [],
    tags: ["schema", "线索", "统一"],
    lastUpdate: "今天 09:10",
  },
  {
    id: "task-demo-script",
    title: "Codex HQ 演示脚本 1.0",
    summary: "先把从新建任务到推进、阻塞、送审的演示顺序串起来。",
    status: "done",
    role: "review",
    owner: "Review / 演示验收",
    priority: "P2",
    source: "task://demo-script",
    nextStep: "补一个自动化触发的片段，形成完整 demo。",
    risk: "暂无阻塞。",
    acceptance: "一条 3 分钟 demo 路径已经写成脚本。",
    deps: [],
    tags: ["demo", "脚本", "验收"],
    lastUpdate: "今天 10:35",
  },
];

const HQ_EVENTS = [
  { id: "evt-1", tone: "positive", actor: "Ops", time: "刚刚", text: "开始把 HQ 页面替换成长首页式结构，进入 Running。" },
  { id: "evt-2", tone: "warning", actor: "CEO", time: "8 分钟前", text: "提醒定价层级还没统一，先别把 CTA 挂死。" },
  { id: "evt-3", tone: "neutral", actor: "Research", time: "16 分钟前", text: "评论样本已经聚出三类高频痛点，待 Content 接棒。" },
  { id: "evt-4", tone: "danger", actor: "Review", time: "29 分钟前", text: "发现 HQ 标题容易被理解成能改原生客户端，需收口表述。" },
  { id: "evt-5", tone: "positive", actor: "Ops", time: "今天 09:10", text: "线索分层标签 schema 已完成，可给自动化和私信页复用。" },
];

const ROLE_ACTION_MAP = {
  ceo: "Research",
  research: "Content",
  content: "Ops",
  ops: "Review",
  review: "CEO",
};

const STATUS_ORDER = HQ_STATUSES.map((status) => status.id);
const state = {
  role: "all",
  status: "all",
  search: "",
  selectedType: "task",
  selectedId: HQ_TASKS.find((task) => task.status !== "done")?.id || HQ_TASKS[0]?.id || null,
  tasks: structuredClone(HQ_TASKS),
  automations: structuredClone(HQ_AUTOMATIONS),
  events: structuredClone(HQ_EVENTS),
};

const els = {};

function getRole(roleId) {
  return HQ_ROLES.find((role) => role.id === roleId) || HQ_ROLES[0];
}

function getStatus(statusId) {
  return HQ_STATUSES.find((status) => status.id === statusId) || HQ_STATUSES[0];
}

function roleCount(roleId) {
  if (roleId === "all") {
    return state.tasks.length;
  }
  return state.tasks.filter((task) => task.role === roleId).length;
}

function getFilteredTasks() {
  const query = state.search.trim().toLowerCase();
  return state.tasks.filter((task) => {
    const matchRole = state.role === "all" || task.role === state.role;
    const matchStatus = state.status === "all" || task.status === state.status;
    const haystack = [task.title, task.summary, task.owner, task.source, task.nextStep, task.tags.join(" ")]
      .join(" ")
      .toLowerCase();
    const matchSearch = query.length === 0 || haystack.includes(query);
    return matchRole && matchStatus && matchSearch;
  });
}

function getVisibleStatuses() {
  return state.status === "all"
    ? HQ_STATUSES
    : HQ_STATUSES.filter((status) => status.id === state.status);
}

function renderOverview() {
  const running = state.tasks.filter((task) => task.status === "running").length;
  const review = state.tasks.filter((task) => task.status === "review").length;
  const blocked = state.tasks.filter((task) => task.status === "blocked").length;
  const taskCount = state.tasks.filter((task) => task.status !== "done").length;
  const currentRole = getRole(state.role);

  const cards = [
    { id: "all", label: "今日任务", value: taskCount, note: "正在推进的卡片", clickable: true },
    { id: "running", label: "运行中", value: running, note: "已有负责人在跑", clickable: true },
    { id: "review", label: "待审核", value: review, note: "下一步是验收", clickable: true },
    { id: "blocked", label: "阻塞", value: blocked, note: "需要决策或补证据", clickable: true },
    { id: "automation", label: "自动化", value: state.automations.length, note: "持续接球的流程", clickable: false },
    { id: "profile", label: "当前 Profile", value: currentRole.label, note: currentRole.note, clickable: false },
  ];

  els.overview.innerHTML = cards
    .map((card) => {
      const active =
        card.clickable &&
        ((card.id === "all" && state.status === "all") || (card.id !== "all" && state.status === card.id));
      const classes = ["hq-metric-card"];
      if (card.clickable) classes.push("hq-metric-card-button");
      if (active) classes.push("is-active");
      return `
        <article class="${classes.join(" ")}" ${card.clickable ? `data-status-card="${card.id}"` : ""}>
          <span class="card-kicker">${card.label}</span>
          <strong class="hq-metric-value">${card.value}</strong>
          <p class="small-muted">${card.note}</p>
        </article>
      `;
    })
    .join("");
}

function renderRoles() {
  els.roleRail.innerHTML = HQ_ROLES.map((role) => {
    const active = state.role === role.id;
    return `
      <button class="hq-role-button ${active ? "is-active" : ""}" type="button" data-role="${role.id}">
        <span class="hq-role-avatar" style="--role-color:${role.color}">${role.initials}</span>
        <span class="hq-role-copy">
          <strong>${role.label}</strong>
          <span>${role.owner}</span>
          <span class="small-muted">${role.note} · ${roleCount(role.id)} 张卡</span>
        </span>
      </button>
    `;
  }).join("");
}

function renderAutomations() {
  els.automationList.innerHTML = state.automations
    .map((automation) => {
      const active = state.selectedType === "automation" && state.selectedId === automation.id;
      return `
        <button class="hq-automation-card ${active ? "is-active" : ""}" type="button" data-automation="${automation.id}">
          <span class="card-kicker">${automation.status}</span>
          <strong>${automation.name}</strong>
          <p class="small-muted">${automation.summary}</p>
          <div class="card-meta">
            <span class="pill">${automation.owner}</span>
            <span class="pill">下次 ${automation.nextRun}</span>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderFocusNote() {
  const filters = [];
  if (state.role !== "all") filters.push(`角色：${getRole(state.role).label}`);
  if (state.status !== "all") filters.push(`状态：${getStatus(state.status).label}`);
  if (state.search.trim()) filters.push(`搜索：${state.search.trim()}`);

  const selectedTask = state.tasks.find((task) => task.id === state.selectedId);
  const selectedAutomation = state.automations.find((automation) => automation.id === state.selectedId);
  const selectedLabel =
    state.selectedType === "automation" && selectedAutomation
      ? `当前展开的是自动化「${selectedAutomation.name}」`
      : selectedTask
        ? `当前展开的是任务「${selectedTask.title}」`
        : "先从左侧角色或中间卡片切进一个具体任务。";

  els.focusNote.innerHTML = `
    <strong class="hq-focus-title">${filters.length ? filters.join(" / ") : "全局视图"}</strong>
    <p class="small-muted">${selectedLabel}</p>
  `;
}

function buildCard(task) {
  const role = getRole(task.role);
  return `
    <button class="hq-task-card ${state.selectedType === "task" && state.selectedId === task.id ? "is-active" : ""}" type="button" data-task="${task.id}">
      <div class="card-top">
        <span class="badge">${task.priority}</span>
        <span class="hq-card-role" style="--role-color:${role.color}">
          <span class="hq-card-dot"></span>${role.label}
        </span>
      </div>
      <div class="card-title">
        <strong>${task.title}</strong>
      </div>
      <p class="signal">${task.summary}</p>
      <div class="hq-card-block">
        <span class="card-kicker">下一步</span>
        <p class="small-muted">${task.nextStep}</p>
      </div>
      <div class="card-meta">
        <span class="pill">${task.owner}</span>
        <span class="pill">${task.source}</span>
        <span class="pill">${task.lastUpdate}</span>
      </div>
    </button>
  `;
}

function renderFilterPills(filteredTasks) {
  const pills = [];
  pills.push(`<span class="pill">${filteredTasks.length} 张卡符合当前筛选</span>`);
  if (state.role !== "all") pills.push(`<span class="pill">角色 ${getRole(state.role).label}</span>`);
  if (state.status !== "all") pills.push(`<span class="pill">状态 ${getStatus(state.status).label}</span>`);
  if (state.search.trim()) pills.push(`<span class="pill">搜索 ${state.search.trim()}</span>`);
  els.filterPills.innerHTML = pills.join("");
}

function renderBoard() {
  const filteredTasks = getFilteredTasks();
  const visibleStatuses = getVisibleStatuses();
  renderFilterPills(filteredTasks);

  els.boardSummary.textContent =
    filteredTasks.length > 0
      ? `当前有 ${filteredTasks.length} 张卡在视图里。点状态顶部数字可切列，点角色可改负责人视角。`
      : "当前筛选条件下没有任务，试试重置视图或切换角色。";

  els.board.innerHTML = visibleStatuses
    .map((status) => {
      const tasks = filteredTasks
        .filter((task) => task.status === status.id)
        .sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));

      return `
        <section class="hq-column tone-${status.tone}">
          <header class="hq-column-head">
            <div>
              <span class="card-kicker">${status.label}</span>
              <strong>${tasks.length}</strong>
            </div>
            <span class="small-muted">${columnHint(status.id)}</span>
          </header>
          <div class="hq-column-body">
            ${tasks.length ? tasks.map(buildCard).join("") : `<div class="hq-empty-card">这一列现在是空的。</div>`}
          </div>
        </section>
      `;
    })
    .join("");
}

function columnHint(statusId) {
  switch (statusId) {
    case "inbox":
      return "还没拆动作";
    case "todo":
      return "等接球";
    case "running":
      return "有人在跑";
    case "review":
      return "等验收";
    case "blocked":
      return "先排障";
    case "done":
      return "可复用";
    default:
      return "";
  }
}

function renderEvents() {
  els.eventFeed.innerHTML = state.events
    .slice(0, 8)
    .map(
      (event) => `
        <article class="hq-event-item tone-${event.tone}">
          <div class="hq-event-meta">
            <strong>${event.actor}</strong>
            <span class="small-muted">${event.time}</span>
          </div>
          <p>${event.text}</p>
        </article>
      `,
    )
    .join("");
}

function taskActions(task) {
  const actions = [];
  if (task.status !== "running") {
    actions.push({ key: "running", label: "推进到 Running" });
  }
  if (task.status !== "review") {
    actions.push({ key: "review", label: "送到 Review" });
  }
  if (task.status !== "blocked") {
    actions.push({ key: "blocked", label: "标记阻塞" });
  }
  if (task.status !== "done") {
    actions.push({ key: "done", label: "完成任务" });
  }
  actions.push({ key: "handoff", label: "交接给下一位" });
  actions.push({ key: "automation", label: "挂上自动化" });
  return actions;
}

function renderTaskDrawer(task) {
  const role = getRole(task.role);
  const actions = taskActions(task);
  els.drawerBody.innerHTML = `
    <div class="hq-drawer-head">
      <p class="eyebrow">Task Detail</p>
      <h2>${task.title}</h2>
      <p class="small-muted">${task.summary}</p>
    </div>

    <div class="dialog-grid hq-drawer-grid">
      <div class="detail-box">
        <span>负责人</span>
        <strong>${task.owner}</strong>
        <p class="small-muted">${role.label} · ${role.note}</p>
      </div>
      <div class="detail-box">
        <span>来源</span>
        <strong>${task.source}</strong>
        <p class="small-muted">${task.lastUpdate}</p>
      </div>
      <div class="detail-box">
        <span>当前状态</span>
        <strong>${getStatus(task.status).label}</strong>
        <p class="small-muted">${task.priority} · ${task.tags.join(" / ")}</p>
      </div>
      <div class="detail-box">
        <span>下一步</span>
        <strong>${task.nextStep}</strong>
        <p class="small-muted">这一步做完，卡片就该往下一列走。</p>
      </div>
    </div>

    <div class="detail-box">
      <span>验收标准</span>
      <p>${task.acceptance}</p>
    </div>

    <div class="detail-box">
      <span>风险 / 阻塞点</span>
      <p>${task.risk}</p>
    </div>

    <div class="detail-box">
      <span>依赖卡片</span>
      <ul class="workflow-list">
        ${task.deps.length ? task.deps.map((dep) => `<li>${dep}</li>`).join("") : "<li>没有前置依赖，可以直接推进。</li>"}
      </ul>
    </div>

    <div class="hq-action-group">
      ${actions
        .map(
          (action) => `
            <button class="card-action hq-action-button" type="button" data-task-action="${action.key}" data-task-id="${task.id}">
              ${action.label}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAutomationDrawer(automation) {
  els.drawerBody.innerHTML = `
    <div class="hq-drawer-head">
      <p class="eyebrow">Automation Detail</p>
      <h2>${automation.name}</h2>
      <p class="small-muted">${automation.summary}</p>
    </div>

    <div class="dialog-grid hq-drawer-grid">
      <div class="detail-box">
        <span>状态</span>
        <strong>${automation.status}</strong>
        <p class="small-muted">${automation.owner}</p>
      </div>
      <div class="detail-box">
        <span>下一次运行</span>
        <strong>${automation.nextRun}</strong>
        <p class="small-muted">把后台动作做成可见的生产力，而不是藏在设置里。</p>
      </div>
    </div>

    <div class="detail-box">
      <span>会产出什么</span>
      <p>${automation.output}</p>
    </div>

    <div class="detail-box">
      <span>为什么值得保留</span>
      <p>${automation.summary}</p>
    </div>

    <div class="hq-action-group">
      <button class="card-action hq-action-button" type="button" data-automation-action="trigger" data-automation-id="${automation.id}">
        立即触发一次
      </button>
      <button class="github-link hq-action-button" type="button" data-automation-action="toggle" data-automation-id="${automation.id}">
        ${automation.status === "ACTIVE" ? "暂停自动化" : "恢复自动化"}
      </button>
    </div>
  `;
}

function ensureSelection() {
  const tasks = getFilteredTasks();
  const taskExists = state.tasks.some((task) => task.id === state.selectedId);
  const automationExists = state.automations.some((automation) => automation.id === state.selectedId);

  if (state.selectedType === "automation" && automationExists) {
    return;
  }

  if (taskExists) {
    return;
  }

  if (tasks[0]) {
    state.selectedType = "task";
    state.selectedId = tasks[0].id;
  } else if (state.tasks[0]) {
    state.selectedType = "task";
    state.selectedId = state.tasks[0].id;
  }
}

function renderDrawer() {
  ensureSelection();
  if (state.selectedType === "automation") {
    const automation = state.automations.find((item) => item.id === state.selectedId);
    if (automation) {
      renderAutomationDrawer(automation);
      return;
    }
  }

  const task = state.tasks.find((item) => item.id === state.selectedId);
  if (task) {
    renderTaskDrawer(task);
    return;
  }

  els.drawerBody.innerHTML = `
    <div class="hq-drawer-head">
      <p class="eyebrow">No Selection</p>
      <h2>先选一张卡片</h2>
      <p class="small-muted">左侧切角色，中间点卡片，右侧才会出现具体的推进动作。</p>
    </div>
  `;
}

function pushEvent(actor, tone, text) {
  state.events.unshift({
    id: `evt-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    actor,
    tone,
    time: "刚刚",
    text,
  });
}

function setTaskStatus(taskId, nextStatus) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task || task.status === nextStatus) return;
  task.status = nextStatus;
  task.lastUpdate = "刚刚";
  const tone = nextStatus === "blocked" ? "danger" : nextStatus === "review" ? "warning" : "positive";
  pushEvent(getRole(task.role).label, tone, `把「${task.title}」推进到了 ${getStatus(nextStatus).label}。`);
}

function handoffTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  const nextRoleId = ROLE_ACTION_MAP[task.role];
  if (!nextRoleId) return;
  const nextRole = getRole(nextRoleId);
  task.role = nextRoleId;
  task.owner = `${nextRole.label} / 下一棒`;
  task.lastUpdate = "刚刚";
  pushEvent(nextRole.label, "neutral", `接过了「${task.title}」，准备进入 ${nextRole.note} 阶段。`);
}

function attachAutomation(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  const automation = state.automations[0];
  if (!task || !automation) return;
  pushEvent("Automation", "neutral", `已把「${automation.name}」挂到任务「${task.title}」上，后续会自动回收结果。`);
}

function triggerAutomation(automationId) {
  const automation = state.automations.find((item) => item.id === automationId);
  if (!automation) return;
  automation.nextRun = "刚跑完，60 分钟后";
  pushEvent("Automation", "positive", `手动触发了「${automation.name}」，输出会回流到 Inbox 和晚报。`);
}

function toggleAutomation(automationId) {
  const automation = state.automations.find((item) => item.id === automationId);
  if (!automation) return;
  automation.status = automation.status === "ACTIVE" ? "PAUSED" : "ACTIVE";
  automation.nextRun = automation.status === "ACTIVE" ? "30 分钟后" : "手动恢复";
  pushEvent("Automation", "warning", `把「${automation.name}」切换成 ${automation.status}。`);
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  els.resetBtn.addEventListener("click", () => {
    state.role = "all";
    state.status = "all";
    state.search = "";
    state.selectedType = "task";
    state.selectedId = state.tasks.find((task) => task.status !== "done")?.id || state.tasks[0]?.id || null;
    els.searchInput.value = "";
    pushEvent("HQ", "neutral", "已重置筛选，回到全局视图。");
    render();
  });

  document.body.addEventListener("click", (event) => {
    const statusCard = event.target.closest("[data-status-card]");
    if (statusCard) {
      const next = statusCard.dataset.statusCard;
      state.status = next === "all" ? "all" : next;
      render();
      return;
    }

    const roleButton = event.target.closest("[data-role]");
    if (roleButton) {
      state.role = roleButton.dataset.role;
      render();
      return;
    }

    const taskButton = event.target.closest("[data-task]");
    if (taskButton) {
      state.selectedType = "task";
      state.selectedId = taskButton.dataset.task;
      renderDrawer();
      renderBoard();
      renderAutomations();
      renderFocusNote();
      return;
    }

    const automationButton = event.target.closest("[data-automation]");
    if (automationButton) {
      state.selectedType = "automation";
      state.selectedId = automationButton.dataset.automation;
      renderDrawer();
      renderAutomations();
      renderBoard();
      renderFocusNote();
      return;
    }

    const taskAction = event.target.closest("[data-task-action]");
    if (taskAction) {
      const action = taskAction.dataset.taskAction;
      const taskId = taskAction.dataset.taskId;
      if (action === "handoff") handoffTask(taskId);
      else if (action === "automation") attachAutomation(taskId);
      else setTaskStatus(taskId, action);
      render();
      return;
    }

    const automationAction = event.target.closest("[data-automation-action]");
    if (automationAction) {
      const action = automationAction.dataset.automationAction;
      const automationId = automationAction.dataset.automationId;
      if (action === "trigger") triggerAutomation(automationId);
      if (action === "toggle") toggleAutomation(automationId);
      render();
    }
  });
}

function render() {
  renderOverview();
  renderRoles();
  renderAutomations();
  renderFocusNote();
  renderBoard();
  renderEvents();
  renderDrawer();
}

function init() {
  els.overview = document.querySelector("#hqOverview");
  els.roleRail = document.querySelector("#hqRoleRail");
  els.automationList = document.querySelector("#hqAutomationList");
  els.focusNote = document.querySelector("#hqFocusNote");
  els.board = document.querySelector("#hqBoard");
  els.boardSummary = document.querySelector("#hqBoardSummary");
  els.filterPills = document.querySelector("#hqFilterPills");
  els.eventFeed = document.querySelector("#hqEventFeed");
  els.drawerBody = document.querySelector("#hqDrawerBody");
  els.searchInput = document.querySelector("#hqSearchInput");
  els.resetBtn = document.querySelector("#hqResetBtn");
  bindEvents();
  render();
}

document.addEventListener("DOMContentLoaded", init);
