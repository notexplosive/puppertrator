class PortraitFlyByBehavior extends Sup.Behavior {
  speed = .01;
  awake() {
    this.speed += Math.random() * .01;
    this.actor.spriteRenderer.setOpacity(.75);
  }

  update() {
    this.actor.moveY( this.speed );
    
    if(this.actor.getPosition().y > 15){
      this.actor.destroy();
    }
  }
}
Sup.registerBehavior(PortraitFlyByBehavior);
