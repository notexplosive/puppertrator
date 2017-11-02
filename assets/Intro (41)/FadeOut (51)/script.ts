class FadeOutBehavior extends Sup.Behavior {
  delay = 10;
  awake() {
    this.actor.spriteRenderer.setOpacity(1);
  }

  update() {
    if(this.delay > 0){
      this.delay--;
    }else{
      let opac      = this.actor.spriteRenderer.getOpacity();
      if(opac > 0.01){
        this.actor.spriteRenderer.setOpacity(opac * .9)
      }else{
        this.actor.spriteRenderer.setOpacity(0)
      }
    }
  }
}
Sup.registerBehavior(FadeOutBehavior);
