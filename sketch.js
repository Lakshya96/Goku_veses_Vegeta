const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, goku, vegeta, ground, gokuBar1, gokubar2, vegetaBar1, vegetaBar2, gokuPunching, vegetaPunching, cloud;
var gokuLife=200;
var vegetaLife=200;

function preload() {
    cloud=loadImage("images/nimbus.png");
}

function setup(){
    createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;
    goku=new Goku(850,400,100,200);
    vegeta=new Vegeta(150,400,100,200);
    gokuBar2=createSprite(1200, 40, 200, 20);
    gokuBar2.shapeColor("red");
    gokuBar1=createSprite(gokuLife*6, 40, gokuLife, 20);
    gokuBar1.shapeColor("green");
    vegetaBar2=createSprite(100, 40, 200, 20);
    vegetaBar2.shapeColor("red");
    vegetaBar1=createSprite(vegetaLife/2, 40, vegetaLife, 20);
    vegetaBar1.shapeColor("green");
    ground=new Ground(width/2, height-10, width, 20);
}

function draw(){
    background(255);
    textSize(20);
    fill("orange");
    text("Goku",1200 ,10);
    fill("blue");
    text("Vegeta", 0 , 10);
    Engine.update(engine);
    Engine.run(engine);
    goku.display();
    vegeta.display();
    ground.display();
    drawSprites();
}

function keyPressed() {
    if (keyCode===LEFT_ARROW) {
        Matter.Body.translate(goku.body,{x:-50, y:0});
    }
    if (keyCode===RIGHT_ARROW) {
        Matter.Body.translate(goku.body,{x:50, y:0});
    }
    if (keyCode===UP_ARROW) {
        goku.punchRight();
    }
    if (keyCode===UP_ARROW&&goku.body.position.x-vegeta.body.position.x<=300) {
        vegeta.applyforce(vegeta.body, vegeta.body.position, {x:-20, y:0});
        vegetaLife=vegetaLife-20;
    }
    if (keyCode===65) {
        Matter.Body.translate(vegeta.body,{x:-50, y:0});
    }
    if (keyCode===68) {
        Matter.Body.translate(vegeta.body,{x:50, y:0});
    }
    if (keyCode===83) {
        vegeta.punch();
    }
    if (keyCode===83&&goku.body.position.x-vegeta.body.position.x<=300) {
        goku.applyforce(goku.body, goku.body.position, {x:20, y:0});
        gokuLife=gokuLife-20;
    }
}

function gokuPunch() {
    if (goku.body.position.x<vegeta.body.position.x) {
        gokuPunching=loadImage("images/GokuPunchingRight.jpg");
    }
    if (goku.body.position.x>vegeta.body.position.x) {
        gokuPunching=loadImage("images/GokuPunchingLeft.jpg");
    }
}

function vegetaPunch() {
    if (vegeta.body.position.x<goku.body.position.x) {
        vegetaPunching=loadImage("images/VegetaPunchingRight.jpg");
    }
    if (goku.body.position.x>goku.body.position.x) {
        vegetaPunching=loadImage("images/VegetaPunchingLeft.jpg");
    }
}

function detectColision(lblock,lmango){
    mangoBodyPosition=lmango.body.position;
    blockBodyPosition=lblock.body.position;

    var distance=dist(blockBodyPosition.x,blockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
        if (distance<=lmango.r+stone.r){
        Matter.Body.setStatic(lmango.body,false);
    }
}
