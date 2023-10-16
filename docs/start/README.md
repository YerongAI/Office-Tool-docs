# Welcome

## Introduction

Office Tool Plus is a powerful and useful tool for Office Deployment.

Office Tool Plus is made based on [Office Deployment Tool](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool). It can deploy Office easily. It has integrated the `Thunder` and [Downloader](https://github.com/bezzad/Downloader) engine so that you can download Office faster. Certainly, you can use the little functions provided by Office Tool Plus to manage and activate Office.

The following products are supported:

- Microsoft 365.
- Office 2016, 2019, 2021.
- Visio 2016, 2019, 2021 and Visio Online Plan 2.
- Project 2016, 2019, 2021 and Project Online Desktop Client.

No matter what, Office Tool Plus is always your best helper.

## Download

Download Office Tool Plus from:

- [Office Tool Plus official website](http://otp.landian.vip/)

Differences between the versions:

- Includes runtime: Includes .NET Runtime, you can run Office Tool Plus without .NET Runtime installation.
- Normal: Only Office Tool Plus and base components.

> We recommend you to download Office Tool Plus which includes runtime.

Differences between the architecture:

- x86: Works on 32 bit, 64 bit and ARM64 of Windows. Supports `Thunder` engine. Also supports `Downloader` engine, but memory problem may occurred when using `Downloader` engine.
- x64: Works on 64 bit and ARM64 of Windows. Only supports `Downloader` engine.
- ARM64: Works on ARM64 of Windows. Better compatibility and performance for ARM64 platform, others are same as the x64.

### Unpack

Extract Office Tool Plus to a normal location, such as desktop. **Do NOT run Office Tool Plus without unpacking**.

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
├── shared (.NET Runtimes)
└── files
    ├── setup.exe (Microsoft Office Deployment Tool)
    ├── clean
    │   ├── x64 (Office activation cleaner for x64 and ARM64 system)
    │   └── x86 (Office activation cleaner for x86 system)
    ├── preferences (Office applications preferences data, provided by Microsoft)
    └── Thunder (files related to Thunder download acceleration)
```

Usually, Office Tool Plus will download the needed components and keep it the latest version automatically.

If some of the components are lost or cannot be downloaded automatically, we suggest you to re-download Office Tool Plus to fix this problems.
