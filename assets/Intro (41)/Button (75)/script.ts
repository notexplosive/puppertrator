class ButtonBehavior extends Sup.Behavior {
  pressed = false;
  awake() {
    this.pressed = false;
  }

  update() {
    this.pressed = false;
    
    if(this.actor.fMouseInput.isMouseOver){
      this.actor.spriteRenderer.setAnimation("on");
      this.actor.spriteRenderer.setColor(new Sup.Color(1,1,1));
      if(Sup.Input.isMouseButtonDown(0)){
        this.actor.spriteRenderer.setColor(new Sup.Color(1,1,.7));
      }
      
      if(Sup.Input.wasMouseButtonJustReleased(0)){
        this.pressed = true;
      }
    }else{
      this.actor.spriteRenderer.setAnimation("off");
    }
  }
}
Sup.registerBehavior(ButtonBehavior);
