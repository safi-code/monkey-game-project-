
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivaltime;
var gameState=PLAY;
var PLAY=1;
var END=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup=new Group();
  obstaclesGroup=new Group();
}



function setup() {
  
monkey=createSprite(200,350,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,350,400,10);
  
  score=0;
  survivaltime=0;
}


function draw() {
  background("green");
  
  if(gameState===PLAY){
  ground.velocityX=-5;
  ground.x=ground.width/2;}
  
  if(keyDown("space")&&monkey.y>10){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(frameCount%200==0){
    Fruits();
  }
  if(frameCount%400==0){
    stones();
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;}
    
    if(monkey.isTouching(obstaclesGroup)){
      gameState=END;
    }
      else if(gameState===END){
        textSize(30);
        text("GAME OVER",100,200);
        

        monkey.velocityY=0;
        ground.velocoityX=0;
        obstaclesGroup.setVelocityXEach(0);
        FruitGroup.setVelocityEach(0);
        
        obstaclesGroup.setLifetimeEach(-1);
        FruitGroup.setLifetimeEach(-1);
        
        
      }
      
      
      
  
  
drawSprites();

 
  fill("white");
  text("score :"+score,320,30);
  
  fill("white");
  var survivaltime=Math.round(getFrameRate()/1);
  text("survival time:"+survivaltime,200,30);

}
function Fruits(){

  banana=createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3   ;
  
  FoodGroup.add(banana);
  FoodGroup.Lifetime=100;
  
  
  
}
function stones(){
    obstacle=createSprite(200,335,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
  obstacle.velocityX=-3;
  obstaclesGroup.add(obstacle);
  obstaclesGroup.Lifetime=100;
}




