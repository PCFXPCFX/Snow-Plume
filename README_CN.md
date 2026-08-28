[English Version](./README.md)

# 白羽 / Snow Plume

*LoveLive! 系列学园偶像企划个人粉丝站点 · 瑞士国际主义平面风格 · 纯静态*

> 取名「白羽」，出自系列传承之羽的意象，英文 Snow Plume 致敬 μ's 名曲《Snow Halation》。

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5A03?logo=astro)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-Cloudflare%20Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)

取名**白羽**，出自 LoveLive! 系列最核心的视觉隐喻——从 μ's 剧场版结尾飘落的那片无人拾起的羽毛，到 Aqours 千歌接过传承之羽，再到理亚的紫羽。六代团体，一片白羽贯穿始终。

---

## 涵盖团体

| | | | | | |
|:--:|:--:|:--:|:--:|:--:|:--:|
| <img src="public/images/muse_logo.svg" height="36"> | <img src="public/images/aqours_logo.svg" height="28"> | <img src="public/images/nijigasaki_logo.svg" height="26"> | <img src="public/images/liella_logo.svg" height="28"> | <img src="public/images/hasunosora_logo.svg" height="22"> | <img src="public/images/bluebird-logo.svg" height="28"> |
| μ's | Aqours | 虹咲学园 | Liella! | 莲之空 | BLUEBIRD |

## 功能

- **六个团体页面** — μ's、Aqours、虹咲学园、Liella!、莲之空、人生不易部（BLUEBIRD）
- **子域名路由** — 中文子域名（缪.*、水.*、虹.*、星.*、莲.*、鸟.*）
- **瑞士国际主义平面风格** — 网格系统、克制用色、玻璃拟态
- **物理模拟羽毛** — 弹簧-质量-阻尼模型驱动，沿团体卡片飘落，可拖拽
- **成员应援色** — 点击色点切换页面主题色
- **Markdown 博客** — Astro 内容集合，写 `.md` 即可发表
- **照片墙** — 网格画廊 + 点击放大，支持 PNG/JPG/WebP
- **歌曲链接** — 我最喜爱的歌曲卡片支持跳转 B站视频或站内博文
- **玻璃顶栏** — `backdrop-blur` 毛玻璃导航，带友链下拉

## 快速开始

```bash
npm install
npm run dev          # http://localhost:4321
```

本地开发用 `?site=` 参数模拟子域名：

| 参数 | 页面 |
|------|------|
| `/?site=lovelive` | 导航中枢 |
| `/?site=缪` | μ's |
| `/?site=水` | Aqours |
| `/?site=虹` | 虹咲学园 |
| `/?site=星` | Liella! |
| `/?site=莲` | 莲之空 |
| `/?site=鸟` | 人生不易部 |

## 部署

部署 = 一句 `git push`：GitHub Actions 自动构建并上传到 Cloudflare Pages（`.github/workflows/deploy.yml`），无需本地构建，已绑定的自定义域名与中文子域名不受影响。

一次性配置：

1. 在 `.github/workflows/deploy.yml` 中把 `CF_PAGES_PROJECT` 改成你的 Pages 项目名；
2. 创建**私有**仓库 `Snow-Plume-content`，把文章内容推送上去（`src/content/blog/` 本地已是独立 git 仓库，`git push -u origin main` 即可）；
3. GitHub 仓库 → Settings → Secrets and variables → Actions，添加 `CLOUDFLARE_API_TOKEN`（CF 面板 → My Profile → API Tokens 创建，权限选 **Account · Cloudflare Pages · Edit**）、`CLOUDFLARE_ACCOUNT_ID`（CF 面板右侧可见）和 `CONTENT_REPO_TOKEN`（GitHub Fine-grained PAT，仅授予 `Snow-Plume-content` 的 **Contents · Read** 权限）；
4. `git push` 即自动部署；也可在 Actions 页手动触发（workflow_dispatch）。

如需本地构建：`npm run build`（产物 → `dist/`），或用 `npx wrangler pages deploy dist` 手动直传。

## 博客文章

文章是 `src/content/blog/` 下的 Markdown 文件，文件名即 URL（`my-post.md` → `/blog/my-post/`）。

### 创建文章

在 `src/content/blog/` 新建 `.md` 文件即可：

```markdown
---
title: "文章标题"           # 必填
group: "缪"                # 必填：lovelive / 缪 / 水 / 虹 / 星 / 莲 / 鸟
date: 2026-08-28           # 必填，日期越新越靠前
excerpt: "列表里显示的摘要"   # 可选，超过两行截断
cover: "/images/xx.jpg"    # 可选
pinned: true               # 可选，置顶
---

正文 Markdown……
```

> 注：文章不进主仓库。写完后在 `src/content/blog/` 内 commit + push，同步到私有内容仓库（见「博客内容与代码分离」）。

### 显示位置

| 位置 | 说明 | 排序规则 |
|------|------|----------|
| 团体页「一些感想」栏 | 只显示该团体的文章，最多 5 篇 | `pinned` 置顶优先，其余按 `date` 倒序 |
| 全部文章归档 `/blog/` | 全站文章，按年份分组 | 按 `date` 倒序（不看置顶） |
| 文章详情页 | `/blog/<文件名>/` | — |

### 调整显示顺序

- **置顶**：frontmatter 加 `pinned: true`，「一些感想」栏内排最前（可多篇置顶，多篇之间仍按日期倒序）；
- **调日期**：改 `date` 即可改变先后，新的在前；
- 归档页始终按日期排序，置顶不影响它。

