# Basic settings

## Mode

| Mode            | Tip |
| :--             | :-- |
| Edit config     | Create or modify XML config, can not start installation.        |
| Download        | Download Office installation files, can not start installation. |
| Install         | Install, uninstall or modify Office.                            |
| Create ISO file | Packaging the Office installation files with Office Tool Plus.  |

The Office installation files contains Office, Visio and Project, provided by Microsoft.

## Architecture

32-bit of Office is the default choice. Computers running 64-bit versions of Windows generally have more resources such as processing power and memory, than their 32-bit predecessors. Also, 64-bit applications can access more memory than 32-bit applications. Therefore, if your scenarios include large files and/or working with large data sets and your computer is running 64-bit version of Windows, 64-bit is the right choice when:

- You’re working with large data sets, like enterprise-scale Excel workbooks with complex calculations, many pivot tables, data connections to external databases, Power Pivot, 3D Map, Power View, or Get & Transform. The 64-bit version of Microsoft 365 may perform better in these cases.
- You’re working with extremely large pictures, videos, or animations in PowerPoint. The 64-bit version of Microsoft 365 may be better suited to handle these complex slide decks.
- You’re working with files over 2 GB in Project, especially if the project has many sub-projects.
- You’re developing in-house Microsoft 365 solutions like add-ins or document-level customization. Using the 64-bit version of Microsoft 365 lets you deliver a 64-bit version of those solutions as well as a 32-bit version.
- You’re working with the Large Number data type in Access, and while this data type is supported by 32-bit Access, you may see unexpected results when executing code or expressions that use native 32-bit VBA libraries. 64-bit VBA provides the LongLong data type which fully supports large numbers.

