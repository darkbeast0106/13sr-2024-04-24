class Point {
    // nincs private meg public kulcsszó
    // private adattag létrehozása
    #x;
    #y;
    constructor(x, y) {
        if (x === undefined) {
            this.#constructor0parameter();
        } 
        else {
            this.#x = x;
            this.#y = y;
        }
    }

    #constructor0parameter() {
        this.#x = 0;
        this.#y = 0;
    }

    get x() {
        return this.#x;
    }

    set x(value) {
        this.#x = value;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
    }

    distanceFromOrigo() {
        // This kulcsszó kiírása kötelező, nem hagyható el
        return Math.sqrt(Math.pow(this.#x, 2) + Math.pow(this.#y, 2));
    }

    /**
     * 
     * @param {Point} otherPoint 
     * @returns {number}
     */
    distanceFrom(otherPoint) {
        return Math.sqrt(
            Math.pow(this.#x - otherPoint.#x, 2) + 
            Math.pow(this.#y - otherPoint.#y, 2) 
        );
    }

    toString() {
        return `x: ${this.#x}; y: ${this.#y}; distance from origo: ${this.distanceFromOrigo()}`;
    }

    toJSON() {
        return {
            x: this.#x, 
            y: this.#y, 
            distanceFromOrigo: this.distanceFromOrigo()
        };
    }
}