var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	ball=new Ball();
	
	bin2=new Bin(680,680,95,200);
	
	ground=new Ground(650,710,3000,50);

 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
 
  bin2.display();
  
  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode==UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:3,y:-1})


}

};