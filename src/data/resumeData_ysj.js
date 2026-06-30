// ============================================================
//  简历数据中心 —— 修改此文件即可全局更新所有页面内容
//  要替换成另一个人的简历，只需改下面这个对象。
// ============================================================

const resumeData = {

  /* ---------- 网站元信息 ---------- */
  site: {
    title: '颜松杰 - Java 开发工程师 | 个人简历',
    logo: '个人简历',
    footerBuilt: 'Built with React + Vite',
  },

  /* ---------- 基本信息 ---------- */
  personal: {
    firstName: '颜松',       // 名（用于首页大字）
    lastName: '杰',          // 姓（用于首页大字）
    fullName: '颜松杰',      // 全名（用于 footer、署名等）
    title: 'JAVA 开发工程师', // 职位
    avatarChar: '颜',        // 头像占位字
    phone: '18175852201',
    phoneDisplay: '181 7585 2201',
    email: '2279656909@qq.com',
    blog: 'wy-studio.cn',
    blogUrl: 'https://wy-studio.cn',
    publicAccount: '忘忧Studio',
    age: 24,
    hometown: '湖南衡阳',
    education: '2024年毕业于中南林业科技大学涉外学院计算机科学与技术专业（本科）',
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
    typingText: '专注于后端架构与微服务开发，致力于用Java生态构建高性能、高可用的企业级应用。',
    // 技术标签
    tags: ['Java', 'SpringCloud', 'Redis', 'MySQL', 'Dubbo', 'Kafka', 'Elasticsearch', 'Python', 'C'],
    // 统计数据
    stats: [
      { value: '3+',   label: '年经验' },
      { value: '6',    label: '个项目' },
      { value: '85%',  label: '绩效'   },
    ],
    // 按钮
    primaryBtn:  { text: '查看项目', target: 'projects' },
    secondaryBtn: { text: '联系我',   target: 'contact'  },
  },

  /* ---------- 关于我 ---------- */
  about: {
    label: '关于我',
    titleBefore: '将复杂变为',
    titleAccent: '简洁',
    titleAfter: '的软件工程师',
    paragraphs: [
      '24岁，湖南衡阳人。2024年毕业于中南林业科技大学涉外学院计算机科学与技术专业（本科），拥有三年以上Java后端开发经验。熟练掌握Java、Python、C三门编程语言，擅长SpringCloud微服务架构、MySQL数据库优化及中间件集成。',
      '目前专注于企业级应用后端开发，具备从需求分析到系统交付的全流程能力，同时在AI大模型集成与Python数据处理方向持续探索。工作认真负责，综合绩效考核达85%，获得上级领导高度认可。',
    ],
    // 联系卡片
    contacts: [
      { label: '电话',   value: '181 7585 2201'        },
      { label: '邮箱',   value: '2279656909@qq.com'      },
      { label: '博客',   value: 'wy-studio.cn'           },
      { label: '公众号', value: '忘忧Studio'             },
    ],
    // 统计
    stats: [
      { value: '3+',    label: '年经验'   },
      { value: '6',     label: '项目交付' },
      { value: '85%',   label: '绩效'     },
      { value: '3000+', label: '粉丝'     },
    ],
  },

  /* ---------- 工作经历 ---------- */
  experience: {
    label: '工作经历',
    title: '职业旅程',
    subtitle: '从兼职到正式岗位，逐步积累技术深度与业务理解能力。',
    items: [
      {
        period: '2023.11 — 2025.10',
        role: 'Java 开发工程师',
        company: '北京睿思鸣信息科技有限公司',
        type: '正式',
        desc: '参与多个企业级项目后端开发，负责微服务架构设计与核心模块实现，涉及政务数字化、能源产业链等领域。',
      },
      {
        period: '2022.06 — 2022.08',
        role: 'Java 讲师',
        company: '湖南六星教育网络科技有限公司',
        type: '实习',
        desc: '负责Java课程教学与学员指导，参与课程体系设计与教学材料编写。',
      },
      {
        period: '2021.11 — 2022.03',
        role: 'Java 开发工程师',
        company: '浙江墨煌信息科技有限公司',
        type: '实习',
        desc: '参与公司Java后端项目开发，学习企业级开发流程与规范。',
      },
      {
        period: '2021.07 — 2021.09',
        role: '网络技术人员',
        company: '山Studio工作室',
        type: '兼职',
        desc: '负责网络技术支持与维护工作。',
      },
      {
        period: '2020.06 — 2021.05',
        role: '授课学长',
        company: '软件协会',
        type: '兼职',
        desc: '担任授课学长，负责向学弟学妹传授编程知识与项目经验，曾带领小组参与学校项目答辩。',
      },
    ],
  },

  /* ---------- 项目经验 ---------- */
  projects: {
    label: '项目经验',
    title: '核心项目',
    subtitle: '参与过多个企业级项目的架构设计与核心研发，涉及政务数字化、能源产业链、数据分析等领域。',
    items: [
      {
        period: '2024.04 — 2025.01',
        tech: 'Dubbo, Redis, MySQL, Mybatis-Plus, ES, Kafka, Shiro',
        title: '中国电能光E链',
        subtitle: '光伏能源产业链数字化平台',
        desc: '为中国电能集团打造的光伏产业链全流程管理平台，坚持"绿色能源，智慧生活"发展理念，提供"供设备、带安装、送服务、引流量、做电商、能交易、建生态"的全寿期线上服务。',
        duties: [
          '对接黑豹光伏电站通道接口，解析API文档转化发电量数据，按时间实现分库分表策略',
          '开发发电量Excel导入补偿接口，可分片处理100万数据，耗时控制在10分钟以内',
          '升级优化系统组织架构，优化企业之间绑定关系，划分权限阶级，实现统计数据可筛选检索',
          '开发运维自动创建工单定时任务，默认近3天发电量为0自动创建工单并提醒运维人员处理',
          '负责对接融合E保，用户可选择手动投保以及自动投保功能，确保电站投保可配置化',
        ],
      },
      {
        period: '2024.04 — 2025.10',
        tech: 'SpringCloud, Nacos, Redis, MySQL, Mybatis-Plus, Vue, JWT, RuoYi',
        title: '邯郸市经开区企业及项目数据管理平台',
        subtitle: '政府级经济数据管理与可视化平台',
        desc: '河北省邯郸市级项目，基于若依框架定制开发，用于政府项目全生命周期的过程管理及企业项目资金投入管理，设有企业管理、项目管理、工业化管理、产品管理、数据大屏等模块。',
        duties: [
          '负责项目管理模块维护，包括全模块的主从表CURD以及日常BUG需求的维护',
          '负责Excel自定义优化导出，对若依框架进行进一步改造以符合客户需求',
          '负责用户权限控制模块，管理员可对用户进行可配置化管理，赋予指定用户相关权限',
        ],
      },
      {
        period: '2024.01 — 2025.04',
        tech: 'Python, Django, Pandas, SimpleUI, ExcelBI, Django-admin',
        title: '标准院质量数据可视化平台',
        subtitle: '工程质量数据处理与BI分析平台',
        desc: '为中国建筑标准设计研究院开发的质量数据处理平台，对质量数据管理及模型调用，实现产品、企业、区域质量研究，以前端可视化展示质量分析结果，覆盖质量发展、产品安全、企业画像和NQI内容。',
        duties: [
          '负责项目1/3接口模块，完成国际竞争力、品牌建设、监督抽查、首页大屏、投诉分析模块',
          '参与项目从研发到验收整个流程，完成项目接口文档的编写以及Model模型记录',
          '实现可视化后台自定义菜单模块，对客户数据进行可视化分析：脏数据清洗、数据脱敏等',
          '协助项目负责人完成项目验收，完成8000多字用户手册文档的编写',
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
        title: 'Java 微服务',
        level: '资深',
        items: ['SpringCloud', 'Dubbo', 'SpringBoot', 'Mybatis-Plus', 'Shiro', 'JWT'],
      },
      {
        title: '数据与中间件',
        level: '精通',
        items: ['MySQL 优化', 'Oracle', 'Redis', 'Elasticsearch', 'Kafka', 'Nacos'],
      },
      {
        title: 'AI 与工程化',
        level: '熟练',
        items: ['AI 大模型集成', '本地模型部署', 'Linux 运维', 'Git', 'RESTful', 'TCP/HTTP'],
      },
      {
        title: 'Python 与 C',
        level: '熟练',
        items: ['Django', 'Pandas', '数据处理', '数据清洗', 'BI 工具', 'C 语言'],
      },
    ],
  },

  /* ---------- 荣誉 ---------- */
  honors: {
    title: '荣誉奖项',
    items: [
      '国家励志奖学金（两次）',
      '腾讯·技术创作特训营"潜龙创作者"',
      '蓝桥杯全国软件大赛省赛二等奖',
      '全国蓝桥大数据应用开发"1+X"中级证书',
      '优秀毕业论文',
      '校级三好学生 / 优秀学生干部',
      '信息系"卓越之星"、"杰出工作者"',
      'CET-4 英语四级证书',
    ],
  },

  /* ---------- 联系 ---------- */
  contact: {
    label: '联系',
    title: '聊聊你的下一个项目',
    desc: '如果你正在寻找一位可靠的 Java 后端工程师，或者对以上项目有任何疑问，欢迎随时与我联系。',
    channels: [
      { type: 'phone',     icon: 'Phone',           href: 'tel:18175852201',      text: '181 7585 2201' },
      { type: 'email',     icon: 'Mail',            href: 'mailto:2279656909@qq.com', text: '2279656909@qq.com' },
      { type: 'blog',      icon: 'Globe',           href: 'https://wy-studio.cn', text: 'wy-studio.cn', external: true },
      { type: 'wechat',    icon: 'MessageCircle',   href: null,                   text: '公众号：忘忧Studio' },
    ],
    quote: {
      text: '良好的代码不仅是给机器看的，更是给人看的。',
      author: '颜松杰',
    },
    footer: '颜松杰',
  },
};

export default resumeData;
