class TextShadowBehavior extends Sup.Behavior {
  shadow    :Sup.Actor = null
  awake() {
    /*
    this.shadow  = new Sup.Actor("shadow",this.actor);
    this.shadow.moveZ(-.1);
    
    let align   = this.actor.textRenderer.getAlignment();
    let valign  = this.actor.textRenderer.getVerticalAlignment();
    let tr      = new Sup.TextRenderer(this.shadow,"","Text",{alignment:align,verticalAlignment:valign});
    tr.setColor(new Sup.Color(0x111111));
    this.shadow.moveLocal(-.03,-.03);
    this.shadow.textRenderer.setOpacity(.5);
    */
  }

  update() {
    /*
    this.shadow.textRenderer.setText(this.actor.textRenderer.getText());
    */
  }
}
Sup.registerBehavior(TextShadowBehavior);
