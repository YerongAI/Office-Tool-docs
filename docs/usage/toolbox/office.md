# Office tools

Office tools is located on `Toolbox` page -> `Office tools` section.

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

The Office product owner refers to the owner of the license, as shown in the image below with *Yerong™ | NekoNeko*:

![Product owner](/images/en-us/product-owner.webp)

When setting a new name directly, Office Tool Plus will attempt to change the names of all installed Office products. If you need to change the name of a specific license individually, please follow the methods below.

::: warning Notice

Office Tool Plus cannot identify Office legacy licenses that you have installed manually, so you need to set the name for the installed licenses manually.

:::

::: details Change owner for vNext license

You can now set the name directly in the licenses list.

![Set vNext license name](/images/en-us/activation/set-vNext-license-name.webp)

In the license list, find the license whose name you want to change. Click the `Set name` button, input the new name for the license. After that, restart your Office applications to see the new name.

:::

::: details Change owner for legacy license

Check the product ID of your installed products on the deployment page, such as `ProPlus2021Volume` or `VisioPro2021Volume`.

Then return to the toolbox, and in `Change Office product owner`, enter the following format: `[Product ID]:[Name]`

Product ID is the product ID, and Name is the name you want to set, for example: `ProPlus2021Volume:James`

After filling in, click the `Set name` button, and restart your Office applications to see the new name.

::: warning Notice

If you have manually installed and activated other Office licenses, please enter the ID of the license you installed in the above text, not the ID of the installed products.

:::

## Reset Office settings to defaults

Resetting Office settings can resolve some issues. Use as needed.

::: details Applicable situations

- The Office license is activated via KMS or MAK, but Office applications require a Microsoft 365 subscription.
- We noticed you just updated your license. Please reboot Microsoft Project for the changes to take effect.

:::
