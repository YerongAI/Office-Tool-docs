# General tools

## Query Office version

You can get the version information of Office update channel from Microsoft, including the channel name, branch, version number, and creation time.

![Query Office version](/images/en-us/toolbox/query-office-update-channel.webp)

To display internal channels, please enable [Display internal products and channels](/usage/settings.md#display-internal-products-and-channels).

## Query error code description

Error codes usually start with 0x (hexadecimal) or can be a normal number, such as 2 (decimal).

When you query it, Office Tool Plus will display the description of error code. Sometimes a Windows Activation dialog may pop up. Click the `Show details` to view the description of error code.

## Test KMS host reachability

By default, Office Tool Plus uses TCP connection to test whether the KMS host can be connected.

You can also use the [vlmcs](https://download.coolhub.top/Extensions/Components/) component to detect whether the KMS host is working properly.

Input your KMS host address, then click **Test** button.

![Test KMS host](/images/en-us/toolbox/test-kms.webp)
