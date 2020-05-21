"use strict"

// Находим на странице нужную кнопку
var btn = document.getElementById("load");

// Добавляем обработчик события "click"
btn.addEventListener("click", function (ev) {
	ev.preventDefault(); // Отменяем стандартное поведение браузера

	window.fetch("/data.json")
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (response) {
			console.log(response);
			
			document.querySelector(".project")
				.innerHTML = response.project;
			document.querySelector(".course")
				.innerHTML = response.course;
			document.querySelector(".module")
				.innerHTML = response.module;
			document.querySelector(".teacher")
				.innerHTML = response.teacher;
		})

});