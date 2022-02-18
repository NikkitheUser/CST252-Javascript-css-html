/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 23 Feburary 2020
* License: Public Domain
*/


//lets get this show on the road
var outputEl = document.getElementById("output");


//lets add something
var new1El = document.createElement("p");
 new1El.innerHTML = "hello?";
//okay take two
var new2El = document.createElement("p");
 new2El.innerHTML = "I can't hear you!";

//lets change things 


 //append the children
outputEl.appendChild(new1El);
outputEl.appendChild(new2El); 

//can we change things?
new1El.style.color = "red";
new2El.style.color = "green";
