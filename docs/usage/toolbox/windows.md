# Windows tools

## Reset Software Protection service

Some configuration information related to Software Protection in the registry will be deleted, such as the KMS host address and renewal policy. If Office Tool Plus detects that your Software Protection service is hooked by `SppExtComObjHook.dll`, `SppExtComObjHook.dll` will also be deleted.

After the reset is complete, you will need to set up the KMS host again and activate Office.

::: details Applicable situations

The following error occurs when activating Office:

- 0x8007000D: The data is invalid.
- 0x8007007B: The filename, directory name, or volume label syntax is incorrect.

:::

## Rebuild Windows Activation Token

The `data.dat`, `tokens.dat` and `cache.dat` files stored in the `%SystemRoot%\System32\spp\store\2.0` folder will be deleted.

Windows will try to rebuild these tokens, your Windows activation status may be lost (digital license activation will not be lost), and Office will need to reinstall the licenses.

Please wait a few minutes while Windows rebuilds the activation token before doing other activation operations.

::: warning Warning

**Please do not use this function unless you have a clear need for it.**

:::

::: details Applicable situations

The following error occurs when activating Office:

- 0xC004E015: The Software Licensing Service reported that license consumption failed.
- 0x8004E108: The Software Licensing Service reported that a token in the Token Store contains an invalid hash.

:::

## Reset system variables

Some system variables will be reset, such as `%ProgramFiles%`, `%CommonProgramFiles%` etc. When missing some system variables, the Office Installer or Click to Run service may not work property.

::: warning Warning

**Please do not use this function unless you have a clear need for it.**

:::

::: details Applicable situations

- `The path is null or empty` error occurs when you are installing or removing Office using Office Tool Plus.

:::

## Repair WMI components

All WMI components will be re-registered.

::: warning Warning

**Please do not use this function unless you have a clear need for it.**

:::

::: details Applicable situations

The following error occurs when installing Office licenses:

- Invalid Class.
- 0x80070057: The parameter is incorrect.

:::
