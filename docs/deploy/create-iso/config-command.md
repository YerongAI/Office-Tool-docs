# 使用 loadconfig 的 ISO

创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）内创建批处理文件，例如 Setup.bat。

使用 `/loadconfig` 命令可以加载 XML 配置文件，并修改其中的参数，以便进行安装。

例如如果您创建了同时包含 32 位和 64 位的 Office ISO，您可以使用以下命令安装对应的版本：

其中 `/edition 32` 指定安装 32 位的 Office ，`/edition 64` 指定安装 64 位的 Office。

``` batch
@echo off
title Office Tool Plus - Console

:: For 32-bit
"Office Tool Plus.exe" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 32
```

``` batch
@echo off
title Office Tool Plus - Console

:: For 64-bit
"Office Tool Plus.exe" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 64
```

::: tip 小知识

`%~dp0` 在批处理中代表批处理所在的文件夹路径。例如当您挂载 Office ISO 为 E 盘时，`%~dp0` 会被自动替换为 `E:\`。

:::

批处理文件编写完成后保存，需要**使用英文命名，否则会无法识别**。

然后按照创建[包含默认配置的 ISO](default-config.md) 的步骤创建 Office ISO 即可。
