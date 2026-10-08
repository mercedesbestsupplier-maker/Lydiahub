(function () {
  const unpublishedPath = /^(?:\.\.\/|\.\/|\/)*(?:dist|skills|docs)\//;
  const unpublishedRepo = /^https:\/\/github\.com\/mercedesbestsupplier-maker\/xiaohongshuredskill(?:\/|$)/;

  function normalize(node) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(normalize);
      return;
    }

    const missingPackage = node.hasPackage === true && unpublishedPath.test(node.download || "");
    for (const [key, value] of Object.entries(node)) {
      if (typeof value === "string" && unpublishedPath.test(value)) node[key] = "";
      else normalize(value);
    }
    if (missingPackage) {
      node.hasPackage = false;
      node.packageStatus = "planned";
      node.packageKind = "planned";
      node.status = "待公开";
      if (Array.isArray(node.valueTags)) node.valueTags = node.valueTags.filter((tag) => !/已打包|正式执行包|可下载/.test(tag));
      if (typeof node.sourceTag === "string" && /已打包|正式执行包/.test(node.sourceTag)) node.sourceTag = "目录规划";
    }
    if (typeof node.packagedSkillCount === "number") node.packagedSkillCount = 0;
    if (typeof node.planningSkillCount === "number") node.planningSkillCount = 0;
  }

  window.applyPublicAvailability = normalize;

  function disableUnpublishedLinks(root) {
    const links = root.querySelectorAll ? root.querySelectorAll("a[href]") : [];
    for (const link of links) {
      const href = link.getAttribute("href") || "";
      if (!unpublishedPath.test(href) && !unpublishedRepo.test(href)) continue;
      link.removeAttribute("href");
      link.removeAttribute("download");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("title", "该资源未随公开仓库发布");
      link.textContent = "资源未公开";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.textContent = ".public-status{position:relative;z-index:2;padding:12px clamp(20px,4vw,58px);background:#fff5df;border-bottom:1px solid #d5b77d;color:#493c2a;font:14px/1.6 system-ui,sans-serif}.public-status-inner{max-width:960px;margin:0 auto}.public-status a{color:#174f59;text-decoration:underline}.public-status a:focus-visible{outline:2px solid #174f59;outline-offset:3px}.public-status strong{font-weight:700}a[aria-disabled=true]{pointer-events:none;cursor:not-allowed;opacity:.65}";
    document.head.append(style);

    const notice = document.createElement("div");
    notice.className = "public-status";
    notice.setAttribute("role", "note");
    notice.innerHTML = '<div class="public-status-inner"><strong>历史规划原型：</strong>这里展示的是一人公司 Skill 目录设想，星级是选题优先级。下载包与 SKILL.md 未随公开仓库发布，相关按钮已停用。现行产品请看 <a href="https://github.com/mercedesbestsupplier-maker">毕方团队主页</a>；Lydia 的独立工具请看 <a href="https://github.com/LydiaTools">个人主页</a>。</div>';
    document.body.prepend(notice);

    disableUnpublishedLinks(document);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === 1) {
            if (node.matches?.("a[href]")) disableUnpublishedLinks(node.parentElement || document);
            else disableUnpublishedLinks(node);
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
