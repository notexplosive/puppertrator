class LogoAnimBehavior extends Sup.Behavior {
  tick    = 0;
  delay   = 20;
  tscale  = 1;
  correct = 1;
  private shrink  = false
  awake() {
    this.correct = this.actor.getLocalScaleX();
    this.tick = this.delay;
    this.actor.setLocalScale(.1,.1,1);
  }

  update() {
    if(Sup.Input.wasMouseButtonJustPressed(0)){
      Sup.loadScene("Title");
    }
    
    let scl = this.actor.getLocalScale().x;
    
    if(this.tick > 0){
      this.tick--;
      this.actor.setVisible(false);
    }else{
      this.actor.setVisible(true);
      if(this.tick == 0){
        if(scl > (this.correct + .2) && !this.shrink){
          Sup.Audio.playSound("Uncork");
          this.shrink = true;
        }

        if(this.shrink){
          scl *= .9;
          if(scl < this.correct){
            this.tick = -1;
            scl = this.correct;
          }
        }else{
          scl *= 1.1;
        }
      }
    }
    
    this.actor.setLocalScale(scl,scl,1);
  }
}
Sup.registerBehavior(LogoAnimBehavior);
