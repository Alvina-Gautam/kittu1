const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Render = Matter.Render;

var dustbinIMG, dustbinSprite;
var paperSprite,paperIMG;
var paperObject;
var groundObject;
var dustbinObject;
var world;

function setup() {
createCanvas(1450, 700);

 rectMode(CENTER);
  
engine = Engine.create();
world = engine.world;

paperObject = new paper (200,400,40);
groundObject  = new ground (width/2,670,width,20);
dustbinObject = new dustbin (1200,650);

var render = Render.create(
{
elememt : document.body,
engine:engine,
options:{
width:1200,
height:700,
wireframes:false
}
});
Engine.run(engine);
Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paperObject.display();
  groundObject.display();
  dustbinObject.display();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});}
   }