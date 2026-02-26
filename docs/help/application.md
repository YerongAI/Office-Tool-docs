# Application Questions

Sometimes you can resolve issues by restarting Windows.

## Application cannot run on earlier version of Windows 10

Use Windows Update to install all available updates, and restart Windows to finish installation.

After that, try to run Office Tool Plus again.

## The window of Office Tool Plus is blank

Open CMD or PowerShell, and using the following command to disable hardware acceleration:

``` powershell
.\"Office Tool Plus" /enablehwacc false
```

**To solve the problem, please try to upgrade your GPU driver.**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

Solution is same as the previous item.
