export class Helice {
    private numHelices: number = 0;

    constructor(n: number) {
        this.numHelices = n;
    }

    public ToString() {
        return this.numHelices + " hélice/s";
    }
}
