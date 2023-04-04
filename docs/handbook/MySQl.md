## 常见数据库

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304042020776.webp)

在日常中一般只会遇见1、2、4、5。

### 数据库的基本结构

数据库结构

* 1.服务端:用于接收并处理其它程序发出的请求的程序(软件)，或者是安装此类程序的设备(计算机)。
* 2.客户端: 向服务器发出请求的程序(软件)，或者是安装此类程序的设备(计算机)
* 3.库:就是一堆表组成的数据集合
* 4.表(table) :类似 Excel，由行和列组成的二维表
* 5.字段: 表的列(垂直方向) 。
* 6.记录: 表的行(水平方向)。关系数据库必须以行为单位进行数据读写。

## 三种sql的种类

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304042025200.webp)

## 基本sql语法

数据库操作：

* CREATE DATABASE db name（新建数据库）
* Show databases;(查看所有数据库)
* DROP DATABASE db name;（删除数据库） 
* USE db_name;
* CREATE TABLE table name (column name column type); (新建表)
* Show tables;(查看所有数据表)
* DROP TABLE table name: (删除表格)
* Desc table name; (查看表的类型)
* ALTER TABLE table name DRoP i;(删除表里面的字段)
* ALTER TABLE table name ADD i INT;(添加表里面的字段)
* ALTER table ta change b bbb int; (修改字段名和属性)
* PRIMARY KEY(不能空且为一)主键
* AUTO_INCREMENT(设置编码)
* CHARSET = UTF-8(自增长)
* NOT NULL(数据不能为空)

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304042057315.webp)


数据类型：`varchar(255)`,`int(20)`, `char`,`float`。

库里面有表，表里面有字段、数据

字段相当于表格中的x轴

执行sql语句时不区分大小写，但是数据区分

sql语句的结尾一定要有;

 `Desc table_name`可以查看表里的字段。
 例如：

 ![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304042040039.webp)

