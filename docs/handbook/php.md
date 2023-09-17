## PHP环境搭建

网页由前端，后端组成。而后端有数据库和动态语言。

web容器可以把前端和动态语言放在一起，它是一个十分重要的东西

访问某一个网站其实就是访问某一台电脑的web容器中的某一个文件夹里的内容

在windows环境下运行php需要使用到一个软件**phpstudy**，[下载地址](https://www.xp.cn/download.html)

由于是作为渗透测试作用的靶场，所以最好的放在虚拟机中运行，这样也可以防止被别人乱搞或者自己用力过猛造成一些不必要的损失。

下载好phpstudy之后安装然后打开这个东西：

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050104818.webp)

然后再点击网站

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050105606.webp)

然后再点击创建网站。这里有一个值得注意的一点。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050105210.webp)

端口号不能重复，然后在根目录中的路径中最好删除(.com）。

随后将PHP的文件放在这个目录下

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050113364.webp)

**注意**只有当php的名字为index时才会被浏览器编译

在里面写好php之后保存跟着这个步骤打开就可以完成php环境的搭建啦！

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050114463.webp)

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304050122519.webp)


## PHP语言的特点以及介绍

首先PHP是一种通用的开源脚本语言。（超文本预处理器）

PHP吸收了C语言、Java和Pert的特点，主要使用于Web开发测试。

PHP是将程序嵌入到HTML文档中去执行CSS和JS（前端代码）

PHP还可以执行编译后的代码，编译可以达到加密和优化代码运行，使代码运行更快。

PHP支持几乎所有流行的数据库以及操作系统。

---

使用场景有

* 网站需要动态操作的，如注册，登录，查询。
* 网站需要生成静态文件确保安全的。
* 需要快速看见效果的项目。
* 部分游戏服务端（swoole扩展）
* ......

## 声明编码格式

在大部分情况下，为了保证自己的内容可以在浏览器中正常显示，通常要手动指定编码格式，以防发生一些编码问题影响体验。

在php中有多种声明编码的方法但多数以HTML语法为主，其中有两种比较常用的是：

```PHP
<meat charset='utf-8'> <!--第一种-->
<?php
header("Content-Type:text/html;charset=utf-8");  # 第二种
?>
```

## PHP的基本标识

因为在php的代码中的允许出现其他前端代码的混淆，所以我们需要一个标识来告诉浏览器从这一部分开始，就是我的php代码了。

常见的php代码标识一共有三种，如下：

1. XML风格

```php
<?php
echo "这是XML风格标记！";
?>
```

2. 脚本风格

```php
<script language="php">
echo "这是脚本风格的标记！";
</script>
```

3. 简短风格

```php
<? echo "这是简短风格的标记"; ?>
```

4. ASP风格

```php
<%
echo "这是ASP风格的标记！";
%>
```

其中常见的表示是前两种，在正常情况下主要是第一种比较多，但第二种常见于绕过对php的检测时使用。

## php基础函数

php是一个弱类型的语言，他可以不定义类型，和python有些许相像。都是根据后面的内容会自动定义类型。

```PHP
<?php
$a = 'Hello World';
echo $a;
?>
```

在php中定义一个常量和c语言的语法是非常像的。php定义常量的函数是`define(,)`

用法如下：

```PHP
<?php
define($x, 13);
echo x;
?>
```
## $x代表变量，后面是这个变量的值

在php中双引号和单引号的区别就是双引号里的内容php还会对他继续解析，例如：

```PHP
<?php
$a = 'Hello';
echo "$a";
echo '$a';
?>
```

>输出结果：`Hello`,`$a`

可以看出来，被双引号所包裹的内容被再次解析了，成功的打印出看这个变量里的值，而单引号的东西则被当成字符串处理了。

总结双引号里的东西如果是变量的话会解析，单引号只会直接输出。

双引号解析在实际中的作用如下：

```PHP
<?php
$a = '男同';
echo "陈治轩是$a";
?>
```
>输出结果是：`陈治轩是男同`

可以看到使用双引号解析可以将我要输出的字符串和变量里的内容结合在一起。

