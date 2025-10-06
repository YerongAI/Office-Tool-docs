# 部署问题 {#deploy-questions}

## Windows 支持终止和 Microsoft 365 应用 {#windows-end-of-support-and-microsoft-365-apps}

Microsoft 365 应用可能无法在老旧的系统上安装或运行。微软强烈建议您迁移到受支持的操作系统以便获得更好的使用体验。

如果你仍然想在你的 PC 上安装 Microsoft 365 应用，请使用**当前通道**作为部署时的通道。如果你在安装 Microsoft 365 应用时收到操作系统不受支持的提示，你可以尝试将安装模块从 `Office 部署工具`更改为 `Office Tool Plus` 以跳过操作系统兼容性检查。

获取更多信息请访问:

- [Windows 7 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-7-support)
- [Windows 8 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-8-support)
- [Windows 8.1 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-81-support)
- [Windows 10 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-10-support)
- [Windows Server 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-server-support)

::: warning 注意

即使你更改安装模块，你也无法在 Windows 7 中安装高版本的 Office。

:::

## 如何将 Office 安装到其他位置 {#how-to-install-office-to-another-path}

微软不允许将 Office 安装到其他位置，我们也不建议您强制更改其安装位置。

强制更改安装位置容易出现问题，特别会容易遇到【操作系统当前的配置不能运行此应用程序】。

如果已经遇到了问题，可以尝试卸载 Office 后，转到[工具箱](/zh-cn/usage/toolbox/windows.md)页面，点击[环境变量管理器](/zh-cn/usage/toolbox/windows.md#environment-variables-manager)，然后重置系统变量，最后重新安装 Office。

## 很抱歉，访问所需的文件时遇到问题 {#ran-into-a-problem-accessing-a-required-file}

> 很抱歉，访问所需的文件时遇到问题。请检查安装源是否具有正确权限，然后重试。

如果 Office 安装进度在 50% 左右时出现此问题，请检查系统中是否安装了以下软件：

- WinZips
- Win解压缩
- 联想应用商店
- 360 安全卫士

如果系统中安装有上述软件，请卸载这些软件，然后重新启动系统，再次部署 Office。

## Office 安装进度卡住不动 {#office-installation-is-stuck}

如果安装进度卡在 0-49% 之间，则表示 Office 安装程序无法获取所需文件。

- 如果是在线安装，请检查网络状况是否良好，或者尝试换个网络。
- 尝试使用[下载后再部署](/zh-cn/usage/deploy/clean-deployment.md#download-first)，这能够最大程度避免因网络而出现问题。
- 尝试[校验 Office 安装文件](/zh-cn/usage/deploy/settings/basic.md#installation-files)，有时候是文件出现了问题。

如果安装进度卡在 50-100% 之间，则表示 Office 安装过程中出现了错误。

- 如果安装程序允许你忽略这个错误，那你可以选择忽略，但 VBA 或者某些功能可能不可用。
- 尝试退出所有第三方软件，某些第三方软件可能会错误阻止安装程序的运行。
- 尝试[移除 Office](/zh-cn/usage/toolbox/office.md#remove-office)，然后重新安装。

如果以上步骤不起作用，您可以在工具箱页面收集 Office 安装日志，然后进行分析以找出问题所在。您也可以选择联系我们帮助您分析问题，我们的团队可以提供非常专业的技术支持。
