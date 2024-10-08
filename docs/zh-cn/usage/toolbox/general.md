# 常规工具 {#general-tools}

## 查询 Office 版本信息 {#query-office-version}

此功能可以从微软服务器获取 Office 更新通道的版本信息，包括通道名、分支、版本号和创建时间。

![查询 Office 更新通道](/images/zh-cn/toolbox/query-office-update-channel.webp)

若要显示内部通道，请打开[显示内部产品和通道](/zh-cn/usage/settings.md#display-internal-products-and-channels)。

## 查询错误代码描述 {#query-error-code-description}

通常情况下，一些程序或脚本会在执行时出错，然后给出一个错误代码，错误代码通常以 0x 开头（十六进制），也可以是普通数字，例如 2（十进制）。

你可以将错误代码放到这里进行查询，Office Tool Plus 会直接告诉你这个错误代码的含义。有时候也有可能会弹出来一个 Windows 激活的错误框，不要担心，你只需要点击**查看详细信息**就能看到你所查询的错误代码的含义了。

## 测试 KMS 主机可用性 {#test-kms-host-reachability}

默认情况下，Office Tool Plus 使用 TCP 连接测试 KMS 主机是否可以连接。

你还可以使用 [vlmcs](https://download.coolhub.top/Extensions/Components/) 组件以测试 KMS 主机是否正常工作。

在地址栏中输入 KMS 主机地址，然后点击**测试**按钮即可。

![Test KMS host](/images/zh-cn/toolbox/test-kms.webp)
