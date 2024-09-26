# 使用 ISO 命令的 ISO

创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）内创建批处理文件，例如 Setup.bat。

以下是 Setup.bat 的一些示例。

---

启动 Office Tool Plus，不等待执行完毕：

``` batch
@echo off
title Office Tool Plus - Console

"Office Tool Plus.exe" /isoinstall
````

启动 Office Tool Plus，等待执行完毕：

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" /isoinstall
```

批处理文件编写完成后保存，需要**使用英文命名，否则会无法识别**。

然后按照创建[包含默认配置的 ISO](default-config.md) 的步骤创建 Office ISO 即可。
