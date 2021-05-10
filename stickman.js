class Goku{
        constructor(x, y, width, height) {
          var options = {
              'restitution':0.8,
              'friction':0.3,
              'density':0.005,
              'isStatic':false
          }
          this.image=loadImage("images/goku.jpg");
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
        punchRight(){
          this.image=loadImage("images/gokuPunchingLeft.jpg");
          setTimeout(() => { this.normal() } , 2000);
        }
        normal(){
            this.image=loadImage("images/Goku.jpg");
        }
      };