class ClickableRegionBehavior extends Sup.Behavior {
  clickable                       = true
  private startingopacity:number  = 0;
  disabledUntil:string            = null;
  
  awake() {
    if(this.actor.fMouseInput == undefined){
      let mi = new fMouseInput(this.actor);
      mi.setCameraComponent(CAMERA.camera);
    }
  }

  update() {
    let firstchild = this.actor.getChildren()[0];
    if(firstchild == undefined){firstchild = this.actor}
    
    if(this.actor.spriteRenderer.getSprite().name == "Bubble"){
      this.actor.spriteRenderer.setOpacity(0);
    }
    
    if(this.disabledUntil != null && !GAME.getFlag(this.disabledUntil)){
      this.clickable = false;
    }else{
      this.clickable = true;
      this.disabledUntil = null;
    }
    
    if(this.clickable){
      if(this.actor.fMouseInput.isMouseOver && !READMODE && !ANSWERMODE && !CURSOR.waiting()){
        firstchild.spriteRenderer.setColor(1.5,1.5,1.5);
        CURSOR.mouseOverActor(this.actor);
        if(Sup.Input.wasMouseButtonJustPressed(0)){
          this.clickedOn();
        }

        this.mouseOver();
      }else{
        firstchild.spriteRenderer.setColor(1,1,1);
        this.mouseOff();
      }
      
    }
  }
  
  clickedOn(){
    /* */
  }
  
  mouseOver(){
    /* */
  }
  
  mouseOff(){
    /* */
  }
}
Sup.registerBehavior(ClickableRegionBehavior);
