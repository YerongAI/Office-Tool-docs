# Windows 工具

## 重置 Software Protection 服务

此功能会删除注册表中和 Software Protection 相关的一些 KMS 信息，例如 KMS 主机地址或一些续期策略。除此之外，如果 Office Tool Plus 检测到您的 Software Protection 服务被 `SppExtComObjHook.dll` 劫持，程序还会尝试解除劫持并删除 `SppExtComObjHook.dll` 文件。

重置完成后，您可能需要重新设置 KMS 主机信息并重新激活 Office。

::: details 适用情况

激活 Office 时出现以下错误代码：

- 0x8007000D：数据无效
- 0x8007007B：文件名、目录名或卷标语法不正确

:::

## 重建 Windows 激活令牌

此功能会尝试删除 `C:\Windows\System32\spp\store\2.0`（Windows Insider 为 `C:\Windows\System32\spp\store_test\2.0`）文件夹下的 `data.dat`, `tokens.dat` 和 `cache.dat`。

删除后，Windows 将会尝试重建这些文件，您的 Windows 激活状态可能会丢失（如果激活已绑定主板或微软账户则无需担心此问题），Office 也需要重新安装许可证并重新激活。

重建 Windows 激活令牌后，请稍等几分钟，然后再继续激活操作。

::: warning 注意

**除非明确要求，否则请勿随意使用此功能。**

:::

::: details 适用情况

激活 Office 时出现以下错误代码：

- 0xC004E015：许可证使用失败
- 0x8004E108：令牌存储中的令牌包含无效的哈希

:::

## 重置系统变量

此功能会重置一些系统变量，例如 `%ProgramFiles%`, `%CommonProgramFiles%` 等系统变量。某些系统变量丢失时会导致 Office 安装程序或 Click to Run 服务无法正常工作。

::: warning 注意

**除非明确要求，否则请勿随意使用此功能。**

:::

::: details 适用情况

- 使用 Office Tool Plus 安装或移除 Office 时出现错误提示：*Value is null (parameter XXX)*

:::

## 修复 WMI 组件

此功能会重新注册所有 WMI 组件。

::: warning 注意

**除非明确要求，否则请勿随意使用此功能。**

:::

::: details 适用情况

- 安装 Office 许可证时出现以下问题：
  - 无效类
  - 0x80070057：参数错误

:::
