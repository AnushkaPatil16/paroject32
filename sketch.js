const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

//var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    text("Time : "+time1,100,100);
    }

    // add condition to check if any background image is there to add
   
    

    Engine.update(engine);

    // write code to display time in correct format here
  
    //drawSprite();


}

async function getBackgroundImg(){

   
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response1 =await response.json();
    var datetime1 = response1.datetime
     time1 = datetime1.slice(11,13);
    if(time1 >  04 && time1 < 11 ){
        backgroundImg = loadImage("sunrise1.png");
    }
    else if(time1 > 11 && time1 < 16){
        backgroundImg = loadImage("sunrise6.png")
    }
    else{
        backgroundImg = loadImage("sunset11.png");
    }
    console.log(time1)
    
   
    
   

  
}
