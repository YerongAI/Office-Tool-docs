# 激活管理 {#activation-management}

## 许可证管理 {#licenses-management}

### 安装许可证 {#install-license}

你可以从列表中找到你需要的许可证并安装。Office Tool Plus 为零售许可证内置了 Grace 产品密钥，为批量许可证内置了 KMS 客户端产品密钥（GVLK），这些密钥会在安装了许可证之后自动安装。

安装新的许可证时，现有的许可证不会被覆盖，因此许可证可以共存。

::: tip 提示

安装许可证时，你可以按住 <kbd>Ctrl</kbd> 以同时选择多个许可证。您也可以在筛选框中键入 `|` 以进行多条件筛选。例如键入 `office ltsc 2021|visio 2021` 以筛选 Office 2021 LTSC 许可证和 Visio 2021 许可证。

:::

### 安装其他许可证 {#install-other-licenses}

如果你需要，你可以安装其他许可证。通常情况下，Office 许可证储存在 `C:\Program Files\Microsoft Office\root\Licenses16`。该功能不会自动安装对应的 Office 产品密钥，因此你需要在安装许可证后自行安装对应的 Office 产品密钥，否则 Office 许可证可能不会显示在 Office 应用程序或许可证列表中。

### 卸载所有许可证 {#uninstall-all-licenses}

此功能会删除系统上所有已安装的 Office 许可证，不会删除 Office 产品密钥。

## 密钥管理 {#key-management}

### 安装密钥 {#install-key}

输入一个完整的 Office 产品密钥即可进行安装。如果你在安装产品密钥时显示错误代码 [0xC004F069](/zh-cn/help/activation.md#_0xc004f069)，请确保你已经安装该产品密钥对应的 Office 许可证。

### 卸载所有未激活的密钥 {#uninstall-all-unactivated-keys}

此功能会检索当前所有的 Office 许可证，并自动卸载未激活的产品密钥。执行此操作可能会丢失你的 Office 产品密钥，请小心。

### 安装确认 ID (CID) {#install-confirmation-id-cid}

此功能允许你输入并安装一个确认 ID，用于电话激活。

## KMS 管理 {#kms-management}

KMS 主机可以是一个域名，也可以是一个 IP 地址，例如：`kms.example.com` 或者 `192.168.123.1`。

KMS 主机的默认端口是 1688，如果需要，可以手动输入指定为其他端口。例如：`kms.example.com:1688` 或者 `192.168.123.1:1688`。

## 许可证列表 {#office-licenses-list}

您可以从这里检索当前设备上已安装的 Office 许可证的信息，支持 vNext 许可证和传统的 Office 许可证。

### vNext 许可证 {#vnext-licenses}

Office Tool Plus 支持查看 vNext 许可证的状态、期限、使用者等信息。您也可以在这里删除不想要/不需要的 vNext 许可证。在删除之前，建议先从 Office 应用程序内退出相应微软账户的登录。

### Office 传统许可证 {#office-legacy-licenses}

Office Tool Plus 支持查看许可证的基础信息，可以针对单个许可证卸载产品密钥，也可以获取安装 ID 以用于电话激活。
