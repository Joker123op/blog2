## SSRF

服务器端请求伪造（SSRF）是指攻击者能够从易受攻击的Web应用程序发送精心设计的请求对其他网站进行攻击。(利用一个可发起网络请求的服务当作跳板来攻击其他服务)

攻击者能够利用目标帮助攻击者访问其他想要攻击的目标

SSRF可以使用A网站进行对B网站的攻击

公网和内网

安全意识现状：

* 外紧内松
* 做安全是花钱的

一般情况下对内网都是处于一个比较信任的状态，很少会做一些防护，甚至有的是弱密码

其核心就是利用外网来进行内网渗透而不是防止溯源

SSRF控制目标服务器发起网络请求

CSRF控制用户的浏览器发起网络请求

访问网站协议有很多：

```
http://

file:///        直接读取文件

dict://url:端口号         探测端口
```

SSRF => 
* 可以作为跳板
* 可以攻击内网的网站
* 可以攻击内网的服务（其实可以拿内网的服务器）

传参后面出现某些东西是很危险的

协议：http:// 任意其他协议都可以试试SSRF

出现文件名：a.txt => b.php(x.后缀)











