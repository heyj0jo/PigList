interface PigControllerInterface {
    add(p:Pig):void;
    delete(p:Pig):void;
    getAll(): Pig[];
}


class BPigController implements PigControllerInterface{
    bpigs: Black[];

    constructor() {
        this.bpigs = [];
    }

    add(p:Black):void {
        this.bpigs.push(p);
    }

    delete(p: Black): void {
        this.bpigs.pop(); 
    }

    getAll():Black[] {
        return JSON.parse(localStorage.bpigArray);
    }
}

class CPigController implements PigControllerInterface{
    cpigs: Chestnut[];

    constructor() {
        this.cpigs = [];
    }

    add(p:Chestnut):void {
        this.cpigs.push(p);
    }

    delete(p: Chestnut): void {
        this.cpigs.pop();
        
    }

    getAll():Chestnut[] {
        return JSON.parse(localStorage.cpigArray);
    }
}

class GPigController implements PigControllerInterface{
    gpigs: Grey[];

    constructor() {
        this.gpigs = [];
    }

    add(p:Grey):void {
        this.gpigs.push(p);
    }

    delete(p: Grey): void {
        this.gpigs.pop();
        
    }

    getAll():Grey[] {
        return JSON.parse(localStorage.gpigArray);
    }
}

class WPigController implements PigControllerInterface{
    wpigs: White[];

    constructor() {
        this.wpigs = [];
    }
    
    add(w:White):void {
        this.wpigs.push(w);
    }

    delete(w: White): void {
        this.wpigs.pop();
        localStorage.wpigArray = JSON.stringify(this.wpigs);
    }

    getAll():White[] {
        return JSON.parse(localStorage.wpigArray);
    }
}


