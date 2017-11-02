class LoadCinematicBehavior extends Sup.Behavior {
  delay       = 60;
  timer       = 0;
  awake() {
    
  }

  update() {
    if(this.delay > 0){
      this.delay--;
    }
    if(this.delay == 0 || ( Sup.Input.wasMouseButtonJustPressed(0) && this.delay > 0 )){
      TEXTHANDLR.loadText("intro");
      this.delay--;
    }
    
    let bg                  = Sup.getActor("Main");
    let child               = bg.getChildren();
    
    let c       = bg.spriteRenderer.getColor();
    
    if(GAME.getFlag("intro")){
      
      c.r = this.iterateColor(c.r);
      c.g = this.iterateColor(c.g);
      c.b = this.iterateColor(c.b);
      
      bg.spriteRenderer.setColor( c )
      for(let actor of child){
        actor.spriteRenderer.setColor( c );
      }
    }
    
    if(GAME.getFlag("intro2")){
      if( c.r > .75 && c.g > .75 && c.b > .75){
        Sup.loadScene("Main");
      }
    }
  }
  
  iterateColor(n:number){
    if(n < 1){
      n *= 1.01;
    }else{
      n = 1;
    }
    return n;
  }
}
Sup.registerBehavior(LoadCinematicBehavior);
