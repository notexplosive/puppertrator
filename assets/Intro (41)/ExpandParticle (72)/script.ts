class ExpandParticleBehavior extends Sup.Behavior {
  awake() {
    this.actor.spriteRenderer.setOpacity(1);
  }

  update() {
    let scl = this.actor.getLocalScale().x;
    this.actor.setLocalScale(scl*1.01,scl*1.01,1);
    
    let opac = this.actor.spriteRenderer.getOpacity();
    this.actor.spriteRenderer.setOpacity(opac * .9);
    
    if(opac < .001){
      this.actor.destroy();
    }
  }
}
Sup.registerBehavior(ExpandParticleBehavior);
