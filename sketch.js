function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
  ball.shapeColor=("blue");
  ball2=createSprite(600,100,100,100);
  ball2.shapeColor=("green");
  ball3=createSprite(200,300,50,100);
  ball3.shapeColor=("pink");
  ball4=createSprite(500,100,30,30);
  ball4.shapeColor=("yellow")
}

function draw() {
  background("purple")
ball3.x=mouseX
ball3.y=mouseY
if(ball3.y-ball4.y<ball4.height/2+ball3.height/2
  &&ball4.y-ball3.y<ball4.height/2+ball3.height/2
  &&ball3.x-ball4.x<ball4.width/2+ball3.width/2
  &&ball4.x-ball3.x<ball4.width/2+ball3.width/2){
    ball3.shapeColor=("orange")
    ball4.shapeColor=("red")
  }
  else{
    ball3.shapeColor=("pink")
    ball4.shapeColor=("yellow")
  }
  drawSprites();
}