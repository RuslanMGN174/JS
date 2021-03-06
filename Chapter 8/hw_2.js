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
		case "string":
		case "boolean":
			getNewArgs(args, firstArg);
			break;

		default:
			console.log("Нет таких значений");
	}
}

function dataType(obj) {
	return typeof obj;
}

function getNewArgs(args, firstArg) {
	console.log(args.filter(item => dataType(item) == firstArg));
}

filterByType("boolean", 10, 20, "a", "b", true, false);