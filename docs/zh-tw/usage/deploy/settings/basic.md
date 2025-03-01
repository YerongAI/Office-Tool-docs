# 基礎設定

## 模式

| 模式             | 說明 |
| :--             | :-- |
| 編輯配置        | 建立或修改 XML 配置，無法開始安裝。 |
| 下載            | 下載 Office 安裝檔案，無法開始安裝。 |
| 安裝            | 安裝、解除安裝或修改 Office。 |
| 建立 ISO 檔案   | 使用 Office Tool Plus 將 Office 安裝檔案打包成 ISO。 |

Office 安裝檔案包含 Office、Visio 和 Project，並由 Microsoft 提供。

## 架構

預設情況下，Office 會安裝 **32 位元版本**。相較於 32 位元系統，運行 64 位元 Windows 的電腦通常具有更多的資源，例如更強的處理能力和更大的記憶體。此外，64 位元應用程式可以存取比 32 位元應用程式更多的記憶體。因此，如果您的工作涉及大型文件或處理大量資料，且電腦運行 64 位元 Windows，則建議安裝 **64 位元 Office**，特別是在以下情況：

- 您需要處理大型資料集，例如具有複雜計算、大量樞紐分析表、外部資料庫連接的企業級 Excel 活頁簿，或使用 **Power Pivot**、**3D 地圖**、**Power View**、**資料轉換 (Get & Transform)** 等功能。
- 您在 PowerPoint 中使用高解析度圖片、影片或動畫。
- 您的 Project 文件超過 2GB，特別是包含多個子專案的情況。
- 您正在開發 Microsoft 365 解決方案，例如增益集或文件級自訂功能，64 位元版本可以提供更好的相容性。
- 您在 Access 中使用 **大數據類型**。雖然 32 位元 Access 也支援，但使用 32 位元 VBA 庫可能會產生意外結果，而 64 位元 VBA 提供 **LongLong** 資料類型，完全支援大數據。

