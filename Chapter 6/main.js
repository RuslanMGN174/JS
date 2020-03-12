'use strict';

/**
 * TODO:
Написать простой прототип системы регистрации пользователей.
Для этого используйте две функции-конструктора:
1. User, которая создает объект типа «пользователь» со следующими свойствами: 
{ 
	имя firstName:, 
	фамилия lastName:, 
	дата и время регистрации regDate:
}.
Объекты типа User предназначены для сохранения каждой отдельной записи о пользователе.

2. UserList, которая создает объект типа “список пользователей” со следующими свойствами и методами: 
{ 
	внутреннее свойство-массив, в которое будут попадать объекты типа User users: [], 
	метод получает в качестве параметра объект типа User и сохраняет его в массив users add: function(user) {}, 
	метод возвращает список пользователей из массива users getAllUsers: function() {}
}. 
Объекты типа UserList предназначены для хранения множества записей типа User. 

При запуске программы должно происходить:
1. Создавать новый экземпляр объекта UserList (с пустым свойством-массивом users).
2. Открываться диалог prompt с предложением ввести имя и фамилию пользователя для регистрации 
(одной строкой через пробел).
3. После нажатия ОК должен создаваться новый экземпляр объекта User с заполнением свойств firstName, 
lastName и regDate (текущая дата и время).
4. Созданный экземпляр объекта должен сохраняться в свойство-массив users 
созданного ранее объекта типа UserList (при помощи метода add).
5. Диалог prompt должен повторяться, пока пользователь не нажмет “Отмена”.
6. После нажатия «Отмена» выведите на экран (в консоль или при помощи alert)
 список всех пользователей с именами и датами регистрации (используйте для этого метод getAllUsers).
 */

(function run() {
	class User {
		constructor(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.regDate = new Date();
		}
	}

	class UserList {
		constructor() {
			this.users = [];
			this.add = function (user) {
				this.users.push(user);
			}

			this.getAllUsers = function () {
				var out = '';
				for (let i = 0; i < this.users.length; i++) {
					out += this.users[i].firstName + " " + this.users[i].lastName + " " + this.users[i].regDate + "\n";
				}
				alert(out);
			}
		}
	}

	window.start = function () {
		var userList = new UserList();

		function isUserExist(arr, str) {
			for (var i = 0; i < arr.length; i++) {
				if (str[0] == arr[i].firstName &&
					str[1] == arr[i].lastName) {

					return true;
				} else {
					return false;
				}
			}
		}

		while (true) {
			var userData;
			var regex = /([а-я]+)\s([а-я]+)/i;

			while (!regex.test(userData = prompt("Введите свое Имя и Фамилию..."))) {
				if (userData == null) {
					break;
				}

				alert("Введите 2 слова через пробел в кириллической раскладке");
			}


			if (!userData) break;
			var splitUserData = userData.split(" ");

			if (isUserExist(userList.users, splitUserData)) {
				alert("Такой пользователь уже зарегистрирован. Пожалуйста введите другие данные...")
			} else {
				var someUser = new User(splitUserData[0], splitUserData[1]);
				userList.add(someUser);
			}
		}

		userList.getAllUsers();
	}

})();

start();
