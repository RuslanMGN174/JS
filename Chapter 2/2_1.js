var a;
var b;

while (!isFinite(a = prompt("Введите первое число"))) {
  alert("Вы ввели не число");
}

while (!isFinite(b = prompt("Введите второе число"))) {
  alert("Вы ввели не число");
}

if (a > b) {
  alert("Первое число больше второго");
} else if (b > a) {
  alert("Второе число больше первого");
} else {
  alert("Оба числа равны");
}
