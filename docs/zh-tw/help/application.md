# 程式問答集 {#application-questions}

## 記憶體不足，無法繼續執行程式 {#insufficient-memory-to-continue-the-execution-of-the-program}

請斷開網路，然後重新開啟 Office Tool Plus。

如果 Office Tool Plus 可正常運作，再重新連接網路。

## Office Tool Plus 視窗顯示空白 {#the-window-of-office-tool-plus-is-blank}

請開啟 CMD 或 PowerShell，並使用以下命令來停用硬體加速：

```powershell
."Office Tool Plus" /enablehwacc false
```

**為了解決此問題，請嘗試更新您的 GPU 驅動程式。**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

解決方案與前一項相同。

## 查詢錯誤碼描述時程式崩潰 {#program-crashed-when-querying-error-code-description}

請重新啟動 Windows。
