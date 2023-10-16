# Activation Questions

## 0x80131500

This error code has no meaning, please refer to the given error message to troubleshoot the problem.

## 0x80131539

This error code has no meaning, please refer to the given error message to troubleshoot the problem.

## 0xC004F015

Error description: The Software Licensing Service reported that the license is not installed.

If your Office was activated, you can ignore the messgae.

If your Office is not activated, check your activation steps is correct or not, or purchase Office from Microsoft.

## 0xC004F017

Error description: The Software Licensing Service reported that the license is not installed.

Solution is same as [0xC004F015](activation.md#_0xc004f015).

## 0xC004F069

Error description: The Software Licensing Service reported that the product SKU is not found.

The Office product key you are installing does not have a corresponding license, you need to install the corresponding Office license first, and then install the product key.

## 0xC004E015

Error description: The Software Licensing Service reported that license consimption failed.

Please refer to [Rebuild Windows Activation Token](/toolbox/windows.md#rebuild-windows-activation-token).

## 0x8004E108

Error description: The Software Licensing Service reported that a token in the Token Store contains an invalid hash.

Solution is same as [0xC004E015](activation.md#_0xc004e015).

## 0x8007000D

Error description: The data is invalid.

Check your OS time is correct or not. Make sure the KMS host that you are using is working. [How to test?](/toolbox/README.md#test-kms-host-reachability)

Do the following thins:

- [Reset Software Protection service](/toolbox/windows.md#reset-software-protection-service).
- Try activating again.

## 0x8007007B

Error description: The filename, directory name, or volume label syntax is incorrect.

Solution is same as [0x8007000D](activation.md#_0x8007000d).

## No solutions at this time

- Error code: 0x80040154, Class not registered.
- Error code: 0x80070002, The system cannot find the file specified.
