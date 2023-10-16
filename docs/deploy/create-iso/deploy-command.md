# 完全自定义安装的 ISO

创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）内创建批处理文件，例如 Setup.bat。

您可以使用 [deploy](/commands/deploy.md) 命令完全自定义您的 Office 安装。

例如以下示例安装简体中文 32 位的 Microsoft 365，排除 Access, Bing, Groove, Lync, OneDrive 应用程序：

``` batch
@echo off
title Office Tool Plus - Console

"Office Tool Plus" deploy /add O365ProPlusRetail_zh-cn /O365ProPlusRetail.ExclApps Access,Bing,Groove,Lync,OneDrive /srcpath %~dp0 /edition 32 /channel Current /ver 16.0.xxxxx.xxxxx
```

如果您需要等待安装完成，请调用 Office Tool Plus.Console：

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" deploy /add O365ProPlusRetail_zh-cn /O365ProPlusRetail.ExclApps Access,Bing,Groove,Lync,OneDrive /srcpath %~dp0 /edition 32 /channel Current /ver 16.0.xxxxx.xxxxx
```

::: warning 注意

请根据实际情况将 `/channel`, `/ver` 和 `/edition` 参数替换为实际值，否则安装会失败。

:::

::: tip 小知识

`%~dp0` 在批处理中代表批处理所在的文件夹路径。例如当您挂载 Office ISO 为 E 盘时，`%~dp0` 会被自动替换为 `E:\`。

:::

批处理文件编写完成后保存，需要**使用英文命名，否则会无法识别**。

然后按照创建[不含任何配置的 ISO](basic.md) 的步骤创建 Office ISO 即可。
