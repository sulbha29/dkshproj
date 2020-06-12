const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var hpenemy,hpplayer,enemy
var hpimage,hpplayerimage,enemyimage
var t3,t4,t5
var t1m,t1,t1d
var t1i,t1mi,t1di

var t2,t2t,t2d
var t2i,t2ti,t2di

var t3,t3t,t3d

var t4,t4t,t4d

var t5i,t5
var t6
var t11,t7t,t12



var towers=[];
var tower;
var t10
function preload(){
 hpimage= loadImage("images/enemy hp.png")
 hpplayerimage= loadImage("images/player hp.png")
enemyimage= loadAnimation("images/m1.png","images/m2.png","images/m3.png","images/m4.png",
"images/m5.png","images/m6.png","images/m7.png","images/m8.png","images/m9.png","images/m10.png",
"images/m11.png","images/m12.png","images/m13.png","images/m14.png","images/m15.png",
"images/m16.png","images/m17.png","images/m18.png","images/m19.png")
t1i=loadImage("images/top_tile.png")
t1mi=loadImage("images/color.png")
t1di=loadImage("images/bottom_tile.png")


t2i=loadImage("images/inner_corner_top_right.png")
t2ti=loadImage("images/color.png")
t2di=loadImage("images/outer_corner_top_right.png")
t3di=loadImage("images/bottom_tile.png")
t5di=loadImage("images/right_tile.png")
t6di=loadImage("images/left_tile.png")
t7di=loadImage("images/outer_corner_bottom_left.png")
t8di=loadImage("images/inner_corner_bottom_left.png")
t9di=loadImage("images/outer_corner_bottom_right.png")
t10di=loadImage("images/inner_corner_bottom_right.png")
t11di=loadImage("images/outer_corner_top_left.png")

t12di=loadImage("images/inner_corner_top_left.png")
towerimage=loadImage("images/full fire tower.png")
towerimage1=loadImage("images/full fire tower_burned.png")
}
function setup(){
  createCanvas(displayWidth,displayHeight);
 //player
  hpplayer=createSprite(500,40,10,10)
hpplayer.addImage(hpplayerimage);
hpplayer.scale=0.2;
//tower
engine = Engine.create();
world = engine.world;

//enemy
enemy=createSprite(530,800,10,10)
enemy.addAnimation("enemy",enemyimage);
enemy.scale=0.5
                for(var i =0;i<=300;i=i+80){
               var t1 =createSprite(i,100,10,10)
               t1.addImage(t1i)
               t1.scale=0.3
              }                                
              for(var i =0;i<=300;i=i+80){
                var t2 =createSprite(i,178,10,10)
                t2.addImage(t1di)
                t2.scale=0.3
               }         

               for(var i =260;i<=420;i=i+80){
                var t10 =createSprite(400,i,10,10)
                t10.addImage(t5di)
                t10.scale=0.3
               }         
               for(var i =260;i<=420;i=i+80){
                var t11 =createSprite(320,i,10,10)
                t11.addImage(t6di)
                t11.scale=0.3
               }         

               for(var i =175;i<=422;i=i+80){
                var t20 =createSprite(480,i,10,10)
                t20.addImage(t6di)
                t20.scale=0.3
               }         

               for(var i =260;i<=500;i=i+80){
                var t21 =createSprite(560,i,10,10)
                t21.addImage(t5di)
                t21.scale=0.3
               }         

               for(var i =635;i<=875;i=i+80){
                var t21 =createSprite(i,105,10,10)
                t21.addImage(t1i)
                t21.scale=0.3
               }     
               
               for(var i =635;i<=875;i=i+80){
                var t21 =createSprite(i,175,10,10)
                t21.addImage(t3di)
                t21.scale=0.3
               }             

               t2t=createSprite(320,178,10,10)
               t2t.addImage(t2i);
            t2t.scale=0.3

            t3t=createSprite(320,100,10,10)
            t3t.addImage(t1i);
         t3t.scale=0.3


         t4t=createSprite(400,100,10,10)
         t4t.addImage(t2di);
      t4t.scale=0.3

      t6=createSprite(400,179,10,10)
      t6.addImage(t5di);
   t6.scale=0.3

   t7t=createSprite(320,580,10,10)
   t7t.addImage(t7di);
t7t.scale=0.3


var t12 =createSprite(320,500,10,10)
                t12.addImage(t6di)
                t12.scale=0.3

                var t13 =createSprite(400,500,10,10)
                t13.addImage(t8di)
                t13.scale=0.3

                var t14 =createSprite(400,580,10,10)
                t14.addImage(t1di)
                t14.scale=0.3

                var t15 =createSprite(480,580,10,10)
                t15.addImage(t1di)
                t15.scale=0.3


                var t16 =createSprite(560,580,10,10)
                t16.addImage(t9di)
                t16.scale=0.3
                
                var t17 =createSprite(480,500,10,10)
                t17.addImage(t10di)
                t17.scale=0.3


                
                var t18 =createSprite(480,100,10,10)
                t18.addImage(t11di)
                t18.scale=0.3

                var t19 =createSprite(555,180,10,10)
                t19.addImage(t12di)
                t19.scale=0.3


                
                var t20=createSprite(555,100,10,10)
                t20.addImage(t1i)
                t20.scale=0.3
                //tower = new Tower(200,200,50,50)
              }
              function mouseClicked(){
				  console.log("h");
				towers.push(new Tower(mouseX,mouseY,50,50));  
              //if(mouseY>10){
                //
                //}
              }
              
function draw()
{
background("grey");
Engine.update(engine)
//console.log(mouseX)
//console.log(mouseY)
//tower.display();
for(i = 0; i<towers.length;i++){
  towers[i].display(); 
  //console.log(towers)
}
drawSprites();
}
 


/*}function mouseReleased(){
  
}*/













