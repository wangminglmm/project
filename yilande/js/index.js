// JavaScript Document
$(document).ready(function(e) {

    $('.banner ol li').click(function(){
		var now=$(this).index();
		if(!$(this).hasClass('current')){
			$(this).addClass('current').siblings('li').removeClass('current');
		$('.banner ul li').eq(now).hide().fadeIn('slow').siblings().fadeOut('slow');
		num=now;
		}
		})
		var timer=null;
		var num=0;
		function show(){
			num++;
			if(num>1){
				num=0;
				}
			$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('.banner ul li').eq(num).hide().fadeIn('slow').siblings().fadeOut('slow');
		}
		timer=setInterval(show,2000);
		$('.banner').mouseover(function(){
			clearInterval(timer);
			}).mouseout(function(){
				clearInterval(timer);
				timer=setInterval(show,2000)
				})
			
});