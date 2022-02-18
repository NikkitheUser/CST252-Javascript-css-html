/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 26 Feburary 2020
* License: Public Domain
*/



//sortUserName - a function that takes user input and sorts the letters of their name
/*debugger;
function sortUserName() {
	var input =document.getElementById("my-input")
	console.log("input =", input);
	 // Split String to array
	 var nameArray = input.split('');
	 console.log("nameArray =", nameArray);
	 //sort the array
	 var nameArraySort = nameArray.sort();
	 console.log("nameArraySort =", nameArraySort);
	 // join array back to a string
	 var letters = /^[A-Za-z]+$/;
	  /borrowed from w3resources/
	 var nameSorted = nameArraySort.join('');
	 console.log("nameSorted =", nameSorted);
	 // userNAme.tolower().split("").sort().join("")
	 
	 return nameSorted;
}

//lets make a fucking button
var button = document.getElementById('my-button');
//input value discovered
inputValue = document.getElementById('my-input').value;
//the event occurs
button.addEventListener('click',  function sortUserName(){
	//input value discorvered and makes element p
	var input = document.getElementById("my-input").value;
	var newEl = document.createElement("p");
	//elemtn p is now a text and is in the output div

	newEl.innerText = input;
	document.getElementById("output").appendChild(newEl);
	document.getElementById("my-input").value = "";
	sortUserName();

} )

;
*/ //this button is linked to the function with a CLICK
		var button = document.getElementById('my-button')
			.addEventListener('click', function() {

// gather the ingredients to make a name soup
		var userName = document.getElementById("my-input").value;


// this single string will now spilt apart, sort and join the letters together
		var nameSorted = userName.split('').sort().join('');



// we will now force a new element 
		var newEl = document.createElement("p");


// this new innertext will harbor our horrible amalgamation
		newEl.innerText = nameSorted;


// append the child to show off our creation
		document.getElementById("output")
			.appendChild(newEl);
debugger;

});

