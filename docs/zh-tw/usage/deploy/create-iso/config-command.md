# 使用 `/loadconfig` 命令 {#use-loadconfig-commands}

當您在部署時使用 `/loadconfig` 命令，Office Tool Plus 會載入 XML 設定檔，並根據命令中指定的參數部署 Office。某些 XML 設定中的參數可以透過其他命令進行修改，您可以安裝不同版本的 Office。

---

在建立 Office ISO 之前，您需要在 Office Tool Plus 主目錄（Office Tool 資料夾）內建立一個 BAT 檔，例如 `Setup.bat`。

使用 `/loadconfig` 命令載入 XML 設定，並使用 `/srcpath` 或 `/edition` [命令](/zh-tw/usage/command/application#commands) 來修改設定檔中的參數。

例如，如果您建立了一個同時包含 32 位元和 64 位元版本的 Office ISO，可以使用以下命令安裝對應的版本：

- `/edition 32` 指定安裝 32 位元 Office
- `/edition 64` 指定安裝 64 位元 Office

```batch
@echo off
title Office Tool Plus - Console

:: 32 位元
"Office Tool Plus.Console" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 32
```

```batch
@echo off
title Office Tool Plus - Console

:: 64 位元
"Office Tool Plus.Console" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 64
```

::: tip 提示

`%~dp0` 代表 BAT 檔所在的資料夾路徑。例如，當您將 Office ISO 掛載為 E 磁碟，`%~dp0` 會自動替換為 `E:\`。

:::

BAT 檔必須使用英文名稱 **否則將無法識別**。

接著，請依照 [預設設定模式](default-config.md) 的步驟建立 Office ISO。

::: tip 提示

使用 BAT 命令時，您可以根據需求加入[程式命令](/zh-tw/usage/command/application)來執行更多操作。例如，您可以組合多個任務來進行部署與啟用。

:::
