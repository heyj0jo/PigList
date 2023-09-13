"use strict";
var pigCategory;
(function (pigCategory) {
    pigCategory["Grey"] = "Grey";
    pigCategory["Chestnut"] = "Chestnut";
    pigCategory["White"] = "White";
    pigCategory["Black"] = "Black";
})(pigCategory || (pigCategory = {}));
var GreyBreed;
(function (GreyBreed) {
    GreyBreed["Moura"] = "Moura";
    GreyBreed["Oxford"] = "Oxford";
    GreyBreed["Gascon"] = "Gascon";
    GreyBreed["Ossabaw"] = "Ossabaw";
})(GreyBreed || (GreyBreed = {}));
var WhiteBreed;
(function (WhiteBreed) {
    WhiteBreed["Micro"] = "Micro";
    WhiteBreed["Chester"] = "Chester";
    WhiteBreed["Danish"] = "Danish";
    WhiteBreed["Cinta"] = "Cinta";
})(WhiteBreed || (WhiteBreed = {}));
var ChestnutBreed;
(function (ChestnutBreed) {
    ChestnutBreed["Hereford"] = "Hereford";
    ChestnutBreed["Landrace"] = "Landrace";
    ChestnutBreed["Tamworth"] = "Tamworth";
    ChestnutBreed["Meishan"] = "Meishan";
})(ChestnutBreed || (ChestnutBreed = {}));
var BlackBreed;
(function (BlackBreed) {
    BlackBreed["Mangalica"] = "Mangalica";
    BlackBreed["Kunekune"] = "Kunekune";
    BlackBreed["Jeju"] = "Jeju";
    BlackBreed["Poland"] = "Poland";
})(BlackBreed || (BlackBreed = {}));
class Pig {
    constructor(name, category, height, weight, personality) {
        this.name = name;
        this.category = category;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
    }
}
class White extends Pig {
    constructor(n, b, c, h, w, p, r) {
        super(n, c, h, w, p);
        this.running = r;
        this.breed = b;
    }
}
class Grey extends Pig {
    constructor(n, b, c, h, w, p, s) {
        super(n, c, h, w, p);
        this.swimming = s;
        this.breed = b;
    }
}
class Chestnut extends Pig {
    constructor(n, b, c, h, w, p, l) {
        super(n, c, h, w, p);
        this.language = l;
        this.breed = b;
    }
}
class Black extends Pig {
    constructor(n, b, c, h, w, p, s) {
        super(n, c, h, w, p);
        this.strength = s;
        this.breed = b;
    }
}
