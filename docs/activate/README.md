# Activation introduces

On activation page, you can install the licenses, install the product keys, configure KMS and more.

If you purchased an Office license, you can activate Office by opening Office and signing in to your Microsoft account.

## License

### Retail license

Retail licenses can only be activated via a valid product key, The Microsoft 365 products can only be activated by logging into a Microsoft account that has a genuine license.

Most retail licenses are tied to a Microsoft account, so retail licenses are not usually activated via Office Tool Plus.

### Volume license

Volume licenses can be activated using MAK or via KMS.

- MAK stands for Multiple Activation Key. 该密钥有激活次数上限，可以多次使用并激活 Office。
- KMS stands for Key Management Service. KMS 激活需要使用 GVLK，并设置 KMS 主机。

在激活信息不丢失的情况下，使用 MAK 激活为永久激活。

KMS 续期策略由 KMS 主机决定。通常情况下，一次激活的有效期是 180 天，每隔 7 天续期一次。

## Licenses management

### Install licenses

You can choose which licenses you want to install from list. Holding <kbd>Ctrl</kbd> to select multiple licenses. The Grace key is the default key for Retail licenses, GVLK  is the default key for volume licenses.

When installing a new license, the existing licenses are not overwritten, so the licenses can coexist.

### Install other licenses

You can install other licenses if you needed. Usually the Office licenses storage on `C:\Program Files\Microsoft Office\root\Licenses16`. You need to install Office product key for the licenses you installed.

### Uninstall all licenses

The operation will removing all licenses, but without keys.

## Key management

### Install key

Input a valid key for Office product to install. If you get an error code [0xC004F069](/faq/activation.md#_0xc004f069) when installing key, install Office licenses for the corresponding product first.

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
