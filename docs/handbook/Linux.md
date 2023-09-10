## Linux基础命令

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

## vim文件编辑器

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















