var str="";
function showData(nums){
	str+=nums;
	document.getElementById("result").innerHTML=str;
}
function calculate(){
	document.getElementById("result").innerHTML="";
	var resultNum=eval(str);
	resultNum+="";
	document.getElementById("result").innerHTML=resultNum;
	str=resultNum;
}
function clearData(){
	str="";
	document.getElementById("result").innerHTML=0;
}