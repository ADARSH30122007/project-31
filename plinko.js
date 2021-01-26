class Plinko{
  constructor(x,y){
    var options={
        restitution:1,
        friction:0,
        isStatic:true
    }
     this.r=10;
     this.body=Bodies.circle(x,y,this.r,options);
  }
   display(){
     var pos=htis.body.position;
     var angle=this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     pop();

   }
}