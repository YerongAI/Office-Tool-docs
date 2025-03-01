# 使用 loadconfig 命令

使用 loadconfig 命令进行部署时，Office Tool Plus 将会根据命令指定的参数加载 XML 文件并进行部署。XML 配置中的一些参数可以通过其它命令修改，以便可以安装不同版本的 Office。

---

创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）中创建批处理文件，例如 `Setup.bat`。

使用 `/loadconfig` 命令可以加载 XML 配置文件，使用 `/srcpath` 或 `/edition` [命令](/zh-cn/usage/command/application#commands)可以修改配置文件中的参数。

例如如果您创建了同时包含 32 位和 64 位的 Office ISO，您可以使用以下命令安装对应的版本：

其中 `/edition 32` 指定安装 32 位的 Office ，`/edition 64` 指定安装 64 位的 Office。

``` batch
@echo off
title Office Tool Plus - Console

:: For 32-bit
"Office Tool Plus.Console" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 32
```

``` batch
@echo off
title Office Tool Plus - Console

:: For 64-bit
"Office Tool Plus.Console" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 64
```

::: tip 小知识

`%~dp0` 在批处理中代表批处理所在的文件夹路径。例如当您挂载 Office ISO 为 E 盘时，`%~dp0` 会被自动替换为 `E:\`。

:::

批处理文件编写完成后保存，需要**使用英文命名，否则会无法识别**。

然后按照[包含默认配置](default-config.md)的步骤创建 Office ISO 即可。

::: tip 提示

使用批处理脚本时，您可以根据需要添加[其它命令](/zh-cn/usage/command/application)，以便将多个任务组合在一起实现自动化部署、激活。

:::
