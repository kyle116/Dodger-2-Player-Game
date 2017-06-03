// setInterval(function() {
//
// })
//
// $imgSheep = $('<img src="sheep.png" alt="">')
// $divSquare = $('.square')
// // '<div class="square"></div>'
//
// for (var i = 0; i < 3; i++) { //2 is the amount to input how many sheep
//   $('.sheep').append('<div class="square"></div>')
//   move()
//   coordinates = newPosition()
// }
//
// function move() {
//
//
//
//   $('div').each(function() {
//
//   $('div').animate({
//        left: coordinates[0],
//        top: coordinates[1]
//    }, 1000, function() {
//      move()
//    })
//  }
//   )
// }
//
//
//
//
//
// function newPosition() {
//   left = Math.floor(1030 * Math.random())
//   y = Math.floor(450 * Math.random())
//   leftTop = [left, y]
//   return leftTop
// }


$buttons = $('button').on('click', randomize)

// var worldwide = randomize()

function randomize() {
  console.log('Running')
  var ex = Math.floor(Math.random() * 6) + 1;
  console.log(ex);
  //return ex;
  if (ex === 1) {
    movement = parseInt($('.piece').css("left")) + 73
    // $('.piece').css("left", movement)
    $('.piece').animate({
      left: movement
    }, 1000)
  }
}
