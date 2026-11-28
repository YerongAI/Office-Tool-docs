# Deploy Questions

Here you can find the causes and solutions for most Office installation problems. If you are unable to resolve the issue yourself, you can also contact us for assistance in analyzing/solving the problem; our team can provide highly professional technical support.

## Windows end of support and Microsoft 365 Apps

Microsoft 365 Apps may not run properly on the older systems. Microsoft recommend you move to a supported operating system for better experience.

The table below lists the relationship between various Windows versions and Office:

| Windows                       | Office 2019 - 2024 | Latest Build on Current Channel |
| :--                           | :-:                | :--                             |
| Windows 7                     | ×                  | 16.0.12527.22286                |
| Windows 8                     | ×                  | 16.0.12730.20270                |
| Windows 8.1                   | ×                  | 16.0.16026.20200                |
| Windows 10 1507 to 1803 (RS4) | √                  | 16.0.19725.xxxxx                |
| Windows Server 2016           | √                  | 16.0.19725.xxxxx                |
| Windows 10 1809 (RS5) to 22H2 | √                  | 16.0.20326.xxxxx                |
| Windows Server 2019           | √                  | 16.0.20326.xxxxx                |
| Windows Server 2022           | √                  | 16.0.20326.xxxxx                |

For versions of Windows not listed (such as Windows 11), it is still possible to deploy the latest version of Office and continue receiving feature updates for Office.

For more information please visit:

- [Windows 7 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-7-support).
- [Windows 8 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-8-support).
- [Windows 8.1 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-81-support).
- [Windows 10 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-10-support).
- [Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-server-support).

## How to install Office to another path

Microsoft does not allow Office to be installed in other path, nor do we recommend that you force change it.

## These installation files contains errors

Try to delete installation files on [Installation files](/usage/deploy/settings/basic.md#installation-files) panel, and download again.

If the problem persists, try to [Enable HTTPS connection](/usage/settings.md#connect-using-https), or switch to a different network, then try again.

## How to terminate Office installer

If you need to terminate Office installer for any reason, please go to Toolbox page to [Remove Office](/usage/toolbox/office.md), then deploy Office again.

::: warning Notice

If Office installer is stuck at `We're getting things ready...`, please force end the corresponding setup.exe process through Task Manager.

:::

## Office installation is stuck

If Office installation progress is stuck between 0-49%, it means that the Office installer could not get the required files.

- If you are installing online, please check your network connection or try a different network.
- Enable [download first](/usage/deploy/first-deployment.md#download-first), this can minimize problems due to the network.
- Try to [verify Office installation files](/usage/deploy/settings/basic.md#installation-files), sometimes there are problems with the files.

If Office installation progress is stuck between 50-100%, it means that an error occurred during the Office installation.

- If the installer allows you to ignore this error, then you can choose to ignore it, but VBA or certain functions may not be available.
- Try to close or exit all third-party software. Some third-party software may incorrectly prevent the installer from running.
- Try to [remove Office](/usage/toolbox/office.md#remove-office), then try to install again.

If the above steps do not work, you can collect the Office installation logs on the Toolbox page and analyze them to find out the problem.
