# Python3

## Format用法

1、通过变量名称

```Python

print('{name}在{option}'.format(name=" "，option=" "))

```
这种办法可以将花括号的内容替换成相应变量字符串的值

2、通过位置

```Python
print('{}在{}'.format('陈治轩','拉屎'))
```
> 结果：`陈治轩在拉屎`

3、在python3.6后的版本中format的用法可以简化例如：

在字符串中使用变量

```Python
name = "陈治轩"
do = "是男同"
czx = f"{name}{do}"
print(czx)
```
>结果：`陈治轩是男同`

甚至还可以这样：

```python
name = "陈治轩"
do = "是傻逼"
czx = f"{name}{do}"
print(f"厦软的{czx}")
```
>结果：`厦软的陈治轩是傻逼`

## 在字符串中间按规律插入字符

* 方法一：使用re模块

首先记得导包
```Python
import re

add = re.compile('.{n}')
print(' '.join(add.findall(flag))) # n代表每隔几个数插入。‘ ’里的内容为插入的字符。

```

add为变量名。

re.compile(‘,{n}’)固定函数。

以下为简化后的固定用法格式实例：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202303232002210.webp)

函数参数介绍:

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202303271155487.webp)

* 方法二：使用for循环遍历添加

原理就是利用pythonfor循环的特点进行遍历，再配合切片的操作，最后利用字符串拼接的办法进行连接.

以下实例是某道ctf的题的解题步骤之一，这样运行出来的结果就是将字符串没隔2位插入一个空格字符的结果

```python
flag = 'c8e9aca0c6f2e5f3e8c4efe7a1a0d4e8e5a0e6ece1e7a0e9f3baa0e8eafae3f9e4eafae2eae4e3eaebfaebe3f5e7e9f3e4e3e8eaf9eaf3e2e4e6f2'
x = ''
for i in range(0, len(flag), 2):
    print(flag[i:i+2], end=' ')
```

这样的作法是将插入后的字符串打印出来，如果想要将字符串保存在变量里以方便下一步的操作，则需要用到字符串拼接。

实例：

```python
flag = 'c8e9aca0c6f2e5f3e8c4efe7a1a0d4e8e5a0e6ece1e7a0e9f3baa0e8eafae3f9e4eafae2eae4e3eaebfaebe3f5e7e9f3e4e3e8eaf9eaf3e2e4e6f2'
x = ''
for i in range(0, len(flag), 2):
    x += flag[i:i+2] + ' '
print(x)
```

这样就可以将插入空格后的字符串保存在变量里以方便下一步的操作。

## 字符串替换

具体用法如下：
```Python
b = {
    '☰': '0',
    '☱': '1',
    '☲': '2',
    '☳': '3',
    '☴': '4',
    '☵': '5',
    '☶': '6',
    '☷': '7'
}                           # 定义一个“字典”一会来查找字符串中是否含有以下字符如果有则替换
# 构造翻译表
a = str.maketrans(b)
# 使用翻译表进行字符串替换
flag = s.translate(a)
```



* 关键在于构造翻译表，随后将需要替换的内容和被替换后的结果按照如图的方法排序。

* 使用函数str.maketrans()来构造然后使用XX.translate()来替换，XX为需要进行替换的原文。

* `()`里填被替换的字符和替换后的字符。最后将替换好的结果保存至新的变量中。

<br />

## 列表排序问题

<br />

### 关于sort函数的看法（具体用法请直接跳过这段）：

<br />

> 在python中的列表与其他语言的规则不同，他不需要for循环就能直接存储一串列表元素。
>
> 也不需要for循环遍历就能一次性打印出完整的列表。
>
> 但有的时候会需要将列表中的元素（阿拉伯数字）按大小顺序排序。
>
> 在网上大部分资料都叫你使用sort函数与reverse函数。
>
> 在列表基数不大的情况下可能没事，但列表中的函数一但过大就有概率出现bug，
>
> 因为缺少了一步，要将列表的元素强制转换成int类型才能解决。以下是具体用法：

