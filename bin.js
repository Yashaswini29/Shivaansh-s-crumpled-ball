class Bin{
    constructor(){
        var options = {
            isStatic: true,
        }
        this.leftBody = Bodies.rectangle(590, 625, 20, 150, options);
        World.add(world, this.leftBody);

        this.rightBody = Bodies.rectangle(710, 625, 20, 150, options);
        World.add(world, this.rightBody);

        this.bottomBody = Bodies.rectangle(650, 665, 140, 20, options);
        World.add(world, this.bottomBody);

    }
    display(){
        var leftPos = this.leftBody.position;
        rectMode(CENTER);
        fill("black");
        rect(leftPos.x, leftPos.y, 20, 150);

        var rightPos = this.rightBody.position;
        rectMode(CENTER);
        fill("black");
        rect(rightPos.x, rightPos.y, 20, 150);

        var bottomPos = this.bottomBody.position;
        rectMode(CENTER);
        fill("black");
        rect(bottomPos.x, bottomPos.y, 140, 20);

    }
}