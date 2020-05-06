/*
Создать свой маленький переводчик на основе API Яндекс.Переводчика.
 */


(() => {
	document
		.getElementById("btn")
		.onclick = function (ev) {
			ev.preventDefault();

			var wordForTranslate = document.getElementById("in").value;

			// Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
			// (с примером ниже работать не будет, нужно получить и вставить свой!)
			var API_KEY = 'some key...';

			// Сохраняем адрес API
			var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

			// Формируем полный адрес запроса:
			url += '?key=' + API_KEY; // добавляем к запросу ключ API
			url += '&text=' + wordForTranslate; // текст для перевода
			url += '&lang=ru-en'; // направление перевода: с русского на английский

			// Таким образом формируется строка вида:
			// https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en

			var translate = document.querySelector('.translate');

			window.fetch(url)
				.then(function (response) {
					return response.json();
				})
				.then(function (response) {

					// Проверяем статус-код, который прислал сервер
					// 200 — это ОК, остальные — ошибка или что-то другое
					if (response.code !== 200) {
						translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
						return;
					}

					// Проверяем, найден ли перевод для данного слова
					if (response.text.length === 0) {
						translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
						return;
					}

					// Если все в порядке, то отображаем перевод на странице
					translate.innerHTML = response.text.join('<br>'); // вставляем его на страницу
				})
		}
})()