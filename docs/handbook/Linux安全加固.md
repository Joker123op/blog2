## 访问控制

```
相关文件：
①/etc/hosts.allow //白名单
②/etc/hosts.deny //黑名单
格式：[服务名]：[IP或IP端]
黑白名单是即时生效的文件
白名单优先级高于黑名单
最好的策略：黑名单阻止所有，白名单放行对应的服务
黑名单：ALL:ALL
白名单：sshd:192.168.10.1
```

## 用户的口令安全

```
2.1 限制系统没用的默认账户登录
passwd -l [用户名] # 锁定用户
passwd -u [用户名] #解锁用户
usermod

2.2 root用户远程登录控制
相关文件：
/etc/ssh/sshd_config
修改参数
PermitRootLogin no
# 不允许root用户远程登录

2.3 口令生存周期
相关文件：
/etc/login.defs
# 此文件配置对Root账户无效,即时生效
/etc/pam.d/system-auth

2.3.1 修改口令生存周期
相关文件：
/etc/login.defs
PASS_MAX_DAYS 90 //密码最大使用天数
PASS_MIN_DAYS 2 //密码最小使用天数
PASS_MIN_LEN 8 //密码最小长度
PASS_WARN_AGE 7 //密码到期提前提醒天数
```

```
/etc/pam.d/system-auth //专门控制认证相关的文件
Linux-PAM（嵌入式身份认证模块）分层体系结构
分为三层

①第一层 模块层 处于整个结构的最底层
向上为接口层提供四个模块
★auth鉴别模块：认证接口，要求并验证密码（验证密码是否合格）（配置登录处理功能）
account账户管理模块：检测是否允许访问（跟认证无关的账户检测机制）
★password口令管理模块：设置并验证密码（用户在修改密码时需要完成的检测）（配置口令复杂度策略）
session会话管理模块：配置和管理用户sesison

②第二层 应用接口层 处于PAM的中间结构
向上为应用程序屏蔽了用户鉴别的具体过程
向下调用模块层中对应的具体模块提供的特定服务
有四个控制标志：
★required 必须success才能进行继续，即使失败用户也不会立刻获知，直到所有相关模块完成
★requisite 必须success才能使认证继续进行
sufficient 如果失败则忽略
optinal 忽略结果，不管是否失败

③第三层 应用程序层 程序文件
```

```
2.3.3 查看系统是否存在空口令账户
awk -F: '{if($2 == "") print $1 }' /etc/shadow
```

```
2.5 检查是否存在除root用户外UID=0的用户
awk -F: '($3 == 0) { print $1 }' /etc/passwd
```

```
password requisite pam_cracklib.so retry=3 difok=3 minlen=8 lcredit=-1 dcredit=-
1 ucredit=-1 ocredit=-1
difok=3：允许新旧密码相同字符的个数为3个
lcredit=-1：限制新密码中最少有1个小写英文字符
ucredit=-1：限制新密码中最少有1个大写英文字符
dcredit=-1：限制新密码中最少有1个数字字符
ocredit=-1：限制新密码中最少有1个特殊字符
```

```
auth required pam_tally2.so onerr=fail deny=5 lock_time=2 unlock_time=1800
lock_time=2：尝试失败后，拒绝访问2秒
unlock_time=1800:锁定之后1800秒后解锁
```

```
4.4 修改路由信息
route add –net [目标网站] netmask [目标网段掩码] gw $gateway1
添加路由：
①route add -net 192.168.100.0 netmask 255.255.255.0 dev ens33
②route add -net 192.168.100.0 netmask 255.255.255.0 dev ens33 gw 192.168.10.2
dev:指定设备，类似na出接口
gw:网关，类似na下一跳
route del –net 0.0.0.0 netmask 0.0.0.0 gw $gateway
# 删除默认路由
```

