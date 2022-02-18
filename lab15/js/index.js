/*
*Author: Nicole Safty <nsafty@csumb.edu>
*created: 5 April 2020
* License: Public Domain
*/

/*function vehicle(make, model, year,color, extras) {
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
  js
*/
//here is the parent function
class Car {
  constructor(make) {
    this.carname = make;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
//and here is the child function with all its little details
class Model extends Car {
  constructor(make, model,year,color,extras) {
    super(make);
    this.model = model;
     this.myYear = year;
  this.myColor= color;
  this.myExtras= extras;
  }
  //this will now appear on the html page!
  show() {
    return this.present() + ', it is a ' + this.model + 
    " a " + this.myYear + 
    " model in " + this.myColor + 
    " (" + this.myExtras + ")";
  }
}
//two cars, two outputs and two ways to cause pain!
mycar = new Model("Lexus", "Es330",2005 ,"grey", "alive");
myym = new Model("Nissan", "Altima", 2007, "grey","dead")
document.getElementById("output2").innerHTML = mycar.show();
document.getElementById("output").innerHTML = myym.show();