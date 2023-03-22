# Python笔记
## Format用法
1、
```Python
print('{name}在{option}'.format(name=" "，option=" "))
```
这种办法可以将花括号的内容替换成相应变量字符串的值
2、通过位置
```Python
print('{}在{}'.format('陈治轩','拉屎'))
结果是：陈治轩在拉屎
```
3、在python3.6后的版本中format的用法可以简化例如：
在字符串中使用变量
```Python
name = "陈治轩"
do = "是男同"
czx = f"{name}{do}"
print(czx)
结果是：陈治轩是男同
```
甚至还可以这样：
```python
name = "陈治轩"
do = "是傻逼"
czx = f"{name}{do}"
print(f"厦软的{czx}")
结果是：厦软的陈治轩是傻逼
```
# 打火机我i的环境
伟大伟大伟大爱玩打完哇阿迪王打完大王的阿瓦达