//选项卡效果1
        
        //误差
        var diff = -(($(window).width()-750)/2)+87;
        
        //初始化
        $('.taber .head em').animate({'left':$('.taber .head li.selected').offset().left+diff});
        
        //交互
        $('.taber .head li').hover(function(){
                $('.taber .head li').removeClass('selected');
                $(this).addClass('selected');
                
                //蓝色线条动画
                var x = $(this).offset().left;
                console.log(x);
                $('.taber .head em').stop().animate({'left':x+diff},'slow');
                
//                offset().left
                
                //body
                var n = $(this).index();
                $('.taber .body').hide().eq(n).show();
                
        })