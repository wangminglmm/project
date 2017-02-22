// JavaScript Document
$(document).ready(function(e) {
	var val='';
    $('.search_box .txt').focus(function(){
		val=this.value;
		this.value='';
		}).blur(function(){
			this.value=val;
			})
});