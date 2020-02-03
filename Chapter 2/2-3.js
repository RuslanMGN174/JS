var a;
var b = true;
var c = 0;

while (b) {
	  while (!isFinite(a = prompt("Введите число"))) {
  alert("Вы ввели не число");
  }

  if (isFinite(a)){
    c += Number(a);
  }
  if (a == null){
    b = false;
    alert(c);
  }
}
