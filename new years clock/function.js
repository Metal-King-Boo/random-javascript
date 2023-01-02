function countClock() {
	const date = new Date();
	const newYearDate = date.getFullYear() + 1;
	const newYear = new Date(newYearDate, 0, 1, 0, 0, 0);
	const estimate = newYear.getTime() - date.getTime();
	
	const days = Math.floor(estimate / (((1000 * 60) * 60) * 24));
    const hours = Math.floor((estimate % (((1000 * 60) * 60) * 24)) / ((1000 * 60) * 60));
    const minutes = Math.floor((estimate % ((1000 * 60) * 60)) / (1000 * 60));
    const seconds = Math.floor((estimate % (1000 * 60)) / 1000);

    document.getElementById("countDown").innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'minutes '+ seconds + 'seconds';

}