"use strict"

// Находим на странице нужную кнопку
var btn = document.getElementById("load");

// Добавляем обработчик события "click"
btn.addEventListener("click", function (ev) {
	ev.preventDefault(); // Отменяем стандартное поведение браузера

	// Создаем новый экземпляр объекта XHR
	// для отправки ассинхронного запроса
	var request = new XMLHttpRequest();

	// Добавляем обработчик успешного ответа от сервера
	request.onload = function () {
		
		// В момент когда от сервера придет ответ
		var text = request.responseText;
		document.querySelector(".content").innerHTML = text;
	}

	// Открываем соединение и отправляем запрос
	request.open("GET", "/data.txt");
	request.send();

})