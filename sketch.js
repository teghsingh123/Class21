var fixedRect;
var movingRect;
var go1, go2;

function setup() {
  createCanvas(800,400);
  movingRect  = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red";
 
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "red";

  go1=createSprite(300, 100, 50, 50);
  go1.shapeColor="yellow";

  go2=createSprite(500, 100, 50, 50);
  go2.shapeColor="yellow";
  
}

function draw() {
  background("black"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go1)){
    go1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    go1.shapeColor="yellow";
    movingRect.shapeColor="red";
  }

    
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 
  && object2.x-object1.x< object1.width/2+object2.width/2
  && object1.y-object2.y<object1.height/2+object2.height/2
  && object2.y-object1.y<object1.height/2+object2.height/2){
  
    return true;
}
else{
 return false;
}
}
