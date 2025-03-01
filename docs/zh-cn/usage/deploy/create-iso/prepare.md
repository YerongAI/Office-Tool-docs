# 前期准备

使用 Office Tool Plus 创建 ISO 映像文件会将 Office Tool Plus 和 Office 安装文件一起打包。

Office 会固定在每个月的第二个星期二（太平洋时间）更新一次，我们建议您在此时间后及时更新 Office Tool Plus 和 Office ISO，以确保您始终可以获得最佳的部署体验。

若要创建 Office ISO，您需要完成以下步骤：

- 下载合适的 Office Tool Plus。
- 创建 Office ISO 文件。
- 测试 Office ISO 是否和预期的一样工作。

## 注意事项

Office Tool Plus 默认下载适合当前操作系统的 Office 版本。若要下载适用于其他 Windows 的 Office 版本，请更改**设置 - 下载 - Windows 版本**。

![下载设置屏幕截图](/images/zh-cn/settings/download-settings.webp)

Office Tool Plus 在 ISO 模式中工作时会自动调整一些设置，您无需更改我们没有在教程中提到的设置。

## 获取合适的 Office Tool Plus 版本

我们建议您[下载](/zh-cn/introduction/download)包含框架的 Office Tool Plus。不需要在客户端上安装 .NET Desktop Runtime 即可运行 Office Tool Plus。

最佳做法是根据 Office 的体系结构选择合适的 Office Tool Plus 版本。例如您正在创建 64 位的 Office 镜像，则建议使用 64 位的 Office Tool Plus。如果不确定，可以选择 32 位的 Office Tool Plus。

## 创建 Office ISO

您可以根据需要选择下列方式创建 Office ISO 文件：

1. [不含任何配置](no-config.md)：像正常使用一样进行配置以及部署。
2. [包含默认配置](default-config.md)：程序会自动加载配置，询问用户是否开始部署。
3. [使用 ISO 命令](iso-command.md)：程序会自动寻找配置并直接开始部署。
4. [使用 loadConfig 命令](config-command.md)：程序会根据您指定的命令创建配置并直接开始部署。
5. [使用 deploy 命令](deploy-command.md)：程序会根据您指定的命令创建配置并直接开始部署。

## 完成之后

当你完成了 Office ISO 的创建后，我们建议您在虚拟机内测试 Office ISO 是否和您预期的一样工作。
