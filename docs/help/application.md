# Application Questions

Sometimes you can resolve issues by restarting Windows.

## Insufficient memory to continue the execution of the program

Disconnect network, then open Office Tool Plus again.

If Office Tool Plus is working, reconnect to network.

## The window of Office Tool Plus is blank

Open CMD or PowerShell, and using the following command to disable hardware acceleration:

``` powershell
.\"Office Tool Plus" /enablehwacc false
```

**To solve the problem, please try to upgrade your GPU driver.**

## UCEERR_RENDERTHREADFAILURE (0x88980406)

Solution is same as the previous item.
