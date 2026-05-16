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

```bash
npm run build        # 产物 → dist/
```

将 `dist/` 部署到 Cloudflare Pages，配置自定义域名和子域名路由。

## 私密博客

`src/content/blog/` 中的博客默认公开。如果后续文章不想推送到 GitHub：

```bash
# 新建文章后执行：
git update-index --skip-worktree src/content/blog/你的文章.md
```

文件保留在本地，dev 正常运行，但 git 忽略其所有变更——不会误 commit 或 push。恢复跟踪：

```bash
git update-index --no-skip-worktree src/content/blog/你的文章.md
```

查看所有已跳过文件：`git ls-files -v | grep "^S"`

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
│   └── blog/[slug].astro         # 博客文章详情
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
│   └── blog/*.md                 # 博客文章
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
