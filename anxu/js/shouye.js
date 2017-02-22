// JavaScript Document
$(document).ready(function(e) {
	//导航搜索
	$('.search_box .txt').focus(function(){
		if(this.value==this.defaultValue){
			this.value='';
			this.style.color='#333';
		}else{
			this.style.color='#333';
			}
		}).blur(function(){
		if(this.value==''){this.value=this.defaultValue;this.style.color='#ccc'}
		else{this.style.color='#333'}
			})
	//导航
	$('.nav ul li.fd').mouseover(function(){
		var i=$(this).index()-1;
		if(i<0||i>4) return false;
		$('.wd').eq(i).stop().slideDown(500);
		}).mouseout(function(){
			var i=$(this).index()-1;
			$('.wd').eq(i).stop().slideUp(500);
			})
	//banner 轮播
    var dianKey=0;
	var imgKey=0;
	var timer;
	function next(){
		dianKey++;
		if(dianKey>3){
			dianKey=0;
			}
		$('.btnList li').eq(dianKey).addClass('active').siblings('li').removeClass('active');
		imgKey++;
		if(imgKey>4){
			imgKey=1;
			$('.banner ul').eq(0).css('left',0);
			}	
		$('.banner ul').eq(0).stop().animate({'left':imgKey*-1366},500);
		}
	function prev(){
		dianKey--;
		if(dianKey<0){
			dianKey=3;
			}
			$('.btnList li').eq(dianKey).addClass('active').siblings('li').removeClass('active');
		
		imgKey--;
		if(imgKey<0){
			imgKey=3;
			$('.banner ul').eq(0).css('left',-1366*4);
			}
			$('.banner ul').eq(0).stop().animate({'left':imgKey*-1366},500);
	}
	
	$('.left').click(prev);
	$('.right').eq(0).click(next);
	
	$('.btnList li').click(function(event){
		var i=$(this).index();
		$('.btnList li').eq(i).addClass('active').siblings('li').removeClass('active');
		$('.banner ul').eq(0).stop().animate({'left':i*-1366},500);
		imgKey=i;
		dianKey=i;
		})
	timer=setInterval(next,7000);
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(next,7000);
		});
})