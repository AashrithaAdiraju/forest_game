
var bunny;

function setup(){
  createCanvas(800,600);
  bunny = createSprite(40,580,30,30);
}

function draw(){
  background("pink");

  if(keyIsDown(RIGHT_ARROW)){
    bunny.x = bunny.x +100
  }

  drawSprites();
}
