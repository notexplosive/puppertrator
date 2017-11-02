class LayerWithCursorBehavior extends Sup.Behavior {
  offsetY = 1.1;
  awake() {
    
  }

  update() {
    let pos   = this.actor.getPosition();
    let cpos  = CURSOR.actor.getPosition();
    if(cpos.y > (pos.y + this.offsetY) ){
      pos.z = cpos.z + .01;
    }else{
      pos.z = cpos.z - .01;
    }
    
    if(READMODE || ANSWERMODE){
      pos.z = 0;
    }
    
    this.actor.setPosition(pos);
  }
}
Sup.registerBehavior(LayerWithCursorBehavior);
