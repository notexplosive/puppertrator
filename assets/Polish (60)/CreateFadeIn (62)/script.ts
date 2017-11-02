class CreateFadeInBehavior extends Sup.Behavior {
  awake() {
    let pos = Sup.getActor("Camera").getPosition().add(0,0,-1);
    let act = new Sup.Actor("fadecurtain");
    new Sup.SpriteRenderer(act,"UI/White");
    act.setPosition(pos);
    act.setLocalScale(2,3,1);
    act.addBehavior(FadeOutBehavior);
  }

  update() {
    
  }
}
Sup.registerBehavior(CreateFadeInBehavior);
