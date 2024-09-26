import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh_cn = defineConfig({
    lang: 'zh-CN',
    description: "Office Tool Plus 是一个强大且实用的 Office 部署&管理工具。",
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh-cn/introduction/': { base: '/zh-cn/introduction/', items: sidebarIntroduction() },
            '/zh-cn/usage/': { base: '/zh-cn/usage/', items: sidebarUsage() },
            '/zh-cn/help/': { base: '/zh-cn/help/', items: sidebarHelp() }
        },

        editLink: {
            pattern: 'https://github.com/YerongAI/Office-Tool-docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },

        footer: {
            message: '<a href="https://github.com/YerongAI/Office-Tool?tab=MIT-1-ov-file#readme" target="_blank">MIT</a> Licensed',
            copyright: `Copyright © 2016 - ${new Date().getFullYear()} <a href="https://www.officetool.plus/" target="_blank">Yerong</a> All Rights Reserved.`
        },

        docFooter: {
            prev: '← 上一页',
            next: '下一页 →'
        },

        outline: {
            label: '页面目录'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '介绍',
            link: '/zh-cn/introduction/what-is-otp',
            activeMatch: '/zh-cn/introduction/'
        },
        {
            text: '使用方法',
            link: '/zh-cn/usage/deploy/clean-deployment',
            activeMatch: '/zh-cn/usage/'
        },
        {
            text: '帮助',
            link: '/zh-cn/help/about',
            activeMatch: '/zh-cn/help/'
        }
    ]
}

function sidebarIntroduction(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "介绍",
            collapsed: false,
            items: [
                { text: '什么是 Office Tool Plus?', link: 'what-is-otp' },
                { text: '系统要求', link: 'requirement' },
                { text: '下载', link: 'download' }
            ]
        },
        {
            text: "页面",
            collapsed: false,
            items: [
                { text: '部署', link: 'pages/deploy-page' },
                { text: '激活', link: 'pages/activate-page' },
                { text: '工具箱', link: 'pages/toolbox-page' },
                { text: '文档转换', link: 'pages/convert-doc-page' },
                { text: '哈希值校验', link: 'pages/check-hash-page' },
            ]
        }
    ]
}

function sidebarUsage(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '部署',
            collapsed: false,
            items: [
                { text: '初次安装', link: 'deploy/clean-deployment' },
                { text: '修改安装', link: 'deploy/modify-deployment' },
                { text: '基础设置', link: 'deploy/settings/basic' },
                { text: '高级设置', link: 'deploy/settings/advanced' }
            ]
        },
        {
            text: '创建 Office ISO',
            collapsed: false,
            items: [
                { text: '准备', link: 'deploy/create-iso/prepare' },
                { text: '不含任何配置的 ISO', link: 'deploy/create-iso/no-config' },
                { text: '包含默认配置的 ISO', link: 'deploy/create-iso/default-config' },
                { text: '使用 ISO 命令的 ISO', link: 'deploy/create-iso/iso-command' },
                { text: '使用 loadconfig 命令的 ISO', link: 'deploy/create-iso/config-command' },
                { text: '完全自定义安装的 ISO', link: 'deploy/create-iso/deploy-command' },
            ]
        },
        {
            text: '激活',
            collapsed: false,
            items: [
                { text: '许可证是什么？', link: 'activate/what-is-license' },
                { text: '激活管理', link: 'activate/manage' },
                { text: '在线激活', link: 'activate/online-activation' },
                { text: '电话激活', link: 'activate/phone-activation' },
                { text: 'KMS 激活', link: 'activate/kms-activation' }
            ]
        },
        {
            text: '工具箱',
            collapsed: false,
            items: [
                { text: '常规工具', link: 'toolbox/general' },
                { text: 'Office 工具', link: 'toolbox/office' },
                { text: 'Windows 工具', link: 'toolbox/windows' }
            ]
        },
        {
            text: '命令',
            collapsed: false,
            items: [
                { text: '键盘快捷键', link: 'command/keyboard' },
                { text: '应用程序命令', link: 'command/application' },
                { text: '部署命令', link: 'command/deploy' },
                { text: '激活命令', link: 'command/activate' }
            ]
        },
        {
            text: '其它',
            collapsed: false,
            items: [
                { text: '哈希值校验' },
                { text: '设置', link: 'settings' },
                { text: '更新' }
            ]
        }
    ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '帮助',
            collapsed: false,
            items: [
                { text: '关于', link: 'about' },
                { text: '程序', link: 'application' },
                { text: '部署', link: 'deploy' },
                { text: '激活', link: 'activation' },
            ]
        }
    ]
}