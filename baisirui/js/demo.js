/* 
* @Author: Marte
* @Date:   2016-05-04 13:28:16
* @Last Modified by:   Marte
* @Last Modified time: 2016-05-04 13:45:14
*/

$(document).ready(function(){
    var timer=null;
    var num=0;
    $('.banner ol li').click(function(event) {
        if(!$(this).hasClass('active')){
            $(this).addClass('active').siblings().removeClass('active');
            $('.banner ul li').fadeOut(400).eq($(this).index()).fadeIn(400);
            num=$(this).index();
        }
    });
    function autoplay(){
        num++;
        if(num>3){num=0};
        $('.banner ol li').eq(num).addClass('active').siblings().removeClass('active');
            $('.banner ul li').fadeOut(400).eq(num).fadeIn(400);
    }
    timer=setInterval(autoplay, 2000);
    $('.banner').mouseenter(function(event) {
        clearInterval(timer);
    }).mouseleave(function(event) {
       timer=setInterval(autoplay, 2000);
    });
});