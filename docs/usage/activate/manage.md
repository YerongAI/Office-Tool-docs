# Activation management

## Licenses management

### Install license

You can find the license you need from the list and install it. Office Tool Plus has built-in Grace product keys for retail licenses and built-in KMS client product keys (GVLK) for volume licenses, which will be automatically installed after installing the license.

When installing a new license, the existing licenses are not overwritten, so the licenses can coexist.

::: tip Tip

You can holding <kbd>Ctrl</kbd> to select multiple items when installing licenses. You can also type `|` in the filter box to filter by multiple conditions. For example, type `office ltsc 2021|visio 2021` to filter Office 2021 LTSC licenses and Visio 2021 licenses.

:::

### Install other licenses

You can install other licenses if you needed. Usually the Office licenses storage on `C:\Program Files\Microsoft Office\root\Licenses16`. This operation does not automatically install the corresponding Office product key, so you need to install the corresponding Office product key yourself after installing the license, otherwise the Office license may not be displayed in the Office application or licenses list.

### Uninstall all licenses

The operation will removing all licenses, but except product keys.

## Key management

### Install key

Input a valid key for Office product to install. If you get an error code [0xC004F069](/help/activation.md#_0xc004f069) when installing key, install Office licenses for the corresponding product first.

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
