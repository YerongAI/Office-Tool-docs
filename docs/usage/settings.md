# Application settings

Here you can adjust language, theme, background, download or deployment settings.

If the system language cannot be matched, English (United States) is used by default.

::: tip Tip

To save the changes, turn on the `Save Settings`, otherwise all settings will be lost after restarting Office Tool Plus.

:::

## Appearance & behavior

### Theme

By default, Office Tool Plus automatically switches between light theme and dark theme based on Windows settings. You can manually select your favorite theme.

### Background

By default, Office Tool Plus automatically choose background according to environment. Mica effect is the default background on Windows 11, and Bing wallpaper for others. If remote session is detected, the background will be off. You can adjust it to other backgrounds according to your preference, or use local images as background image, supporting PNG, JPG and BMP.

If you want to set a web image as the background image, please use [/setimage](/usage/command/application.md#in-application-commands) command.

::: warning Notice

The Mica effect is only available on Windows 11. When you use the Acrylic, Blur, or Mica effects, the title bar automatically changes to the Windows 11 style.

There may be a delay in dragging windows when using the Acrylic effect on Windows 10.

:::

## Advanced

### Hardware acceleration

Using hardware acceleration can provide better performance. Disabling hardware acceleration may reduce application performance, so we do not recommend disabling hardware acceleration.

However, if you encounter problems such as the window is blank or memory overflow when loading picture, you can avoid these problems by disabling hardware acceleration.

You can temporarily disable hardware acceleration via [command-line](/usage/command/application.md#commands).

## Deploy

### Office languages display format

By default, Office Tool Plus displays Office languages in native name.

- Native: display the local name of the languages, for example *Deutsch* for *German*.
- English: all language names display in English.
- Localized: all language names display in your OS language.

The native name, English name, and localized name are data provided by Windows. Different versions of Windows may display different results.

### Display internal products and channels

By default, Office Tool Plus does not display non-public products and update channels, such as products like `ProPlusVolume` or `MondoVolume`, or update channels like `Dofgood::DevMain`.

Internal products and update channels are not supported by Office Deployment Tool, so you can't use them directly. However, if you need, you can turn on this switch and Office Tool Plus will display these internal products and update channels.

::: danger Warning

If you don't know about the internal products and update channels, **DO NOT USE** them.

:::

## Download

### Verify files

After enabling, Office Tool Plus will verify the files after downloading Office installation files. Verification can detect version mismatches, file corruption and other issues.

If you continue to deploy Office when the files are corrupted, the installation process may get stuck. We strongly recommend that verify the Office installation files before deployment.

::: warning Attention

Office installation files verification does not work for online installation, only available in **Download** mode or when **Download first then deploy** is enabled.

:::

### Connect using HTTPS

By default, Office Tool Plus uses HTTP requests to download Office installation files.

If you're experiencing slow download speeds or unexpected errors while downloading files, you can turn on this and retrying the download.

### Engine

Differences between engines:

| Engine                 | x86 | x64 & ARM64 | Progress | Proxy | Pause & continue | Cancellation |
| :--                    | :-- | :--         | :--      | :--   | :--              | :--          |
| Thunder                | ✓ | × | ✓ | ✓ | ✓ | ✓ |
| bezzad.Downloader      | ✓ | ✓ | ✓ | × | ✓ | ✓ |
| Office Tool Plus       | ✓ | ✓ | ✓ | × | × | ✓ |
| Office Deployment Tool | ✓ | ✓ | × | × | × | × |

The default engine is *bezzad.Downloader*.

::: warning Warning

When using *bezzad.Downloader* as download engine, it is not recommended to set the number of **chunks** too high if files are downloading to a hard disk drive (HDD), too many **chunks** downloading at the same time will reduce the write speeds.

:::

### Windows version

By default, Office Tool Plus automatically detected OS version and downloads the corresponding Office version. To download Office installation files for other systems, change to the corresponding Windows version here.
