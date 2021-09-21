var cave;

function preload(){
  cave = loadImage("./Images/cave.png");
  life = loadImage("./Images/Heart.png");
  playerS = loadAnimation("./Images/cave-player.png");
  playerR = loadAnimation("./Images/cave-player-r1.png","./Images/cave-player-r2.png","./Images/cave-player-r3.png","./Images/cave-player-r4.png","./Images/cave-player-r5.png","./Images/cave-player-r6.png");
  playerL = loadAnimation("./Images/cave-player-l1.png","./Images/cave-player-l2.png","./Images/cave-player-l3.png","./Images/cave-player-l4.png","./Images/cave-player-l5.png","./Images/cave-player-l6.png",);

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  player = createSprite(20,600,25,25);
  player.addAnimation("runS",playerS);
  player.addAnimation("runR",playerR);
  player.addAnimation("runL",playerL);
  player.scale = 1.5;

  island1 = createSprite(150,540,200,20);
  island1.shapeColor = "#312113";
  island2 = createSprite(250,620,200,20);
  island2.shapeColor = "#312113";
  island3 = createSprite(150,430,200,20);
  island3.shapeColor = "#312113";
  island4 = createSprite(340,515,20,190);
  island4.shapeColor = "#312113";
  island5 = createSprite(200,320,300,20);
  island5.shapeColor = "#312113";
  island6 = createSprite(60,380,20,100);
  island6.shapeColor = "#312113";
  island7 = createSprite(200,210,400,20);
  island7.shapeColor = "#312113";
  island8 = createSprite(500,300,20,430);
  island8.shapeColor = "#312113";
  // island9 = createSprite(650,630,315,40);
  // island9.shapeColor = "#312113";
  island10 = createSprite(340,375,20,100);
  island10.shapeColor = "#312113";
  island11 = createSprite(600,525,220,20);
  island11.shapeColor = "#312113";
  island12 = createSprite(800,525,20,650);
  island12.shapeColor = "#312113";
  island13 = createSprite(680,420,240,20);
  island13.shapeColor = "#312113";
  island14 = createSprite(610,310,240,20);
  island14.shapeColor = "#312113";
  island15 = createSprite(685,200,250,20);
  island15.shapeColor = "#312113";

  invisiblegate1 = createSprite(25,430,80,20);
  invisiblegate1.shapeColor = "#312113";
  invisiblegate2 = createSprite(290,430,80,20);
  invisiblegate2.shapeColor = "green";
  invisiblegate3 = createSprite(290,540,80,20);
  invisiblegate3.shapeColor = "#312113";

  key1 = createSprite(290,580,20,30);
  key1.shapeColor = "yellow";
  key2 = createSprite(95,375,20,30);
  key2.shapeColor = "yellow";
  key3 = createSprite(20,157,20,30);
  key3.shapeColor = "yellow";

  lava1 = createSprite(420,610,140,50);
  lava1.shapeColor = "red";

  box1 = createSprite(425,500,100,200);

  tp1 = createSprite(800,140,20,100);
  tp1.shapeColor = "yellow";

  edges = createEdgeSprites();

  edge1 = createSprite(windowWidth/2,1,windowWidth,5);
  edge1.shapeColor = "#312113";
  edge2 = createSprite(windowWidth/2,640,windowWidth,5);
  edge2.shapeColor = "#312113";
  edge3 = createSprite(1,windowHeight/2,5,windowHeight);
  edge3.shapeColor = "#312113";
  edge4 = createSprite(1365,windowHeight/2,5,windowHeight);
  edge4.shapeColor = "#312113";
  edge5 = createSprite(windowWidth/2,80,windowWidth,20);
  edge5.shapeColor = "#312113";


}

function draw(){
  background(cave);

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
    player.changeAnimation("runR",playerR);
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
    player.changeAnimation("runL",playerL);
  }
  if(keyDown(UP_ARROW)&&player.y>100){
    player.y = player.y - 10;
  }
  player.velocityY = player.velocityY + 0.3;
  player.collide(edges);

  box1.visible = false;
  lava1.visible = false;
  edges.visible = false;

  player.collide(island1);
  player.collide(island2);
  player.collide(island3);
  player.collide(island4);
  player.collide(island5);
  player.collide(island6);
  player.collide(island7);
  player.collide(island8);
  // player.collide(island9);
  player.collide(island10);
  player.collide(island11);
  player.collide(island12);
  player.collide(island13);
  player.collide(island14);
  player.collide(island15);
  // player.collide(island16);
  // player.collide(island17);

  player.collide(invisiblegate1);
  player.collide(invisiblegate3);

  player.collide(edge1);
  player.collide(edge2);
  player.collide(edge3);
  player.collide(edge4);
  player.collide(edge5);

  if(player.isTouching(lava1)){
    player.x = 50;
    player.y = 580;
  }

  if(player.isTouching(tp1)){
    player.null;
    fill("yellow");
    textSize(50);
    strokeWeight(2);
    text("To Be Continued...",900,200);
  }

  if(player.isTouching(key2)){
    invisiblegate3.destroy();
    key2.destroy();
  }

  if(player.isTouching(key1)){
    invisiblegate1.destroy();
    key1.destroy();
  }

  if(player.isTouching(box1)){
    lava1.visible = true;
  }

  if(player.isTouching(key3)){
    lava1.destroy();
    key3.destroy();
  }

  // camera.x = player.x;
  // camera.y = player.y;

  drawSprites();
}

function keyReleased(){
    player.changeAnimation("runS",playerS);
  }