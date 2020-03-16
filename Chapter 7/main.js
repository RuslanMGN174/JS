/**
 * Создать иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):
- базовый конструктор «Транспортное средство» с общими для всех 
транспортных средств свойствами и методами (на ваше усмотрение);
- дочерние конструкторы: автомобиль, самолет, корабль, которые 
наследуют общие свойства и методы от родительского;
- продемонстрировать, как дочерние сущности могут переопределять 
родительские свойства и методы в соответствии со своим собственным поведением.
 */

class Vehicle {
	constructor(name, frame, gear) {
		this.name = name;
		this.frame = frame;
		this.gear = gear;
	}

	move(speed) {
		this.speed = speed;
		alert(`${this.name} движется со скоростью ${this.speed} км/ч.`);
	}

	stop() {
		this.speed = 0;
		alert(`${this.name} сейчас стоит.`)
	}
}

class Car extends Vehicle {
	constructor(name, frame, gear) {
		super("Автомобиль", "Кузов", "Колёса");
	}
}

class Airplane extends Vehicle {
	constructor(name, frame, gear) {
		super("Самолёт", "Фюзеляж", "Шасси");
	}

	fly(height) {
		this.height = height;

		if (height < 100) {
			alert(`${this.name} не может летать на такой высоте.`)
		} else {
			alert(`${this.name} может летать на высоте ${this.height} м.`)
		}
	}
}

class Ship extends Vehicle {
	constructor(name, frame) {
		super("Корабль", "Корпус", "Парус");
	}

	move() {
		alert(`${this.name} медленно плывет. качаясь на волнах...`);
	}

}