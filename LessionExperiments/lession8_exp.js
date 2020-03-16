function showArgs () {
	// console.log("Передано аргументов: " + arguments.length);
	// console.log(arguments);

	//Разничия между псевдомассивом arguments и обычным массивом
	// console.log(arguments.constructor.name);
	// console.log([1, 2, 3].constructor.name);
	
	//используем arguments как массив
	//ES5
	var args = Array.prototype.slice.call(arguments);

	//ES6
	var args = Array.from(arguments);

	//или
	var args = [...arguments];
	return args.join(", ")
	
}

console.log(showArgs("foo", "bar", "hello"));