# Office 工具

## 解除安裝 Office

此功能支持移除所有版本的 Office.

如果移除 Office 出现了某些文件无法访问的问题，你可以多试几次，也可以手动找到文件删除。

当你启用`同时移除 Microsoft Store 版本的 Office` 时，程序会执行如下 PowerShell 命令以删除微软商店版本的 Office：

``` powershell
Get-AppxPackage -name "Microsoft.Office.Desktop" | Remove-AppxPackage
```

当你启用`同时清除激活信息`时，程序会执行 `cleanospp` 以卸载所有的 Office 许可证和产品密钥。

获取详细信息请访问[從電腦解除安裝 Office](https://support.microsoft.com/zh-tw/office/從電腦解除安裝-office-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8)

## 變更 Office 更新通道

此功能可以更改 Office 更新通道，从而实现不重装进行 Office 的升级/降级。

::: warning 注意

Office 企业版长期通道被锁定，一般情况下无法更改，也无法从别的通道更改到此通道。

:::

## 變更 Office 產品擁有者名稱

Office 产品属于者指的是许可证的属于者，例如下图中的 *Yerong™ | NekoNeko*：

![Product owner](/images/zh-tw/product-owner.png)

直接设置新的名称时，Office Tool Plus 会尝试更改所有 vNext 许可证和 Office 传统许可证的名称。如果您需要单独更改某个许可证的名称，请按照以下方法进行。

::: warning 注意

Office Tool Plus 无法识别您自行安装的 Office 传统许可证，因此您需要为安装的许可证单独设置名称。

:::

### 更改 vNext 许可证的属于者

第一步，获取 vNext 许可证的用户 ID。如下图所示，转到激活页面，在 Office 许可证列表中找到你想更改的许可证，然后点击`复制用户 ID` 按钮。

![Copy user ID](/images/zh-tw/activation/check-vNext-license.png)

第二步，回到工具箱，在`更改 Office 产品属于者`中按照以下格式输入 `[User ID]:[Name]`

User ID 为刚才复制的用户 ID，Name 是你想设置的名字，例如：`bbbbxxx:祝英台`

![Change product owner](/images/zh-tw/toolbox/change-license-owner.png)

填写完成后，点击`设置名称`按钮，重启你的 Office 应用程序即可看到新的名称。

### 更改 Office 传统许可证的属于者

在部署页面查看您已安装的产品的 ID，例如 `ProPlus2021Volume` 或 `VisioPro2021Volume`。

然后回到工具箱，在`更改 Office 产品属于者`中按照以下格式输入 `[Product ID]:[Name]`

Product ID 为产品 ID，Name 是你想设置的名字，例如：`ProPlus2021Volume:祝英台`

填写完成后，点击`设置名称`按钮，重启你的 Office 应用程序即可看到新的名称。

::: warning 注意

如果您自行安装了其他 Office 许可证并激活，请在上文中输入您安装的许可证的 ID，而不是已安装的产品的 ID。

:::
