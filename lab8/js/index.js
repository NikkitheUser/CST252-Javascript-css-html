/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 19 Feburary 2020
* License: Public Domain
*/

//lets name our functions
function firstThing(test){
	console.log(test + " : This is the first thingy. <br>")
}

function secondThing(test){
	console.log(test + ": this might be the second thingy. <br>")
}

function thirdThing(test){
	console.log(test + ": wow a third thingy? <br>")

}
//first set of tests
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//second set of tests, sending these boys in order
setTimeout(function(){
	firstThing("TEST 2");
}, 0);
setTimeout(function(){
	secondThing("TEST 2");
}, 0);
setTimeout(function(){
	thirdThing("TEST 2");
}, 0);

// third test, they shall be sent in a 2,3,1 order
setTimeout(function(){
	firstThing("TEST 3");
}, 3000);
setTimeout(function(){
	secondThing("TEST 3");
}, 1000);
setTimeout(function(){
	thirdThing("TEST 3");
}, 2000);