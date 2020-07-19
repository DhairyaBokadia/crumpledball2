class Ball{
     constructor(){
        var options={
      restitution:0.3,
          friction:0.7,
          density:0.8
        }
        this.body=Bodies.circle(120,650,20,options);
        this.radius=20

        this.image=loadImage("paper.png")

        World.add(world,this.body)
     }
     display(){
         imageMode(CENTER)
         var pos=this.body.position
         circle(pos.x,pos.y,20);
         image(this.image,ball.x,ball.y,this.radius)

     }
}