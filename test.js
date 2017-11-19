var com=new Array(5);
com[0]="非常不满意";
com[1]="不满意";
com[2]="一般";
com[3]="满意";
com[4]="非常满意";
var con=false;
function starPic(i){	
	if(i<2)
	{
		for(var n=0;n<=i;n++)
		{
			var img=document.getElementsByTagName('img')[n];
			img.src="images/star1.png";
		}
		var text=document.getElementById('text1');
		text.value=com[n-1];
	}
	else
	{
		for(var n=0;n<=i;n++)
		{
			var img=document.getElementsByTagName('img')[n];
			img.src="images/star2.png";
		}
		var text=document.getElementById('text1');
		text.value=com[n-1];
	}
}
function hide(i){
	if(!con)
	{
		var n;
		for(n=0;n<=i;n++)
		{
			var img=document.getElementsByTagName('img')[n];
			img.src="images/star0.png";
		}
		var text=document.getElementById('text1');
		text.value=null;
	}
}
function qd(i)
{
	con=true;
	if(i<2)
	{
		for(var n=0;n<=i;n++)
		{
			var img=document.getElementsByTagName('img')[n];
			img.src="images/star1.png";
		}
		var text=document.getElementById('text1');
		text.value=com[n-1];
	}
	else
	{
		for(var n=0;n<=i;n++)
		{
			var img=document.getElementsByTagName('img')[n];
			img.src="images/star2.png";
		}
		var text=document.getElementById('text1');
		text.value=com[n-1];
	}
}