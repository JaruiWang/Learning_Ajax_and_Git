$(function(){
    // 初始化右侧滚动条
    // resetui()这个方法定义在scroll.js中
    // resetui();

    $('#btnSend').on('click',function(){
        var text=$('#ipt').val().trim();
        // console.log('a1');

        if(text.length<=0){
            return $('#ipt').val('');
        }

        // 如果用户输入聊天内容,则将内容追加到页面上显示
        $('#talk_list').append('<li  class="right_word"><img src="./img/person2.png" alt=""><span>'+ text+'</span> </li>')
        console.log('aa');
        $('#ipt').val('');
        // 重置滚动条的位置
        // resetui();

        // 发起请求,获取机器人返回的聊天内容
        getMsg(text);
    })

    // 获取聊天机器人发送回来的消息
    function getMsg(text){
        $.ajax({type:'GET',
        url:'http://www.liulongbin.top:3006/api/robot' ,
        data:{
            spoken:text
        }  ,
        success:function(res){
            console.log(res);
            if(res.message==='success'){
                var msg=res.data.info.text;
                $('#talk_list').append('<li  class="left_word"><img src="./img/person1.png" alt=""><span>'+ msg+'</span> </li>')
       

            }
        }});
    }
})