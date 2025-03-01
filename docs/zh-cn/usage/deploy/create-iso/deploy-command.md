# 使用 deploy 命令

使用 deploy 命令进行部署时，Office Tool Plus 将会完全根据 deploy 命令中的参数进行部署，您可以根据需求完全自定义安装 Office。

---

创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）中创建批处理文件，例如 `Setup.bat`。

您可以参照 [deploy 命令](/zh-cn/usage/command/deploy.md)的使用方法完全自定义您的 Office 安装。

也可以在部署页面编辑好配置之后，直接生成 deploy 命令。

编辑好 deploy 命令之后，将其替换到下方的模板中即可。

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" deploy /add ...
```

::: tip 小知识

`%~dp0` 在批处理中代表批处理所在的文件夹路径。例如当您挂载 Office ISO 为 E 盘时，`%~dp0` 会被自动替换为 `E:\`。

:::

批处理文件编写完成后保存，需要**使用英文命名，否则会无法识别**。

然后按照[不含任何配置](no-config.md)的步骤创建 Office ISO 即可。

::: tip 提示

使用批处理脚本时，您可以根据需要添加[其它命令](/zh-cn/usage/command/application)，以便将多个任务组合在一起实现自动化部署、激活。

:::
