## 入侵排查思路

> 账号安全 -> 历史命令 -> 检查异常端口 -> 检查异常进程 -> 检查开机启动项 -> 检查定时任务 -> 检查服务 -> 检查异常文件 -> 检查系统日志

## 账号安全

```
1、查询特权用户特权用户(uid 为0)
[root@localhost ~]# awk -F: '$3==0{print $1}' /etc/passwd
2、查询可以远程登录的帐号信息
可以远程登陆相当于是有密码的用户
[root@localhost ~]# awk '/\$1|\$6/{print $1}' /etc/shadow
3、除root帐号外，其他帐号是否存在sudo权限。如非管理需要，普通帐号应删除sudo权限
[root@localhost ~]# more /etc/sudoers | grep -v "^#\|^$" | grep "ALL=(ALL)"
more :单页输出
cat：一次性全部输出
4、禁用或删除多余及可疑的帐号
usermod -L user 禁用帐号，帐号无法登录，/etc/shadow第二栏为!开头
passwd -l
userdel user 删除user用户
userdel -r user 将删除user用户，并且将/home目录下的user目录一并删除
```

## 历史命令

```
history //查看历史命令
history -c //清除历史命令
ls -a //查看隐藏文件

通过.bash_history查看帐号执行过的系统命令

1、root的历史命令
histroy

2、打开/home各帐号目录下的.bash_history，查看普通帐号的历史命令
为历史的命令增加登录的IP地址、执行命令时间等信息：

1）保存1万条命令
sed -i 's/^HISTSIZE=1000/HISTSIZE=10000/g' /etc/profile

2）在/etc/profile的文件尾部添加如下行数配置信息：
######jiagu history xianshi#########
USER_IP=`who -u am i 2>/dev/null | awk '{print $NF}' | sed -e 's/[()]//g'`
if [ "$USER_IP" = "" ]
then
USER_IP=`hostname`
fi
export HISTTIMEFORMAT="%F %T $USER_IP `whoami` "
shopt -s histappend
export PROMPT_COMMAND="history -a"
######### jiagu history xianshi ##########

3）source /etc/profile让配置生效
生成效果： 1 2018-07-10 19:45:39 192.168.204.1 root source /etc/profile

3、历史操作命令的清除：history -c
但此命令并不会清除保存在文件中的记录，因此需要手动删除.bash_profile
文件中的记录。
入侵排查：
进入用户目录下
cat .bash_history >> history.txt
```

## 检查异常端口

```
使用netstat 网络连接命令，分析可疑端口、IP、PID
netstat -antlp|more
a:all（表示所有监听的端口）
n:直接使用IP
t:tcp协议
u:udp协议
l:listen监听
p:进程
查看下pid所对应的进程文件路径，
运行ls -l /proc/$PID/exe或file /proc/$PID/exe（$PID 为对应的pid 号）
```

## 检查异常进程

```
使用ps命令，分析进程
ps aux | grep pid
VSZ：虚拟内存的占用大小
RSS：实际内存的占用大小
TTY：终端类型（tty：控制终端，pts：虚拟终端）
STAT：进程状态
R：正在运行或可运行的进程
+：在前台进程组
S：休眠中
s：一个信息头
<：高优先级
N：低优先级
l:多线程
START：进程的启动时间
TIME：进程的运行时长
COMMAND：启动进程的命令
```

## 检查开机启动项

```
systemctl enable 服务名 //自启动服务

开机自启动的脚本：
#!/bin/bash
#chkconfig:2345 10 90
#description:ziqi.sh
echo 123

2345：默认的启动级别
查看运行级别命令runlevel
运行级别 含义
0 关机
1 单用户模式，可以想象为windows的安全模式，主要用于系统修复
2 不完全的命令行模式，不含NFS服务（无网络连接的多用户命令行模式）
3 完全的命令行模式，就是标准字符界面（有网络连接的多用户命令行模式）
4 系统保留
5 图形模式
6 重启动
10：启动优先级
90：停止优先级
优先级范围：0-100，数字越大，优先级越低
```

