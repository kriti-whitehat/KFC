var fR,mR

function setup() {
  createCanvas(800,400);
  fR=createSprite(400, 200, 50, 100);
  //fR.velocityX=3
  fR.debug=true;
  mR=createSprite(200, 200, 100, 50);
  //mR.velocityX=-3
  mR.debug=true;
}

function draw() {
  background("yellow");  
  mR.x=World.mouseX;
  mR.y=World.mouseY;

//if (mR.x-fR.x < fR.width/2+ mR.width/2 && fR.x-mR.x < fR.width/2+ mR.width/2){
//fR.velocityX=-3;
//mR.velocityX=3;


//}
  //mR.y-fR.y < fR.height/2+ mR.height/2 && fR.y-mR.y < fR.height/2+ mR.height/2){
  







  drawSprites();
}