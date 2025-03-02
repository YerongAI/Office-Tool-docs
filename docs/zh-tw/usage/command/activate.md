# 啟用命令 {#activation-commands}

這些命令可用於命令框與命令提示字元（CMD），命令不區分大小寫。

``` batch
ospp 參數
```

例如，以下是一個簡單的啟用命令：

``` batch
ospp /inslicid ProPlus2021Volume /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /act
```

| 命令 | 說明 | 使用方式 |
| :-- | :-- | :-- |
| `/unkeys` | 解除安裝所有已安裝的 Office 產品金鑰。 | `ospp /unkeys` |
| `/unlics` | 解除安裝所有已安裝的 Office 授權。 | `ospp /unlics` |
| `/inslicid` *value* | 安裝指定的 Office 授權。 | `ospp /inslicid ProPlus2021Volume` 或 `ospp /inslicid ProPlus2021Volume,VisioPro2021Volume` |
| `/inpkey` *value* | 安裝指定的 Office 產品金鑰。 | `ospp /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX` |
| `/unpkey` *value* | 解除安裝指定的 Office 產品金鑰。 | `ospp /unpkey XXXXX` |
| `/sethst` *value* | 設定 KMS 主機。 | `ospp /sethst kms.example.com` |
| `/setprt` *value* | 設定 KMS 連接埠，預設為 1688。 | `ospp /setprt 1688` |
| `/act` *value* | 啟用已安裝的 Office 產品金鑰，*value* 可選，未提供則嘗試啟用所有金鑰。 | `ospp /act` 或 `ospp /act <SKU ID>` |
| `/actcid` *value* | 使用使用者提供的確認 ID 啟用產品。 | `ospp /actcid <CID>` |
| `/dstatus` | 顯示 Office 啟用資訊（僅限命令提示字元）。 | `ospp /dstatus` |
| `/dinstid` | 顯示離線啟用所需的安裝 ID（僅限命令提示字元）。 | `ospp /dinstid` |
