const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var base,world;


var particles = [];
var plinko = [];
var divisions = [];

var divisionsHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  base = new Ground(240,790,485,20);

  for(var k=0;k <= width; k = k+80){

    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for(var j=40; j<= width; j = j+50){

    plinko.push(new Plinko(j,75));

  }

  for(var j=15;j<=width;j = j+50){

    plinko.push(new Plinko(j,155));

  }

}

function draw() {
  background(0); 
  Engine.update(engine);

  if(frameCount%60 === 0){

    particles.push(new Particles(random(width/2-10, width/2-10),10,10));

  }

  for(var k=0;k < divisions.length; k++){

    divisions[k].display();

  }

  for(var j = 0;j<plinko.length;j++){

    plinko[j].display();

  }

  for(var j = 0;j<particles.length;j++){

    particles[j].display();

  }



  base.display();



}