如需更多資訊，請參閱 [選擇 64 位元或 32 位元 Office](https://support.microsoft.com/en-us/office/choose-between-the-64-bit-or-32-bit-version-of-office-2dee7807-8f95-4d0c-b5fe-6c6f49b8d261)。

::: tip 提示

如果您使用 **ARM64** 架構的 Windows，請選擇 **ARM64 (64 位元相容)** 以獲得更好的效能與相容性。

:::

## 更新通道

在大多數情況下，**「目前通道」(Current Channel)** 是預設通道。以下是各通道的差異：

| 更新通道                          | 通道 ID            | 發佈頻率                                     | 功能更新頻率 |
| :--                               | :--               | :--                                         | :-- |
| 目前通道                          | Current           | 每月至少一次，不固定發佈時間                 | 與發佈頻率相同 |
| 半年企業通道                      | SemiAnnual        | 每月一次，固定在每月第二個星期二             | 每年兩次（1 月與 7 月） |
| 企業用每月通道                    | MonthlyEnterprise | 每月一次，固定在每月第二個星期二             | 與發佈頻率相同 |
| Office 2019 永久企業通道          | PerpetualVL2019   | 每月一次，固定在每月第二個星期二             | 無 |
| Office 2021 永久企業通道          | PerpetualVL2021   | 每月一次，固定在每月第二個星期二             | 無 |
| Office 2024 永久企業通道          | PerpetualVL2024   | 每月一次，固定在每月第二個星期二             | 無 |

> **永久企業版通道 (Perpetual Enterprise Channel)** 是專門為 Office 2019/2021/2024 批量授權產品提供的通道。

所有通道都屬於 **穩定版本**，適合日常使用。此外，每個通道的 **安全性更新**（如果有）都會在 **每月第二個星期二** 進行釋出。

如需更多資訊，請參閱 [Microsoft 365 應用程式的更新通道概述](https://docs.microsoft.com/en-us/deployoffice/overview-update-channels)。

## 模組

### Office 部署工具 (ODT)

Office 部署工具 (ODT) 是 Microsoft 官方提供的 Office 部署工具，支援完整的 Office 安裝與管理功能。

### Office Tool Plus

Office Tool Plus 啟用了 Office 部署工具的大部分功能。以下是兩者的比較：

| 功能                                       | Office 部署工具 | Office Tool Plus |
| :--                                       | :--            | :--              |
| 移除舊版 MSI 版本的 Office                 | ✔️ | ❌ |
| 安裝與 MSI 版本相同的語言                  | ✔️ | ❌ |
| 使用內部通道                               | ❌ | ✔️ |
| 安裝內部測試產品                           | ❌ | ✔️ |

> **建議優先使用 Office 部署工具**，如果 Office 部署工具無法解決某些問題，或有特殊需求時，才選擇使用 Office Tool Plus。

## 產品

如果您擁有 **正版 Office 授權**，請安裝您購買的 Office 版本。

如果您要使用 **KMS 或 MAK** 啟用 Office，請選擇批量授權產品，例如 **Office 2019/2021 Volume License**。

> **不確定是否擁有正版授權？** 請登入您的 [個人帳戶](https://account.microsoft.com/services/) 或 [企業帳戶](https://portal.office.com/account/?ref=MeControl#subscriptions) 來查看您的 Office 授權。

::: details Office 365 方案

| Office 365 方案                   | 產品識別碼              |
| --------------------------------- | :--------------------: |
| Microsoft 365 Apps 企業版         | O365ProPlusRetail      |
| Office 365 企業版 E3              | O365ProPlusRetail      |
| Office 365 企業版 E4              | O365ProPlusRetail      |
| Office 365 企業版 E5              | O365ProPlusRetail      |
| Office 365 中小型企業版            | O365ProPlusRetail      |
| Office 365 商務版                 | O365BusinessRetail     |
| Office 365 商務進階版              | O365BusinessRetail     |
| Office 小型企業進階版              | O365SmallBusPremRetail |
| Microsoft 365 E3                  | O365ProPlusRetail      |
| Microsoft 365 E5                  | O365ProPlusRetail      |
| Microsoft 365 企業版               | O365BusinessRetail     |

:::

::: tip 提示

新增產品時，您可以按住 **<kbd>Ctrl</kbd>** 選擇多個項目。您也可以在篩選框中輸入 **產品名稱** 或 **產品 ID** 來篩選列表。此外，可以使用 **`|`** 來設定多重條件篩選，例如輸入 `365|VisioPro` 可篩選 **Microsoft 365 產品** 及 **Visio Professional** 產品。

:::

### 應用程式

應用程式列表會根據您選擇的產品而變動。

::: tip 建議

建議您只選擇熟悉的應用程式，例如 **Word、PowerPoint、Excel**。

:::

- `Groove` 代表 **OneDrive for Business**。
- `Lync` 代表 **Skype for Business**。

某些應用程式（例如 **Teams** 和 **OneDrive**）可能需要重新啟動電腦才能完成安裝。

Bing 是 Chrome 和 Edge 等瀏覽器的擴充功能。如需更多資訊，請參閱 [Microsoft Search in Bing 和 Microsoft 365 Apps for Enterprise](https://docs.microsoft.com/en-us/deployoffice/microsoft-search-bing)。

### 附加元件

附加元件的項目會根據您選擇的產品而有所不同。

::: warning 警告

**請勿**取消選取不瞭解的附加元件。取消選取可能會降低 Office 的功能。

:::

- `DCF` 代表 **Database Compare** 和 **Spreadsheet Compare**。
- `OSM` 代表 **Telemetry Dashboard**。
- `OSMUX` 代表 **Telemetry Log for Office**。

瞭解更多關於 [PowerPivot](https://support.microsoft.com/en-us/office/power-pivot-overview-and-learning-f9001958-7901-4caa-ad80-028a6d2432ed)。

瞭解更多關於 [Power View](https://support.microsoft.com/en-us/office/power-view-overview-and-learning-5380e429-3ee0-4be2-97b7-64d7930020b6)。

如需更多關於產品、應用程式和附加元件的資訊，請參閱 [Office 產品資訊](https://www.coolhub.top/tech-articles/products.html)。
## 語言

您可以新增一種或多種語言。列表中的第一個完整語言將作為 **Shell UI 語言**，包含捷徑、右鍵選單和工具提示。如果安裝後想變更 Shell UI 語言，則需要重新安裝 Office。

如果不新增語言，Office 將自動匹配系統語言，或回退至 **進階設定 - 安裝設定 - 備用語言** 指定的語言。

> **僅安裝校訂工具 (Proofing Tools)**，則語言將作為拼字檢查工具，而不會變更 Office 介面語言。

### 語言類型

| 類型               | 說明 |
| :--               | :-- |
| 完整版            | 包含 **顯示語言** 和 **校訂工具**。 |
| 部分語言          | 部分 Office 應用程式的 **顯示語言**，包含 **校訂工具**。 |
| 無校訂工具的部分語言 | 部分 Office 應用程式的 **顯示語言**，不包含 **校訂工具**。 |
| 校訂工具          | 只包含 **拼字檢查工具**。 |

## 安裝檔案

當您使用 Office Tool Plus 下載 Office 時，Office Tool Plus 會自動偵測安裝內容，並顯示在此處。

::: tip 提示

Office 安裝檔案應完整顯示版本號與語言資訊，並且不應出現錯誤。如果安裝檔案未包含語言，或僅包含校訂工具，則仍需網際網路連線，否則安裝將失敗。

:::

如果您已擁有本機安裝檔案，請點擊 [選擇檔案]，然後指定 Office 安裝中的 CAB 檔案。

在選擇 CAB 檔案之前，請先將 Office ISO 映像檔掛載 或 解壓縮，以便存取其中的檔案。

如果安裝過程出現錯誤，請先檢查並修正問題，再進行部署。