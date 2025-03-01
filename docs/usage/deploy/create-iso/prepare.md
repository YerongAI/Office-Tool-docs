# Prepare

Creating an ISO image file packages both Office Tool Plus and the Office installation files.

We recommend that you update your Office ISO file once a month, in line with [Microsoft's update schedules](/usage/deploy/settings/basic#update-channel).

To create an Office ISO, you need to do the following things:

- Download the appropriate Office Tool Plus.
- Create Office ISO file.
- Test the Office ISO if it works fine.

## Notices

Office Tool Plus download Office for the current OS version by default. To download Office for other versions of Windows, change the **Settings - Download - Windows version**.

![Download settings screenshot](/images/en-us/settings/download-settings.webp)

Office Tool Plus automatically adjusts some settings when working in ISO mode. You don't need to change the settings that we didn't mention in the tutorial.

## Download the appropriate Office Tool Plus

We recommend that you [download](/introduction/download) Office Tool Plus which includes the runtimes.

The best practice is to choose the appropriate Office Tool Plus version based on the architecture of Office. For example, if you are creating a 64-bit Office image, it is recommended to use the 64-bit Office Tool Plus. If you are not sure, you can choose the 32-bit Office Tool Plus.

## Create Office ISO

You can create Office ISO with these choices:

1. [No config](no-config.md): Configure and deploy as normal.
2. [Default config](default-config.md): Automatically load the configuration and ask the user whether to start deployment.
3. [Use ISO command](iso-command.md): Find the configuration and start deployment directly.
4. [Use loadConfig commands](config-command.md): Creates the configuration according to the commands you specify and starts the deployment directly.
5. [Use deploy commands](deploy-command.md): Creates the configuration according to the commands you specify and starts the deployment directly.

## The end

When you finished creating Office ISO file, we recommend you to test the Office ISO before you use it.
