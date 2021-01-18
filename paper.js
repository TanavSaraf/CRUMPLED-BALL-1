class Paper
{
    constructor(x,y,r)
    {
       
        this.body=Bodies.circle(x,y,r,{restitution:0.3,density:1.2,friction:0.5});
        World.add(world,this.body);
        this.r=r;
    }
    display()
    {
        var pos=this.body.position;
        push()
        fill("pink");
        ellipse(pos.x,pos.y,this.r,this.r);
        
        pop()
    }
}