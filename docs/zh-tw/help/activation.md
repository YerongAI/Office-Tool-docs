# 啟用問答集

## 0x80131500

此錯誤代碼沒有特定意義，請參考錯誤訊息內容來排除問題。

## 0x80131539

此錯誤代碼沒有特定意義，請參考錯誤訊息內容來排除問題。

## 0x8004E108

> 軟體授權服務報告指出權杖存放中的權杖包含不正確的雜湊。

請參考 [重建 Windows 啟用權杖](/zh-tw/usage/toolbox/windows.md#rebuild-windows-activation-token)。

## 0x8007000D

> 資料無效。

請嘗試以下方法：

- 檢查您的作業系統時間是否正確。
- 檢查您的網路連線是否正常。
- 確保您使用的 KMS 主機可以正常運作。[如何測試？](/usage/toolbox/general.md#test-kms-host-reachability)

請執行以下操作：

- [重設軟體保護服務](/usage/toolbox/windows.md#reset-software-protection-service)。
- 嘗試再次啟用。

## 0x8007007B

> 檔案名稱、目錄名稱或磁碟區標籤語法不正確。

解決方法與 [0x8007000D](activation.md#_0x8007000d) 相同。

## 0x8007232B

> 找不到 DNS 名稱。

- KMS 主機尚未設定，請先設定後再嘗試啟用。
  - 如下圖所示，如果顯示 `N/A`，則代表未配置 KMS 主機：
  ![No KMS configured](/images/en-us/activation/no-kms-configured.webp)
- KMS 主機地址無效，請檢查並重新嘗試。
- 嘗試更改 DNS 並重試。
- 嘗試使用不同的網路進行連線並重試。

## 0x80080005

> 伺服器執行失敗。

請嘗試[重設軟體保護服務](/usage/toolbox/windows.md#reset-software-protection-service)，然後再次啟用。

## 0xC004E015

> 軟體授權服務報告指出授權使用失敗。

解決方法與 [0x8004E108](activation.md#_0x8004e108) 相同。

## 0xC004F015

> 軟體授權服務報告指出未安裝授權。

如果您的 Office 已啟用，可以忽略此訊息。

如果您的 Office 尚未啟用，請檢查您的啟用步驟是否正確，或從 Microsoft 購買正版 Office。

## 0xC004F017

> 軟體授權服務報告指出未安裝授權。

解決方法與 [0xC004F015](activation.md#_0xc004f015) 相同。

## 0xC004F069

> 軟體授權服務報告指出找不到產品 SKU。

您安裝的 Office 產品金鑰沒有對應的授權，請先安裝對應的 Office 授權，再安裝產品金鑰。

## 0xC004F074

> 軟體授權服務報告指出無法啟用產品。無法聯繫金鑰管理服務(KMS)。如需其他資訊，請參閱應用程式事件記錄檔。

請嘗試以下方法：

- 檢查您的網路連線是否正常。
- 確保您使用的 KMS 主機可以正常運作。[如何測試？](/usage/toolbox/general.md#test-kms-host-reachability)

請執行以下操作：

- [重設軟體保護服務](/usage/toolbox/windows.md#reset-software-protection-service)。
- 嘗試再次啟用。

## 0xC004F075

> 軟體授權服務報告因為服務停止中，所以無法完成作業。

請確保系統服務 **Software Protection (sppsvc)** 正在執行。如果該服務已停止，請手動啟動或重新啟動電腦。

## .NET Framework 問題

> 無法找到所需函式於 `C:\Windows\Microsoft.NET\Framework64\v4.0.30319\wminet_utils.dll`，請更新 .NET Framework。

請透過 Windows Update 檢查並安裝所有 .NET Framework 更新。

## 找不到有效的 Office KMS 授權

若要使用 KMS 啟用 Office，您需要安裝 Office 的大量授權 (Volume License) 和 GVLK (Generic Volume License Key)。

通常，在 Office Tool Plus 安裝對應的大量授權後，即可透過 KMS 進行啟用，但以下情況例外：

- **SPLA 授權**：SPLA 授權只能使用 MAK 啟用，不支援 KMS 啟用。
- **預覽版本**：預覽版產品沒有內建 GVLK，因此需要手動安裝 GVLK 來進行 KMS 啟用。

## 無效的類別 (Invalid Class)

請參考 [修復 WMI 元件](/usage/toolbox/windows.md#repair-wmi-components)。

## 我們偵測到您剛更新了授權

> 我們偵測到您剛更新了授權。請重新啟動 Microsoft Project 以使變更生效。

請參考 [重設 Office 設定為預設值](/usage/toolbox/office.md#reset-office-settings-to-defaults)。