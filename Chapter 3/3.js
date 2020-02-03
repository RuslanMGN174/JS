var a;
var someNumber;

function randomInteger() {
	var rand = Math.random() * 10;
	return Math.floor(rand);
}

someNumber = randomInteger();

function checkNumber() {

	for (var i = 3; i >= 1; i--) {
		while (!isFinite(a = prompt("Введите число. Осталось попыток: " + i))) {
			alert("Вы ввели не число");
		}

		if (a == null) {
			return;
		}

		if (a == someNumber) {
			alert("Правильно!");
			return;
		}

		if (i == 1) {
			alert("К сожалению Вам не удалось угадать число.");
			return;
		}

		alert(a > someNumber ? "Меньше" : "Больше");

	}

	checkNumber();

}

checkNumber();
