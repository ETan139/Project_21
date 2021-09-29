var ball
var ground1
var ground2
var ground3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
   
  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

	//Create the Bodies Here.
	ground1=new Ground(600,690,1200,20)
	ground2=new Ground(1100,620,20,120)
	ground3=new Ground(800,620,20,120)
	ball=new Ball(200,40,20)

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display()
  ground2.display()
  ground3.display()
  ball.display()
}
function keyPressed(){
  if (keyCode === UP_ARROW) {


   //write code here to applyForce on ball
   Matter.Body.applyForce(ball,ball.position,{x:50,y:-95})
   
  }
}