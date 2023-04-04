# C语言笔记
## include

在c语言当中，需要注意的是头文件的包含方式，例如以下

```C
#include <stdio.h>

#include "stdio.h"
```

这两种写法的效果是不一样的，使用<>包含的头文件，系统会只在环境变量中搜索头文件库

如果是使用""包含的头文件，系统会先在当前目录下搜索，如果没找到才会去环境变量里找。

### 总结

尖括号和双引号影响的是系统寻找头文件的顺序，更重要的影响代码规范

如果是标准库或者是官方库使用<>;自己编写的自定义库使用" ";


## int main

`int main`是用户入口，用户从main函数开始有控制权，在main函数开始可以接管程序的流程。

 main函数的返回值就是进程的返回值。

 ### main运行前要运行的代码功能：
 
 
 * 先获得了操作系统版本
 * 初始化堆环境
 * 初始化多线程环境
 * 初始化ioi对象
 * 获取命令行
 * 获取环境变量
 * 格式化命令行
 * 格式化环境变量
 * 初始化全局对象
 * 初始化获得程序进程的基本信息 
 * 最后才到main函数
 * 运行代码
 * 释放全局对象


### 在`printf`中还有三个变量分别是：

* stdin（标准输入对象，默认是键盘）
* stdout（标准输出对象，默认是屏幕）
* stderr（标准错误对象，默认是屏幕）
 

`printf("Hello world")`的功能是格式化输出到标准输出设备(stdout)

`printf`也存在返回值，例如:

```C
int n = printf("Hello world\r\n");
printf("%d\r\n", n);
// 结果是：
// Hello Wolrd
// 14
```

`return 0`=`exit(0)`->`ExitProcess(0)` 不只是函数有返回值，程序也一样有返回值

其中\r\n的含义有很大一部分是保证他的兼容性。古老的程序打印机在换行的时候一共有两个步骤

* 先换行，使纸张向前伸一点
* 在让针脚回到初始位置

刚好对应\r\n这两个操作。
加上的话向下兼容会更好

## 变量命名规范

例如:

```C
int nStudentCount = 0;
float fStudentCount = 0.0f;
double dblStudentCount = 0.0;
char cStudentCount = '\0';
short int snStudentCount = 0;
int *pnStudentCount = NULL;
 ```
 

 ## scanf从标准输入设备格式化输入到指定的内存地址上

 `scanf("%d", &n);` %d 代表存入的字符是整形（int），&n的意思是取变量n的地址。

 在scanf中的意义就是告诉计算机将新输入的字符以int类型的形式存入n变量的地址。

 设置变量名的本质是给一段地址取名字，以知道自己输入的某个类型数据存储在哪个地址，方便记忆和查阅。


 **代码规范是有体系的，不能混用**

假设一个变量的值为999，则它对应的16进制的值为3e7。

而他在系统中存储的方式是这样的E7 03 00 00。读法是从右往左读，但每两个相邻的数字又偏偏从左往右读

E7 03 00 00读出来就是3E7, 从右往左前面两个因为是00 所以不用读,第二个是03所以读作3.以此类推。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304011605202.webp)


从标准输入设备格式化输入到指定内存地址上数据存放的方式有：

* 小尾方式：低数据位存在低地址处，高数据位存放在高地址处
* 大尾方式：高数据位存放在低地址处，高数据存放在高地址处

这是规则问题，没有优劣之分，两个都一样

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304011503099.webp)

在设立变量时一定要初始化，给上相对应的初始值，以防止一些奇奇怪怪的问题

例如:

```C
int n;
scanf("%d", n);
```

在这种情况下，如果scanf在输入时忘记输入&引发的一系列地址崩溃问题。这个时候n内存处于一个不稳定的状态并且不会出现报错。

在变量初始化的情况下，就能保证每个变量的地址都是初始化过后的，而不是上一次运行残留的


## scanf输入类型问题

```C
short int arr[2] = {0};
printf("%08x\r\n", &arr);
scanf("%d", &arr[0]);
scanf("%d", &arr[1]);
printf("%08x", arr[0]);
printf("%08x", arr[1]);
```

这是一段会报错的程序，其主要原因是我们定义了一个`short int`类型的arr数组。

而`short int`定义的数组每个元素只占2个字节的位置。

但是在`scanf`中的输入却是%d，这样导致了，我们期望的是每次输入两个字节的内容但实际上计算机却填入了四个字节。

最后会将后面第两个scanf输入的值会将后面的本不应该碰到的内存给修改成00 00。

这里程序中的arr申请到的内存地址是0018FF44

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304031754582.webp)

从图中可以看到从0018FF44~0018FF48这个地址的内存本来是0，但由于第一个scanf输入的是1、加上是%d

所以实际输入的值是01 00 00 00因为后面两个地址本身初始化为0了，所以在第一个scanf中还暂时看不出异常。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304031758390.webp)

可以看到0018FF48~0018FF49地址的值本来是88 FF 现在被覆盖成00 00了

原因是%d是输入int类型的值是以四个字节的宽度进去的，所以实际输入的值是 02 00 00 00

被替换的数据是函数运行所需要的必备数据，被重新赋值了就会导致程序崩溃。

他会直接影响到main函数。


## long int（失效的状态）

在微软/c语言的开发环境下中`long int`实际上只占了4个字节，并没有像c语言标准那样占8个字节。

结论是微软没按标准实施long关键字。

在微软的开发环境下想要是c标准的`long int`就必须是`_int64`才占8个字节

`_int64 x = 0xccccccccccccccccL`表示是一个long int类型的常量。如果不在末尾加上L就表示是int类型的常量，会导致溢出。

想要能输入8个字节的数据就要`scanf("%I64", &x);`才可以输入成功8个字节的内容。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304031954138.webp)

可以看到这里输入的是8个字节的数据是使用`_int64`的。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304031955159.webp)

在蓝色区域内可以看到已经成功的存入了。

`_int64`这个是非标准的long int类型，只有在微软的环境下才可以使用，在其他环境下依旧以c标准为主。

## scanf的修饰

在默认情况下有这么一个案例：

```C
char szBuf[20] = {0};
printf("%08x\r\n", szBuf);
scanf("%s", szBuf);
printf(szBuf);
```
在这个框架下数组`szBuf[20]`的地址是这个部分

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304032029074.webp)

当在程序的scanf中输入Hello Wolrd然后可以在内存中看到只有Hello进来了，World没有。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304032030551.webp)

原因是`scanf`在%s的情况下遇见空格和回车是截断符。

因此可以加上这样的修饰：`scanf("%[0-9]s", szBuf);`按照这个格式输入可以得到以下示例：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304032035734.webp)

可以看到除了0-9以外的所有字符都没有存进内存当中。

所以可以推理出以下规律：

* `scanf("%[a-z]s", m);`只包含小写a到小写z
* `scanf("%[1,2,3]s", m);`只包含1，2，3
* `scanf("%[0-9,a-z,A-Z]s");`包含除了回车、空格、符号以外的所有字符
* `scanf("%[0-9,a-z,A-Z, ]s");`包含除了回车和符号以外的所有字符

以上的中口号里的里的内容就是%s的限制条件。

而中括号里的限制方法是**正则表达式**，详细使用方法可以百度搜索**scanf正则表达式**。

还有一个限制`scanf("%19s", szBuf);`表示被截断前最多只能输入19个字符。这种方法可以控制`scanf`的输入字数限制，防止溢出。

如果数组定义的是char类型的20个连续的内存，那%ns中n的限制是n <= 19。因为字符串输入结尾默认自动添加'\0'。
