var ivan = {
	name: "Иван",
	login: "ivan_123",
	password: "123"
};
var viktor = {
	name: "Виктор",
	login: "viktor_234",
	password: "234"
};
var stepan = {
	name: "Степан",
	login: "stepan_345",
	password: "345"
};

var users = [ivan, viktor, stepan];

var enteredLogin = prompt("Введите ваш логин");
var enteredPassword = prompt("Введите ваш пароль");

function findUserName() {
	for (var i = 0; i < users.length; i++) {
		for (var prop in users[i]) {
			var propName = users[i]["name"];
			var propLogin = users[i]["login"];
			var propPassword = users[i]["password"];

			if (enteredLogin == propLogin && enteredPassword == propPassword) {
				alert("Здравствуйте, " + propName + "!");
				return;
				
			}
		}
	}

	alert("Ошибка авторизации! Пользователь с такими данныйми не найден.");
	return;

}

findUserName();
