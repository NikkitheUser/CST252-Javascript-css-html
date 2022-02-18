/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 14 April 2020
* License: Public Domain
*/
//for challanges
 $("button#challenge-button").addClass("change");
//the button will change the text
 $('button.change').click(function(){
 	//the text shall change red!
 	$(".oof").removeClass("swap-red");
 	$(".oof").toggleClass("red");
 });
//for the problems
 $("button#problems-button").addClass("change1");
 //the button shall change the text
 $('button.change1').click(function(){
 	//oh god the text is blue
 	$(".ohno").removeClass("swap-blue");
 	$(".ohno").toggleClass("blue");
 });
//for the results
 $("button#results-button").addClass("change2");
 //the text will be changed
 $('button.change2').click(function(){
 	//oh lord its green now!
 	$(".god").removeClass("swap-green");
 	$(".god").toggleClass("green");
 });