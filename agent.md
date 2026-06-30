# 个人简历网站 — 项目文档

## 项目概述

一个基于 **React 19 + Vite 8** 构建的暗色风格个人简历单页网站，展示开发者颜松杰的技术能力、项目经验与联系信息。

- **语言**：中文（zh-CN）
- **技术栈**：React 19, Vite 8, Framer Motion, Lucide React Icons
- **构建工具**：Vite 8 + @vitejs/plugin-react
- **代码规范**：ESLint（flat config）
- **包管理器**：npm

---

## 目录结构

```
resume-site/
├── index.html                  # HTML 入口
├── vite.config.js              # Vite 构建配置
├── eslint.config.js            # ESLint 扁平化配置
├── package.json                # 依赖与脚本
├── start-dev.bat               # Windows 开发启动脚本
├── public/
│   ├── favicon.svg             # 浏览器标签图标
│   └── icons.svg               # SVG 图标集
└── src/
    ├── main.jsx                # React 应用入口
    ├── App.jsx                 # 根组件，组装页面结构
    ├── App.css                 # 全局布局与通用组件样式
    ├── index.css               # CSS 变量、重置样式、滚动条
    ├── assets/
    │   ├── hero.png            # 头像/主视觉图片
    │   ├── react.svg           # React Logo
    │   └── vite.svg            # Vite Logo
    └── components/
        ├── Navbar.jsx / .css         # 固定导航栏
        ├── HeroSection.jsx / .css    # 首屏英雄区
        ├── AboutSection.jsx / .css   # 关于我
        ├── ProjectsSection.jsx / .css # 项目经验
        ├── SkillsSection.jsx / .css  # 技能与荣誉
        └── ContactSection.jsx / .css # 联系与页脚
```

---

## 快速开始

### 开发

```bash
cd resume-site
npm run dev
```

启动后访问 `http://localhost:5173`，支持热更新。

### 构建

```bash
npm run build
```

产物输出到 `dist/` 目录。

### 预览构建产物

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

---

## 页面结构与组件

### 1. 导航栏 — Navbar

固定在页面顶部，毛玻璃背景。
包吪五个锚点链接（首页、关于、项目、优势、联系），右侧有「联系我」CTA 按钮。

特性：
- 滚动时增加背景不透明度（`.scrolled` 状态）
- 基于滚动位置自动高亮当前可见区块（`active` 状态）
- 点击导航链接执行平滑滚动（`scroll-behavior: smooth`），并减去导航栏高度（`64px`）以补偿固定定位遮挡
- 响应式布局：移动端隐藏中间导航链接

### 2. 英雄区 — HeroSection

全屏首屏，包含：

- **Canvas 粒子动画背景**（55 个粒子，粒子间连线效果）
- 径向渐变背景光晕
- 姓名标题（"小颜同学"），姓氏使用强调色
- 职位标语 + 技术标签云（Java, SpringCloud, Redis 等）
- 两个 CTA 按钮："查看项目"、"联系我"
- 右侧数据统计卡片（3+ 年经验 / 6 个项目 / 85% 绩效）
- 底部滚动提示动画

### 3. 关于我 — AboutSection

双列布局：

- 左侧：圆形头像占位（字母"颜"），带边框光晕效果
- 右侧：
  - 标题 "将复杂变为简洁的软件工程师"
  - 个人简介段落（毕业院校、三年经验、擅长技术栈）
  - 联系信息网格＊扳机、邮箱、博客、公众号）
  - 数据统计（3+ 年经验 / 6 项目交付 / 85% 绩效 / 3000+ 粉丝）

### 4. 项目经验 — ProjectsSection

垂直卡片列表，每个卡片展示一个项目：

| 项目 | 技术栈 | 周期 |
|------|--------|------|
| 中国电能光E链 | Dubbo, Redis, MySQL, ES, Kafka | 2024.04 — 2025.01 |
| 邯郸市经开区数据管理平台 | SpringCloud, Nacos, Redis, MySQL, Vue | 2024.04 — 2025.10 |
| 标准院质量数据可视化平台 | Python, Django, Pandas | 2024.01 — 2025.04 |

每个卡片包含：周期、技术标签、项目描述、职责列表，Hover 时显示渐变边框动画。

### 5. 技能与荣誉 — SkillsSection

四列技能卡片网格：

- **Java 微服务**（资深）：SpringCloud, Dubbo, SpringBoot, Mybatis-Plus, Shiro
- **数据与中间件**（精通）：MySQL 优化, Oracle, Redis, Elasticsearch, Kafka
- **AI 与工程化**（熟练）：AI 大模型集成, 本地模型部署, Linux 运维, Git, RESTful
- **Python 生态**（熟练）：Django, Pandas, 数据处理, 数据清洗, BI 工具

下方为荣誉列表（国家励志奖学金、蓝桥证书、优秀毕业论文等）。

### 6. 联系 — ContactSection

双列布局：

- 左侧：
  - 标题 "聊聊你的下一个项目"
  - 联系渠道列表（电话、邮箱、博客、公众号），使用 Lucide 图标
- 右侧：引用卡片（"良好的代码不仅是给机器看的，更是给人看的。"）

页脚包含版权信息。

---

## 设计系统

由 `index.css` 中的 CSS 自定义属性定义：

| 变量 | 值 | 用途 |
|------|-----|------|
| `--bg-primary` | `#0a0a0a` | 背景基色 |
| `--bg-secondary` | `#111111` | 交替区块背景 |
| `--bg-card` | `#141414` | 卡片背景 |
| `--text-primary` | `#f0f0f0` | 主文字 |
| `--accent` | `#64b5f6` | 强调色（蓝色） |
| `--accent-dim` | `#1a3a5c` | 强调色暗版 |
| `--max-width` | `1700px` | 内容最大宽度 |
| `--nav-height` | `72px` | 导航栏高度 |

### 通用组件类

- `.section-container` — 内容约束容器
- `.section-label` — 区块标签（小号等宽文字）
- `.section-title` — 区块标题
- `.section-subtitle` — 区块副标题
- `.glow-line` — 发光分割线
- `.btn-primary` / `.btn-secondary` — 按钮样式
- `.card-hover` — 卡片悬停边框渐变效果

---

## 交互效果

| 效果 | 实现方式 |
|------|----------|
| 导航栏毛玻璃 | `backdrop-filter: blur(20px)` |
| 导航链接下划线动画 | `::after` 伪元素 `width` 过渡 |
| 英雄区粒子动画 | Canvas 2D，粒子位置/连线实时绘制 |
| 卡片 Hover 渐变边框 | `::before` 伪元素 + `mask-composite` |
| 平滑滚动导航 | `window.scrollTo({ behavior: 'smooth' })` |
| 滚动高亮导航 | 基于 `scrollY + 200` 的偏移计算 |

---

## 技术依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| react | ^19.2.6 | UI 框架 |
| react-dom | ^19.2.6 | DOM 渲染 |
| framer-motion | ^12.40.0 | 动画库 |
| lucide-react | ^1.21.0 | 图标库 |
| vite | ^8.0.12 | 构建工具 |
| @vitejs/plugin-react | ^6.0.1 | Vite React 支持 |
| eslint | ^10.3.0 | 代码检查 |

---

## 维护笔记

- 所有组件使用 JSX，无 TypeScript
- 样式使用纯 CSS（无预处理器），CSS 自定义属性管理主题
- 中文字符直接在 JSX 中书写，`index.html` 的 BOM 编码需注意不要被破坏
- 启动开发服务器时绑定 `--host 0.0.0.0` 以支持局域网访问
- `start-dev.bat` 为 Windows 环境专用启动脚本
