# 基础设置

## 部署模式

| 模式          | 说明 |
| :--           | :-- |
| 编辑配置      | 仅用于生成/修改 XML 配置文件，不能进行部署   |
| 下载          | 仅下载 Office 安装包，不会也不能启动安装程序 |
| 安装          | 可以在计算机上进行安装、卸载、修改 Office 等操作 |
| 创建 ISO 文件 | 将 Office 安装包与 Office Tool Plus 一起打包 |

Office 安装包包含 Office、Visio 和 Project，由微软提供，无法精简。

## 体系结构

32 位的 Office 是默认的选择。运行 64 位 Windows 的计算机通常比 32 位版本拥有更多资源，例如处理能力和内存。此外，与 32 位应用程序相比，64 位应用程序可以访问更多内存。因此，如果你的方案包含大型文件和/或处理大型数据集，且你的计算机运行 64 位版 Windows，则存在下列情况时，64 位是恰当的选择：

- 处理大型数据集，例如包含复杂计算、许多数据透视表、与外部数据库的数据连接、Power Pivot、三维地图、Power View 或获取和转换的企业级 Excel 工作簿。 在这些情况下，64 位版 Office 可能表现更出色。
- 在 PowerPoint 中处理超大图片、视频或动画。 64 位版 Office 可能更适合处理这些复杂幻灯片。
- 在 Project 中处理超过 2 GB 的文件，尤其是项目包含许多子项目时。
- 开发内部 Office 解决方案，例如加载项或文档级别的自定义。 使用 64 位版 Office 将允许你提供这些解决方案的 64 位版和 32 位版。
- Access 中的 Long Long 数据类型，虽然 32 位 Access 支持此数据类型，但在使用 32 位 VBA 库的代码或表达式时可能会看到意外结果。 64 位 VBA 提供 Long Long 数据类型的完整支持。

