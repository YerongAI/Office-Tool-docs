# What is Office Tool Plus?

Office Tool Plus is a powerful and useful tool for Office Deployment.

Office Tool Plus is made based on [Office Deployment Tool](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool). It can deploy Office easily. It has integrated the `Thunder` and [Downloader](https://github.com/bezzad/Downloader) engine so that you can download Office faster. Certainly, you can use the little functions provided by Office Tool Plus to manage and activate Office.

The following products are supported:

- Microsoft 365.
- Office 2016, 2019, 2021, 2024.
- Visio 2016, 2019, 2021, 2024 and Visio Online Plan 2.
- Project 2016, 2019, 2021, 2024 and Project Online Desktop Client.

## Features

- Create Office installation configuration. The config can be exported to local, or imported from local or web.
- Download Office, supporting `ALL` Office channels and `ALL` Office languages.
- Install Office or modify the existing Office, such as adding new products, languages and applications, or uninstalling products and applications.
- Create Office ISO, supports default installation config and silent installation config.
- Activate Office. Support online activation, phone activation and KMS activation.
- Support Office activation management, including license management, key management and KMS management.
- Change Office update channel, support upgrading/downgrading Office without reinstalling Office.
- Remove Office, force remove Office when it can’t be uninstalled in normal way, supports all version of Office.
- Integrated Office tools, including resetting settings, fixing Office problems.
- Convert Office documents, based on Office COM. it's fast and stable.
- Personalize theme, you can build your special Office Tool Plus.

::: tip Attention

1. Office Tool Plus only provides activation management. You need to have a genuine license to activate your products.

:::

## Components and Structure

``` txt
Office Tool
├── Office Tool Plus.exe (main program)
├── Office Tool Plus.Console.exe (Console Helper)
├── hostfxr.dll (.NET Host)
├── shared (.NET Runtime)
└── files
    ├── setup.exe (Microsoft Office Deployment Tool)
    ├── preferences (Office applications preferences data, provided by Microsoft)
    └── Thunder (files related to Thunder download acceleration)
```

Usually, Office Tool Plus will download the needed components and keep it the latest version automatically.

If some of the components are lost or cannot be downloaded automatically, we suggest you to re-download Office Tool Plus to fix this problems.
