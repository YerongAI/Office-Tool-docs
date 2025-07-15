# Deploy Questions

## Windows end of support and Microsoft 365 Apps

Microsoft 365 Apps may not install or run correctly on older systems. Microsoft strongly recommend you move to a supported operating system for better experience.

If you still want to install Microsoft 365 Apps on your PC, please use **Current Channel** as deploy channel. If you receive a message that your operating system is not supported when installing Microsoft 365 Apps, you can try changing the installation module from `Office Deployment Tool` to `Office Tool Plus` to skip the compatibility check.

For more information please visit:

- [Windows 7 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-7-support).
- [Windows 8 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-8-support).
- [Windows 8.1 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-81-support).
- [Windows 10 end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-10-support).
- [Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-server-support).

::: warning Notice

You can't install newer version of Office on Windows 7 even you changed the installation module.

:::

## How to install Office to another path

Microsoft does not allow Office to be installed in other path, nor do we recommend that you force change it.

## The path is null or empty

To fix the problem, go to Toolbox page and [reset system variables](/usage/toolbox/windows.md#reset-system-variables).

## Office installation is stuck

If Office installation progress is stuck between 0-49%, it means that the Office installer could not get the required files.

- If you are installing online, please check your network connection or try a different network.
- Enable [download first](/usage/deploy/clean-deployment.md#download-first), this can minimize problems due to the network.
- Try to [verify Office installation files](/usage/deploy/settings/basic.md#installation-files), sometimes there are problems with the files.

If Office installation progress is stuck between 50-100%, it means that an error occurred during the Office installation.

- If the installer allows you to ignore this error, then you can choose to ignore it, but VBA or certain functions may not be available.
- Try to close or exit all third-party software. Some third-party software may incorrectly prevent the installer from running.
- Try to [remove Office](/usage/toolbox/office.md#remove-office), then try to install again.

If the above steps do not work, you can collect the Office installation logs on the Toolbox page and analyze them to find out the problem. You can also choose to contact us to help you analyze the problem. Our team can provide very professional technical support.
