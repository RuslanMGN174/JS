'use strict';

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.getFullName = function () {
		console.log(this);
		return this.firstName + " " + this.lastName;
	}
}

var userOne = new User("Руслан", "Князев");
var userTwo = new User("Иван", "Иванов");

console.log(userOne.getFullName());
console.log(userTwo.getFullName());
