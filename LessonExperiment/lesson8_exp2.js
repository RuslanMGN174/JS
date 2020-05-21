// setTimeout(function(){
// 	console.log("Прошла секунда");

// }, 1000)

var car = {
	sayHello: function() {
		console.log("Поехали");
	},
	
	start: function() {
		console.log("Заводимся...");

		function sayHelloLater() {
			this.sayHello();
		}

		sayHelloLater = sayHelloLater.bind(this);

		setTimeout(sayHelloLater, 1000)
	}
}

car.start();