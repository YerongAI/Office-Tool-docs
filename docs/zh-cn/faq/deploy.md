# 部署问题

## Windows 支持终止和 Microsoft 365 应用

Microsoft 365 应用可能无法在老旧的系统上安装或运行。微软强烈建议您迁移到受支持的操作系统以便获得更好的使用体验。

如果你仍然想在你的 PC 上安装 Microsoft 365 应用，请使用**当前通道**作为部署时的通道。如果你在安装 Microsoft 365 应用时收到操作系统不受支持的提示，你可以尝试将安装模块从 `Office 部署工具`更改为 `Office Tool Plus` 以跳过操作系统兼容性检查。

获取更多信息请访问:

- [Windows 7 支持终止和 Microsoft 365 应用](https://docs.microsoft.com/zh-cn/deployoffice/endofsupport/windows-7-support).
- [Windows 8 支持终止和 Microsoft 365 应用](https://docs.microsoft.com/zh-cn/deployoffice/endofsupport/windows-8-support).
- [Windows 8.1 支持终止和 Microsoft 365 应用](https://docs.microsoft.com/zh-cn/deployoffice/endofsupport/windows-81-support).
- [Windows Server 支持终止和 Microsoft 365 应用](https://docs.microsoft.com/zh-cn/deployoffice/endofsupport/windows-server-support).

::: warning 注意

即使你更改安装模块，你也无法在 Windows 7 中安装高版本的 Office。

:::

## 如何将 Office 安装到其他位置

微软不允许将 Office 安装到其他位置，我们也不建议您强制更改其安装位置。

## The path is null or empty, please check your system variables

要修复这个错误，请在工具箱页面[重置系统变量](/zh-cn/toolbox/windows.md#重置系统变量).

## Office 安装进度卡住不动

如果安装进度卡在 0-49% 之间，则表示 Office 安装程序无法获取所需文件。

- 如果是在线安装，请检查网络状况是否良好，或者尝试换个网络。
- 尝试使用[下载后再部署](/zh-cn/deploy/README.md#下载后再部署)，这能够最大程度避免因网络而出现问题。
- 尝试[校验 Office 安装文件](/zh-cn/deploy/settings/basic.md#安装文件)，有时候是文件出现了问题。

如果安装进度卡在 50-100% 之间，则表示 Office 安装过程中出现了错误。

- 如果安装程序允许你忽略这个错误，那你可以选择忽略，但 VBA 或者某些功能可能不可用。
- 尝试退出所有第三方软件，某些第三方软件可能会错误阻止安装程序的运行。
- 尝试[移除 Office](/zh-cn/toolbox/office.md#移除-office)，然后重新安装。

如果以上步骤不起作用，您可能需要重新安装 Windows。
