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

}, 1000)
