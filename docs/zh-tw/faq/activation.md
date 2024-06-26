# 激活问题

## 0x80131500

此错误代码没有准确意义，请参考给出的错误信息进行问题排查。

## 0x80131539

此错误代码没有准确意义，请参考给出的错误信息进行问题排查。

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
- 你正在使用的 KMS 主机能够正常工作。[如何测试？](/zh-cn/toolbox/README.md#测试-kms-主机可用性)

然后做以下事情:

- [重置 Software Protection 服务](/zh-cn/toolbox/windows.md#重置-software-protection-服务)。
- 再次尝试激活。

## 0xC004E015

> 软件授权服务报告许可证使用失败

请参考[重建 Windows 激活令牌](/zh-cn/toolbox/windows.md#重建-windows-激活令牌)。

## 0x8004E108

> 软件授权服务报告令牌存储中的令牌包含无效的哈希

解决方案同[0xC004E015](activation.md#_0xc004e015)。

## 0x8007000D

> 数据无效

确保以下事项没有问题：

- 系统时间正确。
- 网络连接正常。
- 你正在使用的 KMS 主机能够正常工作。[如何测试？](/zh-cn/toolbox/README.md#测试-kms-主机可用性)

然后做以下事情:

- [重置 Software Protection 服务](/zh-cn/toolbox/windows.md#重置-software-protection-服务)。
- 再次尝试激活。

## 0x8007007B

> 文件名、目录名或卷标语法不正确

解决方案同[0x8007000D](activation.md#_0x8007000d)。

## .NET Framework 问题

> The native library 'C:\Windows\Microsoft.NET\Framework64\v4.0.30319\wminet_utils.dll' does not have all required functions. Please update the .NET Framework.

请使用 Windows Update 检查并安装所有的 .NET Framework 更新。

## 没有在系统中找到有效的 Office KMS 许可证

若要使用 KMS 激活，你需要为 Office 安装批量（Volume）许可证和 GVLK。

通常情况下，当您在 Office Tool Plus 中安装对应的批量许可证后，您就可以正常使用 KMS 进行激活了，但以下情况除外：

- SPLA 许可证：SPLA 许可证仅能使用 MAK 进行激活，不支持 KMS 激活。
- 预览版产品：处于预览阶段的产品没有 GVLK，因此您还需要手动安装 GVLK 才可进行 KMS 激活。

## 尚无解决方案的错误

- 错误代码：0x80040154，没有注册类。
- 错误代码：0x80070002，系统找不到指定的文件。
