# 程式設定 {#application-settings}

您可以在此調整語言、主題、背景、下載或部署設定。

如果系統語言無法匹配，則預設使用 **英文 (美國)** 作為顯示語言。

::: tip 提示

若要儲存變更，請開啟 **「儲存設定」**，否則重新啟動 Office Tool Plus 後所有設定將會遺失。

:::

## 外觀與行為 {#appearance-behavior}

### 主題 {#theme}

您可以手動選擇喜愛的主題。若開啟 **[自動深色主題]**，Office Tool Plus 會根據系統設定自動在淺色與深色主題間切換。

### 背景 {#background}

預設情況下，Office Tool Plus 會根據環境自動選擇背景。在 **Windows 11** 上，預設使用 **Mica 效果**，其他系統則預設使用 **Bing 桌布**。如果偵測到遠端連線，則背景將自動關閉。

您可以根據需求調整為其他背景，或使用本機圖片作為背景圖片，支援 **PNG、JPG 和 BMP** 格式。

如果您想使用網路圖片作為背景，請使用 [/setimage](/usage/command/application.md#in-application-commands) 命令。

::: warning 注意

- **Mica 效果** 僅適用於 **Windows 11**。
- **Acrylic、模糊 (Blur) 或 Mica** 效果啟用後，標題列會自動變更為 **Windows 11 風格**。
- **Windows 10** 在啟用 **Acrylic** 效果時，拖曳視窗可能會有延遲。

:::

## 進階設定 {#advanced}

### 硬體加速 {#hardware-acceleration}

啟用「**硬體加速**」可以提升效能。關閉「**硬體加速**」可能會降低應用程式效能，因此 **不建議關閉**。

然而，如果遇到 **視窗顯示空白** 或 **記憶體溢位** 等問題，您可以關閉 **硬體加速** 來避免這些情況。

您可以透過 [命令列](/zh-tw/usage/command/application.md#commands) 暫時停用 **硬體加速**。

## 部署 {#deploy}

### Office 語言顯示格式 {#office-languages-display-format}

預設情況下，Office Tool Plus 以**當地語言**顯示 Office 支援的語言。

- **本地名稱**：顯示語言的當地名稱，例如 *Deutsch* (德語)。
- **英文名稱**：所有語言名稱顯示為英語。
- **本地化名稱**：所有語言名稱顯示為系統語言。

這些名稱來自 Windows，不同 Windows 版本可能會顯示不同結果。

### 顯示內部產品與通道 {#display-internal-products-and-channels}

預設情況下，Office Tool Plus **不會** 顯示 **非公開** 的 Office 產品與更新通道，例如 `ProPlusVolume` 或 `MondoVolume`，以及 `Dofgood::DevMain` 更新通道。

這些內部產品與通道 **無法** 透過 Office 部署工具直接使用，但如果您需要，可以開啟此選項以顯示內部產品與通道。

::: danger 警告

如果您不了解內部產品與更新通道的用途，**請勿使用**。

:::

## 下載 {#download}

### 驗證檔案 {#verify-files}

啟用後，Office Tool Plus 會在 **下載 Office 安裝檔後進行驗證**。此功能可以偵測：

- **版本不匹配**
- **檔案損毀**
- **其他安裝錯誤**

如果 Office 安裝檔損毀仍繼續部署，安裝過程可能會卡住。因此 **強烈建議** 在部署前先驗證 Office 安裝檔案。

::: warning 注意

Office 檔案驗證 **僅適用於「下載模式」或「先下載後部署」**，**不適用於線上安裝**。

:::

### 使用 HTTPS 連線 {#connect-using-https}

預設情況下，Office Tool Plus 透過 **HTTP** 下載 Office 安裝檔。

如果 **下載速度緩慢** 或 **發生錯誤**，您可以開啟此選項後 **重新下載**。

### 下載引擎 {#engine}

不同引擎的特性如下：

| 下載引擎                 | x86 | x64 & ARM64 | 進度顯示 | 支援 Proxy | 支援暫停/續傳 | 可取消下載 |
| :--                      | :-- | :--         | :--      | :--        | :--           | :--       |
| **Thunder**              | ✓   | ×           | ✓        | ✓         | ✓             | ✓         |
| **bezzad.Downloader**    | ✓   | ✓           | ✓        | ×         | ✓             | ✓         |
| **Office Tool Plus**     | ✓   | ✓           | ✓        | ×         | ×             | ✓         |
| **Office 部署工具** | ✓ | ✓           | ×        | ×         | ×             | ×         |

預設下載引擎為 **bezzad.Downloader**。

::: warning 注意

當使用 **bezzad.Downloader** 作為下載引擎時，若將 **分塊數 (chunks)** 設得過高且下載至 **HDD 硬碟**，可能會降低寫入速度。

:::

### Windows 版本 {#windows-version}

預設情況下，Office Tool Plus 會 **自動偵測作業系統版本**，並下載對應的 Office 版本。

若要為 **其他系統版本** 下載 Office 安裝檔，請在此手動選擇對應的 **Windows 版本**。
