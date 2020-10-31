class Paper{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.3
        }
        this.body = Bodies.circle(30, 600, 50, options);
        this.radius = 50;
        this.image = loadImage("paper.png");
        //this.image.scale = 2;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //imageMode(CENTER);
        image(this.image, pos.x, pos.y, 60, 60);
    }
}