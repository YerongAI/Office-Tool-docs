import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: `/logo.ico`,
        },
    ],
    ['meta', { name: 'application-name', content: 'Office Tool Plus' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Office Tool Plus' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
        'link',
        { rel: 'apple-touch-icon', href: `/logo.ico` },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#0078D4' }],
    ['meta', { name: 'theme-color', content: '#0078D4' }],
]