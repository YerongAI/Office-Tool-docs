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

### Active Directory-based activation

To simplify Windows and Office activation management in large enterprises, the administrators usually choose to configure an [Active Directory-based activation](https://learn.microsoft.com/en-us/windows/deployment/volume-activation/activate-using-active-directory-based-activation-client) service. After configuring the domain controller, all computers that join the domain will automatically activate through KMS.

As mentioned above, organizations can configure an AD domain and configure the KMS activation service to automatically activate copies of Windows and Office within the organization. However, since the computer is joined to the AD domain, the domain administrator can fully control the computers in the domain, including executing commands, installing softwares, clearing data, etc.

However, some users misunderstand that using KMS activation will cause the computer to be controlled by others.

Using KMS activation does not mean that your computer has joined the AD domain. KMS activation can be used without joining the AD domain, so your computer will not be controlled by others.
