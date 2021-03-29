const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var drops = [];
var maxDrops = 100;
var rand;
var boyAnimation;
var boyWalking;
var umbrela;
var Thunder;
var Thunder1;
var Thunder2;
var Thunder3;
var Thunder4;
var thunderCreatedFrame;
var thunderSound
var rand;

function preload() {
  backgroundImage=loadImage("background.jpg");
  boyAnimation=loadAnimation(
      "images/walking_8.png",
      "images/walking_7.png",
      "images/walking_6.png",
      "images/walking_5.png",
      "images/walking_4.png",
      "images/walking_3.png",
      "images/walking_2.png",
      "images/walking_1.png"
    );
  Thunder1=loadImage("images/1.png");
  Thunder2=loadImage("images/2.png");
  Thunder3=loadImage("images/3.png");
  Thunder4=loadImage("images/4.png");
  
  thunderSound=loadSound("thunder.mp3");
}


function setup() {
 var canvas = createCanvas(1100,800);

 engine = Engine.create();
 world = engine.world;

 if (frameCount%150===0) {
     for(var i = 0; i < maxDrops; i++){
         drops.push(new Dropsclass(random(0,1100),random(0,700)));
        }
    }
    
    manWalking();

    umbrela =new UmbrellaClass(500,400)
    

}

//*********************************************************************************** */

function draw() {
     
  background(backgroundImage);
  Engine.update(engine);
  
  umbrela.display();
  thunderSound.play();
  CreatingThunder();
  //this is the for loop for making multiple display and update function 
  for(var i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
  }
  
  drawSprites();
}


//********************************************************************************** 
function CreatingThunder() {
  //Here we are making switch function to make thunder randomly anywhere;
  rand = Math.round(random(1,4));
  if(frameCount%60 === 0){
      thunderCreatedFrame = frameCount;
      Thunder = createSprite(random(10,1100), random(10,30),10,10);
      switch(rand){
          case 1: Thunder.addImage(Thunder1);
          break;
          case 2: Thunder.addImage(Thunder2);
          break;
          case 3: Thunder.addImage(Thunder3);
          break;
          case 4: Thunder.addImage(Thunder4);
          break;
          default: break;
      }
      Thunder.scale = 1;
   }
  if(thunderCreatedFrame+10 === frameCount && Thunder){
      Thunder.destroy();
  }
}

//**************************************************************************************/

function manWalking() {
boyWalking=createSprite(500,500)
boyWalking.addAnimation("running",boyAnimation)
boyWalking.scale=0.85;
}