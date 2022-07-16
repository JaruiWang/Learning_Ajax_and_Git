## 什么是XMLHttpRequest
XMLHttpRequest简称xhr，是浏览器提供的Javascript对象，通过它，可以请求服务器上的数据资源。
浏览器中提供的XMLHttpRequest用法比较复杂，所以jQuery对XMLHttpRequest进行了封装，
例如：$.get()  $.post()  $.ajax()

## 使用xhr发起GET请求
```js
    // 1. 创建XHR对象
    var xhr=new XMLHttpRequest();

    // 2.调用OPEN函数 指定 请求方式 与 URL地址
    xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks');

    // 3. 调用 send函数，发起Ajax请求
    xhr.send();

    // 4.监听onreadystatechange事件
    xhr.onreadystatechange=function(){
        // 4.1 监听 xhr对象的请求状态readyState ； 与服务器相应的状态status
        if(xhr.readyState===4 && xhr.status === 200){
            // 4.2 打印返回的内容
            console.log(xhr.responseText);

        }
    }
    
```

### 使用xhr发起带参数的GET请求
只需要在调用xhr.open期间，为URL地址指定参数即可。
这种在URL地址后面拼接的参数，如 ?id=1， 叫做 查询字符串。
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks?id=1');

### 查询字符串
查询字符串：是指在URL的末尾加上用于向服务器发送信息的字符串（变量）。
格式：将英文？放在URL的末尾，然后再加上 参数=值 ，想加上多个参数的话， 使用&符号 进行分隔。
```js
// 不带参数的
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks');
// 带一个参数
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks?id=1');
// 带两个参数
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记');
```

### 什么是URL编码
URL地址中，只允许出现英文相关的字母，标点符号，数字，因此，在URL地址中不允许出现中文字符。
如果URL中需要包含中文字符，则必须对中文字符进行编码。

http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
编码后：
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0

- 编码函数 encodeURI()
- 解码函数 decodeURI()
一般情况下，浏览器会自动进行解码和编码，不需要程序员进行处理。
```js
    var str='黑马程序员';
    var str2=encodeURI(str);
    console.log(str2);  // 输出的结果是%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98
    console.log('------------');
    var str3=decodeURI('%E9%BB%91%E9%A9%AC')
    console.log(str3)
```

## 使用xhr发起POST请求的步骤
```js
    // 1. 创建XHR对象
    var xhr=new XMLHttpRequest();

    // 2.调用OPEN函数 指定 请求方式 与 URL地址
    xhr.open('POST','http://www.liulongbin.top:3006/api/addbook');

    // 3. 设置Content-Type属性（固定写法）
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    // 4. 调用 send函数，发起Ajax请求
    xhr.send('bookname=水浒&author=施耐庵12&publisher=天津图书出版社');

    // 5.监听onreadystatechange事件
    xhr.onreadystatechange=function(){
        // 5.1 监听 xhr对象的请求状态readyState ； 与服务器相应的状态status
        if(xhr.readyState===4 && xhr.status === 200){
            console.log(xhr.responseText);

        }
    }

```

## 什么是数据交互格式

数据交互格式，就是服务器端与客户端之间进行的数据传输与交换的格式。
前端领域，经常提及的两种数据交互格式分布是XML和JSON。其中XML用的非常少。
所以，我们重点要学习的数据交互格式就是JSON。

### 1.什么是XML
XML的英文全称是Extensible Markup Language,即可扩展标记语言。因此，XML和HTML类似，也是一种标记语言。

XML和HTML虽然都是标记语言，但是，它们两者之间没有任何关系。
- HTML被设计用来描述网页的内容，是网页内容的载体；
- XML被设计用来传输和存储数据，是数据的载体。

### 2. 什么是JSON
概念：JSON的英文全称是JavaScript Object Notation,即'JavaScript对象表示法'。
JSON就是JavaScript对象和数据的字符串表示法，它使用文本表示一个JS对象或数组的信息，
因此，JSON的本质是字符串。
作用：JSON是一种轻量级的文本数据交换格式，在作用上类似于XML,专门用于存储和传输数据，
但是JSON比XML更小，更快，更易解析。

JSON通过字符串来表示JavaScript的对象和数组两种结构。通过这两种结构的相互嵌套，可以表示各种复杂的数据结构。

- **对象结构**  对象结构在JSON中表示为{}括起来的内容。数据结构为{key:value,key:value,...}的键值对结构。
其中，key必须是使用英文的双引号包裹的字符串。
value的数据类型可以是数字，字符串（也要双引号），布尔值，null，数组和对象6种类型。
{
    "name":"zs",
    "age":20,
    "gender":"男",
    "address":null,
    "hobby":["吃饭","睡觉","打豆豆"]

}

