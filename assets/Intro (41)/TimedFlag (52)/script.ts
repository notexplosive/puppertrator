class TimedFlagBehavior extends Sup.Behavior {
  timer       = 30;
  key         = "";
  awake() {
    
  }

  update() {
    if(this.timer > 0){
      this.timer--;
    }
    
    if(this.timer == 0){
      TEXTHANDLR.loadText("intro3");
      this.timer = -1;
    }
  }
}
Sup.registerBehavior(TimedFlagBehavior);
