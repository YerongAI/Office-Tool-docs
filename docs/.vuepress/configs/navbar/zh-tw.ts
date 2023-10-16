import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZhTW: NavbarConfig = [
    {
        text: '入门',
        link: '/zh-tw/start/'
    },
    {
        text: '部署',
        link: '/zh-tw/deploy/'
    },
    {
        text: '激活',
        link: '/zh-tw/activate/'
    },
    {
        text: '常见问题',
        link: '/zh-tw/faq/'
    },
    {
        text: '更多',
        children: [
            {
                text: '工具箱',
                link: '/zh-tw/toolbox/'
            },
            {
                text: '设置',
                link: '/zh-tw/settings/'
            },
            {
                text: '命令',
                link: '/zh-tw/commands/'
            }
        ]
    },
    {
        text: '群组',
        children: [
            {
                text: 'Telegram',
                link: 'https://otp.landian.vip/grouplink/telegram.html'
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/TpXTgfgf2a'
            }
        ]
    }
]