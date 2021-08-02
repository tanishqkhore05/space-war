var space,spaceImg;
var player,playerImg;
var ammo, ammoImg;
var enemy,enemyImg; 


function preload()
{

    spaceImg=loadImage("Images/space.jpg");
    playerImg=loadImage("Images/player.png");
    ammoImg=loadImage("Images/ammo.png");
    enemyImg=loadImage("Images/enemy.png");
}

function setup()
{
  createCanvas(600,600);

  space=createSprite(250,250);
  space.addImage("space",spaceImg);
  space.scale=2;

  player=createSprite(300,530);
  player.addImage("player",playerImg);
  player.scale=0.4;
  
  ammoGroup= new Group();
  enemyGroup= new Group();

}

function draw()
{
  
    background("red");

    space.velocityY = -3 


    if (space.y < 1)
    {
      space.y = space.width/2;
    }
    

    player.x = World.mouseX;


    if (keyDown("space")) 
    {
      createAmmo();
    }
    
    drawSprites();
    createEnemy();
    
}

function createAmmo()
{
  var ammo= createSprite(100, 100, 60, 10);
  ammo.addImage("ammo",ammoImg);
  ammo.y = 500;
  ammo.x=player.x;
  ammo.velocityY = -6;
  ammo.lifetime = 82;
  ammo.scale = 0.050;
  ammoGroup.add(ammo);
}


function createEnemy() 
{
  var enemy = createSprite(Math.round(random(20,500)),150,20,20);
  enemy.addImage("enemy",enemyImg);
  //enemy.velocityY = 3;
  enemy.lifetime = 150;
  enemy.scale = 0.1;
  enemyGroup.add(enemy);
}

function spawnEnemy()
{
 if (frameCount % 1200 === 0)
 {
      var enemy = createSprite(400,200,10,40);
      obstacle.velocityX = 6 
      
      
        //generate random obstacles
        var rand = Math.round(random(1));
        switch(rand) 
        {
          case 1: enemy.addImage(enemy);
                  break;
          default: break;
        }
      
    //assign scale and lifetime to the obstacle           
    enemy.scale = 0.7;
    enemy.lifetime = 300;
  
    enemy.add(enemy);
      //enemy.collide(ground2);
     //enemy.debug=false;
    // enemy.setCollider("circle",0,0,40);
   //add each obstacle to the group
      }
    }