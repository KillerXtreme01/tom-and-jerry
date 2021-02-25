var tom, jerry, jungle;
var tomimg1, jungleimg, tomimg2, tomimg3;
var jerryimg1, jerryimg2, jerryimg3, jerryimg4;
function preload() {
jungleimg = loadImage("images/garden.png")
tomimg1 = loadAnimation("images/cat1.png")
tomimg2 = loadAnimation("images/cat3.png", "images/cat4.png")
tomimg3 = loadAnimation("images/cat2.png")
jerryimg1 = loadAnimation("images/mouse1.png")
    //load the images here
}

function setup(){
    createCanvas(1200,1200);
    background(10,177,188)
    jungle = createSprite(200,200);
    jungle.addImage(jungleimg)
    jungle.scale = 1.0
    tom = createSprite(600,450,20,20)
    tom.addAnimation("cat1",tomimg1);
    tom.scale = 0.1
    jerry = createSprite(100,450,20,20)
    jerry.addAnimation("mouse1",jerryimg1)
    jerry.scale = 0.1



    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    text(mouseX+',' + mouseY, 10, 45);

    drawSprites();
    keyPressed();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW){
     tom.velocityX = -5;
     tom.addAnimation("cat2", tomimg2);
     tom.changeAnimation("cat2")
 }
 if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = -0
     tom.addAnimation("cat3", tomimg3);
     tom.changeAnimation("cat3")
     
 }
  //For moving and changing animation write code here


}
