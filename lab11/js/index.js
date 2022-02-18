/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 26 Feburary 2020
* License: Public Domain
*/

//time to make a function
function sortingHat(name){
	//we track the length of the users inputed name
var length = name.length;
//mod is length divided by 4
var mod = length % 4;
//now if mod returns with 1,2,3 or no left overs variables, one of these events will pop up on the HTML 
if (mod == 0){
	 return "Sneaky Snake House <br><br>	You know those kids that were kind of assholes to you as a kid? no? then you were those kids! You like to bully people that are inferior to you! lucky lucky!" 
}
else if (mod == 1){
return "Those Puffles from Club Penguin House <br><br>  Oh! You're a nice kid! People like talking to you like you're their personal therapist all the time. You like offering people snacks and other things, but never gain anything in return. I feel for you kid.";
	}
	else if (mod == 2){
		return  "Lions or Some Shit House <br><br>  Welcome to the protagonist house. You have the abilites of a messiah, you do everything perfectly in one shot! (unless youre a poor red-headed kid, then god will never let you rest)";
	}
	else{
		return  "Bird Brain House <br><br> Nerds only! If you got sorted here it only means one thing! you have no friends but your books! Sometimes the knowledge from those books is to much for you! the weight on your shoulders is to much for you to bare young Atlas.";
	}
	
}
//attach shit to the button
var doit = document.getElementById("doit")
//make sure when button is clicked the function will begin
 doit.addEventListener('click', function() {
 	//name is now based off the input 
	var name = document.getElementById("input").value;
	//we give our sorting house/name function to variable house to add to the output
	var house = sortingHat(name);
	console.log(name , house);
	//we now have the goverment assigned houses. with an assigned text, the house variable and the closing paragraph
	newText= "<p> The goverment has assigned you: " + house + "</p>";
	document.getElementById("output").innerHTML = newText;
})


