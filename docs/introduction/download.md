# Download

You can download Office Tool Plus from there sites:

- [Yuntu mirror](https://www.officetool.plus/redirect/download.php?site=yuntu)
- [OneDrive](https://www.officetool.plus/redirect/download.php?site=onedrive)
- [GitHub Releases](https://www.officetool.plus/redirect/download.php?site=github)
- [SDU Mirror](https://www.officetool.plus/redirect/download.php?site=sdumirror)
- [SJTU Mirror](https://www.officetool.plus/redirect/download.php?site=sjtumirror)
- [NJU Mirror](https://www.officetool.plus/redirect/download.php?site=nju)
- [LZU Mirror](https://www.officetool.plus/redirect/download.php?site=lzu)
- [NYIST Mirror](https://www.officetool.plus/redirect/download.php?site=nyist)
- [JCUT Mirror](https://www.officetool.plus/redirect/download.php?site=jcut)

Or download Office Tool Plus using PowerShell:

Site 1:

```powershell
irm https://otp.landian.vip/get/ | iex
```

Site 2:

```powershell
irm https://officetool.plus/get/ | iex
```

Differences between the versions:

- Includes runtime: Includes .NET Runtime, you can run Office Tool Plus without .NET Runtime installation.
- Normal: Only Office Tool Plus and base components.

> We recommend you to download Office Tool Plus which includes runtime.

Differences between the architecture:

- x86 (32-bit): Works on 32 bit, 64 bit and ARM64 of Windows. `Thunder` engine is supported.
- x64 (64-bit): Works on 64 bit and ARM64 of Windows. `Thunder` engine is **not** supported.
- ARM64: Only works on ARM64 of Windows. Better compatibility and performance for ARM64 platform, others are same as the x64.

## Unpack

Extract Office Tool Plus to a normal location, such as desktop. **Do NOT run Office Tool Plus without unpacking**.
