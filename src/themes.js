// Curated thematic word lists for writers
const THEMES = {
    heist: {
        name: "Heist / Crime",
        actions: [
            "infiltrate", "disarm", "crack", "bypass", "extract", "surveil",
            "divert", "manipulate", "forge", "intercept", "smuggle", "vanish",
            "bribe", "case", "sweep", "plant", "override", "disable", "fence"
        ],
        emotions: [
            "adrenaline", "paranoid", "calculated", "ruthless", "cocky",
            "desperate", "cool-headed", "greedy", "tense", "exhilarated",
            "betrayed", "suspicious", "determined", "reckless", "anxious"
        ],
        objects: [
            "vault", "blueprint", "earpiece", "disguise", "getaway car",
            "safe", "security camera", "keycard", "laser grid", "briefcase",
            "burner phone", "lockpick", "duffel bag", "alarm panel", "wire"
        ],
        atmosphere: [
            "sleek", "high-stakes", "ticking clock", "neon-lit", "underground",
            "polished", "sterile", "labyrinthine", "opulent", "claustrophobic",
            "midnight", "exclusive", "fortified", "shadowy", "pristine"
        ],
        metaphors: [
            "chess game", "house of cards", "tightrope walk", "loaded dice",
            "smoke and mirrors", "wolf in sheep's clothing", "ace up sleeve",
            "domino effect", "cat and mouse", "double-edged sword"
        ]
    },
    romance: {
        name: "Romance / Passion",
        actions: [
            "caress", "whisper", "embrace", "trace", "brush", "linger",
            "intertwine", "surrender", "yearn", "ache", "ignite", "melt",
            "savor", "consume", "breathe in", "lean into", "pull close"
        ],
        emotions: [
            "longing", "euphoria", "vulnerable", "intoxicated", "tender",
            "desperate", "electric", "aching", "flushed", "consumed",
            "breathless", "raw", "giddy", "overwhelmed", "starved"
        ],
        objects: [
            "lips", "fingertips", "heartbeat", "skin", "breath", "sheets",
            "candlelight", "nape of neck", "collarbone", "pulse point",
            "warmth", "jawline", "eyelashes", "silhouette", "small of back"
        ],
        atmosphere: [
            "charged", "intimate", "stolen moment", "slow-burning", "magnetic",
            "soft-lit", "hushed", "private", "warm", "dizzying",
            "timeless", "dreamlike", "intoxicating", "sacred", "electric"
        ],
        metaphors: [
            "drowning in", "moth to flame", "two halves of a whole",
            "gravity pulling", "uncharted waters", "wildfire spreading",
            "coming home", "falling without a net", "oxygen and flame",
            "puzzle piece clicking", "tide pulling back"
        ]
    },
    horror: {
        name: "Horror / Dread",
        actions: [
            "creep", "lurk", "scratch", "whisper", "devour", "seep",
            "twist", "emerge", "crawl", "consume", "rot", "decay",
            "infest", "possess", "corrupt", "haunt", "stalk", "writhe"
        ],
        emotions: [
            "dread", "terror", "paranoid", "hopeless", "unnerved", "hysteric",
            "paralyzed", "sick", "manic", "hollow", "desperate", "frantic",
            "primal", "violated", "watched", "doomed", "suffocating"
        ],
        objects: [
            "shadow", "mirror", "basement", "attic", "bones", "darkness",
            "threshold", "corridor", "cellar door", "crawlspace", "closet",
            "reflection", "static", "cobwebs", "teeth", "eyes in the dark"
        ],
        atmosphere: [
            "oppressive", "suffocating", "wrong", "fetid", "silent",
            "decayed", "abandoned", "watchful", "thick", "visceral",
            "ancient", "forbidden", "unnatural", "claustrophobic", "void"
        ],
        metaphors: [
            "darkness breathing", "walls closing in", "something wearing skin",
            "the thing in the corner of your eye", "infection spreading",
            "puppet with cut strings", "the space between heartbeats",
            "wrong note in a lullaby", "smile with too many teeth"
        ]
    },
    scifi: {
        name: "Sci-Fi / Space",
        actions: [
            "interface", "upload", "terraform", "colonize", "synthesize",
            "calibrate", "transmit", "decode", "augment", "scan", "breach",
            "override", "accelerate", "warp", "dock", "extract", "simulate"
        ],
        emotions: [
            "awe", "isolation", "insignificant", "curious", "existential",
            "alienated", "wonder", "sterile", "disconnected", "transcendent",
            "paranoid", "evolved", "detached", "infinite", "obsolete"
        ],
        objects: [
            "airlock", "console", "hologram", "cyberlink", "stasis pod",
            "neural implant", "viewport", "debris field", "quantum drive",
            "bio-dome", "data core", "chromatic hull", "exosuit", "beacon"
        ],
        atmosphere: [
            "vast", "sterile", "humming", "zero-gravity", "infinite",
            "clinical", "bioluminescent", "vacuum", "chrome", "neon-hazed",
            "silent void", "pulsing", "algorithmic", "alien", "cold light"
        ],
        metaphors: [
            "drop in an infinite ocean", "signal in the noise",
            "ghost in the machine", "event horizon crossing",
            "light years between heartbeats", "stars like scattered code",
            "universe indifferent", "time dilating", "consciousness uploading"
        ]
    },
    fantasy: {
        name: "Fantasy / Magic",
        actions: [
            "enchant", "summon", "forge", "invoke", "vanquish", "awaken",
            "bind", "channel", "commune", "unleash", "transform", "ward",
            "divine", "conjure", "imbue", "prophecy", "transcend", "bless"
        ],
        emotions: [
            "wonder", "reverent", "ancient", "noble", "cursed", "destined",
            "awakened", "corrupted", "pure", "tormented", "fated", "honored",
            "burdened", "chosen", "forsaken", "wild", "otherworldly"
        ],
        objects: [
            "grimoire", "crystal", "throne", "artifact", "runes", "blade",
            "crown", "staff", "amulet", "chalice", "portal", "tapestry",
            "sigil", "dragon scale", "elven steel", "sacred grove", "tome"
        ],
        atmosphere: [
            "enchanted", "ancient", "mystical", "ethereal", "foreboding",
            "verdant", "timeless", "sacred", "shadowed", "luminous",
            "primordial", "hallowed", "wild", "forgotten", "blessed"
        ],
        metaphors: [
            "threads of fate weaving", "magic singing in the blood",
            "crown too heavy", "darkness before dawn", "prophecy unfolding",
            "phoenix from ashes", "kingdom on a knife's edge",
            "power corrupts", "destiny written in stars", "veil between worlds"
        ]
    },
    noir: {
        name: "Noir / Mystery",
        actions: [
            "tail", "stake out", "interrogate", "uncover", "pursue",
            "deceive", "shadow", "confront", "blackmail", "expose",
            "trace", "corner", "double-cross", "investigate", "surveil"
        ],
        emotions: [
            "cynical", "weary", "suspicious", "jaded", "obsessed",
            "haunted", "bitter", "resigned", "driven", "disillusioned",
            "tormented", "brooding", "detached", "hardboiled", "melancholic"
        ],
        objects: [
            "fedora", "cigarette smoke", "whiskey", "revolver", "manila folder",
            "dim bulb", "venetian blinds", "trench coat", "rain-slicked streets",
            "neon sign", "phone booth", "lipstick stain", "matchbook", "badge"
        ],
        atmosphere: [
            "rain-soaked", "smoky", "seedy", "shadowy", "nocturnal",
            "grimy", "corrupt", "desperate", "lonely", "dangerous",
            "dim", "forgotten", "sinister", "melancholic", "hazy"
        ],
        metaphors: [
            "everyone's got an angle", "city that never sleeps, never forgives",
            "dame walked in like trouble", "truth buried six feet deep",
            "following breadcrumbs to hell", "smoking gun", "skeleton in closet",
            "blood money", "dirty hands", "web of lies"
        ]
    },
    action: {
        name: "Action / Combat",
        actions: [
            "charge", "strike", "evade", "reload", "detonate", "breach",
            "ambush", "flank", "suppress", "extract", "neutralize", "engage",
            "vault", "sprint", "grapple", "counter", "execute", "pursue"
        ],
        emotions: [
            "adrenaline", "fierce", "fearless", "focused", "primal",
            "explosive", "relentless", "savage", "unstoppable", "wired",
            "ruthless", "calculating", "bloodlust", "survival mode", "rage"
        ],
        objects: [
            "blade", "shrapnel", "rubble", "smoke", "debris", "muzzle flash",
            "kevlar", "grenade", "magazine", "blood spatter", "broken glass",
            "concussion wave", "barrel", "trigger", "crosshairs", "impact"
        ],
        atmosphere: [
            "explosive", "chaotic", "visceral", "brutal", "kinetic",
            "deafening", "smoky", "frantic", "razor-sharp", "relentless",
            "thunderous", "searing", "violent", "pulse-pounding", "lethal"
        ],
        metaphors: [
            "eye of the storm", "baptism by fire", "dance of death",
            "bullet with your name", "war is hell", "kill or be killed",
            "no man left behind", "point of no return", "hell breaking loose",
            "survival of the fittest", "forged in battle"
        ]
    },
    cozy: {
        name: "Cozy / Comfort",
        actions: [
            "nestle", "curl up", "sip", "savor", "meander", "putter",
            "hum", "bake", "tend", "wrap", "settle", "drift", "browse",
            "arrange", "steep", "knead", "simmer", "gather"
        ],
        emotions: [
            "content", "peaceful", "nostalgic", "warm", "grateful",
            "gentle", "soothed", "safe", "belonging", "unhurried",
            "fond", "tranquil", "soft", "home", "comforted"
        ],
        objects: [
            "quilt", "teacup", "fireplace", "worn book", "reading nook",
            "rain on windows", "wool socks", "kettle", "candle", "armchair",
            "window seat", "fresh bread", "potted plant", "soft blanket"
        ],
        atmosphere: [
            "golden hour", "soft light", "quiet morning", "autumn evening",
            "rain-wrapped", "unhurried", "familiar", "lamp-lit", "drowsy",
            "snug", "timeless", "gentle", "tucked away", "sanctuary"
        ],
        metaphors: [
            "wrapped in warmth", "home is a feeling", "cup of comfort",
            "shelter from the storm", "roots running deep", "simple pleasures",
            "life's small moments", "cocoon of calm", "heartbeat of home",
            "seasons turning gently", "well-worn path"
        ]
    }
};
