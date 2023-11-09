# Basic settings

## Mode

| Mode            | Tip |
| :--             | :-- |
| Edit config     | Create or modify XML config, can not start installation.        |
| Download        | Download Office installation files, can not start installation. |
| Install         | Install, uninstall or modify Office.                            |
| Create ISO file | Packaging the Office installation files with Office Tool Plus.  |

The Office installation files contains Office, Visio and Project, provided by Microsoft.

## Architecture

32-bit of Office is the default choice. Computers running 64-bit versions of Windows generally have more resources such as processing power and memory, than their 32-bit predecessors. Also, 64-bit applications can access more memory than 32-bit applications. Therefore, if your scenarios include large files and/or working with large data sets and your computer is running 64-bit version of Windows, 64-bit is the right choice when:

- You’re working with large data sets, like enterprise-scale Excel workbooks with complex calculations, many pivot tables, data connections to external databases, Power Pivot, 3D Map, Power View, or Get & Transform. The 64-bit version of Microsoft 365 may perform better in these cases.
- You’re working with extremely large pictures, videos, or animations in PowerPoint. The 64-bit version of Microsoft 365 may be better suited to handle these complex slide decks.
- You’re working with files over 2 GB in Project, especially if the project has many sub-projects.
- You’re developing in-house Microsoft 365 solutions like add-ins or document-level customization. Using the 64-bit version of Microsoft 365 lets you deliver a 64-bit version of those solutions as well as a 32-bit version.
- You’re working with the Large Number data type in Access, and while this data type is supported by 32-bit Access, you may see unexpected results when executing code or expressions that use native 32-bit VBA libraries. 64-bit VBA provides the LongLong data type which fully supports large numbers.

