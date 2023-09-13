"use strict";
class BPigController {
    constructor() {
        this.bpigs = [];
    }
    add(p) {
        this.bpigs.push(p);
    }
    delete(p) {
        this.bpigs.pop();
    }
    getAll() {
        return JSON.parse(localStorage.bpigArray);
    }
}
class CPigController {
    constructor() {
        this.cpigs = [];
    }
    add(p) {
        this.cpigs.push(p);
    }
    delete(p) {
        this.cpigs.pop();
    }
    getAll() {
        return JSON.parse(localStorage.cpigArray);
    }
}
class GPigController {
    constructor() {
        this.gpigs = [];
    }
    add(p) {
        this.gpigs.push(p);
    }
    delete(p) {
        this.gpigs.pop();
    }
    getAll() {
        return JSON.parse(localStorage.gpigArray);
    }
}
class WPigController {
    constructor() {
        this.wpigs = [];
    }
    add(w) {
        this.wpigs.push(w);
    }
    delete(w) {
        this.wpigs.pop();
        localStorage.wpigArray = JSON.stringify(this.wpigs);
    }
    getAll() {
        return JSON.parse(localStorage.wpigArray);
    }
}
