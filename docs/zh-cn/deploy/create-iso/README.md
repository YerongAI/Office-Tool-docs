# 前期准备

使用 Office Tool Plus 创建 ISO 映像文件可以将 Office Tool Plus 和 Office 安装文件一起打包。ISO 映像文件可以与他人共享，或者用于多次安装。

Office 会固定在每个月的第二个星期二（太平洋时间）更新一次，我们建议您在此时间后及时更新 Office Tool Plus 和 Office ISO，以确保您始终可以获得最佳的部署体验。

若要创建 Office ISO，您需要完成以下步骤：

- 下载合适的 Office Tool Plus。
- 创建 Office ISO 文件。
- 测试 Office ISO 是否和预期的一样工作。

## 注意事项

为了确保 Office 安装文件下载完整，我们建议您勾选**设置 - 下载 - 校验文件**。

Office Tool Plus 默认下载适合当前操作系统的 Office 版本。若要下载适用于其他 Windows 的 Office 版本，请更改**设置 - 下载 - Windows 版本**。

![Download settings](/images/zh-cn/settings/download-settings.png)

Office Tool Plus 在 ISO 模式中工作时会自动调整一些设置，您无需更改我们没有在教程中提到的设置。

## 获取合适的 Office Tool Plus 版本

我们建议您[下载](/zh-cn/start/README.md#下载)包含框架的 Office Tool Plus。不需要在客户端上安装 .NET Desktop Runtime 即可运行 Office Tool Plus。

如果您决定创建 64 位的 Office ISO，您可以下载 64 位版本的 Office Tool Plus。否则您应该下载 32 位的 Office Tool Plus。

下载完成后，请将整个压缩包解压到一个合适的位置，例如桌面。**请勿在压缩包内直接双击运行 Office Tool Plus**.

## 创建 Office ISO

您可以根据需要创建以下格式的 Office ISO 文件：

1. [不含任何配置](basic.md)：像正常使用一样进行配置以及部署。
2. [包含默认配置](default-config.md)：程序会自动加载配置，询问用户是否开始部署。
3. [使用 ISO 命令](iso-command.md)：程序会自动寻找配置并直接开始部署。
4. [使用 loadConfig 命令](config-command.md)：程序会根据您指定的命令创建配置并直接开始部署。
5. [完全自定义安装](deploy-command.md)：程序会根据您指定的命令创建配置并直接开始部署。

通常情况下，如果您需要创建 32 位和 64 位的 Office ISO，我们建议您分开创建两个文件。如果您决定创建同时包含 32 位和 64 位的 Office ISO，则我们不建议您使用第二或第三种方法创建 Office ISO，这两个方法无法自由选择 32 位或 64 位进行部署。

## 完成之后

当你完成了 Office ISO 的创建后，我们建议您在虚拟机内测试 Office ISO 是否和您预期的一样工作。
