# Application settings

在设置页面，你可以调整程序的语言、主题、背景等设置，还可以调整一些下载或者部署设置。

如果系统语言无法匹配，则默认使用英语（美国）作为显示语言。

::: tip Tip

若要保存更改，请打开`保存设置`按钮，否则所有设置将在重启程序后丢失。

:::

## Appearance & behavior

### Theme

默认情况下，Office Tool Plus 会跟随 Windows 设置自动切换浅色主题（Light Blue）和深色主题（Dark White）。你也可以根据自己的喜好设置一个特定的主题。

### Background

默认情况下，Office Tool Plus 使用来自必应的每日一图作为程序背景。你可以根据自己的喜好调整为其他背景，或使用本地图片作为程序背景，支持 PNG, JPG 和 BMP。

如果你需要设置网络图片为背景图，请使用 [/setimage](/commands/build-in.md#in-application-commands) 命令。

::: warning Notice

云母效果仅在 Windows 11 中可用。使用亚克力、模糊或云母效果时，标题栏会自动变更为 Windows 11 样式。

在 Windows 10 中使用亚克力效果时，拖动窗口可能会有延迟。

:::

## Advanced

### Hardware acceleration

使用硬件加速能够为程序带来更好的性能和动画效果。关闭硬件加速可能会极大降低应用程序性能，因此我们非常不建议关闭硬件加速。

但如果您在使用 Office Tool Plus 的过程中遇到了窗口变全透明、加载图片时内存溢出等问题，你可以通过关闭硬件加速来缓解这些问题。

你也可以通过使用[命令行](/commands/build-in.md#commands)的方式临时关闭硬件加速。

## Deploy

### Office languages display format

默认情况下，Office Tool Plus 显示 Office 语言为本地格式，例如英语显示为 English (United States).

- 默认：不进行任何更改，按照默认的设置显示。
- 本地名称：显示语言的本地名称，例如英语是 English，德语是：Deutsch
- 英文名称：显示语言的英文名称，例如中文是 Chinese，德语是：German
- 本地化名称：按照系统语言设置显示，例如你的系统语言是中文，那么所有的语言都显示为中文。

本地名称、英文名称以及本地化名称由 Windows 提供数据，不同版本的 Windows 显示结果可能不同。

### Display internal products and channels

By default, Office Tool Plus does not display non-public products and update channels, such as products like `ProPlusVolume` or `MondoVolume`, or update channels like `Dofgood::DevMain`.

Internal products and update channels are not supported by Office Deployment Tool, so you can't use them directly. However, if you need, you can turn on this switch and Office Tool Plus will display these internal products and update channels.

## Download

### Verify files

当您打开此开关后，Office Tool Plus 将会在下载 Office 安装文件后对文件进行校验，校验可以检查出版本不匹配，文件损坏等问题。

如果在文件损坏的情况下继续部署 Office，可能会遇到安装进度卡住不动的问题，因此我们强烈建议您在部署之前校验 Office 安装文件是否存在问题。

::: warning 注意

Office 安装文件校验功能对在线部署时不起作用，仅可用于下载模式或在`下载后再部署`已启用的情况下。

:::

### Connect using HTTPS

默认情况下，Office Tool Plus 使用 HTTP 请求下载 Office 安装文件。

如果您下载 Office 安装文件时进度缓慢或者出现了意料之外的错误，您可以尝试打开此开关，然后重试下载。

### Engine

下载引擎之间的区别：

| Engine                 | x86 | x64 & ARM64 | Progress | Proxy | Pause & continue | Cancellation |
| :--                    | :-- | :--         | :--      | :--   | :--              | :--          |
| Thunder                | ✓ | × | ✓ | ✓ | ✓ | ✓ |
| bezzad.Downloader      | ✓ | ✓ | ✓ | × | ✓ | ✓ |
| Office Tool Plus       | ✓ | ✓ | ✓ | × | × | ✓ |
| Office Deployment Tool | ✓ | ✓ | × | × | × | × |

> 迅雷云加速开放平台为程序内置，不需要在系统上额外安装迅雷。

在中国大陆地区（根据系统区域设置识别）使用 32 位的 Office Tool Plus 时，下载引擎默认为迅雷，其他地区默认为 bezzad.Downloader。

使用 64 位或 ARM64 的 Office Tool Plus 时，下载引擎默认为 bezzad.Downloader。

::: warning Warning

在 32 位系统中使用 bezzad.Downloader 作为下载引擎时，启用`分块同时下载`功能时可能会遇到内存不足的问题。此问题无法解决，请改用 64 位的 Office Tool Plus 以避免此问题。

:::

## Windows version

By default, Office Tool Plus automatically detected OS version and downloads the corresponding Office version. To download Office installation files for other systems, change to the corresponding Windows version here.
