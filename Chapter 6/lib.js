'use strict';

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	// this.getFullName = function () {
	// 	console.log(this);
	// 	return this.firstName + " " + this.lastName;
	// }
}

function getFullName(prefix, suffix) {
	return prefix
	+ ", "
	+ this.firstName 
	+ " " 
	+ this.lastName 
	+ suffix;
}


var userOne = new User("Руслан", "Князев");
var userTwo = new User("Иван", "Иванов");

console.log(getFullName.call(userOne, "Привет", "!"));
console.log(getFullName.apply(userTwo, ["Привет", "!"]));
console.log(Math.max.apply(null, [10, 5, 8, 30, 12, 64, 91]));