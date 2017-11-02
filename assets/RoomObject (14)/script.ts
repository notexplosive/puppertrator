class RoomObjectBehavior extends ClickableRegionBehavior {  
  disabledUntil = "prebark";
  
  clickedOn(){
    let dest    = Sup.getActor( "Room_" + this.actor.getName() ).getPosition().toVector2();
    CAMERA.getParent().setPosition(dest);
  }
  
  mouseOver(){
    if(this.actor.spriteRenderer.getSprite().getAnimationList().lastIndexOf("Go") != -1){
      this.actor.spriteRenderer.setAnimation("Go");
    }
  }
  
  mouseOff(){
    if(this.actor.spriteRenderer.getSprite().getAnimationList().lastIndexOf("Stop") != -1){
      this.actor.spriteRenderer.setAnimation("Stop");
    }
  }
}
Sup.registerBehavior(RoomObjectBehavior);
