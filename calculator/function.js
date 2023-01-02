// broad scope var that are used in almost all the functions
var eqCheck = 0;
var memoryStick = 0;

// deletes the latest character (backspace)
function deleteChar() {
	var str = document.getElementById("calcScreen").value;
	var strLen = str.length - 1;
	str = str.slice(0, strLen);
	document.getElementById("calcScreen").value = str;
}

// clears the calculator screen 
function clearScreen() {
	document.getElementById("calcScreen").value = "";
}

// basic setup for solving powers in the solution function
function mathSquare() {
	if (eqCheck == 1){
		solution();
		memoryStick = document.getElementById("calcScreen").value;
		document.getElementById("calcScreen").value += "^";
	}
	else {
		memoryStick = document.getElementById("calcScreen").value;
		document.getElementById("calcScreen").value += "^";
	}
}

// function for putting in the four core operations
function operationals(operation) {
	// if statement where it checks if there is a previous operation to solve
	if (eqCheck == 1){
		solution();
		document.getElementById("calcScreen").value += operation;
		eqCheck = 1;
	}
	
	// checks if there is a power to solve before continuing
	else if (memoryStick != 0){
		solution();
		document.getElementById("calcScreen").value += operation;
		eqCheck = 1;
	}
	
	// if not then just apply the operation symbol
	else {
		document.getElementById("calcScreen").value += operation;
		eqCheck = 1;
	}
}

// basic number inputting function
function numerals(symbol) {
	document.getElementById("calcScreen").value += symbol;
}


function solution() {
	// if dividing by zero then give COMPUTATIONAL ERROR
	if (document.getElementById("calcScreen").value == "0/0"){
		document.getElementById("calcScreen").value = "CANNOT DIVIDE BY ZERO";
		document.getElementById("memScreen").value = "COMPUTATIONAL ERROR";
	}
	
	// solutions for when the power button is used
	else if (memoryStick != 0){
		var memLength = memoryStick.length;
		var pwrStr = document.getElementById("calcScreen").value;
		var pwrStrLen = pwrStr.length;
		pwrStr = pwrStr.slice(memLength + 1, pwrStrLen);
		
		// console.log(pwrStr)
		
		var truePwr = pwrStr * -1;
		var memoryStick2 = memoryStick
		var i;
		
		// checks if solving by a negative power
		if (pwrStr < 0){
			for (i = 1; i < truePwr; i++){
			memoryStick2 *= memoryStick;
			}
			memoryStick2 =  1 / memoryStick2;
		}
		else {
			for (i = 1; i < pwrStr; i++){
			memoryStick2 *= memoryStick;
			}
		}
		
		document.getElementById("memScreen").value = "";
		document.getElementById("memScreen").value = document.getElementById("calcScreen").value + "=" + memoryStick2;
		document.getElementById("calcScreen").value = memoryStick2;
		memoryStick = 0;
	}
	
	// how most operations will be solved
	else {
		// try-catch method to catch errors found in runtime
		try {
			memData();
			document.getElementById("calcScreen").value = eval(document.getElementById("calcScreen").value);
		}
		catch(err) {
			document.getElementById("calcScreen").value = "DOES NOT COMPUTE";
			document.getElementById("memScreen").value = "FORMAT ERROR";
		}
	}
	
	// error check if the value is NaN 
	eqCheck = 0;
	if (document.getElementById("calcScreen").value == "NaN"){
		document.getElementById("calcScreen").value = "ADVANCED! REWRITE IT!";
		document.getElementById("memScreen").value = "FORMAT ERROR";
	} 
	
}

// general function for inputting the previous data in the memory tape
function memData() {
	document.getElementById("memScreen").value = "";
	document.getElementById("memScreen").value = document.getElementById("calcScreen").value + "=" + eval(document.getElementById("calcScreen").value);
	
}

