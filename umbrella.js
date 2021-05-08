class Umbrella{
    constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;

    var options ={
    'isStatic':true
    }
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    this.image = loadImage("wf/walking_1.png");
    World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    pos.x = this.x;
    pos.y = this.y;
    
    fill(0,250,23);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,300,300);
    
        
    }
}