```
设置开机自启动，只需将可执行脚本丢在/etc/init.d目录下，然后在
/etc/rc.d/rc*.d中建立软链接即可
[root@localhost ~]# ln -s /etc/init.d/sshd /etc/rc.d/rc3.d/S100ssh
此处sshd是具体服务的脚本文件，S100ssh是其软链接，S开头代表加载时自启动；如果是K开头的脚本文
件，代表运行级别加载时需要关闭的。
chkconfig --add ziqi.sh //将脚本添加到自启动列表
chkconfig --list //查看自启动列表
chkconfig ziqi.sh on //启动脚本
```

|                                 | 硬链接                      | 软链接（符号链接l）                               |
| ------------------------------- | :-------------------------- | :------------------------------------------------ |
|                                 | 类似完整克隆，但不 完全是   | 类似链接克隆，但不完全是                          |
| 创建方式                        | ln [原文件] [目标链接 文件] | ln -s [原文件] [目标链接文件]                     |
| 原文件被删除                    | 若有执行权限，可以 执行文件 | 随之损坏，不能执行                                |
| 更改原文件权限                  | 权限随之更改                | 权限不会更改，但若原文件没有执行权 限，也无法执行 |
| 新建一个与被删原文件同 名的文件 | 执行结果是被删原文 件的内容 | 执行结果是新建文件的内容                          |

## 检查定时任务

```
入侵排查：
重点关注以下目录中是否存在恶意脚本
/var/spool/cron/*
/etc/crontab
/etc/cron.d/*
/etc/cron.daily/*
/etc/cron.hourly/*
/etc/cron.monthly/*
/etc/cron.weekly/
/etc/anacrontab
/var/spool/anacron/*
```

## 检查服务

```
systemctl list-units --type=service //查看系统正在运行的服务
systemctl list-units --all --type=service //查看系统中所有的服务
```

## 检查异常文件

```
1、查看敏感目录，如/tmp目录下的文件，同时注意隐藏文件夹，以“..”为名
的文件夹具有隐藏属性

2、得到发现WEBSHELL、远控木马的创建时间，如何找出同一时间范围内
创建的文件？
可以使用find命令来查找，如 find /opt -iname "*" -atime 1 -type f 找出 /opt 下一天前访问
过的文件
-atime 1：一天之内
-type f：type类型为file，普通文件

3、针对可疑文件可以使用stat进行创建修改时间。
[root@os43 ~]# stat 1.txt
Access: //访问时间（如cat查看文件内容）
Modify: //修改文件内容的时间
Change: //改变状态的时间（包括内容的修改、权限的修改等）
```

## 检查系统日志

```
日志默认存放位置：/var/log/
查看日志配置情况：more /etc/rsyslog.conf
日志文件 描述
/var/log/cron 记录了系统定时任务相关的日志
/var/log/cups 记录打印信息的日志
/var/log/dmesg 记录了系统在开机时内核自检的信息，也可以使用dmesg命令直接查看内核自检信息
/var/log/mailog 记录邮件信息
★/var/log/message 记录系统重要信息的日志。这个日志文件中会记录Linux系统的绝大多数重要信息，
如果系统出现问题时，首先要检查的就应该是这个日志文件
/var/log/btmp 记录错误登录日志，这个文件是二进制文件，不能直接vi查看，而要使用lastb命令查看
/var/log/lastlog 记录系统中所有用户最后一次登录时间的日志，这个文件是二进制文件，不能直接vi，
而要使用lastlog命令查看日志文件 描述
/var/log/wtmp 永久记录所有用户的登录、注销信息，同时记录系统的启动、重启、关机事件。同样这个文
件也是一个二进制文件，不能直接vi，而需要使用last命令来查看
/var/log/utmp 记录当前已经登录的用户信息，这个文件会随着用户的登录和注销不断变化，只记录当前登
录用户的信息。同样这个文件不能直接vi，而要使用w,who,users等命令来查询
★/var/log/secure 记录验证和授权方面的信息，只要涉及账号和密码的程序都会记录，比如SSH登录，su
切换用户，sudo授权，甚至添加用户和修改用户密码都会记录在这个日志文件中
```

