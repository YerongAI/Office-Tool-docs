# 程式問答集 {#application-questions}

某些時候您可以透過重新啟動 Windows 來解決問題。

## Application cannot run on earlier version of Windows 10 {#application-cannot-run-on-earlier-version-of-windows-10}

Use Windows Update to install all available updates, and restart Windows to finish installation.

After that, try to run Office Tool Plus again.

## Office Tool Plus 視窗顯示空白 {#the-window-of-office-tool-plus-is-blank}

請開啟 CMD 或 PowerShell，並使用以下命令來停用硬體加速：

```powershell
."Office Tool Plus" /enablehwacc false
```

**為了解決此問題，請嘗試更新您的 GPU 驅動程式。**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

解決方案與前一項相同。
