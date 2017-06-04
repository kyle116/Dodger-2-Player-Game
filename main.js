


$buttons = $('button').on('click', randomize)
movementLeft = parseInt($('.piece').css("left"))
movementTop = parseInt($('.piece').css("top"))

// var worldwide = randomize()

function randomize() {
  console.log('Running')
  var randomRoll = Math.floor(Math.random() * 12) + 1; // random numbers 1-12
  console.log(randomRoll);
  //return ex;
  if (movementLeft === 677 && movementTop === 677) {
    if (randomRoll <= 9) {
    movementLeft = parseInt($('.piece').css("left")) - 73 - (62 * (randomRoll - 1))
    // $('.piece').css("left", movementLeft)
    $('.piece').animate({
      left: movementLeft
    }, 1000)
  } else if (randomRoll > 9) {
    movementLeft = parseInt($('.piece').css("left")) - 73 - (62 * (randomRoll - 1)) + 73
    // $('.piece').css("left", movementLeft)
    $('.piece').animate({
      left: movementLeft
    }, 1000)
  }
  } else if (movementLeft > 569 && movementLeft < 606) { // corner moves at 9th position of board
    if (randomRoll === 1) {
    movementLeft = parseInt($('.piece').css("left")) + 73
    $('.piece').animate({
      left: movementLeft
    }, 1000)
  } else if (randomRoll > 1) {
    movementLeft = parseInt($('.piece').css("left")) + 62
    $('.piece').animate({
      left: movementLeft
    }, 1000)
    }
  } else if (1 === 1 && movementLeft > 35 && movementLeft < 569) { // movement at 1-8
    movementLeft = parseInt($('.piece').css("left")) + 62
    $('.piece').animate({
      left: movementLeft
    }, 1000)
  } else if (1 === 1 && movementLeft > 606 && movementTop < 108 || movementTop > 569 && movementTop < 606) {
    movementTop = parseInt($('.piece').css("top")) + 73
    $('.piece').animate({
      top: movementTop
  }, 1000)
  } else if (1 === 1 && movementTop > 35 && movementTop < 569) {
    movementTop = parseInt($('.piece').css("top")) + 62
    $('.piece').animate({
      top: movementTop
    }, 1000)
  }
}
console.log($('.tileB')[1].style.left)
// card viewer and zoomer
$('.tileB').on('click', function() {
console.log(this)
})
