"use strict";

(function run() {

	let a;
	let someNumber;

	function randomInteger() {
		let rand = Math.random() * 1000;
		return Math.round(rand);
	}

	someNumber = randomInteger();
	let shot = 10;

	window.start = function () {

		for (shot; shot >= 1; shot--) {
			while (!isFinite(a = prompt("Введите число. Осталось попыток: " + shot))) {
				alert("Вы ввели не число");
			}

			if (a == null) {
				return;
			}

			if (a == someNumber) {
				alert("Правильно!");
				return;
			} else {
				alert(a > someNumber ? "Меньше" : "Больше");
			}

			if (shot == 1) {

				if (confirm("К сожалению Вам не удалось угадать число. Хотите начать игру заново?")) {
					run();
				} else {
					return;
				}
			}
		}

		start();
	}
})();