顶栏的「我的博客」按钮是外链，在 `src/components/TopBar.astro` 的 `MY_BLOG_URL` 配置，留空则跳回站点首页。

## 博客内容与代码分离

主仓库只开源框架，博客文章**不进 git**：`src/content/blog/` 已加入 `.gitignore`。

- 文章只保存在本地；`src/content/blog/` 同时是一个独立的 git 仓库，远程指向**私有**仓库 `Snow-Plume-content`（备份 + 供 CI 拉取）；
- 写完新文章后，在该目录里同步：

```bash
cd src/content/blog
git add -A && git commit -m "新文章" && git push
```

- 部署时 GitHub Actions 用 `CONTENT_REPO_TOKEN` 把私有内容仓库拉取到 `src/content/blog/` 再构建，线上站点照常展示文章；
- 主仓库的历史提交中仍保留着早期文章（初始提交），最新代码树中则不再包含。

## 歌曲链接

「我最喜爱的歌曲」区域每首歌曲可配置跳转链接：

| 链接类型 | 示例 | 行为 |
|----------|------|------|
| B站视频 | `https://www.bilibili.com/video/BV...` | 新标签页打开，显示"B站观看" |
| 站内博文 | `/blog/文章-slug` | 当前页跳转，显示"阅读博文" |
| 无链接 | （省略 `url`） | 静态卡片 |

### 配置方法

编辑 `src/data/groups.js`，每首歌曲为对象，`name` 必填，`url` 可选：

```js
songs: [
  { name: "Snow halation" },                                        // 无链接
  { name: "僕らは今のなかで", url: "https://www.bilibili.com/video/BV..." }, // B站
  { name: "START:DASH!!", url: "/blog/start-dash" },                // 博文
],
```

粉丝二次创作/改编版歌曲适合链接 B站投稿，写过感想的歌曲适合链接站内博文。

## 设计

站点整体采用**瑞士国际主义平面风格**，参考苹果官网与独立建筑事务所网站的排版语言。无数据库、无后端 API，纯静态 HTML。

- 玻璃卡片使用 `backdrop-blur-2xl` + `bg-white/40` + 极细白边框
- 团体色仅以 2px 细线出现，不做大面积填充
- 卡片交替左右偏移，间距 36–48 单位，形成不对称但有序的网格
- 羽毛采用**弹簧-质量-阻尼**物理模型，临界阻尼参数，滚动快慢不影响其飘落速度

详见：[`/blog/hello-world/`](https://lovelive.example.com/blog/hello-world/)

## 关于羽毛

白色羽毛是 LoveLive! 系列最核心的视觉隐喻。剧场版结尾一片白羽飘落街头无人拾起——「王位悬空」；Aqours 第 12 话千歌拾起羽毛，完成精神传承；理亚获得紫羽，寓意传承不止一种形态。

本站交互羽毛即是对此意象的致敬——一枚白色羽毛沿六个团体的卡片依次飘落。

## 技术栈

| 层 | 选择 |
|----|------|
| 框架 | [Astro](https://astro.build) 5.x |
| 样式 | [Tailwind CSS](https://tailwindcss.com) 3.x |
| 内容 | Astro Content Collections（Markdown） |
| 字体 | [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC) |
| 部署 | [Cloudflare Pages](https://pages.cloudflare.com) |

## 项目结构

```
src/
├── layouts/Layout.astro          # HTML 骨架
├── pages/
│   ├── index.astro               # 入口 + 子域名路由
│   └── blog/
│       ├── index.astro           # 全部文章归档（/blog/）
│       └── [slug].astro          # 博客文章详情
├── components/
│   ├── NavHub.astro              # 导航中枢
│   ├── GroupPage.astro           # 团体页面
│   ├── CoverSection.astro        # 全屏封面
│   ├── TopBar.astro              # 全局顶栏
│   ├── MemberColors.astro        # 应援色选择器
│   ├── BlogList.astro            # 博客列表
│   └── PhotoWall.astro           # 照片墙 + Lightbox
├── content/
│   ├── config.ts                 # 集合配置
│   └── blog/*.md                 # 博客文章（在私有内容仓库，不进主仓库）
└── data/
    └── groups.js                 # 团体、成员、歌曲、图片配置
```

## 借物表

| 资源 | 来源 | 许可 |
|------|------|------|
| μ's logo | [萌娘共享](https://commons.moegirl.org.cn/index.php?title=File:%CE%9C%27s_logo.svg) | 公有领域 |
| Aqours logo | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aqours_logo.svg) | 公有领域 |
| 虹咲学园 logo | [latestlogo.com](https://latestlogo.com/logos/nijigasaki-high-school-idol-club/) | 公有领域 |
| Liella! logo | [萌娘共享](https://commons.moegirl.org.cn/index.php?title=File:Liella%21.svg) | 公有领域 |
| 莲之空 logo | [萌娘共享](https://commons.moegirl.org.cn/index.php?title=File:莲之空logo横板.svg) | 公有领域 |
| BLUEBIRD logo | [萌娘共享](https://commons.moegirl.org.cn/Category:生如百戏难！LOVELIVE!_BLUEBIRD) | 公有领域 |
| 羽毛图片 | [pngimg.com](https://pngimg.com/uploads/feather/feather_PNG12955.png) | 免费个人使用 |

| Noto Sans SC | [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC) | SIL Open Font License |

## 许可

MIT © 2026 · 由 [Claude](https://claude.ai)（Anthropic）与 DeepSeek V4 Pro 共同生成

---

如果对您有帮助，欢迎点亮 Star ⭐，不胜感激！
