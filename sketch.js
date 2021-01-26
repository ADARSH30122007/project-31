var Engine=Matter.Engine,
 Wrld=matter.world,
 Events=Matter.Events,
 Bodies=Mattert.Bodies;

 var particles=[];
 var plinkos=[];
 var divisions=[];
 var divisionHeight=200;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
ground=new ground(width/2,height,width,20);


for(var k=0;k<=width;k=k+80){
divisions.push(new divisions(k,height-divisionHeigth/2,10,divisionHeight))
}
for(var j=40; j<=width ; j=j+50){
plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width-10;j=j+50){
plinkos.push(new Plinko(j,175))
}

for(var j=0; j<particles.length;j++){
  particles[j].display();
}

for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  for(var i=0;1<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(100,70),10,10))
  }

   for(var j=0;j<particles.length;j++){
     particles[j].display();
   }

   for(var k=0;k<divisions.length;k++){
   divisions[k].display();
   }
  drawSprites();
}