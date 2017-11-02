class JukeboxBehavior extends Sup.Behavior {
  static fadeOutTick  = -1;
  static fadeInTick   = -1;
  static nextSong     = "";
  static nextSongLoop = false;
  static pendingSongs = [];
  static pendSongLoop = [];
  static nowPlaying   = "";
  
  startSong :string   = "";
  loop      :boolean  = true;
  awake() {
    if(this.startSong != ""){
      this.setUpNextSong(this.startSong,this.loop);
    }
    JUKEBOX = this;
  }

  update() {
    // FADE OUT
    if(JukeboxBehavior.fadeOutTick > 0) {
      if(MUSIC != null){
        MUSIC.setVolume(JukeboxBehavior.fadeOutTick / 60);
      }
      JukeboxBehavior.fadeOutTick--;
    }
    
    if(JukeboxBehavior.fadeOutTick == 0){
      JukeboxBehavior.fadeOutTick = -1;
      if(MUSIC != null){
        MUSIC.stop();
      }
      this.fadeInNewSong();
    }
    
    // FADE IN
    if(JukeboxBehavior.fadeInTick > 0){
      MUSIC.setVolume( (60 - JukeboxBehavior.fadeInTick) / 60);
      JukeboxBehavior.fadeInTick--;
    }
    
    if(JukeboxBehavior.fadeInTick == 0){
      JukeboxBehavior.fadeInTick = -1;
    }
    
    // PENDING SONG
    if(JukeboxBehavior.pendingSongs[0] != undefined){
      if(!MUSIC.isPlaying()){
        let song = JukeboxBehavior.pendingSongs.shift();
        JukeboxBehavior.nowPlaying = song;
        JukeboxBehavior.nextSongLoop = JukeboxBehavior.pendSongLoop.shift();
        MUSIC = new Sup.Audio.SoundPlayer(song);
        MUSIC.setLoop(JukeboxBehavior.nextSongLoop);
        MUSIC.play();
      }
    }
  }
  
  private fadeInNewSong(){
    JukeboxBehavior.fadeInTick   = 60;
    JukeboxBehavior.fadeOutTick  = -1;
    
    if(MUSIC != null){MUSIC.stop()};
    
    JukeboxBehavior.nowPlaying = JukeboxBehavior.nextSong;
    MUSIC = new Sup.Audio.SoundPlayer(JukeboxBehavior.nextSong);
    MUSIC.setLoop(JukeboxBehavior.nextSongLoop);
    MUSIC.setVolume(0);
    MUSIC.play();
    JukeboxBehavior.fadeInTick = 60;
  }
  
  setUpNextSong(song:string,loop:boolean){
    if(JukeboxBehavior.nowPlaying != song){
      JukeboxBehavior.fadeInTick  = -1;
      JukeboxBehavior.nextSong     = song;
      JukeboxBehavior.nextSongLoop = loop;

      if(MUSIC != null){
        JukeboxBehavior.fadeOutTick  = 60;
      }else{
        this.fadeInNewSong();
      }
    }
  }
  
  cutTo(song:string,loop:boolean){
    JukeboxBehavior.nextSong      = song;
    JukeboxBehavior.nextSongLoop  = loop;
    this.fadeInNewSong();
  }
  
  queueNextTrack(song:string,nextSongLoop:boolean){
    MUSIC.setLoop(false);
    JukeboxBehavior.pendSongLoop.push(nextSongLoop);
    JukeboxBehavior.pendingSongs.push(song);
  }
}
Sup.registerBehavior(JukeboxBehavior);
