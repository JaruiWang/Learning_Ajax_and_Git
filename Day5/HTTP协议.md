## 通信
通信，就是信息的传递和交换。

通信的三要素：
- 通信的主体，  
- 通信的内容，
- 通信的方式。

案例：服务器把稻科公司的简介通过相应的方式发送给客户端浏览器。
其中，
通信的主体：服务器和客户端浏览器。
通信的内容：稻科公司的简介。
通信的方式：响应。

## 通信协议（Communication Protocol）
通信协议（Communication Protocol）是指通信的双方完成通信所必须遵守的规则和约定。
通俗的理解：通信双方采用约定好的格式来发送和接收消息，这种约定好的通信格式，就叫做通信协议。

客户端与服务器之间要实现网页内容的传输，则通信的双方必须遵守网页内容的传输协议。
网页内容又叫超文本，因此网页内容的传输协议又叫超文本传输协议(HyperText Transfer Protocol),简称HTTP协议。

HTTP协议采用了 请求/响应的交互模型。
客户端发起HTTP请求，服务器返回HTTP响应.

## HTTP请求消息
客户端发起的请求叫做HTTP请求，
客户端发送到服务器的消息，叫做HTTP请求消息。
HTTP请求消息由四部分组成：请求行（request line）,请求头部（header）,空行和请求体。

### 请求行（request line）
请求行（request line）由请求方式，URL和HTTP协议版本3个部分组成，他们之间使用空格隔开。
POST  /api/post HTTP/1.1
POST /api/addbook HTTP/1.1
GET /api/getbooks?id=1 HTTP/1.1


### 请求头部
请求头部是描述客户端的基本信息，从而把客户端的相关相信告知服务器。比如：User-Agent用来说明当前是什么类型的浏览器；
Content-Type 用来描述发送到服务器的数据类型；
Accept  用来描述客户端能够接受什么类型的返回内容；
Accept-Language 用来描述客户端期望接收哪种人类语言的文本内容

Accept: */*
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: keep-alive
Content-Length: 143
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Host: www.liulongbin.top:3006
Origin: http://127.0.0.1:5500
Referer: http://127.0.0.1:5500/
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.49

### 空行
最后一个请求头部的后面就是一个空行，通知服务器 请求头部 至此结束。
请求消息中的空行，用来分隔请求头部 与 请求体。

### 请求体
请求体中存放的就是要通过POST方式提交到服务器的数据。
GET方式没有请求体,请求数据放在协议头的URL中了。
bookname=xiyouji&author=wuchengen&publisher=chubanshe

## 响应消息
响应消息就是服务器响应给客户端的消息内容，也叫做响应报文。
HTTP响应消息由四部分组成：状态行，响应头部，空行和响应体。

### 状态行
状态行由HTTP协议版本，响应状态码和状态码的描述文本3个部分组成。
例如
HTTP/1.1 200 OK

响应状态码（HTTP Status Code）,用来标识响应的状态，200就是响应状态码。

### 响应头部
响应头部用来描述服务器的基本信息。
一般的响应头部如下：
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 41
ETag: W/"29-gKTwWjgC49jlnhIDxjqHJ5zBwMM"
Date: Fri, 08 Jul 2022 08:30:52 GMT
Connection: keep-alive
Keep-Alive: timeout=5

解释：
Content-Type 内容的数据格式
Content-Length 内容的长度
Access-Control-Allow-Origin 响应头指定了该响应的资源是否被允许与给定的origin共享。
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
如需允许所有资源都可以访问您的资源，您可以如此设置：
Access-Control-Allow-Origin: *
如需允许https://developer.mozilla.org访问您的资源，您可以设置：
Access-Control-Allow-Origin: https://developer.mozilla.org

### 空行
在最后一个响应头部字段结束之后，会紧跟一个空行，用来通知客户端响应头部至此结束。
响应消息中的空行，用来分隔响应头部与响应体。

### 响应体
响应体存放的，是服务器响应给客户端的资源内容。
{"status":201,"msg":"添加图书成功"}
{"status":200,"msg":"获取图书列表成功","data":[{"id":1,"bookname":"西游记","author":"吴承恩","publisher":"北京图书出版社"}]}

## HTTP请求方法
1. GET  **查询**，发送请求来获取服务器上的资源，请求数据放在协议头中，不在请求体中；
2. POST **新增**，向服务器提交资源，数据包含在请求体中提交给服务器；
3. PUT **修改**，向服务器提交资源，并使用提交的新资源，替换掉服务器对应的旧资源；
4. DELETE **删除**，请求服务器删除指定的资源。
5. HEAD  HEAD方法请求一个与GET请求的响应相同的响应，但是没有响应体。
6. OPTIONS 获取http服务器支持的http请求方法，允许客户端查看服务器的性能，例如ajax跨域时的预检等。
7. CONNECT 建立一个到由目标资源标识的服务器的隧道。
8. TRACE 沿着到目标资源的路径执行一个消息环回测试，主要用于测试或诊断。
9. PATCH 是对PUT方法的补充，用来对已知资源进行局部更新。