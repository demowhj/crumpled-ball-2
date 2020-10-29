class Ground{
    constructor(){
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(400, 690, 800, 54, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, 800, 20);
    }
}