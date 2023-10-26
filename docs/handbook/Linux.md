##  Linux基础命令

```
[当前用户@主机名 当前所在的位置]权限
~：用户家目录
普通用户的家目录：/home目录下
root的家目录：/root
/:根目录，所有的文件和目录都是置于根目录下，也就是从根目录出发
$:普通权限
#：管理员权限
su root //切换到管理员用户
hostname //查看主机名
修改主机名：
①hostname 用户名 //临时修改主机名
②永久修改主机名：/etc/hostname
reboot //重启
poweroff //关机
```

##  vim文件编辑器

```
i 进入插入模式
esc 退出当前的模式
：q 退出，不保存
：q! 强制退出，不保存
：wq 保存退出
```

```
插入模式：
a 从下一个字符插入
i 从当前光标处进行插入
o 换行插入
```

```
命令模式：
yy复制当前行
3yy复制3行
p粘贴到当前行下
dd删除当前行
gg回到第一行
G到最后一行
50G快速跳转到第50行
u:撤销上一步的操作
```

```
底行模式：
▪ :wq
▪ :q!不保存并退出
▪ :set nu显示行号
▪ :% s/old/new/g每一行中的old替换成new
▪ :50,56d删除50-56行的数据
/DNS:快速定位
/^DNS:快速定位以DNS开头的内容
/DNS$:快速定位以DNS结尾的内容
```

## 查看系统信息

```
fdisk -l //查看硬盘大小
Linux LVM：逻辑卷
```

```
[root@Fricky ~]# cat /proc/meminfo
--- 查看内存大小
MemTotal：总内存
MemFree：空闲内存
Buffers:给文件的缓冲大小
Cached:缓存使用的大小
VmallocTotal：虚拟内存的大小
VmallocUsed：已被使用的虚拟内存的大小
```


```
[root@Fricky /]# cat /proc/cpuinfo
--- 查看CPU信息
processor：系统中逻辑处理器核心的编号
vendor_id ：CPU的制造商
cpu family ：cpu产品系列的代号
model：属于该系列的哪一代
```

## 基础命令

```
ctrl+l = clear		//清楚当前界面

ctrl+shift+c/v 复制/粘贴

ctrl+shift++ 放大字体

ctrl+- 缩小字体

Tab 命令和存在文件名称补齐作用（双击列出TAB所以可选项）

Ctrl+c 终止快捷键
```

网卡配置

```
位置：/etc/sysconfig/network-scripts/
ifconfig //查看IP信息
ip a //查看IP信息
route -n //查看路由表
ip route //查看路由信息
内容：
TYPE=Ethernet
BOOTPROTO=static
IPADDR=192.168.10.100 //ip
NETMASK=255.255.255.0 //掩码
GATEWAY=192.168.10.2 //网关
DNS1=218.85.157.99 //主DNS
DNS2=114.114.114.114 //副DNS
DEFROUTE=yes
NAME=ens33
DEVICE=ens33
ONBOOT=yes //是否随之网络服务启动而自启
systemctl restart network //重启网络服务
```

## SSH

```
systemctl start sshd //开启ssh服务
systemctl status sshd //查看ssh服务的状态
systemctl stop sshd //停止ssh服务
systemctl enable sshd //开机自启ssh服务
systemctl disable sshd //永久关闭ssh服务
```

安装SSH服务

```
yum install openssh-server --- 下载ssh服务
vi /etc/ssh/sshd_config --- 使用vi编辑SSH的配置文件
对ssh配置文件进行修改
```

## 树状结构

```
/ ---操作系统的起始路径根路径
/bin ---普通用户和管理员都可以执行的命令字
/sbin ---只有管理员才能执行的命令关机重启
/boot ---引导主引导目录独立的分区启动菜单内核
/dev --- device设备设备文件存放目录
/etc ---配置文件存放目录
/home ---普通用户的家目录
/root --- 管理员的家目录
/media --- 光驱的挂载目录
/mnt ----临时设备挂载目录
/proc --- 里面的数据都在内存中，进程的所在目录
/tmp ---临时文件存放目录
/usr --- 软件的安装目录
/var --- 常变文件存放目录日志文件邮件文件
/var/log --日志文件主要存放的路径
```

## 查询语句

```
ls //查看当前目录下的内容
cat //查看文件的内容
```

## 创建文件、目录

