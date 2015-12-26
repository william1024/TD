var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerbuttonImg = document.createElement("img");
towerbuttonImg.src = "images/tower-btn.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

var FPS=60;
var isbuilding = fales
var cursor={x:0,y:0}
var tower = {};
var enemy = { 
	x:96, 
	y:480-32,
	direction:{x:0,y:-1},
	speed:64
};

var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif";

$("#game-canvas").mousemove(function(event){
  cursor.x=event.offsetX;
  cursor.y=event.offsetY;
});
$("#game-canvas").click(function(){
 if(cursor.x>576&&cursor.x<640
 &&cursor.y>416&&cursor.y<480){
   isbuilding=true;
 }
 if(isbuilding){
   tower.x = cursor.x;
   tower.y = cursor.y;
 }
});


function draw(){
  ctx.drawImage(bgImg,0,0);
  if(isbuilding){
    ctx.drawImage(towerImg,cursor.x,cursor.y);
  }
  ctx.drawImage(slimeImg, enemy.x, enemy.y);
  ctx.drawImage(towerbuttonImg, 576, 416,64,64);
  ctx.drawImage(towerImg,tower.x,tower.y);
}

// setTimeout(draw,1000);
setInterval(draw, 16);
