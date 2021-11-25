class Block {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':3.0,
            'density':0.01
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        this.visibility=255;
      }
      display(){
        if(this.body.speed<10){
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        }else{
          World.remove(world, this.body);
          push()
          this.visibility-=5
          pop()
        }

      }
      
}