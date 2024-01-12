var dateDiffInDays = function (date1, date2) {
    var time_difference = date2.getTime() - date1.getTime();
	 var days_difference = time_difference / (1000 * 60 * 60 * 24); 
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
