class Dustbin{
    constructor(){
        var options={
            isStatic: true
        }

        this.body1 = Bodies.rectangle(450, 585, 5, 170, options);
        World.add(world, this.body1);

        this.body2 = Bodies.rectangle(600, 585, 5, 170, options);
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(550, 670, 140, 10, options);
        World.add(world, this.body3);

        this.image = loadImage("dustbin.png");
    }

    display(){
        image(this.image, 475, 510, 150, 170);
    }
}