class CursorBehavior extends Sup.Behavior {
  private isMousedOverThing     = false;
  private infoText              = "";
  private waitTimer             = 0;
  
  awake() {
    Sup.Input.setMouseVisible(false);
    this.actor.spriteRenderer.setAnimation("Cursor");
    this.actor.spriteRenderer.playAnimation(false);
    this.actor.moveZ(3);
    
    let bgpanel = new Sup.Actor("bgpanel",Sup.getActor("CursorText"));
    bgpanel.setLocalPosition(-.05,0,-.1);
    bgpanel.setLocalScale(1.1,.45,1);
    new Sup.SpriteRenderer(bgpanel,"UI/Gray");
    bgpanel.spriteRenderer.setOpacity(.8);
    bgpanel.spriteRenderer.setColor(.5,.5,.5);
    
  }

  update() {
    let mousepos  = Sup.Input.getMousePosition();
    let ratio     = Sup.Game.getScreenRatio();
    
    if(this.waitTimer > 0){
      if(!READMODE && !ANSWERMODE){
        // animate
        this.waitTimer--;
      }
    }else{
      // back to normal
    }
    
    mousepos.x *= 9.4;
    mousepos.y *= 7.1;
    
    if(this.isMousedOverThing && this.actor.spriteRenderer.getAnimation() == "Cursor"){
      this.changeAnim("Box")
      this.actor.spriteRenderer.setOpacity(.8);
    }
    
    if(!this.isMousedOverThing && this.actor.spriteRenderer.getAnimation() == "Box"){
      this.changeAnim("Cursor");
      this.actor.spriteRenderer.setOpacity(1);
    }
    
    Sup.getActor("CursorText").textRenderer.setText(this.infoText);
    Sup.getActor("CursorText").getChild("Shadow").textRenderer.setText(this.infoText);
    
    if(this.infoText != ""){
      Sup.getActor("CursorText").getChild("bgpanel").setVisible(true);
      Sup.getActor("CursorText").getChild("bgpanel").setLocalScaleX(this.infoText.length/2);
    }else{
      Sup.getActor("CursorText").getChild("bgpanel").setVisible(false);
    }
    
    this.actor.setLocalPosition(mousepos);
    this.isMousedOverThing  = false;
    this.infoText           = "";
    
    if(!DISABLECAM){
      CAMERA.setLocalPosition(mousepos.clone().multiplyScalar(.001));
    }
  }
  
  changeAnim(anim:string){
    let totalLength   = this.actor.spriteRenderer.getAnimationFrameCount();
    let currentFrame  = this.actor.spriteRenderer.getAnimationFrameIndex();
    this.actor.spriteRenderer.setAnimation(anim);
    this.actor.spriteRenderer.playAnimation(false);
    this.actor.spriteRenderer.setAnimationFrameTime(totalLength - currentFrame);
  }
  
  mouseOverActor(act:Sup.Actor){
    this.isMousedOverThing  = true;
    this.infoText           = act.getName();
    if(this.infoText == "Main"){
      this.infoText = "Back";
    }
  }
  
  wait(n:number){
    this.waitTimer = n;
  }
  
  waiting(){
    return this.waitTimer != 0;
  }
}
Sup.registerBehavior(CursorBehavior);
