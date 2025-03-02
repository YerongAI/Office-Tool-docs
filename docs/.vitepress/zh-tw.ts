import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh_tw = defineConfig({
    lang: 'zh-TW',
    description: "Office Tool Plus is a powerful and useful tool for Office deployment and management.",
    themeConfig: {
        nav: nav(),

        socialLinks: [
            { icon: 'telegram', link: 'https://t.me/s/otp_channel/' },
            { icon: 'discord', link: 'https://discord.gg/TpXTgfgf2a' },
            { icon: 'github', link: 'https://github.com/YerongAI/Office-Tool' }
        ],

        sidebar: {
            '/zh-tw/introduction/': { base: '/zh-tw/introduction/', items: sidebarIntroduction() },
            '/zh-tw/usage/': { base: '/zh-tw/usage/', items: sidebarUsage() },
            '/zh-tw/help/': { base: '/zh-tw/help/', items: sidebarHelp() }
        },

        editLink: {
            pattern: 'https://github.com/YerongAI/Office-Tool-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: '<a href="https://github.com/YerongAI/Office-Tool?tab=MIT-1-ov-file#readme" target="_blank">MIT</a> Licensed',
            copyright: `Copyright © 2016 - ${new Date().getFullYear()} <a href="https://www.officetool.plus/" target="_blank">Yerong</a> All Rights Reserved.`
        },

        docFooter: {
            prev: '← 上一頁',
            next: '下一頁 →'
        },
        outline: {
            label: '頁面目錄'
        },
        lastUpdated: {
            text: '最後更新於',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        langMenuLabel: '其它語言',
        returnToTopLabel: '回到最上面',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式'

    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '介紹',
            link: '/zh-tw/introduction/what-is-otp',
            activeMatch: '/zh-tw/introduction/'
        },
        {
            text: '使用指南',
            link: '/zh-tw/usage/deploy/clean-deployment',
            activeMatch: '/zh-tw/usage/'
        },
        {
            text: '取得協助',
            link: '/zh-tw/help/about',
            activeMatch: '/zh-tw/help/'
        }
    ]
}

function sidebarIntroduction(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "介紹",
            collapsed: false,
            items: [
                { text: '什麼是 Office Tool Plus', link: 'what-is-otp' },
                { text: '系統需求', link: 'requirement' },
                { text: '下載與使用', link: 'download' }
            ]
        },
        {
            text: "頁面",
            collapsed: false,
            items: [
                { text: '主頁', link: 'pages/home' },
                { text: '部署', link: 'pages/deploy' },
                { text: '啟用', link: 'pages/activate' },
                { text: '工具箱', link: 'pages/toolbox' },
                { text: '轉換文件', link: 'pages/convert-doc' },
                { text: '檢查雜湊碼', link: 'pages/check-hash' },
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
                { text: '首次部署', link: 'deploy/clean-deployment' },
                { text: '變更部署', link: 'deploy/modify-deployment' },
                { text: '基礎設定', link: 'deploy/settings/basic' },
                { text: '進階設定', link: 'deploy/settings/advanced' }
            ]
        },
        {
            text: '建立 Office ISO',
            collapsed: false,
            items: [
                { text: '前置作業', link: 'deploy/create-iso/prepare' },
                { text: "無設定檔模式", link: "deploy/create-iso/no-config" },
                { text: "預設設定模式", link: "deploy/create-iso/default-config" },
                { text: "使用 ISO 命令", link: "deploy/create-iso/iso-command" },
                { text: "使用 /loadconfig 命令", link: "deploy/create-iso/config-command" },
                { text: "使用 /deploy 命令", link: "deploy/create-iso/deploy-command" }

            ]
        },
        {
            text: '啟用',
            collapsed: false,
            items: [
                { text: "什麼是 Office 授權？", link: "activate/what-is-license" },
                { text: "啟用管理", link: "activate/manage" },
                { text: "線上啟用", link: "activate/online-activation" },
                { text: "電話啟用", link: "activate/phone-activation" },
                { text: "KMS 啟用", link: "activate/kms-activation" }
            ]
        },
        {
            text: '工具箱',
            collapsed: false,
            items: [
                { text: "一般工具", link: "toolbox/general" },
                { text: "Office 工具", link: "toolbox/office" },
                { text: "Windows 工具", link: "toolbox/windows" }
            ]
        },
        {
            text: '命令',
            collapsed: false,
            items: [
                { text: "鍵盤快速鍵", link: "command/keyboard" },
                { text: "程式命令", link: "command/application" },
                { text: "部署命令", link: "command/deploy" },
                { text: "啟用命令", link: "command/activate" },
                { text: "工具箱命令", link: "command/toolbox" }
            ]
        },
        {
            text: '其它',
            collapsed: false,
            items: [
                { text: "雜湊碼檢查" },
                { text: "程式設定", link: "settings" },
                { text: "更新" }
            ]
        }
    ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '取得協助',
            collapsed: false,
            items: [
                { text: '關於問答集', link: 'about' },
                { text: '程式問答集', link: 'application' },
                { text: '部署問答集', link: 'deploy' },
                { text: '啟用問答集', link: 'activation' }
            ]
        }
    ]
}