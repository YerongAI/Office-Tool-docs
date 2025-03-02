# 程式命令 {#application-commands}

命令不區分大小寫。如果命令參數包含空格，請使用 `""`（雙引號）將其包括起来。

## 程式內命令 {#in-application-commands}

這些命令只能在命令框中使用。您可以透過按鈕或快捷鍵 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> 開啟命令框。

![Command box](/images/zh-tw/command-box.webp)

| 命令 | 說明 | 參數 |
| :-- | :-- | :-- |
| `/getkey` *value* | 取得指定產品的預設金鑰。 | *value*: 產品 ID。 |
| `/loadconfig` *value* | 從網路位址載入設定。 | *value*: 網路 URL。 |
| `/setimage` *value* | 設定背景圖片。 | *value*: 圖片文件路徑，支援 BMP、PNG 或 JPG，並可來自本機或網路位址。 |
| `/resetnotif` | 重設通知，以重新顯示已關閉的通知。 | 無 |
| `/getlogs` | 取得程式記錄檔。 | 無 |
| `/help` | 重新導向至說明文件。 | 無 |

## 命令列命令 {#commands}

這些命令只能在命令提示字元 (CMD) 或 PowerShell 中使用。

| 命令 | 說明 | 參數 |
| :-- | :-- | :-- |
| `/isoinstall` | 讀取 ISO 設定並啟動安裝程式。 | 在執行命令前，您必須先建立 Office ISO，確保 ISO 文件內包含 `ConfigForISO.xml`，並掛載該 ISO。 |
| `/loadconfig` *value* | 讀取 XML 設定並啟動安裝程式。 | *value*: XML 文件路徑。 |
| `/srcpath` *value* | 覆寫 XML 設定中的來源路徑屬性，必須與 `/loadconfig` 命令一起使用。 | *value*: 來源路徑。 |
| `/edition` *value* | 覆寫 XML 設定中的客戶端版本屬性，必須與 `/loadconfig` 命令一起使用。 | *value*: `32` 或 `64`。 |
| `/enablehwacc` *value* | 啟用硬體加速。 | *value*: `true` 或 `false`，預設為 `true`。 |

## Office Tool Plus Console Helper {#office-tool-plus-console-helper}

Office Tool Plus.Console 是一個命令列程式。當透過 `Office Tool Plus` 執行命令時，Shell 不會等待程序完成；但透過 `Office Tool Plus.Console` 執行命令時，Shell 會等待程序結束並支援日誌輸出。

例如，以下命令可啟用日誌輸出：

```powershell
."Office Tool Plus.Console" /log
```

::: tip 提示

`deploy` 和 `ospp` 命令會自動啟用日誌輸出，無需額外指定 `/log`。
`deploy` 和 `ospp` 命令不應與其他命令混合使用，否則可能無法正常運作。

:::

如果要使用 [部署命令](deploy.md) 或 [啟用命令](activate.md)，可以這樣寫：

```powershell
."Office Tool Plus.Console" deploy /add ...
```

### Batch 檔 (BAT)

如果您需要透過 BAT 檔案執行 `Office Tool Plus.Console`，請確保擁有系統管理員權限。

以下為範例：

```batch
@echo off
title Office Tool Plus - Console

:: 切換至當前目錄
:: 確保擁有管理員權限
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: 執行命令
"Office Tool Plus.Console" /isoinstall
"Office Tool Plus.Console" ospp /inslicid ProPlus2021Volume /sethst kms.example.com /setprt 1688 /act
```

請根據需求修改第 10 和 11 行的命令內容。
