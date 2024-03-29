# Windows应急响应

## 入侵排查思路

```
检查系统账号安全 -> 检查异常端口、进程 -> 检查启动项、计划任务、服务-> 检查系统相关信息 -> 自动化查杀 -> 日志分析
```

## 常见应急响应事件分类：

```
web入侵：网页挂马、主页篡改、Webshell

系统入侵：病毒木马、勒索软件、远控后门

网络攻击：DDOS攻击、DNS劫持、ARP欺骗
```

## DDOS攻击

```
DOS攻击：拒绝服务式攻击（一个人搞破坏）
DDOS攻击：分布式拒绝服务攻击

hping3 -S -a 1.1.1.1 -s 445 --flood 192.168.10.128 -p 445
-S:syn攻击
-a:伪造的地址
--flood:要攻击的地址
```

## 检查系统账号安全

```
1、查看服务器是否有弱口令，远程管理端口是否对公网开放。
检查方法：据实际情况咨询相关服务器管理员

2、查看服务器是否存在可疑账号、新增账号。

检查方法：打开本地用户和组(lusrmgr.msc)，查看是否有新增/可疑的账号，如有管理员群组的(Administrators)里的新增账户，如有，请立即禁用或删除掉。

3、查看服务器是否存在隐藏账号、克隆账号。
检查方法：
		A：打开注册表，查看管理员对应键值		B：使用D盾_web查杀工具
		
4、结合日志，查看管理员登录时间、用户名是否存在异常。
检查方法：
		A：打开事件查看器(eventvwr.msc)。	 B：导出Windows日志-安全，利用Log Parser进行分析。
```

## 检查异常端口、进程

```
1、检查端口连接情况，是否有远程连接、可疑连接。
检查方法：
a、netstat -ano 查看目前的网络连接，定位可疑的ESTABLISHED
b、根据netstat 定位出的pid，再通过tasklist命令进行进程定位
tasklist | findstr “PID”
2、进程
检查方法：
a、开始--运行--输入msinfo32，依次点击“软件环境→正在运行任务”就
可以查看到进程的详细信息，比如进程路径、进程ID、文件创建日
期、启动时间等。
b、打开D盾_web查杀工具，进程查看，关注没有签名信息的进程。
c、通过微软官方提供的 Process Explorer 等工具进行排查 。
d、查看可疑的进程及其子进程。可以通过观察以下内容：
没有签名验证信息的进程、没有描述信息的进程、进程的属主、进程的路径
是否合法、CPU或内存资源占用长时间过高的进程
```

```
3、小技巧：
a、查看端口对应的PID： netstat -ano | findstr “port”
b、查看进程对应的PID：任务管理器--查看--选择列--PID 或者 tasklist | findstr
“PID”
c、查看进程对应的程序位置：
任务管理器--选择对应进程--右键打开文件位置
运行输入 wmic，cmd界面 输入 process
d、tasklist /svc 进程--PID--服务
e、查看Windows服务所对应的端口：
%systemRoot%/system32/drivers/etc/services（一般%systemRoot%就是C:\Windows）
```

## 检查启动项、计划任务、服务

```
1、检查服务器是否有异常的启动项。
检查方法：
a、登录服务器，单击【开始】>【所有程序】>【启动】，默认情况下此
目录在是一个空目录，确认是否有非业务程序在该目录下。
b、单击开始菜单 >【运行】，输入 msconfig，查看是否存在命名异常的
启动项目，是则取消勾选命名异常的启动项目，并到命令中显示的路
径删除文件。
c、单击【开始】>【运行】，输入 regedit，打开注册表，查看开机启动
项是否正常，特别注意如下三个注册表项：
HKEY_CURRENT_USER\software\micorsoft\windows\currentversion\run
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
once
检查右侧是否有启动异常的项目，如有请删除，并建议安装杀毒软件进行病
毒查杀，清除残留病毒或木马。
d、利用安全软件查看启动项、开机时间管理等。
e、组策略，运行gpedit.msc。
2、检查计划任务
检查方法：
a、单击【开始】>【设置】>【控制面板】>【任务计划】，查看计划
任务属性，便可以发现木马文件的路径。
b、单击【开始】>【运行】；输入 cmd，然后输入at，检查计算机与网
络上的其它计算机之间的会话或计划任务，如有，则确认是否为正
常连接。
3、服务自启动
检查方法：单击【开始】>【运行】，输入services.msc，注意服务状
态和启动类型，检查是否有异常服务。
```

## 检查系统相关信息

```
1、查看系统版本以及补丁信息
检查方法：单击【开始】>【运行】，输入systeminfo，查看系统信息
2、查找可疑目录及文件
检查方法：
a、 查看用户目录，新建账号会在这个目录生成一个用户目录，查看是
否有新建用户目录。
Window 2003 C:\Documents and Settings
Window 2008R2 C:\Users\
b、单击【开始】>【运行】，输入%UserProfile%\Recent，分析最近
打开分析可疑文件。
c、在服务器各个目录，可根据文件夹内文件列表时间进行排序，查找可疑文件
d、回收站、浏览器下载目录、浏览器历史记录
e、修改时间在创建时间之前的为可疑文件
3、得到发现WEBSHELL、远控木马的创建时间，如何找出同一时间范围内
创建的文件？
a、利用 Registry Workshop 注册表编辑器的搜索功能，可以找到最后
写入时间区间的文件。
b、利用计算机自带文件搜索功能，指定修改时间进行搜索。
```

