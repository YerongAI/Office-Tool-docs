# 程序问题 {#application-questions}

## Insufficient memory to continue the execution of the program

断开网络连接，然后重新打开 Office Tool Plus.

如果一切正常，恢复网络连接。

## Office Tool Plus 的窗口一片空白，看不见任何东西 {#the-window-of-office-tool-plus-is-blank}

打开 CMD 或 PowerShell，使用以下命令关闭 Office Tool Plus 的硬件加速：

``` powershell
.\"Office Tool Plus" /enablehwacc false
```

**为了能永久解决此问题，请尝试更新您的显卡驱动。**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

解决方案同上。

## 查询错误代码描述时崩溃 {#program-crashed-when-querying-error-code-description}

重启 Windows。
