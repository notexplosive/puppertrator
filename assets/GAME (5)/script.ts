let CAMERA    :Sup.Actor            = null;
let CURSOR    :CursorBehavior       = null;
let TEXTHANDLR:TextHandlerBehavior  = null;
let GAME      :GameBehavior         = null;
let MUSIC     :Sup.Audio.SoundPlayer= null;
let JUKEBOX   :JukeboxBehavior      = null;
let DISABLECAM:boolean              = false;

function arrayifyText(str:string){
  let content         = TEXT[str];
  let noflags         = content.split('#')[0];
  let words:string[]  = noflags.split(' ');
  let lines           = [];
  let lineIndex       = 0;
  for(let word of words){
    if(lines[lineIndex] == undefined){
      lines[lineIndex] = "";
    }
    
    if(word.charAt(0) == ">"){
      if(word.charAt(1) == ">"){
        let flag = word.substr(2);
        GAME.preTimeFlag(flag);
        word = "";
      }else{
        let flag = word.split('>')[1];
        GAME.timeFlag(flag,60);
        word = "";
      }
    }

    if(word == "[P]"){word = PLAYER_NAME};
    if(word == "[P,]"){word = PLAYER_NAME + ","};
    if(word.length + lines[lineIndex].length > TEXT_WIDTH || word == "[newline]"){
      lineIndex++;
      if(word == "[newline]"){ word = "" }
      lines[lineIndex] = word + " ";
    }else{
      lines[lineIndex] += word + " ";
    }
  }
  
  return lines;
}

class GameBehavior extends Sup.Behavior {
  private timedFlag           = "";
  private timer               = 0;
  private pretimer            = 5;
  private preflag             = "";
  
  static changedTrack        = false;
  static changeTrackTick     = -1;
  
  awake() {
    GAME    = this;
    CAMERA  = Sup.getActor("Camera");
    if(Sup.getActor("Cursor") != null){
      CURSOR  = Sup.getActor("Cursor").getBehavior(CursorBehavior);
    }
    
    if(Sup.getActor("Player") != null){
      Sup.getActor("Player").setName(PLAYER_NAME);
    }
  }
  
  update(){
    if(Sup.Input.wasKeyJustPressed("Q")){
      DISABLECAM = !DISABLECAM;
    }
    
    if(this.timedFlag != "" && !READMODE){
      this.timer--;
      if(this.timer == 0){
        // timedFlag might get overwritten by loadText
        let flag =  this.timedFlag
        TEXTHANDLR.loadText(flag);
        this.timedFlag = "";
      }
    }
    
    if(!READMODE){
      if(this.pretimer > 0){
        this.pretimer--;
      }
      if(this.pretimer == 0){
        this.pretimer = -1;
        this.timeFlag(this.preflag,55);
      }
    }
    
    if(GAME.getFlag("intro2") && !GameBehavior.changedTrack){
      JUKEBOX.setUpNextSong("MainTheme",true);
      GameBehavior.changedTrack = true;
    }
  }
  
  timeFlag(flag:string,time=15){
    this.timedFlag  = flag;
    this.timer      = time;
    
    if(CURSOR != null){
      CURSOR.wait(time-1);
    }
  }
  
  // temporary fix to the "can't change dialogue" bug
  preTimeFlag(flag:string){
    this.preflag  = flag;
    this.pretimer   = 5;
  }
  
  getFlag(flag:string){
    return !READMODE && !ANSWERMODE && FLAGS[flag] != undefined;
  }
}
Sup.registerBehavior(GameBehavior);