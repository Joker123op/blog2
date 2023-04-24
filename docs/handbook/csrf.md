## CSRF

CSRF跨站请求伪造：也被称为“One Click Attack”或者Seccion Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本(xss)，但是他和xss非常不同，xss利用站点内的信任用户，而CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比xss更具危险性

CSRF漏洞的成因是因为网站的cookie在浏览器中不会过期，只要不关闭浏览器或者退出登录，那以后只要是访问这个网站，都会默认你已经登录的状态。而在这个期间，攻击者发送了构造好的CSRF脚本或者包含CSRF脚本的链接，可能会执行一些用户不想做的功能(比如是添加账号等)

CSRF和XSS没有直接关系

XSS：在目标网页上执行JS来窃取Cookie

CSRF：危害很大，但是条件需要配合

* 1、恰好登陆
* 2、好登陆了

生成一个CSRF攻击的html文件很简单，先在自己需要强制发送的数据包进行自己修改一下，再使用burpsutie进行抓包，然后右键

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304201602036.webp)

然后就会会生成一个html，把他保存下来就可以形成一个可以攻击的恶意CSRF

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304201603487.webp)
