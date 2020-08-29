var gun,ball,player,playerImg,bg,bird,bird1,ballImg,birdImg,GbirdImg,HbirdImg,bullet=10;  
var shoot=true;
var score=0;
var CannonSound,birdSound;


var birdGroup = [];
var bird1Group = []
var ballGroup = [];
function preload(){
var rand=round(random(1,3))
 switch (rand) {
    case 1:
    bg=loadImage("background.jpg.Jpg")
    break;
    case 2:
      bg=loadImage("background1.jpg.Jpg ")
    break;
    case 3:
      bg=loadImage("background2.jpg.JPG")
    break;
    
default:
    break;
    
}
birdImg=loadAnimation("Frame01.png","Frame2.png","Frame3.png","Frame4.png","Frame5.png","Frame6.png","Frame7.png","Frame8.png")
HbirdImg=loadAnimation("H1.gif","H2.gif","H3.gif")
GbirdImg=loadAnimation("1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","10.gif","11.gif","12.gif","13.gif","14.gif","15.gif")
ballImg=loadImage("ball.png")
playerImg=loadImage("player.png")
cannonSound=loadSound("Cannon.mp3")
birdSound=loadSound("birds_soud.mp3")

	}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  player= createSprite(569, 528, 50, 50);

}

function draw() {
  background(bg); 
  text(mouseX+" "+mouseY,50,50)
  player.x=World.mouseX;
  player.addImage("player.png",playerImg)
  player.scale=0.4
  if(keyDown("space")&&bullet>=0){
blast()
bullet--

  }
  textSize(21) 
  stroke("black")
  strokeWeight(4)
  text("SCORE : "+score,133,67)
  text("BULLETS LEFT  : "+bullet,715,46)
  
  spawnBirds()
  spawnBirds1()
  for (let i = 0; i < ballGroup.length; i++) {
    for (let j = 0; j < birdGroup.length; j++) {

  
    if(ballGroup[i].isTouching(birdGroup[j])){
      
      birdGroup[j].destroy()
      ballGroup[i].destroy()
      score++
       } 
      }
  } 
  for (let i = 0; i < ballGroup.length; i++) {
    for (let j = 0; j < bird1Group.length; j++) {

    
    if(ballGroup[i].isTouching(bird1Group[j])){
      bird1Group[j].destroy()
      ballGroup[i].destroy()
      score++
       } 
      }
  } 

  
  
  drawSprites();
}
function blast(){
  ball=createSprite(490,445,10,10)
  ball.addImage("ball.png",ballImg)
  ball.x=player.x
  ball.velocityY=-6
  ball.scale=0.1
  ballGroup.push(ball)
  cannonSound.play()
 
}
function spawnBirds() {
   if (World.frameCount % 150 === 0) {
     birdSound.play()
    var bird = createSprite(displayWidth,320,40,10);
    bird.addAnimation("GbirdImg",GbirdImg)
    bird.y = random(0,280);
   
    bird.velocityX = -3;
    bird.scale=0.2
    bird.lifetime = random(100,150);
  birdGroup.push(bird);
  }
  
}
function spawnBirds1() {
  birdSound.play()
    if (World.frameCount % 250 === 0) {
    var bird = createSprite(0,320,40,10);
    var rand=Math.round(random(1,2))
    if(rand===1){
      bird.addAnimation("HbirdImg",HbirdImg)
      bird.scale=0.8
    }else if(rand===2){
      bird.addAnimation("RightBird",birdImg)
      bird.scale=0.2
    }
    bird.y = random(0,280);
      bird.velocityX = 3;
    bird.lifetime = random(100,150);
    bird1Group.push(bird);
  }
  
}

