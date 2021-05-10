class Vegeta {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        'isStatic':false
    }
    this.image=loadImage("images/Vegeta.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    push();
    var angle=this.body.angle;
    var pos =this.body.position;
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  punch(){
    this.image=loadImage("images/VegetaPunchingRight.jpg");
    setTimeout(() => { this.normal() } , 2000);
  }
  normal(){
      this.image=loadImage("images/Vegeta.png");
  }
};
