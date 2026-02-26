# 修復 WPA 登錄表

::: danger 警告

除非明確需求，否則不要執行此操作。

:::

當系統中的 `HKEY_LOCAL_MACHINE\SYSTEM\WPA` 登錄表發生損壞時，會導致 Windows 和 Office 激活失敗，也有可能導致 Software Protection 服務持續占用 CPU。此操作將刪除該登錄表項，以便系統重新創建它。

由於這個登錄表受系統保護，因此我們必須在 Windows PE 環境下進行操作。

## 操作步驟

- 下載[這個文件](https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip)。
- 解壓後將 `rearm.cmd` 文件複製到系統根目錄，例如 `C:\rearm.cmd`。
- 以管理員身份運行此命令以進入 Windows RE 環境: `shutdown /f /r /o /t 0`。
- 在 Windows RE 環境中，選擇“疑難解答” > “高級選項” > “命令提示符”。
- 在命令提示符中，輸入以下命令並按回車: `C:\rearm.cmd`。
- 腳本執行完成後，重新啟動系統即可。

::: tip 提示

如果在執行 `C:\rearm.cmd` 命令時提示命令無法識別，請運行 `bcdedit | find "osdevice"` 命令，查看系統分區的盤符，並將 `C:\rearm.cmd` 中的 `C:` 替換為正確的盤符。例如 `D:\rearm.cmd`。

:::