- **数组结构** 数组结构在JSON种表示为[]括起来的内容。数据结构为["c","java",30,true...]  
数组种的数据类型可以是数字，字符串（也要双引号），布尔值，null，数组和对象6种类型。
例如：
["c",null,flase,true] 
[100,200,300.5]
[{"name":"zs","age":20},{"name":"ll","age":30}]
[["c",null,flase,true] ,[100,200,300.5]]

##  JSON和JS对象之间的转换
```js
    // 通过JSON.parse()将JSON对象转换为JS对象
    var jsonStr='{"a":"Hello","b":"world"}';
    var obj=JSON.parse(jsonStr);
    console.log(obj);

    // 通过JSON.stringify()将JS对象转换为JSON对象
    var obj2={a:'hello',b:'world',c:false};
    var str=JSON.stringify(obj2);
    console.log(str);
    console.log(typeof str);
```

## 序列化和反序列化
把数据对象转化为字符串的过程，叫做序列化。例如调用JSON.stringify()函数操作，叫做JSON序列化。
把字符串转化为数据对象的过程，叫做反序列化。例如调用JSON.parse()函数操作，叫做JSON的反序列化。

## XRL Level2新功能
- 设置HTTP请求时限
```js
    // 设置超时时间
    xhr.timeout=300;
    //  超时之后的回调函数
    xhr.ontimeout=function(){
        console.log("请求超时了！");
    }
```

- FormData对象管理表单数据
```js
    // 1. 新建 FromData对象
    var fd=new FormData();

    // 2. 为了FormData添加表单项
    fd.append('uname','zs');
    fd.append('upwd','123456');

    // 3. 创建XHR对象
    var xhr=new XMLHttpRequest();
    // 4.调用OPEN函数 指定 请求方式 与 URL地址
    xhr.open('POST','http://www.liulongbin.top:3006/api/formdata');

    //  5.直接提交FormData对象,这与网页提交表单的效果完全相同
        xhr.send(fd);
```

- 自动将表单对象填充到FormData对象
```js
    // 根据form表单创建FormData对象,会自动将表单对象填充到FormData对象中
    var fd=new FormData(form);
```

## 上传文件
```html
    <!-- 文件选择框 -->
    <input type="file" id="file1">
    <!-- 上传文件的按钮 -->
    <button id="btnUpload">上传文件</button>
    <!-- img 标签 ，用来显示上传成功以后的图片 -->
    <img src="" alt="" id="img" width="800">

    <script>
        // 验证是否选择了文件
        var btnUpload=document.querySelector("#btnUpload");
        btnUpload.addEventListener('click',function(){    
            var files=document.querySelector("#file1").files;
            console.log(files.length);
            if(files.length<=0){
              return  alert('请选择要上传的文件！');
            }
            // console.log("用户选择了文件");
            // 1. 新建 FromData对象
            var fd=new FormData();

            // 2. 将用户选择的文件添加到FormData
            fd.append('avatar',files[0]);

             // 3. 创建XHR对象
            var xhr=new XMLHttpRequest();
            // 4.调用OPEN函数 指定 请求方式 与 URL地址
            xhr.open('POST','http://www.liulongbin.top:3006/api/upload/avatar');

            //  5.直接提交FormData对象,这与网页提交表单的效果完全相同
            xhr.send(fd);

            // 4.监听onreadystatechange事件
            xhr.onreadystatechange=function(){
            // 4.1 监听 xhr对象的请求状态readyState ； 与服务器相应的状态status
            if(xhr.readyState===4 && xhr.status === 200){
                // var result=JSON.parse(xhr.responseText);
                var data=JSON.parse(xhr.responseText);
                console.log(data);
           
                if(data.status===200){// 文件上传成功
                    document.querySelector("#img").src="http://www.liulongbin.top:3006"+data.url;
                }else{
                    alert(data.message);
                }
            }
        }
        })
    </script>
```

## 显示文件的上传进度
新版本XMLHttpRequest对象中，可以通过监听xhr.upload.onprogress事件，来获取到文件的上传进度。
```js
    // 1. 新建 FromData对象
    var fd=new FormData();

    // 2. 将用户选择的文件添加到FormData
    fd.append('avatar',files[0]);

        // 3. 创建XHR对象
    var xhr=new XMLHttpRequest();
    xhr.upload.onprogress=function(e){
        // e.lengthComputable是一个布尔值，表示当前上传的资源是否具有可计算的长度
        if(e.lengthComputable){
            // e.loaded 已传输的字节
            // e.total 需要传输的总字节
            var percentComplete=Math.ceil((e.loaded/e.total)*100);
        }
    }

```

## 什么是axios?
Axios是专注于网络数据请求的库.
相比于原生的XMLHttpRequest对象,axios简单易用,
相比于jQuery,axios更加轻量化,只专注于网络数据请求.

