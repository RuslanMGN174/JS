"use strict";

jQuery.easing.def = "easeOutCubic";

const field = document.querySelector(".field");
const ball = document.querySelector(".ball");

$('.ball').on('click', function () {

	let topPlace = Math.floor(Math.random() * (field.height - ball.height + 1));
	let goalLeftRod = (field.height / 2) - 120;
	let goalRightRod = (field.height / 2) + 70;
	
	if (ball.offsetLeft == 0) {
		$(".ball").animate({
			"top": topPlace,
			"left": field.width - ball.width
		}, 1000, function () {

			if (ball.offsetTop > goalLeftRod && ball.offsetTop < goalRightRod) {
				alert('Гооол!');
				document.getElementById("leftCount").innerHTML++;
			}
		});

	} else {
		$(".ball").animate({
			"top": topPlace,
			"left": "0"
		}, 1000, function () {

			if (ball.offsetTop > goalLeftRod && ball.offsetTop < goalRightRod) {
				alert('Гооол!');
				document.getElementById("righCount").innerHTML++;
			}
		});
	}
});