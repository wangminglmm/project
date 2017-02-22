
$(document).ready(function() {
    
    //无缝滚动
    var myHtml=$('#wfgd').html();
    myHtml+=myHtml;
    $('#wfgd').html(myHtml);
    var num=0;
    var timer=null;
    function move(){
        num--;
        if(num<-1089){
            num=0;
        }
        $('#wfgd').css('left',num);
    }
    timer=setInterval(move, 30);
    $('#wfgd').mouseenter(function(event) {
        clearInterval(timer);
    }).mouseleave(function(event) {
        timer=setInterval(move, 30);
    });
//banner轮播
    (function(){
        var timer1=null;
    var num1=0;
    $('.banner-bd ol li').click(function(event) {
        if(!$(this).hasClass('current')){
        $(this).addClass('current').siblings().removeClass('current');
                $('.banner ul li').eq($(this).index()).hide().fadeIn(400).siblings().fadeOut(400);
                    num1=$(this).index();
        }
    });
    function autoplay(){
        num1++;
        if(num1>2){
            num1=0;
        }
        $('.banner-bd ol li').eq(num1).addClass('current').siblings().removeClass('current');
        $('.banner ul li').eq(num1).hide().fadeIn(400).siblings().fadeOut(400);
    }
    timer1=setInterval(autoplay, 3000)
    $('.banner-bd').mouseenter(function(event) {
        clearInterval(timer1);
    }).mouseleave(function(event) {
        timer1=setInterval(autoplay, 3000)
    });
    })();
    
});
// window.onload=function(){
//     var oUl=document.getElementById('wfgd');
//     oUl.innerHTML+=oUl.innerHTML;
//     var num=0;
//     function move(){
//         num-=1;
//         if(num<-1089){
//             num=0;
//         }
//         oUl.style.left=num+'px';
//     }
//     timer=setInterval(move, 30);
//     oUl.onmouseover=function(){
//         clearInterval(timer);
//     }
//     oUl.onmouseout=function(){
//         timer=setInterval(move, 30);
//     }
// }