```
touch 文件名 //创建空文件
echo 内容 > 文件名 //创建有内容的文件
vim文本编辑器创建有内容的文件
mkdir 目录名 //创建目录
mkdir -p 1/2/3 //创建多级目录
```

## 删除文件、目录

```
rm 文件名 //删除文件
rm -f 文件名 //强制删除文件
rm -r 目录名 //删除目录
rm -rf 目录名 //强制删除目录
```

## 重命名、复制

```
mv 旧文件名 新文件名 //移动并重命名文件
cp 1.txt 2.txt //复制1.txt并重命名为2.txt
```

## 命令字

```
内部命令：安装后就有的命令
外部命令：程序/安装包，下载之后会给我们提供更多的命令字
用type来判断是否是内部命令：type 命令
help:只能查看内部的命令字
man:外部命令和内部命令都能查看
```

## 压缩、解压缩

```
dd if=/dev/zero of=/test/KB bs=1M count=100 //创建一个大小为100M的文件
dd：复制文件并对原文件的内容进行转换和格式化处理
if:input file,输入文件
of:output file,输出文件
/dev/zero：Linux特殊文件，空字节填充设备
bs:文件大小
count:次数
ll -h //查看文件的具体大小
```

```
dd if=/dev/zero of=/test/KB bs=1M count=100 //创建一个大小为100M的文件
dd：复制文件并对原文件的内容进行转换和格式化处理
if:input file,输入文件
of:output file,输出文件
/dev/zero：Linux特殊文件，空字节填充设备
bs:文件大小
count:次数
ll -h //查看文件的具体大小。
```

```
du -sh 目录名 //查看目录下的文件总大小
tar -cf 目标文件 源文件（可以多个） //打包文件
tar -xf 文件名 //解包文件
tar -zcf 目标文件 源文件（可以多个） //打包并压缩文件

选项参数含义：
-c 打包
-x 解包
-C +文件存放路径
-z 使用gzip
-j 使用bzip2
```

## CentOS安装VIM编辑器（其他版本）

```
vim编辑器需要安装三个包
vim-enhanced-7.0.109-7.el5
vim-minimal-7.0.109-7.el5
vim-common-7.0.109-7.el5
1.查看一下你本机已经存在的包，确认一下你的VIM是否已经安装，输入：
rpm –qa | grep vim
如果vim已经安装，则会显示上面三个包的名称
2.如果缺少了其中某个，例如：少了vim-enhanced这个包，执行下载该包：
yum –y install vim-enhanced
3.如果上面三个包一个都没有显示（或者只显示一个），则直接输入命令：
yum –y install vim*
```

## yum

```
yum 下载安装服务的命令
yum install 服务名 //安装服务
yum remove 服务名 //删除服务
yum reinstall 服务名 //重装服务
-y （当安装过程提示选择全部为“yes”）
-q （不显示安装的过程）等等
```

```
wget（wget是一个从网络上自动下载文件的自由工具）
```

## 换源

```
网络源：存在于网上的软件库，从网上下载（wget），前提：联网
本地源：本地的软件库，不需要联网，软件包少（快速，防断网，安全）
```

搭建本地源

```
cd /etc/yum.repos.d/ //源存放的路径
①df -h //查看镜像文件的路径
②cd /etc/yum.repos.d/
新建文件
内容：
[local-yum]
name=local-yum
baseurl=file:///run/media/wpl/CentOS\ 7\ x86_64
gpgcheck=0
③yum clean all //清楚缓存
yum makecache //挂载新的源
yum repolist //查看源仓库
```

网络源

```
root@Fricky ~]# mv /etc/yum.repos.d/CentOS-Base.repo
/etc/yum.repos.d/CentOS•Base.repo.backup
--- 备份原有的yum源
[root@Fricky ~]# wget http://mirrors.163.com/.help/CentOS7-Base-163.repo
--- 使用wget下载网易源
[root@Fricky ~]# mv CentOS7-Base-163.repo /etc/yum.repos.d/ CentOS-Base.repo
--- 移动和重命名
[root@Fricky ~]# yum repolist
--- 显示仓库
```

## 设置自动登录root

```
vim /etc/gdm/custom.conf
[daemon]
AutomaticLoginEnable=True //开启自动登录功能
AutomaticLogin=root //选择自动登录的用户

重启
```

