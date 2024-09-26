# 下载

你可以从这些站点中下载 Office Tool Plus:

- [云图小镇](https://www.officetool.plus/redirect/download.php?site=yuntu)
- [OneDrive](https://www.officetool.plus/redirect/download.php?site=onedrive)
- [GitHub Releases](https://www.officetool.plus/redirect/download.php?site=github)
- [山东大学镜像站](https://www.officetool.plus/redirect/download.php?site=sdumirror)
- [上海交通大学镜像站](https://www.officetool.plus/redirect/download.php?site=sjtumirror)
- [南京大学镜像站](https://www.officetool.plus/redirect/download.php?site=nju)
- [兰州大学镜像站](https://www.officetool.plus/redirect/download.php?site=lzu)
- [南阳理工学院镜像站](https://www.officetool.plus/redirect/download.php?site=nyist)
- [荆楚理工学院镜像站](https://www.officetool.plus/redirect/download.php?site=jcut)

或者使用 PowerShell 下载 Office Tool Plus:

站点 1（第一个为简体中文，第二个为英文）:

```powershell
irm https://otp.landian.vip/get/?lang=zh-cn | iex
```

```powershell
irm https://otp.landian.vip/get/ | iex
```

站点 2（第一个为简体中文，第二个为英文）:

```powershell
irm https://officetool.plus/get/?lang=zh-cn | iex
```

```powershell
irm https://officetool.plus/get/ | iex
```

版本区别：

- 包含框架版本：包含 .NET Runtime，可以在不安装 .NET Runtime 的情况下直接运行 Office Tool Plus.
- 普通版本：仅包含 Office Tool Plus 以及基本组件。

> 推荐下载包含框架的版本，方便使用。

体系架构区别：

- x86（32 位）: 可以在 32 位、64 位 或 ARM64 的 Windows 中运行，支持使用迅雷云加速开放平台作为下载引擎。
- x64（64 位）: 可以在 64 位 或 ARM64 的 Windows 中运行，不支持使用迅雷云加速开放平台。
- ARM64: 仅能在 ARM64 的 Windows 中运行，针对 ARM64 平台有更好的兼容性和性能表现，其余同 x64 版本。

## 解压

下载完成后，请将整个压缩包解压到一个合适的位置，例如桌面。**请勿在压缩包内直接双击运行 Office Tool Plus**.
