var images = document.getElementsByTagName("img");
var txt=document.getElementById("txt");
var tag=false;
var comment=['很差', '差','一般','还成','很好'];
for(var i=0; i<images.length;i++){
	images[i].onmouseover=function(){
		var which=this.title;
		if(which<3){
			for(var j=0; j<which; j++){
				images[j].src="images/star1.png";
			}
			for(var j=which; j<images.length;j++){
				images[j].src="images/star0.png";
			}
		}else{
			for(var j=0; j<which; j++){
				images[j].src="images/star2.png";
			}
			for(var j=which; j<images.length;j++){
				images[j].src="images/star0.png";
			}
		}
		txt.innerHTML = comment[which-1];
	}
	images[i].onmouseout=function(){
		if(tag){
			if(this.title<2){
				for(var j=0; j<whichClick;j++){
					images[j].src="images/star1.png";
				}
				for(var j=whichClick; j< images.length;j++){
					images[j].src="images/star0.png";
				}
			}else{
				for(var j=0; j<whichClick;j++){
					images[j].src="images/star2.png";
				}
				for(var j=whichClick; j< images.length;j++){
					images[j].src="images/star0.png";
				}
			}
			txt.innerHTML = comment[whichClick-1];
			return;
		}else{
			for(var j=0; j<images.length;j++){
				images[j].src="images/star0.png";
			}
			txt.innerHTML = "";
		}
	}
	images[i].onclick = function(){
		tag=(tag==true?false:true);
		whichClick=this.title;
	}
}