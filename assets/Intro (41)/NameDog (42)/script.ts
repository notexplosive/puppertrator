let PLAYER_NAME = "Player"

class NameDogBehavior extends Sup.Behavior {
  private backspacetick   = 0;
  private active          = true;
  private timer           = 120;
  private countfails      = 0;
  
  awake() {
    this.timer      = 120;
    this.countfails = 0;
    this.active     = true;
  }

  update() {
    let confirmPressed = Sup.getActor("Confirm").getBehavior(ButtonBehavior).pressed;
    let randPressed = Sup.getActor("Randomize").getBehavior(ButtonBehavior).pressed;
    
    if(this.active){
      let text  = this.actor.textRenderer.getText();
      let input = Sup.Input.getTextEntered();
      if(input != "" && text.length < 8){
        this.actor.textRenderer.setText(text + input.charAt(0));
        Sup.Audio.playSound("Keyclick");
      }

      if(Sup.Input.isKeyDown("BACK_SPACE")){
        this.backspacetick++;
        if(this.backspacetick > 25){
          if(this.backspacetick % 3 == 0){
            this.backspace();
          }
        }
      }else{
        this.backspacetick = 0;
      }

      if(Sup.Input.wasKeyJustPressed("BACK_SPACE")){
        this.backspace();
      }
      
      if(randPressed){
        this.getRandomName();
      }

      if(Sup.Input.wasKeyJustPressed("RETURN") || confirmPressed){
        let print = "";
        if(text == ""){
          this.screenshake();
          print = "Just type a name\nand press enter."
          this.countfails ++;
          Sup.Audio.playSound("Deny");
          if(this.countfails > 10){
            print = "...."
          }
          if(this.countfails > 15){
            print = "Really...?"
          }
          if(this.countfails > 20){
            print = "Fine."
          }
          if(this.countfails > 25){
            print = "I'm just gonna\ngive you a name."
          }
          if(this.countfails > 29){
            print = "GOTCHA!"
            //this.actor.textRenderer.setText();
            this.getRandomName();
          }
        }else
        if(text == "Holly"){
          print = "Sorry, can you pick\n a different name?"
          Sup.Audio.playSound("Deny");
        }else
        if(text == "Bill"){
          print = "Sorry, no."
          Sup.Audio.playSound("Deny");
        }else
        if(text == "Scraggly"){
          print = "Choose something else."
          Sup.Audio.playSound("Deny");
        }else
        if(text == "Amelia"){
          print = "Right. But a different name."
          Sup.Audio.playSound("Deny");
        }else
        if(text == "Fluffy"){
          print = "NO. NOT THAT ONE!"
          Sup.Audio.playSound("Deny");
        }else{
          print = "Thanks."
          Sup.Audio.playSound("Enter");
          this.spawnParticle();
          JUKEBOX.cutTo("IntroTheme",true);
          this.active = false;
        }
        
        PLAYER_NAME = text;
        Sup.getActor("TutoText").textRenderer.setText(print);
      }
    }else{
      this.timer--;
      if(this.timer == 60){
        //Sup.getActor("TutoText").textRenderer.setText("Let's play!");
      }
      
      if(this.timer < 0){
        Sup.loadScene("Cinematic");
      }
    }
  }
  
  spawnParticle(){
    let plyr = Sup.getActor("Player");
    let part = new Sup.Actor("Particle",plyr);
    new Sup.SpriteRenderer(part,plyr.spriteRenderer.getSprite());
    part.addBehavior(ExpandParticleBehavior);
  }
  
  backspace(){
    let text  = this.actor.textRenderer.getText();
    this.actor.textRenderer.setText(text.slice(0,text.length-1));
    Sup.Audio.playSound("Keyclick");
  }
  
  screenshake(){
    Sup.getActor("Camera").getBehavior(CameraBehavior).shaketick = 10;
  }
  
  getRandomName(){
    let names = ["Albert","Pugsly","Marko","Fido","Nimbus","Nina","Leela","Jesse","Doggo","Cadillac","Wyatto","Krispin","Pebbles","Puggo","Nargles","Korra","Bubbles"]
    Sup.Audio.playSound("Uncork");
    let name  = names[Math.floor((Math.random()*names.length))];
    while(name == this.actor.textRenderer.getText()){
      name  = names[Math.floor((Math.random()*names.length))];
    }
    
    this.actor.textRenderer.setText(name);
  }
}
Sup.registerBehavior(NameDogBehavior);
