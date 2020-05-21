console.log(colors.red("Hello, Node!"));
console.log(colors.green.underline("Green text"));

class MyNewClass {
    constructor() {
        const foo = 3;
        const bar = x => x * x;
        console.log(bar(foo));
    }
}

const inst = new MyNewClass();
