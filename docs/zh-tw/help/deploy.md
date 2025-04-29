# 部署問答集 {#deploy-questions}

## Windows 終止支援與 Microsoft 365 應用程式 {#windows-end-of-support-and-microsoft-365-apps}

Microsoft 365 應用程式可能無法在舊版系統上正常安裝或執行。Microsoft 強烈建議您升級至受支援的作業系統，以獲得更好的使用體驗。

如果您仍希望在舊版 Windows 上安裝 Microsoft 365 應用程式，請選擇 **目前通道 (Current Channel)** 作為部署通道。如果安裝過程中出現「您的作業系統不受支援」的訊息，您可以嘗試將安裝模組從 `Office 部署工具 (Office Deployment Tool)` 更改為 `Office Tool Plus`，以跳過相容性檢查。

欲了解更多資訊，請參閱：

- [Windows 7 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-7-support)
- [Windows 8 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-8-support)
- [Windows 8.1 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-81-support)
- [Windows 10 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-10-support)
- [Windows Server 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-server-support)

::: warning 注意

即使您變更了安裝模組，也無法在 Windows 7 上安裝新版 Office。

:::

## 如何安裝 Office 至其他路徑

Microsoft 不允許將 Office 安裝至其他路徑，我們也不建議強制更改安裝路徑。

## 路徑為空值或無效

要解決此問題，請前往 **工具箱** 功能頁，並[重設系統變數](/zh-tw/usage/toolbox/windows.md#reset-system-variables)。

## Office 安裝卡住

若 Office 安裝進度停滯在 0-49%：

這表示 Office 安裝程式無法取得必要的檔案。

- 如果您是線上安裝，請檢查網路連線，或嘗試使用其他網路。
- 啟用 [先下載後安裝](/zh-tw/usage/deploy/clean-deployment.md#download-first)，這可以減少網路問題帶來的影響。
- 嘗試[驗證 Office 安裝檔案](/zh-tw/usage/deploy/settings/basic.md#installation-files)，有時候問題來自於安裝檔案損壞。

若 Office 安裝進度停滯在 50-100%：

這表示安裝過程中發生錯誤。

- 如果安裝程式允許您忽略此錯誤，則您可以選擇忽略，但 VBA 或某些功能可能無法使用。
- 嘗試關閉或退出所有第三方軟體，某些第三方軟體可能會錯誤地阻擋安裝程式運作。
- 嘗試[移除 Office](/zh-tw/usage/toolbox/office.md#remove-office)，然後重新安裝。

如果上述方法均無法解決問題，您可能需要重新安裝 Windows。
