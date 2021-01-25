
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	Paper = new Paper(56, 45, 50);
	ground = new Ground(750, 670, 25, 1500);
	dustbin = new dustbin(1200,650)

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});



	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);
 rectMode(CENTER) 
 background(0);
  
	Paper.display();
	ground.display();
	dustbin.display();
	

}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}


