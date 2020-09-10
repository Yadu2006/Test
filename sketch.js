var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Setting the credentials of package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	//Creating box objects
	box1 = new Box(250,610,20,100);
	box2 = new Box(360, 650, 200, 20);
	box3 = new Box(450, 610, 20, 100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //Setting th x and y values of package sprite to x and y values of package body 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
  //displaying the box
  box1.display();
  box2.display();
  box3.display();

  //Key pressed
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	
	//the package body fall only when down arrow is pressed
	if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);

  }
}



