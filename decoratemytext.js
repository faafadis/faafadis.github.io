// "use strict";
window.onload = function () {
	var intervalId=0;
	var speed=500;
	var Button=document.getElementById("btn");
	Button.onclick=clickButton;
	
	var checkbox1=document.getElementById("checked");
	checkbox1.onchange=changeCheck;
	
	function clickButton(){
		 if(intervalId==0)
		 intervalId=setInterval(increase, speed);
		 else{
			 clearInterval(intervalId);
			 intervalId=0;
		 }
		
		alert(fontSize);
	}
	function increase(){
		changefont();
	}
	function changefont(){
		 var elem = document.getElementById("sample");
		 var fontSize = window.getComputedStyle(elem, null).getPropertyValue("font-size");
		 fontSize=2+parseInt(fontSize);
		 document.getElementById("sample").style.fontSize=fontSize+"px";	
	}
	function changeCheck(){
		let sel =document.querySelector('#checked').checked;
		if(sel==true){
			document.getElementById("sample").style.color="green";
			document.getElementById("sample").style.textDecoration="underline";
			document.getElementById("sample").style.fontWeight="bold";
			document.getElementById("sample").style.textAlign="right";
			document.body.style.backgroundImage="url('hundred-dollar-bill.jpg')";
		}
		else{
			document.getElementById("sample").style.color="black";
			document.getElementById("sample").style.textDecoration="none";
			document.getElementById("sample").style.fontWeight="normal";
			document.body.style.backgroundImage="none";
		}
		
	}
}

