import { defineConfig } from 'vitepress'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd()) 
const gaId = env.VITE_GOOGLE_ANALYTICS_ID

export const headConfig = defineConfig({
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#0078D4' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'Office Tool Plus' }],
        ['meta', { property: 'og:title', content: 'Office Tool Plus | Documentation' }],
        ['meta', { property: 'og:image', content: 'https://www.officetool.plus/images/office-tool-plus-logo-large.webp' }],
        ['meta', { property: 'og:image:width', content: '640' }],
        ['meta', { property: 'og:image:height', content: '640' }],
        ['meta', { property: 'og:url', content: 'https://www.officetool.plus/' }],
        ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` }],
        ['script', {},
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}');
            `
        ]
    ]
})