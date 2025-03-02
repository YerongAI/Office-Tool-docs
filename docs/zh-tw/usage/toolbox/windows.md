# Windows 工具 {#windows-tools}

## 重設軟體保護服務 {#reset-software-protection-service}

此操作將刪除登錄中的部分與軟體保護相關的配置資訊，例如 KMS 主機位址與續約策略。如果 Office Tool Plus 偵測到您的軟體保護服務已被 `SppExtComObjHook.dll` 劫持，該 DLL 也將被刪除。

重設完成後，您需要重新設定 KMS 主機並啟用 Office。

::: details 適用情境

當啟用 Office 時發生以下錯誤：

- **0x8007000D**：資料無效。
- **0x8007007B**：檔案名稱、目錄名稱或磁碟區標籤語法不正確。

:::

## 重建 Windows 啟用權杖 {#rebuild-windows-activation-token}

此操作將刪除 `%SystemRoot%\System32\spp\store\2.0` 資料夾內的 `data.dat`、`tokens.dat` 和 `cache.dat` 檔案。

Windows 會嘗試重建這些權杖，您的 Windows 啟用狀態可能會遺失（數位授權啟用不會受影響），且 Office 需要重新安裝授權。

請等待數分鐘，讓 Windows 重新建立啟用權杖後，再執行其他啟用操作。

::: warning 警告

**請勿在沒有明確需求的情況下使用此功能。**

:::

::: details 適用情境

當啟用 Office 時發生以下錯誤：

- **0xC004E015**：軟體授權服務報告指出授權使用失敗。
- **0x8004E108**：軟體授權服務報告指出權杖存放中的權杖包含不正確的雜湊值。

:::

## 重設系統變數 {#reset-system-variables}

此操作將重設部分系統變數，例如 `%ProgramFiles%`、`%CommonProgramFiles%` 等。如果某些系統變數缺失，可能會導致 Office 安裝程式或 Click-to-Run 服務無法正常運作。

::: warning 警告

**請勿在沒有明確需求的情況下使用此功能。**

:::

::: details 適用情境

當使用 Office Tool Plus 安裝或移除 Office 時，出現 `The path is null or empty` 錯誤。

:::

## 修復 WMI 元件 {#repair-wmi-components}

此操作將重新註冊所有 WMI 元件。

::: warning 警告

**請勿在沒有明確需求的情況下使用此功能。**

:::

::: details 適用情境

當安裝 Office 授權時發生以下錯誤：

- **Invalid Class** (類別無效)。
- **0x80070057**：參數錯誤。

:::
