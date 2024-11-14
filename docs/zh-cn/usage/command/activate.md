# 激活命令 {#activation-commands}

这些命令可以在命令行和命令框中使用，命令不区分大小写。

``` batch
ospp params
```

例如以下是一条简单的激活命令：

``` batch
ospp /inslicid ProPlus2021Volume /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /act
```

| 命令 | 说明 | 使用方法 |
| :--  | :-- | :--  |
| /clall            | 清除所有已安装的 Office 许可证和产品密钥 | `/clall` |
| /cllicenses       | 清除所有已安装的 Office 许可证 | `/cllicenses` |
| /clkeys           | 清除所有已安装的 Office 产品密钥 | `/clkeys` |
| /inslicid *value* | 安装指定产品的 Office 许可证 | `/inslicid ProPlus2021Volume` 或 `/inslicid ProPlus2021Volume,VisioPro2021Volume` |
| /inpkey *value*   | 安装指定的 Office 密钥 | `/inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX` |
| /unpkey *value*   | 卸载指定的 Office 密钥 | `/unpkey XXXXX` |
| /sethst *value*   | 设置 KMS 主机地址 | `/sethst kms.example.com` |
| /setprt *value*   | 设置 KMS 主机端口，默认值: 1688 | `/setprt 1688` |
| /act *value*      | 激活已安装的 Office 产品密钥。值是可选的，不提供则尝试激活所有密钥 | `/act` or `/act <SKU ID>` |
| /actcid *value*   | 使用用户提供的确认 ID 激活产品  | `/actcid <CID>` |
| /dstatus          | 显示 Office 激活信息（仅在命令行中可用） | `/dstatus` |
| /dinstid          | 显示许可证的安装 ID，以用于离线激活（仅在命令行中可用） | `/dinstid` |