For more information please refer to [Choose between the 64-bit or 32-bit version of Office](https://support.microsoft.com/en-us/office/choose-between-the-64-bit-or-32-bit-version-of-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261).

::: tip Tip

If you are using ARM64-based Windows, you can select ARM64 (64-bit compatible) for better performance and compatibility.

:::

## Update channel

In most cases, `Current Channel` is the default channel. The table below lists the differences between the channels:

| Update Channel                   | Channel ID        | Release frequency                                | Feature updates                    |
| :--                              | :--               | :--                                              | :--                                |
| Current Channel                  | Current           | At least once a month, but on no set schedule    | Same as release frequency          |
| Semi-Annual Enterprise Channel   | SemiAnnual        | Once a month, on the second Tuesday of the month | Twice a year (in January and July) |
| Monthly Enterprise Channel       | MonthlyEnterprise | Once a month, on the second Tuesday of the month | Same as release frequency          |
| Office 2019 Perpetual Enterprise | PerpetualVL2019   | Once a month, on the second Tuesday of the month | None                               |
| Office 2021 Perpetual Enterprise | PerpetualVL2021   | Once a month, on the second Tuesday of the month | None                               |

> The Perpetual Enterprise channel is a dedicated channel for Office 2019/2021 volume products.

All of the channels listed in the table are stable channels and can be used on a daily basis.

Each channel releases security updates (if needed) on the second Tuesday of each month, which is scheduled.

For more information please refer to [Overview of update channels for Microsoft 365 Apps](https://docs.microsoft.com/en-us/deployoffice/overview-update-channels).

## Modules

### Office Deployment Tool

Office Deployment Tool is an official Microsoft tool that provides complete support for deploying Office.

### Office Tool Plus

Our module enables most of the features of the Office Deployment Tool. The following table lists the differences between them:

| Functions                                     | Office Deployment Tool | Office Tool Plus |
| :--                                           | :--                    | :--              |
| Remove existing MSI versions of Office        | ✓ | × |
| Install the same languages as the MSI version | ✓ | × |
| Use internal channels                         | × | ✓ |
| Install internal products                     | × | ✓ |

We recommend prioritizing the use of the Office Deployment Tool, and should only choose Office Tool Plus if there are issues with the Office Deployment Tool that cannot be resolved, or if there are special needs.

## Products

If you have a genuine Office license, install your own purchased version of Office.

If you want to use KMS or MAK to activate Office, install volume license products, such as Office 2019 Volume License or Office 2021 Volume License.

> Not sure if you have a genuine Office license? Login your [personal account](https://account.microsoft.com/services/) or your [enterprise account](https://portal.office.com/account/?ref=MeControl#subscriptions) to check.

::: details Office 365 Plan

| Office 365 Plan                   | Product ID             |
| --------------------------------- | :--------------------: |
| Microsoft 365 Apps for enterprise | O365ProPlusRetail      |
| Office 365 Enterprise E3          | O365ProPlusRetail      |
| Office 365 Enterprise E4          | O365ProPlusRetail      |
| Office 365 Enterprise E5          | O365ProPlusRetail      |
| Office 365 Midsize                | O365ProPlusRetail      |
| Office 365 Business               | O365BusinessRetail     |
| Office 365 Business Premium       | O365BusinessRetail     |
| Office Small Business Premium     | O365SmallBusPremRetail |
| Microsoft 365 E3                  | O365ProPlusRetail      |
| Microsoft 365 E5                  | O365ProPlusRetail      |
| Microsoft 365 Business            | O365BusinessRetail     |

:::

::: tip Tip

You can holding <kbd>Ctrl</kbd> to select multiple items when adding products. You can type product name or product ID in the filter box to filter the product list. Also you can type `|` in the filter box to filter by multiple conditions. For example, type `365|VisioPro` to filter Microsoft 365 products and Visio Professional products.

:::

### Applications

The application will display different items depending on the products you selected.

::: tip Suggestion

We recommend you to select the apps which you can understand, such as Word, PowerPoint and Excel.

:::

- `Groove` stands for **OneDrive for Business**.
- `Lync` stands for **Skype for Business**.

Some applications may require a reboot to complete the installation, such as *Teams* and *OneDrive*.

Bing is a extension for Chrome and Edge etc. For more information please visit [Microsoft Search in Bing and Microsoft 365 Apps for enterprise](https://docs.microsoft.com/en-us/deployoffice/microsoft-search-bing).

### Add-ons

The add-ons will display different items depending on the products you selected.

::: warning Warning

**DO NOT** uncheck add-ons if you cannot understand them. Unchecking add-ons may reduce Office functionality.

:::

- `DCF` stand for **Database Compare** and **Spreadsheet Compare**.
- `OSM` stand for **Telemetry Dashboard**.
- `OSMUX` stand for **Telemetry Log for Office**.

Learn more about [PowerPivot](https://support.microsoft.com/en-us/office/power-pivot-overview-and-learning-f9001958-7901-4caa-ad80-028a6d2432ed).

Learn more about [Power View](https://support.microsoft.com/en-us/office/power-view-overview-and-learning-5380e429-3ee0-4be2-97b7-64d7930020b6).

For more information about products, applications and add-ons, you can view [Office Products Information](https://www.coolhub.top/tech-articles/products.html).

## Languages

You can add one or more languages that you want. The first full type of language in the list determines the Shell UI culture, including shortcuts, right-click context menus, and tooltips. If you decide to change the Shell UI language after an initial installation, you have to reinstall Office.

If you do not add a language, Office will automatically match the system language, or fall back to the language specified in *Advanced settings - Installation settings - Fallback language* if the system language cannot be matched.

If you check `Deploy proofing tools only`, the language will be installed as proofing tools without display language.

::: tip Tip

You can holding <kbd>Ctrl</kbd> to select multiple items when adding languages. You can type language name or language ID in the filter box to filter the language list. Also you can type `|` in the filter box to filter by multiple conditions. For example, type `en-us|zh` to filter English (United States) and Chinese language packs.

:::

### Language types

| Type                           | Description                                                                                 |
| :----------------------------- | :------------------------------------------------------------------------------------------ |
| Full                           | Includes display language and proofing tools.                                               |
| Partial                        | Includes display language for some Office applications and includes proofing tools.         |
| Partial without proofing tools | Includes display language for some Office applications but does not include proofing tools. |
| Proofing tools                 | Only include spell checker.                                                                 |

## Installation files

When you download Office from Office Tool Plus, Office Tool Plus will automatically detected the Office installation and displays it here.

![Office installation](/images/en-us/deploy/office-installation.png)

::: tip Tips

Office installation files should show version number and languages information in its entirety without errors. If the installation files does not contain language, or contains only proofing tool, the installation will still require an Internet connection, otherwise the installation will fail.

:::

If you have local installations, you can click *Select file* and then specify any of the CAB files in the Office installation.

The Office ISO image should be mounted or extracted before selecting the CAB file contained within it.

If the installation shows an error, you should check and fix the problems before deploying.
