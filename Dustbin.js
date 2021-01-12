class Dustbin{
    constructor(x,y,w,h) {
  var options = {
      isStatic:true,
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    World.add(world,this.body);
    }
    display(){
      var dustbinPos = this.body.position;
      push();
      translate(dustbinPos.x,dustbinPos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill("white");
      rect(0,0,this.w,this.h);
      pop();
    }
    
  }