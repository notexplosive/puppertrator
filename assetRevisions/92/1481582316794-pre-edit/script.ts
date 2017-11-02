TEXT["accuse"]   = 
"I know you stole my stash of super special important bones! Tell me where they are and I'll let you go! \
#innocent"

TEXT["accuse2"]   =
  "Still insistant that you didn't do it? [newline] Fine. Who did then? #accuse"

TEXT["a_innocent"] = ["I'm innocent!"]
  TEXT["innocent_1"] = "Is that so? Only four other dogs knew where the stash was. If you didn't do it, which one of them did? #accuse"

TEXT["a_accuse"]  = ["Amelia","Bill","Scraggly","Holly"];
  TEXT["accuse_1"] = "Amelia? The famous and very attractive show dog? No way! #amelia"
  TEXT["accuse_2"] = "Bill? The Labrador? He'd never hurt a fly! #bill"
  TEXT["accuse_3"] = "You think Old Dog Scraggly did it? [newline] [newline] He'd never learn new tricks, let alone steal. #scraggly"
  TEXT["accuse_4"] = "Holly the Border Collie?! No way! #holly"

let PROOF_ANSWER    = ["I can prove it!","You're right."]
let CANCEL_TEXT     = "Thought so. [newline] [newline] (Keep looking around for clues, and confront Fluffy when you think you have the answer.)"
let EVIDENCE_TEXT   = "What is your evidence?"

TEXT["solution"]    = "I have made a terrible mistake. [newline] [newline] I think I've spent my whole life guarding the wrong stash of bones. Since apparently the ones I've been protecting belonged to \
Scraggly this whole time. Worse yet, I falsely accused you, [P,] my friend. I learned a really valuable lesson today about friendship, judging people, and deductive critical thinking. [newline] ... #untieme";

TEXT["a_untieme"] = ["Let me go", "Untie me","Release me"]
  TEXT["untieme_1"] = "Right. Sorry. >ending"
  TEXT["untieme_2"] = "Right. Sorry. >ending"
  TEXT["untieme_3"] = "Right. Sorry. >ending"

TEXT["ending"]  = "Before you go... [newline] [newline] You'll wanna leave through the back door so my mom doesn't see you. She'll get real mad if she sees I was tying people up down here again. "

/* I can prove it! */
TEXT["a_amelia"]    = PROOF_ANSWER
TEXT["a_bill"]      = PROOF_ANSWER
TEXT["a_scraggly"]  = PROOF_ANSWER
TEXT["a_holly"]     = PROOF_ANSWER

TEXT["amelia_1"] = EVIDENCE_TEXT + " #amelia_evidence";
TEXT["amelia_2"] = CANCEL_TEXT;

TEXT["bill_1"] = EVIDENCE_TEXT + " #bill_evidence"
TEXT["bill_2"] = CANCEL_TEXT;

TEXT["scraggly_1"] = EVIDENCE_TEXT + " #scraggly_evidence";
TEXT["scraggly_2"] = CANCEL_TEXT;

TEXT["holly_1"] = EVIDENCE_TEXT + " #holly_evidence";
TEXT["holly_2"] = CANCEL_TEXT;


/* AMELIA */
TEXT["a_amelia_evidence"] = ["Profile","Movie","Scandal"]
  TEXT["amelia_evidence_1"] = "You looked at her OKDog profile too? ... Oh, you just saw it on my computer. That makes sense. Well what of it? #amelia_profile"
  TEXT["amelia_evidence_2"] = "Her upcoming movie is about a heist, and she is a method actor. It might make sense for her to try to actually steal something. \
But she has an alibi for the time of the crime."
  TEXT["amelia_evidence_3"] = "Which scandal? You'll have to be more specific. #amelia_scandal"

TEXT["a_amelia_profile"] = ["Long walks","Bad Boys"]
  TEXT["amelia_profile_1"] = "She likes long walks on the beach... [newline] Hey! Stop distracting from the issue!"
  TEXT["amelia_profile_2"] = "She did say that she likes bad boys. But there's an important difference between liking bad boys and committing theft."

TEXT["a_amelia_scandal"] = ["Tennis","I don't care"]
  TEXT["amelia_scandal_1"] = "After the tennis ball scandal she was put under house arrest for the next three days, my stash was taken on her second day."
  TEXT["amelia_scandal_2"] = "Well mister \"I don't read celebrity gossip\" one of us is tied to a chair and isn't allowed to leave. So you better start caring! Or you could just tell me where my bones are."

/* BILL */
TEXT["a_bill_evidence"] = ["Resume","Article","Certificate"]
  TEXT["bill_evidence_1"] = "He's been sending his resume everywhere since he got laid off. #bill_resume"
  TEXT["bill_evidence_2"] = "Bill accused my grandpa of tax fraud, a very shameful thing to do. Wild accusations like that should put you in a cone. #bill_accusations"
  TEXT["bill_evidence_3"] = "He lost Good Dog of the Year [newline] But he felt terrible afterwords and promised he'd never do it again. Bill is the kind of dog to keep a promise like that."

