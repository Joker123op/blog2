## CSRF

> CSRF跨站请求伪造：也被称为“One Click Attack”或者Seccion Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本(xss)，但是他和xss非常不同，xss利用站点内的信任用户，而CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比xss更具危险性

> CSRF漏洞的成因是因为网站的cookie在浏览器中不会过期，只要不关闭浏览器或者退出登录，那以后只要是访问这个网站，都会默认你已经登录的状态。而在这个期间，攻击者发送了构造好的CSRF脚本或者包含CSRF脚本的链接，可能会执行一些用户不想做的功能(比如是添加账号等)

#### CSRF和XSS没有直接关系

`XSS`：在目标网页上执行JS来窃取 `Cookie`

`CSRF`：危害很大，但是条件需要配合

* 1、恰好登陆
* 2、登陆了

生成一个CSRF攻击的html文件很简单，先在自己需要强制发送的数据包进行自己修改一下，再使用burpsutie进行抓包，然后右键

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304201602036.webp)

然后就会会生成一个html，把他保存下来就可以形成一个可以攻击的恶意CSRF

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304201603487.webp)

## CORS漏洞

跟他同出一脉的还有一个名为 `CORS` 的漏洞。和 `CSRF` 有异曲同工之妙。

利用方法有些相似，但测试方法不一样

#### **Part1 前言**

CORS跨域资源共享漏洞与JSONP劫持漏洞类似，都是程序员在解决跨域问题中进行了错误的配置。攻击者可以利用Web应用对用户请求数据包的Origin头校验不严格，诱骗受害者访问攻击者制作好的恶意网站，**从而跨域获取受害者的敏感数据，包括转账记录、交易记录、个人身份证号信息、订单信息等等**。

近几年在很多的渗透测试报告中，CORS跨域资源共享漏洞越来越多了。有的朋友实在挖不出漏洞，偶尔就会写上一个CORS跨域资源共享漏洞出一份报告，但是细究起来以下几个问题，却都模棱两可，搞不明白。

---

**1.** 什么是CORS漏洞？

**2.** 哪些情况下的CORS漏洞是高危漏洞？哪些情况下CORS漏洞是没有危害的？

**3.** CORS漏洞的怎么利用？

**4.** CORS漏洞的修补建议？

---

很多朋友**以为Web应用返回 `Access-Control-Allow-Origin: \*` 就是存在漏洞，其实这个判断是不完善的**。



####  **Part2 CORS漏洞测试结果**

> 首先使用burpsuite抓包对http请求添加**Origin: http://www.attacker.com**进行测试：



####  **1**  如果返回头是以下情况，那么就是高危漏洞，这种情况下漏洞最好利用：

> Access-Control-Allow-Origin: https://www.attacker.com

> Access-Control-Allow-Credentials: true



####  **2**  如果返回头是以下情况，那么也可以认为是高危漏洞，只是利用起来麻烦一些：

> Access-Control-Allow-Origin: null

> Access-Control-Allow-Credentials: true



####  **3**  如果返回以下，则不存在漏洞，因为Null必须是小写才存在漏洞：

> Access-Control-Allow-Origin: Null

> Access-Control-Allow-Credentials: true



####  **4**  如果返回以下，可认为不存在漏洞，因为CORS安全机制阻止了这种情况下的漏洞利用，也可以写上低危的CORS配置错误问题。

> Access-Control-Allow-Origin: *

> Access-Control-Allow-Credentials: true



####  **5**  如果返回以下，可认为不存在漏洞，也可以写上低危的CORS配置错误问题。

> Access-Control-Allow-Origin: *
