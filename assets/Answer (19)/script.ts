class AnswerBehavior extends Sup.Behavior {
  private defaultColor:Sup.Color;
  public  timer       :number;
  public  startkey    :string = "";
  awake() {
    this.actor.addBehavior(TextShadowBehavior);
    let fm              = new fMouseInput(this.actor);
    fm.setCameraActorName(CAMERA.getName());
    this.defaultColor   = new Sup.Color(0xfafafa);
    
    let bgpanel = new Sup.Actor("bgpanel",this.actor);
    bgpanel.setLocalPosition(0,0,-.1);
    bgpanel.setLocalScale(3,.45,1);
    new Sup.SpriteRenderer(bgpanel,"UI/Gray");
    
    this.actor.textRenderer.setText("");
    
    this.timer = 0;
  }

  update() {
    if(this.cursorInBoundingBox()){
      this.actor.textRenderer.setColor(1,1,1);
      this.actor.getChild("bgpanel").spriteRenderer.setColor(.5,.5,1);
      if(Sup.Input.isMouseButtonDown(0) && this.timer == 0){
        // clicked on
        this.actor.getChild("bgpanel").spriteRenderer.setColor(.5,1,.5);
      }
      
      if(Sup.Input.wasMouseButtonJustReleased(0) && this.timer == 0 ){
        ANSWERMODE = false;
        //Sup.log("keyname: " + this.startkey+"_"+this.actor.getName());
        TEXTHANDLR.loadText(this.startkey+"_"+this.actor.getName());
      }
    }else{
      // mouse off
      this.actor.textRenderer.setColor(this.defaultColor);
      this.actor.getChild("bgpanel").spriteRenderer.setColor(1,1,1);
    }
    
    if(this.timer > 0){
      this.timer--;
    }
    
    if(this.actor.textRenderer.getText() == ""){
      this.actor.getChild("bgpanel").spriteRenderer.setOpacity(0);
    }else{
      this.actor.getChild("bgpanel").spriteRenderer.setOpacity(.8);
    }
    
    if(!ANSWERMODE){
      this.actor.textRenderer.setText("");
      this.startkey = "";
    }
  }
  
  cursorInBoundingBox():boolean{
    let b:boolean = false;
    
    let cursorpos = CURSOR.actor.getPosition();
    let pos       = this.actor.getPosition();
    let xdis      = Math.abs(pos.x - cursorpos.x);
    let ydis      = Math.abs(pos.y - cursorpos.y);
    
    if(ydis < .5 && xdis < 3 && this.actor.textRenderer.getText() != "" && this.timer == 0){
      b = true;
    }
    
    return b;
  }
}
Sup.registerBehavior(AnswerBehavior);
