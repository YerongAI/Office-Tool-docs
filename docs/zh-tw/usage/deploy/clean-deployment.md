# 首次部署

在部署 Office 時，可以同時進行安裝與解除安裝，因此您可以將多個步驟結合起來，而無需分開執行。

## 線上安裝

線上安裝需要連接網際網路。如果您的網路連線品質不佳，安裝時間可能會較長。

開啟 Office Tool Plus，前往 [部署] 功能頁，並執行以下操作：

- 新增[產品](/usage/deploy/settings/basic.md#products)。
- 新增[語言](/usage/deploy/settings/basic.md#languages)。

請根據您的需求新增產品和語言。

---

如有需要，您也可以檢查以下設定。

### 架構

預設情況下，將安裝 32 位元的 Office。如需更多資訊，請參閱[架構](/usage/deploy/settings/basic.md#architecture)章節。

### 更新通道

如果您要安裝 Office 2019/2021/2024 的批量授權版本，則需要將更新通道設定為 **Office 2019/2021/2024 永久企業版通道**。其他情況下，請使用預設通道。如需更多資訊，請參閱[更新通道](/usage/deploy/settings/basic.md#update-channel)章節。

### 應用程式

我們通常建議您僅選擇所需的應用程式，例如 Word、PowerPoint 和 Excel。如需更多資訊，請參閱[應用程式](/usage/deploy/settings/basic.md#applications)章節。

### 先下載後安裝

當此選項關閉時，Office 將在下載過程中同步部署；當此選項開啟時，則會在下載完成後才進行部署。

![先下載後安裝](/images/en-us/deploy/download-first.webp)

- **下載過程中部署**：此時無法暫停或取消安裝。Office 安裝程式將直接從 Office CDN 下載並安裝 Office。如果您的網路連線不佳，安裝過程可能會卡住。
- **下載完成後部署**：此操作通常由 Office Tool Plus 執行，因此您可以在安裝開始前暫停或取消下載。一旦下載完成，您可以離線安裝 Office。

---

完成設定並確認無錯誤後，即可開始部署 Office。

## 離線安裝

離線安裝是指使用已打包的安裝檔案來安裝 Office。

如果您有 `.iso` 映像檔，可以將其掛載為 DVD 磁碟機。如果您有壓縮檔案（例如 `.zip`、`.7z`、`.rar`），請先將其解壓縮至資料夾。

掛載/解壓縮後，從安裝檔案執行 Office Tool Plus。如果尚未安裝，請先[下載](/introduction/download) Office Tool Plus。

開啟 Office Tool Plus 後，前往 [部署] 功能頁，並確保安裝檔案已載入。如果未載入，請按一下 **[選取]** 按鈕，然後選擇安裝檔案。

![Office 安裝](/images/en-us/deploy/office-installation.webp)

::: tip 提示

Office 安裝檔案應完整顯示版本號與語言資訊，且不應出現錯誤。如果安裝檔案不包含語言，或僅包含校訂工具，則安裝過程仍需網際網路連線，否則安裝將失敗。

:::

載入安裝檔案後，請執行以下操作：

- 新增[產品](/usage/deploy/settings/basic.md#products)。
- 新增[語言](/usage/deploy/settings/basic.md#languages)。
- 配置[應用程式](/usage/deploy/settings/basic.md#applications)（如有需要）。

系統已根據安裝檔案自動匹配架構與更新通道，因此通常無需手動更改，除非您需要安裝多個版本的 Office。語言也應與安裝檔案匹配。如果安裝檔案不包含您新增的語言，安裝過程仍將需要網際網路連線，否則安裝將失敗。

如果 Office Tool Plus 在新增產品時提示該產品無法安裝於所選通道，則表示您下載的 Office 安裝檔案不支援該產品。請選擇不同的產品，或下載其他 Office 安裝檔案。

如果一切無誤，請按一下 **[開始部署]**，立即開始安裝。