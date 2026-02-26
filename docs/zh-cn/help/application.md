# 程序问题 {#application-questions}

某些时候您可以通过重新启动 Windows 来解决问题。

## 程序无法在早期版本的 Windows 10 中运行 {#application-cannot-run-on-earlier-version-of-windows-10}

使用 Windows Update 安装所有可用更新，并重启以完成安装。

之后再次尝试运行 Office Tool Plus。

## Office Tool Plus 的窗口一片空白，看不见任何东西 {#the-window-of-office-tool-plus-is-blank}

打开 CMD 或 PowerShell，使用以下命令关闭 Office Tool Plus 的硬件加速：

``` powershell
.\"Office Tool Plus" /enablehwacc false
```

**为了能永久解决此问题，请尝试更新您的显卡驱动。**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

解决方案同上。