## 工具使用

```
1、病毒分析
PCHunter：http://www.xuetr.com
火绒剑：https://www.huorong.cn
Process Explorer：
https://docs.microsoft.com/zh-cn/sysinternals/downloads/process-explorer

processhacker：https://processhacker.sourceforge.io/downloads.php

autoruns：
https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns

OTL：https://www.bleepingcomputer.com/download/otl/

SysInspector：
http://download.eset.com.cn/download/detail/?product=sysinspector
```

```
2、病毒查杀
卡巴斯基：
http://devbuilds.kaspersky-labs.com/devbuilds/KVRT/latest/full/KVRT.exe
（推荐理由：绿色版、最新病毒库）
大蜘蛛：
http://free.drweb.ru/download+cureit+free
（推荐理由：扫描快、一次下载只能用1周，更新病毒库）
火绒安全软件：https://www.huorong.cn
360杀毒：http://sd.360.cn/download_center.html
```

```
3、病毒动态
CVERC-国家计算机病毒应急处理中心：
http://www.cverc.org.cn
微步在线威胁情报社区：
https://x.threatbook.cn
火绒安全论坛：
http://bbs.huorong.cn/forum-59-1.html
爱毒霸社区：
http://bbs.duba.net
腾讯电脑管家：
http://bbs.guanjia.qq.com/forum-2-1.html
```

```
4、在线病毒扫描网站
http://www.virscan.org
//多引擎在线病毒扫描网 v1.02，当前支持 41 款杀毒引擎
https://habo.qq.com
//腾讯哈勃分析系统
https://virusscan.jotti.org
//Jotti恶意软件扫描系统
http://www.scanvir.com
//针对计算机病毒、手机病毒、可疑文件等进行检测分析
```

```
5、webshell查杀
D盾_Web查杀：
http://www.d99net.net/index.asp
河马webshell查杀：
http://www.shellpub.com
深信服Webshell网站后门检测工具：
http://edr.sangfor.com.cn/backdoor_detection.html
Safe3：
http://www.uusec.com/webshell.zip
```

## 后门查杀

```
文件MD5校验
certutil -hashfile 1.txt md5 //查询文件MD5值
```

## 勒索病毒搜索引擎

```
在勒索病毒搜索引擎输入病毒名、勒索邮箱、被加密后文件的后缀名，或直
接上传被加密文件、勒索提示信息，即可快速查找到病毒详情和解密工具。
【360】 勒索病毒搜索引擎，支持检索超过800种常见勒索病毒，
http://lesuobingdu.360.cn
【腾讯】 勒索病毒搜索引擎，支持检索超过 300 种常见勒索病毒
https://guanjia.qq.com/pr/ls/
【启明】VenusEye勒索病毒搜索引擎，超300种勒索病毒家族
https://lesuo.venuseye.com.cn/
【奇安信】勒索病毒搜索引擎
https://lesuobingdu.qianxin.com/
```

## 勒索软件解密工具集

```
很多安全公司都提供了免费的勒索病毒解密工具下载，收集和整理相关下载
地址，可以帮助我们了解和获取最新的勒索病毒解密工具。
【Github项目】勒索病毒解密工具收集汇总
https://github.com/jiansiting/Decryption-Tools
【卡巴斯基】免费勒索解密器
https://noransom.kaspersky.com/
【火绒】安全工具下载
http://bbs.huorong.cn/forum-55-1.html
【腾讯哈勃】勒索软件专杀工具
https://habo.qq.com/tool/index
```

## 日志分析

```
1、事件日志分析
对于Windows事件日志分析，不同的EVENT ID代表了不同的意义，摘录一
些常见的安全事件的说明：
事件ID 说明
4624 登录成功
4625 登录失败
4634 注销成功
4647 用户启动的注销
4672 使用超级用户(如管理员)进行登录
4720 创建用户
每个成功登录的事件都会标记一个登录类型，不同登录类型代表不同的方式：
登录类型 描述 说明
2 交互式登录（Interactive） 用户在本地进行登录。
3 网络（Network） 最常见的情况就是连接到共享文件夹或共享打印机时。
4 批处理（Batch） 通常表明某计划任务启动。
5 服务（Service） 每种服务都被配置在某个特定的用户账号下运行。
7 解锁（Unlock） 屏保解锁。
8 网络明文（NetworkCleartext） 登录的密码在网络上是通过明文传输的，如FTP。
9 新凭证（NewCredentials） 使用带/Netonly参数的RUNAS命令运行一个程序。
10 远程交互，（RemoteInteractive） 通过终端服务、远程桌面或远程协助访问计算机。
11 缓存交互（CachedInteractive） 以一个域用户登录而又没有域控制器可用。
```

## Log Parser

