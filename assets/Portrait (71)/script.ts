class PortraitBehavior extends Sup.Behavior {
  awake() {
    this.actor.setVisible(false);
  }

  update() {
    let key = TEXTHANDLR.mostRecentKey 
    if(READMODE){
      if(key == "box_polaroid"){
        this.display("Scraggly")
      }
      if(key == "board_polaroid"){
        this.display("Player")
      }
      if(key == "news_polaroid"){
        this.display("Holly")
      }
      if(key == "pc_polaroid"){
        this.display("Amelia")
      }
      if(key == "desk_polaroid"){
        this.display("Bill")
      }
    }else{
      this.actor.setVisible(false);
    }
  }
  
  display(str:string){
    if(this.actor.getVisible() == false){
      this.actor.setEulerZ( (Math.random() -.5)*.1 );
    }
    this.actor.setVisible(true);
    this.actor.spriteRenderer.setSprite("Portraits/"+str)
  }
}
Sup.registerBehavior(PortraitBehavior);
