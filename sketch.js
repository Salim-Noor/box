var box;

function setup() {
  createCanvas(800,800);
  
  box = createSprite(200,200,50,50)

  box.shapeColor = "#14F00A";
}

function draw() 
{
  background("#0A76F0");

  if(keyDown("right")){
    box.x = box.x +3
  }

  if(keyDown("left")){
    box.x = box.x -3
  }

  if(keyDown("up")){
    box.y = box.y -3
  }

  if(keyDown("down")){
    box.y = box.y +3
  }

  drawSprites();
}