var row = '';
var current = new Date();
var month = current.getMonth() + 1;
var year = current.getFullYear();

function createCalendar(month, year) {
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
	var firstDay = new Date(year, month - 1, 1);
	var lastDay = new Date(year, month, 0);
	var today = new Date();
	var thisDay = today.getDate();
	var thisYear = today.getFullYear();
	var thisMonth = today.getMonth() + 1;
	var daysMonth = lastDay.getDate();
	var dayOne = firstDay.getDay();
	var counter = dayOne;
	
	row = '<table>';
	row += '<tr>';
	row += '<th colspan="7">' + monthNames[month - 1] + ' ' + year + '</th>';
	row += '</tr>';
	
	columnHead();
	padFront(dayOne);
	daysAreNumbered(daysMonth, counter, thisDay, thisYear, year, thisMonth, month);	
	row += '</table>';
	
	document.getElementById("calenDiv").innerHTML = row;
	
}

function emptyPaddy() {
	row+='<td id="emptyCell"></td>';
}

function columnHead() {
	row += '<tr>';
	row += '<th id="daysOfWeek">S</th>';
	row += '<th id="daysOfWeek">M</th>';
	row += '<th id="daysOfWeek">T</th>';
	row += '<th id="daysOfWeek">W</th>';
	row += '<th id="daysOfWeek">T</th>';
	row += '<th id="daysOfWeek">F</th>';
	row += '<th id="daysOfWeek">S</th>';
	row += '</tr>';
}

function padFront(x) {
	for(i = 0; i < x; i++) {
		emptyPaddy();
	}
}

function padEnd(z) {
	for(i = z; i < 7; i++) {
		emptyPaddy();
	}
}

function daysAreNumbered(y, count, tDay, tYear, sYear, tMonth, sMonth) {
	for(i = 1; i <= y; i++) {
		if (tDay == i && tYear == sYear && tMonth == sMonth) {
			row += '<th id="currentDay">' + i + '</th>';
			count++;
		}
		
		if (count == 0) {
			row += '<td id="weekEnd">' + i + '</td>';
			count++;
		}
		else if (count == 6) {
			row += '<td id="weekEnd">' + i + '</td>';
			count++;
		}
		else {
			row += '<td id="numberedDay">' + i + '</td>';
			count++;
		}
		if (count == 7) {
			row += '<tr>';
			count = 0;
		}
	}
	padEnd(count);
	row += '</tr>';
	counter = count;
}

function previousMonth() {
	if(month > 1) {
		month -= 1;
		createCalendar(month, year);
	}
	else {
		month = 12;
		year -= 1;
		createCalendar(month, year);
	}
}

function previousYear() {
	year -= 1;
	createCalendar(month, year);
}

function createThisCalendar() {
	month = current.getMonth() + 1;
	year = current.getFullYear();
	createCalendar(month, year);
}

function nextMonth() {
	if(month < 12) {
		month += 1;
		createCalendar(month, year);
	}
	else {
		month = 1;
		year += 1;
		createCalendar(month, year);
	}
}

function nextYear() {
	year += 1;
	createCalendar(month, year);
}