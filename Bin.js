class Bin{
    constructor(x,y,width,height){
       var options={
         isStatic:true,
         friction:0.5,
         density:1.2
       }
       this.body=Bodies.rectangle(x,y,width,height,options);

       this.width=width
       this.height=height

       this.image=loadImage("dustbingreen.png")

       World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        var pos=this.body.position

        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,680,680,this.width,this.height)
        fill("blue");
    }
}