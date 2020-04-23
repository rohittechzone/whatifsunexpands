var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sunimg,mercuryimg,venusimg,earthimg,marsimg,jupiterimg,saturnimg,uranusimg,neptuneimg;
var radius = 60;
var anglem = 00;
var anglev = 0;
var anglee = 0;
var anglema = 10;
var anglej = 0;
var angles = -90;
var angleu = 0;
var anglen = 0;
var speedm = 4.5;
var speedv = 4;
var speede = 3.5;
var speedma = 3;
var speedj = 2.5;
var speeds = 2;
var speedu = 1.5;
var speedn = 1;

var centerX = 500;
var centerY = 400;

function preload(){
sunimg = loadImage("planets/sun.png");
mercuryimg = loadImage("planets/mercury.png");
venusimg = loadImage("planets/venus.png");
earthimg = loadImage("planets/earth.png");
marsimg = loadImage("planets/mars.png");
jupiterimg = loadImage("planets/jupiter.png");
saturnimg = loadImage("planets/saturn.png");
uranusimg = loadImage("planets/uranus.png");
neptuneimg = loadImage("planets/neptune.png");
}
function setup() {
  createCanvas(1000,800);

  sun = createSprite(500, 400, 50, 50);
  sun.addImage(sunimg);
  sun.scale = 0.9;
  sun.setCollider("circle",0,0,87);
 // sun.debug = true;

  mercury = createSprite(-800, 400, 50, 50);
  mercury.addImage(mercuryimg);
  mercury.scale = 0.08;
  mercury.setCollider("circle",0,0,100);
 // mercury.debug = true;

  venus = createSprite(900, 400, 50, 50);
  venus.addImage(venusimg);
  venus.scale = 0.05;
  venus.setCollider("circle",0,0,270);
 // venus.debug = true;

  earth = createSprite(900, 400, 50, 50);
  earth.addImage(earthimg);
  earth.scale = 0.15;
  earth.setCollider("circle",0,0,70);
 // earth.debug = true;

  mars = createSprite(900, 400, 50, 50);
  mars.addImage(marsimg);
  mars.scale = 0.10;
  mars.setCollider("circle",0,0,90);
 // mars.debug = true;

  jupiter = createSprite(900, 400, 50, 50);
  jupiter.addImage(jupiterimg);
  jupiter.scale = 0.50;
  jupiter.setCollider("circle",0,0,80);
 // jupiter.debug = true;

  saturn = createSprite(900, 400, 50, 50);
  saturn.addImage(saturnimg);
  saturn.scale = 0.50;
  saturn.setCollider("rectangle",0,5,230,100,-10);
 // saturn.debug = true;

  uranus = createSprite(900, 400, 50, 50);
  uranus.addImage(uranusimg);
  uranus.scale = 0.20;
  uranus.setCollider("circle",0,0,85);
 // uranus.debug = true;

  neptune = createSprite(900, 400, 50, 50);
  neptune.addImage(neptuneimg);
  neptune.scale = 0.20;
  neptune.setCollider("circle",0,0,80);
 // neptune.debug = true;
}

function draw() {
  background(0, 0, 20);  
  if(frameCount % 0.5 === 0){
    sun.scale = sun.scale+0.005;
  }
  anglem = anglem + speedm;
  mercury.x= centerX -(-160) * cos(anglem);
  mercury.y= centerY  + (-140) * sin(anglem);

  anglev = anglev + speedv;
  venus.x= centerX -(-200) * cos(anglev);
  venus.y= centerY  + (-170) * sin(anglev);

  anglee = anglee + speede;
  earth.x= centerX -(-240) * cos(anglee);
  earth.y= centerY  + (-200) * sin(anglee);

  anglema = anglema + speedma;
  mars.x= centerX -(-280) * cos(anglema);
  mars.y= centerY  + (-230) * sin(anglema);

  anglej = anglej + speedj;
  jupiter.x= centerX -(-320) * cos(anglej);
  jupiter.y= centerY  + (-260) * sin(anglej);

  angles = angles + speeds;
  saturn.x= centerX -(-360) * cos(angles);
  saturn.y= centerY  + (-290) * sin(angles);

  angleu = angleu + speedu;
  uranus.x= centerX -(-440) * cos(angles);
  uranus.y= centerY  + (-350) * sin(angles);

  anglen = anglen + speedn;
  neptune.x= centerX -(-500) * cos(angles);
  neptune.y= centerY  + (-395) * sin(angles);

  if(sun.isTouching(mercury)){
    mercury.destroy();
  }
  if(sun.isTouching(venus)){
    venus.destroy();
  }
  if(sun.isTouching(earth)){
    earth.destroy();
  }
  if(sun.isTouching(mars)){
    mars.destroy();
  }
  if(sun.isTouching(jupiter)){
    jupiter.destroy();
  }
  if(sun.isTouching(saturn)){
    saturn.destroy();
  }
  if(sun.isTouching(uranus)){
    uranus.destroy();
  }
  if(sun.isTouching(neptune)){
    neptune.destroy();
  }
  drawSprites();
}