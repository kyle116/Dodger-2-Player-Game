var keyArray = [];
var currentWave = 1;
// window.onload = function() {
  initiate();
  update();
// }


var player;
var player2;
function initiate(){
	player = new createPlayer(150,50,"player1","relative","blue"); // (spawn points, player, relative position, player color)
	player2 = new createPlayer(150,0,"player2","relative","green");
}

function startGame() {
  // setInterval (function() {
    point();
    // if (parseInt(player.left) === $('.point').position().left) { //**wont equal right now since the random point isnt working
  //     console.log("dissapear")
  //   }
  // }, 2000)


}

function createPlayer(l,t,id,pos,color){
	this.speed = 3;
	this.width = 25;
	this.height = 25;
	this.left = l;
	this.top = t;
	this.id = id;
	this.model = $("<div id=" + id + "/>")
		.css({"backgroundColor":color,"height":this.height,"width":this.width,"left":this.left,"top":this.top,"position":pos})
		// .attr({"id":this.id})
  $('#wrapper').append($(this.model));
}

function point(){ //something about this function spawns the yellow dots but slowly goes lower and lower
  leftP = parseInt(Math.random()*970);
  topP = parseInt(Math.random()*580);
  $points = $("<div class=point/>")
    .css({"backgroundColor":"yellow","height":"10px","width":"10px","left":leftP,"top":topP,"position":"relative"})
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
  //$('.test').style.top
  leftR = parseInt(Math.random()*2) + parseInt(Math.random()*-2);
  topR = parseInt(Math.random()*2) + parseInt(Math.random()*-2);
  //if topR gets to certain top value start going negative same for left

  newTop = parseInt(document.getElementsByClassName('rock')[0].style.top) + topR;
  document.getElementsByClassName('rock')[0].style.top = newTop + "px"
  newLeft = parseInt(document.getElementsByClassName('rock')[0].style.top) + leftR;
  document.getElementsByClassName('rock')[0].style.left = newLeft + "px"
  requestAnimationFrame(randomFloat);
}
$rocks = $("<div class=rock/>")
  .css({"backgroundColor":"red","height":"10px","width":"10px","left":"10px","top":"10px","position":"relative"})
$('#wrapper').append($rocks)
function checker() {
  console.log('up')
  if (document.getElementById(player.id).style.left === document.getElementsByClassName('rock')[0].style.left) {
  console.log('works');
}
requestAnimationFrame(checker)
}
// checker()

function blockade(){
	var elemLeft = parseInt($('#wrapper').css('left'));
	var elemWidth = parseInt($('#wrapper').css('width'));
	var elemTop= parseInt($('#wrapper').css('height'));
  //blocks player 1 from moving outside of game
	if(parseInt(player.left) + player.width >= elemLeft+elemWidth){
		player.left = elemWidth - player.width - 2;
	}
	if(parseInt(player.top) + player.height >= elemTop){
		player.top = elemTop - player.height - 2;
	}
	if(parseInt(player.top) < 3){
		player.top = 3;
	}
	if(parseInt(player.left) < 3){
		player.left = 3;
	}
  //blocks player 2 from moving outside of game
	if(parseInt(player2.left) + player2.width >= elemLeft+elemWidth){
		player2.left = elemWidth - player2.width - 2;
	}
	if(parseInt(player2.top) + player2.height >= elemTop){
		player2.top = elemTop - player2.height - 2;
	}
	if(parseInt(player2.top) < 3){
		player2.top = 3;
	}
	if(parseInt(player2.left) < 3){
		player2.left = 3;
	}
}
// function getTheStyle(id,styleProperty){
//     var elem = document.getElementById(id);
//     var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue(styleProperty);
// 	return theCSSprop;
//   }
window.onkeydown = function(page){
	keyArray[page.keyCode] = page.type === 'keydown';
}
window.onkeyup = function(page){
	keyArray[page.keyCode] = page.type === 'keydown'
}
//page (the parameter) defines what key is pressed from global window
//page.keyCode will return number and will determine array position. page.type will return "keydown" and just check if its true
//this will in turn return if the key was true or not in the if statement about. if true, then move player accordingly
