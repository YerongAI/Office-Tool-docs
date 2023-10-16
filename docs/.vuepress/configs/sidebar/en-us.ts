import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEnUS: SidebarConfig = {
    '/start/': [
        {
            text: 'Start',
            children: [
                '/start/README.md',
                '/start/requirement.md'
            ]
        }
    ],
    '/deploy/': [
        {
            text: 'Deploy',
            children: [
                '/deploy/README.md',
                '/deploy/modify.md'
            ]
        },
        {
            text: 'Configuration',
            children: [
                '/deploy/settings/basic.md',
                '/deploy/settings/advanced.md'
            ]
        },
        {
            text: 'Create Office ISO',
            children: [
                '/deploy/create-iso/README.md',
                '/deploy/create-iso/basic.md',
                '/deploy/create-iso/default-config.md',
                '/deploy/create-iso/iso-command.md',
                '/deploy/create-iso/config-command.md',
                '/deploy/create-iso/deploy-command.md'
            ]
        }
    ],
    '/activate': [
        {
            text: 'Activate',
            children: [
                '/activate/README.md',
                '/activate/activate-steps.md'
            ]
        }
    ],
    '/toolbox': [
        {
            text: 'Toolbox',
            children: [
                '/toolbox/README.md',
                '/toolbox/office.md',
                '/toolbox/windows.md'
            ]
        }
    ],
    '/settings': [
        {
            text: 'Settings',
            children: [
                '/settings/README.md'
            ]
        }
    ],
    '/commands': [
        {
            text: 'Application commands',
            children: [
                '/commands/README.md',
                '/commands/build-in.md',
                '/commands/deploy.md',
                '/commands/activate.md'
            ]
        }
    ],
    '/faq': [
        {
            text: 'FAQ',
            children: [
                '/faq/README.md',
                '/faq/application.md',
                '/faq/deploy.md',
                '/faq/activation.md'
            ]
        }
    ]
}