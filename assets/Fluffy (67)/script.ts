class FluffyBehavior extends Sup.Behavior {
  private startpos:Sup.Math.Vector2;
  private talktick    :number   = 0;
  private talking     :boolean  = false;
  private firsttouch  :boolean  = true;
  private endTrigger  :boolean  = false;
  
  awake() {
    this.actor.setVisible(false);
    this.startpos = this.actor.getPosition().toVector2();
  }

  update() {
    this.actor.getBehavior(DialogueObjectBehavior).clickable = this.actor.getVisible();
    
    if(GAME.getFlag("enter_fluffy") && this.actor.getVisible() == false) {
      this.actor.setVisible(true);
      Sup.Audio.playSound("Door",.7,{pitch:-.3});
      JUKEBOX.setUpNextSong("FluffyLoop",true);
    }
    
    if(GAME.getFlag("ending") && !this.endTrigger){
      this.endTrigger = true;
      this.actor.addBehavior(TickToSceneBehavior).scene = "End";
      this.actor.getBehavior(TickToSceneBehavior).delay = 5;
      CURSOR.wait(99999);
    }
    
    if(READMODE && !ANSWERMODE){
      if(this.talktick > 0){
        this.talktick--;
      }else{
        if(this.talking){
          this.talktick = 20 * Math.random();
        }else{
          this.talktick = 120 * Math.random();
        }
        this.talking = !this.talking;
      }
      
      if(this.talking){
        let x = (Math.random() - .5) *.02;
        let y = (Math.random() - .5) *.02;
        this.actor.setPosition(this.startpos.clone().add(x,y));
      }
    }
    
    if(GAME.getFlag("accuse") && this.firsttouch){
      JUKEBOX.queueNextTrack("Transition",false);
      JUKEBOX.queueNextTrack("MainTheme",true);
      this.firsttouch = false;
    }
  }
}
Sup.registerBehavior(FluffyBehavior);
