/**
 * Написать функцию filterByType, которая принимает любое кол-во аргументов:
первый аргумент — это тип данных (number, string или boolean), 
по которому нужно отфильтровать следующие аргументы (со 2-го и далее);
аргументы, начиная со 2-го и далее — любые значения;
функция должна возвращать массив с теми аргументами, которые соответствуют типу данных, переданному в первом аргументе.

Пример вызова:
filterByType(’string’, 10, 20, ‘a’, ‘b’, true, false);// возвращает массив [‘a’, ‘b']
 */

function filterByType() {
	var args = [...arguments].slice(1);
	var firstArg = arguments[0];

	switch (firstArg) {
		case "number":
			getNewArgs(args, firstArg);
			break;

		case "string":
			getNewArgs(args, firstArg);
			break;

		case "boolean":
			getNewArgs(args, firstArg);
			break;

		default:
			alert("Нет таких значений");
	}
}

function dataType(obj) {
	return typeof obj;
}

function getNewArgs(args, firstArg) {
	alert(args.filter(item => dataType(item) == firstArg));
}

filterByType("gjh", 10, 20, "a", "b", true, false);