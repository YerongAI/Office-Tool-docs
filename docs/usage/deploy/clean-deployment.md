# First deploy

When deploying Office, installation and uninstallation can occur simultaneously, so you can combine multiple steps without having to perform them separately.

## Online installation

Online installation requires Internet connection. If you have a bad connection installation may take longer to complete.

Open Office Tool Plus, go to deploy page and do the following things:

- Add [product(s)](/usage/deploy/settings/basic.md#products).
- Add [language(s)](/usage/deploy/settings/basic.md#languages).

Add products and languages according to your needs. If you don't know what products to add, please check [products](/usage/deploy/settings/basic.md#products) section.

---

If needed, you can also check the following configuration.

### Architecture

By default, 32-bit Office will be installed. For more information please check [architecture](/usage/deploy/settings/basic.md#architecture) section.

### Update channel

If you want to install Office 2019/2021 volume products, you need to configure update channel to Office 2019/2021 Perpetual Enterprise channel. Other times just use the default channel. For more information please check [update channel](/usage/deploy/settings/basic.md#update-channel) section.

### Applications

We usually recommend just selecting the applications which you need, such as the Word, PowerPoint and Excel. For more information please check [applications](/usage/deploy/settings/basic.md#applications) section.

### Download first

When this option is off, Office will be deployed during downloading, and when it is on, it will be deployed after downloaded.

![Download first](/images/en-us/deploy/download-first.png)

- Deploy during downloading: you can't pause or cancel the installation at that moment. Office installer will download and install Office from Office CDN. If you have a bad internet connection, the installation may get stuck.
- Deploy after downloaded: the operation is usually performed by Office Tool Plus, so you can cancel or pause the download before the installation begins. Once the download is complete, you can go offline when installing Office.

---

Once the configuration is complete and no errors, you can begin deploying Office.

## Offline installation

The offline installation means that install Office using already packaged installation files.

If you have an image file (.iso), you can mount it as a DVD drive. If you have a compressed package (such as .zip, .7z, .rar), please unpack it to a folder.

After mounting/unpacking, run Office Tool Plus from the archives. If not, [download](/introduction/download) Office Tool Plus first.

After opened Office Tool Plus, navigate to deploy page, make sure the installation files was loaded. If not, click `Select` button and choose the file.

![Office installation](/images/en-us/deploy/office-installation.png)

::: tip Tips

Office installation files should show version number and languages information in its entirety without errors. If the installation files does not contain language, or contains only proofing tool, the installation will still require an Internet connection, otherwise the installation will fail.

:::

After installation files was loaded, do the following things:

- Add [product(s)](/usage/deploy/settings/basic.md#products).
- Add [language(s)](/usage/deploy/settings/basic.md#languages).
- Configure [applications](/usage/deploy/settings/basic.md#applications) (if needed).

The architecture and update channels have been automatically matched based on the installation files, so you don't need to change them again unless you have multiple installations. The language(s) should also match the installation file. If the installation files does not contain the language(s) you added, the installation will still require an Internet connection, otherwise the installation will fail.

If Office Tool Plus prompts that the product cannot be installed on the selected channel when adding a product, it means that the Office installation files you downloaded cannot install the product you selected. Please select a different product, or download different Office installation files.

If everything is ok, click **Start deploy** now.
