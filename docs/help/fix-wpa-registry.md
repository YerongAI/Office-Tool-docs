# Fix WPA Registry

::: danger Warning

Do not perform this operation unless explicitly required.

:::

When the `HKEY_LOCAL_MACHINE\SYSTEM\WPA` registry in the system is corrupted, it can lead to activation failures for Windows and Office, and may also cause high CPU usage in the Software Protection service. This operation will delete that registry key so that the system can recreate it.

This registry is protected by OS, we must perform this operation in a Windows PE environment.

## Steps

- Download [this file](https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip).
- After extracting, copy the `rearm.cmd` file to the root directory of the system, for example `C:\rearm.cmd`.
- Run this command as administrator to enter Windows RE environment: `shutdown /f /r /o /t 0`.
- In the Windows RE environment, select "Troubleshoot" > "Advanced options" > "Command Prompt".
- In the command prompt, enter the following command and press Enter: `C:\rearm.cmd`.
- After the script execution is complete, restart the system.

::: tip Tip

If you get a command not recognized error when executing the `C:\rearm.cmd` command, run the `bcdedit | find "osdevice"` command to check the drive letter of the system partition and replace the `C:` in `C:\rearm.cmd` with the correct drive letter, for example `D:\rearm.cmd`.

:::
