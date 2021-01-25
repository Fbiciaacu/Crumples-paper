class Ground{
    constructor(x,y,height,width)
    {
        var options = {
            isStatic:true,
        }

        this.body = Bodies.rectangle(750, 670, 25, 1500, options);
        this.width = 25;
        this.height = 1500;
        this.x = 750;
        this.y = 670;

        World.add(world, this.body);
    }
    display()
    {
        rectMode(CENTER);
        fill("yellow")
        strokeWeight(4);
        stroke("yellow");
        rect(this.x,this.y,this.height,this.width);





    }


}