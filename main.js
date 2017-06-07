var keyArray = [];
var pointArray = [];
var rockArray = []
var player1Score = 0;
var player2Score = 0;

initiate();
update();



var player;
var player2;
function initiate(){
	player = new createPlayer(300,300,"player1","relative","blue",false); // (spawn points, player, relative position, player color)
	player2 = new createPlayer(675,300,"player2","relative","green",false);
  $('.overlay').hide()
}

// starts at startGame() then goes to push in pointArray of new created point objects
function startGame() {
  for(var i = 0;i<5;i++){
		pointArray.push(new point(i));
	}

  pointInterval =
    setInterval(function() {
      if ($('.point').length <= 2) {
      pointArray.push(new point());
      }
    }, 1000)
  rockInterval =
    setInterval(function() {
      for (var i = 0; i < 2; i++) {
      rockArray.push(new createRock(i))
      }
    }, 2000)
  rockCollision()
  rockMove()
  $('input').hide()
  player.reader = true;
  player2.reader = true;
}

function createPlayer(l,t,id,pos,color,boo){
	this.speed = 3; // this makes it iterate over 3px but any increase and it will skip over certain px creating and issue with the checker for rocks
	this.width = 25;
	this.height = 25;
	this.left = l;
	this.top = t;
	this.id = id;
  this.color = color;
  this.reader = boo;
	$user = $("<div id=" + id + "/>")
		.css({"border":"1px solid " + color,"height":this.height,"width":this.width,"left":this.left,"top":this.top,"position":pos})
  $('#wrapper').append($user);
}

// point creates an object in the pointArray also appends div.point to div.wrapper
function point(id){ //something about this function spawns the yellow dots but slowly goes lower and lower
  this.left = parseInt(Math.random()*(970) + 10);
	this.top = parseInt(Math.random()*580 + 10);
  this.id = id;
	this.width = 10;
	this.height = 10;
  $points = $("<div class=point/>")
    .css({"border":"1px solid yellow","height":"20px","width":"20px","left":this.left,"top":this.top,"position":"absolute"})
  $('#wrapper').append($points)
}



function update(){
  //player1 if key is pressed, move in direction minus player speed (speed is just subtracting which how many more pixels you want to move in direction)
  //left
	if(keyArray[65] && player.reader === true){
		var newLeft = parseInt(player.left)-player.speed+"px"
		player.left = newLeft;
		document.getElementById(player.id).style.left = newLeft;
	}
	//right
	if(keyArray[68] && player.reader === true){
		var newLeft = parseInt(player.left)+player.speed+"px"
		player.left = newLeft;
		document.getElementById(player.id).style.left = newLeft;
	}
	//up
	if(keyArray[87] && player.reader === true){
		var newTop = parseInt(player.top)-player.speed+"px"
		player.top = newTop;
		document.getElementById(player.id).style.top = newTop;
	}
	//down
	if(keyArray[83] && player.reader === true){
		var newTop = parseInt(player.top)+player.speed+"px"
		player.top = newTop;
		document.getElementById(player.id).style.top = newTop;
	}

  //player2
	//left
	if(keyArray[37] && player2.reader){
		var newLeft = parseInt(player2.left)-player2.speed+"px"
		player2.left = newLeft;
		document.getElementById(player2.id).style.left = newLeft;
	}
	//right
	if(keyArray[39] && player2.reader){
		var newLeft = parseInt(player2.left)+player2.speed+"px"
		player2.left = newLeft;
		document.getElementById(player2.id).style.left = newLeft;
	}
	//up
	if(keyArray[38] && player2.reader){
		var newTop = parseInt(player2.top)-player2.speed+"px"
		player2.top = newTop;
		document.getElementById(player2.id).style.top = newTop;
	}
	//down
	if(keyArray[40] && player2.reader){
		var newTop = parseInt(player2.top)+player2.speed+"px"
		player2.top = newTop;
		document.getElementById(player2.id).style.top = newTop;
	}
  blockade();
	requestAnimationFrame(update);
}


