import { defineConfig, type DefaultTheme } from 'vitepress'

export const en_us = defineConfig({
    lang: 'en-US',
    description: "Office Tool Plus is a powerful and useful tool for Office deployment and management.",
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/introduction/': { base: '/introduction/', items: sidebarIntroduction() },
            '/usage/': { base: '/usage/', items: sidebarUsage() },
            '/help/': { base: '/help/', items: sidebarHelp() }
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
            prev: '← Previous page',
            next: 'Next page →'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Introduction',
            link: '/introduction/what-is-otp',
            activeMatch: '/introduction/'
        },
        {
            text: 'Usage',
            link: '/usage/deploy/clean-deployment',
            activeMatch: '/usage/'
        },
        {
            text: 'Help',
            link: '/help/about',
            activeMatch: '/help/'
        }
    ]
}

function sidebarIntroduction(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                { text: 'What is Office Tool Plus?', link: 'what-is-otp' },
                { text: 'System requirements', link: 'requirement' },
                { text: 'Download and use', link: 'download' }
            ]
        },
        {
            text: "Pages",
            collapsed: false,
            items: [
                { text: 'Home', link: 'pages/home' },
                { text: 'Deploy', link: 'pages/deploy' },
                { text: 'Activate', link: 'pages/activate' },
                { text: 'Toolbox', link: 'pages/toolbox' },
                { text: 'Convert documents', link: 'pages/convert-doc' },
                { text: 'Check hash', link: 'pages/check-hash' },
            ]
        }
    ]
}

function sidebarUsage(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Deploy',
            collapsed: false,
            items: [
                { text: 'Clean deploy', link: 'deploy/clean-deployment' },
                { text: 'Modify', link: 'deploy/modify-deployment' },
                { text: 'Basic settings', link: 'deploy/settings/basic' },
                { text: 'Advanced settings', link: 'deploy/settings/advanced' }
            ]
        },
        {
            text: 'Create Office ISO',
            collapsed: false,
            items: [
                { text: 'Prepare', link: 'deploy/create-iso/prepare' },
                { text: '不含任何配置的 ISO', link: 'deploy/create-iso/no-config' },
                { text: '包含默认配置的 ISO', link: 'deploy/create-iso/default-config' },
                { text: '使用 ISO 命令的 ISO', link: 'deploy/create-iso/iso-command' },
                { text: '使用 loadconfig 命令的 ISO', link: 'deploy/create-iso/config-command' },
                { text: '完全自定义安装的 ISO', link: 'deploy/create-iso/deploy-command' },
            ]
        },
        {
            text: 'Activation',
            collapsed: false,
            items: [
                { text: 'What is license?', link: 'activate/what-is-license' },
                { text: 'Activation management', link: 'activate/manage' },
                { text: 'Online activation', link: 'activate/online-activation' },
                { text: 'Phone activation', link: 'activate/phone-activation' },
                { text: 'KMS activation', link: 'activate/kms-activation' }
            ]
        },
        {
            text: 'Toolbox',
            collapsed: false,
            items: [
                { text: 'General tools', link: 'toolbox/general' },
                { text: 'Office tools', link: 'toolbox/office' },
                { text: 'Windows tools', link: 'toolbox/windows' }
            ]
        },
        {
            text: 'Command',
            collapsed: false,
            items: [
                { text: 'Keyboard shortcuts', link: 'command/keyboard' },
                { text: 'Application commands', link: 'command/application' },
                { text: 'Deploy commands', link: 'command/deploy' },
                { text: 'Activation commands', link: 'command/activate' }
            ]
        },
        {
            text: 'Others',
            collapsed: false,
            items: [
                { text: 'Check hash' },
                { text: 'Settings', link: 'settings' },
                { text: 'Updates' }
            ]
        }
    ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Help',
            collapsed: false,
            items: [
                { text: 'About', link: 'about' },
                { text: 'Application', link: 'application' },
                { text: 'Deploy', link: 'deploy' },
                { text: 'Activation', link: 'activation' }
            ]
        }
    ]
}