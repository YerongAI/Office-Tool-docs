# 修复 WPA 注册表

::: danger 警告

除非明确需求，否则不要执行此操作。

:::

系统中的 `HKEY_LOCAL_MACHINE\SYSTEM\WPA` 注册表发生损坏时，会导致 Windows 和 Office 激活失败，也有可能导致 Software Protection 服务持续占用 CPU。此操作将删除该注册表项，以便系统重新创建它。

由于这个注册表受系统保护，因此我们必须在 Windows PE 环境下进行操作。

## 操作步骤

- 下载[这个文件](https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip)。
- 解压后将 `rearm.cmd` 文件复制到系统根目录，例如 `C:\rearm.cmd`。
- 以管理员身份运行此命令以进入 Windows RE 环境: `shutdown /f /r /o /t 0`。
- 在 Windows RE 环境中，选择“疑难解答” > “高级选项” > “命令提示符”。
- 在命令提示符中，输入以下命令并按回车: `C:\rearm.cmd`。
- 脚本执行完成后，重新启动系统即可。

::: tip 提示

如果在执行 `C:\rearm.cmd` 命令时提示命令无法识别，请运行 `bcdedit | find "osdevice"` 命令，查看系统分区的盘符，并将 `C:\rearm.cmd` 中的 `C:` 替换为正确的盘符。例如 `D:\rearm.cmd`。

:::
