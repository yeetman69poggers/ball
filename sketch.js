const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var bottomGround, rightGround, leftGround, topGround
var ball
var button1, button2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  bottomGround = new Ground(200,390,400,20)
  rightGround = new Ground(390,200,20,400)
  leftGround = new Ground(10,200,20,400)
  topGround = new Ground(200,10,400,20)

ball_options = {
  restitution:0.95

}
  ball = Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)
button1 = createImg("push.png")
button1.position(220,30)
button1.size(50,50)
button1.mouseClicked(hForce)

button2 = createImg("push.png")
button2.position(220,300)
button2.size(50,50)
button2.mouseClicked(vForce)
 ellipseMode(RADIUS)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  bottomGround.show()
  rightGround.show()
  leftGround.show()
  topGround.show()
  ellipse(ball.position.x,ball.position.y,20)
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}