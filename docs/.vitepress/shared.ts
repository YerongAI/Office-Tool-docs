import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'Office Tool Plus',

  metaChunk: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0078D4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Office Tool Plus' }],
    ['meta', { property: 'og:title', content: 'Office Tool Plus | Documentation' }],
    ['meta', { property: 'og:image', content: 'https://img.lancdn.co/otp/global/x/header-x.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '600' }],
    ['meta', { property: 'og:url', content: 'https://www.officetool.plus/' }]
  ],

  themeConfig: {
    logo: '/favicon.ico',

    socialLinks: [
      { icon: 'tencentqq', link: 'https://www.coolhub.top/contact-us' },
      { icon: 'wechat', link: 'https://mp.weixin.qq.com/s/MQTr2Gj2l3Yw_R6tLKFHPQ' },
      { icon: 'telegram', link: 'https://t.me/s/otp_channel/' },
      { icon: 'discord', link: 'https://discord.gg/TpXTgfgf2a' },
      { icon: 'github', link: 'https://github.com/YerongAI/Office-Tool' }
    ],

    search: {
        provider: 'local'
    }
  }
})