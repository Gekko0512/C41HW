const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var batman,umbrella;
var rainDrops;
var batmanImg,lightningImg1,lightningImg2,lightningImg3,lightningImg4;
var drops = [];
var maxDrops = 100;

var r;
var lightning,thunder;

function preload(){
    batmanImg = loadAnimation  ("wf/walking_1.png","wf/walking_2.png","wf/walking_3.png","wf/walking_4.png","wf/walking_5.png","wf/walking_6.png","wf/walking_7.png","wf/walking_8.png");
    lightningImg1 = loadImage("tb/1.png");
    lightningImg2 = loadImage("tb/2.png");
    lightningImg3 = loadImage("tb/3.png");
    lightningImg4 = loadImage("tb/4.png");
}


 function setup(){

    createCanvas(displayWidth,displayHeight);

    engine = Engine.create();   
    world = engine.world;

    batman = createSprite(500,550);
    batman.addAnimation("batmanImg",batmanImg);
    batman.scale = 0.5;

    //drops = new Drops(200,500,20);
    //umbrella = new Umbrella(200,500,50);

    lightning=createSprite(800,random(100,300));
    lightning.scale = 0.5;

    thunder = createSprite(300,random(200,400));
    thunder.scale = 0.5;



    for(i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(700,1400),random(0,500)));
    }
    

   
    
    
 
}

function draw(){
    
  
    Engine.update(engine);
    background("black");
     
    drawSprites();
    for (i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
    }
    
    r = Math.round(random(1,4));

    switch (r){
        case 1 : lightning.addImage(lightningImg1);
        break;

        case 2 : thunder.addImage(lightningImg2);
        break;

        case 3 : lightning.addImage(lightningImg3);
        break;

        case 4 : thunder.addImage(lightningImg4);
        break;


    }
    
   
   // umbrella.display();
}   

