# 激活问题 {#activation-questions}

## 0x80131500

此错误代码没有准确意义，请参考给出的错误信息进行问题排查。

## 0x80131539

此错误代码没有准确意义，请参考给出的错误信息进行问题排查。

## 0x8004E108

> 软件授权服务报告令牌存储中的令牌包含无效的哈希。

请参考[重建 Windows 激活令牌](/zh-cn/usage/toolbox/windows.md#rebuild-windows-activation-token)。

## 0x8007000D

> 数据无效。

确保以下事项没有问题：

- 系统时间正确。
- 网络连接正常。
- 你正在使用的 KMS 主机能够正常工作。[如何测试？](/zh-cn/usage/toolbox/general.md#test-kms-host-reachability)

然后做以下事情:

- [重置 Software Protection 服务](/zh-cn/usage/toolbox/windows.md#reset-software-protection-service)。
- 再次尝试激活。

## 0x8007007B

> 文件名、目录名或卷标语法不正确。

解决方案同[0x8007000D](activation.md#_0x8007000d)。

## 0x8007232B

> DNS 名称不存在。

- 尚未设置 KMS 主机，请在设置之后重试。
  - 如下截图所示，显示 `N/A` 则表示未设置 KMS 主机：
  ![No KMS configured](/images/zh-cn/activation/no-kms-configured.webp)
- KMS 主机地址不正确，请检查，然后重试。
- 尝试更换一个 DNS，然后重试。
- 尝试更换一个网络，然后重试。

## 0x80080005

> 服务器运行失败。

尝试[重置 Software Protection 服务](/zh-cn/usage/toolbox/windows.md#reset-software-protection-service)，然后重试激活。

## 0xC004E015

> 软件授权服务报告许可证使用失败。

解决方案同[0x8004E108](activation.md#_0x8004e108).

## 0xC004F015

> 软件授权服务报告许可证未安装。

如果您的 Office 已经激活，则不需要理会此消息。

如果您的 Office 尚未激活，请检查自己的操作步骤是否有错误，是否安装了正确的 Office 许可证，或者向微软[购买](https://otp.landian.vip/zh-cn/#store) Office 许可证授权。

## 0xC004F017

> 软件授权服务报告许可证未安装。

解决方案同[0xC004F015](activation.md#_0xc004f015)。

## 0xC004F069

> 软件授权服务报告找不到产品 SKU。

这个错误代码表示你正在安装的 Office 产品密钥没有对应的许可证，你需要先安装对应的 Office 许可证，然后再安装这个产品密钥。

## 0xC004F074

> 软件授权服务报告无法激活该产品，无法联系任何密钥管理服务（KMS）。

确保以下事项没有问题：

- 网络连接正常。
- 你正在使用的 KMS 主机能够正常工作。[如何测试？](/zh-cn/usage/toolbox/general.md#test-kms-host-reachability)

然后做以下事情:

- [重置 Software Protection 服务](/zh-cn/usage/toolbox/windows.md#reset-software-protection-service)。
- 再次尝试激活。

## 0xC004F075

> 软件授权服务报告无法完成该操作，因为服务已停止。

确保系统服务 **Software Protection (sppsvc)** 正在运行。如果服务已停止，请手动启动或重新启动计算机。

## .NET Framework 问题 {#net-framework-problem}

> The native library 'C:\Windows\Microsoft.NET\Framework64\v4.0.30319\wminet_utils.dll' does not have all required functions. Please update the .NET Framework.

请使用 Windows Update 检查并安装所有的 .NET Framework 更新。

## 没有在系统中找到有效的 Office KMS 许可证 {#no-valid-office-kms-licenses-were-found-on-the-system}

若要使用 KMS 激活，你需要为 Office 安装批量（Volume）许可证和 GVLK。

通常情况下，当您在 Office Tool Plus 中安装对应的批量许可证后，您就可以正常使用 KMS 进行激活了，但以下情况除外：

- SPLA 许可证：SPLA 许可证仅能使用 MAK 进行激活，不支持 KMS 激活。
- 预览版产品：处于预览阶段的产品没有 GVLK，因此您还需要手动安装 GVLK 才可进行 KMS 激活。

## 无效类 {#invalid-class}

请参考[修复 WMI 组件](/zh-cn/usage/toolbox/windows.md#repair-wmi-components)。
