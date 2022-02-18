
/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 13 Feburary 2020
* License: Public Domain
*/

// Define Variables
myTransport = ["Lexus ES330", "Bus", "Walking"];

myMainRide = {
	make: "Lexus",
	model: "ES330",
	color: "grey",
	year: 2004,
	age: function() {
		return 2019 - age
	}
}

// output
document.writeln("kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'),"</pre>");