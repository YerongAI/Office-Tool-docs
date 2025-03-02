# 前置作業 {#prepare}

建立 ISO 映像檔可將 Office Tool Plus 和 Office 安裝檔案包裝在一起。

我們建議您每月更新一次 Office ISO 檔案，以符合 [Microsoft 的更新排程](/zh-tw/usage/deploy/settings/basic#update-channel)。

要建立 Office ISO，請完成以下步驟：

- 下載適當版本的 Office Tool Plus。
- 建立 Office ISO 檔案。
- 測試 Office ISO 是否能正常運作。

## 注意事項 {#notices}

Office Tool Plus 預設會下載適用於目前作業系統版本的 Office。如需下載適用於其他 Windows 版本的 Office，請變更 **設定 - 下載 - Windows 版本**。

![下載設定截圖](/images/zh-tw/settings/download-settings.webp)

Office Tool Plus 在 ISO 模式下會自動調整某些設定。您無需更改我們在教學中未提及的設定。

## 下載適當的 Office Tool Plus {#download-the-appropriate-office-tool-plus}

我們建議您下載[包含執行時元件的 Office Tool Plus](/zh-tw/introduction/download)。

最佳實踐是根據 Office 的架構選擇適當的 Office Tool Plus 版本。例如，若要建立 64 位元的 Office 映像檔，建議使用 64 位元的 Office Tool Plus。如果您不確定，則可以選擇 32 位元的 Office Tool Plus。

## 建立 Office ISO {#create-office-iso}

您可以透過以下方式建立 Office ISO：

1. [無設定檔模式](no-config.md)：手動設定並正常部署。
2. [預設設定模式](default-config.md)：自動載入設定，並詢問使用者是否開始部署。
3. [使用 ISO 命令](iso-command.md)：搜尋設定檔並直接開始部署。
4. [使用 `/loadconfig` 命令](config-command.md)：根據指定的命令建立設定並直接開始部署。
5. [使用 `/deploy` 命令](deploy-command.md)：根據指定的命令建立設定並直接開始部署。

## 結束 {#the-end}

當您完成 Office ISO 檔案的建立後，建議您先測試 Office ISO 是否正常運作，再進行使用。
