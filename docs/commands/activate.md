# Activation Commands

These commands can be used on command box and the command-line. The commands are not case-sensitive.

``` batch
ospp params
```

For example the following is a simple activation command:

``` batch
ospp /inslicid ProPlus2021Volume /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /act
```

| Command | Instruction | Usage |
| :-- | :-- | :-- |
| /clall          | Clear all installed Office licenses and keys. | /clall |
| /cllicenses     | Clear all installed Office licenses. | /cllicenses |
| /clkeys         | Clear all installed Office product keys. | /clkeys |
| /inslicid *values* | Install the specified Office licenses. | `/inslicid ProPlus2021Volume` or `/inslicid ProPlus2021Volume,VisioPro2021Volume` |
| /inpkey *value* | Install the specified Office product key. | /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX |
| /unpkey *value* | Uninstall the specified Office product key. | /unpkey XXXXX |
| /sethst *value* | Set KMS host. | /sethst kms.example.com |
| /setprt *value* | Set KMS port. Default port: 1688 | /setprt 1688 |
| /act            | Activate Office product(s). | /act |
| /dstatus        | Display the Office activation info (only available on command-line). | /dstatus |
