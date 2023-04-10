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


















