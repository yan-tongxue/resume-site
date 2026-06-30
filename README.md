# 简历网站 — 用户手册

> 一份**零代码**即可定制的个人简历网页。只需修改一个数据文件，你的简历即刻上线。

---

## 目录

- [0. 项目文件说明](#0-项目文件说明)
- [1. 准备工作（只需做一次）](#1-准备工作只需做一次)
- [2. 启动预览](#2-启动预览)
- [3. 修改简历内容](#3-修改简历内容)
- [4. 导出为静态网页](#4-导出为静态网页)
- [5. 部署到线上](#5-部署到线上)
- [6. 常见问题](#6-常见问题)
- [附：数据文件完整参考](#附数据文件完整参考)

---

## 0. 项目文件说明

项目中包含两个简历数据文件，请注意区分：

| 文件 | 作用 |
|------|------|
| `src/data/resumeData.js` | **项目实际读取的文件**，当前填写的是示例信息，你直接改这个即可 |
| `src/data/resumeData.example.js` | **备份模板**，项目不会读取它。当你改乱了想恢复、或帮别人做新简历时可以复制这个文件覆盖过去 |

> 本手册所有示例均使用虚构信息（小颜同学），不涉及任何真实个人信息。

---

## 1. 准备工作（只需做一次）

### 你需要安装

| 工具 | 是什么 | 怎么装 |
|------|--------|--------|
| **Node.js** | 运行环境 | 访问 https://nodejs.org ，下载左边的 LTS 版本，一路点"下一步"安装 |
| **VS Code**（推荐） | 代码编辑器 | 访问 https://code.visualstudio.com/ ，下载安装 |

> 验证是否装好：打开终端（Win+R 输入 `cmd` 回车），输入 `node -v`，看到版本号（如 v20.x）就说明成功了。

### 获取项目

把项目文件夹放到你电脑上任意位置即可。

### 安装依赖（仅第一次）

用 VS Code 打开项目文件夹，按 `` Ctrl+` `` 打开终端，输入：

```bash
npm install
```

等待 1-2 分钟，看到 `node_modules` 文件夹出现就完成了。

---

## 2. 启动预览

在终端中输入：

```bash
npm run dev
```

看到类似 `http://localhost:5173/` 的地址后，用浏览器打开它。

> 你修改数据文件后，浏览器**自动刷新**，无需手动刷新。

---

## 3. 修改简历内容

**你只需要编辑这一个文件：**

```
src/data/resumeData.js
```

用 VS Code 打开它，你会看到一大段 JavaScript 代码。**不要慌**，你只需要改冒号右边的文字，完全不用懂代码。

> 以下示例均以"小颜同学"为例，信息均为虚构。

### 3.1 改名字和基本信息

找到文件开头的 `personal` 部分（约第 20 行）：

```js
personal: {
  firstName: '小颜',                  // ← 改成你的名
  lastName: '同学',                   // ← 改成你的姓
  fullName: '小颜同学',               // ← 改成你的全名
  title: '前端开发工程师',             // ← 改成你的职位
  avatarChar: '颜',                   // ← 改成你的姓氏（头像占位字）
  email: 'xiaoyantongxue@example.com',// ← 改成你的邮箱
  blog: 'xiaoyan-blog.cn',            // ← 改成你的博客域名
  blogUrl: 'https://xiaoyan-blog.cn', // ← 改成你的博客完整地址
  publicAccount: '小颜的技术笔记',     // ← 改成你的公众号名称
  age: 25,                            // ← 改成你的年龄
  hometown: '广东省广州市',            // ← 改成你的籍贯
  education: '2023年毕业于广州大学...', // ← 改成你的学历信息
},
```

**规则**：改 `'单引号里面的文字'` 就行。不要删掉单引号。

### 3.2 改首页大标题下面的打字文字

找到 `hero` 部分：

```js
hero: {
  typingText: '热爱前端开发，专注于用React与Vue生态构建优雅...',  // ← 改成你想展示的一句话
  tags: ['React', 'Vue', 'TypeScript', ...],                     // ← 改成你的技术标签
  stats: [
    { value: '2+',   label: '年经验' },                           // ← 改数字统计
    { value: '5',    label: '个项目' },
    { value: '90%',  label: '绩效'   },
  ],
  // ...
},
```

> 技术标签的规则：一个标签就是一对单引号包起来，用逗号分隔。比如 `['Vue', 'React', 'Node.js']`。**英文逗号**。

### 3.3 改"关于我"

```js
about: {
  label: '关于我',                                  // ← 区块小标题
  titleBefore: '将设计变为',
  titleAccent: '代码',                              // ← 高亮词
  titleAfter: '的前端工程师',                        // ← 高亮词后面的文字
  paragraphs: [
    '第一段自我介绍...',                              // ← 改
    '第二段自我介绍...',                              // ← 改
  ],
  contacts: [
    { label: '位置',   value: '广东省广州市'                       },  // ← 逐一改成你的
    { label: '邮箱',   value: 'xiaoyantongxue@example.com'         },
    { label: '博客',   value: 'xiaoyan-blog.cn'                    },
    { label: '公众号', value: '小颜的技术笔记'                      },
  ],
  stats: [
    { value: '2+',    label: '年经验' },                            // ← 改成你的数据
    { value: '5',     label: '项目交付' },
    { value: '90%',   label: '绩效' },
    { value: '1000+', label: '粉丝' },
  ],
},
```

### 3.4 改工作经历

找到 `experience` 部分。每一项工作是一个 `{ ... }` 对象：

```js
experience: {
  label: '工作经历',
  title: '职业旅程',
  subtitle: '从实习到正式岗位...',              // ← 改介绍语
  items: [
    {
      period: '2024.03 — 至今',                 // ← 时间
      role: '前端开发工程师',                    // ← 职位
      company: '广州星辉科技有限公司',            // ← 公司名
      type: '正式',                              // ← 类型（正式/实习/兼职）
      desc: '负责公司核心产品的前端架构...',      // ← 工作描述
    },
    // 复制上面这一段来新增工作经历
    // 不需要的整段删掉
  ],
},
```

> **增删工作经历**：复制从 `{ period:` 到 `},` 的整段，粘贴在 `items: [` 里面。不需要的直接删除。

### 3.5 改项目经验

结构和经历一样，找到 `projects`：

```js
projects: {
  // ...
  items: [
    {
      period: '2024.06 — 至今',                      // ← 时间
      tech: 'React, TypeScript, Ant Design, ...',    // ← 使用技术（逗号分隔）
      title: '星辉数据管理平台',                       // ← 项目名称
      subtitle: '企业级数据分析与管理中后台',          // ← 一句话描述
      desc: '为公司内部打造的一站式数据管理平台...',     // ← 详细描述
      duties: [                                        // ← 你的职责（每条一行）
        '第一条职责...',
        '第二条职责...',
      ],
    },
  ],
},
```

### 3.6 改技能

```js
skills: {
  label: '技能与荣誉',
  title: '技术能力',
  items: [
    {
      title: '前端框架',                        // ← 技能分类名
      level: '精通',                            // ← 熟练度（精通/熟练/掌握）
      items: ['React', 'Vue3', 'TypeScript', ...], // ← 具体技能列表
    },
  ],
},
```

> 要新增一个技能分类，复制整个 `{ title: ..., level: ..., items: [...] }` 块。

### 3.7 改荣誉奖项

```js
honors: {
  title: '荣誉奖项',
  items: [
    '校级一等奖学金（两次）',        // ← 每条荣誉一行
    '全国大学生计算机设计大赛省级二等奖',
    '优秀毕业设计',
    // 增删改这里的条目即可
  ],
},
```

### 3.8 改联系页

```js
contact: {
  label: '联系',
  title: '聊聊你的下一个项目',           // ← 联系页大标题
  desc: '如果你正在寻找一位可靠的前端开发工程师...', // ← 邀请语
  channels: [
    { type: 'email',   icon: 'Mail',           href: 'mailto:xiaoyantongxue@example.com',    text: 'xiaoyantongxue@example.com' },
    { type: 'blog',    icon: 'Globe',          href: 'https://xiaoyan-blog.cn',              text: 'xiaoyan-blog.cn', external: true },
    { type: 'wechat',  icon: 'MessageCircle',  href: null,                                   text: '公众号：小颜的技术笔记' },
  ],
  quote: {
    text: '写代码不只是实现功能，更是为用户创造愉快的体验。',  // ← 名言
    author: '小颜同学',                                      // ← 署名
  },
  footer: '小颜同学',                                        // ← 底部版权署名
},
```

> `icon` 可选值：`Phone`, `Mail`, `Globe`, `MessageCircle`（对应电话、邮箱、网站、微信图标）。
>
> `external: true` 表示点击后在新标签页打开。

---

## 4. 导出为静态网页

改好内容后，在终端输入：

```bash
npm run build
```

等待完成，项目根目录下会生成一个 `dist` 文件夹。这个文件夹就是你的**完整简历网站**，可以直接拿去部署。

---

## 5. 部署到线上

### 方式一：GitHub Pages（免费，推荐）

1. 注册 [GitHub](https://github.com) 账号
2. 新建一个仓库（Repository），名称随意
3. 把整个项目文件夹上传到仓库（可以用 GitHub Desktop 工具，不用命令行）
4. 在仓库 Settings → Pages → Source 选择 `GitHub Actions`
5. 每次修改内容后重新上传，页面自动更新

### 方式二：打包发给别人

把 `dist` 文件夹压缩成 zip，发给对方。对方解压后双击 `index.html` 就能在浏览器中查看。

### 方式三：云服务器 / OSS

把 `dist` 文件夹里的所有文件上传到你的服务器或阿里云 OSS / 腾讯云 COS 即可。

---

## 6. 常见问题

| 问题 | 解决方案 |
|------|---------|
| `npm` 命令不识别 | 没装 Node.js，回第 1 步安装 |
| `npm install` 很慢或报错 | 尝试 `npm install --registry=https://registry.npmmirror.com` |
| 改了数据浏览器没变化 | 看一眼终端是不是还在运行，如果关了需要重新 `npm run dev` |
| 头像怎么换成照片？ | 打开 `src/components/AboutSection.css`，找到 `.about-avatar`，把 `background` 改成 `background: url('你的照片路径');` |
| 技术标签要加新的 | 在 `hero.tags` 数组里加 `'新技术名'`，注意英文逗号 |
| 整段加新的工作经历 | 复制已有的一段 `{ period: ... }`，粘贴到它后面，改内容 |
| 想改颜色 | 打开 `src/index.css`，修改 `:root` 里的颜色值 |
| 改乱了想恢复 | 复制 `resumeData.example.js` 的内容覆盖 `resumeData.js` 即可 |

---

## 附：数据文件完整参考

整个 `src/data/resumeData.js` 的结构一览：

```
resumeData
├── site           网站全局设置
│   ├── title      浏览器标签页标题
│   ├── logo       导航栏左侧文字
│   └── footerBuilt  页面底部技术标识
├── personal       你的基本信息
│   ├── firstName / lastName / fullName   姓名拆分
│   ├── title        职业头衔
│   ├── avatarChar   头像占位字（姓氏）
│   ├── email                             联系方式
│   ├── blog / blogUrl                    博客
│   ├── publicAccount                     公众号
│   ├── age / hometown / education        年龄/籍贯/学历
├── nav            导航菜单 [首页, 关于, 经历, 项目, 技能, 联系]
├── hero           首页大屏
│   ├── typingText    打字机文字
│   ├── tags          技术标签列表
│   ├── stats         统计数字（经验/项目/绩效）
│   ├── primaryBtn    主按钮文案+跳转
│   └── secondaryBtn  次按钮文案+跳转
├── about          关于我
│   ├── label / titleBefore / titleAccent / titleAfter
│   ├── paragraphs    自我介绍段落
│   ├── contacts      联系方式卡片
│   └── stats         数据统计
├── experience     工作经历
│   ├── label / title / subtitle
│   └── items[]      { period, role, company, type, desc }
├── projects       项目经验
│   ├── label / title / subtitle
│   └── items[]      { period, tech, title, subtitle, desc, duties[] }
├── skills         技能
│   ├── label / title
│   └── items[]      { title, level, items[] }
├── honors         荣誉奖项
│   ├── title
│   └── items[]      字符串列表
└── contact        联系页
    ├── label / title / desc
    ├── channels[]   { type, icon, href, text, external? }
    ├── quote       { text, author }
    └── footer      版权文字
```

---

> 至此，你已经掌握了这份简历项目的全部用法。有任何问题，回头看这份手册即可。
