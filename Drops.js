class Dropsclass {
    constructor(x,y){
     var option = {
         friction:0.001,
         restitution:0.5
     }

     this.body=Bodies.circle(x,y,3,option)
     this.radius=5
     World.add(world,this.body)
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,1100), y:random(-10,0)})
        }
    }
    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
