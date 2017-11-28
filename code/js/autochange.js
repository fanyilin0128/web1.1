
var pic1=document.getElementById("picScroll");
var pic2=document.getElementById("picScroll1");
var pic3=document.getElementById("picScroll2");
function changeToLeft(){
	if(pic1.scrollLeft-pic2.offsetWidth>=0)
		pic1.scrollLeft=0;
	else
		pic1.scrollLeft++;
}
var t;
function zhouqi(){
	t=setInterval(changeToLeft,10);
}
function stop(){
	clearInterval(t);
}