```
Log Parser（是微软公司出品的日志分析工具，它功能强大，使用简单，可
以分析基于文本的日志文件、XML 文件、CSV（逗号分隔符）文件，以及操
作系统的事件日志、注册表、文件系统、Active Directory。它可以像使用
SQL 语句一样查询分析这些数据，甚至可以把分析结果以各种图表的形式展
现出来。
Log Parser 2.2下载地址：
https://www.microsoft.com/en-us/download/details.aspx?id=24659
Log Parser 使用示例：
https://mlichtenberg.wordpress.com/2011/02/03/log-parser-rocks-more•than-50-
examples/
```

```
1、基本查询结构
Logparser.exe –i:EVT –o:DATAGRID “SELECT * FROM c:\xx.evtx”
-i:指定文件类型
-o:以什么形式呈现，DATAGRID数据表格
2、查询登录成功的事件
a、登录成功的所有事件：
LogParser.exe -i:EVT –o:DATAGRID "SELECT * FROM
c:\Security.evtx where EventID=4624“
b、指定登录时间范围的事件：
LogParser.exe -i:EVT –o:DATAGRID "SELECT * FROM
c:\Security.evtx where TimeGenerated>'2018-06-19 23:32:11' and
TimeGenerated<'2018-06-20 23:34:00' and EventID=4624"
2、查询登录成功的事件
c、提取登录成功的用户名和IP：
LogParser.exe -i:EVT –o:DATAGRID "SELECT
EXTRACT_TOKEN(Message,13,' ') as EventType,TimeGenerated as
LoginTime,EXTRACT_TOKEN(Strings,5,'|') as
Username,EXTRACT_TOKEN(Message,38,' ') as Loginip FROM
c:\Security.evtx where EventID=4624"
3、查询登录失败的事件
a、登录失败的所有事件：
LogParser.exe -i:EVT –o:DATAGRID "SELECT * FROM
c:\Security.evtx where EventID=4625“
b、提取登录失败用户名进行聚合统计：
LogParser.exe -i:EVT "SELECT EXTRACT_TOKEN(Message,13,' ‘)
as EventType,EXTRACT_TOKEN(Message,19,' ') as
user,count(EXTRACT_TOKEN(Message,19,' ')) as
Times,EXTRACT_TOKEN(Message,39,' ') as Loginip FROM
c:\Security.evtx where EventID=4625 GROUP BY Message"
4、系统历史开关机记录：
LogParser.exe -i:EVT –o:DATAGRID "SELECT
TimeGenerated,EventID,Message FROM c:\System.evtx where
EventID=6005 or EventID=6006"
Log Parser Lizard
对于GUI环境的Log Parser Lizard，其特点是比较易于使用，甚至不需要记忆
繁琐的命令，只需要做好设置，写好基本的SQL语句，就可以直观的得到结
果。
下载地址：http://www.lizard-labs.com/log_parser_lizard.aspx
依赖包：Microsoft .NET Framework 4 .5，下载地址：
https://www.microsoft.com/en-us/download/details.aspx?id=42642
Event Log Explorer
Event Log Explorer是一款非常好用的Windows日志分析工具。可用于查看，
监视和分析跟事件记录，包括安全，系统，应用程序和其他微软Windows 的
记录被记载的事件，其强大的过滤功能可以快速的过滤出有价值的信息。
下载地址：https://event-log-explorer.en.softonic.com/
```

## 安全加固

最大的安全=最小的权限+最少的服务（端口） 三权分立：系统管理员（sys）、审计员(audit)、安全员(sec)，三个都没有最高权限

#### 账户

```
默认账户安全
➢ 禁用Guest账户
➢ 禁用或删除其他账户（建议先禁用账户一段时间，待确认没有问题后删除）
➢ 设定不同的用户和用户组。例如，管理员用户、数据库用户、审计用户、来宾用户等。
```

#### 用户登录

```
启用交互式登录：不显示最后的用户名。
```

#### 口令

```
密码复杂度
账户锁定策略
```

#### 口令授权

```
远程关机
在本地安全设置中，从远端系统强制关机权限只分配给Administrators组。

本地关机
在本地安全设置中关闭系统权限只分配给Administrators组。

用户权限指派
在本地安全设置中，取得文件或其它对象的所有权权限只分配给Administrators组。

授权帐户从网络访问
在本地安全设置中，只允许授权帐号从网络访问（包括网络共享等，但不包括终端服务）此计算机。

授权帐户登录
在本地安全设置中，配置指定授权用户允许本地登录此计算机。
```

SYN攻击保护

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters

值名称：SynAttackProtect
建议值： 2
有效值： 0 – 2

值名称：TcpMaxPortsExhausted
建议值： 5
有效值： 0 – 65535

值名称：TcpMaxHalfOpen
建议的数值数据： 500
有效值： 100 – 65535

值名称：TcpMaxHalfOpenRetried
建议的数值数据： 400
有效值： 80 – 65535
```

#### 禁用TCP/IP上的NetBIOS协议

```
禁用TCP/IP上的NetBIOS协议，
可以关闭监听的 UDP 137（netbios-ns）、UDP 138（netbios-dgm）以及 TCP 139（netbiosssn）端口
```

