let TEXT        = {}
let TEXT_WIDTH  = 40;
let READMODE    = false;
let ANSWERMODE  = false;
let FLAGS       = {}

TEXT["error"]           = "(UNDEFINED, DEV MADE A MISTAKE)"

/* INTRO */
TEXT["intro"]           = "What happened? [newline] [newline] Uggh. My head is killing me! [newline] [newline] I remember.... [newline] Someone throwing a ball... [newline] ...at my face. >intro2"
TEXT["intro2"]          = "That must have been it! [newline] [newline] Someone threw a ball at me and it knocked me out! [newline] [newline] So... [newline] [newline] Where am I?"
TEXT["intro3"]          = "I can't move my arms! [newline] [newline] What the hell is going on here?!"

/* MAIN ROOM */
TEXT["light"]           = "It's a lamp. [newline] A little too bright for my liking."

TEXT["prebark"]         = 
"Ahhh! I'm tied up! I can't move my arms \
or legs! This is very bad! Very bad! [newline] \
Whelp. Panic session over. I'm calm now. \
have a look around."

TEXT["lookaround"]      =
"I'm not sure what to yet. I'll have to look around some more."

TEXT["bark"]            = "Fluffy's holding me captive. Fluffy of all people! I could bark for help. [newline] But it might attract Fluffy's attention. #bark"
TEXT["a_bark"]    = ["Bark","No Bark"];
  TEXT["bark_1"]    = "Here I go.... [newline] [newline] BARK!!! BARK! BORF BARK BORK! >enter_fluffy";
  TEXT["bark_2"]    = "Guess I won't bark. [newline] I should look around more.";
TEXT["enter_fluffy"]  = "Look who's finally awake... [newline] >>accuse";

