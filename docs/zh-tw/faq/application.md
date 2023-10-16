# 程序问题

## Insufficient memory to continue the execution of the program

断开网络连接，然后重新打开 Office Tool Plus.

如果一切正常，恢复网络连接。

## Office Tool Plus 的窗口一片空白，看不见任何东西

打开 CMD 或 PowerShell，使用以下命令关闭 Office Tool Plus 的硬件加速：

``` batch
"Office Tool Plus" /enableHWAcc false
```

**为了能永久解决此问题，请尝试更新您的显卡驱动。**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

解决方案同上。
