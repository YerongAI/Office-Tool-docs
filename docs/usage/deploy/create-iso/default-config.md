# Default configuration

When the Office ISO contains a default configuration file, after starting Office Tool Plus, it will load the configuration of `ConfigForISO.xml`. Then Office Tool Plus will automatically jump to the deploy page to ask the user whether to deploy. Users can select Yes to start the installation now, or click No to modify the configuration and start deploy again.

In this mode, Office Tool Plus will first search for the installation file specified in the XML configuration file. If it cannot be find, Office Tool Plus will automatically search for the Office installation files in the root directory of Office Tool Plus (Office Tool folder).

---

Go to the Deploy page and change the **Deployment mode** to **Create ISO file**.

Follow these steps:

- Add products. If you only want to install the language pack, you can ignore products.
- Add languages. If not configured correctly, the installation may fail or require an internet connection.
- Select the desired architecture.
- Select the appropriate update channel.
- Enable **Download first, then deploy**. If there is no installation file, the operation cannot continue.

Other advanced settings can be changed as needed. After completing the above steps, you can Start Deploy.

**After the Office ISO is created, the `ConfigForISO.xml` file should be included automatically in the ISO.**

::: tip Tip

If you need to create an Office ISO that contains both 32-bit and 64-bit versions, change the architecture to 64-bit (or 32-bit) **when downloading Office**, and then click Start Deploy again.

After mounting the Office ISO, you should be able to see the Install Now option from the CD-ROM context menu, or start Office Tool Plus normally and confirm the installation.

:::
