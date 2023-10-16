# 修改安装

## 更改产品或语言

添加你想添加的产品或者语言，点击`卸载`将不需要的产品或语言标记为即将卸载。

如果没有问题，请点击`开始部署`以确认操作。

## 更改应用程序

![Modify Applications](/images/zh-cn/deploy/modify-applications.png)

若要新增一个应用程序，请将其选中；若要卸载一个应用程序，请将其取消选中。

其他不需要更改的应用程序保持原来的设置即可。如果没有问题，请点击`开始部署`以确认操作。

如果应用程序中没有你想要的程序，比如 Access，那么新增一个产品，选择 Access 即可。

## 升级现有的 Office

![Upgrade Office](/images/zh-cn/deploy/upgrade-product.png)

在另外的 PC 上下载 Office 安装文件，创建 Office ISO 或者将其拷贝到客户端计算机中。确保`安装文件`已正确加载数据，如果没有，请手动选择文件进行加载。然后在部署页面添加一个与当前已安装的 Office 一摸一样的产品即可开始部署。

## 迁移体系结构

Office Tool Plus 支持将 Office 从 32 位更改为 64 位（反之亦可），自动化操作，无需过多的人工干预。

首先将体系结构更改为自己想要的，如果你想迁移到 64 位的 Office。那么现在就选择 64 位。

![Migrate Office](/images/zh-cn/deploy/migrate-office.png)

之后将 *高级设置 - 升级选项 - 迁移体系结构* 勾选，然后`开始部署`即可。

Office 安装程序会首先将你的 Office 卸载，然后安装新的 Office.
