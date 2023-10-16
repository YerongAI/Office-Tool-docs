import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import {
  head,
  navbarEnUS,
  navbarZhCN,
  navbarZhTW,
  sidebarEnUS,
  sidebarZhCN,
  sidebarZhTW,
} from './configs/index.js'

export default defineUserConfig({
  base: '/',

  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Office Tool Plus docs',
      description: 'Office Tool Plus documentation.',
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'Office Tool Plus 文档',
      description: 'Office Tool Plus 帮助文档',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: 'Office Tool Plus 文档',
      description: 'Office Tool Plus 帮助文档',
    }
  },

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search'
        },
        '/zh-cn/': {
          placeholder: '搜索'
        },
        '/zh-tw/': {
          placeholder: '搜尋'
        }
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-L3WG8DCE0S'
    }),
  ],

  // configure default theme
  theme: defaultTheme({
    logo: '/logo.ico',
    repo: 'YerongAI/Office-Tool-docs',
    docsDir: 'docs',
    sidebarDepth: 1,

    // theme-level locales config
    locales: {
       // English locale config
      '/': {
        // navbar
        navbar: navbarEnUS,
        // sidebar
        sidebar: sidebarEnUS,
      },

      // Simplified Chinese
      '/zh-cn/': {
        // navbar
        navbar: navbarZhCN,
        selectLanguageName: '简体中文',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZhCN,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏'
      },

      // 
      '/zh-tw/': {
        // navbar
        navbar: navbarZhTW,
        selectLanguageName: '繁體中文',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZhTW,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏'
      }
    },

    themePlugins: {
      // Disable git plugin, git plugin shows contributor and last update time.
      git: false
    },
  })
})