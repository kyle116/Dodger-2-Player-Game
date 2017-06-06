var keyArray = [];
var pointArray = [];
var rockArray = []
var player1Score = 0;
var player2Score = 0;
// window.onload = function() {
  initiate();
  update();
// }


var player;
var player2;
function initiate(){
	player = new createPlayer(150,50,"player1","relative","blue"); // (spawn points, player, relative position, player color)
	player2 = new createPlayer(150,0,"player2","relative","green");
  rock1 = new createRock(1);
  rock2 = new createRock(2);

  rockArray.push(rock1, rock2)
}

// starts at startGame() then goes to push in pointArray of new created point objects
function startGame() {
  // setInterval (function() {
    // point();
    // if (parseInt(player.left) === $('.point').position().left) { //**wont equal right now since the random point isnt working
  //     console.log("dissapear")
  //   }
  // }, 2000)
  // checker()
  // randomFloat()
  for(var i = 0;i<5;i++){
		pointArray.push(new point(i));
    // if div.point <= 2 then start returning more points
	}
  // rockGenerator()
}

function createPlayer(l,t,id,pos,color){
	this.speed = 3; // this makes it iterate over 3px but any increase and it will skip over certain px creating and issue with the checker for rocks
	this.width = 25;
	this.height = 25;
	this.left = l;
	this.top = t;
	this.id = id;
	$user = $("<div id=" + id + "/>")
		.css({"backgroundColor":color,"height":this.height,"width":this.width,"left":this.left,"top":this.top,"position":pos})
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
    .css({"backgroundColor":"yellow","height":"20px","width":"20px","left":this.left,"top":this.top,"position":"absolute"})
  $('#wrapper').append($points)
}



function update(){
  //player1 if key is pressed, move in direction minus player speed (speed is just subtracting which how many more pixels you want to move in direction)
  //left
	if(keyArray[65]){
		var newLeft = parseInt(player.left)-player.speed+"px"
		player.left = newLeft;
		document.getElementById(player.id).style.left = newLeft;
	}
	//right
	if(keyArray[68]){
		var newLeft = parseInt(player.left)+player.speed+"px"
		player.left = newLeft;
		document.getElementById(player.id).style.left = newLeft;
	}
	//up
	if(keyArray[87]){
		var newTop = parseInt(player.top)-player.speed+"px"
		player.top = newTop;
		document.getElementById(player.id).style.top = newTop;
	}
	//down
	if(keyArray[83]){
		var newTop = parseInt(player.top)+player.speed+"px"
		player.top = newTop;
		document.getElementById(player.id).style.top = newTop;
	}

  //player2
	//left
	if(keyArray[37]){
		var newLeft = parseInt(player2.left)-player2.speed+"px"
		player2.left = newLeft;
		document.getElementById(player2.id).style.left = newLeft;
	}
	//right
	if(keyArray[39]){
		var newLeft = parseInt(player2.left)+player2.speed+"px"
		player2.left = newLeft;
		document.getElementById(player2.id).style.left = newLeft;
	}
	//up
	if(keyArray[38]){
		var newTop = parseInt(player2.top)-player2.speed+"px"
		player2.top = newTop;
		document.getElementById(player2.id).style.top = newTop;
	}
	//down
	if(keyArray[40]){
		var newTop = parseInt(player2.top)+player2.speed+"px"
		player2.top = newTop;
		document.getElementById(player2.id).style.top = newTop;
	}

  blockade();
	requestAnimationFrame(update);
}





function randomFloat() {

  leftR = parseInt(Math.random()*2);
  topR = 2 //parseInt(Math.random()*2);
  //if topR gets to certain top value start going negative same for left

  // need to add for loop to cycle through the rocks
  for (var i = 0; i < $('.rock').length; i++) {
    leftR = parseInt(Math.random()*4) + 1;
    topR = 2

    newTop = parseInt(document.getElementsByClassName('rock')[i].style.top) + topR;
    document.getElementsByClassName('rock')[i].style.top = newTop + "px"
    newLeft = parseInt(document.getElementsByClassName('rock')[i].style.left) + leftR;
    document.getElementsByClassName('rock')[i].style.left = newLeft + "px"

  }
  requestAnimationFrame(randomFloat);
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
      this.newPos = [2, 2];
    }
    if (positionArray[1] >= 303) {
      this.newPos = [2, -2];
    }
  }

  if (positionArray[1] <= (-20)) {
    if (positionArray[0] <= 502) {
      this.newPos = [2, 2];
    }
    if (positionArray[0] >= 503) {
      this.newPos = [-2, 2];
    }
  }

  if (positionArray[0] >= 1020) {
    if (positionArray[1] <= 302) {
      this.newPos = [-2, 2];
    }
    if (positionArray[1] >= 303) {
      this.newPos = [-2, -2];
    }
  }

  if (positionArray[1] >= 620) {
    if (positionArray[0] <= 502) {
      this.newPos = [2, -2];
    }
    if (positionArray[0] >= 503) {
      this.newPos = [-2, -2];
    }
  }

	this.speed = 3; // this makes it iterate over 3px but any increase and it will skip over certain px creating and issue with the checker for rocks
	this.width = 10;
	this.height = 10;
	this.left = positionArray[0];
	this.top = positionArray[1];
	this.id = id;

	$rock = $("<div class=rock/>")
		.css({"backgroundColor":"red","height":this.height,"width":this.width,"left":this.left+"px","top":this.top+"px","position":"absolute"})
  $('#wrapper').append($rock);
}


// what if put all the ifs in a function so requestAnimationFrame only works on the movement and not the for loop
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




// function checker() { //checks to see if player touches points
//   console.log('up')
//   yellowPoint = document.getElementsByClassName("point")
//   for (var i = 0; i < yellowPoint.length; i++) {
//     if (parseInt(document.getElementById(player.id).style.left) - 3 <= parseInt(yellowPoint[i].style.left) && parseInt(document.getElementById(player.id).style.left) + 3 >= parseInt(yellowPoint[i].style.left)) {
//     console.log('works');
//     document.getElementById("wrapper").removeChild(yellowPoint[i])
//     }
//   }
//   rocks = document.getElementsByClassName("rock")
//   for (var i = 0; i < yellowPoint.length; i++) {
//     if (parseInt(document.getElementById(player.id).style.left) - 3 <= parseInt(rocks[i].style.left) && parseInt(document.getElementById(player.id).style.left) + 3 >= parseInt(rocks[i].style.left)) {
//     console.log('works');
//     document.getElementById("wrapper").removeChild(document.getElementById(player.id)) // **issue with removing since js checks player1
//     }
//   }
// requestAnimationFrame(checker)
// }


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
		player.left = elemWidth - player.width-2;
	}
	if(top1 + player.height >= elemTop){
		player.top = elemTop - player.height-2;
	}
	if(top1 < 3){
		player.top = 3;
	}
	if(left1 < 3){
		player.left = 3;
	}
	//blocks player 2 from moving outside of game
	if(left3 + player2.width >= elemLeft+elemWidth){
		player2.left = elemWidth - player2.width-2;
	}
	if(top3 + player2.height >= elemTop){
		player2.top = elemTop - player2.height-2;
	}
	if(top3 < 3){
		player2.top = 3;
	}
	if(left3 < 3){
		player2.left = 3;
	}
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
			pointArray.splice(i, 1);
		}
	}
}

function remove(id) {
    var elem = $('.point')[id]
    //document.getElementsByClassName("point");
    return document.getElementById('wrapper').removeChild(elem);
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
