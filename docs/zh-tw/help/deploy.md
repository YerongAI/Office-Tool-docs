# 部署問答集 {#deploy-questions}

Here you can find the causes and solutions for most Office installation problems. If you are unable to resolve the issue yourself, you can also contact us for assistance in analyzing/solving the problem; our team can provide highly professional technical support.

## Windows 終止支援與 Microsoft 365 應用程式 {#windows-end-of-support-and-microsoft-365-apps}

Microsoft 365 Apps may not run properly on the older systems. Microsoft recommend you move to a supported operating system for better experience.

The table below lists the relationship between various Windows versions and Office:

| Windows                       | Office 2019 - 2024 | Latest Build on Current Channel |
| :--                           | :-:                | :--                             |
| Windows 7                     | ×                  | 16.0.12527.22286                |
| Windows 8                     | ×                  | 16.0.12730.20270                |
| Windows 8.1                   | ×                  | 16.0.16026.20200                |
| Windows 10 1507 to 1803 (RS4) | √                  | 16.0.19725.xxxxx                |
| Windows Server 2016           | √                  | 16.0.19725.xxxxx                |
| Windows 10 1809 (RS5) to 22H2 | √                  | 16.0.20326.xxxxx                |
| Windows Server 2019           | √                  | 16.0.20326.xxxxx                |
| Windows Server 2022           | √                  | 16.0.20326.xxxxx                |

For versions of Windows not listed (such as Windows 11), it is still possible to deploy the latest version of Office and continue receiving feature updates for Office.

欲了解更多資訊，請參閱：

- [Windows 7 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-7-support)
- [Windows 8 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-8-support)
- [Windows 8.1 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-81-support)
- [Windows 10 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-10-support)
- [Windows Server 終止支援與 Microsoft 365 應用程式](https://learn.microsoft.com/zh-tw/microsoft-365-apps/end-of-support/windows-server-support)

## 如何安裝 Office 至其他路徑

Microsoft 不允許將 Office 安裝至其他路徑，我們也不建議強制更改安裝路徑。

## These installation files contains errors {#these-installation-files-contains-errors}

Try to delete installation files on [Installation files](/zh-tw/usage/deploy/settings/basic.md#installation-files) panel, and download again.

If the problem persists, try to [Enable HTTPS connection](/zh-tw/usage/settings.md#connect-using-https), or switch to a different network, then try again.

## 如何終止 Office 安裝程式 {#how-to-terminate-office-installer}

如果您因任何原因需要終止 Office 安裝程式，請前往工具箱頁面[移除 Office](/zh-tw/usage/toolbox/office.md)，然後重新部署 Office。

::: warning 注意

如果 Office 安裝程式卡在 `We're getting things ready...`，請透過工作管理員強制結束對應的 setup.exe 進程。

:::

## Office 安裝卡住

若 Office 安裝進度停滯在 0-49%：

這表示 Office 安裝程式無法取得必要的檔案。

- 如果您是線上安裝，請檢查網路連線，或嘗試使用其他網路。
- 啟用 [先下載後安裝](/zh-tw/usage/deploy/first-deployment.md#download-first)，這可以減少網路問題帶來的影響。
- 嘗試[驗證 Office 安裝檔案](/zh-tw/usage/deploy/settings/basic.md#installation-files)，有時候問題來自於安裝檔案損壞。

若 Office 安裝進度停滯在 50-100%：

這表示安裝過程中發生錯誤。

- 如果安裝程式允許您忽略此錯誤，則您可以選擇忽略，但 VBA 或某些功能可能無法使用。
- 嘗試關閉或退出所有第三方軟體，某些第三方軟體可能會錯誤地阻擋安裝程式運作。
- 嘗試[移除 Office](/zh-tw/usage/toolbox/office.md#remove-office)，然後重新安裝。

如果以上步骤不起作用，您可以在工具箱页面收集 Office 安装日志，然后进行分析以找出问题所在。
