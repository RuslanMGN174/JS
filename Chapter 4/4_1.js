var days = ["Воскресенье", "Понедельник", "Вторник",
						"Среда", "Четверг", "Пятница", "Суббота"];

var months = ["Января", "Февраля", "Мара",
 						"Апреля", "Мая", "Июня",
            "Июля", "Августа", "Сентября",
						"Октября", "Ноября", "Декабря"];

setInterval(function() {

	var myDate = new Date();

	var day = myDate.getDate();
	var month = months[myDate.getMonth()];
	var year = myDate.getFullYear();
	var weekday = days[myDate.getDay()];
	var hours = myDate.getHours();
	var minutes = myDate.getMinutes();
	var seconds = myDate.getSeconds();

	var declOfNum = function(number, titles) {

    var  cases = [2, 0, 1, 1, 1, 2];

    return titles[
            (number % 100 > 4 && number % 100 < 20) ? 2
            : cases[(number % 10 < 5) ? number % 10 : 5]
    ];
}

console.log ("Сегодня " + day + " " + month + " " + year + " года, " + weekday
						+ ", " + hours + " " + declOfNum (hours, ['час', 'часа', 'часов'])
						+ " " + minutes + " " + declOfNum (minutes, ['минута', 'минуты', 'минут'])
						+ " " + seconds + " " + declOfNum (seconds, ['секунда', 'секунды', 'секунд']))

	// var hour = myDate.getHours().toString().slice(-1);
	// var minute = myDate.getMinutes().toString().slice(-1);
	// var second = myDate.getSeconds().toString().slice(-1);
	//
	// var hoursFormat = myDate.getHours() >= 11 && myDate.getHours() < 15 ? "часов" :
	// 									hour > 1 && hour < 5 ? "часа" :
	// 									hour == 1 ? "час" :	"часов";
	// var minutesFormat = myDate.getMinutes() >= 11 && myDate.getMinutes() < 15 ? "минут" :
	// 										minute > 1 && minute < 5 ? "минуты" :
	// 										minute == 1 ? "минута" : "минут";
	// var secondsFormat = myDate.getSeconds() >= 11 && myDate.getSeconds() < 15 ? "секунд" :
	// 										second > 1 && second < 5 ? "секунды" :
	// 										second == 1 ? "секунда" : "секунд";
	//
	// var fullTime = myDate.getHours() + " " + hoursFormat +
	// 								" " + myDate.getMinutes() + " " + minutesFormat +
	// 								" " + myDate.getSeconds() + " " + secondsFormat;
	// var fullDate = "Сегодня " + myDate.getDate() +
	// 								" " + months[myDate.getMonth()] +
	//                 " " + myDate.getFullYear() +
	// 								", " + days[myDate.getDay()];

	// console.log(fullDate + ", " + fullTime);
}, 1000)
