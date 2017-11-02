class TitleScreenBehavior extends Sup.Behavior {
  tick        = 0;
  mostrecent  = "";
  negative    = false;
  awake() {
    
  }

  update() {
    if(this.tick % (60*3) == 0){
      let act = new Sup.Actor("Portrait");
      new Sup.SpriteRenderer(act,"Portraits/" + this.getRandomPortrait());
      act.addBehavior(PortraitFlyByBehavior);
      act.setLocalScale(0.6,0.6,1);
      
      let x = (Math.random()) * 9;
      if(Math.abs(x) < 2){
        x *= 2;
      }
      
      if(this.negative){
        x *= -1;
      }
      this.negative = !this.negative;
      let y = -10;
      
      act.setPosition(x,y,-2);
    }
    
    this.tick ++;
    
    // Using fmouse to ensure it's working for the player. Also ensure the window is in focus.
    if(Sup.getActor("Background").fMouseInput.isMouseOver && Sup.Input.wasMouseButtonJustPressed(0)){
      Sup.loadScene("Menu");
    }
  }
  
  getRandomPortrait():string{
    let arr   = ["Player","Holly","Bill","Scraggly","Amelia"];
    let index = 0;
    do{
      index = Math.floor(Math.random() * arr.length)
    }while(this.mostrecent == arr[index]);
    this.mostrecent = arr[index];
    return arr[index];
  }
}
Sup.registerBehavior(TitleScreenBehavior);