For more information please refer to [Choose between the 64-bit or 32-bit version of Office](https://support.microsoft.com/en-us/office/choose-between-the-64-bit-or-32-bit-version-of-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261).

::: tip Tip

If you are using ARM64-based Windows, you can select ARM64 (64-bit compatible) for better performance and compatibility.

:::

## Update channel

In most cases, `Current Channel` is the default channel. The table below lists the differences between the channels:

| Update Channel                   | Channel ID        | Release frequency                                | Feature updates                    |
| :--                              | :--               | :--                                              | :--                                |
| Current Channel                  | Current           | At least once a month, but on no set schedule    | Same as release frequency          |
| Semi-Annual Enterprise Channel   | SemiAnnual        | Once a month, on the second Tuesday of the month | Twice a year (in January and July) |
| Monthly Enterprise Channel       | MonthlyEnterprise | Once a month, on the second Tuesday of the month | Same as release frequency          |
| Office 2019 Perpetual Enterprise | PerpetualVL2019   | Once a month, on the second Tuesday of the month | None                               |
| Office 2021 Perpetual Enterprise | PerpetualVL2021   | Once a month, on the second Tuesday of the month | None                               |

> The Perpetual Enterprise channel is a dedicated channel for Office 2019/2021 volume products.

All of the channels listed in the table are stable channels and can be used on a daily basis.

Each channel releases security updates (if needed) on the second Tuesday of each month, which is scheduled.

For more information please refer to [Overview of update channels for Microsoft 365 Apps](https://docs.microsoft.com/en-us/deployoffice/overview-update-channels).

## Modules

### Office Deployment Tool

Office Deployment Tool is an official Microsoft tool that provides complete support for deploying Office.

### Office Tool Plus

Our module enables most of the features of the Office Deployment Tool. The following table lists the differences between them:

| Functions                                     | Office Deployment Tool | Office Tool Plus |
| :--                                           | :--                    | :--              |
| Remove existing MSI versions of Office        | ✓ | × |
| Install the same languages as the MSI version | ✓ | × |
| Use internal products and channels            | × | ✓ |
| Install internal products                     | × | ✓ |

We recommend prioritizing the use of the Office Deployment Tool, and should only choose Office Tool Plus if there are issues with the Office Deployment Tool that cannot be resolved, or if there are special needs.

## Products

购买了 Microsoft 365 的用户，添加产品的时候选择 Microsoft 365 产品即可，具体视你所拥有的授权而选择家庭版、个人版或企业版。

购买了 Office 2019/2021 的用户，按照自己购买的版本选择即可，例如家庭和学生版，或者专业增强版。

如果需要使用 KMS 或 MAK 激活，请安装批量许可证产品，例如 Office 2019 批量许可证或 Office 2021 批量许可证。

> 不确定自己是否拥有 Office 授权？登录你的[个人账户](https://account.microsoft.com/services/)或者[企业账户](https://portal.office.com/account/?ref=MeControl#subscriptions)进行验证。

::: details Office 365 产品对照表

| Subscription plan  | 产品 ID  |
| :--                   |:--:|
| 适用于企业的 Microsoft 365 应用 | O365ProPlusRetail |
| Office 365 企业版 E3 | O365ProPlusRetail |
| Office 365 企业版 E4 | O365ProPlusRetail |
| Office 365 企业版 E5 | O365ProPlusRetail |
| Office 365 中型企业版 | O365ProPlusRetail |
| Microsoft 365 应用商业版 | O365BusinessRetail |
| Microsoft 365 商业标准版 | O365BusinessRetail |
| Office 小型企业高级版 | O365SmallBusPremRetail |
| Microsoft 365 E3 | O365ProPlusRetail |
| Microsoft 365 E5 | O365ProPlusRetail |
| Microsoft 365 商业高级版 | O365BusinessRetail |

:::

### Applications

应用程序会随你选择的产品不同而显示不同的内容。

`Groove` 代表的是 OneDrive for Business，`Lync` 代表的是 Skype for Business。某些应用程序（例如 Teams 和 OneDrive）可能需要重启系统才能完成安装。

Bing 是一个用于 Chrome 和 Edge 的扩展，若要获取更多信息，请访问 [Microsoft 必应搜索和 Microsoft 365 企业应用版](https://docs.microsoft.com/zh-cn/deployoffice/microsoft-search-bing).

选择 Visio 或 Project 等产品时，由于其本身为一个不可选组件，因此不会出现在应用程序列表中。

有关产品和应用程序的信息，可以查看 [Office Products Information](https://www.coolhub.top/tech-articles/products.html).

## Languages

可以添加一个语言，也可以添加多个语言，列表中的首个完整类型的语言决定了 Shell UI 区域性，包括快捷方式、右键单击关联菜单和工具提示。如果决定要在初始安装后更改 Shell UI 语言，必须重新安装 Office。

如果你没有添加语言，安装 Office 时将会自动匹配系统语言，如果系统语言无法匹配，则回退到 *高级设置 - 安装设置 - 备用语言* 所指定的语言。

如果你选择了“部署为校对工具”，则该语言将会被安装为校对工具，不包含 Office 显示语言。

### 语言类型区别

| 语言类型　　　　　　　| 说明 |
| :------------------ | :--- |
| 完整　　　　　　　　　| 包含显示语言和校对工具 |
| 部分　　　　　　　　　| 包含部分 Office 应用程序的显示语言，包含校对工具 |
| 部分但不包含校对工具　| 包含部分 Office 应用程序的显示语言，但不包含校对工具 |
| 校对工具　　　　　　　| 仅包含拼写检查器 |

## Installation files

默认情况下，当你从 Office Tool Plus 下载 Office 安装包后，Office Tool Plus 会自动识别 Office 安装包信息并显示在此处。

![Office installation](/images/en-us/deploy/office-installation.png)

如果你有本地安装包，你可以点击 *选择文件*，然后指定 Office 安装文件中的任意一个 CAB 文件。

Office ISO 镜像应先挂载或者解压后，再选择其中内含的 CAB 文件。

如果安装包显示错误，则不应该继续部署 Office，检查问题所在，解决问题后再继续部署操作。
