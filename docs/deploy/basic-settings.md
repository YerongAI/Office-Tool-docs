# Basic settings

## Deploy settings

### Deployment mode

| Mode            | Description                                                                               |
| :-------------- | :---------------------------------------------------------------------------------------- |
| Edit config     | Only for exporting/modifying XML configuration.                                           |
| Download        | Only for downloading Office installation.                                                 |
| Install         | You can install, uninstall, modify Office, etc.                                           |
| Create ISO file | Package the Office installation with Office Tool Plus. Write configuration if configured. |

The Office installation contains Office, Visio and Project, provided by Microsoft.

### Architecture

**In general, we recommend that you install the 32-bit version of Office**, 64-bit is the right choice when:

- You’re working with large data sets, like enterprise-scale Excel workbooks with complex calculations, many pivot tables, data connections to external databases, Power Pivot, 3D Map, Power View, or Get & Transform. The 64-bit version of Office may perform better in these cases.
- You’re working with extremely large pictures, videos, or animations in PowerPoint. The 64-bit version of Office may be better suited to handle these complex slide decks.
- You’re working with files over 2 GB in Project, especially if the project has many sub-projects.
- You’re developing in-house Office solutions like add-ins or document-level customization. Using the 64-bit version of Office lets you deliver a 64-bit version of those solutions as well as a 32-bit version.
- You’re working with the Large Number data type in Access, and while this data type is supported by 32-bit Access, you may see unexpected results when executing code or expressions that use native 32-bit VBA libraries. 64-bit VBA provides the LongLong data type which fully supports large numbers.

For more information, see [Choose between the 64-bit or 32-bit version of Office](https://support.microsoft.com/en-us/office/choose-between-the-64-bit-or-32-bit-version-of-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261).

### Update channel

In most cases, it is sufficient to select the `Current Channel`, the differences between which are listed in the following table.

| Channel                          | Channel ID        | Release frequency                          | Feature updates            |
| :------------------------------- | :---------------: | :----------------------------------------- | :------------------------- |
| Current Channel                  | Current           | At least once a month (likely more often). | Same as release frequency. |
| Semi-Annual Enterprise Channel   | SemiAnnual        | On the second Tuesday of the month.        | January and July.          |
| Monthly Enterprise Channel       | MonthlyEnterprise | On the second Tuesday of the month.        | Same as release frequency. |
| Office 2019 Perpetual Enterprise | PerpetualVL2019   | On the second Tuesday of the month.        | None.                      |
| Office 2021 Perpetual Enterprise | PerpetualVL2021   | On the second Tuesday of the month.        | None.                      |

> For Office 2019/2021 Volume License products, the perpetual enterprise channel is the dedicated channel.

All the channels listed in the table are stable channels.

Each channel releases security updates (if needed) on the second Tuesday of each month, which is the set schedule.

For more information, see [Overview of update channels for Microsoft 365 Apps](https://docs.microsoft.com/en-us/deployoffice/overview-update-channels).

### Installation module

#### Office Deployment Tool

The Office Deployment Tool is an official Microsoft tool for deploying Office. Provides full support for deploying Office.

#### Office Tool Plus

The module can do most of the features of the Office Deployment Tool, and also features that the Office Deployment Tool cannot do.

The following content shows the differences between them.

| Functions          | Office Deployment Tool | Office Tool Plus |
| :----------------- | :--------------------- | :--------------- |
| Remove existing MSI versions of Office.                | ✓ | × |
| Install the same language as the previous MSI version. | ✓ | × |
| Use Office internal channels                           | × | ✓ |
| Install internal products                              | × | ✓ |

We recommend that Office Deployment Tools be used first. If there is a problem with Office Deployment Tools that cannot be fixed, or if there are special needs, use Office Tool Plus as installation module.

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

## Applications

The application will display different items depending on the products you selected.

`Groove` stands for **OneDrive for Business**, `Lync` stands for **Skype for Business**. Some applications, such as Teams and OneDrive, may require a system restart to complete the installation.

Bing is a extension for Chrome and Edge etc. For more information, visit [Microsoft Search in Bing and Microsoft 365 Apps for enterprise](https://docs.microsoft.com/en-us/deployoffice/microsoft-search-bing).

When you select a product such as Visio or Project, it does not appear in the list of applications.

For information on products and applications, you can view [Office Products Information](https://www.coolhub.top/tech-articles/products.html).

## Languages

You can add one or more languages that you want. The first full type of language in the list determines the Shell UI culture, including shortcuts, right-click context menus, and tooltips. If you decide that you want to change the Shell UI language after an initial installation, you have to reinstall Office.

If you do not add a language, Office will automatically match the system language, or fall back to the language specified in *Advanced settings - Installation settings - Fallback language* if the system language cannot be matched.

If you check *Deploy proofing tools only*, the language will be installed as proofing tools.

### Language Type

| Type                           | Description                                                                                 |
| :----------------------------- | :------------------------------------------------------------------------------------------ |
| Full                           | Includes display language and proofing tools.                                               |
| Partial                        | Includes display language for some Office applications and includes proofing tools.         |
| Partial without proofing tools | Includes display language for some Office applications but does not include proofing tools. |
| Proofing tools                 | Only include spell checker.                                                                 |

## Installation files

When you download Office from Office Tool Plus, Office Tool Plus will automatically detected the Office installation and displays it here.

If you have local installations, you can click *Select file* and then specify any of the CAB files in the Office installation.

The Office ISO image should be mounted or extracted before selecting the CAB file contained within it.

If the installation shows an error, you should check and fix the problems before deploying.
