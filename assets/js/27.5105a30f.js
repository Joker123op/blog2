(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{300:function(e,t,r){"use strict";r.r(t);var _=r(14),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"信息收集的方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信息收集的方向"}},[e._v("#")]),e._v(" 信息收集的方向")]),e._v(" "),t("h3",{attrs:{id:"whois信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#whois信息"}},[e._v("#")]),e._v(" whois信息")]),e._v(" "),t("p",[e._v("whois指的是域名注册时留下的信息，比如管理员的名字、电话号码、邮箱")]),e._v(" "),t("h3",{attrs:{id:"子域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子域名"}},[e._v("#")]),e._v(" 子域名")]),e._v(" "),t("p",[e._v("什么是子域名？")]),e._v(" "),t("blockquote",[t("p",[e._v("顶级域名下的二级域名或者三级甚至更多级别的域名都属于子域名，有一些直接ip访问的web网站也归结于子域名的收集范围。")])]),e._v(" "),t("ul",[t("li",[e._v("为什么要收集子域名")])]),e._v(" "),t("p",[e._v("子域名可以扩大攻击范围，同一个域名下的二级域名都属于相同资产，一般而言都有相关联系")]),e._v(" "),t("p",[e._v("whois信息国内版可以查看的内容十分有限，大部分内容都是处于一个无法查看完整信息的状态。所以可以选择进入国外的whois网站进行查询。")]),e._v(" "),t("p",[e._v("国外的网站域名是"),t("a",{attrs:{href:"https://www.whois.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("whois.com"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("子域名的核心")])]),e._v(" "),t("p",[e._v("同一个顶级域名下的所有域名都属于这个网站的子域名")]),e._v(" "),t("ul",[t("li",[e._v("端口检测(nmap)")])]),e._v(" "),t("p",[e._v("端口检测的目的是看看目标服务器是否有打开了一些常见的危险端口例如"),t("code",[e._v("445|3306|22|1433|6379")]),e._v("可以进行尝试爆破或者是使用某些端口存在漏洞的服务。而且有可能一台服务器上面不同的端口代表着不同的Web网站~")]),e._v(" "),t("p",[t("code",[e._v("nmap")]),e._v("是一个功能十分强大的端口扫描工具，在kali里是自带这个工具，这是"),t("a",{attrs:{href:"https://blog.csdn.net/Xxy605/article/details/107620999",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用手则"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("目录as扫描(御剑)")])]),e._v(" "),t("p",[e._v("为什么要扫描目录？")]),e._v(" "),t("p",[e._v("有些网站可能某个目录下是一个新的网站，有的时候目录扫描直接下载了压缩包源码、编辑器目录、一些废弃的页面(会报错)")]),e._v(" "),t("p",[e._v("目录扫描的原理就是使用一个字典进行不断的对某个网站下的目录进行访问，然后将有正常响应的目录保留下来")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://finger.tidesec.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("指纹识别"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("为什么要指纹识别？")]),e._v(" "),t("p",[e._v("cms可能存在通杀漏洞，如果使用了cms建站我们可以直接使用cms通杀漏洞进行攻击")]),e._v(" "),t("h2",{attrs:{id:"使用谷歌语法进行搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用谷歌语法进行搜索"}},[e._v("#")]),e._v(" 使用谷歌语法进行搜索")]),e._v(" "),t("p",[e._v("在国内由于各种限制导致很多信息都无法直接获取，而谷歌搜索引擎又十分强大，使用独特的谷歌搜索引擎往往可以帮我们收集到一些意想不到的信息。")]),e._v(" "),t("p",[e._v("谷歌搜索引擎在国内无法直接进行访问。但是谷歌也有在中国做有镜像网站，以下为谷歌镜像网站链接")]),e._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"https://s.iit.xyz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://note.cm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://google.sb250.gq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google正版"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("接下来就是谷歌搜索语法")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("site:")]),e._v("指定域名")]),e._v(" "),t("p",[t("code",[e._v("filetype:")]),e._v("指定文件类型")]),e._v(" "),t("p",[t("code",[e._v("inurl:")]),e._v("指定url")]),e._v(" "),t("p",[t("code",[e._v("intitle:")]),e._v("指定title元素内的内容搜索")]),e._v(" "),t("p",[t("code",[e._v("intext:")]),e._v("把网页正文中某个关键字做为搜索条件，然后搜索全世界网页正文中含有这些关键字的网页,allintext：关键字功能相同。")]),e._v(" "),t("p",[t("code",[e._v("info:")]),e._v("这个语法用于搜索指定站点的一些基本信息。比如搜索北京大学网站的一些信息")])]),e._v(" "),t("p",[e._v("更多内容可以移步"),t("a",{attrs:{href:"https://blog.csdn.net/xxx0028/article/details/105818546",target:"_blank",rel:"noopener noreferrer"}},[e._v("谷歌搜索引擎使用语法大全收集"),t("OutboundLink")],1),e._v("这篇文章")])])}),[],!1,null,null,null);t.default=v.exports}}]);