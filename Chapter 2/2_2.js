var a;
var b;

while (true) {

  while (!isFinite(a  = prompt("Введите год начала отсчета"))) {
  alert("Вы ввели не число");
  }

  while (!isFinite(b  = prompt("Введите конечный год"))) {
  alert("Вы ввели не число");
  }

  if (a > b) {
  alert("Год начала отсчета больше чем конечный год!");
  } else {
  break;
  }

}

for (var i = a; i <= b; i++) {
  if (i % 4 == 0 && i % 100 != 0){
    console.log(i);
  } else if (i % 4 == 0 && i % 400 == 0){
    console.log(i);
  }
}
