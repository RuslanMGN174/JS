class Person {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Person ${this.name} said his name`);
    }
}

const john = new Person('John');
john.sayName(); // Person John said his name

//Пример выше можно записать в стиле ES5 следующим образом:

let Person = function (name) {
    this.name = name;
};

Person.prototype.sayName = function () {
    console.log('Person ' + this.name + ' said his name');
};

let john = new Person('John');
john.sayName(); // Person John said his name