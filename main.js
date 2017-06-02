setInterval(function() {

})


function move() {
  coordinates = newPosition()
  $('.sheep').append($('<img src="sheep.png" alt="">'))

  $("img").each(function() {

  $("img").animate({
       left: coordinates[0],
       top: coordinates[1]
   }, 10000, function() {
     move()
   })
 }
  )
}
for (var i = 0; i < 2; i++) { //2 is the amount to input how many sheep
  move()
}




function newPosition() {
  left = Math.floor(1030 * Math.random())
  y = Math.floor(450 * Math.random())
  leftTop = [left, y]
  return leftTop
}

























// console.log($(window).width())
//  console.log($('.a').offset())

// animateDiv();
// //
// //
//  function makeNewPosition(){
//
//      // Get viewport dimensions (remove the dimension of the div)
//      var h = $(window).height() - 50;
//      var w = $(window).width() - 50;
//
//      var nh = Math.floor(Math.random() * h);
//      var nw = Math.floor(Math.random() * w);
//
//      return [nh,nw];
//
//  }
//
//  function animateDiv(){
//      var newq = makeNewPosition();
//      var oldq = $('.a').offset();
//      //var speed = calcSpeed([oldq.top, oldq.left], newq);
//
//      $('.a').animate({ top: newq[0], left: newq[1] }, 5590, function(){
//        animateDiv();
//      });
//
//  };
//
//  function calcSpeed(prev, next) {
//
//      var x = Math.abs(prev[1] - next[1]);
//      var y = Math.abs(prev[0] - next[0]);
//
//      var greatest = x > y ? x : y;
//
//      var speedModifier = 0.1;
//
//      var speed = Math.ceil(greatest/speedModifier);
//
//      return speed;
// }
