enum pigCategory {
    Grey = "Grey",
    Chestnut = "Chestnut",
    White = "White", 
    Black = "Black"
}

enum GreyBreed {
    Moura = "Moura",
    Oxford = "Oxford",
    Gascon = "Gascon",
    Ossabaw = "Ossabaw"
}

enum WhiteBreed {
    Micro = "Micro",
    Chester = "Chester",
    Danish = "Danish",
    Cinta = "Cinta"
}

enum ChestnutBreed {
    Hereford = "Hereford",
    Landrace = "Landrace",
    Tamworth = "Tamworth",
    Meishan = "Meishan"
}

enum BlackBreed {
    Mangalica = "Mangalica",
    Kunekune = "Kunekune",
    Jeju = "Jeju",
    Poland = "Poland"
}

abstract class Pig {
    name: string;
    category: string;
    height: number;
    weight: number;
    personality: string;

    constructor(name: string, category: string, height: number, weight: number, personality: string) {
        this.name = name;
        this.category = category;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
    }
}

class White extends Pig {
    breed: string;
    running: number; // out of 100
    constructor(n:string, b:string, c:string, h:number, w:number, p:string, r:number) {
        super(n, c, h, w, p);
        this.running = r;
        this.breed = b;
    }
}

class Grey extends Pig {
    breed: string;
    swimming: number; // out of 100
    constructor(n:string, b:string, c:string, h:number, w:number, p:string, s:number) {
        super(n, c, h, w, p);
        this.swimming = s;
        this.breed = b;
    }
}

class Chestnut extends Pig {
    language: string;
    breed: string;
    constructor(n:string, b:string, c:string, h:number, w:number, p:string, l:string) {
        super(n, c, h, w, p);
        this.language = l;
        this.breed = b;
    }
}

class Black extends Pig {
    breed: string;
    strength: number; // 1 to 10
    constructor(n:string, b:string, c:string, h:number, w:number, p:string, s:number) {
        super(n, c, h, w, p);
        this.strength = s;
        this.breed = b;
    }
}

