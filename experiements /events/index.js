//events.js
//lets fuck around with events


var button = document.getElementById("my button");
console.log("here we go", button);

button.addEventListener("click", function(){
	var name = document.getElementById("name-field").value;
	console.log("name is",name);

	var heading = document.getElementById("head");
	console.log("heading", heading);
	heading.innerHTML = "Hello, " + name;
});

button.addEventListener("mouseover", function(){
	var x_delta = Math.floor(Math.random() * 200) + -100;
	var y_delta =  Math.floor(Math.random() * 200) + -100;
	console.log("random change x,y", x_delta, y_delta)
	var top = button.offsetTop;
	var left = button.offsetLeft;
	console.log("Top: " + top + " Left: " + left);
	button.style.top =top + y_delta + "px";
	button.style.left = left + x_delta + "px";

})