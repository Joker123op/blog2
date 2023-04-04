## 环境搭建

网页由前端，后端组成。而后端有数据库和动态语言。

web容器可以把前端和动态语言放在一起，它是一个十分重要的东西

访问某一个网站其实就是访问某一台电脑的web容器中的某一个文件夹里的内容

在windows环境下运行php需要使用到一个软件**Phpstudy**，[下载地址](https://www.xp.cn/download.html)

由于是作为渗透测试作用的靶场，所以最好的放在虚拟机中运行，这样也可以防止被别人乱搞或者自己用力过猛造成一些不必要的损失。

下载好phpstudy之后安装然后打开这个东西：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050104818.webp)

然后再点击网站

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050105606.webp)

然后再点击创建网站。这里有一个值得注意的一点。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050105210.webp)

端口号不能重复，然后在根目录中的路径中要删除(.com）。

随后将PHP的文件放在这个目录下

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050113364.webp)

在里面写好php之后保存跟着这个步骤打开就可以完成php环境的搭建啦！

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050114463.webp)

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050122519.webp)


## PHP语言的特点以及介绍

首先PHP是一种通用的开源脚本语言。（超文本预处理器）

PHP吸收了C语言、Java和Pert的特点，主要使用于WEb开发测试。

PHP是将程序嵌入到HTML文档中去执行css和js（前端代码）

PHP还可以执行编译后的代码，编译可以达到加密和优化代码运行，使代码运行更快。

PHP支持几乎所有流行的数据库以及操作系统。

---

使用场景有

* 网站需要动态操作的，如注册，登录，查询。
* 网站需要生成静态文件确保安全的。
* 需要快速看见效果的项目。
* 部分游戏服务端（swoole扩展）
* ......

