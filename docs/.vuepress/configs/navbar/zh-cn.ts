import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZhCN: NavbarConfig = [
    {
        text: '入门',
        link: '/zh-cn/start/'
    },
    {
        text: '部署',
        link: '/zh-cn/deploy/'
    },
    {
        text: '激活',
        link: '/zh-cn/activate/'
    },
    {
        text: '常见问题',
        link: '/zh-cn/faq/'
    },
    {
        text: '更多',
        children: [
            {
                text: '工具箱',
                link: '/zh-cn/toolbox/'
            },
            {
                text: '设置',
                link: '/zh-cn/settings/'
            },
            {
                text: '命令',
                link: '/zh-cn/commands/'
            }
        ]
    },
    {
        text: '群组',
        children: [
            {
                text: 'QQ | 微信',
                link: 'https://otp.landian.vip/grouplink/qq.html'
            },
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