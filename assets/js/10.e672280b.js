(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"linux基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux基础命令"}},[a._v("#")]),a._v(" Linux基础命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[当前用户@主机名 当前所在的位置]权限\n~：用户家目录\n普通用户的家目录：/home目录下\nroot的家目录：/root\n/:根目录，所有的文件和目录都是置于根目录下，也就是从根目录出发\n$:普通权限\n#：管理员权限\nsu root //切换到管理员用户\nhostname //查看主机名\n修改主机名：\n①hostname 用户名 //临时修改主机名\n②永久修改主机名：/etc/hostname\nreboot //重启\npoweroff //关机\n")])])]),t("h2",{attrs:{id:"vim文件编辑器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim文件编辑器"}},[a._v("#")]),a._v(" vim文件编辑器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("i 进入插入模式\nesc 退出当前的模式\n：q 退出，不保存\n：q! 强制退出，不保存\n：wq 保存退出\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("插入模式：\na 从下一个字符插入\ni 从当前光标处进行插入\no 换行插入\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("命令模式：\nyy复制当前行\n3yy复制3行\np粘贴到当前行下\ndd删除当前行\ngg回到第一行\nG到最后一行\n50G快速跳转到第50行\nu:撤销上一步的操作\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("底行模式：\n▪ :wq\n▪ :q!不保存并退出\n▪ :set nu显示行号\n▪ :% s/old/new/g每一行中的old替换成new\n▪ :50,56d删除50-56行的数据\n/DNS:快速定位\n/^DNS:快速定位以DNS开头的内容\n/DNS$:快速定位以DNS结尾的内容\n")])])]),t("h2",{attrs:{id:"查看系统信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看系统信息"}},[a._v("#")]),a._v(" 查看系统信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fdisk -l //查看硬盘大小\nLinux LVM：逻辑卷\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@Fricky ~]# cat /proc/meminfo\n--- 查看内存大小\nMemTotal：总内存\nMemFree：空闲内存\nBuffers:给文件的缓冲大小\nCached:缓存使用的大小\nVmallocTotal：虚拟内存的大小\nVmallocUsed：已被使用的虚拟内存的大小\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@Fricky /]# cat /proc/cpuinfo\n--- 查看CPU信息\nprocessor：系统中逻辑处理器核心的编号\nvendor_id ：CPU的制造商\ncpu family ：cpu产品系列的代号\nmodel：属于该系列的哪一代\n")])])]),t("h2",{attrs:{id:"基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[a._v("#")]),a._v(" 基础命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ctrl+l = clear\t\t//清楚当前界面\n\nctrl+shift+c/v 复制/粘贴\n\nctrl+shift++ 放大字体\n\nctrl+- 缩小字体\n\nTab 命令和存在文件名称补齐作用（双击列出TAB所以可选项）\n\nCtrl+c 终止快捷键\n")])])]),t("p",[a._v("网卡配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("位置：/etc/sysconfig/network-scripts/\nifconfig //查看IP信息\nip a //查看IP信息\nroute -n //查看路由表\nip route //查看路由信息\n内容：\nTYPE=Ethernet\nBOOTPROTO=static\nIPADDR=192.168.10.100 //ip\nNETMASK=255.255.255.0 //掩码\nGATEWAY=192.168.10.2 //网关\nDNS1=218.85.157.99 //主DNS\nDNS2=114.114.114.114 //副DNS\nDEFROUTE=yes\nNAME=ens33\nDEVICE=ens33\nONBOOT=yes //是否随之网络服务启动而自启\nsystemctl restart network //重启网络服务\n")])])]),t("h2",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[a._v("#")]),a._v(" SSH")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl start sshd //开启ssh服务\nsystemctl status sshd //查看ssh服务的状态\nsystemctl stop sshd //停止ssh服务\nsystemctl enable sshd //开机自启ssh服务\nsystemctl disable sshd //永久关闭ssh服务\n")])])]),t("p",[a._v("安装SSH服务")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum install openssh-server --- 下载ssh服务\nvi /etc/ssh/sshd_config --- 使用vi编辑SSH的配置文件\n对ssh配置文件进行修改\n")])])]),t("h2",{attrs:{id:"树状结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树状结构"}},[a._v("#")]),a._v(" 树状结构")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/ ---操作系统的起始路径根路径\n/bin ---普通用户和管理员都可以执行的命令字\n/sbin ---只有管理员才能执行的命令关机重启\n/boot ---引导主引导目录独立的分区启动菜单内核\n/dev --- device设备设备文件存放目录\n/etc ---配置文件存放目录\n/home ---普通用户的家目录\n/root --- 管理员的家目录\n/media --- 光驱的挂载目录\n/mnt ----临时设备挂载目录\n/proc --- 里面的数据都在内存中，进程的所在目录\n/tmp ---临时文件存放目录\n/usr --- 软件的安装目录\n/var --- 常变文件存放目录日志文件邮件文件\n/var/log --日志文件主要存放的路径\n")])])]),t("h2",{attrs:{id:"查询语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询语句"}},[a._v("#")]),a._v(" 查询语句")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls //查看当前目录下的内容\ncat //查看文件的内容\n")])])]),t("h2",{attrs:{id:"创建文件、目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建文件、目录"}},[a._v("#")]),a._v(" 创建文件、目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("touch 文件名 //创建空文件\necho 内容 > 文件名 //创建有内容的文件\nvim文本编辑器创建有内容的文件\nmkdir 目录名 //创建目录\nmkdir -p 1/2/3 //创建多级目录\n")])])]),t("h2",{attrs:{id:"删除文件、目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件、目录"}},[a._v("#")]),a._v(" 删除文件、目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm 文件名 //删除文件\nrm -f 文件名 //强制删除文件\nrm -r 目录名 //删除目录\nrm -rf 目录名 //强制删除目录\n")])])]),t("h2",{attrs:{id:"重命名、复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重命名、复制"}},[a._v("#")]),a._v(" 重命名、复制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mv 旧文件名 新文件名 //移动并重命名文件\ncp 1.txt 2.txt //复制1.txt并重命名为2.txt\n")])])]),t("h2",{attrs:{id:"命令字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令字"}},[a._v("#")]),a._v(" 命令字")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("内部命令：安装后就有的命令\n外部命令：程序/安装包，下载之后会给我们提供更多的命令字\n用type来判断是否是内部命令：type 命令\nhelp:只能查看内部的命令字\nman:外部命令和内部命令都能查看\n")])])]),t("h2",{attrs:{id:"压缩、解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩、解压缩"}},[a._v("#")]),a._v(" 压缩、解压缩")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dd if=/dev/zero of=/test/KB bs=1M count=100 //创建一个大小为100M的文件\ndd：复制文件并对原文件的内容进行转换和格式化处理\nif:input file,输入文件\nof:output file,输出文件\n/dev/zero：Linux特殊文件，空字节填充设备\nbs:文件大小\ncount:次数\nll -h //查看文件的具体大小\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dd if=/dev/zero of=/test/KB bs=1M count=100 //创建一个大小为100M的文件\ndd：复制文件并对原文件的内容进行转换和格式化处理\nif:input file,输入文件\nof:output file,输出文件\n/dev/zero：Linux特殊文件，空字节填充设备\nbs:文件大小\ncount:次数\nll -h //查看文件的具体大小。\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("du -sh 目录名 //查看目录下的文件总大小\ntar -cf 目标文件 源文件（可以多个） //打包文件\ntar -xf 文件名 //解包文件\ntar -zcf 目标文件 源文件（可以多个） //打包并压缩文件\n\n选项参数含义：\n-c 打包\n-x 解包\n-C +文件存放路径\n-z 使用gzip\n-j 使用bzip2\n")])])]),t("h2",{attrs:{id:"centos安装vim编辑器-其他版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos安装vim编辑器-其他版本"}},[a._v("#")]),a._v(" CentOS安装VIM编辑器（其他版本）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vim编辑器需要安装三个包\nvim-enhanced-7.0.109-7.el5\nvim-minimal-7.0.109-7.el5\nvim-common-7.0.109-7.el5\n1.查看一下你本机已经存在的包，确认一下你的VIM是否已经安装，输入：\nrpm –qa | grep vim\n如果vim已经安装，则会显示上面三个包的名称\n2.如果缺少了其中某个，例如：少了vim-enhanced这个包，执行下载该包：\nyum –y install vim-enhanced\n3.如果上面三个包一个都没有显示（或者只显示一个），则直接输入命令：\nyum –y install vim*\n")])])]),t("h2",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[a._v("#")]),a._v(" yum")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum 下载安装服务的命令\nyum install 服务名 //安装服务\nyum remove 服务名 //删除服务\nyum reinstall 服务名 //重装服务\n-y （当安装过程提示选择全部为“yes”）\n-q （不显示安装的过程）等等\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget（wget是一个从网络上自动下载文件的自由工具）\n")])])]),t("h2",{attrs:{id:"换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换源"}},[a._v("#")]),a._v(" 换源")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("网络源：存在于网上的软件库，从网上下载（wget），前提：联网\n本地源：本地的软件库，不需要联网，软件包少（快速，防断网，安全）\n")])])]),t("p",[a._v("搭建本地源")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /etc/yum.repos.d/ //源存放的路径\n①df -h //查看镜像文件的路径\n②cd /etc/yum.repos.d/\n新建文件\n内容：\n[local-yum]\nname=local-yum\nbaseurl=file:///run/media/wpl/CentOS\\ 7\\ x86_64\ngpgcheck=0\n③yum clean all //清楚缓存\nyum makecache //挂载新的源\nyum repolist //查看源仓库\n")])])]),t("p",[a._v("网络源")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root@Fricky ~]# mv /etc/yum.repos.d/CentOS-Base.repo\n/etc/yum.repos.d/CentOS•Base.repo.backup\n--- 备份原有的yum源\n[root@Fricky ~]# wget http://mirrors.163.com/.help/CentOS7-Base-163.repo\n--- 使用wget下载网易源\n[root@Fricky ~]# mv CentOS7-Base-163.repo /etc/yum.repos.d/ CentOS-Base.repo\n--- 移动和重命名\n[root@Fricky ~]# yum repolist\n--- 显示仓库\n")])])]),t("h2",{attrs:{id:"设置自动登录root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置自动登录root"}},[a._v("#")]),a._v(" 设置自动登录root")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vim /etc/gdm/custom.conf\n[daemon]\nAutomaticLoginEnable=True //开启自动登录功能\nAutomaticLogin=root //选择自动登录的用户\n\n重启\n")])])]),t("h2",{attrs:{id:"linux用户和组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux用户和组"}},[a._v("#")]),a._v(" Linux用户和组")]),a._v(" "),t("h3",{attrs:{id:"用户分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户分类"}},[a._v("#")]),a._v(" 用户分类")]),a._v(" "),t("h4",{attrs:{id:"超级用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超级用户"}},[a._v("#")]),a._v(" 超级用户")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root,UID=0\n管理员用户\n只要用户的UID为0，就拥有管理员权限\n")])])]),t("h4",{attrs:{id:"普通用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通用户"}},[a._v("#")]),a._v(" 普通用户")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("UID：1000-60000\n可以登录系统，权限比管理员低，只能对自己目录下的文件进行访问和修改\n")])])]),t("h4",{attrs:{id:"伪-系统-用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪-系统-用户"}},[a._v("#")]),a._v(" 伪(系统)用户")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("UID:1-999\n不能登录系统，与系统和程序服务相关，主要方便系统管理，满足相应的系统进程对文件属主的要求，不是真\n正的使用者\n")])])]),t("h2",{attrs:{id:"etc-passwd-用户信息文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-passwd-用户信息文件"}},[a._v("#")]),a._v(" "),t("code",[a._v("/etc/passwd")]),a._v(" 用户信息文件")]),a._v(" "),t("p",[a._v("所有用户可读（不安全）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root:x:0:0:root:/root:/bin/bash\n1 :2:3:4:5 :6 :7\n1 用户名\n2 密码位（已废弃），保存在/etc/shadow\n3 UID，用户标识号（0：超级用户）\n4 GID，缺省组标识号（先有组才有用户）\n5 用户信息记录字段（备注）\n6 家目录（宿主目录），用户登录系统后的缺省目录\n7 用户使用的shell，默认是/bin/bash(/sbin/nologin:伪用户)\n")])])]),t("p",[t("code",[a._v("/etc/shadow")]),a._v(" 密码信息文件")]),a._v(" "),t("p",[a._v("默认只有root用户拥有读权限，其他用户没有任何权限")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root:$6$bQdOIwHSq1: :0:99999:7: : :\n1 :2 :3:4:5 :6:7:8:9\n1 用户名\n2 加密密码（$6：sha加密；$1：MD5加密），！！或*：没有密码，不能登录（禁用）\n3 最后一次修改时间，从1970.1.1开始计算（以天为单位）\n4 最小修改密码时间间隔\n5 密码有效期（默认99999，相当于永久生效）\n6 密码需要变更前的警告天数（默认7）\n7 密码过期后的宽限天数（-1:密码永不失效）\n8 账号失效时间\n9 保留位：等待新功能的加入\n")])])]),t("h2",{attrs:{id:"添加删除用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加删除用户"}},[a._v("#")]),a._v(" 添加删除用户")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("useradd [选项] [用户名] //添加用户（默认无密码）\n选项：\n-u（UID）：手工指定用户ID\n-d [家目录]：手工指定用户的家目录\n-M：不创建家目录\n-c [用户说明]：手工指定的用户说明（用户备注信息）\n-g [组名]：手工指定用户的初始组\n-G [组名]：指定用户的附属组\n-s（shell）：手工指定用户的登录shell。默认是/bin/bash\nuserdel 用户名 //删除用户（删不干净）\nuserdel -r 用户名 //删除用户的时候删除家目录\n")])])]),t("h2",{attrs:{id:"修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改密码"}},[a._v("#")]),a._v(" 修改密码")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("passwd\npasswd [选项] [用户名]\n选项：\n-S：查询用户密码的密码状态，仅root用户可用\n-l ：暂时锁定用户，仅root用户可用\n-u：解锁用户，仅root用户可用\n")])])]),t("h2",{attrs:{id:"修改用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改用户信息"}},[a._v("#")]),a._v(" 修改用户信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("usermod\nusermod [选项] [用户名]\n选项：\n-u（UID）修改用户的UID号\n-c（用户说明）修改用户的说明信息\n-G（组名）修改用户的附属组\n-L（Lock）临时锁定用户\n-U（Unlock）解锁用户锁定\n")])])]),t("h2",{attrs:{id:"修改用户密码状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改用户密码状态"}},[a._v("#")]),a._v(" 修改用户密码状态")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("chage\nchage [选项] [用户名]\n选项：\n-d (日期) 修改密码最后一次更改日期(shadow[3]字段)\n-m(天数) 两次密码修改间隔(shadow[4]字段)\n-M(天数) 密码有效期(shadow[5]字段)\n-W(天数) 密码过期前的警告天数(shadow[6]字段)\n-I (天数) 密码过期后宽限天数(shadow[7]字段)\n-E (日期) 账号失效时间(shadow[8]字段)\n")])])]),t("h2",{attrs:{id:"查看用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看用户信息"}},[a._v("#")]),a._v(" 查看用户信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("id\nid [用户名]\n")])])]),t("h2",{attrs:{id:"切换用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换用户"}},[a._v("#")]),a._v(" 切换用户")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("su\nsu [选项] [用户名]\n选项：\n- 只使用 ‘ - ’ 代表连用户的环境变量一起切换\n-c 仅执行一次命令，而不切换用户身份（sudo）\n例子：su -c 'cat /etc/shadow'\n")])])]),t("p",[a._v("sudo")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("在普通用户权限下执行root权限，不切换用户身份\n前提：加入管理员组\nvim /etc/sudoers\n## Allow root to run any commands anywhere\nroot ALL=(ALL) ALL\nwpl ALL=(ALL) ALL\n")])])]),t("h2",{attrs:{id:"linux用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux用户组"}},[a._v("#")]),a._v(" Linux用户组")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("主组：用户创建时默认生成的组，每个用户有且只有一个主组，记录在/etc/passwd文件中的组就是用户的主\n组\n附属组：后来添加的组，用户可以是零个或者多个附属组的成员\n一个用户可以不添加附属组，但是必须要有主组，用户主组是不能删除\n附属组是可以删除\n")])])]),t("h2",{attrs:{id:"etc-group-组信息文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-group-组信息文件"}},[a._v("#")]),a._v(" "),t("code",[a._v("/etc/group")]),a._v(" 组信息文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wpl:x:1000:wpl\n1 :2:3 :4\n1 组名\n2 组密码位（已废弃），保存在/etc/gshadow\n3 GID,组标识号\n4 组内用户\nwheel组 管理员组\n\n")])])]),t("h3",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("groupadd 组名 //添加组\ngroupdel 组名 //删除组\nusermod 用户名 -G GID/组名 //将用户添加到附属组\ngpasswd -a 用户名 组名 //将用户添加到附属组\ngpasswd -d 用户名 组名 //将用户从附属组中删除\n")])])]),t("h2",{attrs:{id:"dhcp搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dhcp搭建"}},[a._v("#")]),a._v(" DHCP搭建")]),a._v(" "),t("p",[a._v("准备工作")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("①关闭虚拟机本身的DHCP功能\n②搭建本地源\n③关闭防火墙\nsystemctl stop firewalld.service //关闭防火墙\nsystemctl disable firewalld.service //永久关闭防火墙\n④关闭selinux（安全策略）\nsetenforce 0 //临时关闭\n永久关闭：\ncd /etc/selinux/config\n内容：\nSELINUX=disabled\n")])])]),t("blockquote",[t("p",[a._v("DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）是一个局域网的网络协议，UDP 协议，67号端口，主要用于动态管理分配IP地址。")])]),a._v(" "),t("h4",{attrs:{id:"服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[a._v("#")]),a._v(" 服务端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('yum -y install dhcp //安装下载DHCP服务\nrpm -q dhcp //查看DHCP是否安装成功\nrpm -ql dhcp //查看DHCP自带的文件列表\n重要文件：\n/etc/dhcp/dhcpd.conf //主配置文件\n/usr/share/man/man5/dhcpd.conf.5.gz //man5文档（产品说明书）\n备份\ncp -p dhcpd.conf dhcpd.conf.bak\n-p:复制文件的同时复制文件的权限\n筛选：\ngrep -v "^#" /usr/share/doc/dhcp*/dhcpd.conf.example |grep -v "^$" > dhcpd.conf\n-v:反选\n^#:注释\n^$：空行\n配置文件dhcpd.conf\n配置内容：\noption domain-name "wpl.com"; //域名\noption domain-name-servers 218.85.157.99; //dns\ndefault-lease-time 3600; //默认租约时间\nmax-lease-time 7200; //最大租约时间\nlog-facility local7; //local7日志存放位置（默认在/var/log/boot.log）\nsubnet 192.168.140.0 netmask 255.255.255.0 { //分配网段\nrange dynamic-bootp 192.168.140.40 192.168.140.60;\n//范围\noption broadcast-address 192.168.140.255; //广播地址\noption routers 192.168.140.254; //网关\n}\n配置静态IP（配置成同网段，网关）\n开启服务：\nsystemctl start dhcpd\n')])])]),t("h4",{attrs:{id:"客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("将网卡配置文件的static改为dhcp\n①将客户端获取IP方式改为DHCP自动获取\nBOOTPROTO=dhcp\n②重启客户端网络，自动获取IP\nsystemctl restart network\n③查看获取的IP地址是否为指定IP地址的范围\n")])])]),t("h4",{attrs:{id:"分析错误日志信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析错误日志信息"}},[a._v("#")]),a._v(" 分析错误日志信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("journalctl -xe\n")])])]),t("h2",{attrs:{id:"ftp服务搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp服务搭建"}},[a._v("#")]),a._v(" FTP服务搭建")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("主要用于互联网中文件的双向传输（上传/下载）、文件共享\n跨平台 Linux、Windows\nFTP是C/S架构，拥有一个客户端和服务端，使用TCP协议作为底层传输协\n议，提供可靠的数据传输\nFTP的默认端口 21号（命令端口） 20号（数据端口）\nFTP有主动模式、被动模式两种工作模式，默认被动模式下\nFTP软件包vsftpd\n")])])]),t("h4",{attrs:{id:"服务端-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端-2"}},[a._v("#")]),a._v(" 服务端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum -y install vsftpd //安装ftp服务\nrpm -q vsftpd\nrpm -ql vsftpd\n\n文件列表：\n/etc/pam.d/vsftpd 安全认证\n/etc/vsftpd 配置文件主目录\n/etc/vsftpd/ftpusers 黑名单用户列表\n/etc/vsftpd/user_list 用户列表（黑白名单）\n/etc/vsftpd/vsftpd.conf 主配置文件\n/usr/sbin/vsftpd 二进制命令\n/var/ftp 匿名用户的默认数据的根目录\n/var/ftp/pub 匿名用户的默认数据目录的扩展目录\n备份、筛选\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("配置文件的内容:\nanonymous_enable=YES 支持匿名用户访问\nlocal_enable=YES 支持非匿名用户访问\nwrite_enable=YES 支持写入\nlocal_umask=022 反掩码\ndirmessage_enable=YES 启用消息功能\nxferlog_enable=YES 启用xferlog日志\nconnect_from_port_20=YES 支持主动模式（默认为被动模式）\nxferlog_std_format=YES xferlog日志格式\nlisten=NO FTP服务独立模式下的监听\nlisten_ipv6=YES FTP服务独立模式下的监听（IPv6）\npam_service_name=vsftpd 指定认证文件\nuserlist_enable=YES 启用用户列表\ntcp_wrappers=YES 支持tcp_wrappers功能\n\nsystemctl start vsftpd //开启ftp服务\n")])])]),t("h4",{attrs:{id:"客户端-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端-2"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("下载连接工具lftp\nlftp ip地址 //匿名用户连接\nlftp 用户名@服务器IP //非匿名用户连接（需要配置）\n")])])]),t("h4",{attrs:{id:"下载功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载功能"}},[a._v("#")]),a._v(" 下载功能")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lftp 192.168.140.100:~> ls\ndrwxr-xr-x 2 0 0 6 Oct 13 2020 pub\n-rw-r--r-- 1 0 0 7 Sep 17 08:02 server.txt\nlftp 192.168.140.100:/> get server.txt //下载文件\n7 bytes transferred\n")])])]),t("h4",{attrs:{id:"上传功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传功能"}},[a._v("#")]),a._v(" 上传功能")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("服务端\nchmod 777 /var/ftp/pub\nvim /etc/vsftpd/vsftpd.conf\n添加内容：\nanon_upload_enable=YES 支持匿名用上传（需激活write_enable）\nanon_mkdir_write_enable=YES 支持匿名用户创建目录（需激活write_enable）\nanon_other_write_enable=YES 支持匿名用户删除、重命名等写操作\n重启服务\n客户端：\nlftp 192.168.140.100:/> cd pub\ncd ok, cwd=/pub\nlftp 192.168.140.100:/pub> put client.txt //上传文件\n7 bytes transferred\n")])])]),t("h4",{attrs:{id:"报错语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#报错语句"}},[a._v("#")]),a._v(" 报错语句")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("lftp 192.168.140.100:~> ls\nls: Login failed: 500 OOPS: vsftpd: refusing to run with writable root inside\nchroot()\n//拒绝ftp根目录（/var/ftp）可写\nvsftpd增加了安全检查，如果用户被限制在其主目录下，那么主目录就不能有写的权限\nlftp 192.168.140.100:/pub> put client.txt\nput: Access failed: 550 Permission denied. (client.txt)\n//匿名用户默认没有上传功能\n")])])]),t("h2",{attrs:{id:"dns服务器搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns服务器搭建"}},[a._v("#")]),a._v(" DNS服务器搭建")]),a._v(" "),t("blockquote",[t("p",[a._v("DNS--域名解析 解析有两种：")]),a._v(" "),t("p",[a._v("正向解析：域名——>IP A记录")]),a._v(" "),t("p",[a._v("反向解析：IP——>域名 PTR记录")])]),a._v(" "),t("h4",{attrs:{id:"服务端-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端-3"}},[a._v("#")]),a._v(" 服务端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum -y install bind\nrpm -q bind\nrpm -ql bind\n文件列表：\n/etc/named 配置文件的主目录\n/etc/named.conf 主配置文件\n/etc/named.rfc1912.zones zone文件，定义域\n/usr/sbin/named-checkconf 检查配置文件的命令\n/usr/sbin/named-checkzone 检查区域文件的命令\n/var/log/named.log 日志文件\n/var/named 数据文件的主目录\n/var/named/named.ca 根域服务器\n/var/named/named.localhost 正向解析区域文件的模板\n/var/named/named.loopback 反向解析区域文件的模板\n\n配置主配置文件/etc/named.conf：\noptions {\n    listen-on port 53 { any; };\n    。。。。。。。。。\n    allow-query { any; };\n    \n    dnssec-enable no;\n    dnssec-validation no;\t\n")])])]),t("h4",{attrs:{id:"正向解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正向解析"}},[a._v("#")]),a._v(" 正向解析")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('vim /etc/named.rfc1912.zones\nzone "wpl.com" IN { //域名\n    type master;\n    file "wpl.com.zone"; //名字\n    allow-update { none; };\n};\n\nvim /var/named/wpl.com.zone\n$TTL 1D\n@ \t\tIN \t\tSOA wpl.com. rname.invalid. (\n                            。。。。。。。。。\n@ \t\tNS \t\tdns1.wpl.com.\ndns1 \tA \t\t192.168.140.100\nwww \tA \t\t1.1.1.1\n\n检查配置文件、正向解析文件书写语法是否错误：\nnamed-checkconf /etc/named.conf\nnamed-checkconf /etc/named.rfc1912.zones\nnamed-checkzone fricky.cc.zone fricky.cc.zone\n\nsystemctl start named //打开服务\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$TTL 缓存的生存周期\n@ 当前域\nIN 互联网\nSOA 开始授权\nNS DNS服务端\nA IPv4正向记录\nAAAA IPv6正向记录\n")])])]),t("h4",{attrs:{id:"客户端-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端-3"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vim /etc/resolv.conf\n# Generated by NetworkManager\nsearch wpl.com\nnameserver 192.168.140.100\n验证：nslookup 域名\n")])])]),t("h4",{attrs:{id:"反向解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向解析"}},[a._v("#")]),a._v(" 反向解析")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('vim /etc/named.rfc1912.zones\nzone "1.16.172.in-addr.arpa" IN {\n\ttype master;\n\tfile "172.16.1.zone";\n\tallow-update { none; };\n};\n\nvim /var/named/172.16.1.zone\n$TTL 1D\n@ \t\tIN \t\tSOA wpl.com. rname.invalid. (\n\t\t\t\t\t\t\t\t\t\t。。。。。。。。。。。\n@ \t\tNS \t\tdns1.wpl.com.\ndns1 \tA \t\t192.168.140.100\n1 \t\tPTR \twww.wpl.com.\n2 \t\tPTR \twww.baidu.com.\n\n检查\n重启服务\n')])])]),t("h4",{attrs:{id:"客户端-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端-4"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nslookup 172.16.1.1\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);