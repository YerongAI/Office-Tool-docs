# Prepare to create

By using Office Tool Plus, you can create an Office ISO which contains Office Tool Plus and Office installation files. You can use the ISO to install Office to multiple clients, or share it with your friends.

We recommend that you update your Office ISO once a month, in line with Microsoft's update schedules.

To create an Office ISO, do the following things：

- Download the appropriate Office Tool Plus.
- Create Office ISO file.
- Test the Office ISO if it works fine.

## Notices

To ensure that the Office installation files downloads completely, we recommend you enable **Settings - Download - Verify files**。

Office Tool Plus downloads Office for the current OS version by default. To download Office for other Windows, change the **Settings - Download - Windows version**。

![Download settings](/images/en-us/settings/download-settings.webp)

Office Tool Plus 在 ISO 模式中工作时会自动调整一些设置，您无需更改我们没有在教程中提到的设置。

## 获取合适的 Office Tool Plus 版本

我们建议您[下载](/introduction/download)包含框架的 Office Tool Plus。不需要在客户端上安装 .NET Desktop Runtime 即可运行 Office Tool Plus。

如果您决定创建 64 位的 Office ISO，您可以下载 64 位版本的 Office Tool Plus。否则您应该下载 32 位的 Office Tool Plus。

下载完成后，请将整个压缩包解压到一个合适的位置，例如桌面。**请勿在压缩包内直接双击运行 Office Tool Plus**.

## Create Office ISO

您可以根据需要创建以下格式的 Office ISO 文件：

1. [不含任何配置](no-config.md)：像正常使用一样进行配置以及部署。
2. [包含默认配置](default-config.md)：程序会自动加载配置，询问用户是否开始部署。
3. [使用 ISO 命令](iso-command.md)：程序会自动寻找配置并直接开始部署。
4. [使用 loadConfig 命令](config-command.md)：程序会根据您指定的命令创建配置并直接开始部署。
5. [完全自定义安装](deploy-command.md)：程序会根据您指定的命令创建配置并直接开始部署。

通常情况下，如果您需要创建 32 位和 64 位的 Office ISO，我们建议您分开创建两个文件。如果您决定创建同时包含 32 位和 64 位的 Office ISO，则我们不建议您使用第二或第三种方法创建 Office ISO，这两个方法无法自由选择 32 位或 64 位进行部署。

## The end

When you finished creating Office ISO file, we recommend you to test the Office ISO before you use it.
