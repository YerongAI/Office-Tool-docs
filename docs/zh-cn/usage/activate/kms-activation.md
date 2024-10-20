# KMS 激活 {#kms-activation}

## 前置条件 {#prerequisites}

- 可连接至 KMS 的 Internet 或 Intranet 网络。

## 激活步骤 {#steps}

- 在许可证管理中安装批量许可证，例如 *Office LTSC 专业增强版 2024 - 批量许可证*。
- 在 KMS 管理中设置一个 KMS 主机。KMS 主机可以是一个域名，也可以是一个 IP 地址。
- 点击许可证管理中的**激活**按钮，等待产品激活完毕。

::: warning 注意

请勿安装 Office LTSC 2021 SPLA 许可证，SPLA 许可证不支持使用 KMS 进行激活。

:::

::: tip 提示

如果激活过程中出现了问题，您可以点击程序显示的蓝色的错误代码以导航到可能的解决方案中。

:::

## 更多信息 {#more-info}

通常情况下，一次 KMS 激活的有效期为 180 天。7 天之后（剩余时间不足 173 天时），系统会自动尝试续期（重新激活），除非 KMS 指定了另外的续期策略。

### Active Directory 域中的 KMS 激活 {#active-directory-based-activation}

为了简化大型企业中的 Windows 和 Office 激活管理，企业通常会选择配置[基于 Active Directory 的激活服务](https://learn.microsoft.com/zh-cn/windows/deployment/volume-activation/activate-using-active-directory-based-activation-client)。配置好域控制器之后，加入该域的所有计算机都将会自动通过 KMS 进行激活。

如上所述，企业机构可以配置 AD 域并配置 KMS 激活服务以自动激活组织内的 Windows 和 Office 副本。但由于计算机加入了 AD 域，域管理员可以完全控制域中的计算机，包括但不限于下发命令、安装软件、清除数据等。

但部分用户错误地理解为使用 KMS 激活会导致电脑被他人控制。

使用 KMS 激活并不代表你的计算机就加入了 AD 域，KMS 激活可以在不加入 AD 域的情况下使用，所以你的计算机不会因此被他人所控制。
