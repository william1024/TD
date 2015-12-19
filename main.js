var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerbuttonImg = document.createElement("img");
towerbuttonImg.src = "images/tower-btn.png";

function draw(){
  ctx.drawImage(bgImg,0,
  0);
  ctx.drawImage(towerbuttonImg, 576, 416);
}

// setTimeout(draw,1000);
setInterval(draw, 16);
