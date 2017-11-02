class ClearEverythingBehavior extends Sup.Behavior {
  awake() {
    FLAGS = {};
    READMODE    = false;
    ANSWERMODE  = false;
  }

  update() {
    
  }
}
Sup.registerBehavior(ClearEverythingBehavior);
