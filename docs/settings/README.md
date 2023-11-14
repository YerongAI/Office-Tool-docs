# Application settings

Here you can adjust language, theme, background and other settings, as well as some download or deployment settings.

If the system language cannot be matched, English (United States) is used by default.

::: tip Tip

To save the changes, turn on the `Save Settings`, otherwise all settings will be lost after restarting Office Tool Plus.

:::

## Appearance & behavior

### Theme

By default, Office Tool Plus automatically switches between light theme (Light Blue) and dark theme (Dark White) based on Windows settings. You can also manually select your favorite theme.

### Background

By default, Office Tool Plus uses Bing wallpaper as background image. You can adjust it to other backgrounds according to your preference, or use local images as background image, supporting PNG, JPG and BMP.

If you want to set a web image as the background image, please use [/setimage](/commands/build-in.md#in-application-commands) command.

::: warning Notice

The Mica effect is only available on Windows 11. When you use the Acrylic, Blur, or Mica effects, the title bar automatically changes to the Windows 11 style.

There may be a delay in dragging windows when using the Acrylic effect on Windows 10.

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

::: danger Warning

If you don't know about the internal products and update channels, **DO NOT USE** them.

:::

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
