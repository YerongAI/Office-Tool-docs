# Office 工具

## 移除 Office

支援移除所有版本的 Office。

如果在移除 Office 時發生錯誤，您可以稍後再試或手動修復。

如果啟用了「**同時移除 Microsoft Store 版 Office**」，Office Tool Plus 會執行以下 PowerShell 命令來移除 Office：

```powershell
Get-AppxPackage -name "Microsoft.Office.Desktop" | Remove-AppxPackage
```

如果啟用了「**同時清除啟用資訊**」，Office Tool Plus 會移除所有 Office 授權與產品金鑰。

欲了解更多資訊，請參閱「[從電腦解除安裝 Office](https://support.microsoft.com/en-us/office/uninstall-office-from-a-pc-9dd49b83-264a-477a-8fcc-2fdf5dbf61d8)」。

## 變更 Office 更新通道

此功能允許您變更 Office 更新通道，使您能夠在不重新安裝的情況下升級或降級 Office。

::: warning 注意

Office 永久企業版的通道為鎖定狀態，無法變更，也無法從其他通道切換至該通道。

:::

## 變更 Office 產品擁有者

Office 產品擁有者指的是授權的歸屬者，例如下圖中的 *Yerong™ | NekoNeko*：

![Product owner](/images/en-us/product-owner.webp)

當您直接設定新的名稱時，Office Tool Plus 會嘗試更改所有 vNext 授權與傳統 Office 授權的名稱。如果您需要單獨更改特定授權的名稱，請參考以下方法。

::: warning 注意

Office Tool Plus 無法識別您自行安裝的傳統 Office 授權，因此您需要為安裝的授權單獨設定名稱。

:::

::: details 變更 vNext 授權的擁有者

1. **取得 vNext 授權的使用者 ID**  
   如下圖所示，前往啟用功能頁，在 Office 授權列表中找到您要變更的授權，然後點選 `複製使用者識別碼` 按鈕。

   ![Copy user ID](/images/en-us/activation/check-vNext-license.webp)

2. **輸入新的擁有者名稱**  
   返回工具箱，在 `變更 Office 產品擁有者` 中按照以下格式輸入 `[使用者 ID]:[名稱]`  

   - `使用者 ID` 為剛剛複製的使用者 ID
   - `名稱` 為您想要設定的名稱，例如：`bbbbxxx:James`

   ![Change product owner](/images/en-us/toolbox/change-license-owner.webp)

3. **套用變更**  
   填寫完成後，點選 `設定名稱` 按鈕，然後重新啟動您的 Office 應用程式，即可看到新的名稱。

:::

::: details 變更傳統授權的擁有者

1. **查詢已安裝產品的 ID**  
   在部署功能頁檢視您已安裝的產品 ID，例如 `ProPlus2021Volume` 或 `VisioPro2021Volume`。

2. **輸入新的擁有者名稱**  
   返回工具箱，在 `變更 Office 產品擁有者` 中按照以下格式輸入 `[產品 ID]:[名稱]`  

   - `產品 ID` 為 Office 產品的識別碼
   - `名稱` 為您想要設定的名稱，例如：`ProPlus2021Volume:James`

3. **套用變更**  
   填寫完成後，點選 `設定名稱` 按鈕，然後重新啟動您的 Office 應用程式，即可看到新的名稱。

::: warning 注意

如果您自行安裝了其他 Office 授權並啟用，請在上方輸入您安裝的授權 ID，而非已安裝的產品 ID。

:::

## 重設 Office 設定為預設值

重設 Office 設定可以解決某些問題，請視需求使用。

::: details 適用情境

- Office 授權已透過 KMS 或 MAK 啟用，但 Office 應用程式仍要求 Microsoft 365 訂閱。
- 系統偵測到您剛剛更新了授權，請重新啟動 Microsoft Project 以使變更生效。

:::