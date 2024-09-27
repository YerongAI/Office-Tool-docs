# Windows 工具 {#windows-tools}

## 重置 Software Protection 服务 {#reset-software-protection-service}

注册表中和 Software Protection 相关的一些配置信息将会被删除，例如 KMS 主机地址和续期策略。如果 Office Tool Plus 检测到您的 Software Protection 服务被 `SppExtComObjHook.dll` 劫持，`SppExtComObjHook.dll` 也将会被一并删除。

重置完成后，您需要重新设置 KMS 主机并激活 Office。

::: details 适用情况

激活 Office 时出现以下错误：

- 0x8007000D：数据无效
- 0x8007007B：文件名、目录名或卷标语法不正确

:::

## 重建 Windows 激活令牌 {#rebuild-windows-activation-token}

存储在 `%SystemRoot%\System32\spp\store\2.0` 文件夹中的 `data.dat`, `tokens.dat` 和 `cache.dat` 将会被删除。

Windows 将会尝试重建这些文件，您的 Windows 激活状态可能会丢失（数字许可证激活不会丢失），Office 需要重新安装许可证。

在 Windows 重建激活令牌时，请稍等几分钟，然后再做其他激活操作。

::: warning 注意

**除非明确要求，否则请勿随意使用此功能。**

:::

::: details 适用情况

激活 Office 时出现以下错误：

- 0xC004E015：许可证使用失败
- 0x8004E108：令牌存储中的令牌包含无效的哈希

:::

## 重置系统变量 {#reset-system-variables}

一些系统变量将会被重置，例如 `%ProgramFiles%`, `%CommonProgramFiles%` 等系统变量。某些系统变量丢失时会导致 Office 安装程序或 Click to Run 服务无法正常工作。

::: warning 注意

**除非明确要求，否则请勿随意使用此功能。**

:::

::: details 适用情况

- 使用 Office Tool Plus 安装或移除 Office 时出现错误提示：`The path is null or empty`

:::

## 修复 WMI 组件 {#repair-wmi-components}

所有 WMI 组件都将会被重新注册。

::: warning 注意

**除非明确要求，否则请勿随意使用此功能。**

:::

::: details 适用情况

安装 Office 许可证时出现以下错误：

- 无效类
- 0x80070057：参数错误

:::
