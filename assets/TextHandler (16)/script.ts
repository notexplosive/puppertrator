class TextHandlerBehavior extends Sup.Behavior {
  textArray     :string[] = null;
  index         :number   = 0;
  timer         :number   = 0;
  flag          :string   = "";
  mostRecentKey :string  = "";
  awake() {
    TEXTHANDLR = this;
    this.actor.textRenderer.setText("");
    this.actor.setLocalScale(.75,.75,1);
    Sup.getActor("AnswerRoot").setVisible(false);
    
    let bgpanel = new Sup.Actor("bgpanel",this.actor);
    bgpanel.setLocalPosition(0,-1.35,-.1);
    bgpanel.setLocalScale(10,1.1,1);
    
    // scale bgpanel back up
    bgpanel.setLocalScale(bgpanel.getLocalScale().multiplyScalar(1.25));
    
    new Sup.SpriteRenderer(bgpanel,"UI/Gray").setOpacity(.8);
    bgpanel.setVisible(false);
  }

  update() {
    if(Sup.Input.wasMouseButtonJustPressed(0) && this.textArray != null && this.timer == 0){
      READMODE = true;
      if(!ANSWERMODE){
        this.renderText();
      }
    }
    
    if(this.timer > 0){
      this.timer--;
    }
  }
  
  renderText(){
    let textToRender  = "";
    if(this.textArray[this.index] != undefined){
      textToRender    = this.textArray[this.index];
      if(this.textArray[this.index + 1] != undefined){
        textToRender    += "\n" + this.textArray[this.index+1];
      }
      this.index += 2;
    }else{
      if(this.flag != ""){
        ANSWERMODE = true;
        let answerRoot  = Sup.getActor("AnswerRoot")
        answerRoot.setVisible(true);
        
        let children    = answerRoot.getChildren();
        let answerArray = TEXT["a_"+this.flag];
        
        for(let i = 0; i < 4; i++){
          if(answerArray[i] != undefined){
            children[i].textRenderer.setText(answerArray[i]);
            children[i].getBehavior(AnswerBehavior).timer = 10;
            children[i].getBehavior(AnswerBehavior).startkey = this.flag;
          }else{
            children[i].textRenderer.setText("");
          }
        }
        
        textToRender    = this.actor.textRenderer.getText();
      }else{
        this.textArray  = null;
        this.timer      = 5;
        textToRender    = "";
        READMODE        = false;
      }
      
      this.flag = "";
    }
    
    this.actor.textRenderer.setText(textToRender);
    
    if(textToRender == ""){
      this.actor.getChild("bgpanel").setVisible(false);
    }else{
      this.actor.getChild("bgpanel").setVisible(true);
    }
  }
  
  loadText(str:string){
    if(this.timer == 0){
      if(TEXT[str] == undefined){
        str = "error";
      }
      
      /* Enable flag */
      FLAGS[str]          = true;
      
      let flag            = TEXT[str].split('#')[1];
      this.textArray      = arrayifyText(str);
      this.mostRecentKey  = str;
      
      if(flag != undefined){
        this.flag       = flag;
      }else{
        this.flag       = "";
      }
      
      this.index      = 0;
      this.timer      = 5;
      READMODE        = true;
      this.renderText();
    }
  }
}
Sup.registerBehavior(TextHandlerBehavior);
