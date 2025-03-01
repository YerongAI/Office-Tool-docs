# 使用 ISO 命令

使用 ISO 命令进行部署时，Office Tool Plus 将会在 Office ISO 中查找 `ConfigForISO.xml` 文件并加载以进行部署。Office Tool Plus 将不会显示任何界面并直接启动 Office 安装程序。

---

创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）中创建批处理文件，例如 `Setup.bat`。

以下是 Setup.bat 的一些示例。

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

然后按照[包含默认配置](default-config.md)的步骤创建 Office ISO 即可。

::: tip 提示

使用批处理脚本时，您可以根据需要添加[其它命令](/zh-cn/usage/command/application)，以便将多个任务组合在一起实现自动化部署、激活。

:::
