"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(colors.red("Hello, Node!"));
console.log(colors.green.underline("Green text"));

var MyNewClass = function MyNewClass() {
  _classCallCheck(this, MyNewClass);

  var foo = 3;

  var bar = function bar(x) {
    return x * x;
  };

  console.log(bar(foo));
};

var inst = new MyNewClass();