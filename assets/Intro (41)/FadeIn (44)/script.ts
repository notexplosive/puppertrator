class FadeInBehavior extends Sup.Behavior {
  delay       = 0;
  playedSound = false;
  awake() {
    this.actor.textRenderer.setOpacity(0);
  }

  update() {
    if(this.delay > 0){
      this.delay--;
      
      if(this.delay == 1){
        this.actor.textRenderer.setOpacity(.01);
      }
    }else{
      let opac      = this.actor.textRenderer.getOpacity();
      let maxopac   = 10;
      
      if(opac > maxopac/2 && !this.playedSound){
        Sup.Audio.playSound("Uncork").setPitch(.5);
        this.playedSound = true;
      }
      
      if(opac < maxopac){
        this.actor.textRenderer.setOpacity(opac * 1.66)
      }else{
        this.actor.textRenderer.setOpacity(maxopac)
      }
    }
  }
}
Sup.registerBehavior(FadeInBehavior);
