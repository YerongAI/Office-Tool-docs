import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZhCN: SidebarConfig = {
    '/zh-cn/start/': [
        {
            text: '入门',
            children: [
                '/zh-cn/start/README.md',
                '/zh-cn/start/requirement.md'
            ]
        }
    ],
    '/zh-cn/deploy/': [
        {
            text: '部署',
            children: [
                '/zh-cn/deploy/README.md',
                '/zh-cn/deploy/modify.md'
            ]
        },
        {
            text: '配置',
            children: [
                '/zh-cn/deploy/settings/basic.md',
                '/zh-cn/deploy/settings/advanced.md'
            ]
        },
        {
            text: '创建 Office ISO',
            children: [
                '/zh-cn/deploy/create-iso/README.md',
                '/zh-cn/deploy/create-iso/basic.md',
                '/zh-cn/deploy/create-iso/default-config.md',
                '/zh-cn/deploy/create-iso/iso-command.md',
                '/zh-cn/deploy/create-iso/config-command.md',
                '/zh-cn/deploy/create-iso/deploy-command.md'
            ]
        }
    ],
    '/zh-cn/activate': [
        {
            text: '激活',
            children: [
                '/zh-cn/activate/README.md',
                '/zh-cn/activate/activate-steps.md'
            ]
        }
    ],
    '/zh-cn/toolbox': [
        {
            text: '工具箱',
            children: [
                '/zh-cn/toolbox/README.md',
                '/zh-cn/toolbox/office.md',
                '/zh-cn/toolbox/windows.md'
            ]
        }
    ],
    '/zh-cn/settings': [
        {
            text: '设置',
            children: [
                '/zh-cn/settings/README.md'
            ]
        }
    ],
    '/zh-cn/commands': [
        {
            text: '程序命令',
            children: [
                '/zh-cn/commands/README.md',
                '/zh-cn/commands/build-in.md',
                '/zh-cn/commands/deploy.md',
                '/zh-cn/commands/activate.md'
            ]
        }
    ],
    '/zh-cn/faq': [
        {
            text: '疑难解答',
            children: [
                '/zh-cn/faq/README.md',
                '/zh-cn/faq/application.md',
                '/zh-cn/faq/deploy.md',
                '/zh-cn/faq/activation.md'
            ]
        }
    ]
}