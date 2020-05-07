"use strict";

jQuery.easing.def = "easeOutCubic";

var field = document.querySelector(".field");
var ball = document.querySelector(".ball");

$('.ball').on('click', function () {

	var topPlace = Math.floor(Math.random() * (field.height - ball.height + 1));

	if (ball.offsetLeft == 0) {
		$(".ball").animate({
			"top": topPlace,
			"left": field.width - ball.width
		}, 1000, function () {
			if (ball.offsetTop >= 340 && ball.offsetTop <= 440) {
				alert('Гооол!');
			}
		});
	} else {
		$(".ball").animate({
			"top": topPlace,
			"left": "0"
		}, 1000, function () {
			if (ball.offsetTop >= 340 && ball.offsetTop <= 440) {
				alert('Гооол!');
			}
		});
	}
});