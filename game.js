var red=0,green=0,blue=0,no=0,win=0;

function getRandom() {
  x = Math.random()*10000;
  x = Math.round(x)%256;
  return x ;
}

red = getRandom();
green = getRandom();
blue = getRandom();
no =  Math.round((Math.random()*10))%6;

color ="rgb("+red+","+green+","+blue+")";

box = document.querySelectorAll(".rcorners1");

document.querySelector("#red").innerHTML = red;
document.querySelector("#green").innerHTML = green;
document.querySelector("#blue").innerHTML = blue;
document.querySelector("#level").addEventListener('click',function(){
	document.querySelector("#level").classList.add("active");
	document.querySelector("#level2").classList.remove("active");
})


document.querySelector("#level2").addEventListener('click',function(){
	document.querySelector("#level2").classList.add("active");
	document.querySelector("#level").classList.remove("active");
})


console.log("rgb"+red,green,blue);
console.log(no);
box[no].style.backgroundColor=color;

for(i=0;i<box.length;++i){
	if(i!=no){
	box[i].style.backgroundColor="rgb("+getRandom()+","+getRandom()+","+getRandom()+")";
	}
}
	
$(document).ready(function(){
    $("#box1").click(function(){
		if(no!='0'&& win!=1){
        $("#box1").fadeOut("slow");
		document.querySelector("#loose").innerHTML = "Try Again";
		}
		else{
			document.querySelector("#won").innerHTML = "Correct";
			document.querySelector("#container1").style.backgroundColor=color;
			win=1;
		}
    });
});

$(document).ready(function(){
    $("#box2").click(function(){
		if(no!='1'&& win!=1){
        $("#box2").fadeOut("slow");
		document.querySelector("#loose").innerHTML = "Try Again";
		}
		else{
			document.querySelector("#won").innerHTML = "Correct";
			document.querySelector("#container1").style.backgroundColor=color;
			win=1;
		}
    });
});

$(document).ready(function(){
    $("#box3").click(function(){
		if(no!='2'&& win!=1){
        $("#box3").fadeOut("slow");
		document.querySelector("#loose").innerHTML = "Try Again";
		}
		else{
			document.querySelector("#won").innerHTML = "Correct";
			document.querySelector("#container1").style.backgroundColor=color;
			win=1;
		}
    });
});

$(document).ready(function(){
    $("#box4").click(function(){
		if(no!='3'&& win!=1){
        $("#box4").fadeOut("slow");
		document.querySelector("#loose").innerHTML = "Try Again";
		}
		else{
			document.querySelector("#won").innerHTML = "Correct";
			document.querySelector("#container1").style.backgroundColor=color;
			win=1;
		}
    });
});

$(document).ready(function(){
    $("#box5").click(function(){
		if(no!='4'&& win!=1){
        $("#box5").fadeOut("slow");
		document.querySelector("#loose").innerHTML = "Try Again";
		}
		else{
			document.querySelector("#won").innerHTML = "Correct";
			document.querySelector("#container1").style.backgroundColor=color;
			win=1;
		}
    });
});

$(document).ready(function(){
    $("#box6").click(function(){
		if(no!='5'&& win!=1){
        $("#box6").fadeOut("slow");
		document.querySelector("#loose").innerHTML = "Try Again";
		}
		else{
		 document.querySelector("#won").innerHTML = "Correct";
		 document.querySelector("#container1").style.backgroundColor=color;
		 win=1;
		}
    });
});