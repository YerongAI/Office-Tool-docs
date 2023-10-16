# 高级设置

::: warning 警告

不要随意更改你看不懂的设置，否则极有可能导致您的 Office 部署失败。

:::

## 常规设置

你可以给这个配置文件添加一个说明，用于记录或者备注。Office Tool Plus 支持显示 markdown 格式的文本，并且这些内容会在开始部署之前展示给用户看。

## 安装设置

### Office 版本

如果你需要安装 Office 的历史版本，你可以从下拉框中选择可用的历史版本，也可以从 [Microsoft 文档](https://docs.microsoft.com/zh-cn/officeupdates/update-history-microsoft365-apps-by-date)获取可用的 Office 历史版本。如果下拉框中没有显示可用的历史版本，可能是你的网络连接失败，也可能是你所选择的更新通道没有可用的历史版本。

如果你下载了 Office 安装包，则此处会显示相应通道下所有 Office 安装包的版本。

### 源路径

如果你在本地有 Office 安装包，则应该在[安装文件管理](/zh-cn/deploy/settings/basic.md#安装文件)中选择文件，而不是在此处写入路径。

## 激活设置

此处的激活设置仅供企业管理员进行批量部署时使用，个人用户不应更改此处设置，否则极有可能导致 Office 无法激活。

## 应用程序首选项

`应用程序首选项由微软提供数据，其文本均为机器翻译，可能存在某些语法错误，请以英文版本的为准。`

应用程序首选项使你可以在部署 Office 前进行 Office 的设置，包括 VBA 宏通知、默认文件位置和默认文件格式。

除此之外，你还可以将应用程序首选项应用到现有的 Office 中。

您所定义的应用程序首选项将应用于设备的所有现有用户以及未来添加到该设备的任何新用户。如果在 Office 应用程序运行时应用首选项，则新的设置将在 Office 下次运行时生效。

## 其他选项

其他选项介绍以及用法在[微软官方文档](https://docs.microsoft.com/zh-cn/deployoffice/office-deployment-tool-configuration-options)中有详细介绍，使用方法相同，在这里不再重复叙述。
