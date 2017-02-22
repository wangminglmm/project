
$(document).ready(function(){
    //fullpage部分
    $('#fullpage').fullpage({
        verticalCentered: false,
         anchors:['section1','section2','section3','section4'],
        css3:true,
        menu:'#r-nav',
        menu:'#top-nav',
        navigationTooltips: ['#section1','#section2','#section3','#section4'],
        onLeave:function(index,nextIndex,direction ){
            $('.fp-nav li').eq(nextIndex-1).addClass('current').siblings().removeClass('current');
            $('.top-nav li').eq(nextIndex-1).addClass('current').siblings().removeClass('current');
        },
        afterLoad:function(anchorLink,index ){
            if(index==2){
                $('.show-wrap').removeClass('out');
            }else{
                $('.show-wrap').addClass('out');
            }
        }
    });

        
    
    //第一屏轮播
    (function(){
        var num=0;
    var timer=null;
    var newli01=$('.page1 .li01').clone(true);
    $('.page1>ul').append(newli01);
    function next(){
        num++;
        if(num>3){
            $('.page1>ul').css('left',0);
            num=1;
        };
        panduan();
        $('.page1>ul').stop().animate({left:-num*100+'%'}, 400);
    };
    timer=setInterval(next, 6000);
    $('.page1 .next').click(function(event) {
        next();
    });
    $('.page1 .next,.page1 .prev').mouseenter(function(event) {
        clearInterval(timer);
    }).mouseleave(function(event) {
         timer=setInterval(next, 6000);
    });
    $('.page1 .prev').click(function(event) {
        num--;
        if(num<0){
            $('.page1>ul').css('left',-300+'%');
            num=2;
        };
        $('.page1>ul').stop().animate({left:-num*100+'%'}, 400);
        panduan();
    });
    function panduan(){
        if(num==0||num==3){
            $('.page1 .li01').removeClass('out');
        };
        if(num==1){
            $('.page1 .li02').removeClass('out').siblings().addClass('out');
        };
        if(num==2){
            $('.page1 .li03').removeClass('out').siblings().addClass('out');
        };
    };
    panduan();
    })();
    
    //page2 web展示
    $('.show-web li').hover(function(event) {
        $(this).toggleClass('current').siblings().toggleClass('out');
    });
    //page2 tab栏切换
    $('.page2 ol li').click(function(event) {
        $(this).addClass('current').siblings().removeClass('current');
        $('.show-wrap>ul>li').eq($(this).index()).fadeIn(800).siblings().fadeOut(800);
        //page2 app展示
        if($('.page2 ol li').eq(1).hasClass('current')){
            setTimeout(function(){
                clearInterval(timer1);
                showapp();
            }, 500);
        };
        if($('.page2 ol li').eq(2).hasClass('current')){
            $('.show-icon').removeClass('out');
        }else{
            $('.show-icon').addClass('out');
        }
    });
    var timer1;
    function showapp(){
        var Deg=360 / ($('.app-wrap img').length);
            $('.app-wrap img').each(function(i){
                $(this).css({
                'transform':'rotateY(' + i*Deg + 'deg) translateZ(350px)',
                'transition':'1s '+($('.app-wrap img').length-i)*0.1+'s',
                }).attr('ondragstart','return false')
            }
            );//each遍历
            var x,y;
            var roY=0,roX=-10;
            var i=1;
                //设置
                var fun1=function(){
                            roY+=i;
                            $('.app-wrap').css('transform','perspective(1500px) rotateX('+roX+'deg) rotateY('+roY+'deg)');
                        };
                  timer1=setInterval(fun1,30);
              $(".app-wrap img").mouseenter(function(){
                    clearInterval(timer1);
                }).mouseleave(function(){
                     clearInterval(timer1);
                     timer1=setInterval(fun1,30);
                    });
    };
    //app结束 
    //icon开始
     $("a[rel=group]").fancybox({ 
        'titlePosition' : 'inside',
        'overlayColor':'#fcf', 
        'speedIn':'400',
        'cyclic': 'true', 
        'easingIn':'swing'
    }); 
     $('.show-icon li').hover(function() {
         $(this).toggleClass('out');
     });
});