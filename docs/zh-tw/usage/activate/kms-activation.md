# KMS 啟用 {#kms-activation}

## 先決條件 {#prerequisites}

- 需要能夠連線至 KMS 的網際網路或內部網路。

## 步驟 {#steps}

- 在授權管理中，安裝大量授權，例如 *Office LTSC Professional Plus 2024 - 大量授權*。
- 在 KMS 管理中，設定 KMS 主機。KMS 主機可以是網域名稱或 IP 位址。
- 在授權管理中點選 [啟用] 按鈕，然後等待產品啟用完成。

::: warning 注意

請勿安裝 Office LTSC 2021 SPLA 授權，SPLA 授權不支援 KMS 啟用。

:::

::: tip 提示

如果啟用過程中出現問題，您可以點選 Office Tool Plus 顯示的藍色錯誤代碼，以檢視可能的解決方案。

:::

## 更多資訊 {#more-info}

通常，KMS 啟用的有效期為 180 天。在啟用後的 7 天（當剩餘時間少於 173 天）內，系統會自動嘗試續期（重新啟用），除非 KMS 指定了不同的續期政策。

### 基於 Active Directory 的啟用 {#active-directory-based-activation}

為了簡化大型企業中的 Windows 和 Office 啟用管理，系統管理員通常會選擇配置 [基於 Active Directory 的啟用](https://learn.microsoft.com/zh-tw/windows/deployment/volume-activation/activate-using-active-directory-based-activation-client) 服務。當網域控制站完成配置後，所有加入網域的電腦都會透過 KMS 自動啟用。

如上所述，組織可以配置 AD 網域並設定 KMS 啟用服務，使組織內的 Windows 和 Office 自動啟用。不過，由於電腦已加入 AD 網域，網域管理員可以完全控制網域內的電腦，包括執行命令、安裝軟體、清除資料等。

然而，一些使用者誤解 KMS 啟用會導致電腦受到他人控制。

KMS 啟用並不意味著您的電腦已加入 AD 網域。KMS 啟用可在未加入 AD 網域的情況下使用，因此您的電腦不會受到他人控制。