### 用法:

`x.sort(key=int)`x为需要重新排序的列表名称。其关键在于括号内的参数。

如需要按大到小排序可先输入前面这段将正序排序好，然后再加上`x.reverse()`即可。

或者使用切片，在打印的时候直接加上`print(x[::-1])`即可倒序打印。

* 最后附上运行结果：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202303232005541.webp)

## 如何消除列表除元素以外的字符

1. 在打印时加入join函数，具体格式为:print(‘ ’.join())。

2. join()里的值为需要消除的列表，‘ ‘里的内容为以什么作为分割。

附上效果图：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202303232006410.webp)

## input输入多个数据问题

**input的具体用法有很多，可以将输入的内容按照空格作为分割，分别存在不同的变量名中，也可以以空格作为分割变成列表。**

>将输入的内容以空格为分割转换成列表：
### 方法一：
```Python
x = input(“………………”)
	num = x.split()
```

```Python

x = input(“………”).split()

```

>将输入的内容以空格为分割分别存在不同的变量中:
### 用法：

```Python

a, b, c = input(" ").split()

```

## in & not in 成员运算符

### 作用：

in 用于序列，字典，集合中，用于判断某个值是否存在对象中。

not in与in相反。

### 例：

```Python
X = “Hello,World”
	if ‘W’ in x:
		print(“W在x字符中”)
```

## 一个小知识点

### 在python中可以用*号来指定某个字符或字符串打印的次数
例：

>print(‘*’ * 4)

结果是一行可以打印四个*，而不是一个。

## 消除列表中除元素以外的任何符号


如果直接打印列表的话，会连列表的括号都一起打印出来，在观感以及实际作用来说都有些许影响

#### 以下是实现此功能的代码方法：

### 方法一：
```Python
print(' '.join(x))
```

这样打印出来的列表就不会包含处元素以外的多余参数

### 方法二：

如果打印的值是int类型的话也可以通过类型转换的办法进行消除

```Python
for i in str:
    int(i)
    print(i)
```

这种办法就可以将纯数字的列表打印出来不带括号。

## if __name__ == '__main__':`

if __name__ == '__main__': 是 Python 中一个常用的条件语句，它表示如果当前脚本是直接被运行的，而不是被导入到其他脚本中的话，那么就执行 if 语句块中的代码。这样做是为了避免在导入模块时执行一些不必要的代码。

在 if __name__ == '__main__': 后面的代码块中，您可以编写任何您想要执行的代码。如果您不想执行任何操作，可以使用 pass 语句来表示不执行任何操作。

需要注意的是，if __name__ == '__main__': 语句本身不能更改，因为它是一个固定的条件语句，用于判断当前脚本是否被直接运行。

需要注意的是，每个模块的 if __name__ == '__main__': 语句块中的代码都是独立的，它们之间并不会相互影响。另外，如果一个模块被其他模块导入，那么该模块的 if __name__ == '__main__': 语句块中的代码是不会被执行的，因为此时该模块不是直接被执行的。

具体用法：

```Python
if __name__ == '__main__':
    # 这里可以填写任意代码或者
    pass # 表示不需要进行任何操作
```

## 异常处理

在日常编写程序的时候，如果需要将程序打包好发给别人用，而有些人不按照你编写程序的使用流程来使用会导致一些奇怪的报错例如

```
x = int(input("请输入一个数字："))
```

此时用户缺偏偏输入了一个string类型的字符串这个时候就会产生类型错误

### 什么是异常？

> 异常即是一个事件，该事件会在程序执行过程中发生，影响了程序的正常执行。

> 一般情况下，在Python无法正常处理程序时就会发生一个异常。

> 异常是Python对象，表示一个错误。

> 当Python脚本发生异常时我们需要捕获处理它，否则程序会终止执行。

> 异常的出现就是用来来预判python程序会产生什么样的报错而出现的。可以防止程序异常终止(程序在不限制的情况下遇见报错会直接终止运行)。

