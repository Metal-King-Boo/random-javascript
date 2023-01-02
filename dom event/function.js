var counter = 0;
var increase = 100;

function changePicR() {
	document.getElementById('pepeIMG').src = "REEEE Pepe.gif";
	document.getElementById('pepeIMG').alt = "REEEE Pepe";
}

function changePicS() {
	document.getElementById('pepeIMG').src = "Sweating Pepe.gif";
	document.getElementById('pepeIMG').alt = "Sweating Pepe";
}

function movePic() {
	var words = "";
	if(counter == 0) {
		words += increase;
		words += "px"
		increase += 100;
		counter++;
		document.getElementById('pepeIMG').style.marginLeft = "750px";
		document.getElementById('pepeIMG').style.marginTop = increase;
		
	}
	
	else {
		words += increase;
		words += "px"
		increase += 100;
		counter--;
		document.getElementById('pepeIMG').style.marginLeft = "0px";
		document.getElementById('pepeIMG').style.marginTop = increase;
	}
	
}

function alertPic() {
	alert("ouch!");
	movePic();
}