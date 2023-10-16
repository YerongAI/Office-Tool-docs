# First deploy

When deploying Office, installation and uninstallation can occur simultaneously, so you can combine multiple steps without having to perform them separately.

## Online installation

Online installation requires internet connection. If you have a bad connection installation may take longer to complete.

Open Office Tool Plus, goto deploy page and do the following things:

- Add product(s).
- Add language(s).

Add products and languages according to your needs. If you don't know what products to add, please check [products](/deploy/settings/basic.md#products) section.

---

If needed, you can also check the following configuration.

### Architecture

By default, 32-bit Office will be installed. For more information please check [architecture](/deploy/settings/basic.md#architecture) section.

### Update channel

If you want to install Office 2019/2021 volume products, you need to configure update channel to Office 2019/2021 Perpetual Enterprise channel. Other times just use the default channel. For more information please check [update channel](/deploy/settings/basic.md#update-channel) section.

### Applications

We usually recommend just selecting the applications which you need, such as the Word, PowerPoint and Excel. For more information please check [applications](/deploy/settings/basic.md#applications) section.

### Download first

When this option is off, Office will be deployed during downloading, and when it is on, it will be deployed after downloaded.

![Download first](/images/en-us/deploy/download-first.png)

- Deploy during downloading: you can't pause or cancel the installation at that moment. Office installer will download and install Office from Office CDN. If you have a bad internet connection, the installation may get stuck.
- Deploy after downloaded: the operation is usually performed by Office Tool Plus, so you can cancel or pause the download before the installation begins. Once the download is complete, you can go offline when installting Office.

---

Once the configuration is complete and no errors, you can begin deploying Office.

## Offline installation

通常我们说的离线安装指的是使用已经制作/打包好的安装文件进行安装。

如果您的文件类型是镜像文件（.iso），请双击打开、挂载，您也可以将其解压到某个文件夹中。如果您的文件类型是压缩包（例如 .zip, .7z, .rar），请将其解压到某个文件夹中。

挂载/解压后，如果文件中包含 Office Tool Plus，请双击并打开 Office Tool Plus。If not, [download](/start/README.md#download) and run Office Tool Plus first.

After opened Office Tool Plus, navigate to deploy page, 确保安装文件能够正确加载并识别。如果没有，请点击`选择`按钮并根据提示选择 Office 安装文件。

![Office installation](/images/en-us/deploy/office-installation.png)

::: tip Tips

Office 安装文件应该能够完整展示版本号和语言包信息，并且没有错误消息。如果安装文件不包含语言，或者仅包含校对工具，则安装的时候依然需要联网，否则会安装失败。

:::

安装文件加载后，请进行如下配置：

- Add [product(s)](/deploy/settings/basic.md#products).
- Add language(s).
- Configure [applications](/deploy/settings/basic.md#applications) (if needed).

体系结构和更新通道已根据安装文件自动匹配，因此您无法再更改，除非您有多个安装文件。语言也应当与安装文件的一致，如果安装文件不包含您所添加的语言，则安装时依然需要联网，否则安装会失败。

如果您在添加产品时，程序提示此产品无法安装在选定的通道上，则代表您所下载的 Office 安装文件无法安装您所选择的产品。请选择另外的产品，或下载另外的 Office 安装文件。

If everything is ok, click `Start deploy` now.
