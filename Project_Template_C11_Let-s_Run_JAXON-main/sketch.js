var path, pathImg;
var runner, runner_running;
var power, coin, energy, power_text;
var obstacle, bomb;



function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");

  coin = loadImage("coin.png")
  pathImg = loadImage("path.png") 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
path.scale=1.2;


  runner = createSprite(200,325,20,20);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.1;








}

function draw() {
  background(0);

  if(keyDown("A")){
    runner.velocityX = -5;
  }
  if(keyDown("D")){
    runner.velocityX = 5;
  }
  if(path.y > 400){
    path.y = height/2;
  }


  drawSprites();
}
spawnObstacles()
function spawnObstacles(){

    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
       coin = createSprite(200,200);
      coin.x = Math.round(random(10,80));
      coin.addImage(coin);
      coin.scale = 0.5;
      cloud.velocityY = -3;
      
       //assign lifetime to the variable
      coin.lifetime = 400;
      

    
    }

}
