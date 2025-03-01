# Use loadconfig commands

When you use the loadconfig command for deployment, Office Tool Plus will load the XML file and deploy Office according to the parameters specified in commands. Some parameters in the XML configuration can be modified by other commands, you can install different versions of Office as you want.

---

Before creating Office ISO, you need to create a batch file, such as `Setup.bat`, in the root directory of Office Tool Plus (Office Tool folder).

Use `/loadconfig` command to load XML config, use `/srcpath` or `/edition` [commands](/usage/command/application#commands) to modify the arguments in config.

For example, if you created an ISO of Office that contains both 32-bit and 64-bit versions, you can install the corresponding version using the following command:

`/edition 32` specifies to install 32-bit Office, and `/edition 64` specifies to install 64-bit Office.

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

::: tip Tip

`%~dp0` represents the folder path where the batch script is located. For example, when you mount Office ISO as drive E, `%~dp0` will be automatically replaced to `E:\`.

:::

The batch file need to be saved with English names, **otherwise it will not be recognized**.

Then create Office ISO according to the steps in [Default config](default-config.md).

::: tip Tip

When using a batch script, you can add [other commands](/usage/command/application) as needed. You can combine multiple tasks together for deployment and activation.

:::
