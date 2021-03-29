class UmbrellaClass {
   constructor(x,y){
       var option={
       'isStatic':true
       }

       this.body=Bodies.circle(x,y,200,option)
       this.radius=200;
       this.image=loadImage("images/Image.png");
       World.add(world,this.body);
       this.body.visible=false;
       
   }

   display(){
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y-120,50,50);
   }
}