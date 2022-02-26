import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import type { SidebarConfig } from "@vuepress/theme-default";
let sidebar: SidebarConfig = {
  "/": [
    {
      text: "教程",
      children: [
        "intro.md",
        "ex0.md",
        "ex1.md",

        "ex2.md",

        "ex3.md",

        "ex4.md",
        "ex5.md",
        "ex6.md",
        "ex7.md",
        "ex8.md",
        "ex9.md",
        "ex10.md",
        "ex11.md",
        "ex12.md",
        "ex13.md",
        "ex14.md",
        "ex15.md",
        "ex16.md",
        "ex17.md",
        "ex18.md",
        "ex19.md",
        "ex20.md",
        "ex21.md",
        "ex22.md",
        "ex23.md",
        "ex24.md",
        "ex25.md",
        "ex26.md",
        "ex27.md",
        "ex28.md",
        "ex29.md",
        "ex30.md",
        "next.md",
        "mdi.md",
      ],
    },
  ],
};

export default defineUserConfig<DefaultThemeOptions>({
  base: "/llthw-zh/",

  // site-level locales config

  lang: "zh-CN",
  title: "VuePress",
  description: "Vue 驱动的静态网站生成器",

  themeConfig: {
    docsDir: "docs",

    // theme-level locales config

    // navbar

    selectLanguageName: "简体中文",
    selectLanguageText: "选择语言",
    selectLanguageAriaLabel: "选择语言",

    // sidebar
    sidebar: sidebar,

    // page meta
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "贡献者",

    // custom containers
    tip: "提示",
    warning: "注意",
    danger: "警告",

    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",
    darkMode: true,
    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
  },

  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  openIssueText: "你认为该查询应该有结果？",
                  openIssueLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    ],

    [
      "vuepress-plugin-clipboard",
      {
        align: "top",
      },
    ],

    // only enable shiki plugin in production mode
  ],
});