## Linux用户和组

### 用户分类

#### 超级用户

```
root,UID=0
管理员用户
只要用户的UID为0，就拥有管理员权限
```

#### 普通用户

```
UID：1000-60000
可以登录系统，权限比管理员低，只能对自己目录下的文件进行访问和修改
```

#### 伪(系统)用户

```
UID:1-999
不能登录系统，与系统和程序服务相关，主要方便系统管理，满足相应的系统进程对文件属主的要求，不是真
正的使用者
```

## `/etc/passwd` 用户信息文件

所有用户可读（不安全）

```
root:x:0:0:root:/root:/bin/bash
1 :2:3:4:5 :6 :7
1 用户名
2 密码位（已废弃），保存在/etc/shadow
3 UID，用户标识号（0：超级用户）
4 GID，缺省组标识号（先有组才有用户）
5 用户信息记录字段（备注）
6 家目录（宿主目录），用户登录系统后的缺省目录
7 用户使用的shell，默认是/bin/bash(/sbin/nologin:伪用户)
```

`/etc/shadow` 密码信息文件

默认只有root用户拥有读权限，其他用户没有任何权限

```
root:$6$bQdOIwHSq1: :0:99999:7: : :
1 :2 :3:4:5 :6:7:8:9
1 用户名
2 加密密码（$6：sha加密；$1：MD5加密），！！或*：没有密码，不能登录（禁用）
3 最后一次修改时间，从1970.1.1开始计算（以天为单位）
4 最小修改密码时间间隔
5 密码有效期（默认99999，相当于永久生效）
6 密码需要变更前的警告天数（默认7）
7 密码过期后的宽限天数（-1:密码永不失效）
8 账号失效时间
9 保留位：等待新功能的加入
```

## 添加删除用户

```
useradd [选项] [用户名] //添加用户（默认无密码）
选项：
-u（UID）：手工指定用户ID
-d [家目录]：手工指定用户的家目录
-M：不创建家目录
-c [用户说明]：手工指定的用户说明（用户备注信息）
-g [组名]：手工指定用户的初始组
-G [组名]：指定用户的附属组
-s（shell）：手工指定用户的登录shell。默认是/bin/bash
userdel 用户名 //删除用户（删不干净）
userdel -r 用户名 //删除用户的时候删除家目录
```

## 修改密码

```
passwd
passwd [选项] [用户名]
选项：
-S：查询用户密码的密码状态，仅root用户可用
-l ：暂时锁定用户，仅root用户可用
-u：解锁用户，仅root用户可用
```

## 修改用户信息

```
usermod
usermod [选项] [用户名]
选项：
-u（UID）修改用户的UID号
-c（用户说明）修改用户的说明信息
-G（组名）修改用户的附属组
-L（Lock）临时锁定用户
-U（Unlock）解锁用户锁定
```

## 修改用户密码状态

```
chage
chage [选项] [用户名]
选项：
-d (日期) 修改密码最后一次更改日期(shadow[3]字段)
-m(天数) 两次密码修改间隔(shadow[4]字段)
-M(天数) 密码有效期(shadow[5]字段)
-W(天数) 密码过期前的警告天数(shadow[6]字段)
-I (天数) 密码过期后宽限天数(shadow[7]字段)
-E (日期) 账号失效时间(shadow[8]字段)
```

## 查看用户信息

```
id
id [用户名]
```

## 切换用户

```
su
su [选项] [用户名]
选项：
- 只使用 ‘ - ’ 代表连用户的环境变量一起切换
-c 仅执行一次命令，而不切换用户身份（sudo）
例子：su -c 'cat /etc/shadow'
```

sudo

```
在普通用户权限下执行root权限，不切换用户身份
前提：加入管理员组
vim /etc/sudoers
## Allow root to run any commands anywhere
root ALL=(ALL) ALL
wpl ALL=(ALL) ALL
```

## Linux用户组

```
主组：用户创建时默认生成的组，每个用户有且只有一个主组，记录在/etc/passwd文件中的组就是用户的主
组
附属组：后来添加的组，用户可以是零个或者多个附属组的成员
一个用户可以不添加附属组，但是必须要有主组，用户主组是不能删除
附属组是可以删除
```

## `/etc/group` 组信息文件

