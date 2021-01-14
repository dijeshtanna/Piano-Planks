var canvas;
var s1, s2,s3,s4;
var music;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  s1 = createSprite(0,580,360,30);
  s1.shapeColor = "yellow";

  s2 = createSprite(295,580,200,30);
  s2.shapeColor = "red";

  s3 = createSprite(515,580,200,30)
  s3.shapeColor = "green";


  s4 = createSprite (740,580,220,30)
  s4.shapeColor = "blue";

ball = createSprite(random(20,750),100,40,40);
ball.shapeColor = "black";
ball.velocityX = 4;
ball.velocityY = 6;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges =createEdgeSprites();
    ball.bounceOff(edges);

    if (s1.isTouching(ball)&& ball.bounceOff(s1)){
        ball.shapeColor = "yellow";
        music.play();
    }
    if (s2.isTouching(ball)){
        ball.shapeColor = "red";
        ball.velocityX = 0
        ball.velocityY = 0
        music.stop();

    }
    if (s3.isTouching(ball)&& ball.bounceOff(s3)){
        ball.shapeColor = "green";
   
    }

    if (s4.isTouching(ball)&& ball.bounceOff(s4)){
        ball.shapeColor = "blue";
        music.play();
    }
drawSprites();
    //add condition to check if box touching surface and make it box
}
