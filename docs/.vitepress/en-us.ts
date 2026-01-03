import { defineConfig, type DefaultTheme } from 'vitepress'

export const en_us = defineConfig({
    lang: 'en-US',
    description: "Office Tool Plus is a powerful and useful tool for Office deployment and management.",
    themeConfig: {
        nav: nav(),

        socialLinks: [
            { icon: 'telegram', link: 'https://t.me/s/otp_channel/' },
            { icon: 'discord', link: 'https://discord.gg/TpXTgfgf2a' },
            { icon: 'github', link: 'https://github.com/YerongAI/Office-Tool' }
        ],

        sidebar: {
            '/introduction/': { base: '/introduction/', items: sidebarIntroduction() },
            '/usage/': { base: '/usage/', items: sidebarUsage() },
            '/help/': { base: '/help/', items: sidebarHelp() },
            '/office/': { base: '/office/', items: sidebarOffice() }
        },

        editLink: {
            pattern: 'https://github.com/YerongAI/Office-Tool-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
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
            link: '/help/application',
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
                { text: 'No configs', link: 'deploy/create-iso/no-config' },
                { text: 'Default config', link: 'deploy/create-iso/default-config' },
                { text: 'Use ISO command', link: 'deploy/create-iso/iso-command' },
                { text: 'Use loadconfig commands', link: 'deploy/create-iso/config-command' },
                { text: 'Use deploy commands', link: 'deploy/create-iso/deploy-command' },
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
                { text: 'Activation commands', link: 'command/activate' },
                { text: 'Toolbox commands', link: 'command/toolbox' }
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
                { text: 'Application', link: 'application' },
                { text: 'Deploy', link: 'deploy' },
                { text: 'Activation', link: 'activation' },
                { text: 'Office', link: 'office' }
            ]
        }
    ]
}

function sidebarOffice(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Office Data',
            collapsed: false,
            items: [
                { text: 'Update channel', link: 'channel' },
                { text: 'Language', link: 'language' },
                { text: 'Product', link: 'product' },
                { text: 'Product Key', link: 'product-key' }
            ]
        }
    ]
}