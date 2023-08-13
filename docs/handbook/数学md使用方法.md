## 公式块与行内公式的添加

### 1.公式块

- **创建独立的一块公式区域**。

![img](https://pic4.zhimg.com/80/v2-173040dc6f514f968238de4eea234103_720w.webp)

- 上部分为公式输入区
- 下部分为效果展示区

![img](https://pic3.zhimg.com/80/v2-219413f9b93e87886e39da12cea971a6_720w.webp)

编辑别处时展示效果图。

**方法一**：左上角点击“段落”，再点击“公式块”

**方法一**：在文中输入$$，再按下回车

### 2.行内公式

- **将公式嵌入文字内**。

![img](https://pic1.zhimg.com/80/v2-92380dc1f20d8942e68beba08c742ed8_720w.webp)

**方法一**： 在`$$`的中间加入需要的公式

**简便的方法一**：先按 `$` ，再按 “esc”（键盘左上角）

![img](https://pic3.zhimg.com/80/v2-ba58046e522d2a96a8def586f04a3136_720w.webp)

（行内公式是需要先设置一下）

------

## 常用符号的代码

- 上下标，正负无穷
- 加减乘，分式，根号，省略号
- 三角函数
- 矢量，累加累乘，极限
- 希腊字母

### **1.上下标，正负无穷**

![img](https://pic2.zhimg.com/80/v2-9e56df605e51b7aa0cf7a45d0b5bfde1_720w.webp)

### **2.加减乘，分式，根号，省略号**

![img](https://pic3.zhimg.com/80/v2-417aefe2addf8328b4865d037864ec4e_720w.webp)

### **3.三角函数**

![img](https://pic4.zhimg.com/80/v2-2527327da18ba3cd4d9cfa9483bcbe1f_720w.webp)

### **4.矢量，累加累乘，极限**

![img](https://pic1.zhimg.com/80/v2-701158788db26a5936516dc93d34b378_720w.webp)

### **5.希腊字母**

![img](https://pic3.zhimg.com/80/v2-ec3ad9e52d4b26648d73c64c43bc217e_720w.webp)

### **6.关系运算符**

![img](https://pic3.zhimg.com/80/v2-9088cec7cffbc94c5daef26147278062_720w.webp)

------

## **矩阵**

### **1.简单矩阵**

使用`\begin{matrix}…\end{matrix}`生成， 每一行以`\\`结尾表示换行，元素间以`&`间隔，式子的表示序号`\tag{1}`（右边的序号）。
$$
\begin{matrix}
 1 & 2 & 3 \\
 4 & 5 & 6 \\
 7 & 8 & 9 
\end{matrix} \tag{1}
$$

```text
 $$
\begin{matrix}
 1 & 2 & 3 \\
 4 & 5 & 6 \\
 7 & 8 & 9 
\end{matrix} \tag{1}
$$
```

### **2.带左右括号的矩阵(大中小括号)**

**方法一**：在`\begin{}`之前和`\end{}`之后添加左右括号的代码。

大括号：
$$
\left\{
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right\} \tag{2}
$$

```text
$$
 \left\{
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right\} \tag{2}
$$
```

中括号：
$$
\left[
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right] \tag{3}
$$

```text
$$
 \left[
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right] \tag{3}
$$
```

小括号：
$$
\left(
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right) \tag{4}
$$

```text
$$
 \left(
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right) \tag{4}
$$
```

**方法二**：改变`\begin{matrix}`和`\end{matrix}`中`{matrix}`

大括号：
$$
\begin{Bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{Bmatrix} \tag{6}
$$

```text
$$
 \begin{Bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{Bmatrix} \tag{6}
$$
```

中括号：
$$
\begin{bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{bmatrix} \tag{6}
$$

```text
$$
 \begin{bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{bmatrix} \tag{6}
$$
```

### **3.包含希腊字母与省略号**

行省略号`\cdots`，列省略号`\vdots`，斜向省略号（左上至右下）`\ddots`。
$$
\left\{
 \begin{matrix}
 1      & 2        & \cdots & 5        \\
 6      & 7        & \cdots & 10       \\
 \vdots & \vdots   & \ddots & \vdots   \\
 \alpha & \alpha+1 & \cdots & \alpha+4 
 \end{matrix}
 \right\}
$$

```text
$$
 \left\{
 \begin{matrix}
 1      & 2        & \cdots & 5        \\
 6      & 7        & \cdots & 10       \\
 \vdots & \vdots   & \ddots & \vdots   \\
 \alpha & \alpha+1 & \cdots & \alpha+4 
 \end{matrix}
 \right\}
$$
```

------

## 公式序号

见“矩阵”小节，代码最后的一行即表示右端序号

```text
......
\tag{6}
```

## 行列式

行列式相关语法与矩阵类似
$$
\begin{vmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{vmatrix}
\tag{7}
$$

```text
$$
 \begin{vmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{vmatrix}
\tag{7}
$$
```

------

## 表格

### **1.简易表格**

$$
\begin{array}{|c|c|c|}
	\hline 2&9&4\\
	\hline 7&5&3\\
	\hline 6&1&8\\
	\hline
\end{array}
$$

```text
$$
\begin{array}{|c|c|c|}
	\hline 2&9&4\\
	\hline 7&5&3\\
	\hline 6&1&8\\
	\hline
\end{array}
$$
```

**开头结尾**： `\begin{array}` ， `\end{array}`

**定义式**：例：`{|c|c|c|}`，其中`c` `l` `r` 分别代表居中、左对齐及右对齐。

**分割线**：①**竖直分割线**：在定义式中插入 `|`， （`||`表示两条竖直分割线）。

②**水平分割线**：在下一行输入前插入 `\hline`，以下图真值表为例。

其他：每行元素间均须要插入 `&` ，每行元素以 `\\` 结尾。

### **2..真值表**

$$
\begin{array}{cc|c}
	       A&B&F\\
	\hline 0&0&0\\
	       0&1&1\\
	       1&0&1\\
	       1&1&1\\
\end{array}
$$

```text
$$
\begin{array}{cc|c}
	       A&B&F\\
	\hline 0&0&0\\
	       0&1&1\\
	       1&0&1\\
	       1&1&1\\
\end{array}
$$
```

------

## **多行等式对齐**

$$
\begin{aligned}
a &= b + c \\
  &= d + e + f
\end{aligned}
$$

```text
$$
\begin{aligned}
a &= b + c \\
  &= d + e + f
\end{aligned}
$$
```

## **方程组、条件表达式**

方程组：
$$
\begin{cases}
3x + 5y +  z \\
7x - 2y + 4z \\
-6x + 3y + 2z
\end{cases}
$$

```text
$$
\begin{cases}
3x + 5y +  z \\
7x - 2y + 4z \\
-6x + 3y + 2z
\end{cases}
$$
```

同理，条件表达式：
$$
f(n) =
\begin{cases} 
n/2,  & \text{if }n\text{ is even} \\
3n+1, & \text{if }n\text{ is odd}
\end{cases}
$$

```text
$$
f(n) =
\begin{cases} 
n/2,  & \text{if }n\text{ is even} \\
3n+1, & \text{if }n\text{ is odd}
\end{cases}
$$
```

------

## **间隔 (大小空格、紧贴)**

**紧贴 + 无空格 + 小空格 + 中空格 + 大空格 + 真空格 + 双真空格**

```text
$$
a\!b + ab + a\,b + a\;b + a\ b + a\quad b + a\qquad b
$$
```

紧贴`\!`

无空格 小空格`\,` 中空格`\;` 大空格`\`

真空格`\quad` 双真空格`\qquad`

------

## 通过Python生成LaTeX表达式

### **step1：安装latexify-py模块**

### **step2：编写代码**

```python3
import math				//引入数学模块(有些运算的函数需要)
import latexify			//引入latexify模块

@latexify.with_latex	//特定语法，表示之后定义的函数可以转化为LaTeX代码
def f(x,y,z):		    //包含的参数
    pass			   //此处填写可能需要的数学表达式
    return result		//也可以直接体现数学关系

print(f)			   //直接print(函数名)
```

### **step3：在输出区得到需要的LaTeX数学表达式**

**特别说明**，生成的表达式为**定义式**，即 ，如果只需要等式 ，可以把生成表达式中的`\triangleq`改成`=` ！

更多细节和实例可以浏览我新的文章：

[使用Python一键生成LaTeX数学公式70 赞同 · 9 评论文章![img](https://picx.zhimg.com/v2-b0d50fd5f6bb3327dae0b1f73a305ae0_r.jpg?source=172ae18b)](https://zhuanlan.zhihu.com/p/270596333)

------

ps：好像知乎不支持markdown表格，离谱了。

在原理上，Typora中使用Markdown语法进行操作，在Markdown中添加公式只需要知道LaTex语法，再在前后加入$（或$$）

## 参考资料

- 使用Typora添加数学公式（[https://blog.csdn.net/mingzhuo_126/article/details/82722455](https://link.zhihu.com/?target=https%3A//blog.csdn.net/mingzhuo_126/article/details/82722455)）
- [CSDN_Markdown] 使用LaTeX写矩阵（[https://blog.csdn.net/bendanban/article/details/44221279](https://link.zhihu.com/?target=https%3A//blog.csdn.net/bendanban/article/details/44221279)）
- Markdown下的LaTeX公式笔记 （[https://www.bilibili.com/read/cv1578688/](https://link.zhihu.com/?target=https%3A//www.bilibili.com/read/cv1578688/)）
- typora行内公式插入（https://www.zhihu.com/answer/809450524）