**python异常的使用模板以及格式为:**

```python
try:
	x = int(input('请输入数字'))
except 错误类型:
	print("")		# 需要执行的语句
```

**这个结构是不是很熟悉？没错和你想象的一样，他也可以像if一样进行嵌套**

语法为：

```python
try:
	pass

except 错误类型:
	pass
	
except 错误类型:
```

介绍完结构之后，最重要的错误类型是什么？如何判断？

### 错误类型

在python中程序出现异常导致程序终止时正常情况下会显示一个错误类型，即因为什么原因导致的错误导致进程结束

例如:

```python
x = int(input(''))
# 此时键盘输入一个字符串d
```

报错结果

> **Traceback (most recent call last):**
>   **File "D:\vs code\Python\XXX.py", line 147, in <module>**
>     **x = int(input(''))**
>         **^^^^^^^^^^^^^^**
> `ValueError`**: invalid literal for int() with base 10: 'd'**

可以看到在报错里python还会很贴心的告诉你你这个错误的错误类型，这样你就可以很方便的编写程序的异常处理

在python中还有非常多的错误类型，以下是python的常见错误类型

| 异常名称                   |                        描述                       |
| :------------------------ | :------------------------------------------------:|
|                           |                                                   |
| BaseException             |                   所有异常的基类                   |
| SystemExit                |                   解释器请求退出                   |
| KeyboardInterrupt         |             用户中断执行(通常是输入^C)              |
| Exception                 |                   常规错误的基类                   |
| StopIteration             |                 迭代器没有更多的值                  |
| GeneratorExit             |        生成器(generator)发生异常来通知退出          |
| StandardError             |              所有的内建标准异常的基类               |
| ArithmeticError           |               所有数值计算错误的基类                |
| FloatingPointError        |                    浮点计算错误                    |
| OverflowError             |                数值运算超出最大限制                 |
| ZeroDivisionError         |            除(或取模)零 (所有数据类型)              |
| AssertionError            |                    断言语句失败                    |
| AttributeError            |                  对象没有这个属性                  |
| EOFError                  |             没有内建输入,到达EOF 标记              |
| EnvironmentError          |                 操作系统错误的基类                 |
| IOError                   |                 输入/输出操作失败                  |
| OSError                   |                    操作系统错误                    |
| WindowsError              |                    系统调用失败                    |
| ImportError               |                 导入模块/对象失败                  |
| LookupError               |                 无效数据查询的基类                 |
| IndexError                |              序列中没有此索引(index)               |
| KeyError                  |                  映射中没有这个键                  |
| MemoryError               |     内存溢出错误(对于Python 解释器不是致命的)       |
| NameError                 |            未声明/初始化对象 (没有属性)            |
| UnboundLocalError         |               访问未初始化的本地变量               |
| ReferenceError            | 弱引用(Weak reference)试图访问已经垃圾回收了的对象  |
| RuntimeError              |                  一般的运行时错误                  |
| NotImplementedError       |                   尚未实现的方法                   |
| SyntaxError               |                  Python 语法错误                   |
| IndentationError          |                      缩进错误                      |
| TabError                  |                   Tab 和空格混用                   |
| SystemError               |                一般的解释器系统错误                |
| TypeError                 |                  对类型无效的操作                  |
| ValueError                |                   传入无效的参数                   |
| UnicodeError              |                 Unicode 相关的错误                 |
| UnicodeDecodeError        |                Unicode 解码时的错误                |
| UnicodeEncodeError        |                 Unicode 编码时错误                 |
| UnicodeTranslateError     |                 Unicode 转换时错误                 |
| Warning                   |                     警告的基类                     |
| DeprecationWarning        |               关于被弃用的特征的警告                |
| FutureWarning             |           关于构造将来语义会有改变的警告             |
| OverflowWarning           |        旧的关于自动提升为长整型(long)的警告         |
| PendingDeprecationWarning |              关于特性将会被废弃的警告               |
| RuntimeWarning            |      可疑的运行时行为(runtime behavior)的警告       |
| SyntaxWarning             |                  可疑的语法的警告                  |
| UserWarning               |                 用户代码生成的警告                 |

