/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 17 Feburary 2020
* License: Public Domain
*/

//sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
	var userName = window.prompt("Hi, Please Hand Over Your Name!");
	console.log("userName =", userName);
	 // Split String to array
	 var nameArray = userName.split('');
	 console.log("nameArray =", nameArray);
	 //sort the array
	 var nameArraySort = nameArray.sort();
	 console.log("nameArraySort =", nameArraySort);
	 // join array back to a string
	 var letters = /^[A-Za-z]+$/;
	  /*borrowed from w3resources*/
	 var nameSorted = nameArraySort.join('');
	 console.log("nameSorted =", nameSorted);
	 // userNAme.tolower().split("").sort().join("")
	 
	 return nameSorted;
}

//output
document.writeln ("Aha This Now Belongs To Me!: ",
	sortUserName(), "</br>");