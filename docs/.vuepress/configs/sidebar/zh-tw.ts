import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZhTW: SidebarConfig = {
    '/zh-tw/start/': [
        {
            text: '入门',
            children: [
                '/zh-tw/start/README.md',
                '/zh-tw/start/requirement.md'
            ]
        }
    ],
    '/zh-tw/deploy/': [
        {
            text: '部署',
            children: [
                '/zh-tw/deploy/README.md',
                '/zh-tw/deploy/modify.md'
            ]
        },
        {
            text: '配置',
            children: [
                '/zh-tw/deploy/settings/basic.md',
                '/zh-tw/deploy/settings/advanced.md'
            ]
        },
        {
            text: '创建 Office ISO',
            children: [
                '/zh-tw/deploy/create-iso/README.md',
                '/zh-tw/deploy/create-iso/basic.md',
                '/zh-tw/deploy/create-iso/default-config.md',
                '/zh-tw/deploy/create-iso/iso-command.md',
                '/zh-tw/deploy/create-iso/config-command.md',
                '/zh-tw/deploy/create-iso/deploy-command.md'
            ]
        }
    ],
    '/zh-tw/activate': [
        {
            text: '激活',
            children: [
                '/zh-tw/activate/README.md',
                '/zh-tw/activate/activate-steps.md'
            ]
        }
    ],
    '/zh-tw/toolbox': [
        {
            text: '工具箱',
            children: [
                '/zh-tw/toolbox/README.md',
                '/zh-tw/toolbox/office.md',
                '/zh-tw/toolbox/windows.md'
            ]
        }
    ],
    '/zh-tw/settings': [
        {
            text: '设置',
            children: [
                '/zh-tw/settings/README.md'
            ]
        }
    ],
    '/zh-tw/commands': [
        {
            text: '程序命令',
            children: [
                '/zh-tw/commands/README.md',
                '/zh-tw/commands/build-in.md',
                '/zh-tw/commands/deploy.md',
                '/zh-tw/commands/activate.md'
            ]
        }
    ],
    '/zh-tw/faq': [
        {
            text: '疑难解答',
            children: [
                '/zh-tw/faq/README.md',
                '/zh-tw/faq/application.md',
                '/zh-tw/faq/deploy.md',
                '/zh-tw/faq/activation.md'
            ]
        }
    ]
}