```
wpl:x:1000:wpl
1 :2:3 :4
1 组名
2 组密码位（已废弃），保存在/etc/gshadow
3 GID,组标识号
4 组内用户
wheel组 管理员组

```

### 命令

```
groupadd 组名 //添加组
groupdel 组名 //删除组
usermod 用户名 -G GID/组名 //将用户添加到附属组
gpasswd -a 用户名 组名 //将用户添加到附属组
gpasswd -d 用户名 组名 //将用户从附属组中删除
```

## DHCP搭建

准备工作

```
①关闭虚拟机本身的DHCP功能
②搭建本地源
③关闭防火墙
systemctl stop firewalld.service //关闭防火墙
systemctl disable firewalld.service //永久关闭防火墙
④关闭selinux（安全策略）
setenforce 0 //临时关闭
永久关闭：
cd /etc/selinux/config
内容：
SELINUX=disabled
```

> DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）是一个局域网的网络协议，UDP 协议，67号端口，主要用于动态管理分配IP地址。

#### 服务端

```
yum -y install dhcp //安装下载DHCP服务
rpm -q dhcp //查看DHCP是否安装成功
rpm -ql dhcp //查看DHCP自带的文件列表
重要文件：
/etc/dhcp/dhcpd.conf //主配置文件
/usr/share/man/man5/dhcpd.conf.5.gz //man5文档（产品说明书）
备份
cp -p dhcpd.conf dhcpd.conf.bak
-p:复制文件的同时复制文件的权限
筛选：
grep -v "^#" /usr/share/doc/dhcp*/dhcpd.conf.example |grep -v "^$" > dhcpd.conf
-v:反选
^#:注释
^$：空行
配置文件dhcpd.conf
配置内容：
option domain-name "wpl.com"; //域名
option domain-name-servers 218.85.157.99; //dns
default-lease-time 3600; //默认租约时间
max-lease-time 7200; //最大租约时间
log-facility local7; //local7日志存放位置（默认在/var/log/boot.log）
subnet 192.168.140.0 netmask 255.255.255.0 { //分配网段
range dynamic-bootp 192.168.140.40 192.168.140.60;
//范围
option broadcast-address 192.168.140.255; //广播地址
option routers 192.168.140.254; //网关
}
配置静态IP（配置成同网段，网关）
开启服务：
systemctl start dhcpd
```

#### 客户端

```
将网卡配置文件的static改为dhcp
①将客户端获取IP方式改为DHCP自动获取
BOOTPROTO=dhcp
②重启客户端网络，自动获取IP
systemctl restart network
③查看获取的IP地址是否为指定IP地址的范围
```

#### 分析错误日志信息

```
journalctl -xe
```

## FTP服务搭建

```
主要用于互联网中文件的双向传输（上传/下载）、文件共享
跨平台 Linux、Windows
FTP是C/S架构，拥有一个客户端和服务端，使用TCP协议作为底层传输协
议，提供可靠的数据传输
FTP的默认端口 21号（命令端口） 20号（数据端口）
FTP有主动模式、被动模式两种工作模式，默认被动模式下
FTP软件包vsftpd
```

#### 服务端

```
yum -y install vsftpd //安装ftp服务
rpm -q vsftpd
rpm -ql vsftpd

文件列表：
/etc/pam.d/vsftpd 安全认证
/etc/vsftpd 配置文件主目录
/etc/vsftpd/ftpusers 黑名单用户列表
/etc/vsftpd/user_list 用户列表（黑白名单）
/etc/vsftpd/vsftpd.conf 主配置文件
/usr/sbin/vsftpd 二进制命令
/var/ftp 匿名用户的默认数据的根目录
/var/ftp/pub 匿名用户的默认数据目录的扩展目录
备份、筛选
```

```
配置文件的内容:
anonymous_enable=YES 支持匿名用户访问
local_enable=YES 支持非匿名用户访问
write_enable=YES 支持写入
local_umask=022 反掩码
dirmessage_enable=YES 启用消息功能
xferlog_enable=YES 启用xferlog日志
connect_from_port_20=YES 支持主动模式（默认为被动模式）
xferlog_std_format=YES xferlog日志格式
listen=NO FTP服务独立模式下的监听
listen_ipv6=YES FTP服务独立模式下的监听（IPv6）
pam_service_name=vsftpd 指定认证文件
userlist_enable=YES 启用用户列表
tcp_wrappers=YES 支持tcp_wrappers功能

systemctl start vsftpd //开启ftp服务
```

