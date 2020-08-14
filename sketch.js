var fixedRect, movingRect;
var holder;
var holds;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(400, 200, 150, 50);
  movingRect = createSprite(100, 100, 125, 25);
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

  holder = fixedRect.width/2 + movingRect.width/2;
  holds = fixedRect.height/2 + movingRect.height/2;

  if (holder > movingRect.x - fixedRect.x && holder > fixedRect.x - movingRect.x &&
    holds > movingRect.y - fixedRect.y && holds > fixedRect.y - movingRect.y) {
    movingRect.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
    fixedRect.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
  } 
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}