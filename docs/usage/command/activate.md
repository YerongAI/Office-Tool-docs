# Activation commands

These commands can be used on command box and the command-line. The commands are not case-sensitive.

``` batch
ospp params
```

For example the following is a simple activation command:

``` batch
ospp /inslicid ProPlus2021Volume /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /act
```

| Command | Instruction | Usage |
| :--     | :--     | :--       |
| /unkeys           | Uninstall all installed Office product keys. | `/unkeys` |
| /unlics           | Uninstall all installed Office licenses. | `/unlics` |
| /inslicid *value* | Install the specified Office licenses. | `/inslicid ProPlus2021Volume` or `/inslicid ProPlus2021Volume,VisioPro2021Volume` |
| /inpkey *value*   | Install the specified Office product key. | `/inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX` |
| /unpkey *value*   | Uninstall the specified Office product key. | `/unpkey XXXXX` |
| /sethst *value*   | Set KMS host. | `/sethst kms.example.com` |
| /setprt *value*   | Set KMS port. Default port: 1688. | `/setprt 1688` |
| /act *value*      | Activate installed Office product keys. Value optional, if not provided then attempts to activate all keys. | `/act` or `/act <SKU ID>` |
| /actcid *value*   | Activate product with user-provided confirmation ID.  | `/actcid <CID>` |
| /dstatus          | Display the Office activation info (only available in command-line).             | `/dstatus` |
| /dinstid          | Display installation ID for offline activation (only available in command-line). | `/dinstid` |
