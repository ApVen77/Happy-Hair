var myCar = new Object();
myCar.maxspeed= 50;
myCar.driver = "John";
myCar.make= "Cadillac";
myCar.model= "CTS-Z";
myCar.color= "Cotton Candy";


// document.getElementsByClassName ("flexbox-item flexbox-item-2").document.write (myCar.make);
// document.getElementsByClassName ("flexbox-item flexbox-item-3").document.write (myCar.color);
console.log (myCar.make);

var myDate = new Date()
var myName= "April";
var myAge= 34;
var message= "Welcome, ladies!"
console.log (myDate + myName + myAge + message);

// var myH2= document.getElementsByClassName ("flexbox-item flexbox-item-1");
// myH2[0].innerHTML= "<h2> April </h2>"
// console.log (myH2[0]);

var myH3= document.getElementsByClassName ("flexbox-item flexbox-item-2");
document.getElementsByClassName("flexbox-item flexbox-item-2").appendChild = myH3;
console.log (myH3 [0]);
myH3.appendChild= "<button> Hello!</button>"