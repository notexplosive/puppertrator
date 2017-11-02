class PlayerHeadBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    let cursorpos = CURSOR.actor.getPosition();
    this.actor.spriteRenderer.setColor(this.actor.getParent().spriteRenderer.getColor());
    
    if(cursorpos.x > 3){
      this.actor.spriteRenderer.setAnimation("Right");
    }
    
    if(cursorpos.x < -3){
      this.actor.spriteRenderer.setAnimation("Left");
    }
    
    if(cursorpos.y > 1){
      if(Math.abs(cursorpos.x) < 4){
        this.actor.spriteRenderer.setAnimation("Up");
      }
    }else{
      if(cursorpos.y < -1 && Math.abs(cursorpos.x) < 4){
        this.actor.spriteRenderer.setAnimation("Down");
      }else
      if(cursorpos.x > 0){
        this.actor.spriteRenderer.setAnimation("Right");
      }else{
        this.actor.spriteRenderer.setAnimation("Left");
      }
    }
  }
}
Sup.registerBehavior(PlayerHeadBehavior);
