import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: 'Office Tool Plus',

    metaChunk: true,

    themeConfig: {
        logo: '/favicon.ico',

        socialLinks: [
            { icon: 'tencentqq', link: 'https://blog.yerong.org/contact-us' },
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