php的连接符是`.`不同于python可以用`+`和`,`。

在php中也可以查看变量的类型。用法是`var_dump($a);`这样就会输出这个值的数据类型。

在python中也是同理只是函数不一样`print(type(a))`


## 定义函数

在php中定义一个函数的方法是

```PHP
<?php
function name()
{
    # 你的代码
}
name();
?>
```

可以看到和Python也有点像，都是在前面一个固定函数告诉系统这个部分是我自定义的函数。

在php中如果要换行，可以使用HTML的元素`.</br >`

## == 或 ===

在php中 ==和 ===是不一样的

== 比较数值

=== 比较类型且比较数值

例如：

```PHP
<?php
$a = 1;
$b = '1';
echo $a == $b;
echo $a === $b;
?>
```

>结果：`1` `false`

很明显只有在==等号的情况下，这两个数值才一样，但严格来讲两个值的类型不同。所以相对来说 === 就是更加严格的比较符。

## .=的作用

在php中.=是累加的意思，下面查看案例：

```PHP
<?php
$a = 'a'; # 赋值
$b = 'b'; # 赋值
$c = 'c'; # 赋值
$c .= $a; # $c .= $a == $c = $c.$a
$c .= $b;
echo $c;
?>
```
>结果：`cab`

## 条件分支语句

### if语句

**用法**

```PHP
<?php
$a = 'Hello';
if($a == 'He')
{
    echo '登录成功！';
}
else
{
    echo '登录失败!';
}
?>
```

在php中的if嵌套语句和c语言一样：

```PHP
<?php
$a = 'He';
if($a == 'Hello')
    echo '登录成功！';
else if($a == 'he')
    echo '登录失败!';
else if($a == 'H')
    echo 'czx';
else
    echo 'cxk';
?>
```

switch也和c一样：

```PHP
<?php
switch ("变量名")
{
    case 'xxx';
    echo 'XXXXXXXXXXXXXX';
    break;
    # case 'XXX'以此类推
    default:
        echo "sorry";
        # 以上都不满足的情况下执行这个语句
}
?>
```

 for循环语句代码示例：

 ```PHP
 <?php
 for($x = 0;&x <= 10;&x++)
    echo "数字是：$x".'</br >';
 ?>
 ```
`@$a`在变量名前面加上一个@就可以屏蔽报错，也就是说即使在你代码出现错误以及问题的情况下是不会报错的。

## 数组的创建

在php中创建一个数组十分简单，并且不需要给定数组的长度例如

```php
<?php
$a = array(1,2,3,4,5)
?>
```



## foreach循环(只适用于数组循环)

foreach 循环用于遍历数组。

### 语法

```php
foreach ($array as $value)
{
    要执行代码;
}
```

每进行一次循环，当前数组元素的值就会被赋值给 $value 变量（数组指针会逐一地移动），在进行下一次循环时，您将看到数组中的下一个值。

```php
foreach ($array as $key => $value)
{
    要执行代码;
}
```

每一次循环，当前数组元素的键与值就都会被赋值给 $key 和 $value 变量（数字指针会逐一地移动），在进行下一次循环时，你将看到数组中的下一个键与值。

### 实例

下面的实例演示了一个输出给定数组的值的循环：

## 实例

```php
<?php
$x=array("Google","Runoob","Taobao"); 
foreach ($x as $value) {
    echo $value . PHP_EOL; 
} 
?>
```

输出：

```
Google
Runoob
Taobao
```

下面的实例演示了一个输出给定数组键与值的循环：

## 实例

```php
<?php 
$x=array(1=>"Google", 2=>"Runoob", 3=>"Taobao"); 
foreach ($x as $key => $value) {
	echo "key  为 " . $key . "，对应的 value 为 ". $value . PHP_EOL; 
} ?>
```

输出：

```
key  为 1，对应的 value 为 Google
key  为 2，对应的 value 为 Runoob
key  为 3，对应的 value 为 Taobao
```

## 字符串相关操作函数

<br />

### 1. 去除字符串首尾空格和特殊字符

