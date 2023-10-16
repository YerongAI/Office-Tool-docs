# Application Commands

The commands are not case-sensitive. If a command argument contains spaces, use "" (double quotes) to include them.

## In-application commands

These commands can be only used on command box. You can open command box via button or keyboard shortcuts <kbd>Ctrl + Shift + P</kbd>.

![Command box](/images/en-us/command-box.png)

| Command | Instruction |  |
| :-- | :-- | :-- |
| /setimage *value* | Set the background image. | *value*: path to image file. Support BMP, PNG or JPG. Support local or web location. |
| /getkey *value* | Get the default key for a product. | *value*: product ID. |
| /resetnotif | Reset notifications to show closed notifications again. | |
| /loadconfig *value* | Load config from web location. | *value*: web url. |

## Commands

These commands can be only used on command-line.

| Command | Instruction |  |
| :-- | :-- | :-- |
| /isoinstall | Read the ISO configuration and start the installer. | You must create the Office ISO, make sure the ISO file contains ConfigForISO.xml, and mount the ISO before running the command. |
| /loadconfig *value* | Read the XML configuration and start the installer. | *value*: XML file path. |
| /srcpath *value* | Overrides the source path attribute in the XML configuration. This command must be used together with the `/loadconfig` command. | *value*: path to source. |
| /edition *value* | Overrides the client edition attribute in the XML configuration. This command must be used together with the `/loadconfig` command. | *value*: `32` or `64`. |
| /enablehwacc *value* | Enable hardware acceleration. | *value*: `true` or `false`, default value is `true` |

## Office Tool Plus Console Helper

Office Tool Plus.Console is a command-line program. When executing commands via Office Tool Plus, the shell will not wait Office Tool Plus to finish. When executing commands via Office Tool Plus.Console, the shell will wait program to exit and support logging.

For example the following command enable the log output:

``` batch
"Office Tool Plus.Console" /enablelog
```

::: tip Tip

The `deploy` and `ospp` commands enable logging by default, you don't need to specify the `/enablelog` command again. `deploy` and `ospp` commands should not be mixed with other commands or they will not works.

:::

If you want to use [deploy commands](deploy.md) or [activation commands](activate.md), you can write like this:

``` batch
"Office Tool Plus.Console" deploy /add ...
```

### Batch File

If you need to run Office Tool Plus.Console using a BAT file, make sure you have administrator privileges to execute this script.

Here is a template:

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

Just change the 10th and 11th lines as you needed.
