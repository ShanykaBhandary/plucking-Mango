
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new mango(540,980,40,30)
    mango2 = new mango(550,900,40,30)
	mango3 = new mango(560,950,40,30)
	mango4 = new mango(570,990,40,30)
	mango5 = new mango(580,910,40,30)
	tree = new tree()	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stoneObj,mongo1);
  detectCollision(stoneObj,mongo2);
  detectCollision(stoneObj,mongo3);
  detectCollision(stoneObj,mongo4);
  detectCollision(stoneObj,mongo5);

  
  drawSprites();
 
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}



