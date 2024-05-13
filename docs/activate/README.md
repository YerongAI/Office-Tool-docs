# Activation introduces

On activation page, you can install the licenses, install the product keys, configure KMS and more.

If you purchased an Office license, you can activate Office by opening Office and signing in to your Microsoft account.

## License

### Retail license

零售许可证只能使用产品密钥激活，对于 Microsoft 365（Office 365）系列产品，只能通过登录拥有正版许可证的微软账户激活。

目前大多数的零售许可都与微软账户绑定，因此零售版产品通常不使用 Office Tool Plus 进行激活。

### Volume license

批量许可证可以使用 MAK 激活，也能使用 KMS 激活。

- MAK 指的是批量激活密钥（Multiple Activation Key），该密钥有激活次数上限，可以多次使用并激活 Office.
- KMS 激活指的是使用密钥管理服务（Key Management Service）进行激活，KMS 激活需要使用 GVLK，并设置 KMS 主机。

在激活信息不丢失的情况下，使用 MAK 激活为永久激活。

KMS 续期策略由 KMS 主机决定。通常情况下，一次激活的有效期是 180 天，每隔 7 天续期一次。

## Licenses management

### Install licenses

You can choose which licenses you want to install from list. Holding <kbd>Ctrl</kbd> to select multiple licenses. Office Tool Plus 为零售许可证内置了默认密钥，为批量许可证内置了 GVLK 密钥。

安装许可证时，原有的许可证不会被覆盖也不会被清除，因此许可证可以共存。

### Install other licenses

如果你需要，你可以安装其他许可证，通常情况下，Office 许可证储存在 `C:\Program Files\Microsoft Office\root\Licenses16`，你可以复制给其他计算机使用。使用该功能不会安装 Office 产品密钥，需要自行安装密钥。

### Uninstall all licenses

The operation will removing all licenses, but without keys.

## Key management

### Install key

输入一个完整的 Office 产品密钥即可进行安装。如果你在安装产品密钥时显示错误代码 [0xC004F069](/zh-cn/faq/activation.md#_0xc004f069)，请确保你已经安装该密钥对应的 Office 许可证。

### Uninstall all unactivated keys

This will query all licenses and uninstall all inactivated keys automatically. Be careful when using the function.

### Install confirmation ID (CID)

You can install CID to activate your Office via phone activation.

## KMS management

KMS host can be a domain name or IP address, such as `kms.example.com` or `192.168.123.1`.

The default port of KMS is 1688, you can change it if needed, such as `kms.example.com:1688` or `192.168.123.1:1688`.

## Office licenses list

You can query information about all installed Office licenses, support vNext licenses and legacy licenses.

::: tip What is vNext license?

vNext 许可证是 Microsoft 订阅用户的专属许可证，通常是 Microsoft 365 个人/家庭版订阅或 Microsoft 365 企业版订阅许可证。这些许可证与微软账户绑定，具有一定的时间限制，通常情况下需要在两个月内联网验证可用性，否则 Office 可能会弹出订阅过期的提示。

:::

### vNext licenses

Office Tool Plus supports to view the status, expiration date and user info for vNext license. You should log out of your MS account on Office applications before deleting the license.

### Office legacy licenses

Office Tool Plus supports to query basic info for license. You can uninstall key for the license, or copy the CID for phone activation.
