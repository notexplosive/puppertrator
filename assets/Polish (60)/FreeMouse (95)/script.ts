class FreeMouseBehavior extends Sup.Behavior {
  awake() {
    Sup.Input.setMouseVisible(true);
  }

  update() {
    
  }
}
Sup.registerBehavior(FreeMouseBehavior);