#### 客户端

```
下载连接工具lftp
lftp ip地址 //匿名用户连接
lftp 用户名@服务器IP //非匿名用户连接（需要配置）
```

#### 下载功能

```
lftp 192.168.140.100:~> ls
drwxr-xr-x 2 0 0 6 Oct 13 2020 pub
-rw-r--r-- 1 0 0 7 Sep 17 08:02 server.txt
lftp 192.168.140.100:/> get server.txt //下载文件
7 bytes transferred
```

#### 上传功能

```
服务端
chmod 777 /var/ftp/pub
vim /etc/vsftpd/vsftpd.conf
添加内容：
anon_upload_enable=YES 支持匿名用上传（需激活write_enable）
anon_mkdir_write_enable=YES 支持匿名用户创建目录（需激活write_enable）
anon_other_write_enable=YES 支持匿名用户删除、重命名等写操作
重启服务
客户端：
lftp 192.168.140.100:/> cd pub
cd ok, cwd=/pub
lftp 192.168.140.100:/pub> put client.txt //上传文件
7 bytes transferred
```

#### 报错语句

```
lftp 192.168.140.100:~> ls
ls: Login failed: 500 OOPS: vsftpd: refusing to run with writable root inside
chroot()
//拒绝ftp根目录（/var/ftp）可写
vsftpd增加了安全检查，如果用户被限制在其主目录下，那么主目录就不能有写的权限
lftp 192.168.140.100:/pub> put client.txt
put: Access failed: 550 Permission denied. (client.txt)
//匿名用户默认没有上传功能
```

## DNS服务器搭建

> DNS--域名解析 解析有两种： 
>
> 正向解析：域名——>IP A记录 
>
> 反向解析：IP——>域名 PTR记录

#### 服务端

```
yum -y install bind
rpm -q bind
rpm -ql bind
文件列表：
/etc/named 配置文件的主目录
/etc/named.conf 主配置文件
/etc/named.rfc1912.zones zone文件，定义域
/usr/sbin/named-checkconf 检查配置文件的命令
/usr/sbin/named-checkzone 检查区域文件的命令
/var/log/named.log 日志文件
/var/named 数据文件的主目录
/var/named/named.ca 根域服务器
/var/named/named.localhost 正向解析区域文件的模板
/var/named/named.loopback 反向解析区域文件的模板

配置主配置文件/etc/named.conf：
options {
    listen-on port 53 { any; };
    。。。。。。。。。
    allow-query { any; };
    
    dnssec-enable no;
    dnssec-validation no;	
```

#### 正向解析

```
vim /etc/named.rfc1912.zones
zone "wpl.com" IN { //域名
    type master;
    file "wpl.com.zone"; //名字
    allow-update { none; };
};

vim /var/named/wpl.com.zone
$TTL 1D
@ 		IN 		SOA wpl.com. rname.invalid. (
                            。。。。。。。。。
@ 		NS 		dns1.wpl.com.
dns1 	A 		192.168.140.100
www 	A 		1.1.1.1

检查配置文件、正向解析文件书写语法是否错误：
named-checkconf /etc/named.conf
named-checkconf /etc/named.rfc1912.zones
named-checkzone fricky.cc.zone fricky.cc.zone

systemctl start named //打开服务
```

```
$TTL 缓存的生存周期
@ 当前域
IN 互联网
SOA 开始授权
NS DNS服务端
A IPv4正向记录
AAAA IPv6正向记录
```

#### 客户端

```
vim /etc/resolv.conf
# Generated by NetworkManager
search wpl.com
nameserver 192.168.140.100
验证：nslookup 域名
```

#### 反向解析

```
vim /etc/named.rfc1912.zones
zone "1.16.172.in-addr.arpa" IN {
	type master;
	file "172.16.1.zone";
	allow-update { none; };
};

vim /var/named/172.16.1.zone
$TTL 1D
@ 		IN 		SOA wpl.com. rname.invalid. (
										。。。。。。。。。。。
@ 		NS 		dns1.wpl.com.
dns1 	A 		192.168.140.100
1 		PTR 	www.wpl.com.
2 		PTR 	www.baidu.com.

检查
重启服务
```

#### 客户端

```
nslookup 172.16.1.1
```