通过以上内容，如果学习结束后，你就可以对自己的程序进行一些简单的异常处理了

 ## 使用requests模块对网站进行文件上传

这个方法在写ctf的题目条件竞争的时候有用，不过还需要开启多线程，否则单线程进行请求起不到什么作用，了解一下就好了

上代码

```python
import requests
# 利用requests模块对url的目标网站进行post上传文件，可以为后续的条件竞争做铺垫

file = {'upfile': open('abc.jpg', 'rb')} # 定义一个字典，并从本地获取文件以二进制格式写入

url = 'http://61.147.171.105:57472'
flag = requests.post(url, files=file)
print(flag.text)
```

需要注意的是在file这个函数里的字典`upfile`是不固定的。每个网站对用户上传的文件命名是不一样的，所以需要按照实际情况进行适当修改

上传的图片可以写绝对路径也可以是相对路径

## 多线程



```python
import threading


def dasd():
    for i in range(1, 100):
        print('dawd' + str(i))


def low():
    for i in range(1, 100):
        print('low' + str(i))


lalal = threading.Thread(target=dasd)
fw = threading.Thread(target=low)

lalal.start()
fw.start()
```



## 使用py对网站进行爆破

### 前言

> 对网站进行爆破的基础是线程池以及文件操作，使用open操作把字典从系统中打开可以节省大量的代码空间以及美观，其次是使用多线程来提高提升效率

为什么不使用 `Burpsuite` 进行爆破，不是更方便吗？还不用写工具。在实际的网站渗透中时常会遇见一些安全意识较高的厂商

他们会对数据包中加入一些 `session` 随后在其中加入时间戳这个关键数据。再使用js加密后生成的一串不起眼的数字。从而导致一个数据包只能用一次，无法反复利用。在 `Burpsuite` 的重放模块就会直接显示不可重放等。从而隔绝了通过固定的一个数据包导致的爆破。



```python
import requests				# 导入请求模块


def login_bp(user, pwd):	# 创建一个函数用于处理登录请求
    url = 'http://192.168.245.151/pikachu/vul/burteforce/bf_form.php'		# 登录请求接口
    header = {
        'Content-Type': 'application/x-www-form-urlencoded',	# 请求头代表这是一次post传参
        'User-Agent': 'Mozilla / 5.0(Windows NT 10.0;Win64;x64) AppleWebKit / 537.36(KHTML, likeGecko) Chrome / 118.0.0.0Safari / 537.36Edg / 118.0.2088.76'		   # 请求头，加上当前的浏览器数据防止被检测
    }

    proxy = {
        'http': 'http://127.0.0.1:8080',			# 挂上bp代理监听，查看数据包的情况
        'https': 'http://127.0.0.1:8080'
    }

    data = {					# 请求主题，包含了账号密码以及提交3个参数
        'username': user,		# josn的数据类型格式键值对，右边的是可变的变量代表我们将要爆破的参数
        'password': pwd,
        'submit': 'Login'
    }

    res = requests.post(url=url, headers=header, data=data, proxies=proxy, verify=False)	
    #最后开始请求，以post的方式请求，跟上以上参数，verify的意思是忽略证书问题
    if 'success' in res.text:		# 检测是否爆破成功，爆破成功之后返回的数据包里会包含success这个字符串
        print(user, '->', pwd)		# 判断当前存在这个字符串则自动输出最终爆破成功的账号密码
        exit(0)

login_bp('admin', '123456')			# 函数实参传递，为后续的爆破以及多线程做铺垫
```

以上代码可以进行一次简单的账号密码登录请求，def函数里的就是爆破模块，现在要在外面写上线程以及导入我们的账号密码



