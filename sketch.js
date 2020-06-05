const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   ground2= new Ground(200,390,400,30)
   box2=new Box(150,360,100,40)
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display();
    ground2.display();
   
}