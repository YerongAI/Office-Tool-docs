# No configurations

When the Office ISO does not contain any configurations, after starting Office Tool Plus, you need to manually add products and languages ​​before you can start deployment. The products and languages ​​that you can add depend on what is included in the Office ISO.

---

Go to the Deploy page and change the **Deployment mode** to **Create ISO file**.

If you have already downloaded the Office installation files, make sure that the [Office installation files](/usage/deploy/settings/basic#installation-files) can be correctly loaded.

Make sure the product and language are both empty, then start deploy.

---

If you haven't downloaded the Office installation files yet, follow these steps:

- Add products. If you only want to install the language pack, you can ignore products.
- Add languages. If not configured correctly, the installation may fail or require an internet connection.
- Select the desired architecture.
- Select the appropriate update channel.
- Enable **Download first, then deploy**. If there is no installation file, the operation cannot continue.

Other advanced settings can be changed as needed. After completing the above steps, you can Start Deploy.

**During the Office download process, press F5 or manually clear all products and languages ​​to ensure that the Office ISO does not contain the `ConfigForISO.xml` file.**

::: tip Tip

If you need to create an Office ISO that contains both 32-bit and 64-bit versions, change the architecture to 64-bit (or 32-bit) **when downloading Office**, and then click Start Deploy again.

:::