如果需要了解详细信息，请参阅[选择 64 位或 32 位版本的 Office](https://support.microsoft.com/zh-cn/office/选择-64-位或-32-位版本的-Office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261)

::: tip 提示

如果您使用的是基于 ARM64 的 Windows，您可以选择 ARM64 (兼容 64 位) 以获得更好的性能和兼容性。

:::

## 更新通道

大多数情况下，只需要选择**当前通道**即可，下表列出了通道之间的区别：

| 通道                   | 通道 ID           | 发布频率          | 功能更新    |
| --------------------- | ----------------- | ----------------- | ----------- |
| 当前通道               | Current           | 每个月至少一次    | 同发布频率   |
| 半年度企业通道         | SemiAnnual        | 每月的第二个星期二 | 一月和七月   |
| 月度企业通道           | MonthlyEnterprise | 每月的第二个星期二 | 同发布频率   |
| Office 2019 企业长期版 | PerpetualVL2019   | 每月的第二个星期二 | 无          |
| Office 2021 企业长期版 | PerpetualVL2021   | 每月的第二个星期二 | 无          |
| Office 2024 企业长期版 | PerpetualVL2024   | 每月的第二个星期二 | 无          |

> 企业长期版通道是 Office 2019/2021/2024 批量产品的专用通道。

表中列出的所有通道都是稳定通道，非测试通道，因此都可以日常使用。

每个通道都会在每个月的第二个星期二发布安全更新（如果需要），这是设定好的计划。

如果需要了解详细信息，请参阅 [Microsoft 365 应用版的更新通道概述](https://docs.microsoft.com/zh-cn/deployoffice/overview-update-channels)。

## 安装模块

### Office 部署工具

Office 部署工具是微软官方工具，提供了部署 Office 的完整支持，适合所有人使用。

### Office Tool Plus

此模块是我们自行开发的安装模块，可以实现 Office 部署工具的大多数功能。下表列出了两者的区别：

| 功能 | Office 部署工具 | Office Tool Plus |
| :-- | --- | --- |
| 移除现有的 MSI 版本的 Office | ✓ | × |
| 安装与 MSI 版本相同的语言    | ✓ | × |
| 使用 Office 内部通道         | × | ✓ |
| 安装内部产品                 | × | ✓ |

我们建议优先使用 Office 部署工具，如果 Office 部署工具出现了无法解决的问题，或者有特殊需求，才应该选择 Office Tool Plus 作为安装模块。

## 产品

购买了 Microsoft 365 的用户，添加产品的时候选择 Microsoft 365 产品即可，具体视你所拥有的授权而选择家庭版、个人版或企业版。

购买了 Office 2019/2021 的用户，按照自己购买的版本选择即可，例如家庭和学生版，或者专业增强版。

如果需要使用 KMS 或 MAK 激活，请安装批量许可证产品，例如 Office 2019 批量许可证或 Office 2021 批量许可证。

> 不确定自己是否拥有 Office 授权？登录你的[个人账户](https://account.microsoft.com/services/)或者[企业账户](https://portal.office.com/account/?ref=MeControl#subscriptions)进行验证。

::: details Office 365 产品对照表

| 订阅计划        | 产品 ID  |
| ------------- |:-------------:|
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

::: tip 提示

添加产品时，您可以按住 <kbd>Ctrl</kbd> 以同时选择多个产品。您可以在筛选框中键入您所需要的产品名称或产品 ID 进行筛选，也可以在筛选框中键入 `|` 以进行多条件筛选。例如键入 `365|VisioPro` 以筛选 Microsoft 365 产品和 Visio 专业版产品。

:::

### 应用程序

应用程序会随你选择的产品不同而显示不同的内容。

::: tip 建议

我们建议您选择您能理解的应用程序，例如 Word，PowerPoint 和 Excel。

:::

- `Groove` 代表的是 **OneDrive for Business**。
- `Lync` 代表的是 **Skype for Business**。

某些应用程序可能需要重启才能完成安装，例如 *Teams* 和 *OneDrive*。

Bing 是一个用于 Chrome 和 Edge 的浏览器插件。若要了解更多信息请访问 [Microsoft 必应搜索和 Microsoft 365 企业应用版](https://docs.microsoft.com/zh-cn/deployoffice/microsoft-search-bing)。

### 附加组件

附加组件会随你选择的产品不同而显示不同的内容。

::: warning 警告

如果你不能理解附加组件是什么，**请不要取消**勾选它们，取消选择某些附加组件可能导致 Office 功能不完整。

:::

- `DCF` 代表的是 **Database Compare** 和 **Spreadsheet Compare**。
- `OSM` 代表的是 **Telemetry Dashboard**。
- `OSMUX` 代表的是 **Office 遥测日志**。

了解有关 [PowerPivot](https://support.microsoft.com/zh-cn/office/powerpivot-%E6%A6%82%E8%BF%B0%E5%92%8C%E5%AD%A6%E4%B9%A0-f9001958-7901-4caa-ad80-028a6d2432ed) 的更多信息。

了解有关 [Power View](https://support.microsoft.com/zh-cn/office/power-view-%E6%A6%82%E8%BF%B0%E5%92%8C%E5%AD%A6%E4%B9%A0-5380e429-3ee0-4be2-97b7-64d7930020b6) 的更多信息。

有关更多产品、应用程序和附加组件的信息，您可以访问 [Office Products Information](https://www.coolhub.top/tech-articles/products.html)。

## 语言

可以添加一个语言，也可以添加多个语言，列表中的首个完整类型的语言决定了 Shell UI 区域性，包括快捷方式、右键单击关联菜单和工具提示。如果决定要在初始安装后更改 Shell UI 语言，必须重新安装 Office。

如果你没有添加语言，安装 Office 时将会自动匹配系统语言，如果系统语言无法匹配，则回退到 *高级设置 - 安装设置 - 备用语言* 所指定的语言。

如果你选择了“部署为校对工具”，则该语言将会被安装为校对工具，不包含 Office 显示语言。

::: tip 提示

添加语言时，您可以按住 <kbd>Ctrl</kbd> 以同时选择多个语言。您可以在筛选框中键入您所需要的语言名称或语言 ID 进行筛选，也可以在筛选框中键入 `|` 以进行多条件筛选。例如键入 `en-us|zh` 以筛选 English (United States) 和中文语言包。

:::

### 语言类型区别

| 语言类型　　　　　　　| 说明 |
| :------------------ | :--- |
| 完整　　　　　　　　　| 包含显示语言和校对工具 |
| 部分　　　　　　　　　| 包含部分 Office 应用程序的显示语言，包含校对工具 |
| 部分但不包含校对工具　| 包含部分 Office 应用程序的显示语言，但不包含校对工具 |
| 校对工具　　　　　　　| 仅包含拼写检查器 |

## 安装文件

默认情况下，当你从 Office Tool Plus 下载 Office 安装包后，Office Tool Plus 会自动识别 Office 安装包信息并显示在此处。

![Office installation](/images/zh-cn/deploy/office-installation.png)

::: tip 提示

Office 安装文件应该能够完整展示版本号和语言包信息，并且没有错误消息。如果安装文件不包含语言，或者仅包含校对工具，则安装的时候依然需要联网，否则会安装失败。

:::

如果你有本地安装包，你可以点击**选择文件**，然后指定 Office 安装文件中的任意一个 CAB 文件。

Office ISO 镜像应先挂载或者解压后，再选择其中内含的 CAB 文件。

如果安装包显示错误，则不应该继续部署 Office，检查问题所在，解决问题后再继续部署操作。
