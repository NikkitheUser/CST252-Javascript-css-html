/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 04 March 2020
* License: Public Domain
*/

//failed attempt
/*function fizzy(maxNums, factorObj){
	for(var num=0; num<maxNums; num++){
		var outputStr= "";
		for (var factor in factorObj){
			if (num % factor==0){
				outputStr += factorObj[factor];
			}
		}
		if (outputStr){
			outputStr = " - " + outputStr + "!";
		}
		outputToPage(num.toString() + outputStr)
	}
}
document.getElementById("go").addEventListener("click", function(){
	var max = document.getElementById("max").value;
	console.log("max", max)
})
*/
 // this is where our looping boy begins
 function fizzBuzz(){
 	var output = "";
 	for (i = 1; i <= 200; i++){
 		var outputstr = "";
 		if (i % 3 == 0){
 			outputstr += "Ruh";
 		}

 		if (i % 5 == 0){
 			outputstr += "Roh";
 		}

 		if (i % 7 == 0){
 			outputstr += "Raggy";
 		}

 		if (i % 9 == 0){
 			outputstr += "Scooby";
 		}

 		if (outputstr){
 		 	outputstr += "!";
 		 	output += outputstr + "<br>";
 		 }
 		 else {
 		 	output += i + "<br>";
 		 }
 	}
 	debugger;
 	
 	var newEl = document.createElement('p');
 	newEl.innerHTML = output;
 	document.getElementById("output").appendChild(newEl);
 }

// we begin to call the string based on the conitions through a button. 

var button = document.getElementById("go");
button.addEventListener("click", fizzBuzz);