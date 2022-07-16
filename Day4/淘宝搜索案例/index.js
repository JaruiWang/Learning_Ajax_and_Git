$(function(){
    // 定义延时器的Id
    var timer=null;
    var cacheObj={};
    $('#input').on('keyup',function(){
        var keywords=$(this).val().trim();
        // 判断用户输入的内容是否为空
        if(keywords.length<=0){
            return $('#suggest-list').empty().hide();
        }

        if(cacheObj[keywords]){
            return renderSuggestList(cacheObj[keywords]);
        }

        // 下面要获取搜索建议列表 
        // 清除定时器，并且重新调用防抖函数
        clearTimeout(timer);  
        debounceSearch(keywords);  

    })


    function getSuggestList(kw){
        $.ajax({
            url:'https://suggest.taobao.com/sug?q='+kw,
            dataType:'jsonp',
            success:function(res){
                console.log('res:',res);
                renderSuggestList(res);

                // 1.获取用户输入的内容当作 键
                var k=$('#input').val().trim();
                // 2. 将res数据作为值进行缓存
                cacheObj[k]=res;
                }
        })

    }

    function renderSuggestList(res){
        if(res.result.length<=0){
            return $('#suggest-list').empty().hide();

        }

    //  2.定义需要渲染的数据 返回的res本身就是这个格式，不需要处理
    // var data={result:result_value};

        var datastr=template('tpl-suggestList',res);

        $('#suggest-list').html(datastr);
        $('#suggest-list').show();
    }

    // 定义防抖函数
    function debounceSearch(keywords){
         timer=setTimeout(function(){
            getSuggestList(keywords)
        },500)
    }

})