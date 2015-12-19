var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var heroImg = document.createElement("img");
heroImg.src = "images/jason.gif";

var hero = {
  x: 0,
  y: 0
};

function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(heroImg, hero.x, hero.y);
}

// setTimeout(draw,1000);
setInterval(draw, 16);