```
日志分析技巧：

1、定位有多少IP在爆破主机的root帐号：
grep "Failed password for root" /var/log/secure | awk '{print $11}' | sort |
uniq-c | sort -nr | more

2、定位有哪些IP在爆破：
grep "Failed password" /var/log/secure|grep -E -o "(25[0-5]|2[0-4][0-
9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-
9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"|uniq -c

3、爆破用户名字典是什么？
grep "Failed password" /var/log/secure|perl -e 'while($_=<>){ /for(.*?) from/;
print "$1\n";}'|uniq -c|sort -nr

4、登录成功的IP有哪些：
grep "Accepted " /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr
| more
sort：对文本文件中所有行进行排序
sort -nr：统计出现的次数
uniq -c：在每行开头的时候增加重复的次数

cat /var/log/secure | grep "Accepted"

5、登录成功的日期、用户名、IP：
grep "Accepted " /var/log/secure | awk '{print $1,$2,$3,$9,$11}'

6、增加用户日志：
grep "useradd" /var/log/secure

7、删除用户日志：
grep "userdel" /var/log/secure

8、su切换用户
more /var/log/secure | grep 'su:'
```

## 工具使用

```
1、chkrootkit
网址：http://www.chkrootkit.org
使用方法：
wget ftp://ftp.pangeia.com.br/pub/seg/pac/chkrootkit.tar.gz
tar -zxf chkrootkit.tar.gz
cd chkrootkit-0.55
./chkrootkit

2、rkhunter
网址：http://rkhunter.sourceforge.net/
使用方法：
wget https://sourceforge.net/projects/rkhunter/files/rkhunter/1.4.6/rkhunter1.4.6.tar.gz
tar -zxf rkhunter-1.4.6.tar.gz
cd rkhunter-1.4.6/
./installer.sh -install
rkhunter -c

病毒查杀
Clamav
ClamAV的官方下载地址为：http://www.clamav.net/download.html
使用方法：
yum -y install epel-release
yum install –y clamav clamav-update
freshclam
clamscan -r /home

webshell查杀
河马webshell查杀
网址：https://www.shellpub.com/
使用方法：
https://www.shellpub.com/doc/hm_linux_usage.html
深信服Webshell网站后门检测工具
网址：https://edr.sangfor.com.cn/#/index/home
```

## 日志审计

日志存放的位置：/var/log

## 日志功能

```
用于记录系统、程序运行中发生的各种事件
通过阅读日志，有助于诊断和解决系统故障
```

## 日志分类

```
用户日志：添加、删除用户，改变用户状态
程序日志：程序自带的日志，如httpd(访问日志、错误日志)
内核及系统日志：由系统rsyslog统一管理的，日志格式基本相似
```

## tail查看日志

```
cat、more:从头输出
tail:从文件末尾开始输出，默认输出最后十行

tail -f file.log
# 输出文件末尾行（默认10行），当文件有追加时，会输出后续添加的行，不中断输出，除非ctrl+c中断
# -f 即 –follow=file.log
-f:持续输出

tail -f file.log | grep “关键字”
# 输出文件末尾包含关键字的行，当文件有追加时，会输出后续添加的行，不中断输出，除非ctrl+c中断
# -f 即 –follow=file.log

tail -n 100 file.log | grep “关键字”
# 输出文件的后100行中包含的关键字的行（-n 100 即 –lines=100）
-n：指定输出的行数

tail -n 100 file.log | grep “关键字” -A10
# 输出文件的后100行中包含关键字的行和该行的后10行

tail -n 100 file.log | grep “关键字” -B10
# 输出文件的后100行中包含关键字的行和该行的前10行

tail -n 100 file.log | grep “关键字” –B10-A10
# 输出文件的后100行中包含关键字的行和该行的前后10行
```