```php
<?php
$str = trim("  abcd$");
?>
```

### 2. 获取字符串长度

```php
echo strlen('addadwd') // 按字符个数进行获取(根据字节来统计)
    
echo mb_strlen('adwadad') // 按字数个进行获取
```

### 3. 截取字符串

```php
substr(string str, int start, int length); // 截取除中文以外的字符串

$str = 'ghyudfheuihjfiojeof';
echo substr($str, 0, 5);
```



## PHP超全局变量

在浏览器中一般有2种请求方式。分别是`GET`请求和`POST`请求。

在浏览器中如果是GET请求，则可以在url栏上看见一系列参数，但url传递参数是有限制的，一次不能传递太多的数据。

POST请求的过程中浏览器url上无法直接看见参数，而且没有长度限制，因此POST请求更为安全，也能传输大数据。

 `$_GET`是超全局变量，类似于数组的概念

 `$_POST`

 `Request`既可以获取POST传参也可以获取GET

 `$_COOKIE`获取cookie

 `$_SERVER`包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组

 `$_SERVER`功能强大。

常见的：
```PHP
<?php
$_SERVER['HTTP_REFERER'] # 获取Referer请求头数据

$_SERVER["HTTP_USER_AGENT"] # 获取用户相关信息、包括用户浏览器、操作系统等信息。

$_SERVER["REMOTE_ADDR"] # 浏览网页的用户ip
?>
```






在浏览器页面制作一个输入栏

```PHP
<form method=POST>
    <input type='text' name = 'a'></input>
    <input type='submit'>
</form>
```

PHP5.4版本相对稳定，在5.4以上的版本request就不能再接收cooking了

## PHP操作MySQL

使用PHP操作数据库属于一个插件，使用方法如下：

```PHP
<?php

# 连接数据库
$conn = mysqli_connect("数据库地址", "数据库账号", "数据库密码", "数据库名");

$conn = mysqli_connect("addr", "usr", "password");
# 选择数据库(相当于执行SQL语句的USE)

mysqli_select_db($conn, "db_name");
# 执行SQL语句

$result = mysqli_query($conn, "SQL");
# 遍历查询结果
$row = mysqli_fetch_row();      # 返回一行

$table = mysqlifetch_all();       # 返回全部内容(一个表)

$row = mysqli_fetch_array($result);
# 关闭数据库连接
mysqli_close($conn)

?>
```

## 表单

**表单在网页中主要负责数据采集功能。**

一个表单有三个基础组成部分：

* 表单标签：这里面包含了处理表单数据所用动态脚本的url以及数据提交到服务器的方法。
* 表单域：包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、下拉选择框和文件上传框等/
* 表单按钮：包括提交按钮、复位按钮和一般按钮;用于将数据传送到服务器上的动态脚本或者取消输入，还可以用表单按钮来控制其他定义了处理脚本的处理工作.


表单标签:

`<form action="URL" method = "GET/POST">`url表示如果你在表单里输入了东西点击提交他会提交到这个url中.


```PHP
<input type="text" />  <!--允许输入文本,数字-->

<input type="password" /> <!--输入内容自动变成*-->

<input type="number" /> <!--只允许输入数字-->

<input type="file" /> <!--选择一个文件-->

<input type="radio" /> <!--单选框(一组单选框公用一个name)-->

<input type="checkbox" /> <!--多选框-->

<input type="button" /> <!--普通按钮-->

<input type="submit" /> <!--提交表单按钮-->

<input type="image" /> <!--图片提交按钮-->

<input type="reset" /> <!--重置表单按钮-->
```

## 正则表达式

```PHP
<?php
preg_match_all # 正则表达式、匹配字符串、匹配到的东西放入数组
# 返回匹配到的次数

preg_replace # 正则表达式、替换成什么、匹配字符串
#返回替换后的结果
?>
```

替换支持数组格式。在php中所有的正则表达式都是以//开头的 

以下的内容是正则表达式的一些语法

**普通字符**

