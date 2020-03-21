/**
 * Написать программу, которая:
просит пользователя ввести кусок JavaScript-кода;
пытается запустить этот код в строгом режиме (strict mode);
если в коде возникла ошибка, перехватывает ее и выводит соответствующее сообщение.

Дополнения от преподавателя:
Прошу реализовать дополнительное задание. 
Прошу вводить код js в textarea и в случае ошибки выводить ее красным цветом на странице. 
Введенный код прошу запускать по нажатию на кнопку. 
 */


(() => {
	var btn = document.querySelector(".button-1");
	var text = document.querySelector("textarea");
	var result = document.getElementById("result");

	btn.addEventListener("click", function () {
		'use strict';
		try {
			result.innerHTML = eval(text.value);
		} catch (ex) {
			result.innerHTML = "Ошибка ввода!!! Введите JavaScript-код.";
		}
	});
})()