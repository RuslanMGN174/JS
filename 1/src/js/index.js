import '../css/button.css';
import {button} from './button.js';

let clicknumber = 0;

button.addEventListener('click', updateCounter);

function updateCounter()
{
clicknumber ++;

  switch (clicknumber)
  {
  case 2:
  case 3:
  case 4:
  case 22:
  case 23:
  case 24:
  case 32:
  case 33:
  case 34:
  button.innerHTML = `Кнопка нажата ${clicknumber} разa`;
  break;

  default:
  button.innerHTML = `Кнопка нажата ${clicknumber} раз`;
  }
}
