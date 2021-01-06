const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(800,400);
  hr=hour();
  mn=minute();
  sc=second();
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
  drawSprites();
}
function map(){
  angleMode(DEGREES)
  scAngle=map(sc,0,60,0,360);
}

function line(){

  push()
  rotate(scAngle)
  stroke(250,0,0);
  line(0,0,100,0)
  pop()
}