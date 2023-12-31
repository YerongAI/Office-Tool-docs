# 不含任何配置的 ISO

在部署页面，更改`部署模式`为**创建 ISO 文件**，打开`下载后再部署`。

确保做好以下事情：

- 添加产品，按需选择。若不添加，则无法确保后续是否正确。
- 添加语言，按需选择。若不添加或错加，则安装时需要联网。
- 选择体系结构，如无特殊需求，保持默认即可。
- 选择合适的通道，如无特殊需求，保持默认即可。

确保以上几点做好后即可「开始部署」，其他高级设置可以按需更改。

**在下载 Office 过程中，请按下 F5 或者手动清空所有产品和语言，以确保创建的 Office ISO 不包含 ConfigForISO.xml.**

::: tip 提示

如果你需要创建同时包含 32 位和 64 位的 Office ISO，请在 Office 下载时将体系结构更改为 64 位（或 32 位），然后再次点击开始部署即可。Office Tool Plus 会自动添加相应的下载任务。

:::
