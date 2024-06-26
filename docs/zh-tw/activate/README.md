# 功能介绍

在激活页面，你可以安装许可证、安装产品密钥，配置 KMS 等，进行 Office 的激活。

购买有正版授权的用户可直接打开 Office 应用程序并登录微软账号即可激活 Office.

## 许可证说明

### 零售（Retail）许可证

零售许可证只能使用产品密钥激活。Microsoft 365 产品只能通过登录拥有正版许可证的微软账户激活。

目前大多数的零售许可都与微软账户绑定，因此零售版产品通常不使用 Office Tool Plus 进行激活。

### 批量（Volume）许可证

批量许可证可以使用 MAK 激活，也可以使用 KMS 激活。

- MAK 指的是批量激活密钥（Multiple Activation Key），MAK 密钥有使用次数上限，可以多次使用并激活 Office。一旦激活成功，激活将永久有效。
- KMS 激活指的是使用密钥管理服务（Key Management Service）进行激活，KMS 激活需要使用 GVLK，并设置 KMS 主机。

KMS 续期策略由 KMS 主机决定。通常情况下，一次激活的有效期是 180 天，每隔 7 天续期一次。

## 许可证管理

### 安装许可证

你可以从列表中找到你需要的许可证并安装。Office Tool Plus 为零售许可证内置了默认密钥，为批量许可证内置了 GVLK 密钥。

安装新的许可证时，现有的许可证不会被覆盖，因此许可证可以共存。

::: tip 提示

安装许可证时，你可以按住 <kbd>Ctrl</kbd> 以同时选择多个许可证。您也可以在筛选框中键入 `|` 以进行多条件筛选。例如键入 `office ltsc 2021|visio 2021` 以筛选 Office 2021 LTSC 许可证和 Visio 2021 许可证。

:::

### 安装其他许可证

如果你需要，你可以安装其他许可证，通常情况下，Office 许可证储存在 `C:\Program Files\Microsoft Office\root\Licenses16`。使用该功能不会安装 Office 产品密钥，需要自行安装密钥。

### 卸载所有许可证

此功能会删除系统上安装了的所有的 Office 许可证，不会清除密钥。

## 密钥管理

### 安装密钥

输入一个完整的 Office 产品密钥即可进行安装。如果你在安装产品密钥时显示错误代码 [0xC004F069](/zh-cn/faq/activation.md#_0xc004f069)，请确保你已经安装该密钥对应的 Office 许可证。

### 卸载所有未激活的密钥

此功能会检索当前所有的 Office 许可证，并自动卸载未激活的产品密钥。执行此操作可能会丢失你的 Office 产品密钥，请小心。

### 安装确认 ID (CID)

此功能允许你输入并安装一个确认 ID，用于电话激活。

## KMS 管理

KMS 主机可以是一个域名，也可以是一个 IP 地址，例如：`kms.example.com` 或者 `192.168.123.1`。

KMS 主机的默认端口是 1688，如果需要，可以手动输入指定为其他端口。例如：`kms.example.com:1688` 或者 `192.168.123.1:1688`。

## 许可证列表

您可以从这里检索当前设备上已安装的 Office 许可证的信息，支持 vNext 许可证和传统的 Office 许可证。

### vNext 许可证

Office Tool Plus 支持查看 vNext 许可证的状态、期限、使用者等信息。您也可以在这里删除不想要/不需要的 vNext 许可证。在删除之前，建议先从 Office 应用程序内退出相应微软账户的登录。

### Office 传统许可证

Office Tool Plus 支持查看许可证的基础信息，可以针对单个许可证卸载产品密钥，也可以获取安装 ID 以用于电话激活。
