/*
Разработать простой текстовый редактор с возможностью сохранения контента в LocalStorage.

Страница должна состоять из:

Блока с текстом
Кнопки «Редактировать»
Кнопок «Сохранить» и «Отмена» (по умолчанию неактивных — disabled)
Механика работы страницы:

- при первой загрузке страницы в блоке с текстом отображается текст по умолчанию (любой);
- при нажатии на кнопку «Редактировать» блок с текстом становится редактируемым (contenteditable=true), 
кнопки «Сохранить» и «Отмена» становятся активными, а сама кнопка «Редактировать» — неактивной;
- при нажатии на кнопку «Сохранить» содержимое блока с текстом сохраняется в LocalStorage, 
а режим редактирования отключается (кнопки возвращаются в исходное состояние);
- при нажатии на кнопку «Отмена» содержимое блока с текстом заменяется на последний сохраненный вариант 
изLocalStorage, режим редактирования отключается;
При следующих перезагрузках страницы содержимое блока с текстом автоматически подтягивается из 
LocalStorage (последний сохраненный вариант).
 */


(() => {
	var editButton = document.getElementById("edit");
	var saveButton = document.getElementById("save");
	var cancelButton = document.getElementById("cancel");
	var content = document.getElementById("content");

	//Подгружаем последнее сохранение если оно есть
	if(localStorage.length > 0) {
		content.textContent = localStorage.getItem("Alice");
	}

	//смена состояния кнопок при нажатии "Редактировать"
	editButton.onclick = function () {
		
		editButton.disabled = true;
		saveButton.disabled = false;
		cancelButton.disabled = false;

		content.contentEditable = true;
	}
	//смена состояния кнопок при нажатии "Сохранить" и "Отмена"
	if (!editButton.disabled) {
		saveButton.onclick = function () {
			
			editButton.disabled = false;
			saveButton.disabled = true;
			cancelButton.disabled = true;

			localStorage.setItem("Alice", content.textContent);
			content.contentEditable = false;
		}

		cancelButton.onclick = function () {
			
			editButton.disabled = false;
			saveButton.disabled = true;
			cancelButton.disabled = true;

			content.textContent = localStorage.getItem("Alice");
			content.contentEditable = false;
		}
	}
})()