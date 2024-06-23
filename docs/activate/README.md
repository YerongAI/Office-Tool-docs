# Activation introduces

On activation page, you can install the licenses, install the product keys, configure KMS and more.

If you purchased an Office license, you can activate Office by opening Office and signing in to your Microsoft account.

## License

### Retail license

Retail licenses can only be activated via a valid product key, The Microsoft 365 products can only be activated by logging into a Microsoft account that has a genuine license.

Most retail licenses are tied to a Microsoft account, so retail licenses are not usually activated via Office Tool Plus.

### Volume license

Volume licenses can be activated using MAK or via KMS.

- Multiple Activation Key (MAK): can be used in multiple times within specific limits. Once activated, the activation will be permanent.
- Key Management Service (KMS): KMS activation requires the use of GVLK and setting up the KMS host.

The KMS renewal policy is determined by the KMS host. Typically, an activation is valid for 180 days and is renewed every 7 days.

## Licenses management

### Install licenses

You can choose which licenses you want to install from list. The Grace key is the default key for Retail licenses, GVLK  is the default key for volume licenses.

When installing a new license, the existing licenses are not overwritten, so the licenses can coexist.

::: tip Tip

You can holding <kbd>Ctrl</kbd> to select multiple items when installing licenses. You can also type `|` in the filter box to filter by multiple conditions. For example, type `office ltsc 2021|visio 2021` to filter Office 2021 LTSC licenses and Visio 2021 licenses.

:::

### Install other licenses

You can install other licenses if you needed. Usually the Office licenses storage on `C:\Program Files\Microsoft Office\root\Licenses16`. You need to install Office product key for the licenses you installed.

### Uninstall all licenses

The operation will removing all licenses, but except product keys.

## Key management

### Install key

Input a valid key for Office product to install. If you get an error code [0xC004F069](/faq/activation.md#_0xc004f069) when installing key, install Office licenses for the corresponding product first.

### Uninstall all unactivated keys

This will query all licenses and uninstall all unactivated keys automatically. Be careful when using the function.

### Install confirmation ID (CID)

You can install CID to activate your Office via phone activation.

## KMS management

KMS host can be a domain name or IP address, such as `kms.example.com` or `192.168.123.1`.

The default port of KMS is 1688, you can change it if needed, such as `kms.example.com:1688` or `192.168.123.1:1688`.

## Office licenses list

You can query information about all installed Office licenses, support vNext licenses and legacy licenses.

### vNext licenses

Office Tool Plus supports to view the status, expiration date and user info for vNext license. You should log out of your MS account on Office applications before deleting the license.

### Office legacy licenses

Office Tool Plus supports to query basic info for license. You can uninstall key for the license, or copy the CID for phone activation.
