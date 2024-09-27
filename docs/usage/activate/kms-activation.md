# KMS activation

## Prerequisites

- An Internet or Intranet network that can connect to the KMS.

## Steps

- In License management, install a volume license, such as *Office LTSC Professional Plus 2024 - Volume License*.
- In KMS management, configure a KMS host. The KMS host can be either a domain name or an IP address.
- Click the **Activate** button in Licenses management and wait for the product activation to complete.

::: warning Attention

Do not install Office LTSC 2021 SPLA licenses, SPLA licenses do not support KMS activation.

:::

::: tip Tip

If there is a problem during activation, you can click on the blue error code displayed by Office Tool Plus to navigate to possible solutions.

:::

## More info

Typically, a KMS activation is valid for 180 days. After 7 days (when the remaining time is less than 173 days), the system automatically attempts to renew activation (reactivate), unless KMS specifies a different renewal policy.

### Active Directory 域中的 KMS 激活

为了简化大型企业中的 Windows 和 Office 激活管理，微软开发了[基于 Active Directory 的激活服务](https://learn.microsoft.com/en-us/windows/deployment/volume-activation/activate-using-active-directory-based-activation-client)。配置好域控制器之后，加入该域的所有计算机都将会自动通过 KMS 进行激活。

如上所述，企业机构可以配置 AD 域并配置 KMS 激活服务以自动激活组织内的 Windows 和 Office 副本。但由于计算机加入了 AD 域，因此该计算机会受域所控制，域管理员可以针对域中的计算机进行控制，包括但不限于下发命令、安装软件、抹掉数据等。

但由于理解错误，一些用户认为使用 KMS 激活会导致电脑被他人控制。

正常情况下，使用 KMS 激活并不代表你的计算机就加入了 AD 域，KMS 激活可以在不加入 AD 域的情况下使用，所以你的计算机不会因此被他人所控制。
