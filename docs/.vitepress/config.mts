import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en_us } from './en-us'
import { zh_cn } from './zh-cn'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', ...en_us },
        "zh-cn": { label: '简体中文', ...zh_cn }
    }
})
