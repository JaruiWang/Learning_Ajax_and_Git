$(function(){
    // 给时间补零的函数
    function padZero(n){
        if(n<10){
            return '0'+n
        }else{
            return n
        }
    }
    // 时间过滤器函数的定义
    template.defaults.imports.dateFormat=function(date){
        // console.log(date)
        var date=new Date(date)
        var y=date.getFullYear();
        var m=date.getMonth()+1;
        var d=date.getDate();

        var hh=date.getHours();
        var mm=date.getMinutes();
        

        return padZero(y)+'-'+padZero(m)+'-'+padZero(d)+' '+padZero(hh)+": "+padZero(mm)
        }

    // 获取新闻列表的函数
    function getNewList(){
        $.ajax({type:'GET',url:'http://www.liulongbin.top:3006/api/news' ,data:{}  ,success:function(res){
            console.log(res);
            if(res.status !==200){
               return alert('接受新闻数据失败了')
            }
            console.log(res.data);

        //  2.定义需要渲染的数据

        $.each(res.data,function(i,item){
            var datastr=template('tpl-user',item);
            console.log(datastr);
            $('#news-list').append(datastr);
        })
        }});
    }
    getNewList();




})

