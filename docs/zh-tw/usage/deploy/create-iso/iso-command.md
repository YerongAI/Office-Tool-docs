# 使用 ISO 命令 {#use-iso-command}

當使用 ISO 命令進行部署時，Office Tool Plus 會在 Office ISO 中搜尋 `ConfigForISO.xml` 設定檔，並載入該設定進行部署。Office Tool Plus 不會顯示任何介面，並會直接啟動 Office 安裝程式。

---

在建立 Office ISO 之前，您需要在 Office Tool Plus 主目錄（Office Tool 資料夾）內建立一個 BAT 檔，例如 `Setup.bat`。

以下是一些 `Setup.bat` 的範例。

啟動 Office Tool Plus 並不等待結束：

```batch
@echo off
title Office Tool Plus - Console

"Office Tool Plus.exe" /isoinstall
```

啟動 Office Tool Plus 並等待執行完成：

```batch
@echo off
title Office Tool Plus - Console

:: 切換工作目錄至目前目錄。
:: 確保您擁有系統管理員權限。
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: 執行命令。
"Office Tool Plus.Console" /isoinstall
```

BAT 檔必須使用英文名稱 **否則將無法識別**。

接著，請依照 [預設設定模式](default-config.md) 的步驟建立 Office ISO。

::: tip 提示

使用 BAT 命令時，您可以根據需求加入[程式命令](/zh-tw/usage/command/application) 來執行更多操作。例如，您可以組合多個任務來進行部署與啟用。

:::