## 主要的日志文件

```
内核及公共消息日志/var/log/messages
• /var/log/cron 计划任务日志
• /var/log/dmesg 系统引导日志
• /var/log/maillog 邮件系统日志

用户登录日志：
•/var/log/lastlog
• /var/log/secure
• /var/log/wtmp
• /var/log/btmp
```

```
[root@Fricky /]# vim /etc/rsyslog.conf
-- 进入系统内核日志文件
authpriv.*
[服务名称].[日志级别]
authpriv：登录认证相关的服务
*:表示所有
数字等级越小，优先级越高，消息越重要
日志消息的级别
0 EMERG（紧急）：会导致主机系统不可用的情况
1 ALERT（警告）：必须马上采取措施解决问题
2 CRIT（严重）：比较严重的情况
3 ERR（错误）：运行出现错误
4 WARNING （提醒）：可能会影响系统功能的事件
5 INFO（信息）：一般信息
6 DEBUG（调试）：程序或系统调试信息等
触发某级别日志：logger -p emerg "你表达的内容"
```

## 用户日志分析

```
/var/log/lastlog：最近的用户登录事件
/var/log/wtmp:用户登录、注销及系统开、关机事件
/var/log/utmp：当前登录的每个用户的详细信息
/var/log/secure：与用户验证相关的安全性事件
```

#### 分析工具

```
1.users 查看能登录的用户---/var/log/utmp
2.who,w 查看在线登录的用户---/var/log/wtmp
3.last,lastb 查看登录成功和失败的用户---/var/log/lastlog
lastb：查看登录失败的日志
last：查看登录成功的日志
```

## 程序日志分析

```
yum -y install httpd
网站根目录：/var/www/html/
日志存放位置：/var/log/httpd
```

## 日志文件

```
/var/log/boot.log -> 包含系统启动时的日志
/var/log/utmp -> 包含登录退出信息
/var/log/secure -> 包含验证和授权信息
/var/log/dpkg.log -> 包含安装或dpkg命令清除软件包的日志
/var/log/kern.log -> 包含内核产生的日志，有助于在定制内核时解决问题
/var/log/Xorg.x.log -> 来自X的日志信息
/var/log/alternatives.log -> 更新替代信息都记录在这个文件中
/var/log/cups -> 涉及所有打印信息的日志
/var/log/anaconda.log -> 在安装Linux时，所有安装信息都储存在这个文件中
/var/log/yum.log -> 包含使用yum安装的软件包信息
/var/log/cron -> 每当cron进程进行一个工作，就会将相关信息记录在此文件中
```

## 日志服务器搭建

> 服务端：接收客户端的日志，保存备份 
>
> 客户端：外发本台设备的日志 
>
> 前提：保证两台设备能通信，确认防火墙和selinx关闭

#### 客户端

```
vim /etc/rsyslog.conf

*.* @@remote-host:514 //格式
服务.级别 @@远端主机（服务端ip）：514
@@ tcp
@ udp

配置内容如下：
authpriv.* @@192.168.10.100:514

systemctl restart rsyslog.service //重启服务
```

#### 服务端

```
vim /etc/rsyslog.conf

# Provides TCP syslog reception
$ModLoad imtcp
$InputTCPServerRun 514

:fromhost-ip,isequal,"192.168.10.200"/var/log/client/192.168.10.200.log

:从哪个ip去接收，包含哪些信息，"客户端IP"保存的位置/保存的日志文件名称（192.168.10.200.log）

systemctl restart rsyslog.service //重启服务
```

#### 排错

> ①确认两台设备是否能通信 
>
> ②防火墙确认是否关闭