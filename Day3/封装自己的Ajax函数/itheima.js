function resolveData(data){
    var data_str='';
    for(var i in data) {
        // console.log(i,":",data[i]);
        data_str=data_str+i+'='+data[i]+"&";    
        }
        // 去掉最后一个&符号
        data_str=data_str.slice(0,-1);
        // console.log(data_str);
        return data_str
}

function itheima(method,url,data,fun1){
        // 1. 创建XHR对象
        var xhr=new XMLHttpRequest();
        var data_str=resolveData(data)
        if(method.toUpperCase()==='GET'){
            // 2.调用OPEN函数 指定 请求方式 与 URL地址
            // 把data里面的数据写到url里面
            url=url+"?"+data_str;
    
            xhr.open('GET',url);
            // 3. 调用 send函数，发起Ajax请求
            xhr.send();
        }else if(method.toUpperCase()==='POST'){
            // 2.调用OPEN函数 指定 请求方式 与 URL地址
            xhr.open('POST',url);

            // 3. 设置Content-Type属性（固定写法）
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            console.log(data_str);

            // 4. 调用 send函数，发起Ajax请求
            xhr.send(data_str);
        }else{
            alert("输入的请求方法不正确");
        }

        // 5.监听onreadystatechange事件
        xhr.onreadystatechange=function(){
        // 5.1 监听 xhr对象的请求状态readyState ； 与服务器相应的状态status
        if(xhr.readyState===4 && xhr.status === 200){
            var result=JSON.parse(xhr.responseText);
            fun1(result);

        }
        }



}