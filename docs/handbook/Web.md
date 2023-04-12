## 攻防世界:ics-06

靶场开启了之后查看到一个网址，里面有很多侧边栏在url中尝试sql注入发现没有任何反应。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304092128814.webp)

那就随便点点侧边栏

结果在报表中心出现了页面跳转，并且在url上出现了新的参数。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304092130314.webp)

尝试改变id的参数，结果发现页面不存在变化

并且尝试了报错注入`?id=1 and 1=2`结果被直接过滤了

那就使用`BurpSuite`工具来进行抓包然后把id的值一直更改

**注意**如果需要使用burpsuite的多线程暴破功能，需要使用付费版，社区版没有这个功能。

直接打开burpsuite的内置浏览器，开启拦截

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101201403.webp)

可以看见第一个包就包含了我们要破解的参数

直接右键选择第三个功能

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101202605.webp)

然后切换到相对应的模块

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101203304.webp)

第一步清除一下请求包中的参数，然后选中你要破解的参数，根据图片指引add就可以了

最后配置一下参数从1开始到10000结束

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101205551.webp)

最后配置一下线程池，也就是多线程。这个功能也只有付费版才有

![](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304092124888.webp)

一切准备就绪之后就点击右上角橙色的按钮开始

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101211974.webp)

跑完以后按照长度排序

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101217349.webp)

发现当id=2333时返回的长度不一样，那就回到浏览器，在url中输入id=2333

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304101218259.webp)

成功得到flag！

## 攻防世界:Training-WWW-Robots

打开靶场后是一串英文，翻译过来是

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304122302848.webp)

>这个考点是网络爬虫的`Robots`协议[网络爬虫排除标准](https://zhuanlan.zhihu.com/p/342575122)

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304122305984.webp)

所以接下来就在网址栏访问这个文件就行了，这个文件上就给了页面，上面就告诉了什么可以爬

我们就输入这个目录就可以获得flag

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304122308963.webp)

<br >

## 攻防世界：PHP2

打开靶场后是这样的

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304122311467.webp)

意思是你可以对这个网站进行反驳吗？

这里引入一篇文章[index.phps](https://blog.csdn.net/loseheart157/article/details/108140659)

那如果是打开网站首页那肯定是想到`/index.php`这里我尝试了输入这个路径，结果页面没有任何的变化

那就输入`/index.phps`试试。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304122313189.webp)

果然有了回显，这就是他网站的源码.

接下来就是代码审计环节

他的第一个判断是id的值不能等于admin

但是他又要等于admin才能得到flag

不过注意这有一个特殊的函数`urldecode()`他的[作用](https://www.w3cschool.cn/php/php-urldecode.html)是将id的参数用url解码。

所以我们传递进去id的值一定是url编码后的。

不过Web浏览器的url栏会对输入的url编码自动解码一次。因为在php中有一个函数会将获取到的值再url解码一次才会进入判断。

所以我们输入的id的值要是编码两次后的值

不过我发现网上搜到的url在线编码工具都不怎么好用，所以我个人用的是线下的名字叫`CaptfEncoder`

右边的值就是将admin编码两次后的结果：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130032608.webp)

>%2561%2564%256d%2569%256e

然后把这段数据放进url中`/index.php?id=%2561%2564%256d%2569%256e`就行了。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130034894.webp)





