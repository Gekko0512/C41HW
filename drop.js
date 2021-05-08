class createDrop{
    constructor(x,y){
        var options ={
        'friction': 0.1,
        'restitution': 1.1,
        'density': 1 
        }
    this.x = x;
    this.y = y;
    this.r = 5; 
    this.rain = Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.rain);
    }

    display(){
        var pos = this.rain.position;
        pos.x = this.rain.position.x;
        pos.y = this.rain.position.y;
        fill(30,144,255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,800),y:random(0,700)});
        }
    }
}