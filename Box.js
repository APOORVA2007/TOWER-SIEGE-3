class Box{
    constructor(x,y,width,height){

        var options = {
            'isStatic': false,
            'restitution': 0.8,
            'friction': 0.06
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    score(){
        if(this.visibility<0 && this.visibility > -105){
            score = score + 1;
        }
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        fill("white");
    }
}