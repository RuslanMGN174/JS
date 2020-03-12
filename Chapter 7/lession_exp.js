
//ООП. Урок 1.

/*function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.getFullName = function () {
		return this.firstName + " " + this.lastName;
	}
}

function Manager(firstName, lastName) {
	User.apply(this, arguments);

	this.sayHello = function () {
		alert("Здравствуйте, чем я могу Вам помочь?");
	}

	this.changeName = function (name) {
		this.firstName = name;
	}
}

let u = new User("John", "Doe");
let m = new User("Jane", "Doe");
*/

//ООП. Урок 3. Прототипное наследование

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

User.prototype.getFullName = function () {
	return this.firstName + " " + this.lastName;
}

function Manager(firstName, lastName) {
	User.apply(this, arguments);

	this.sayHello = function () {
		alert("Здравствуйте, чем я могу Вам помочь?");
	}

	this.changeName = function (name) {
		this.firstName = name;
	}
}

let u = new User("John", "Doe");
let m = new User("Jane", "Doe");