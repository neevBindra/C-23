//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
//namespace
var engine,world,ground, box1,box2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create(); //created our own engine
  world = engine.world;     //created our own world
  var option = {
    isStatic :true
  }
  ground = Bodies.rectangle (200,380,400,10,option); // cretaed bodies inside our own world
  World.add (world,ground);
  
  box1 = new Box(200,300,50,100); //new keyword is used to create new object from any class.
  box2 = new Box(225,100,100,50);
  ground = new Ground(200,380,400,10);
}

function draw() {
  background("red");  
  Engine.update ( engine);
  box1.display();
  box2.display();
  ground.display();
}