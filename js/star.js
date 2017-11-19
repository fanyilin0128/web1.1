var arr=['一星评论','两星评论','三星评论','四星评论','五星评论'];
var con;
function starPic1(){
	for(var i=0;i<1;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star1.png";
	}	
    var text=document.getElementById('txt');
    text.value=arr[0];
}
function hide1(){
	if(!con){
		for(var i=0;i<1;i++){
		    var img=document.getElementsByTagName('img')[i];
		    img.src="images/star0.png";
	    }	
    var text=document.getElementById('txt');
    text.value=null;
	}
}
function qd1(){
    con=true;
    for(var i=0;i<1;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star1.png";
	}	
    var text=document.getElementById('txt');
    text.value=arr[0];
}

function starPic2(){
	for(var i=0;i<2;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star1.png";
	}	
var text=document.getElementById('txt');
text.value=arr[1];
}
function hide2(){
	if(!con){
		for(var i=0;i<2;i++){
		    var img=document.getElementsByTagName('img')[i];
		    img.src="images/star0.png";
	    }	
    var text=document.getElementById('txt');
    text.value=null;
	}	
}
function qd2(){
    con=true;
    for(var i=0;i<2;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star1.png";
	}	
    var text=document.getElementById('txt');
    text.value=arr[2];
}

function starPic3(){
	for(var i=0;i<3;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star2.png";
	}	
var text=document.getElementById('txt');
text.value=arr[2];
}
function hide3(){
	if(!con){
		for(var i=0;i<3;i++){
		    var img=document.getElementsByTagName('img')[i];
		    img.src="images/star0.png";
	    }	
    var text=document.getElementById('txt');
    text.value=null;
	}	
}
function qd3(){
    con=true;
    for(var i=0;i<3;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star2.png";
	}	
    var text=document.getElementById('txt');
    text.value=arr[2];
}

function starPic4(){
	for(var i=0;i<4;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star2.png";
	}	
var text=document.getElementById('txt');
text.value=arr[3];
}
function hide4(){
	if(!con){
		for(var i=0;i<4;i++){
		    var img=document.getElementsByTagName('img')[i];
		    img.src="images/star0.png";
	    }	
    var text=document.getElementById('txt');
    text.value=null;
	}	
}
function qd4(){
    con=true;
    for(var i=0;i<4;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star2.png";
	}	
    var text=document.getElementById('txt');
    text.value=arr[3];
}

function starPic5(){
	for(var i=0;i<5;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star2.png";
	}	
var text=document.getElementById('txt');
text.value=arr[4];
}
function hide5(){
	if(!con){
		for(var i=0;i<5;i++){
		    var img=document.getElementsByTagName('img')[i];
		    img.src="images/star0.png";
	    }	
    var text=document.getElementById('txt');
    text.value=null;
	}	
}
function qd5(){
    con=true;
    for(var i=0;i<5;i++){
		var img=document.getElementsByTagName('img')[i];
		img.src="images/star2.png";
	}	
    var text=document.getElementById('txt');
    text.value=arr[4];
}
