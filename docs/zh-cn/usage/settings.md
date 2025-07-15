# 程序设置 {#application-settings}

在设置页面，你可以调整程序的语言、主题、背景等设置，还可以调整一些下载或者部署设置。

如果系统语言无法匹配，则默认使用英语（美国）作为显示语言。

::: tip 提示

若要保存更改，请打开**保存设置**按钮，否则所有设置将在重启程序后丢失。

:::

## 外观和行为 {#appearance-behavior}

### 主题 {#theme}

你可以根据自己的喜好设置一个特定的主题。开启自动深色主题后，Office Tool Plus 会跟随系统设置自动切换浅色或深色主题。

### 背景 {#background}

默认情况下，Office Tool Plus 会根据系统环境自动选择合适的背景。Windows 11 中会选择云母效果作为背景，其他系统则是必应壁纸。如果程序检测到远程桌面会话，将会关闭所有的背景效果。你可以根据自己的喜好调整为其他背景，或使用本地图片作为程序背景，支持 PNG, JPG 和 BMP。

如果你需要设置网络图片为背景图，请使用 [/setimage](/zh-cn/usage/command/application.md#in-application-commands) 命令。

::: warning 注意

云母效果仅在 Windows 11 中可用。使用亚克力、模糊或云母效果时，标题栏会自动变更为 Windows 11 样式。

在 Windows 10 中使用亚克力效果时，拖动窗口可能会有延迟。

:::

## 高级 {#advanced}

### 硬件加速 {#hardware-acceleration}

使用硬件加速能够为程序带来更好的性能和动画效果。禁用硬件加速可能会极大降低应用程序性能，因此我们非常不建议禁用硬件加速。

但如果您在使用 Office Tool Plus 的过程中遇到了窗口变全透明、加载图片时内存溢出等问题，你可以通过禁用硬件加速来缓解这些问题。

你也可以通过[命令行命令](/zh-cn/usage/command/application.md#commands)临时禁用硬件加速。

## 部署 {#deploy}

### Office 语言显示格式 {#office-languages-display-format}

默认情况下，Office Tool Plus 显示 Office 语言为本地格式，例如英语显示为 English (United States).

- 本地名称：显示语言的本地名称，例如英语是 English，德语是：Deutsch
- 英文名称：显示语言的英文名称，例如中文是 Chinese，德语是：German
- 本地化名称：按照系统语言设置显示，例如你的系统语言是中文，那么所有的语言都显示为中文。

本地名称、英文名称以及本地化名称由 Windows 提供数据，不同版本的 Windows 显示结果可能不同。

### 显示内部产品和通道 {#display-internal-products-and-channels}

默认情况下，Office Tool Plus 不会显示非公开的产品和更新通道，例如 `ProPlusVolume` 或 `MondoVolume` 等产品，又或者 `Dofgood::DevMain` 等更新通道。

内部产品和更新通道不受 Office 部署工具的支持，因此您无法直接使用。但如果您需要，您可以打开此开关，Office Tool Plus 将会显示这些内部产品和更新通道。

::: danger 警告

如果您不了解内部产品和更新通道，**请勿使用**它们。

:::

## 下载 {#download}

### 校验文件 {#verify-files}

当您打开此开关后，Office Tool Plus 将会在下载 Office 安装文件后对文件进行校验，以便检查出版本不匹配，文件损坏等问题。

如果在文件损坏的情况下继续部署 Office，您可能会遇到安装进度卡住不动的问题，因此我们强烈建议您在部署之前校验 Office 安装文件。

::: warning 注意

Office 安装文件校验功能对在线安装不起作用，仅可用于**下载**模式或在**下载后再部署**已启用的情况下。

:::

### 使用 HTTPS 连接 {#connect-using-https}

默认情况下，Office Tool Plus 使用 HTTP 请求下载 Office 安装文件。

如果您下载 Office 安装文件时进度缓慢或者出现了意料之外的错误，您可以尝试打开此开关，然后重试下载。

### 引擎 {#engine}

下载引擎之间的区别：

| 引擎                   | x86 | x64 & ARM64 | 显示进度 | 代理 | 暂停 & 继续 | 取消 |
| :--------------------- | :-- | :--         | :--     | :--  | :--        | :--  |
| 迅雷                   | ✓ | × | ✓ | ✓ | ✓ | ✓ |
| bezzad.Downloader      | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Office Tool Plus       | ✓ | ✓ | ✓ | ✓ | × | ✓ |
| Office 部署工具        | ✓ | ✓ | × | × | × | × |

> 迅雷云加速开放平台为程序内置，不需要在系统上额外安装迅雷。

下载引擎默认为 *bezzad.Downloader*。

::: warning 警告

使用 *bezzad.Downloader* 作为下载引擎时，如果储存 Office 安装文件的目标硬盘是机械硬盘 (HDD)，则不建议设置过高的**分块**数量，过多的**分块**同时下载会导致文件写入速度下降。

:::

### Windows 版本 {#windows-version}

默认情况下，Office Tool Plus 自动识别当前系统版本并下载对应的 Office 版本。若要为其他系统下载 Office 安装文件，请在此处更改为对应的 Windows 版本。
