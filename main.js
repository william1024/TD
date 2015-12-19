var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerbuttonImg = document.createElement("img");
towerbuttonImg.src = "images/tower-btn.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

var FPS=60;
var cursor={x:0,y:0}

$("#game-canvas").mousemove(function(event){
  cursor.x=event.pageX;
  cursor.y=event.pageY;
});
function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(towerImg,0,0);
  ctx.drawImage(towerbuttonImg, 576, 416,64,64);
}

// setTimeout(draw,1000);
setInterval(draw, 16);
