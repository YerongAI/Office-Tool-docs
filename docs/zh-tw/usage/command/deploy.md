# 部署命令

這些命令可用於命令框或命令提示字元（CMD）。命令不區分大小寫。如果命令參數包含空格，請使用 `""`（雙引號）包裹。

``` batch
deploy 參數
```

例如，以下是一個簡單的部署命令：

``` batch
deploy /add O365ProPlusRetail_zh-tw
```

| 命令 | 說明 | 參數 |
| :-- | :-- | :-- |
| `/add` *values[]* | 新增一個或多個產品。 | *Values*: `產品ID_語言`，**產品 ID 為必要參數**。請參考[範例](deploy.md#command-examples-for-deploying-office)。 |
| `/Product_ID.exclapps` *value* | 設定特定產品的排除應用程式。 | `Product_ID` 需與 `/add` 參數內的產品 ID 一致，請參考[範例](deploy.md#command-examples-for-deploying-office)。 |
| `/Product_ID.mak` *value* | 為特定產品設定 MAK 金鑰。 | `Product_ID` 需與 `/add` 參數內的產品 ID 一致，請參考[範例](deploy.md#command-examples-for-deploying-office)。 |
| `/rm` *values[]* | 移除產品。 | *Values*: `產品ID_語言`，使用方式與 `/add` 相同。 |
| `/rmall` | 移除所有產品。 | 無參數 |
| `/rmmsi` | 移除所有 MSI 版本的 Office。 | 無參數 |
| `/channel` *value* | 設定更新通道。 | *Value*: 通道 ID。[更多資訊](/usage/deploy/settings/basic.md#update-channel) |
| `/branch` *value* | 根據分支值設定更新通道，會覆蓋 `/channel` 設定。 | *Value*: 通道的分支值。[更多資訊](/usage/toolbox/general.md#query-office-version) |
| `/edition` *value* | 設定架構版本。 | *Value*: `32` 或 `64`，預設為 `32`。 |
| `/migratearch` | 變更架構（從 32 位元轉換為 64 位元，反之亦然）。 | 無參數 |
| `/ver` *value* | 設定 Office 版本。 | *Value*: Office 版本號。 |
| `/srcpath` *value* | 設定來源路徑。 | *Value*: 本機或 SMB 路徑。 |
| `/fallback` | 當本機找不到語言套件時，是否返回至 Office CDN。 | *Value*: `true` 或 `false`，預設為 `false`。 |
| `/display` *value* | 設定是否顯示 Office 安裝畫面。 | *Value*: `true`: 可見, `false`: 隱藏，預設為 `true`。 |
| `/acpteula` | 代表使用者接受 EULA。 | 無參數 |
| `/enableupdates` | 設定 Office 更新狀態。 | *Value*: `true`: 啟用, `false`: 停用。 |
| `/updatepath` | 設定 Office 更新下載路徑。 | *Value*: 本機或 SMB 路徑。 |
| `/module` *value* | 設定安裝模組。 | *Value*: `0`: Office 部署工具, `1`: Office Tool Plus，預設為 `0`。 |
| `/dlfirst` | 先下載後部署。 | 無參數 |
| `/shortcuts` | 在桌面建立捷徑。 | 無參數 |

::: warning 注意

如果您使用 `/srcpath` 指定來源路徑，則必須同時指定 `/ver` 和 `/channel`，否則 Office 安裝可能會失敗。

:::

## 部署 Office 的命令範例

當指定多個應用程式或語言時，請使用逗號 `,` 分隔。例如：`Access,Lync` 或 `zh-tw,ja-jp`。

如果需要新增或移除語言或校對工具，請使用 `LanguagePack` 或 `ProofingTools` 作為產品 ID：

deploy /add ProPlus2021Volume_zh-tw /ProPlus2021Volume.exclapps Access,Outlook,OneNote /channel PerpetualVL2021

``` batch
deploy /add ProPlus2021Volume_zh-tw /ProPlus2021Volume.exclapps Access,Outlook,OneNote /channel PerpetualVL2021
```

使用本機來源安裝 Office (64 位元)：

``` batch
deploy /add O365ProPlusRetail_zh-tw /O365ProPlusRetail.exclapps Access,Outlook,OneNote /edition 64 /srcpath "D:\Test\Office Tool" /ver 16.0.xxxxx.xxxxx /channel Current
```

若為設定 MAK 金鑰以啟用大量授權產品：

``` batch
deploy /add ProPlus2021Volume_zh-tw /ProPlus2021Volume.exclapps Access,Outlook,OneNote /ProPlus2021Volume.MAK XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /channel PerpetualVL2021
```

同時新增多個產品：

``` batch
deploy /add "ProPlus2021Volume_zh-tw|VisioPro2021Volume_zh-tw" /ProPlus2021Volume.exclapps Access,Outlook,OneNote,OneDrive,Groove /VisioPro2021Volume.exclapps OneDrive,Groove /channel PerpetualVL2021
```

解除安裝特定產品：

``` batch
deploy /rm ProPlus2021Volume
```

解除安裝多個產品：

``` batch
deploy /rm "ProPlus2021Volume|VisioPro2021Volume"
```

解除安裝語言套件：

``` batch
deploy /rm LanguagePack_ja-jp
```