// rock = new createRock(1)
function createRock(id){
  leftRight = [];
  topBottom = [];
  positionArray = [];
  //have rocks spawn between these numbers
  randRight = Math.floor(Math.random() * (1030 - 1020) + 1020)
  randBot = Math.floor(Math.random() * (630 - 620) + 620)
  randTop = Math.floor(Math.random() * (-30-(-20)) + (-20))
  randLeft = Math.floor(Math.random() * (-30-(-20)) + (-20))

  leftPos = Math.floor(Math.random() * (1004 - 0) + 0)
  topPos = Math.floor(Math.random() * (604 - 0) + 0)

  pos = Math.floor(Math.random() * (3) + 1)
  neg = Math.floor(Math.random() * (-3) - 1)

  leftRight.push(randRight, randLeft)
  topBottom.push(randTop, randBot)
  function rand01() {
    return Math.round(Math.random())
  }
  positionArray.push(leftRight[rand01()],topBottom[rand01()])
  clone = positionArray[rand01()]
  if (clone === positionArray[0]) {
    positionArray.splice(1, 1)
    positionArray.push(topPos)
  }
  if (clone === positionArray[1]) {
    positionArray.splice(0, 1)
    positionArray.unshift(leftPos) //test positions randomizer
  }

  // Rock quadrant for directions
  if (positionArray[0] <= (-20)) {
    if (positionArray[1] <= 302) {
      console.log(this);
      this.newPos = [pos, pos];
    }
    if (positionArray[1] >= 303) {
      this.newPos = [pos, neg];
    }
  }

  if (positionArray[1] <= (-20)) {
    if (positionArray[0] <= 502) {
      this.newPos = [pos, pos];
    }
    if (positionArray[0] >= 503) {
      this.newPos = [neg, pos];
    }
  }

  if (positionArray[0] >= 1020) {
    if (positionArray[1] <= 302) {
      this.newPos = [neg, pos];
    }
    if (positionArray[1] >= 303) {
      this.newPos = [neg, neg];
    }
  }

  if (positionArray[1] >= 620) {
    if (positionArray[0] <= 502) {
      this.newPos = [pos, neg];
    }
    if (positionArray[0] >= 503) {
      this.newPos = [neg, neg];
    }
  }

	this.speed = 3; // this makes it iterate over 3px but any increase and it will skip over certain px creating and issue with the checker for rocks
	this.width = 20;
	this.height = 20;
	this.left = positionArray[0];
	this.top = positionArray[1];
	this.id = id;

	$rock = $("<div class=rock/>")
		.css({"border":"1px solid red","height":this.height,"width":this.width,"left":this.left+"px","top":this.top+"px","position":"absolute"})
  $('#wrapper').append($rock);
}


function rockMove() {
  $rocks = $('.rock');

  for (i = 0; i < $rocks.length; i++) {
    rockTop = parseInt($rocks[i].style.top);
    rockLeft = parseInt($rocks[i].style.left);

    leftR = rockArray[i].newPos[0];
    topR = rockArray[i].newPos[1];

    newTop = rockTop + topR;
    this.$rocks[i].style.top = newTop + "px"
    newLeft = rockLeft + leftR;
    this.$rocks[i].style.left = newLeft + "px"

  }
   requestAnimationFrame(rockMove)
}


function blockade() {
	var elemLeft = parseInt($('#wrapper').css('left'));
	var elemWidth = parseInt($('#wrapper').css('width'));
	var elemTop= parseInt($('#wrapper').css('height'));

  var top1 = parseInt(player.top);
	var top3 = parseInt(player2.top);

	var left1 = parseInt(player.left);
	var left3 = parseInt(player2.left);

  var bottom1 = player.height+parseInt(player.top);
	var bottom3 = player2.height+parseInt(player2.top);

	var right1 = player.width+parseInt(player.left);
	var right3 = player2.width+parseInt(player2.left);

  var width1 = player.width;
	var width3 = player2.width;

	var height1 = player.height;
	var height3 = player2.height;

  //blocks player 1 from moving outside of game
	if(left1 + player.width >= elemLeft+elemWidth){
		player.left = elemWidth - player.width;
	}
	if(top1 + player.height >= elemTop){
		player.top = elemTop - player.height;
	}
	if(top1 < 3){
		player.top = 3;
	}
	if(left1 < 3){
		player.left = 3;
	}
	//blocks player 2 from moving outside of game
	if(left3 + player2.width >= elemLeft+elemWidth){
		player2.left = elemWidth - player2.width;
	}
	if(top3 + player2.height >= elemTop){
		player2.top = elemTop - player2.height;
	}
	if(top3 < 3){
		player2.top = 3;
	}
	if(left3 < 3){
		player2.left = 3;
	}

  // collision for points
  for(var i = 0; i < pointArray.length; i++){
		var left2 = pointArray[i].left;
		var right2 = pointArray[i].left+pointArray[i].width;
		var top2 = parseInt(pointArray[i].top);
		var bottom2 = pointArray[i].top+pointArray[i].height;
		if(right1>left2 && left1<right2 && top1<bottom2 && bottom1>top2 || left1<left2 && right1>right2 && top1<top2 && bottom1>bottom2){
			remove(i);
      player1Score += 1
      $('#ps1').text("Player 1 Score: " + player1Score)
			pointArray.splice(i, 1);
		}
	}
	for(var i = 0; i < pointArray.length; i++){
		var left2 = pointArray[i].left;
		var right2 = pointArray[i].left+pointArray[i].width;
		var top2 = parseInt(pointArray[i].top);
		var bottom2 = pointArray[i].top+pointArray[i].height;
		if(right3>left2 && left3<right2 && top3<bottom2 && bottom3>top2 || left3<left2 && right3>right2 && top3<top2 && bottom3>bottom2){
			remove(i);
      player2Score += 1
      $('#ps2').text("Player 2 Score: " + player2Score)
			pointArray.splice(i, 1);
		}
	}
}

