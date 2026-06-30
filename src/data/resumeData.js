// ============================================================
//  简历数据中心（示例文件 —— 信息均为虚构）
//
//  使用方法：
//    1. 复制此文件，重命名为 resumeData.js
//    2. 修改里面的信息为你自己的
//    3. 保存，浏览器自动刷新即可看到效果
//
//  注意：resumeData.js 是本项目实际使用的文件，
//        本文件仅作为示例模板，不会被项目读取。
// ============================================================

const resumeData = {

  /* ---------- 网站元信息 ---------- */
  site: {
    title: '小颜同学 - 前端开发工程师 | 个人简历',
    logo: '个人简历',
    footerBuilt: 'Built with React + Vite',
  },

  /* ---------- 基本信息 ---------- */
  personal: {
    firstName: '小颜',
    lastName: '同学',
    fullName: '小颜同学',
    title: '前端开发工程师',
    avatarChar: '颜',
    email: 'xiaoyantongxue@example.com',
    blog: 'xiaoyan-blog.cn',
    blogUrl: 'https://xiaoyan-blog.cn',
    publicAccount: '小颜的技术笔记',
    age: 25,
    hometown: '广东省广州市',
    education: '2023年毕业于广州大学软件工程专业（本科）',
  },

  /* ---------- 导航 ---------- */
  nav: [
    { id: 'hero',  label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'experience', label: '经历' },
    { id: 'projects', label: '项目' },
    { id: 'skills', label: '技能' },
    { id: 'contact', label: '联系' },
  ],

  /* ---------- 首页 Hero ---------- */
  hero: {
    typingText: '热爱前端开发，专注于用React与Vue生态构建优雅、高性能的用户界面。',
    tags: ['React', 'Vue', 'TypeScript', 'Node.js', 'CSS', 'Webpack', 'Git', 'Figma'],
    stats: [
      { value: '2+',   label: '年经验' },
      { value: '5',    label: '个项目' },
      { value: '90%',  label: '绩效'   },
    ],
    primaryBtn:  { text: '查看项目', target: 'projects' },
    secondaryBtn: { text: '联系我',   target: 'contact'  },
  },

  /* ---------- 关于我 ---------- */
  about: {
    label: '关于我',
    titleBefore: '将设计变为',
    titleAccent: '代码',
    titleAfter: '的前端工程师',
    paragraphs: [
      '25岁，广东广州人。2023年毕业于广州大学软件工程专业（本科），拥有两年以上前端开发经验。熟练掌握React、Vue、TypeScript等主流技术栈，擅长组件化开发与性能优化。',
      '目前专注于中后台管理系统与移动端H5开发，具备从UI设计稿到完整页面的独立交付能力，同时对Node.js后端与工程化领域持续探索。工作认真负责，综合绩效考核达90%，获得团队高度认可。',
    ],
    contacts: [
      { label: '位置',   value: '广东省广州市'                       },
      { label: '邮箱',   value: 'xiaoyantongxue@example.com'         },
      { label: '博客',   value: 'xiaoyan-blog.cn'                    },
      { label: '公众号', value: '小颜的技术笔记'                      },
    ],
    stats: [
      { value: '2+',    label: '年经验'   },
      { value: '5',     label: '项目交付' },
      { value: '90%',   label: '绩效'     },
      { value: '1000+', label: '粉丝'     },
    ],
  },

  /* ---------- 工作经历 ---------- */
  experience: {
    label: '工作经历',
    title: '职业旅程',
    subtitle: '从实习到正式岗位，逐步积累前端技术深度与业务理解能力。',
    items: [
      {
        period: '2024.03 — 至今',
        role: '前端开发工程师',
        company: '广州星辉科技有限公司',
        type: '正式',
        desc: '负责公司核心产品中后台管理系统的前端架构与开发，使用React + TypeScript技术栈，主导组件库建设与性能优化。',
      },
      {
        period: '2023.07 — 2024.02',
        role: '前端开发实习生',
        company: '深圳云创信息技术有限公司',
        type: '实习',
        desc: '参与多个H5活动页面的开发与维护，学习Vue.js生态与移动端适配方案，独立完成3个运营活动的前端部分。',
      },
      {
        period: '2022.09 — 2023.06',
        role: '前端开发（兼职）',
        company: '校园工作室',
        type: '兼职',
        desc: '在校期间接洽校外企业官网与小程序的开发需求，独立完成2个企业展示型网站的前端实现。',
      },
    ],
  },

  /* ---------- 项目经验 ---------- */
  projects: {
    label: '项目经验',
    title: '核心项目',
    subtitle: '参与过多个企业级项目的前端开发，涉及中后台系统、数据可视化、移动端H5等领域。',
    items: [
      {
        period: '2024.06 — 至今',
        tech: 'React, TypeScript, Ant Design, ECharts, Zustand',
        title: '星辉数据管理平台',
        subtitle: '企业级数据分析与管理中后台',
        desc: '为公司内部打造的一站式数据管理平台，涵盖数据看板、报表生成、权限管理、系统配置等模块，支撑日均500+活跃用户的数据查询与分析。',
        duties: [
          '基于React + TypeScript搭建前端项目架构，制定组件开发规范与代码Review流程',
          '封装通用表格、表单、图表组件，将新页面开发效率提升约40%',
          '使用ECharts实现多维数据可视化看板，支持时间、地区、品类等维度的灵活下钻',
          '优化首屏加载性能，通过路由懒加载与CDN分离将FCP从3.2s降至1.1s',
        ],
      },
      {
        period: '2024.03 — 2024.08',
        tech: 'Vue3, Element Plus, Pinia, SCSS, Vite',
        title: '云创商户管理端',
        subtitle: '面向中小商户的SaaS管理后台',
        desc: '为线下零售商户提供的SaaS管理后台，包含商品管理、订单处理、会员体系、营销活动等核心功能模块，服务超过200家商户。',
        duties: [
          '负责商品管理、订单处理两个核心模块的前端开发与迭代维护',
          '基于Element Plus二次封装业务组件，统一UI风格与交互体验',
          '配合后端完成RESTful API对接，处理复杂表单校验与状态管理',
        ],
      },
      {
        period: '2023.10 — 2024.01',
        tech: 'React, Tailwind CSS, Next.js, Prisma',
        title: '个人博客系统',
        subtitle: '全栈博客网站',
        desc: '从零搭建的个人技术博客，支持Markdown文章发布、标签分类、全文搜索、评论互动等功能，用于记录学习心得与技术分享。',
        duties: [
          '使用Next.js App Router搭建全栈博客，实现SSR服务端渲染与良好的SEO',
          '基于Prisma + PostgreSQL设计文章、标签、评论的数据模型与API',
          '集成Giscus评论系统与Algolia全文搜索，提升用户互动体验',
        ],
      },
    ],
  },

  /* ---------- 技能 ---------- */
  skills: {
    label: '技能与荣誉',
    title: '技术能力',
    items: [
      {
        title: '前端框架',
        level: '精通',
        items: ['React', 'Vue3', 'TypeScript', 'Next.js', 'Hooks'],
      },
      {
        title: '工程化与样式',
        level: '熟练',
        items: ['Webpack', 'Vite', 'SCSS', 'Tailwind CSS', 'Ant Design', 'Element Plus'],
      },
      {
        title: '后端与工具',
        level: '掌握',
        items: ['Node.js', 'Prisma', 'PostgreSQL', 'Git', 'RESTful API', 'Docker'],
      },
      {
        title: '设计协作',
        level: '熟练',
        items: ['Figma', '组件库搭建', '响应式布局', '交互设计', '动效实现'],
      },
    ],
  },

  /* ---------- 荣誉 ---------- */
  honors: {
    title: '荣誉奖项',
    items: [
      '校级一等奖学金（两次）',
      '全国大学生计算机设计大赛省级二等奖',
      '优秀毕业设计',
      '校级优秀学生干部',
      'CET-6 英语六级证书',
      'GitHub 开源项目获得 200+ Star',
    ],
  },

  /* ---------- 联系 ---------- */
  contact: {
    label: '联系',
    title: '聊聊你的下一个项目',
    desc: '如果你正在寻找一位可靠的前端开发工程师，或者对以上项目有任何疑问，欢迎随时与我联系。',
    channels: [
      { type: 'email',   icon: 'Mail',            href: 'mailto:xiaoyantongxue@example.com',   text: 'xiaoyantongxue@example.com' },
      { type: 'blog',    icon: 'Globe',           href: 'https://xiaoyan-blog.cn',             text: 'xiaoyan-blog.cn', external: true },
      { type: 'wechat',  icon: 'MessageCircle',   href: null,                                  text: '公众号：小颜的技术笔记' },
    ],
    quote: {
      text: '写代码不只是实现功能，更是为用户创造愉快的体验。',
      author: '小颜同学',
    },
    footer: '小颜同学',
  },
};

export default resumeData;
