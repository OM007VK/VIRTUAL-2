var dog, happyDogImage, DogImage;
var database; 
var MilkImage, MilkImg;
var foodS, foodStock;

function preload()
{
  happyDogImage=loadImage("images/dogimg1.png") 
  DogImage=loadImage("images/dogImg.png")
  MilkImage=loadImage("images/Milk.png")

}

function setup() {
	createCanvas(1250, 700);
  dog=createSprite(1000,340,5,5)
  dog.addImage(DogImage)
  dog.scale=0.4;
  database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readFoodStock)
  database.ref("/").update({Food:20})

  //Milk Images row1
  MilkImg=createSprite(100,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;
  MilkImg=createSprite(150,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(200,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(250,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(300,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(350,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(400,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(450,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(500,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(550,250,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  //Milk Images row2
  MilkImg=createSprite(100,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(150,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(200,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(250,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(300,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(350,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(400,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(450,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(500,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(550,330,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  //Milk Images row3
  MilkImg=createSprite(100,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1;  
  MilkImg=createSprite(150,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(200,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(250,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(300,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(350,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 
  MilkImg=createSprite(400,410,5,5);
  MilkImg.addImage(MilkImage)
  MilkImg.scale=0.1; 

  //create feed the dog button here 
  lastFed = createButton("Add Food"); 
  lastFed.position(900,85); 
  lastFed.mousePressed(feedDog);

  lastFed = createButton("Feed the dog"); 
  lastFed.position(1100,85); 
  lastFed.mousePressed(feedDog);
}

function draw() {  
  background(46,139,87)
  drawSprites();
  fill("white");
  textSize(15);
  text("ADD FOOD BUTTON",515,20)
  fill("white");
  textSize(15);
  text("FEED GOD BUTTON",720,20)
  //add styles here
  fill("white");
  textSize(25);
  text("Food Count: "+foodS,300,50);
  fill ("black")
  text(mouseX + "," + mouseY, mouseX,mouseY)
}

  function readFoodStock(data){
  foodS=data.val();
  console.log("sting")
}
  function feedDog(){
    dog.addImage(happyDogImage);
    foodS--;
    database.ref('/').update({
    Food:foodS,
    FeedTime : hour()
    })
  } 
  function feedDog(){
    dog.addImage(happyDogImage);
    foodS++;
    database.ref('/').update({
      Food:foodS,
      FeedTime : hour()
    })
  
  }




































































































//var dog, sadDog, happyDog;
//var foodObj;
//var foodS, foodStock, Feed;
//var fedTime, lastFed, feed, addFood;
//
//function preloade () {
//    sadDog=loadeImage("images/Dog.png");
//    happyDog-loadImage("inages/happy dog.png");
//}
//
//function setup () {
//  database = firebase.database()
//  createCanvas(1000,400);
//
//  foodObj = new Food();
//
//  foodStock = database.ref('Food');
//  foodStock.on("value", readStock);
//
//  dog=createSprite(800,200,150,150);
//  dog.addImage(sadDog);
//  dog.scale=0.15;
//
//  Feed = createSprite("Feed the dog");
//  Feed.position(700,95);
//  Feed.mousePressed(feedDog);
//
//  addFood = createSprite("Add Food");
//  addFood.position(800,95);
//  addFood.mousePressed(addFoods);
//
//
//}
//
//function draw () {
//  background("green");
//
//  foodObj.display();
//
//  fedTime = database.ref('fedTime');
//  fedTime.on("value",function (data){
//    lastFed = data.val();
//  })
//
//  fill(255,255,254);
//  textSize(15);
//  if (lastFed >=12) {
//    text("Last Feed" + lastFed %12 +  "PM" , 350, 30 );
//  }
//  else if(lastFed == 0) {
//    text("Last Feed: 12AM ", 350 , 30 );
//  }
//  else {
//    text("Last Feed: " +lastFed + "AM" ,350,30);
//  }
//
//  darwSprites();
//}
//
//function readStock(data){
//  foodS = data.val();
//  foodObj.updateFoodStock(foodS);
//}
//
//function feedDog(){
//  dog.addImage(happyDog);
//
//  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
//  database.ref('/').update({
//    Food: foodObj.getFoodStock(),
//    FeedTime : hour()
//  })
//}
//
//function addFoods() {
//  foodS++;
//  database.ref('/').update({
//    Food: foodS
//  })
//}