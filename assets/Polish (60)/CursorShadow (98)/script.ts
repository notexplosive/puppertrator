class CursorShadowBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    let parent = this.actor.getParent().spriteRenderer;
    this.actor.spriteRenderer.setAnimation(parent.getAnimation());
    this.actor.spriteRenderer.setAnimationFrameTime(parent.getAnimationFrameTime());
  }
}
Sup.registerBehavior(CursorShadowBehavior);
