/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 23 March 2020
* License: Public Domain
*/

function vehicle(make, model, year,color, extras) {
  this.myMake = make;
  this.myModel = model;
  this.myYear = year;
  this.myColor= color;
  this.myExtras= extras;
  this.info = function(){
   return(this.myMake + 
    " the " + this.myModel + 
    " a " + this.myYear + 
    " model in " + this.myColor + 
    " (" + this.myExtras + ")")
}
}
var car = new vehicle ("Nissan", "Altima", 2007, "grey","dead");
var mobile = new vehicle("Lexus", "E330", 2005 ,"grey", "alive");
   var output= document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
  var output=  document.getElementById("output").innerHTML += "<p>" + mobile.info() + "</p>";
  