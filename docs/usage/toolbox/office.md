# Office tools

## Remove Office

Support to remove all versions of Office.

If some errors occurred when removing Office, you can try again later or fix it manually.

If **Also remove the Microsoft Store edition of Office** is enabled, Office Tool Plus will run the following PS command to remove Office:

```powershell
Get-AppxPackage -name "Microsoft.Office.Desktop" | Remove-AppxPackage
```

If **Also clear activation** is enabled, Office Tool Plus will remove all Office licenses and product keys.

For more information please refer to [Uninstall Office from a PC](https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8).

## Change Office Update Channel

This feature allows you to change the Office update channel so that you can upgrade/downgrade Office without reinstalling it.

::: warning Notice

The Office Perpetual Enterprise channel is locked and cannot be changed, nor can it be changed from another channel to this channel.

:::

## Change Office product owner

Office 产品属于者指的是许可证的属于者，例如下图中的 *Yerong™ | NekoNeko*：

![Product owner](/images/en-us/product-owner.webp)

直接设置新的名称时，Office Tool Plus 会尝试更改所有 vNext 许可证和 Office 传统许可证的名称。如果您需要单独更改某个许可证的名称，请按照以下方法进行。

::: warning Notice

Office Tool Plus 无法识别您自行安装的 Office 传统许可证，因此您需要为安装的许可证单独设置名称。

:::

::: details Change owner for vNext license

第一步，获取 vNext 许可证的用户 ID。如下图所示，转到激活页面，在 Office 许可证列表中找到你想更改的许可证，然后点击`Copy user ID` 按钮。

![Copy user ID](/images/en-us/activation/check-vNext-license.webp)

第二步，回到工具箱，在`Change Office product owner`中按照以下格式输入 `[User ID]:[Name]`

User ID 为刚才复制的用户 ID，Name 是你想设置的名字，例如：`bbbbxxx:James`

![Change product owner](/images/en-us/toolbox/change-license-owner.webp)

填写完成后，点击`Set name`按钮，重启你的 Office 应用程序即可看到新的名称。

:::

::: details Change owner for legacy license

在部署页面查看您已安装的产品的 ID，例如 `ProPlus2021Volume` 或 `VisioPro2021Volume`。

然后回到工具箱，在`Change Office product owner`中按照以下格式输入 `[Product ID]:[Name]`

Product ID 为产品 ID，Name 是你想设置的名字，例如：`ProPlus2021Volume:James`

填写完成后，点击`Set name`按钮，重启你的 Office 应用程序即可看到新的名称。

::: warning Notice

如果您自行安装了其他 Office 许可证并激活，请在上文中输入您安装的许可证的 ID，而不是已安装的产品的 ID。

:::

## Reset Office settings to defaults

Resetting Office settings can resolve some issues. Use as needed.

::: details Applicable situations

- The Office license is activated via KMS or MAK, but Office applications require a Microsoft 365 subscription.
- We noticed you just updated your license. Please reboot Microsoft Project for the changes to take effect.

:::
