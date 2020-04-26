/*
 Написать простое ToDo App — список задач с возможностью добавления новых пунктов 
 и смены статуса готовности каждого пункта (сделано/не сделано). Страница должна состоять из:

1. самого списка задач (нумерованный список <ol>, пункты-задачи — <li>);
2. поля для ввода названия новой задачи (<input type=“text”);
3. кнопки «Добавить».

При нажатии на кнопку «Добавить» задача добавляется в конец списка в качестве нового пункта <li>.
Если название задачи не введено, то появляется ошибка (alert или другая реализация) с просьбой заполнить поле.
Считать значение, введенное в поле, можно при помощи document.querySelector(‘input’).value.
При клике на любую задачу в списке она помечается как выполненная (становится зачеркнутой, 
	тут пригодится CSS-свойство text-decoration: line-through). При повторном клике зачеркивание исчезает.
	
Доп.задание добавить проверку на дублирование задания.
 */


(() => {
	var todolist = document.querySelector("ol");
	var listArray = [];

	todolist.addEventListener("click", ev => {
		if (ev.target.tagName === "LI") {
			ev.target.classList.toggle('checked');
		}
	}, false)


	document
		.getElementById("add")
		.onclick = function () {
			var li = document.createElement("li");
			var someBusines = document.getElementById("in").value;

			var temp = document.createTextNode(someBusines);
			li.appendChild(temp);

			if (someBusines == "") {
				alert("Введите ваше дело!!!")
			} else {

				if (listArray.includes(someBusines)) {
					alert("Такое дело уже есть! Введите новое дело...");
				} else {
					document.getElementById("list").append(li);
					listArray.push(someBusines);
				}
			}
			document.getElementById("in").value = "";
		}
})()