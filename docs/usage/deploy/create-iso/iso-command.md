# Use ISO command

When deploying using the ISO command, Office Tool Plus will look for the `ConfigForISO.xml` file in the Office ISO and load it for deployment. Office Tool Plus will not display any interface and will start the Office installer.

---

Before creating Office ISO, you need to create a batch file, such as `Setup.bat`, in the root directory of Office Tool Plus (Office Tool folder).

Here are some examples of Setup.bat.

Start Office Tool Plus without wait for exit:

``` batch
@echo off
title Office Tool Plus - Console

"Office Tool Plus.exe" /isoinstall
````

Start Office Tool Plus and wait for exit:

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

The batch file need to be saved with English names, **otherwise it will not be recognized**.

Then create Office ISO according to the steps in [Default config](default-config.md).

::: tip Tip

When using a batch script, you can add [other commands](/usage/command/application) as needed. You can combine multiple tasks together for deployment and activation.

:::
