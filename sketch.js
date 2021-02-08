Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;
function preload(){
   bg = loadImage("GamingBackground.png");
}

function setup() {
createCanvas(1300, 700);
engine = Engine.create();
world = engine.world;
ground = new Ground(500,500,1000,20);
block1 = new Blocks(500,465,50,50);

block2 = new Blocks(500,415,50,50);
block3 = new Blocks(500,365,50,50);
block4 = new Blocks(500,315,50,50);
block5 = new Blocks(500,265,50,50);
block6 = new Blocks(560,465,50,50);
block7 = new Blocks(560,415,50,50);
block8 = new Blocks(560,365,50,50);
block9 = new Blocks(560,315,50,50);
block10 = new Blocks(560,265,50,50);
block11 = new Blocks(560,215,50,50);
block12 = new Blocks(620,465,50,50);
block13 = new Blocks(620,415,50,50);
block14 = new Blocks(620,365,50,50);
block15 = new Blocks(620,315,50,50);
block16 = new Blocks(620,265,50,50);
block17 = new Blocks(680,215,50,50);
block18 = new Blocks(680,465,50,50);
block19 = new Blocks(680,415,50,50);
block20 = new Blocks(680,365,50,50);
block21 = new Blocks(680,315,50,50);
block22 = new Blocks(680,265,50,50);
block23 = new Blocks(680,215,50,50);
block24 = new Blocks(740,465,50,50);
block25 = new Blocks(740,415,50,50);
block26 = new Blocks(740,365,50,50);
block27 = new Blocks(740,315,50,50);
block28 = new Blocks(740,265,50,50);

monster = new Monster(900,430,225,400);
hero = new Hero(200,400,300,100);
sling = new Launcher(hero.body,{x:200,y:0});
}

function draw() {
background(bg);
Engine.update(engine);
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
monster.display();
hero.display();
}
function mouseDragged(){
   Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}