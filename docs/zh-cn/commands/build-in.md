# 程序命令

命令不区分大小写。如果命令参数中含有空格，请使用 "" (英文双引号) 将其包括起来。

## 程序内命令

这些命令只能在命令框中使用。命令框可以点击按钮打开，也可以按下快捷键 <kbd>Ctrl + Shift + P</kbd> 打开。

![Command box](/images/zh-cn/command-box.png)

| 命令 | 说明 |  |
| :-- | :-- | :-- |
| /setimage *value* | 设置背景图 | *value*: 路径，支持 BMP, PNG 或 JPG。支持本地以及 HTTP 路径。 |
| /getkey *value* | 获取产品默认密钥 | *value*: 产品 ID. |
| /resetnotif | 重置通知，以便再次显示已经关闭了的通知 | |
| /loadconfig *value* | 从 Web 路径加载 XML 配置文件 | *value*: 网址 |

## 命令行命令

这些命令只能够从命令行中执行。

| 命令 | 说明 |  |
| :-- | :-- | :-- |
| /isoinstall | 读取 ISO 配置文件并启动安装程序。 | 你必须创建 Office ISO，确保 ISO 内含 ConfigForISO.xml，挂载后再执行命令 |
| /loadconfig *value* | 读取 XML 配置文件并启动安装程序。 | *value*: XML 文件路径 |
| /srcpath *value* | 覆写 XML 配置文件中的源路径属性，该命令需与 `/loadconfig` 命令一起使用 | *value*: 源路径 |
| /edition *value* | 覆写 XML 配置文件中的体系结构属性。该命令需与 `/loadconfig` 命令一起使用 | *value*: `32` 或 `64` |
| /enablehwacc *value* | 启用硬件加速 | *value*: `true` 或 `false`，默认为 `true` |

## Office Tool Plus Console Helper

Office Tool Plus.Console 是一个命令行程序，默认情况下，通过 Office Tool Plus 执行命令时，CMD 将会立即返回，不会等待 Office Tool Plus 退出。通过 Office Tool Plus.Console 执行命令时，CMD 将会等待程序退出，并且支持输出程序日志。

以下命令示例启动 Office Tool Plus 日志输出：

``` batch
"Office Tool Plus.Console" /enablelog
```

::: tip 提示

`deploy` and `ospp` 命令默认启用日志输出，您无需额外指定 `/enablelog` 参数。`deploy` 和 `ospp` 命令不可以和其他命令混用，否则会无法识别。

:::

如果您需要使用[部署命令](deploy.md)或者[激活命令](activate.md)，像这样用即可：

``` batch
"Office Tool Plus.Console" deploy /add ...
```

### Batch 文件

如果你需要使用 BAT 文件运行 "Office Tool Plus.Console"，请确保你有管理员权限执行这个脚本。

以下是一个模板：

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" /isoinstall
"Office Tool Plus.Console" ospp /inslicid ProPlus2021Volume /sethst kms.example.com /setprt 1688 /act
```

第 1-9 行的内容无需更改，您只需要按照需求更改第九行之后的文本即可。
