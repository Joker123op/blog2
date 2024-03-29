## XSS注入简介

XSS简介

* SQL注入就是将用户输入的数据被当作SQL代码执行

* XSS(前端代码注入)

前端代码（开源）三块
1. HTML：网页的框架
2. CSS：把网站变得更加好看
3. Javascript：让网页功能更强大

对于攻击者而言CSS并不重要，因为他只是美化界面，并没有安全效果

攻击的方向是js和如何触发js。因为js很强大，它可以控制浏览器

* `document.cookie="id"`(设置浏览器Cookie的js代码)
* 偷偷发送数据包(异步传输)
* 它可以窃取Cookie (先读取你的Cookie然后偷偷发送数据包给黑客，黑客收到Cookie后就可以登录你的账户)

拿到Cookie不等于拿到密码。（Cookie授权是有时效的）Cookie本身是不安全的，但是为了便捷并且利大于弊的情况下就选择了Cookie

Js的标识：
```JS
<script>alert(1)</script> // 设置了一个js弹窗

<a href=javascript:alert(1)> // 伪协议触发

<img src=1 onerror=alert(1) /> // 事件方法（触发器：事件在标签里面on开头的东西很高概率是事件）触发条件是src=1，因为这个本身不成立所以执行了后面的语句
```

在实战中不建议使用 `alert()` 这个函数进行弹窗，会影响业务正常运行属于风险操作

> 使用以下示例

```html
<script>console.log(123)</script>
```

上面三个不仅仅是js的标识还是触发的方法

[JavaScript事件触发手册](https://blog.csdn.net/qq_36354324/article/details/106592588)

有的时候是缓存问题导致无法弹窗CTRL+F5就行了

事件功能非常强大，甚至可以监听键盘鼠标，左键右键，屏幕。

弹出网站cookie

```js
<script>alert(document.cookie)</script> // 设置了一个js弹窗

<a href=javascript:alert(document.cookie)> // 伪协议触发

<img src=1 onerror=alert(document.cookie) /> // 事件方法（触发器：事件在标签里面on开头的东西很高概率是事件）触发条件是src=1，因为这个本身不成立所以执行了后面的语句
```

XSS分为三种类型：

* 反射型：你给我传参，然后触发了Js，如果你不给我传参，就不存在(传参里必须包含恶意语句才是标准的反射性XSS语句)
* 存储型：存储下来的传参，不需要传参中必须有恶意语句。但这样的脚本会被存进数据库，在这之后的所有人在访问这个网站的时候都有可能会执行你写的xss脚本(只要他存储在目标服务器)

存储型的xss脚本的功能是十分强大的，如果有人在网站的数据库里打入了一个存储型的xss脚本，并且它会获取每个用户的Cookie，那么他就会有盗号等一系列的风险

反射性的xss要点击才会中招

`http://www.xxx.com/?a=<script>alert(1)</script>`这就是一个反射性xss脚本，正常人看见都觉得肯定有问题，所以就可以引入一个东西

叫做短链接，原理很简单，在百度随便一搜就大把多。可以把长链接压缩成短链接，这样就可以引导别人点击。

在实际网站中也会遇见尖括号被编码掉了导致无法注入

前端代码有一个很重要的东西是**兼容性**。会对一些东西进行包容

JavaScript还支持一些编码例如：NATIVE

弹窗函数被劫栏会尝试替代`prompt(1)`

`payload:  'onfocus=alert(1)autofocus' 当input输入框获取焦点时执行(onfocus)`

## Cookie同源策略

浏览器的同源策略，限制了不同源的JS，对当前页面的资源和属性的权限。同源策略保护了a.com域名下的资源不被来自其他网页的脚本读取或篡改

所谓同源是：需要同域名/端口、协议

比如
`http://www.baidu.com`

`https://www.baidu.com`

就不是同源的

Js偷Cookie就是读取本地的Cookie发送到我准备好的目标服务器上

[XSS平台](https://xssaq.com/)域名做越短越好

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304181445728.webp)

如果只是窃取Cookie勾选这两个就已经够了

给网站添加cookie或者更改的插件是`EditThisCookie`下载地址放这里了[跳转](https://github.com/ETCExtensions/Edit-This-Cookie/releases/tag/1.5.0)

存储型XSS会出现的地方：

* 任何可能插入数据库的地方
* 用户注册的时候
* 留言板
* 上传文件的文件名
* （管理员可见的）报错信息

一般情况下来说前台的防御是高于后台的

存储型xss：

1. 同源法则
2. XSS平台
3. 存储型XSS并不是非得存数据库
4. XSS可以见框就插

## Dom Based XSS

Dom是一个Js可以操控浏览器和网页的接口

Dom不会经过服务器，本质上是自己打自己，因为每次有用户访问网站都会需要服务器对他分配一定资源，如果是有100万人同时访问，甚至更多。就会导致服务器压力过大。

所以这个时候就需要经过用户自己的本地，可以一定程度上给服务器减轻一部分压力，所以产生了漏洞

每个载入浏览器的HTML文档都会成为Document对象。

Document对象使我们可以从脚本中对HTML页面中的所有元素进行访问。

Document的对象属性

| 属性 | 描述 |
| -- | -- |
| body | 提供对`<body>`元素的直接访问。对于定义了框架集的文档，该属性引用最外层的`<frameset>` |
| cookie | 设置或返回与当前文档有关的所有cookie |
| domain | 返回当前文档的域名 |
| lastModified | 返回文档被修改的最后日期和时间。 |
| referrer | 返回载入当前文档的文档url。 |
| title | 返回当前文档的标题。 |
| URL | 返回当前文档的URL， |

这是上述函数的使用方法

| 函数 | 作用 |
| -- | -- |
| document.body | 提取Body信息 |
| document.domain | 提取当前页面域名 |
| document.lastModified | 查看当前页面的最后修改时间（同时也可以查看网站是否是静态网站） |

详细内容可以看看这篇扩展文章[Dom Based XSS](https://blog.csdn.net/weixin_45634365/article/details/114536958)

在真是网络环境中，还会存在一些伪静态网页，他们本质上还是动态。一样可以进行SQL注入。判断方法是使用函数`document.lastModified`来查看

要依靠当前页面JS才能触发的漏洞，可以理解为dom型xss























