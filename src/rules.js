export default new Map([
    //Bite
    [ /[bcdfghjklmnpqrstvwxz](ight|ite)/, "bite" ], // consonant + ight or ite, replace with "bite"
    
    //Chocolate
    [ /(ck|x)\b/, "$&olate" ], //append "olate" to ending ck or x
    [ /\b(co|cl|go)/, "cho$&"], //prepend cho to starting co, cl, or go
    [ /\bo/, "choco"], //starting o to choco
    
    //Treat
    [ /t\b/, "$&reat" ], //append "reat" to words ending with t
    [ /ts\b/, "treats" ], //if the word ends with "ts", replace with "treats"
    [ /tr/, "treat" ], //if "tr" is found in a word, replace with "treat"  
    
    //Satisfaction
    [ /\bs/, "sati$&" ], //if the word starts with an s, prepend "sati"
    [ /\b[fpwln]/, "satis$&" ], //if the word begins with a f, p, w, l, n, prepend "satis"
    [ /\b[bcdfghjklmnpqrstvwxz]is/, "satis"], //if the word begins with any consonant followed by "is", replace with "satis" (miserable => satiserable)
    
    //Delicious
    [ /[aeiouyr]\b/, "$&licious" ], //if the word ends with any vocal or r, append "licious"
    [ /es\b/, "elicious" ], //if the word ends in es, replace with "elicious"
    
    //Satisfaction
    [ /[ts]\b/, "$&isfaction" ], //if the word ends in t or s, append "isfaction"
    [ /er\b/, "isfaction" ], //if the word ends in er, replace with "isfaction"
    [ /\b[bcdfghjklmnpqrstvwxz]ark\b/, "satis$&tion" ], //if the word is made up of a consonant followed by "ark" (i.e. dark), prepend "sati" and append "tion".
    [ /ve\b/, "visfaction" ], //if the word ends in ve, replace with "visfaction"
    
    //Indulge
    [ /\bin/, "indulg" ], //starting in to indulg
    [ /\bd/, "induld" ], //starting d to induld
    [ /in\b/, "indulge" ], //ending in to indulge
    
    //Candy
    [ /\bany/, "candy" ], //starting any to candy
    
    //Eat
    [ /ing\b/, "eat" ], //ending ing to eat
    [ /\bext/, "eats" ], //starting ext to eat
    
    //Bar
    [ /\b(b[e]?|pre|[cdfghjklmnopqrstvwxz]ar)/, "bar" ], //starting b/be/pre and car/dar/far/etc... to bar
    
    //Chomp
    [ /\b(comp|sop?|o?p)/, "chomp"], //starting p/op/sop/comp to chomp
    
    //Crunch
    [ /\bcont/, "crunch" ], //starting cont to crunch
    
    //Peanut
    [ /p\b/, "peanut" ], //ending p to peanut
    
    //Delectable
    [ /\bbl?/, "delecta$&" ], //prepend delecta to starting b/bl
    [ /(ds?|l)\b/, "delectable" ], //ending d(s) or l to delectable
    
    //Snack
    [ /\b[bcdfghjklmnpqrstwxz]?[ae](ck|k|c|g|t)/, "snack" ], //starting optional consonant + a/e + ck/k/c/g/t to snack
    [ /\b[k]/, "snack" ], //starting k to snack
    
    //Caramel
    [ /\bl/, "caramel" ], //starting l to caramel
    [ /l\b/, "lamel" ], //ending l to lamel
    [ /\b[bcdfghjklmnpqrstvwxz]?(a|e|i)(l|n)/, "caram$1$2" ], //optional starting consonant + a/e/i + l/n, prepend "caram". Examples: always/caramalways, well/caramell, million/caramillion
    [ /med\b/, "meled" ], //ending med to meled, sounds more related to marmalade than caramel though
    
    //Hunger
    [ /\bre/, "hungry" ], //starting re to hungry
    [ /\b(r|gr)/, "hunger" ], //starting r or gr to hunger
    
    //Yum
    [ /\b(m|hun|hum)/, "yum" ], //starting m, hun, or hum to yum
    [ /(em|eam)/, "eyum"], //em or eam to eyum
    
    //Fill
    [ /\b[bcdfghjklmnpqrstvwxz]{0,3}(al+|il+|el+)/, "fill" ], //replace up to three initial consonants and the following al, il, or el (with any number of l's) with fill
    [ /ls\b/, "fills" ], //if the word ends in ls, replace with fills
    
    //Nougat
    [ /\bt/, "nougat" ], //starting t to nougat
    [ /\bg/, "noug" ], //starting g to to noug
    [ /n\b/, "nougat" ], //ending n to nougat
    [ /\b[bcdfghjklmnpqrstvwxz]ag/, "noug" ], //starting consonant + ag to noug
    [ /\bar/, "nougar" ], //starting ar to nougar
    [ /\Bnu\B/, "nougat" ], //middling nu to nougat
    
    //Chew
    [ /\bus/, "chews" ], //replace starting "us" with "chews"
    [ /\bw/, "chew" ], //starting w to chew
    [ /\bup/, "chewp" ], //starting up to chewp
    [ /\btr/, "chewr" ], //replace starting "tr" with "chewr"
    [ /\bun/, "chewn" ], //starting un to chewn
    [ /tur/, "chewer" ], //replace "tur" with "chewer"
    [ /[c^](do|ru|tw|hu|qu|tu|eu)/, "chew" ], //replace do, ru, tw, hu, qu, tu, eu, with chew
    
    //Chow
    [ /[bcdfghjklmnpqrstvwxz](ow|aw)/, "chow" ], //replace any consonant + aw or ow with chow
    
    //Nuts
    [ /net|not/, "nut"], //net/not to nut
    [ /ous/, "nuts"], //ous/nt nut
    [ /nt\b/, "nut"], //ending nt to nut
    [ /nt/, "nutt"], //nt to nutt
    [ /\bun/, "nut"], //starting un to nut
    [ /t\b/, "nut"] //ending t to nut
])