# What is Office Tool Plus?

Office Tool Plus is a powerful and useful tool for Office Deployment.

Office Tool Plus is made based on [Office Deployment Tool](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool). It can deploy Office easily. It has integrated the [Downloader](https://github.com/bezzad/Downloader) engine so that you can download Office faster. Certainly, you can use the little functions provided by Office Tool Plus to manage and activate Office.

The following products are supported:

- Microsoft 365.
- Office 2016, 2019, 2021, 2024.
- Visio 2016, 2019, 2021, 2024 and Visio Online Plan 2.
- Project 2016, 2019, 2021, 2024 and Project Online Desktop Client.

## Features

- Create an Office installation configuration. The configuration can be exported locally or imported from a local source or the web.
- Download Office with support for all Office channels and languages.
- Install Office or modify an existing installation, such as adding new products, languages and applications, or uninstalling them.
- Create an Office ISO with support for default and silent installation configurations.
- Activate Office with support for online, phone and KMS activation.
- Manage Office activation, including license, key and KMS management.
- Change the Office update channel and upgrade or downgrade Office without reinstalling it.
- Remove Office, including forced removal when it cannot be uninstalled normally, supports all Office versions.
- Includes integrated Office tools such as resetting settings and fixing Office issues.
- Convert Office documents using Office COM, ensuring fast and stable performance.
- Personalize the theme and customize your own Office Tool Plus.

::: tip Attention

- Office Tool Plus only provides activation management. You need to have a genuine license to activate your products.

:::

## Components and Structure

``` txt
Office Tool
├── Office Tool Plus.exe (main program)
├── Office Tool Plus.Console.exe (Console Helper)
├── hostfxr.dll (.NET Host)
├── shared (.NET Runtimes)
└── files
    ├── setup.exe (Microsoft Office Deployment Tool)
    └── preferences (Office applications preferences data, provided by Microsoft)
```

Usually, Office Tool Plus will download the needed components and keep it the latest version automatically.

If some of the components are lost or cannot be downloaded automatically, we suggest you to re-download Office Tool Plus to fix this problems.
