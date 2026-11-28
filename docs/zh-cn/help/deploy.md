# 部署问题 {#deploy-questions}

您可以在这里找到大多数 Office 安装问题的原因和解决方案。如果您无法自行解决问题，您也可以选择联系我们帮助您分析/解决问题，我们的团队可以提供非常专业的技术支持。

## Windows 支持终止和 Microsoft 365 应用 {#windows-end-of-support-and-microsoft-365-apps}

Microsoft 365 应用可能无法在老旧的系统上正确运行。微软建议您迁移到受支持的操作系统以便获得更好的使用体验。

下表列出了各个 Windows 版本与 Office 的关联：

| Windows                       | Office 2019 - 2024 | 当前通道的最新版本              |
| :--                           | :-:                | :--                             |
| Windows 7                     | ×                  | 16.0.12527.22286                |
| Windows 8                     | ×                  | 16.0.12730.20270                |
| Windows 8.1                   | ×                  | 16.0.16026.20200                |
| Windows 10 1507 to 1803 (RS4) | √                  | 16.0.19725.xxxxx                |
| Windows Server 2016           | √                  | 16.0.19725.xxxxx                |
| Windows 10 1809 (RS5) to 22H2 | √                  | 16.0.20326.xxxxx                |
| Windows Server 2019           | √                  | 16.0.20326.xxxxx                |
| Windows Server 2022           | √                  | 16.0.20326.xxxxx                |

未列出的 Windows 版本（例如 Windows 11）仍可部署最新版本的 Office，并持续获得 Office 的功能更新。

获取更多信息请访问:

- [Windows 7 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-7-support)
- [Windows 8 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-8-support)
- [Windows 8.1 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-81-support)
- [Windows 10 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-10-support)
- [Windows Server 支持终止和 Microsoft 365 应用](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/windows-server-support)

## 如何将 Office 安装到其他位置 {#how-to-install-office-to-another-path}

微软不允许将 Office 安装到其他位置，我们也不建议您强制更改其安装位置。

强制更改安装位置容易出现问题，特别会容易遇到【操作系统当前的配置不能运行此应用程序】。

如果已经遇到了问题，可以尝试卸载 Office 后，转到[工具箱](/zh-cn/usage/toolbox/windows.md)页面，点击[环境变量管理器](/zh-cn/usage/toolbox/windows.md#environment-variables-manager)，然后重置系统变量，最后重新安装 Office。

## 该安装文件包含错误 {#these-installation-files-contains-errors}

在[安装文件](/zh-cn/usage/deploy/settings/basic.md#installation-files)管理面板中删除有问题的安装文件，然后重试下载。

如果问题依旧存在，请尝试[启用 HTTPS 连接](/zh-cn/usage/settings.md#connect-using-https)，或更换一个网络，然后重试下载。

## 很抱歉，访问所需的文件时遇到问题 {#ran-into-a-problem-accessing-a-required-file}

> 很抱歉，访问所需的文件时遇到问题。请检查安装源是否具有正确权限，然后重试。

请检查系统中是否安装了以下软件：

- WinZips
- Win解压缩
- 联想应用商店
- 360 安全卫士

如果系统中安装有上述软件，请卸载这些软件，然后重新启动系统，再次部署 Office。

## 如何终止 Office 安装程序 {#how-to-terminate-office-installer}

如果您因为任何原因需要终止 Office 安装程序，请在工具箱页面[移除 Office](/zh-cn/usage/toolbox/office.html)，然后重新部署 Office。

::: warning 注意

如果 Office 安装程序卡在 `We're getting things ready...`，请通过任务管理器强行结束对应的 setup.exe 进程。

:::

## Office 安装进度卡住不动 {#office-installation-is-stuck}

如果安装进度卡在 0-49% 之间，则表示 Office 安装程序无法获取所需文件。

- 如果是在线安装，请检查网络状况是否良好，或者尝试换个网络。
- 尝试使用[下载后再部署](/zh-cn/usage/deploy/first-deployment.md#download-first)，这能够最大程度避免因网络而出现问题。
- 尝试[校验 Office 安装文件](/zh-cn/usage/deploy/settings/basic.md#installation-files)，有时候是文件出现了问题。

如果安装进度卡在 50-100% 之间，则表示 Office 安装过程中出现了错误。

- 如果安装程序允许你忽略这个错误，那你可以选择忽略，但 VBA 或者某些功能可能不可用。
- 尝试退出所有第三方软件，某些第三方软件可能会错误阻止安装程序的运行。
- 尝试[移除 Office](/zh-cn/usage/toolbox/office.md#remove-office)，然后重新安装。

如果以上步骤不起作用，您可以在工具箱页面收集 Office 安装日志，然后进行分析以找出问题所在。
