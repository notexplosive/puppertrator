class DialogueObjectBehavior extends ClickableRegionBehavior {
  key       :string   = "";
  //nocheck   :boolean  = false;
  
  getKey(){
    let keys        = this.key.split('|');
    let correctKey  = keys[0];
    for(let i = 0; i < keys.length; i += 2){
      correctKey = keys[i];
      if(!GAME.getFlag(keys[i+1])){
        break;
      }
    }
    
    return correctKey;
  }
  
  clickedOn(){
    let correctKey = this.getKey();
    //Sup.log(correctKey);
    TEXTHANDLR.loadText(correctKey);
  }
}
Sup.registerBehavior(DialogueObjectBehavior);
