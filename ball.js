class Ball{
    constructor(x,y,radius){
    var options={
        restitution:0.3,friction:0,density:0.3
      }
     this.body= Bodies.circle(x,y,radius ,options)
     this.radius=radius
    World.add(world,this.body)
    }
    display(){
      fill("white")
    ellipseMode(RADIUS)
     ellipse(this.body.position.x,this.body.position.y, this.radius, this. radius)
    }
    }