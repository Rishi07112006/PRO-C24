
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinLeft = new Dustbin(600,640,15,73);
	World.add(world,dustbinLeft);
	//dustbinLeft.shapeColor = "white";
	dustbinBottom = new Dustbin(683,670,150,15);
	World.add(world,dustbinBottom);
	//dustbinBottom.shapeColor = "white";
	dustbinRight = new Dustbin(750,640,15,73);
	World.add(world,dustbinRight);
	//dustbinRight.shapeColor = "white";

	ground = new Ground(width/2,680,width,10);
	 World.add(world, ground);
	 //ground.shapeColor = "yellow";

	 paper = new Paper(280,550,40);
	 //paper.velocityY = 3;
	 //paper.collide(ground);
	 World.add(world, paper);
	 paper.shapeColor  = "blue";
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbinLeft.display();
  dustbinBottom.display();
  dustbinRight.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:130});

	}
}

