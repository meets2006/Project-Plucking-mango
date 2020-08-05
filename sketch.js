
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy,boyimg,ground,stone,tree,launcher;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,650,800,50)
boy = createSprite(300,500,10,10)
boy.addImage(boyimg);

stone = new Stone(305,499,40);
mango1 = new Mango(650,350,30)
mango2 = new Mango(640,370,30)
mango3 = new Mango(650,320,30)
mango4 = new Mango(660,350,30)
mango5 = new Mango(637,360,30)
tree = new Tree(700,350);
launcher = new Launcher(stone.body,{x:305,y:499});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectCollision(stone.body,mango1.body);
  detectCollision(stone.body,mango2.body);
  detectCollision(stone.body,mango3.body);
  detectCollision(stone.body,mango4.body);
  detectCollision(stone.body,mango5.body);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  tree.display();
  drawSprites();
 
}

function keyPressed()
{
if(keyCode === 32){
	Matter.Body.setPosition(stone.body, {x:235,y:420})
	launcher.attach(stone.body);
}
}

function detectCollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.Position
	stoneBodyPosition=lstone.body.Position
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}


