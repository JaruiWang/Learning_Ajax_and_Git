function getCommentList(){
    $.ajax({type:'GET',url:'http://www.liulongbin.top:3006/api/cmtlist' ,data:{}  ,success:function(res){
        // console.log(res);
        if(res.status!==200) return alert('获取评论列表失败！')
        console.log(res);
        var  rows=[];
        $.each(res.data,function(i,item){
            rows.push(' <li class="list-group-item"> \
              <span class="badge" style="background-color: #F0AD4E;"> \
              '+item.time +'</span><span class="badge" style="background-color: #5bc0de;"> \
              '+ item.username+'</span> '+ item.content+' </li>')
        })

        $('#cmt-list').empty().append(rows.join(' '));
    }});
}
getCommentList();

$(function(){
    $('#formAddCmt').on('submit',function(e){
        // console.log(123);  
        // 阻止表单的提交和页面的跳转
        e.preventDefault();
        var valuestr=$(this).serialize();
        // valuestr变量存放的是一个字符串'username=a&content=123'
        console.log(valuestr);  
        // var valuestr={"username": "吴承恩","content": "西游记"} ;
        
        $.post('http://www.liulongbin.top:3006/api/addcmt',valuestr,function(res){
            if(res.status!==201) return alert('发表评论失败！')
                        console.log(res);
                        getCommentList();
                        $('#formAddCmt')[0].reset();
                })

    })
})