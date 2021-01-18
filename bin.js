class Bin{
    constructor(x,y,width,height)
    {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true,density:3,restitution:0,friction:3});
        World.add(world,this.body);
        this.height=height;
        this.width=width;
    }
         display()
         {
             var pos=this.body.position;
             rect(pos.x,pos.y,this.width,this.height);
         }
}