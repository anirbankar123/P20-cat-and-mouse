var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse,mouse2, mouseImg1,mouseImg2;
var invisiblesprite1,invisiblesprite2,invisiblesprite3,invisiblesprite4;
var invtree1,invtree2,invtree3,invtree4,invtree5;
var gameState=Start;
var diffx,diffy;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/catSitting.png");
    catImg2=loadAnimation("images/catWalking1.png","images/catWalking2.png");
    catImg3= loadAnimation("images/catHappy.png");
    mouseImg1=loadAnimation("images/mouseGift.png");
    mouseImg2= loadAnimation("images/mouseTease1.png","images/mouseTease2.png");
    mouseImg3=loadAnimation("images/mouseHappy.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    mouse = createSprite(420,590,10,30);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.075;
    mouse.setCollider("rectangle",0,0,mouse.width/2,mouse.height/3);
    mouse.debug = true
       
    cat = createSprite(980, 740,50,50);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.125;
    cat.setCollider("rectangle",0,0,cat.width/2,cat.height/3);
  cat.debug = true

    invisiblesprite1= createSprite(500, 790,1000,20);
    invisiblesprite2= createSprite(500, 380,1000,20);
    invisiblesprite3= createSprite(5, 600,20,1000);
    invisiblesprite4= createSprite(1000, 600,20,1000);
    invisiblesprite1.visible=false;
    invisiblesprite2.visible=false;
    invisiblesprite3.visible=false;
    invisiblesprite4.visible=false;

    invtree1=createSprite(130,450,60,250)
    invtree2=createSprite(550,470,60,250)
    invtree3=createSprite(990,450,20,350)
    invtree4=createSprite(300,420,60,30)
    invtree5=createSprite(725,450,60,40)
    invtree1.visible=false;
    invtree2.visible=false;
    invtree3.visible=false;
    invtree4.visible=false;
    invtree5.visible=false;    
    
}

function draw() {

    
        background(bg);
        text("SCORE=",(windowWidth/2),20) ;
        
        if (keyDown("right_arrow"))
        {  cat.x=cat.x+5;  }
        if (keyDown("left_arrow"))
        {  cat.x=cat.x-5;  }
        if (keyDown("up_arrow"))
        {  cat.y=cat.y-5;  }
        if (keyDown("down_arrow"))
        {  cat.y=cat.y+5;  }
        
        cat.collide(invisiblesprite1);
        cat.collide(invtree1);
        cat.collide(invisiblesprite2);
        cat.collide(invisiblesprite3);
        cat.collide(invisiblesprite4);
        cat.collide(invtree2);
        cat.collide(invtree3);
        cat.collide(invtree4);
        cat.collide(invtree5);
        
        diffx=(cat.x-mouse.x);
        if(diffx < 0)
        {
            diffx = diffx*(-1); 
        }

        diffy=(cat.y-mouse.y);
        if(diffy < 0)
        {
            diffy = diffy*(-1); 
        }
        
        if((((cat.height - mouse.height)/2) >= diffy) && (((cat.width - mouse.width)/2) >= diffx))
        {  console.log("TOM");
            cat.velocityX=0;
            cat.addAnimation("catLastImage", catImg3);
            cat.x =cat.x;
            cat.scale=0.2;
            cat.changeAnimation("catLastImage");
            mouse.addAnimation("mouseLastImage", mouseImg3);
            mouse.scale=0.15;
            mouse.changeAnimation("mouseLastImage");
        }
        //mouse.velocityX=6;
        //mouse.velocityY=5;
        //mouse.bounceOff(invisiblesprite1);
        //ball1.bounceOff(paddle);
        if(keyDown("space"))
        {
            makeCatWalk();  
        }
    drawSprites();
}


function makeCatWalk(){

        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25; 

        //cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
}