TEXT["a_bill_resume"] = ["Desperate","Writer"]
  TEXT["bill_resume_1"] = "You think he'd get desperate enough that he'd steal from me? Well I thought so too, especially after the KibbleMart incident. Although bones are a luxury, if Bill is gonna \
steal something that he or his puppies can't live without."
  TEXT["bill_resume_2"] = "He said bad things about my grandpa. But Bill is all bark and no bite. He would never turn words like that into actions."

TEXT["a_bill_accusations"] = ["Glass houses"]
  TEXT["bill_accusations_1"] = "Hey! Me capturing you is different! I'm accusing you based on carefully collected facts and evidence! #bill_facts"

TEXT["a_bill_facts"] = ["Evidence?"]
  TEXT["bill_facts_1"] = "Yeah. You talk to old dog Scraggly a lot so you might have seen his private map collection, which would tell you where the stash is hidden. You've worked with Holly before \
which would give you a taste for quality bones. And your close friends with Bill, sullied my grandfathers good name."

/* SCRAGGLY */
TEXT["a_scraggly_evidence"] = ["Bone","Letter","Map"]
  TEXT["scraggly_evidence_1"] = "Which bone? #scraggly_bone"
  TEXT["scraggly_evidence_2"] = "Scraggly and my Grandpa used to be good friends. I don't see how that makes him guilty. If anything it should clear is name because he and my grandpa were close friends."
  TEXT["scraggly_evidence_3"] = "Scraggly made maps to all of the treasure that he buried, he has two map collections, one that he gives out to the public, and one that he only gives to people he's close with. \
#scraggly_maps"

TEXT["a_scraggly_bone"] = ["Desk","Boxes","PC"]
  TEXT["scraggly_bone_1"] = "That was the one bone that wasn't stolen. #scraggly_bitemark"
  TEXT["scraggly_bone_2"] = "You mean the bone you can't even click on? Yeah, I'm sure that one's really critical to the story."
  TEXT["scraggly_bone_3"] = "There is no bone by the PC. Were you even paying attention? Or are you just trying to brute force the dialogue tree trying to find the answer?"

TEXT["a_scraggly_bitemark"] = ["Bitemark","Femur"]
  TEXT["scraggly_bitemark_1"] = "The bitemark does look a lot like it was left by Scraggly's \"lucky toof\". but it was already there when the stash was first buried."
  TEXT["scraggly_bitemark_2"] = "Yeah, it's an old femur. So what?"

TEXT["a_scraggly_maps"] = ["Public","Private"]
  TEXT["scraggly_maps_2"] = "My grandpa and Scraggly used to hunt for treasure together. Scraggly only made maps to his treasure though, my grandpa never did, he'd just remember and was almost never \
wrong. #scraggly_wrong"
  TEXT["scraggly_maps_2"] = "His private collection had a map to my stash, I recognized it immediately because my dad walked me there once a month. #scraggly_why"

TEXT["a_scraggly_wrong"] = ["Almost?"]
  TEXT["scraggly_wrong_1"] = "Yeah, he made mistakes sometimes and would lose treasure because of it. But he wasn't wrong about the stash if that's what you're thinking. He showed it to my dad once a \
year and my dad showed it to me once a month. I definitely know where the stash is."

TEXT["a_scraggly_why"] = ["Why?"]
  TEXT["scraggly_why_1"] = "That's a good point, Scraggly only made maps for treasure that he personally buried. So why would he have a map to my family's stash? That would only make sense if... he... \
buried... it... >solution"


/* HOLLY */
TEXT["a_holly_evidence"] = ["Scarf","Receipt","Award"]
  TEXT["holly_evidence_1"] = "A piece of her scarf was found where my bones were dug up. Except it wasn't her scarf, she was wearing her scarf the next morning and it wasn't torn at all! #holly_scarf"
  TEXT["holly_evidence_2"] = "The receipt does place her within a few blocks of the crimescene. But that's not substantial enough. Lots of people eat at that restaurant."
  TEXT["holly_evidence_3"] = "She won an award for being an incredible bone scientist, so? #holly_award"

TEXT["a_holly_scarf"] = ["New Scarf?"]
  TEXT["holly_scarf_1"] = "Nope. Her old scarf had food stain on it, and the one she was wearing the following morning had the same stain."

TEXT["a_holly_award"] = ["Samples","Lab Excavation"]
  TEXT["holly_award_1"] = "She gets bones sent to her from all over the world to research, why would she steal local treasure?"
  TEXT["holly_award_2"] = "Hmm... The burial site was technically public land, so it might make sense for her lab to discover and excavate the stash. But every time they dig something up they \
publish it to the public record. They didn't find it."
