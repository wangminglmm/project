// JavaScript Document
window.onload=function(){
	var oUl=document.getElementById('nav-ul');
    var aLi=oUl.getElementsByTagName('li')
	var aA=oUl.getElementsByTagName('a');
	for(var i=1; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
			for(var i=1; i<aLi.length; i++){
				aLi[i].className='';
			}
				this.className='current';
		}
		aLi[i].onmouseout=function(){
			for(var i=1; i<aLi.length; i++){
				aLi[i].className='';
			}
		}
	}
}