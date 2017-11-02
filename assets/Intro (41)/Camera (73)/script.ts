class CameraBehavior extends Sup.Behavior {
  shaketick = 0;
  private startpos:Sup.Math.Vector2;
  awake() {
    this.startpos = this.actor.getPosition().toVector2();
  }

  update() {
    if(this.shaketick > 0){
      this.shaketick--;
      let rvec = new Sup.Math.Vector2(Math.random()-.5,Math.random()-.5).multiplyScalar(.05);
      this.actor.setPosition(this.startpos.clone().add(rvec))
    }
  }
}
Sup.registerBehavior(CameraBehavior);
