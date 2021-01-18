
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3,bin4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(70,300,10);
	ground=Bodies.rectangle(400,690,width,20,{isStatic:true} );

	World.add(world,ground);
	
	bin1=new Bin(600,670,200,20);
	bin2=new Bin(700,660,20,330);
	bin3=new Bin(500,660,20,70);
	bin4=new Bin(600,495,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
  paper.display();
  Key();
  
 
  fill("red");
  rect(400,690,width,20);
  drawSprites();

 
}


function Key()
{
	if(keyCode===UP_ARROW)
	{
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-0.9});
	   
	}
}
