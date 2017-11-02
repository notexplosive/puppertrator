class TickToSceneBehavior extends Sup.Behavior {
  delay         = 60 * 10;
  scene:string  = "End";
  awake() {
    this.delay = 60 * 5;
  }

  update() {
    this.delay--;
    
    if(this.delay < 0){
      Sup.loadScene(this.scene);
    }
  }
}
Sup.registerBehavior(TickToSceneBehavior);
