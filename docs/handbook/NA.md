## 网络安全设备

![image-20230715150243211](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/image-20230715150243211.webp)

常见的通信设备厂商：

* 思科
* 华为
* 华三
* 锐捷

![image-20230715150927081](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202307151509329.webp)

## OSI参考模型

> 七层模型，亦称OSI（Open System Interconnection）。参考模型是国际标准化组织（ISO）制定的一个用于计算机或通信系统间互联的标准体系，一般称为OSI参考模型或七层模型。
> 它是一个七层的、抽象的模型体，不仅包括一系列抽象的术语或概念，也包括具体的协议。

在`osi参考模型`中相同层提供标准，跨层协议提供服务

### 分层

### 7. 应用层

> 网络服务与最终用户的一个接口
> 各种应用程序协议
> 协议有：HTTP(超文本传输协议) FTP（文本传输协议） TFTP（简单文件传输协议） [SMTP](https://so.csdn.net/so/search?q=SMTP&spm=1001.2101.3001.7020)（简单邮件传输协议） SNMP（简单网络管理协议） DNS（域名系统） TELNET（远程终端协议） HTTPS（超文本传输安全协议） POP3（邮局协议版本3 ） DHCP（动态主机配置协议）

应用层是传输层端口映射

---



### 6. 表示层

> 数据的表示、安全、压缩。（在五层模型里面已经合并到了应用层）
> 信息的语法语义以及他们的关联，如加密解密、转换翻译、压缩解压
> 格式有，JPEG、ASCll、EBCDIC、加密格式等 [2]
> 如LPP（轻量级表示协议）

---



### 5. 会话层

> 建立、管理、终止会话。（在五层模型里面已经合并到了应用层）
> 不同机器上的用户之间建立及管理会话
> 对应主机进程，指`本地主机`与`远程主机`正在进行的会话
> 安全协议：`SSL（安全套接字层协议）`、`TLS（安全传输层协议）`

负责数据转化，可以进行数据加解密



---



### 4. 传输层

> 定义传输数据的协议端口号，以及流控和差错校验。
> 接受上一层数据，在必要的时候把数据进行切割，并将这些数据交给网络层，并保证这些数据段有效到达对端
> 协议有：`TCP` `UDP`，数据包一旦离开网卡即进入`网络传输层`

---



### 3. 网络层

> 进行逻辑地址寻址，实现不同网络之间的路径选择。
> 控制子网的运行，如逻辑编址、分组传输、路由选择
> 协议有：ICMP（互联网控制信息协议） IGMP（组管理协议） IP（IPV4 IPV6）（互联网协议）
> 安全协议、路由协议（vrrp虚拟路由冗余）

发送数据包的时候必须要封装上两个地址

* 源地址 => 从哪个IP地址发出?
* 目的地址 => 哪个IP地址收入?

在网络层中比较重要的就是UDP协议、TCP协议

UDP协议：不靠谱，但资源消耗低，适用于实时交流

TCP协议：靠谱，需要建立通道才能通信，适用于非实时性交流

> TCP协议连接时需要进行3次握手
>
> 主机A在给主机B发送信息发送SYN

---



### 2. 数据链路层

> 建立逻辑连接、进行`硬件地址寻址`、`差错校验`等功能。（由底层网络定义协议）
> 将比特组合成字节进而组合成帧，用`MAC地址`访问介质，`错误发现但不能纠正`。
> 物理寻址、同时将原始比特流转变为逻辑传输线路
> 地址解析协议：`ARP`、`PARP`（反向地址转换协议）

* 主要涉及到的是交换机(二层) 				   --不具有路由功能
* 特殊的MAC地址(FF-FF-FF-FF-FF-FF) 		-- 广播地址

> arp攻击
>
> 交换机洪泛攻击

---



### 1. 物理层

> 建立、维护、断开物理连接。（由底层网络定义协议）
> 机械、电子、定时接口通信信道上的原始比特流传输
> `TCP/IP` 层级模型结构，应用层之间的`协议通过逐级调用传输层（Transport layer）`、`网络层（Network Layer）`和`物理数据链路层（Physical Data Link）`而可以实现应用层的应用程序通信互联。

* 直通线用于连接不同设备		--PC连接路由器

* 交叉线用于连接相同设备        --交换机连接路由器

---

![20201028134158932](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202307151950975.webp)

> 应用层需要关心应用程序的逻辑细节，而不是数据在网络中的传输活动。应用层其下三层则处理真正的通信细节。在 Internet 整个发展过程中的所有思想和着重点都以一种称为 RFC（Request For Comments）的文档格式存在。针对每一种特定的 TCP/IP 应用，有相应的 RFC
> 一些典型的 TCP/IP 应用有 FTP、Telnet、SMTP、SNTP、REXEC、TFTP、LPD、[SNMP](https://so.csdn.net/so/search?q=SNMP&spm=1001.2101.3001.7020)、NFS、INETD 等。RFC 使一些基本相同的 TCP/IP 应用程序实现了标准化，从而使得不同厂家开发的应用程序可以互相通信


## TCP/IP协议的分层模型

在展开介绍TCP/IP协议之前，首先介绍一下七层ISO模型。国际标准化组织ISO为了使网络应用更为普及，推出了OSI参考模型，即开放式系统互联（Open
System Interconnect）模型，
一般都叫OSI参考模型。OSI参考模型是ISO组织在1985年发布的网络互连模型，其含义就是为所有公司使用一个统一的规范来控制网络，这样所有公司遵循相同的通信规范，网络就能互联互通了。

### [OSI模型](https://so.csdn.net/so/search?q=OSI模型&spm=1001.2101.3001.7020)的七层框架

OSI模型定义了网络互连的七层框架（物理层、[数据链路层](https://so.csdn.net/so/search?q=数据链路层&spm=1001.2101.3001.7020)、网络层、传输层、会话层、表示层、应用层），每一层实现各自的功能和协议，并完成与相邻层的接口通信。OSI模型各层的通信协议，大致举例如下表所示：

表：OSI模型各层的通信协议举例

| 应用层     | HTTP、SMTP、SNMP、FTP、Telnet、SIP、SSH、NFS、RTSP、XMPP、Whois、ENRP、等等 |
| ---------- | ------------------------------------------------------------ |
| 表示层     | XDR、ASN.1、SMB、AFP、NCP、等等                              |
| 会话层     | ASAP、SSH、RPC、NetBIOS、ASP、Winsock、BSD Sockets、等等     |
| 传输层     | TCP、UDP、TLS、RTP、SCTP、SPX、ATP、IL、等等                 |
| 网络层     | IP、ICMP、IGMP、IPX、BGP、OSPF、RIP、IGRP、EIGRP、ARP、RARP、X.25、等等 |
| 数据链路层 | 以太网、令牌环、HDLC、帧中继、ISDN、ATM、IEEE 802.11、FDDI、PPP、等等 |
| 物理层     | 例如铜缆、网线、光缆、无线电等等                             |

TCP/IP协议是Internet互联网最基本的协议，其在一定程度上参考了七层ISO模型。OSI模型共有七层，从下到上分别是物理层、数据链路层、网络层、运输层、会话层、表示层和应用层。但是这显然是有些复杂的，所以在TCP/IP协议中，七层被简化为了四个层次。TCP/IP模型中的各种协议，依其功能不同，被分别归属到这四层之中，常被视为是简化过后的七层OSI模型。

### TCP/IP协议与七层ISO模型的对应关系

TCP/IP协议与七层ISO模型的对应关系，大致如下图所示：

![img](https://img-blog.csdnimg.cn/img_convert/f0bd5672fc33d364717272b6bbe3c590.png)

---
## TCP/IP协议栈

现代网络中流行的      四层（五层）

### 网络接口层

### 物理层

```
网线：传输距离最大不超过 100M，相对传输速度比较快
串行线：传输距离是几米到几千米，相对传输速度比较慢
```

### 数据链路层

```
广播域：网段中的一组设备，他们侦听在该网段上发送所有的广播
冲突域：在计算机网络中，多个设备共享同一个通信介质时可能发生冲突的范围或区域。处于同一个冲突域内的用户，在同一时间内是不能同时访问外网的 （现代网络不常见）


三种传输模式：
①单工：数据只能在一个方向上传输（只能接受数据或者发送数据）
比如：收音机，广播机
②半双工：数据能够在 2 个方向上传输，但是不能同时进行传输。
比如：对讲机
③全双工：数据能够在 2 个方向上传输，并且可以同时进行传输。
比如：微信电话
```

### 网络层

#### IP地址

```
身份证   唯一性   
唯一标识 lP 网络中的设备，通过 IP 地址表示设备在网络中的位置
路由表：存储路由 理解成是一张地图
路由：发送数据包 理解成是一条路
```

**IPV4**

```
32 位二进制数组成，也叫3点分十进制
172.16.101.163
10101100.00010000.01100101.10100011
10100011
2^7+0+2^5+0+0+0+2^1+2^0
=128+32+2+1=163

为什么需要 IP 地址?
唯一标识 lP 网络中的设备，通过 IP 地址表示设备在网络中的位置

IP地址范围：
00000000.00000000.00000000.00000000~
11111111.11111111.11111111.11111111
0.0.0.0~255.255.255.255 

255.0.0.0      11111111.00000000.00000000.00000000
```

#### IP地址分类：

1.按类别分类A,B,C,D,E

```
A 类：IP 地址的第一个部分范围在 1-127 之间
注: 127 是保留的，用于环回测试，不能分配给网络
例如：127.0.0.1 本地回环测试地址 代表自己

B 类：IP 地址的第一个部分范围在 128-191 之间
注：特殊的 B 类 IP 地址：169 开头的 错误的 IP 地址，DHCP 服务失败得到的

C 类：IP 地址的第一个部分范围在 192-223 之间
例如 192.168.1.1 218.85.157.99(福州电信 DNS 服务器)
子网掩码:默认是 255.255.255.0 或者用/24

D 类：224~239 开头 用于组播
组播：一对多
广播：一对所有
单播：一对一

E 类：240~255   科研使用
```

2.按公有和私有

```
公有地址:可以联网，要向运营商花钱申请的
属于因特网这个大型网络下的。不能有冲突
私有地址:局域网内部使用，不能联网，不用花钱申请的
一般使用在较小型局域网下

A: 10.0.0.0~10.255.255.255
B: 172.16.0.0~172.31.255.255
C: 192.168.0.0~192.168.255.255
```

#### 相关概念与计算

```
网段/网络号/网络位:是 IP 地址所属网络的范围 所属网络的标识

网络地址:该网段的第一个 IP 地址
指代网络的地址，表示的是一个范围主机位全为 0

主机位:是一个具体的 IP 地址 PC 的标识
也可以说明该网段最多有机台主机

192.168.10.1/24       
192.168.10.0/24
192.168.10.255


广播地址:该网段的最后一个 IP 地址
用于向网络中所有地址发送数据的特殊地址主机位全为 1

可用 IP 地址（可用主机地址)︰可以设置在设备上的地址
一个网段除了网络地址和广播地址之外的地址
子网掩码:用来确定网络号/网段/网络位
相同网络号为同一个局域网，不同网络号为不同的局域网

1&&1=1
0&&1=0
0&&0=0
```



#### 网关

```
存在在一个网段下
是一个网络的边界 是网段中一个比较特殊的 IP 地址
一般是路由器、防火墙、三层交换机上的 IP 地址
理解成一个网络的门

192.168.1.0/24   256  
可用IP地址范围：192.168.1.1-192.168.1.254
```

#### VLSM可变长子网掩码

```
网络位找主机位借位
同一主类的网络，用了多个不同的子网掩码

192.168.1.64-192.168.1.127
192.168.1.128-192.168.1.191
192.168.1.192-192.168.1.255

192.168.1.0/26  不等于 192.168.1.0-192.168.1.255
等于192.168.1.0~192.168.1.63
192.168.1.64/26
```



#### IPV6

```
IPv6：由 128 位的二进制数组成，一共有 2^128 个 IPv4 地址 特
点：取之不尽 用之不竭、安全 世界上每粒沙子都有自己的 IP 地址
IPv6 的表示方法：
冒号分十六进制，分成 8 个部分，每个部分 16 位二进制
2001:1234:0000:0000:0abc:abc0:0000:0010
IPv6 的简写规则：
每个部分前导零可以省略
连续一个部分或者两个部分全 0 可以使用::进行代替
但是一个 IPv6 地址，只能有一个::
IPv6 地址对字母大小写，不区分
2001:1234:0000:0000:0abc:abc0:0000:0010
简写：2001:1234::abc:abc0:0:10
```

#### IP 地址的来源/获取方式：

①：静态配置/手工配置 （服务器，关键设备）

优点：安全系数高

缺点：麻烦

动态获取②：动态获取 DHCP

优点：方便

缺点：安全系数低

discover --> offer --> request --> ack



#### ICMP:因特网控制消息协议 只要关注的是通信问题，通过这个协议，可以已知目标是否是可达的

ping -- 测试联通性只能显示是否可以通信，能通信显示 ping 值，不

能通信显示请求超时

一个完整的 ping 通信：

echo-request 

echo-reply



tracert -- 路径跟踪命令 到目标沿途所经过所有设备的 IP 地址信息

tracert 14.215.177.38

tracert www.baidu.com

### 传输层

#### DNS

>  DNS：（普通 DNS 用 UDP 协议，特定情况下用 TCP 协议 不一定）

>  域名解析服务 将域名解析成 IP 地址

>  域名：`www.baidu.com`

>  真正去访问网站的是通过 IP 地址，而不是域名



**DNS 服务器作用：域名解析**

外网的 `DNS` 服务器：企业、运营商、政府...

`8.8.8.8` -- 谷歌 DNS 服务器

114.114.114.114 -- 江苏南京电信 DNS 服务器

本地的 DNS 服务器：Windows：`C:\Windows\System32\drivers\etc` 在这个目录下的`hosts` 文件里面

Linux：`/etc/hosts`

本地 `hosts` 优先解析

优先级：

浏览器缓存 => 本地 DNS => 公网 DNS

```
ipconfig /flushdns  	// 刷新 DNS 缓存
```

### 应用层

TCP/IP 协议栈中的应用层负责承担会话层、表示层和应用层的功能，提供应用程序之间的通信能力。
## 路由器基础命令

### 1.本地登录

思科1841路由器

电源口   开关   console口（管理设备  对设备进行配置）  网线口

console线    电源线

条件：

> 1. 需要一根console线
>
> 2. console线一端接到我们的console口里面   另一端接到电脑（usb）
>
> ​    console口：专门用来管理的接口，并不传输数据  ---  管理口
>
> 3. 登录软件：Scrt   putty    Xshell
>
> 4. 登录协议：serial协议
>
> ​			串口通讯协议  主从双方必须一致才可以进行传输
>
> 5. com口   去设备管理器上查看
>
> 6. 波特率：9600


#### 思科：

```
三种模式
1.用户模式
Router>       //用户模式   权限非常低   一般用来测试设备是否正常
Router>show clock    //查看系统时间
*06:47:14.011 UTC Mon Jul 17 2023
Router>enable      //进入特权模式  我们也称为查看模式  
2.特权模式      可以查看所有配置，但是无法修改配置
Router#show running-config    //查看所有配置
Router#configure terminal      //进入配置模式
3.配置模式
Router(config)#
Router(config)#hostname admin     //修改设备名称
admin(config)#int f0/0     //进入f0/0接口
admin(config-if)#ip address 192.168.1.1 255.255.255.0 //配置IP地址

思科1841的接口默认关闭  我们需要手动打开
shutdown    关闭
no shutdown   打开
no  用来删除

admin(config-if)#no shutdown   //打开接口
admin(config-if)#do show run  在接口模式下或者配置模式下需要加do
admin(config-if)#exit     退回到上一级
admin(config)#
admin(config-if)#end        直接回退到特权模式
admin#
admin#show ip int brief    查看接口的ip配置简单信息
admin#show ip route   //查看路由表
admin#write           //保存配置
```

#### 华为：

```
华为接口默认开启  无需手动开启
只有2中模式
1.用户模式
<Huawei>
<Huawei>system-view    //进入配置模式
Enter system view, return user view with Ctrl+Z.
2.配置（全局）模式
[Huawei]
[Huawei]sysname admin       //修改设备名称
[admin]
[admin]int g0/0/0
[admin-GigabitEthernet0/0/0]ip address 192.168.1.1 255.255.255.0  //配置IP地址
[admin-GigabitEthernet0/0/0]ip address 192.168.1.1 24    //配置IP地址
[admin-GigabitEthernet0/0/0]undo ip address   //删除IP地址
[admin]quit    //退回上一级
<admin>save     //保存配置

[admin]display current-configuration   //查看当前配置
[admin]dis cur     
[admin]dis ip int brief      //查看接口的ip配置简单信息
[admin]dis ip routing-table   //查看路由表
[admin-GigabitEthernet0/0/0]dis this    //查看当前接口下的配置
```

### 3.远程登录（利用vty虚拟链路）

VTY虚拟链路：虚拟终端连接

VTY 0 4     代表着这一个vty占用5个进程   一个用户远程登录进来就会使用掉一个进程

<br />

telnet   23号端口       华为telnet默认开启的

```
配置简单，方便  但是是明文传输   不安全
```

ssh      22号端口          华为ssh默认关闭

```
复杂一点   但是是加密传输    安全
```

条件：

> 1.被登录方需要开启对应的远程登录功能
>
> 2.登录方与被登录方需要能够互相通信



### telnet配置

1.password模式

```
[r1]user-interface vty 0 4
[r1-ui-vty0-4]authentication-mode ?   //身份认证模式
  aaa       AAA authentication   //aaa模式 需要用户名密码
  password  Authentication through the password of a user terminal interface     //只需要密码的password模式
[r1-ui-vty0-4]authentication-mode password   //设置成password
Please configure the login password (maximum length 16):123
[r1-ui-vty0-4]protocol inbound telnet   //允许用telnet服务进行登录
[r1-ui-vty0-4]user privilege level ?
  INTEGER<0-15>  Set a priority, the default value is 0
[r1-ui-vty0-4]user privilege level 15    //设置用户等级为15级
0：参观级
1：监控级
2：配置级别
3-15：管理级别
```

2.aaa加密模式

```
[r2]user-interface vty 0 4
[r2-ui-vty0-4]au	
[r2-ui-vty0-4]authentication-mode aaa     //使用aaa模式
a:认证  a:授权  a:账户
[r2-ui-vty0-4]protocol inbound telnet  //使用telnet登录
[r2]aaa    //进入aaa数据库
[r2-aaa]local-user r2 password cipher 456  //设置用户名密码
[r2-aaa]local-user r2 service-type telnet   //设置用户所对应的服务
[r2-aaa]local-user r2 level 15      //设置用户等级
```

### ssh配置

```
[r3]stelnet server enable
[r3]user-interface vty 0 4
[r3-ui-vty0-4]authentication-mode aaa
[r3-ui-vty0-4]protocol inbound ssh
[r3]aaa
[r3-aaa]local-user r3 password cipher 123456789
[r3-aaa]local-user r3 service-type ssh
[r3-aaa]local-user r3 level 15   //用户等级15
[r3]rsa local-key-pair create    //创建rsa加密算法
The key name will be: Host
% RSA keys defined for Host already exist.
Confirm to replace them? (y/n)[n]:y
The range of public key size is (512 ~ 2048).
NOTES: If the key modulus is greater than 512,
       It will take a few minutes.
Input the bits in the modulus[default = 512]:1024
//输入密钥对长度

[r4]ssh client first-time enable       //登录方首次进行登录时要开启
[r4]stelnet 192.168.2.1
```

### 设备的安全加固

```
[r3]user-interface console 0      //进入管理口设置管理口的身份认证模式
[r3-ui-console0]authentication-mode ?
  aaa       AAA authentication
  password  Authentication through the password of a user terminal interface
[r3-ui-console0]authentication-mode password 
```

华为  思科  基础命令    远程登录   

## 静态路由

### 设备

通信设备：交换机（二层交换机、三层交换机）  路由器       二层交换机不具有路由功能--》二层通信---》不能配IP地址  三层交换机---既具有路由功能  又有功能

三层设备（具有路由功能设备）：路由器、三层交换机、安全设备 ----  网络层   ---   IP  

路由-->三层路由

### 通信的概念

```
通信其实就是数据的发送与转发和接收的过程     ---  寄快递
```

### 路由

```
路由决定了通信过程，数据包如何进行交互
把用户数据从一个子网转发到另一个子网所需要的“介质”
理解成地图中的一条路
```

### 路由表

```
三层设备中都有一张表   叫做路由表
路由表存储着本台设备获取（学习）到的路由信息

路由表理解成地图

路由器就是依靠路由表中的路由进行数据转发

 二层交换机 -->  没有路由表
 
 [r1]dis ip routing-table 
```



### 路由协议

一、何为协议？    =>    定义一个共同语言

二、何为路由协议  =>   路由器用来进行路由学习、信息获取

三、为什么要用路由协议

```
路由器刚开始只能学习到我们直连的路由信息
若想要学习到非直连的路由信息   需要去使用路由协议

路由协议：静态路由协议   动态路由协议(ospf  isis rip、、、、、)        方式
```

### 路由分类：

直连路由：三层设备自身的网段

静态路由：由管理员或者用户手动添加上去到三层设备上的路由信息

动态路由：由三层设备之间进行交换得到的路由信息

问：三层交换机收到一个数据包后，会如何进行处理？

```
查看一下源IP地址、目的IP地址  先看自身路由表   如果路由表中有到对应的IP地址的路由  转发    如果路由表中没有对应路由    丢包
```

通信是双向的！！！！

### 静态路由的配置

**注意直连的两个接口IP必须在同一网段**

1. 下一跳IP方式     常用

```
[r1]ip route-static 23.23.23.0 24 12.12.12.2     //利用下一跳方式

ip route-static x.x.x.x y.y.y.y 下一跳IP/出接口
x.x.x.x：目标网段
y.y.y.y:子网掩码
```

下一跳中 `ip router-static 下一跳网段` `子网掩码` `需要经过的接口IP`

例如：



2. 出接口方式     少见

```
[r3]ip route-static 12.12.12.0 24 g0/0/1

Cisco就能通了   huawei不能通
int g0/0/0    先看接口名称        int GigabitEthernet
```

### arp代理（华为IE内容，原理不做深究）

```
[r2-GigabitEthernet0/0/1]arp-proxy enable     //开启arp代理       这个应该做在出接口的下一个接口
```

### 特殊的静态路由：默认路由/缺省路由

```
[r1]ip route-static 0.0.0.0 0.0.0.0 12.12.12.2         
//当查询完所有路由表项之后还没有对应的路由考研提供时，将所有的未找到路由的流量默认发送给12.12.12.2

//一般是使用在访问公网的环节
```

### 回环口：测试接口/虚拟接口

```
[r1]int LoopBack 0
[r1-LoopBack0]ip add 1.1.1.1 24
```

### 路由表中几个关键字段

```
Destination/Mask ：目标网段以及掩码
Proto：协议 该表该路由表的学习来源
Pre：管理距离/优先级（AD）   衡量一条路劲的可靠性     越小越可靠     越小越优先
Cost：开销/度量值      
Flags：标志
NextHop：下一跳         
Interface:出接口
```

### 路由的选路原则

1.当目标网段/掩码都一致时：

```
先比较优先级（可靠性）在比较开销
```

2.网段跟掩码不一致  ---  掩码最长匹配原则

```
访问192.168.10.1  一个具体的主机地址   32
a.192.168.10.0/24 
b.192.168.0.0/16
c.192.168.10.2/26     网段数量：2^2   IP地址数量：2^6=64       192.168.10.0-192.168.10.63  192.168.10.64-127    √
d.192.168.10.65/26
e.192.168.0.0/26         192.168.0.0-192.168.0.63
```



### 浮动路由

```
主备关系   做备份准备   
1.设置优先级
[r1]ip route-static 23.23.23.3 24 14.14.14.4 preference 40    //设置优先级方式写静态路由

2.设置掩码长度
[r1]ip route-static 23.23.23.0 24 12.12.12.2
[r1]ip route-static 23.23.23.0 25 14.14.14.4
```



### 思科

r1(config)#ip route 23.23.23.0 255.255.255.0 12.12.12.2

r3(config)#ip route 12.12.12.0 255.255.255.0 e0/0   //思科出接口方式不用开启arp代理


## OSPF协议

### 路由的分类

1.直连路由：

2.静态路由：

3.动态路由：有三层设备之间交换学习到路由信息

> 三层设备收到一个数据包应该怎么处理？

### 静态路由缺点：

```
手动添加   繁琐   没办法及时更新路由信息   不方便排错
没办法认识整个拓扑  
更适合末梢网络
```

#### 动态路由协议优点

```
可以自动更新学习路由信息
OSPF\RIP\IS-IS\EIGRP、、、、、
```

### 动态路由协议分类

1.距离矢量路由协议：类似路标

```
RIP、EIGRP
EIGRP：混合型   最好的一个动态路由协议
早期eigrp思科私有协议--》想用这个协议就必须使用全套的思科设备
2015  公有  
```

2.链路状态路由协议：类似地图

```
OSPF\IS-IS
IS-IS：运营商等大型网络
OSPF：目前市面流行的
```

### OSPF

```
开放最短路径优先协议 open shortest path first
是一个公有协议 属于链路状态路由协议  组播方式
公有=开源+免费
世界上三大开源产品：Linux、Android（基于Linux）、ospf
ospf的组播地址：224.0.0.5   224.0.0.6
```

 链路状态？

```
链路：路由器接口

状态：设备与邻居设备的关系
```

### OSPF优点

```
可以保证100%无环路
收敛快
扩展性强
支持认证（保证安全性）
```

#### 单区域OSPF

只有骨干区域(area 0)

数量大的时候对设备的性能要求比较高

#### 多区域OSPF  骨干+非骨干（其他）

必须要有骨干区域 area 0

其他区域  area 1

其他区域必须与骨干区域相连接（若没有与骨干区域相连接就需要创建隧道（虚链路）NP知识）

#### OSPF的五个报文    

LSA：OSPF所有报文的统称

* 1、hello报文

```
用于邻居的发现，建立，维护
hello其中的参数必须匹配才能建立邻居关系
参数：区域ID，hello时间，dead时间，身份验证
 思科 hello时间  10s
      dead时间   40s
    华为  30s  hello
```

* 2、DBD报文：记录链路状态数据库摘要信息  

* 3、LSR报文：链路状态请求报文

* 4、LSU报文：链路状态更新报文

* 5、LSack报文：链路状态确认报文

### OSPF的七种状态机制

1. Down 断开状态

```
本地一旦发出hello报文   进入下一个状态
```

2. Init  初始化状态

```
路由器A接收到来自其他路由器的hello报文并且其中包含了路由器A的RID（router id），就会进入下一个状态
```

3. 2way  双向通信状态   **邻居关系建立的标志**

4. Exstart  预启动状态   预启动数据交换

5. Exchange  准交换状态   用于交换链路状态信息

6. loading   加载状态    加载收到的信息

7. full    转发状态   **邻接关系建立的标志**



### Router ID：RID

```
路由器ID
作用：用来唯一标识某台OSPF的路由器
     RID再网络当中是唯一的，不能冲突
     一般使用本地设备接口IP作为RID
```


### ospf的配置

```
1.
[r1]ospf
[r1-ospf-1]q       //如果没有指定进程号，默认为1
[r1-ospf-110]area 0     //进程号习惯用110，思科的ospf的默认AD值为110，华为是10，进入骨干区域
[r1-ospf-110-area-0.0.0.0]network 12.12.12.0 0.0.0.255     //通告自身拥有的网段

正掩码(匹配网段) 255.255.255.0
    11111111.11111111.11111111.00000000
反掩码（通告网段） 0.0.0.255
    00000000.00000000.00000000.11111111
    
    
2.接口级命令
[r3-Serial2/0/0]ospf enable 110 area 0    //接口下配置OSPF
[r3]ospf 110
[r3-ospf-110]area 0     //华为还需要创建对应的进程与区域

[r2]dis ospf interface     //查看rid，接口优先级
[r2]dis ospf peer  brief //查看邻居表
```



### RID选举规则

1. 手工指定rid

```
[r1]ospf 110 router-id 1.1.1.1    //手工指定进程为110的ospf的rid
<r1>reset ospf process     //需要重启ospf进程
```

2. 看网络中是否有回环口地址，若有则用回环口地址作为rid

3. 选择双UP状态的物理接口上最大的地址作为rid

### OSPF的三张表

1. 邻居表

```
[r1]dis ospf peer brief 
```

2. 拓扑表（链路状态数据库）

```
包含了收到的所有的链路状态通告、信息
[r1]dis ospf lsdb       //查看拓扑表
```

3. 路由表

```
通过链路状态数据库允许SPF算法得到一个最优路径
[r1]dis ip routing-table protocol ospf     //只看ospf的路由表
```

### DR和BDR的选举机制

```
DR：指定路由器          //班长
BDR：备份指定路由器     //副班长
DROTHER：其他路由器    //普通同学

同一个设备可以有不同身份

DR和BDR只存在在广播多路的环境下，串行链路下不存在DR和BDR，p2p  点对点

首先先选举BDR  再把这个BDR晋升成DR   然后再选一个BDR
```

### DR是怎么选举的---非抢占

1.比较我们接口优先级  优先级越大越优先

以太网口  优先级为1

串行链路接口  优先级0    0代表不参与选举

2.优先级一样的话  比较RID，rid大的做DR

[r1-GigabitEthernet0/0/0]ospf dr-priority 100    //更改接口优先级



### 思科配置ospf

```
r1(config)#router ospf 110
r1(config-router)#network 12.12.12.0 0.0.0.255 area 0

接口级命令：
r3(config)#int e0/0
r3(config-if)#ip ospf 110 area 0   //思科不需要再创建对应的进程与区域

r3#show ip route ospf //查看ospf路由表
r3#show ip ospf   //查看rid
r3#show ip ospf  database   //查看拓扑表
r3#show ip ospf neighbor    //查看邻居表
```

## OSPF实验

### 华为：

#### ospf配置命令

```
interface GigabitEthernet0/0/0	\\进入接口
 ip address 192.168.10.1 255.255.255.0 	\\配置ip地址


interface LoopBack0	\\创建环回口
 ip address 1.1.1.1 255.255.255.0 	\\ 配置ip地址
 ospf enable 110 area 0.0.0.0		\\接口级OSPF
 
 ospf 110 	\\创建OSPF进程
 area 0.0.0.0 	\\创建区域
  network 1.1.1.0 0.0.0.255		\\宣告网段
  network 192.168.10.0 0.0.0.255 
  
  display ospf routing		\\查看ospf路由表
  display ospf peer		\\查看ospf邻居表
  display  ospf lsdb 	\\查看ospf拓扑表
```

#### 实用命令

```
undo info-center enable		\\关闭回显信息
display  current-configuration	\\查看全部配置信息
display this	\\查看当前状态下的配置信息
display ip interface brief 	\\查看接口信息
```



### 思科：

#### ospf配置命令

```
interface FastEthernet0/0	\\进入接口
 ip address 192.168.10.1 255.255.255.0	\\配置ip地址
 
 interface Loopback0	\\创建环回口	
 ip address 1.1.1.1 255.255.255.0	\\配置ip地址
 ip ospf 110 area 0	\\接口ospf配置（cpt不支持）
 
 router ospf 110	\\创建ospf进程
 network 192.168.10.0 0.0.0.255 area 0	\\宣告网段并划分区域
 network 1.1.1.0 0.0.0.255 area 0

show ip route ospf 	\\查看ospf路由表
show ip ospf neighbor	\\查看ospf邻居表
show ip ospf database	\\查看ospf拓扑表
```



## 二层交换

ospf、静态路由 --> 网络层 --> 关注  路由器、三层设备

二层交换-->数据链路层-->二层交换机  



tcp/ip五层模型

物理层

数据链路层

网络层

传输层

应用层



### 交换机的前身

```
集线器  hub器  -->  被淘汰
缺点：网络传输效率低下
```

### 交换机

```
8口  24口

设备越大越好   越贵 
```

### 分层网络

```
接入层：接入PC等终端设备的二层交换机
汇聚层/分布层：接入二层交换机的三层交换机等
核心层：接入三层交换机的路由器、、、
```

### 交换机的分类

#### 二层交换机

```
主要出现在接入  用于接入终端设备（PC、打印机、服务器、、、、）   不具备路由功能       不能配IP地址
```

#### 三层交换机

```
主要出现在分布层/汇聚层,具有部分路由功能(可以配置IP地址)，可以作为PC的网关，也可以做DHCP的服务器，可以让我们不同局域网进行通信
```

#### MAC地址：网卡的物理地址    全球唯一    ipconfig /all

#### MAC地址表

```
交换机中都会有MAC地址表，用于存储源MAC地址
```

### 交换机的三大功能

#### 1.MAC地址学习

```
数据帧在进行转发的时候，交换机如果收到一个未知源MAC地址的数据帧，就会学习数据帧的源MAC地址，将他加入到MAC地址表上
```

#### 2.数据帧的过滤与转发

```
当交换机收到一个数据帧时：
查看他的源MAC地址，如果不存在则进行学习
查看他的目的MAC地址 ，如果存在则直接转发 如果不存在则进行泛洪
```

#### 3.防环  STP  生成树协议

环路会产生的问题

```
1.广播风暴：由于交换机的泛洪功能，在环路情况下产生大量的数据包，严重影响设备的性能
2.数据帧的多个副本：由于设备接收到多个同样的数据帧，所以要进行多次回复
3.MAC地址表的不稳定：由于广播风暴导致接口的MAC地址不稳定
```

## VLAN：virtual LAN：虚拟局域网

```
虚拟局域网 -->  只能在交换机上使用  --> 逻辑上划分不同局域网

查看vlan：
思科：Switch#show vlan 
华为：[Huawei]dis vlan 

vlan1：本征vlan
vlan 1002-1005：用于其他用途

创建VLAN：
[Huawei]vlan 10     
[Huawei]vlan batch 40 to 50      //批量创建了11个vlan 40~50
[Huawei]vlan batch 20 30     //批量创建了2个vlan  10 20

Switch(config)#vlan 10     //思科创建vlan
```

### 交换机的两个接口模式

```
1.access模式：接入模式，用于接入PC、服务器等终端设备，access接口属于一个具体的vlan
[Huawei-Ethernet0/0/1]port link-type access      //将该接口设置成access模式
[Huawei-Ethernet0/0/1]port default vlan 10    //将该接口加入到对应的vlan10中

2.trunk模式：主干模式，用于接入交换机或路由，trunk接口不属于任何一个vlan，但他可以承载任何vlan流量通过
[Huawei-Ethernet0/0/1]port link-type  trunk 
[Huawei-Ethernet0/0/1]port trunk allow-pass vlan all   //放行对应流量，华为默认拒绝所有流量，思科默认放行所有流量
```

### 不同局域网之间的相互通信：

#### 单臂路由   vlanif/svi

```
使用条件：多个不同局域网间进行通信。三层设备必须作为PC的网关

路由器作为网关：单臂路由
三层交换机作为网关：vlanif/svi接口(主流)    这个时候交换机要开启对应的路由功能（华为交换机默认开启。思科默认关闭）

物理接口g0/0/0默认属于vlan 1


单臂路由配置：
[Huawei]int g0/0/0.10      //进入子接口
[Huawei-GigabitEthernet0/0/0.10]dot1q termination vid 10      //给该子接口打上vlan10 的标签
[Huawei-GigabitEthernet0/0/0.10]ip address 192.168.10.254 24   //配上网关
[Huawei-GigabitEthernet0/0/0.10]arp broadcast enable  //华为需要开启对应的arp广播（必须要开）


vlanif配置：
[Huawei]vlan batch 10 20    //三层交换机要拥有接入层拥有的vlan，所有要创建对应的vlan
[Huawei]int Vlanif 10    //进入虚拟接口，10代表的就是vlan10   所以vlanif可以不用再打上对应的vlan标签
[Huawei-Vlanif10]ip add 192.168.10.254 24    //配置网关
[Huawei]int g0/0/1 
[Huawei-GigabitEthernet0/0/1]port link-type trunk 
[Huawei-GigabitEthernet0/0/1]port trunk allow-pass vlan all       //汇聚层与接入层连接的接口要配置成trunk没事，并且要放行对应的流量
```

## DHCP：动态主机配置协议

华为dhcp服务默认关闭，需要手动开启，思科默认开启的

```
概念：DHCP服务器可以自动分配IP地址给客户端
```

### 四个报文

`discover`报文

```
主机向该区域内发送广播消息，用来请求IP地址，等待DHCP服务器收到对应的广播消息
```

`offer`报文

```
当我dhcp服务器收到discover包，会向PC发送一个offer包（包含IP地址，网关，掩码，dns服务器）
```

`request`报文

```
当我PC收到offer包之后，向DHCP正式发送一个请求报文，请求具体的IP地址的使用权
```

`acknowledge`报文

```
对request包的一个回应，代表我pc获得了IP地址的使用权限
```

#### 配置：

```
[Huawei]dhcp enable  //开启dhcp服务
[Huawei]ip pool vlan10   //创建地址池
[Huawei-ip-pool-vlan10]network 192.168.10.0 mask 24        //通告网段和掩码
[Huawei-ip-pool-vlan10]gateway-list 192.168.10.254  //通告网关
[Huawei-ip-pool-vlan10]dns-list 218.85.157.99    //配置dns服务器
[Huawei-ip-pool-vlan10]excluded-ip-address 192.168.10.250 192.168.10.253     //配置DHCP动态地址池时，从250-253这些地址排除掉不做分配
[Huawei]int g0/0/0.10
[Huawei-GigabitEthernet0/0/0.10]dhcp  select global   //进入到对应vlan通行的接口里调用全局设置（华为必须的）
```

### 接口安全

#### MAC地址泛洪攻击

```
1. 利用交换MAC地址学习功能
2. 每台交换机的MAC地址表容量有限
3. 交换机一开始记录的是合法MAC地址
4. 黑客不断通过脚本往交换机里发送无效的数据包，数据包中的源MAC地址也是无效的
5. 到达一定程度，前面合法的MAC地址就会溢出，此时MAC地址表只剩下无效的MAC地址
6. 后果：在局域网中，交换机再次进行通信，就要去广播泛洪
```

MAC地址泛洪攻击解决方案：部署交换机接口安全

#### 配置：

```
[Huawei-Ethernet0/0/2]port-security enable 
[Huawei-Ethernet0/0/2]port-security ?
  aging-time      Aging time       //老化时间
  enable          Enable port security    //开启
  mac-address     Mac address    
  max-mac-num     Maximum mac address can learn     //设置最大物理地址数
  protect-action  Action if beyond the limit     //惩罚机制

[Huawei-Ethernet0/0/2]port-security mac-address sticky    //将合法物理地址设置成手动添加模式
[Huawei-Ethernet0/0/2]port-security max-mac-num 1      //最大MAC地址数为1
[Huawei-Ethernet0/0/2]port-security mac-address sticky 5489-98A4-3C95 vlan 10     //手动添加合法MAC地址，并且最后要跟上该接口的vlan
[Huawei-Ethernet0/0/2]port-security protect-action 
  protect   Discard packets           //丢包
  restrict  Discard packets and warning     //丢包并告警
  shutdown  Shutdown     //关闭接口进入假死状态

[Huawei-Ethernet0/0/2]port-security protect-action shutdown      //惩罚机制设置为关闭接口

```

### 思科

单臂路由+DHCP+vlan划分+接口安全

```
Switch(config-if)#switchport mode access 
Switch(config-if)#switchport access vlan 10

思科的二层交换机配置trunk：
Switch(config-if)#switchport mode trunk 
Switch(config-if)#switchport trunk allowed vlan ?
Switch(config-if)#switchport trunk allowed vlan all 

单臂路由：
Router(config)#int f0/0
Router(config-if)#no shutdown     //进入真实的物理地址打开接口

Router(config)#int f0/0.10    //进入子接口
Router(config-subif)#encapsulation dot1Q 10     //打上vlan10的标签
Router(config-subif)#ip add 192.168.10.254 255.255.255.0   //配网关IP

DHCP：
Router(config)#ip dhcp pool vlan10      //创建地址池
Router(dhcp-config)#network 192.168.10.0 255.255.255.0  //通告网段掩码
Router(dhcp-config)#default-router 192.168.10.254  //网关
Router(dhcp-config)#dns-server 114.114.114.114   //dns服务器
Router(config)#ip dhcp excluded-address 33.33.33.1 33.33.33.20      //思科配置DHCP时，从33.1-33.20这些地址不做分配

接口安全：
Switch(config)#int f0/2
Switch(config-if)#switchport port-security  //开启接口安全
Switch(config-if)#switchport port-security ?
  mac-address  Secure mac address
  maximum      Max secure addresses
  violation    Security violation mode
  <cr>
Switch(config-if)#switchport port-security maximum 1
Switch(config-if)#switchport port-security mac-address 0060.7090.79DD 
Switch(config-if)#switchport port-security ?
  mac-address  Secure mac address
  maximum      Max secure addresses
  violation    Security violation mode
  <cr>
Switch(config-if)#switchport port-security violation ?
  protect   Security violation protect mode
  restrict  Security violation restrict mode
  shutdown  Security violation shutdown mode
Switch(config-if)#switchport port-security violation shutdown
```

#### svi：

```
思科三层交换机配置trunk模式
Switch(config-if)#switchport trunk encapsulation dot1q        //比二层多一步封装
Switch(config-if)#switchport mode trunk 

Switch(config)#vlan 10
Switch(config)#int vlan 10      //进入虚拟的svi接口
Switch(config-if)#ip add 192.168.10.254 255.255.255.0   //配网关IP
Switch(config-if)# no shutdown   //打开接口
Switch(config)#ip routing      //思科默认关闭路由功能，我们需要手动打开
```



```
[erceng]port-group group-member e0/0/2 e0/0/3 e0/0/4       //华为将接口加入一个临时接口组

Switch(config)#int range f0/1-5 //思科将接口加入到临时接口组
```

## 二层冗余

### LACP：链路聚合控制协议

作用：实现负载均衡

比如：现在接口带宽100兆，业务高峰流量400兆，现存一台交换机5个百兆接口

```
1.换网卡   成本很高
2.链路聚合  通过逻辑捆绑去增大我的带宽
```

### 基本名词和概念

聚合组：

```
若干个链路捆绑在一起组合成的聚合组
每个聚合组唯一对应一个逻辑接口
逻辑接口又被称为链路聚合接口或者称Eth-trunk口
```

成员接口和成员链路：

```
组成eth-trunk口每个物理接口都被称为成员接口
成员接口对应的链路被称为成员链路
```

活动接口和活动链路：

```
活动接口又称为选中接口，有启用参与数据转发的成员接口
活动接口对应的链路就称为活动链路
```

非活动接口和非活动链路：

```
非活动接口又称为非选中接口，不参与数据转发的成员接口
非活动接口对应的链路就称为非活动链路
```

聚合模式

```
根据是否开启LACP，链路聚合可以分为手工模式和LACP模式
```

其他概念：

```
活动接口上限阈值：最大活动接口数量
活动接口下限阈值：最少有几个活动接口
```

### 手工模式

一般用于老旧设备，低端设备，或者不支持LACP的设备

配置简单，只需要创建一个eth-trunk口，并把接口加入进入就ok

```
[sg1]int Eth-Trunk 0        //创建eth-trunk 0
[sg1-Eth-Trunk0]mode ?
  lacp-static  Static working mode     //LACP协商模式
  manual       Manual working mode     //手工模式

[sg1-Eth-Trunk0]mode manual load-balance      //设置成手工模式
[sg1-Eth-Trunk0]trunkport Ethernet 0/0/1 to 0/0/4     //将e0/0/1~e0/0/4这四个口加入到聚合组中

[sg1]dis eth-trunk 0      //查看eth-trunk0具体信息
[sg1-Eth-Trunk0]port link-type trunk 
[sg1-Eth-Trunk0]port trunk allow-pass vlan all 
```

### LACP协商模式

不会出现环路，但是比较繁琐   最大只能捆绑8个接口

通过一个名叫LACPDU报文进行协商

```
LACPDU报文包含了：
设备优先级，MAC地址，接口优先级，接口号等等
```

设备优先级

```
选老大
系统默认LACP优先级32768    越小越优先
根据优先级去选主设备
当优先级一致时，LACP就会通过比较MAC地址选择主设备   越小越优先
```

接口优先级

```
设备优先级高于接口优先级的
系统默认优先级32768     越小越优先
优先级一致时，通过接口编号来选取活动接口  接口编号   越小越优先
```

#### 配置

```
[lacp 2]int Eth-Trunk 0
[lacp 2-Eth-Trunk0]mode lacp-static 
[sg1-Eth-Trunk0]trunkport Ethernet 0/0/1 to 0/0/4     //将e0/0/1~e0/0/4这四个口加入到聚合组中
[lacp 2-Eth-Trunk0]max active-linknumber 2     //设置最大活动接口数量为2
[lacp1-GigabitEthernet0/0/3]lacp priority 300    //设置接口优先级
[lacp1]lacp priority 500    //设置接口优先级
[lacp1-Eth-Trunk0]port link-type trunk 
[lacp1-Eth-Trunk0]port trunk allow-pass vlan all 
```



### 思科：

1.LACP协商

```
公有   最多可以捆绑16条链路
实际进行传输的最大只有8条  剩下的用来做冗余
	active：主动协商状态
	passive：被动协商状态

Switch(config)#int range f0/1-2
Switch(config-if-range)#channel-group 1 mode active 
Switch(config)#int port-channel 1
Switch(config-if)#switchport trunk encapsulation dot1q 
Switch(config-if)#switchport mode trunk 

Switch(config-if-range)#channel-group 1 mode passive 
Switch# show int port-channel 1
```



2.pagp：

```
思科私有的     跟LACP基本相似    最多只能捆绑8条
```

3.手工指定

```
on模式，强制捆绑
不适用任何协议进行协商 on模式只能跟ON模式进行捆绑
```



### HSRP：虚拟网关冗余协议  --  思科私有的虚拟网关冗余协议

## VRRP：虚拟网关冗余协议

```
1.主设备(活跃状态--master)身份为抢占默认开启的，比较优先级  优先级越大越优先  
2.master每隔1s发一次通告   dead时间  3s
3.虚拟网关的IP地址可以是真实的IP地址

默认优先级100   优先级一致时根据IP地址来选主设备  IP地址越大越优先

vrrp的三种状态：
init状态 -- 初始状态
master状态 -- 活跃状态
backup状态 -- 备份状态
```

华为配置：

```
[r1-GigabitEthernet0/0/1]ip add 192.168.10.252 24
[r1-GigabitEthernet0/0/1]vrrp vrid 1 virtual-ip 192.168.10.254     //设置vrrp，两端的vrid必须一致，virtual-ip后面更上虚拟的网关地址

[r1]dis vrrp   //查看vrrp状态
[r2-GigabitEthernet0/0/1]vrrp vrid 1 priority 200   
//设置vrrp设备优先级(越大越优先)
```

思科配置：

```
r1(config)#int e0/0
r1(config-if)#no shutdown 
r1(config-if)#ip add 192.168.10.252 255.255.255.0
r1(config-if)#vrrp 1 ip 192.168.10.254     //设置vrrp

r1(config-if)#vrrp 1 priority 200    //设置优先级
r1#show vrrp    //查看vrrp
```

## ACL

### acl（access control list）

```
进行流量控制的访问控制列表

ACL是由一系列的permit/deny语句组成，是一个有序的规则表

ACL是一个匹配工具，能够对报文进行匹配和区分
```

### ACL的应用

```
匹配IP流量(数据包，报文)
在Traffic-filter中调用
在防火墙策略部署中调用
在路由策略中调用
在NAT中被调用
```

原始防火墙：路由器+ACL

(先看规则表，再看路由表，然后再看规则表)？？？？？

状态检测防火墙

### ACL的组成

```
ACL是由一系列的permit/deny语句组
每条语句就是该ACL的一条规则，每条语句中的permit/deny就是与这条规则相对应的处理动作

permit：允许
deny：拒绝
```

### ACL的分类与标识

#### 基于ACL规则定义方式的分类

```
分为五类：     按编号范围(简单理解成ACL表的编号)

基本ACL：(常用)2000-2999 针对报文的源IP地址  配置简单，局限性大
高级ACL：(常用)3000-3999 可以使用报文的源ip地址，目的IP地址，IP协议类型，ICMP类型(echo,echo reply),TCP源/目的端口号    高级acl也称为扩展ACL    
二层ACL：4000-4999 基于MAC地址
用户自定义ACL：5000-5999
用户ACL：6000-6999
```

#### 基于ACL标识方法的分类

```
数字型ACL    传统ACL标识  创建ACL时，指定一个唯一的数字标识该ACL
命名型ACL    通过名称来代替编号进行标识ACL
```

#### 创建ACL表

```
[Huawei]acl 2000       //创建基本acl
[Huawei-acl-basic-2000]rule ?
  INTEGER<0-4294967294>  ID of ACL rule
  deny                   Specify matched packet deny    //拒绝
  permit                 Specify matched packet permit    //允许
  [Huawei-acl-basic-2000]rule permit source 1.1.1.0 0.0.0.255
  
#
acl number 2000  
 rule 5 permit source 1.1.1.0 0.0.0.255 
 rule 10 deny source 2.2.2.0 0.0.0.255 
 rule 15 deny source 3.3.3.0 0.0.0.255 
#

acl number 2000   //表号为2000的acl规则表
rule    //规则
5，10，15  //步长  默认步长5(间隔)  
source 1.1.1.0 0.0.0.255     //匹配项(源ip)
0.0.0.255       //通配符（比特流0和1），与反掩码不一样

0严格匹配   1不匹配
1.1.1.0   00000001.00000001.00000001.00000000
0.0.0.255 00000000.00000000.00000000.11111111

假设：
现有一条ACL：拒绝 源 1.1.1.0 0.0.0.255
那么现在有一个数据包要通过，数据包上面的源IP是1.1.1.1    
1.1.1.0   00000001.00000001.00000001.00000000
0.0.0.0   00000000.00000000.00000000.00000000
1.1.1.1   00000001.00000001.00000001.00000001

```

### 通配符与反掩码的区别

```
通配符的0和1可以是交叉的不连续的
00000000.11111111.00000000.11111111  0.255.0.255     √
00000000.00000000.11111111.11111111  0.0.255.255     √
00011100.11000110.00000000.11111111            √

反掩码的0和1不可以是交叉的，必须是连续的，并且0永远在左边，1永远在右边
00000000.00000000.11111111.11111111  0.0.255.255     √
00000000.11111111.00000000.11111111  0.255.0.255     ×
```

### 通配符匹配单双路由(涉及IE)

```
ACL：源IP  1.1.1.0    通配符 0.0.0.254  动作：拒绝

有一个数据包1.1.1.1

1.1.1.0   00000001.00000001.00000001.00000000
0.0.0.254 00000000.00000000.00000000.11111110
1.1.1.1   00000001.00000001.00000001.00000001    匹配不成功  放行
1.1.1.2   00000001.00000001.00000001.00000010    匹配成功    拒绝
1.1.1.3   00000001.00000001.00000001.00000011    匹配不成功  放行
1.1.1.4   00000001.00000001.00000001.00000100    匹配成功    拒绝
......
1.1.1.153
```

### ACL匹配规则

规则一

```
ACL的匹配顺序自上而下(步长越小越优先)
```

规则二

```
一旦满足匹配条件，跳出查询
 rule 5 permit source 1.1.1.0 0.0.0.255 
 rule 10 deny source 2.2.2.0 0.0.0.255 
 rule 15 deny source 3.3.3.0 0.0.0.255 
 rule 20 permit source 2.2.2.0 0.0.0.255 
 
 [Huawei-acl-basic-2000]rule 7 permit source 2.2.2.0 0.0.0.255
```

规则三

```
基本ACL放在离目的近的地方
高级ACL放在离源近的地方
```

规则四

```
最后一条隐藏规则

华为设备中：
rule xx permit 0.0.0.0 255.255.255.255     //放行所有
VTY：rule xx deny 0.0.0.0 255.255.255.255   //在路由策略或者VTY链路里，acl的最后一条规则是拒绝所有

思科设备中：
最后一条规则是拒绝所有
```

规则五(很多人容易遗漏)

```
ACL只过滤经过本地的数据包，不过滤路由器自身产生的数据包
```

### 调用ACL

```
调用acl，在接口上进行调用，这个接口可以是二层接口也可以是三层接口

思科所有设备中的svi接口都支持调用ACL
但是华为中只有少数设备在vlanif上可以调用，大部分设备不支持在vlanif上调用
华为模拟器是不支持在vlanif上调用

调用方向
入栈(inbound)方向   出栈(outbound)方向

一个接口上可以有不只一个ACL
但是在同一个接口里一个方向上不可以有多条acl

路由器收到数据包：
将数据包匹配入栈方向acl
被允许后查看路由表
如果有对应路由则进行转发
转发的是会，再匹配出栈方向acl

[acl-GigabitEthernet0/0/0]traffic-filter inbound acl 2000     //在该接口下的入栈方向调用acl2000
```

### 高级ACL的配置

```
[acl-GigabitEthernet0/0/1]undo traffic-filter outbound 
[acl]undo acl 2000         //删除acl一定要遵循这两条

[acl-acl-adv-3000]rule deny icmp source 12.12.12.1 0.0.0.0 destination 23.23.23.
3 0.0.0.0      //使用高级acl拒绝源ip为12.12.12.1 利用icmp协议发往目的为 23.23.23.3
```

### 单向通信

实现只想让R3pingR1，但是不想R1pingR3

```
两种方法：
1.禁掉r1发给r3的echo
[acl-acl-adv-3000]rule deny icmp icmp-type echo source 12.12.12.1 0.0.0.0 destination 
23.23.23.3 0.0.0.0

2.禁掉r3发给r1的echo-reply
[acl-acl-adv-3001]rule deny icmp icmp-type echo-reply source 23.23.23.3 0.0.0.0 
destination 12.12.12.1 0.0.0.0
```

一定要区分好 源和目的 -->  区分好方向

拒绝多，规则写允许，最后再写一条拒绝所有的

允许多，规则写拒绝，最后再写一条放行所有

### acl实验

#### 华为配置：

##### telnet

```
telnet服务端：
user-interface vty 0 4	\\远程管理口
 authentication-mode aaa	\\aaa认证
 
aaa 	\\进入aaa模块
 local-user r1 password cipher %$%$/N4:Q!Boh546QE(w3YU2`S,,%$%$ 	\\配置账号密码
 
telnet客户端：
telnet ip地址

```

##### ssh

```
ssh服务器：
 stelnet server enable 	\\开启ssh服务
user-interface vty 0 4
 authentication-mode aaa
 protocol inbound ssh
aaa 
 local-user r3 password cipher %$%$Eo|7BIJmJKlA9j%1hD^>`V&n%$%$
 
ssh客户端：
 ssh client first-time enable	\\开启ssh服务
 stelnet ip地址
```



#### acl

```
基本acl：
acl number 2000  
 rule 5 deny source 192.168.10.1 0

高级acl：
acl number 3002  
 rule 5 deny tcp source 202.101.2.2 0 destination 202.101.1.1 0 destination-port
 eq telnet 
acl number 3000  
 rule 5 deny ip source 172.16.10.1 0 destination 202.101.1.1 0 
 rule 10 deny ip source 172.16.20.1 0 destination 202.101.1.1 0 
acl number 3001  
 rule 5 deny icmp source 172.16.30.1 0 destination 192.168.10.1 0 icmp-type echo

[R3-GigabitEthernet0/0/0]traffic-filter inbound acl x	\\进入接口调用acl
```



### 思科配置：

#### telnet

```
telnet服务端：
username r1 secret 5 $1$mERr$BgbEkamnqbb7Gm6DKnlZy0	\\设置本地账号密码
line vty 0 4	\\远程管理口
 login local	\\使用本地账号登录
 transport input telnet	\\使用telnet服务
 
telnet客户端：
 telnet 202.101.1.1
```

#### ssh

```
ssh服务端：
ip domain-name yucedu.com	\\设置域名
enable password huawei123	\\设置密码
crypto key generate		\\配置加密算法
username r3 secret 5 $1$mERr$BgbEkamnqbb7Gm6DKnlZy0
line vty 0 4
 login local
 transport input ssh
 
ssh客户端
ssh -l 用户名 ip地址

```

#### acl

```
基本acl
access-list 1 deny host 192.168.10.1

高级acl
access-list 100 deny tcp host 202.101.2.2 host 202.101.1.1 eq telnet

R2(config-if)#ip access-group 100 in	\\进入接口调用acl
```

## 基础防火墙

交换机 -- 二层设备（也有三层交换机）

路由器 -- 三层设备

防火墙 -- 既具有路由功能 ，同时 也具有交换功能

```
具有安全防护功能的网络设备
出口或者区域边界
```

早期用路由器作为出口设备，现在用防火墙

路由器 -- ACL：访问控制，流量控制 （in out）

安全设备

```
IPS入侵防御，IDS入侵检测，防病毒网关AV，WEB防火墙 WAF，上网行为管理，日志审计，数据库审计，堡垒机，态势感知
```

防火墙的基本功能

```
访问控制，攻击防护（需要购买），AV反病毒功能（也要购买），冗余，路由交换，日志控制（安全设备都有），VPN，NAT
```

防火墙的分类

```
1 PC防火墙（软件）
2 包过滤防火墙
早期防火墙，功能简单，配置复杂（ACL）
进行逐包检测。效率低，性价比低
3 应用网关/代理防火墙
早期防火墙，针对应用层的防火墙
效率非常低，速度慢
4 状态检测防火墙（USG6000V）
状态检测机制：以色列checkopint
线代主流防火墙，速度比较快，配置比较简单，功能可以拓展，是包过滤防火墙的升级版，会对首包进行检测（只看首包）（先查看路由表再查看防火墙安全策略），如果首保通过，那么就会生成一个会话表。后续的数据根据会话表之间通过，不会在经过路由表和策略表
5 下一代防火墙（广义防火墙）
入侵防御IPS（华为，绿盟，海峡），反病毒AV（卡巴斯基，瑞星），文件过滤，内容过滤{上网行为管理，深信服，奇安信}，反垃圾邮件等
```

华为防火墙

```
华为防火墙，在默认情况下，在不同区域间接口默认不通。想让谁和谁通信，需要专门些安全策略放行
默认情况下，防火墙中所有服务默认关闭
防火墙的G0/0/0：管理口（默认属于Trust区域）
```

USG6000V默认账户密码

```
admin
Admin@123
更改后的要求：
更改的密码必须大于八位，且具有大小写字符 
Aa123456
```

undo info-center enable //关闭信息提醒中心

user-interface console 0 //进入console口

idle-timeout 0 //防火墙缺省时间调为无限

华为防火墙接口开放服务

```
[FW1-GigabitEthernet1/0/0]service-manage ping permit //允许ping服务
[FW1-GigabitEthernet1/0/0]service-manage https permit //允许web服务
[FW1-GigabitEthernet1/0/0]service-manage all permit //允许所有服务
```

防火墙安全区域

1 trust区域

```
信任区域 -- 连接内部局域网（办公区，私网） 优先级85
```

2 Untrust区域

```
非信任区域 --连接互联网 优先级 5
```

3 DMZ区域

```
非军事化区域/缓冲区/隔离区 -- 服务器区域（提供给互联网访问的服务的区域）优先级 50
```

4 Local区域

```
防火墙本地区域 -- 所有从防火墙接口发出的流量都属于Local 优先级 100
```

​	在其他防火墙里，默认优先级高的区域可以访问低的区域，华为防火墙没写安全策略就算不能访问

### 区域通信

！ 1 华为防火墙接口必须加入区域

​	2 并且放行需要的服务才可以通信



华为配置安全策略

[FW1]display zone  //查看安全区域配置情况

[FW1]firewall zone trust //进入trust区

 add interface GigabitEthernet0/0/0 //添加接口进入区域

FW1]security-policy //进入安全策略配置

[FW1-policy-security]rule name T_D //创建规则

[FW1-policy-security-rule-T_D]source-zone trust  //指定源区域

[FW1-policy-security-rule-T_D]destination-zone dmz //指定目的区域

[FW1-policy-security-rule-T_D]action permit //指定允许动作

[FW1-policy-security]rule rename T_D t_d //更改规则名称

### 防火墙单臂路由配置

```
[FW1]int g1/0/1.10 //进入子接口
[FW1-GigabitEthernet1/0/1.10]vlan-type dot1q 10 //绑定端口
ip address 192.168.10.254 255.255.255.0 //配置ip地址
service-manage all permit //服务放行
 
 firewall zone trust //进入区域
 add interface GigabitEthernet1/0/1.10 //加入接口
```

## 防火墙双机热备

两台设备一起做热冗余备份

VRRP -- > 虚拟网关冗余技术(防止单点故障)

路由器：用VRRP进行双机热备

传统vrrp技术对防火墙来说是有缺陷的

```
防火墙有三张表
路由表 策略表 会话表（防火墙独有）
display firewall session table //查看会话表
```

路由器：每个报文都会查询路由表后再进行转发，所以可以切换链路不受影响

状态检测防火墙：

```
如果首包允许通过会建立会话连接形成会话表，链路切换更换备份网关的时候就无法找到正确的会话表，回包便无法通性，导致业务流量中断
```

如何把相应的会话表发给新的防火墙,除了VRRP外还需要额外的两个协议

### VGMP(VRRP  GROUP MANAGEMENT PROTOCOL)

--- vrrp组管理协议 ，华为私有协议  //默认启用的一个协议，不需要怎么配置

VGMP , 统一管理所有VRRP备份组，使同一台防火墙所有的VRRP备份组状态一致



### HRP （huawei rdundancy protocol）

华为心跳协议

用来实现防火墙双机热备的设备之间状态数据的同步，以及策略和关键命令的备份



备份通道：心跳线（两台设备直连的接口）

HRP心跳接口

```
两台设备之间用来备份和传输数据的独立接口，数据通过心跳线传递。
心跳接口必须具有独立的IP地址
```

心跳线只要不划到trust或者untrust其他区域都可以，可以单独创建一个区域

```
[fw1]firewall zone name HRP //创建区域
[fw1-zone-HRP]add interface G1/0/1
[fw1-zone-HRP]set priority 90 // 设置优先级为90
```

VRRP

```
[fw1-GigabitEthernet1/0/0.10]vrrp vrid 10 virtual-ip 192.168.10.254 active //设置防火墙vrrp
[fw2-GigabitEthernet1/0/0.10]vrrp vrid 10 virtual-ip 192.168.10.254 standby 
```

配置心跳口地址（两边都要）

配置心跳协议																

```
[fw1]hrp enable //启用hrp协议
Info: NAT IP detect function is disabled.
HRP_S[fw1]hrp interface g1/0/1  remote 23.23.23.3 //指定本地接口和对等体心跳接口地址
两台都要配
```

如果只是配置心跳协议的话，不需要放行服务

```
HRP_M[fw1]display hrp state //查看hrp协议状态
2022-08-06 11:31:12.200 
 Role: active, peer: standby
 Running priority: 45000, peer: 45000
 Backup channel usage: 0.00%
 Stable time: 0 days, 0 hours, 0 minutes
 Last state change information: 2022-08-06 11:30:55 HRP core state changed, old_
state = abnormal(standby), new_state = normal, local_priority = 45000, peer_prio
rity = 45000.

HRP_S[fw2]hrp standby-device //手工指定备份设备


HRP_M[fw1]security-policy (+B) // 配置会被同时应用到备份设备上
```



### NAT -- 网络地址转化

IP地址不够用 （正统的解决方式IPV6 , 更安全）

ip地址 32 二进制

2^32 == 4 亿多个IP

把批量的私有IP转换成公有ip进行上网

在防火墙上实现NAT

### 源NAT（SNAT）

可以进行多对一转换

```
①默认路由 （为了让网关本身能够访问外网）
HRP_M[fw1]ip route-static 0.0.0.0 0.0.0.0 12.12.12.1
②定义安全策略（T_U）
rule name T_U
  source-zone trust
  destination-zone untrust
  action permit
③定义源NAT策略
HRP_M[fw1-policy-nat]rule name SNAT (+B)
HRP_M[fw1-policy-nat-rule-SNAT]source-zone trust  (+B)
HRP_M[fw1-policy-nat-rule-SNAT]destination-zone untrust  (+B)
HRP_M[fw1-policy-nat-rule-SNAT]action source-nat easy-ip //使用源NAT策略，easy-ip模式（放行允许内网IP转换成网关的公网ip进行上网）
HRP_M[fw1-policy-nat]display  firewall session table  //查看会话表
2022-08-06 12:11:45.800 
 Current Total Sessions : 18
 icmp  VPN: public --> public  192.168.10.1:50008[12.12.12.2:2060] --> 1.1.1.1:2
048
 icmp  VPN: public --> public  192.168.10.1:50264[12.12.12.2:2061] --> 1.1.1.1:2
048
```



### 目的NAT （DNAT）

实现一对一转换

用来给外网访问内网服务器使用的nat

再买个公网IP给服务器使用

配置

```
①定义安全策略
HRP_M[fw1-policy-security]rule name U_D (+B)
HRP_M[fw1-policy-security-rule-U_D]source-zone untrust  (+B)
HRP_M[fw1-policy-security-rule-U_D]destination-zone dmz  (+B)
HRP_M[fw1-policy-security-rule-U_D]destination-address 192.168.100.100 32 (+B)
HRP_M[fw1-policy-security-rule-U_D]action permit  (+B)
②定义目的NAT策略
HRP_M[fw1-policy-nat]rule name DNAT (+B)
HRP_M[fw1-policy-nat-rule-DNAT]source-zone untrust  (+B)
HRP_M[fw1-policy-nat-rule-DNAT]destination-address 12.12.12.100 32 (+B) //公网ip一定是32位
HRP_M[fw1-policy-nat-rule-DNAT]action destination-nat static address-to-address 
 address 192.168.100.100 //指定目标NAT要转化的私网服务器地址
 
 HRP_M[fw1-policy-nat]display firewall session table 
2022-08-06 12:26:56.950 
 Current Total Sessions : 5
 icmp  VPN: public --> public  12.12.12.1:53931 --> 12.12.12.100:2048[192.168.10
0.100:2048]

HRP_M[fw1-policy-nat]display firewall session tabe verbose //查看详细会话表
```

### 双机热备 --两台设备一起做热冗余备份

```
VRRP -->虚拟网关冗余技术（防止单点故障）
```

路由器：用VRRP进行双机热备

传统VRRP技术对防火墙来说是有缺陷的

防火墙有三张表

```
路由表 策略表 会话表（防火墙独有的）
display firewall session table //查看会话表
```

路由器：

每个报文都会查询路由表用户在进行转发，所有可以切换链路不受影响



状态检测防火墙：

```
如果首包允许建立会话连接形成会话表，链路切换更换备份网关的时候就无法找到正确的会话表，回包便无法通信，导致业务流量中断
```

如何把相应会话表发给新的防火墙，除了VRRP外还需要额外两个协议

### VGMP（VRRP GROUP MANAGEMENT PROTOCOL）

```
vrrp组管理协议，华为私有协议 //默认启用的一个协议，不需要怎么配置
```

VGMP，统一管理所有VRRP备份组，使得同一台防火墙所有的VRRP备份状态一直

### HRP（HUAWEI RDUNDANCY PROTOCAL）

华为心跳协议

用来实现防火墙双机热备设备之间状态的同步，以及策略和关键命令的备份

备份通道：心跳线（两台设备直连的接口）

HRP心跳接口

```
两台设备之间用来备份和传输数据的独立接口，数据通过心跳线传输。
心跳接口必须具有独立的IP地址
```



心跳线只要不划分到trust区和untrust区都可以，可以单独创建一个区域

### 防火墙区域的创建

```
firewall zone name hrp //新建防火墙区域
			      自选名称
set priority 90 //设置优先级大小

```



### HRP配置

1.必须要有自己的ip地址（不一定需要双方能通信）

2.加入到相应的防火墙区域

注意：两边配置要相同 

```
[FW1]hrp enable //开启hrp服务
Info: NAT IP detect function is disabled
hrp interface G1/0/1 remote 12.12.12.2
              源接口         目标地址
```

VRRP

```
vlan-type dot1q 20 //绑定端口号


vrrp vrid 20 virtual-ip 192.168.20.254 	 //绑定VRRP端口号 和虚拟网关	
active 主要
standby//次要
```



### NAT --网络地址转化

IP地址不够用（正统的解决方式IPV6，更安全）

ip地址 32位 二进制

2*32 == 4亿多个ip

把批量的私有ip转化成共有ip上网

### 在防火墙上实现NAT

源NAT（SNAT）可以进行多对一转化

```
nat-policy //进入nat规则配置
 rule name SNAT //命名
  source-zone trust
  destination-zone untrust
  action source-nat easy-ip //使用easyip技术
```

允许内网IP转换成网关的公网ip进行上网

目的NAT（DNAT）

```
 nat-policy 
 rule name DNAT
  source-zone untrust
  destination-address 23.23.23.100 mask 255.255.255.255 //转换的目的地址
  action destination-nat static address-to-address address 192.168.100.100 目的地址转换地址
```



## IPSecVPN

VPN --- virtual private network   虚拟专有网络(虚拟专网)

搭专线   需要跟运营商申请   价格十分昂贵



### 为什么会出现IPSecVPN

在网络中绝大多数的传输都为明文传输  存在潜在危险  使用IPSecVPN可以实现安全的传输



### IPSecVPN如何做到安全传输 防止网络窃听

```
涉及到信息安全的三要素：
机密性   加密算法
完整性   散列哈希
可靠性   加密+完整性性检查+身份认证
```

### 机密性：加密算法

对称加密算法：算法效率高  安全性低

算法：DES,AES

非对称加密算法：算法效率低   安全性高

特点：

公钥加密的数据只能用私钥进行解密

私钥加密的数据只能用公钥进行解密

算法：RSA，DH(diffie-hellman)



### 完整性--hash  散列哈希

```
md5  / sha 1 256 512

每一份数据（文件）都会有自己的HASH值
并且写完数据后会把当前文件的hash嵌入到整个数据的末端
如果数据发生变化，hash也会跟着一起变化
```



### IPSec是个什么东西？

```
IPSec是一种框架而不是一个具体的协议

包含了三种协议：
ESP协议
提供了加密认证
AH协议
提供了额外的完整性保护
IKE协议   也不是一种协议
  		也是三种协议组成的一个框架
  		isakmp(核心协议)  oakley   skeme
  		用来保护密钥
  		IKE也就是这三种协议统称
```



### IPSec基本概念

```
IPSec对等体 ：建立隧道时的两端
IPSec隧道：数据传输的通道

在建立隧道的过程中通过IKE协议进行密钥协商与管理

协商完之后得到一个SA(安全联盟)

SA安全联盟会涉及一个密钥和一些数据
             需要把这些东西进行一个封装

封装过程中涉及到AH协议，ESP协议

封装涉及到两种封装模式
```

### 两种封装模式

#### 1.传输模式

```
全网中拥有通信点的路由时，使用传输模式   

验证数据真实性，完整性和抗重放

AH封装
在报文的第三层网络层和第四层传输层之间插入一个AH头
AH用IP协议号标识的话用51
会对网络层一直到应用层进行一个验证

ESP封装
在报文的第三层网络层和第四层传输层之间插入一个ESP头
ESP用IP协议号标识的话用50
会对传输层一直到应用层进行一个验证，加密

AH-ESP封装   
会对网络层一直到应用层进行一个验证，会对传输层一直到应用层进行一个加密
```

#### 2.隧道模式

```
全网中没有通信点的路由时，使用隧道模式   

验证数据真实性，完整性和抗重放  加密所有私有IP 包括IP报头

隧道模式通常使用ESP封装

在隧道模式下，ESP被插到原始IP头之前，并且生成一个寻的报文头放到ESP之前

ESP对网络层一直到应用层进行验证和加密
```

#### 两种封装模式的对比

```
安全性：隧道模式隐藏原IP头信息，安全性更好   --选择隧道模式
性能：隧道模式多了一个额外的报头，隧道模式比传输模式占用更多带宽  -- 选择传输模式
```

AH协议现在一般很少使用     一个原因：不加密数据   第二个原因：不支持NAT



### SA安全联盟

```
安全联盟是通信的对等体之间对某些要素的约定
例如：对等体之间利用何种安全协议  需要保护的数据流特征  对等体之间传输的封装模式 协议采用的加密算法  验证算法  密钥  SA的生存周期等等

IPSec安全联盟  IPSec SA   

建立安全联盟的方式：手工方式   ike自动协商方式

SA由三元组来唯一标识：
包括安全参数索引   目的IP地址  安全协议号(AH 51  ESP  50)

IKE身份认证，有三种方式： 
1.预共享密钥认证
2.数字证书
3.数字信封（用的少）

VPN隧道技术：封装IP + 加密认证
```



华为防火墙IPSecVPN基本配置

```
1.公网接口可达  --  写默认路由
[fw1]ip route-static 0.0.0.0 0.0.0.0 13.13.13.3
2.放行流量  -- 部署防火墙安全策略
t_u   u_t    l_u  u_l
#
security-policy
 rule name t_u
  source-zone trust
  destination-zone untrust
  action permit
 rule name u_t
  source-zone untrust
  destination-zone trust
  action permit
 rule name l_u
  source-zone local
  destination-zone untrust
  action permit
 rule name u_l
  source-zone untrust
  destination-zone local
  action permit
#
3.定义高级ACL匹配VPN流量  --  告诉防火墙何种流量要走vpn传输
[fw1-acl-adv-3000]rule permit ip source 192.168.10.0 0.0.0.255 destination 192.1
68.20.0 0.0.0.255

4.创建安全提议
[fw1]ipsec proposal a       //创建名为a的安全提议  名字可以自取
[fw1-ipsec-proposal-a]encapsulation-mode tunnel   //设置封装模式隧道模式

5.创建IKE提议以及IKE对等体
[fw1]ike proposal 1       //创建号为1的ike提议
[fw1]ike peer b        //创建名为b的ike对等体  名字自取
[fw1-ike-peer-b]ike-proposal 1    //调用ike提议
[fw1-ike-peer-b]pre-shared-key 123   //设置预共享密钥
[fw1-ike-peer-b]remote-address 23.23.23.2      //设置对等体地址

6.创建IPSec策略
[fw1]ipsec policy c 1 isakmp        //创建名为c的IPSec策略 固定搭配
[fw1-ipsec-policy-isakmp-c-1]proposal a   //调用安全提议a
[fw1-ipsec-policy-isakmp-c-1]ike-peer b    //调用ike对等体b
[fw1-ipsec-policy-isakmp-c-1]security acl 3000  //调用高级acl

7.进入公网接口调用IPSec
[fw1-GigabitEthernet1/0/0]ipsec policy c


[fw2]dis ipsec sa       //查看ipsec安全联盟  验证我隧道是否建立成功
[fw1]dis ike sa         //查看ike联盟  验证我隧道是否建立成功
```
