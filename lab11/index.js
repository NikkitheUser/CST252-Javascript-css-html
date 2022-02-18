/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 26 Feburary 2020
* License: Public Domain
*/

/*
function sortingHat(name){
var length = name.length;
var remainder = length % 4;
var house = "";
if (remainder == 0){
	house = "Sneaky Bitch house"
}
else if (remainder == 1){
house="hufflepuffle";
	}
	else if (remainder == 2){
		house = "lions or some shit";
	}
	else{
		house= "Ravenclaw";
	}
	return house;
}

var doit = document.getElementById("doit")
doit.addEventlistner("click", function(){
	var name = document.getElementById("input").value;
	var house = sortingHat(name);
	console.log(name , house);
	document.getElementById("output").innerHTML = house;
})
*/
//this is the array of houses you can be sorted into

housesArray = [
    {
        title: "<h2>Brave Lions</h2>",
        text: "Values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong."
    },
    {
        title: "<h2>Hufflepuffle</h2>",
        text: "Values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
    },
    {
        title: "<h2>Smart Birds</h2>",
        text: "Values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw"
    },
    {
        title: "<h2>Sneaky assholes</h2>",
        text: "Values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones"
    }
	]
//this creates a function that calls elements by ID to reference the Array above

function sortingHat(str){
	var len = str.length;
	var houseNum = len % 4;
	var house;

		if (houseNum == 0){
			house = housesArray[0]
		}
		else if(houseNum == 1){
			house = housesArray[1]
		}
		else if(houseNum == 2){
			house = housesArray[2]
		}
		else if(houseNum == 3){
			house = housesArray[3]
		}
		return house;
	}

	function sorted(){
		var input = document.getElementById('input').value;
		var house1 = sortingHat(input);
		var houseString =  "<h3>The Sorting Hat has sorted you into:</h3>" 
		+ " " + house1.title +"<br>"+ house1.text;
		var newEl = document.createElement('p');
		newEl.innerHTML = houseString;
		document.getElementById('output').innerHTML= newEl.innerHTML;
	}

//When Button is Pushed it calls the array
	var myButton = document.getElementById("button");
		myButton.addEventListener("click", sorted);