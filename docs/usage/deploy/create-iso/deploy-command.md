# Use deploy commands

When you use the deploy command for deployment, Office Tool Plus will deploy Office according to the parameters specified in commands. You can install any versions of Office as you want.

---

Before creating Office ISO, you need to create a batch file, such as `Setup.bat`, in the root directory of Office Tool Plus (Office Tool folder).

You can write your own commands by referring to the [usage of the deploy commands](/usage/command/deploy.md).

You can also generate the deploy commands after editing the configuration on the deploy page.

Replace the deploy command with the template below.

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

::: tip Tip

`%~dp0` represents the folder path where the batch script is located. For example, when you mount Office ISO as drive E, `%~dp0` will be automatically replaced to `E:\`.

:::

The batch file need to be saved with English names, **otherwise it will not be recognized**.

Then create Office ISO according to the steps in [No configs](no-config.md).

::: tip Tip

When using a batch script, you can add [other commands](/usage/command/application) as needed. You can combine multiple tasks together for deployment and activation.

:::
