var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var clock = 0;
var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var towerbuttonImg = document.createElement("img");
towerbuttonImg.src = "images/tower-btn.png";
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";
var hp = 100;
var FPS=60;
var isbuilding = false;
var cursor={x:0,y:0}
var tower = {
	range: 96,
	aimingEnemyId: null
};
var enemies = [];
function Enemy(){ 
        this.x = 96;
	this.y=480-32;
	this.direction={x:0,y:-1};
	this.speed=64;
	this.pathDes = 0;
	this.move=function(){
        if( isCollided(enemyPath[this.pathDes].x, enemyPath[this.pathDes].y, this.x, this.y, this.speed/FPS, this.speed/FPS) ){
            if( this.pathDes === 6){
            	this.hp = 0;
            } else {
	            this.x = enemyPath[this.pathDes].x;
	            this.y = enemyPath[this.pathDes].y;
	            this.pathDes++;
	            var unitVector = getUnitVector( this.x, this.y, enemyPath[this.pathDes].x, enemyPath[this.pathDes].y );
	            this.direction.x = unitVector.x;
	            this.direction.y = unitVector.y;
            }
        } else {
            // this.x += this.direction.x * this.speed/FPS;
            this.x = this.x + this.direction.x * this.speed/FPS;
            // this.y += this.direction.y * this.speed/FPS;
            this.y = this.y + this.direction.y * this.speed/FPS;
        }
	};
}


var enemyPath = [
    {x:96,y:64},	
	{x:384,y:64},
	{x:384,y:192},
	{x:224,y:192},
	{x:224,y:320},
	{x:544,y:320},
	{x:544,y:96}
];



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
	if ( clock%80==0 ) {
		var newEnemy = new Enemy();
		enemies.push(newEnemy);
	}

	ctx.drawImage(bgImg,0,0);
	for(var i=0; i<enemies.length; i++){
		if(enemies[i].hp<=0){
		enemies.splice(i,1)
		} else {
			enemies[i].move();
			ctx.drawImage( slimeImg, enemies[i].x, enemies[i].y);
		}
	}

	
	if(isbuilding){
		ctx.drawImage(towerImg,cursor.x,cursor.y);
	}
	// ctx.drawImage(slimeImg, enemy.x, enemy.y);
	ctx.drawImage(towerbuttonImg, 576, 416,64,64);
	ctx.drawImage(towerImg,tower.x,tower.y);
	ctx.fillText( "hp:"+hp, 50, 50 );
	ctx.font = "24px Arial";
	ctx.fillStyle = "white";
	clock++;
}

// setTimeout(draw,1000);
setInterval(draw, 16);
function isCollided ( pointX, pointY, targetX, targetY, targetWidth, targetHeight ) {
if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
){
        return true;
} else {
        return false;
}
}

function getUnitVector (srcX, srcY, targetX, targetY) {
    var offsetX = targetX - srcX;
    var offsetY = targetY - srcY;
    var distance = Math.sqrt( Math.pow(offsetX,2) + Math.pow(offsetY,2) );
    var unitVector = {
        x: offsetX/distance,
        y: offsetY/distance
    };
    return unitVector;
}

