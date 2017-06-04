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

function createPlayer(l,t,id,pos,color){
	this.speed = 3;
	this.width = 25;
	this.height = 25;
	this.left = l;
	this.top = t;
	this.id = id;
	this.model = $("<div/>")
		.css({"backgroundColor":color,"height":this.height,"width":this.width,"left":this.left,"top":this.top,"position":pos})
		.attr({"id":this.id}),
  $('#wrapper').append($(this.model));
	$(this.model).appendTo("#wrapper");

}
function Point(){
	this.left = parseInt(Math.random()*960);
	this.top = parseInt(Math.random()*580);
	console.log(this.left+"--"+this.top)
	this.point = $("<div/>")
		.css({"backgroundColor":"yellow","height":"10px","width":"10px","left":this.left,"top":this.top,"position":"relative"})
	$(this.point).appendTo("#wrapper");
}
function update(){
  //player1
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
	collisons();
	requestAnimationFrame(update);
}
function collisons(){
	var elemLeft = parseInt($('#wrapper').css('left'));
	var elemWidth = parseInt($('#wrapper').css('width'));
	var elemTop= parseInt($('#wrapper').css('height'));
	if(parseInt(player.left) + player.width >= elemLeft+elemWidth){
		player.left = elemWidth - player.width-2;
	}
	if(parseInt(player.top) + player.height >= elemTop){
		player.top = elemTop - player.height-2;
	}
	if(parseInt(player.top) < 3){
		player.top = 3;
	}
	if(parseInt(player.left) < 3){
		player.left = 3;
	}

	if(parseInt(player2.left) + player2.width >= elemLeft+elemWidth){
		player2.left = elemWidth - player2.width-2;
	}
	if(parseInt(player2.top) + player2.height >= elemTop){
		player2.top = elemTop - player2.height-2;

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
