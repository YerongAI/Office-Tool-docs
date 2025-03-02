# 什麼是 Office Tool Plus？ {#what-is-office-tool-plus}

Office Tool Plus 是一款強大且實用的 Office 部署工具。

Office Tool Plus 基於 [Office 部署工具](https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool) 開發，能夠輕鬆部署 Office。它整合了 `Thunder` 及 [Downloader](https://github.com/bezzad/Downloader) 下載引擎，使您可以更快速地下載 Office。此外，您還可以使用 Office Tool Plus 提供的小工具來管理與啟用 Office。

支援的產品包括：

- Microsoft 365。
- Office 2016、2019、2021、2024。
- Visio 2016、2019、2021、2024 及 Visio Online Plan 2。
- Project 2016、2019、2021、2024 及 Project Online Desktop Client。

## 功能特色 {#features}

- 建立 Office 安裝配置，配置可匯出至本機或從本機來源及網路匯入。
- 支援下載所有 Office 更新通道及語言版本。
- 安裝 Office 或修改現有安裝，如新增產品、語言和應用程式，或解除安裝它們。
- 建立 Office ISO 檔案，支援預設與靜默安裝配置。
- 支援線上啟用、電話啟用及 KMS 啟用 Office。
- 管理 Office 授權，包括授權安裝、金鑰管理及 KMS 設定。
- 變更 Office 更新通道，無需重新安裝即可升級或降級 Office。
- 移除 Office，包括無法正常解除安裝時的強制移除，支援所有 Office 版本。
- 內建 Office 工具，例如重設設定與修復 Office 問題。
- 透過 Office COM 轉換 Office 文件，確保快速且穩定的效能。
- 個人化佈景主題並自訂 Office Tool Plus。

::: tip 注意

- Office Tool Plus 只提供啟用管理，您需要持有合法授權才能啟用您的產品。

:::

## 組件與架構 {#components-and-structure}

```txt
Office Tool
├── Office Tool Plus.exe (主程式)
├── Office Tool Plus.Console.exe (命令列輔助工具)
├── hostfxr.dll (.NET 主機)
├── shared (.NET 執行環境)
└── files
    ├── setup.exe (Microsoft Office 部署工具)
    ├── preferences (Office 應用程式設定數據，來自 Microsoft)
    └── Thunder (Thunder 下載引擎相關檔案)
```

正常情況下，Office Tool Plus 會自動下載所需的元件並保持最新版本。

如果某些元件遺失或無法自動下載，建議您重新下載 Office Tool Plus 以修復此問題。