// removes the points in the game
function remove(id) {
    var elem = $('.point')[id]
    return document.getElementById('wrapper').removeChild(elem);
}

function rockCollision() {
  $rock = $('.rock')
  var elemLeftRock = parseInt($('#wrapper').css('left'));
	var elemWidthRock = parseInt($('#wrapper').css('width'));
	var elemTopRock = parseInt($('#wrapper').css('height'));

  var topP1 = parseInt(player.top);
	var topP2 = parseInt(player2.top);


	var leftP1 = parseInt(player.left);
	var leftP2 = parseInt(player2.left);


  var bottomP1 = player.height+parseInt(player.top);
	var bottomP2 = player2.height+parseInt(player2.top);


	var rightP1 = player.width+parseInt(player.left);
	var rightP2 = player2.width+parseInt(player2.left);


  var widthP1 = player.width;
	var widthP2 = player2.width;

	var heightP1 = player.height;
	var heightP2 = player2.height;


  // collision for rocks with players
  for(var i = 0; i < rockArray.length; i++){
		var leftRo = parseInt($rock[i].style.left);
		var rightR = parseInt($rock[i].style.left)+rockArray[i].width;
		var topRo = parseInt($rock[i].style.top);
		var bottomR = parseInt($rock[i].style.top)+rockArray[i].height;
    // console.log(rightP1>leftR && leftP1<rightR && topP1<bottomR && bottomP1>topR || leftP1<leftR && rightP1>rightR && topP1<topR && bottomP1>bottomR);
		if(leftRo<rightP1 && rightR>leftP1 && bottomR>topP1 && topRo<bottomP1 || leftRo>leftP1 && rightR<rightP1 && topRo>topP1 && bottomR<bottomP1){
      $('#ps1').text("DEAD Player 1 Score: " + player1Score)
      $('#player1').css({"height": "0", "width":"0", "border": "none"})
      player.reader = false
		}
	}
	for(var i = 0; i < rockArray.length; i++){
    var leftRo = parseInt($rock[i].style.left);
		var rightR = parseInt($rock[i].style.left)+rockArray[i].width;
		var topRo = parseInt($rock[i].style.top);
		var bottomR = parseInt($rock[i].style.top)+rockArray[i].height;
		if(leftRo<rightP2 && rightR>leftP2 && bottomR>topP2 && topRo<bottomP2 || leftRo>leftP2 && rightR<rightP2 && topRo>topP2 && bottomR<bottomP2){
      $('#ps2').text("DEAD Player 2 Score: " + player2Score)
      $('#player2').css({"height": "0", "width":"0", "border": "none"})
      player2.reader = false
		}
	}
  if (parseInt($('#player1').css('height')) === 0 && parseInt($('#player2').css('height')) === 0) {
    $('.overlay').show()
    $('.reset').show()
    if (player1Score > player2Score) {
      $('.span1').text("Game Over Player 1 Wins")
    } else if (player1Score < player2Score) {
      $('.span1').text("Game Over Player 2 Wins")
    } else if (player1Score === player2Score) {
      $('.span1').text("Game Over Tie Game")
    }
    clearOut()
  }
  requestAnimationFrame(rockCollision)
}


function clearOut() {
  rockArray = [];
  clearInterval(pointInterval);
  clearInterval(rockInterval);

}

function restart() {
  pointArray = [];
  player1Score = 0;
  player2Score = 0;

  player.left = 300
  player.top = 300
  player2.left = 700
  player2.top = 300
  player.reader = true
  player2.reader = true

  $('#ps1').text("Player 1 Score: " + player1Score);
  $('#ps2').text("Player 2 Score: " + player2Score);
  $('#player1').css({ "height": "25px", "width":"25px", "border":"1px solid " + player.color, "left":player.left,"top":player.top});
  $('#player2').css({ "height": "25px", "width":"25px", "border":"1px solid " + player2.color, "left":player2.left,"top":player2.top});
  $('.rock').remove();
  $('.point').remove();

  for(var i = 0;i<5;i++){
		pointArray.push(new point(i));
	}

  pointInterval =
    setInterval(function() {
      if ($('.point').length <= 2) {
      pointArray.push(new point());
      }
    }, 1000)
  rockInterval =
    setInterval(function() {
      for (var i = 0; i < 2; i++) {
      rockArray.push(new createRock(i))
      }
    }, 2000)

  rockCollision()
  rockMove()
  $('.overlay').hide()
}

window.onkeydown = function(page){
	keyArray[page.keyCode] = page.type === 'keydown';
}
window.onkeyup = function(page){
	keyArray[page.keyCode] = page.type === 'keydown'
}
//page (the parameter) defines what key is pressed from global window
//page.keyCode will return number and will determine array position. page.type will return "keydown" and just check if its true
//this will in turn return if the key was true or not in the if statement about. if true, then move player accordingly



// function getTheStyle(id,styleProperty){
//     var elem = document.getElementById(id);
//     var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue(styleProperty);
// 	return theCSSprop;
//   }
