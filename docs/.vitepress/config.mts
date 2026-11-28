import { defineConfig } from 'vitepress'
import { shared } from './shared.ts'
import { headConfig } from './head.ts'
import { en_us } from './en-us.ts'
import { zh_cn } from './zh-cn.ts'
import { zh_tw } from './zh-tw.ts'
import { ru } from './ru.ts'

export default defineConfig({
    ...shared,
    ...headConfig,
    locales: {
        root: { label: 'English', ...en_us },
        "zh-cn": { label: '简体中文', ...zh_cn },
        "zh-tw": { label: '繁體中文', ...zh_tw },
        "ru": { label: 'Русский', ...ru }
    }
})
