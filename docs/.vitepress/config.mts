import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { headConfig } from './head'
import { en_us } from './en-us'
import { zh_cn } from './zh-cn'
import { zh_tw } from './zh-tw'

export default defineConfig({
    ...shared,
    ...headConfig,
    locales: {
        root: { label: 'English', ...en_us },
        "zh-cn": { label: '简体中文', ...zh_cn },
        "zh-tw": { label: '繁體中文', ...zh_tw }
    }
})
