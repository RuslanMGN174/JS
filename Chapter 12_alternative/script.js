'use strict'

let coordY

let map = {
  goalStart: ( $(window).height() * 0.3 ),
  goalEnd: ( $(window).height() * 0.55 )
}

$('.ball').on('click', function() {
 
  let newCoord = getRandomY()

  $('.ball').animate({
    top: newCoord,
    left: getCoordX()
  }, 500, function(){
    checkGoal(newCoord)
  });
  
});

function checkGoal(y) {
  console.log(map.goalStart)
  console.log(map.goalEnd)
  if ( (y > map.goalStart) && (y < map.goalEnd) ) alert('Goal!')
}

function getRandomY() {
  coordY = Math.round( Math.random() * ($(window).height() - 100) )
  return coordY
}

function getCoordX() {
  if ($('.ball').position().left > 50) return 10
  else return ( $('.field').width() - 110 )
}