| 字符 | 描述 |实例|
| :--: | -- | -- |
|`[ABC]`|匹配 `[...]` 中的所有字符，例如 `[aeiou]` 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母。|[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_regexp5)|
|`[^ABC]`|匹配除了 `[...]` 中字符的所有字符，例如 `[^aeiou]` 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母。|[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_regexp6)|
| `[A-Z]` | `[A-Z]` 表示一个区间，匹配所有大写字母，`[a-z]` 表示所有小写字母。|[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_regexp7)|
|`.`|匹配除换行符`（\n、\r）`之外的任何单个字符，相等于 `[^\n\r]`。|[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_regexp8)|
|`[\s\S]`|匹配所有。`\s` 是匹配所有空白符，包括换行，`\S` 非空白符，不包括换行。|[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_regexp9)|
|`\w`|匹配字母、数字、下划线。等价于 `[A-Za-z0-9_]`|[尝试一下](https://www.runoob.com/try/try.php?filename=tryjsref_regexp10)|

**非打印字符**

| 字符 | 描述 |
|:---:|-----------------------|
|`\cx`|匹配由x指明的控制字符。例如， `\cM` 匹配一个 Control-M 或回车符。`x` 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 `'c'` 字符。|
|`\f`|匹配一个换页符。等价于 \x0c 和 \cL。|
|`\n`|匹配一个换行符。等价于 \x0a 和 \cJ。|
|`\r`|匹配一个回车符。等价于 \x0d 和 \cM。|
|`\s`|匹配任何空白字符，包括空格、制表符、换页符等等。等价于 `[ \f\n\r\t\v]`。注意 Unicode 正则表达式会匹配全角空格符。|
|`\S`|匹配任何非空白字符。等价于 `[^ \f\n\r\t\v]`。|
|`\t`|匹配一个制表符。等价于 \x09 和 \cI。|
|`\v`|匹配一个垂直制表符。等价于 \x0b 和 \cK。|

**特殊字符**

所谓特殊字符，就是一些有特殊含义的字符，如上面说的 `runoo*b` 中的 `*`，简单的说就是表示任何字符串的意思。如果要查找字符串中的 `*` 符号，则需要对 `*` 进行转义，即在其前加一个 `\`，`runo\*ob` 匹配字符串 runo*ob。

许多元字符要求在试图匹配它们时特别对待。若要匹配这些特殊字符，必须首先使字符"转义"，即，将反斜杠字符`\` 放在它们前面。下表列出了正则表达式中的特殊字符：

|特别字符|描述|
|:--:| -- |
|`$`|匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 `$` 也匹配 `'\n'` 或 `'\r'`。要匹配 `$` 字符本身，请使用 `\$`|
|`()`|标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 `\`( 和 `\`)。|
|`*`|匹配前面的子表达式零次或多次。要匹配 `*` 字符，请使用 `\*`。|
|`+`|匹配前面的子表达式一次或多次。要匹配 `+` 字符，请使用 `\+`。|
|`.`|匹配除换行符 `\n` 之外的任何单字符。要匹配 `.` ，请使用 `\`. 。|
|`[`|标记一个中括号表达式的开始。要匹配 `[`，请使用 `\[`。|
|`?`|匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 `?` 字符，请使用 `\?`。|
|`\`|将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， `'n'` 匹配字符 `'n'`。`'\n'` 匹配换行符。序列 `'\\'` 匹配 `"\"`，而 `'\('` 则匹配 `"("`。|
|`^`|匹配输入字符串的开始位置，除非在方括号表达式中使用，当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合。要匹配 `^` 字符本身，请使用 `\^`。|
|`{`|标记限定符表达式的开始。要匹配 `{`，请使用 `\{`。|
|`|`|指明两项之间的一个选择。要匹配 `|`，请使用 `\|`。|

**限定符**

限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 `*` 或 `+` 或 `?` 或 `{n}` 或 `{n,}` 或 `{n,m}` 共6种。

正则表达式的限定符有：

|字符| 描述 |
|:--:| -- |
| `*` | 匹配前面的子表达式零次或多次。例如，`zo*` 能匹配 "z" 以及 "zoo"。`*` 等价于 `{0,}`。 |
|`+`| 匹配前面的子表达式一次或多次。例如，`zo+` 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。`+` 等价于 `{1,}`。 |
|`?`| 匹配前面的子表达式零次或一次。例如，`do(es)?` 可以匹配 "do" 、 "does"、 "doxy" 中的 "do" 和 "does"。`?` 等价于 `{0,1}`。![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304070916546.webp) |
|`{n}`| n 是一个非负整数。匹配确定的 n 次。例如，`o{2}` 不能匹配 "Bob" 中的 `o`，但是能匹配 "food" 中的两个 `o`。 |
|`{n,}`| n 是一个非负整数。至少匹配n 次。例如，o{2,} 不能匹配 "Bob" 中的 `o`，但能匹配 "foooood" 中的所有 `o`。`o{1,}` 等价于 `o+`。`o{0,}` 则等价于 `o*`。 |
|`{n,m}`| m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。例如，`o{1,3}` 将匹配 "fooooood" 中的前三个 o。`o{0,1}` 等价于 `o?`。请注意在逗号和两个数之间不能有**空格**。 |

到这里如果觉得可以小试牛刀的话，可以来这里练练手！[正则练习](https://c.runoob.com/front-end/854/)

## 数组

在PHP中也同样存在数组这个概念，那么该如何创建数组和输出数组呢？

### 创建数组

创建一个数组的办法有很多，可以是`$_GET`也可以是`$_POST `甚至`$_REQUEST`

当然也可以手动创建

```PHP
<?php
header("Content-type:text/html;charset=utf-8");
$array = array
(
    array("姓名"=>"张三","年龄"=>25,"性别"=>"男"),
    array("姓名"=>"李四","年龄"=>21,"性别"=>"男"),
    array("姓名"=>"娜娜","年龄"=>22,"性别"=>"女")
);
 var_dump($array);
?>

```

说明：

print_r() 和 var_dump() 函数一般是用于调试程序使用，更多情况是使用 echo 来输出具体的数组单元值

### 输出数组的方法

**使用echo/print输出数组**

echo()用于输出一个或多个字符串。

严格来讲 echo 并不是一个函数，它实际上是一种语言结构；因此不一定必须使用小括号来指明参数，使用单引号、双引号也可以。

然而，如果向 echo() 传递一个以上的参数，那么就不能使用小括号了，因为将会生成解析错误。

print()和echo()有点类似（它实际上也是一种语言结构），但不同点是echo可以接受多个参数并且没有返回值，而print()只能接受一个参数并且有返回值。

使用echo/print进行数组输出时，只能对某数组中的某一元素进行输出。下面我们通过代码实例来具体看看：

输出：

```php
$array[0] = 香蕉
$array[1] = 苹果
$array[2] = 梨子
$array[3] = 橙子
$array[4] = 橘子
$array[5] = 榴莲
```

也可以使用函数类似于for循环的方法循环遍历数组的元素:

```PHP
<?php
header("Content-type:text/html;charset=utf-8");
$array= array("香蕉","苹果","梨子","橙子","橘子","榴莲");
foreach ($array as $val)    # 遍历数组
{   
	# 输出数组元素
    echo $val."<br>";  
}
?>
```

输出结果：

```
香蕉
苹果
梨子
橙子
橘子
榴莲
```

## 可变变量

```php
// 可以用变量的'值', 作为变量的'名'
$varname = "age";
$$varname = 20;	// 声明一个age的变量并赋值为20
echo $age; // 输出20
```

##  登录界面

```php
<?php

@$user = $_POST['user'];
@$pwd = $_POST['pwd'];

if (!empty($user) && !empty($pwd)){
    if ($user == 'admin' && $pwd == 'password')
        echo "<script>alert('登陆成功')</script>";
    else
        echo "<script>alert('登陆失败')</script>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录login</title>
</head>
<body>
    <form action="index.php" method="post" >
        <input name="user" type="text">
        <br>
        <input name="pwd" type="password">
        <br>
        <input type="submit" value="登录">
        <br>
    </form> 
</body>
</html>
```

 
