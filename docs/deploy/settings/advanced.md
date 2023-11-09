# Advanced settings

::: warning Warning

Don't change any settings that you can't read, or Office installation may fail.

:::

## Gernal settings

You can add a description to this config for documentation or notes. Office Tool Plus supports displaying markdown-formatted text, and this content is shown to the user before deploying Office.

## Install settings

### Office version

If you need to install a historical version of Office, you can select an available historical version from the drop-down list. Also you can get the historical version from [Microsoft docs](https://docs.microsoft.com/en-us/officeupdates/update-history-microsoft365-apps-by-date). If the drop-down list is empty, it may be that your Internet connection has failed, or that the update channel you have selected does not have any available historical versions.

If you have downloaded Office installation files, the versions of all Office installation files under the appropriate channel are shown here.

### Source path

If you have Office installation files, you should select them on [Installation files](/deploy/settings/basic.md#installation-files) panel, instead of writing the path here.

## Activation settings

此处的激活设置仅供企业管理员进行批量部署时使用，个人用户不应更改此处设置，否则极有可能导致 Office 无法激活。

## Application preferences

`应用程序首选项由微软提供数据，其文本均为机器翻译，可能存在某些语法错误，请以英文版本的为准。`

应用程序首选项使你可以在部署 Office 前进行 Office 的设置，包括 VBA 宏通知、默认文件位置和默认文件格式。

除此之外，你还可以将应用程序首选项应用到现有的 Office 中。

您所定义的应用程序首选项将应用于设备的所有现有用户以及未来添加到该设备的任何新用户。如果在 Office 应用程序运行时应用首选项，则新的设置将在 Office 下次运行时生效。

## Other options

You can find all the instructions on [Microsoft docs](https://docs.microsoft.com/en-us/deployoffice/office-deployment-tool-configuration-options).
