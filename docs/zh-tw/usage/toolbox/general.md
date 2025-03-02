# 一般工具 {#general-tools}

## 查詢 Office 版本 {#query-office-version}

您可以從 Microsoft 取得 Office 更新通道的版本資訊，包括通道名稱、分支、版本編號和建立時間。

![查詢 Office 版本](/images/zh-tw/toolbox/query-office-update-channel.webp)

如果要顯示內部通道，請啟用 [顯示內部產品和通道](/zh-tw/usage/settings.md#display-internal-products-and-channels)。

## 查詢錯誤碼描述 {#query-error-code-description}

錯誤碼通常以 `0x`（十六進位）開頭，或者是普通數字，例如 `2`（十進位）。

當您查詢錯誤碼時，Office Tool Plus 會顯示對應的錯誤描述。有時 Windows 可能會彈出啟用對話框，請按一下 **[顯示詳細資訊]** 來檢視錯誤碼的說明。

## 測試 KMS 主機可用性 {#test-kms-host-reachability}

預設情況下，Office Tool Plus 透過 **TCP 連線** 測試 KMS 主機是否可連線。

您也可以使用 [vlmcs](https://download.coolhub.top/Extensions/Components/) 元件來檢測 KMS 主機是否正常運作。

輸入您的 KMS 主機位址，然後按一下 **[測試]** 按鈕。

![測試 KMS 主機](/images/zh-tw/toolbox/test-kms.webp)
