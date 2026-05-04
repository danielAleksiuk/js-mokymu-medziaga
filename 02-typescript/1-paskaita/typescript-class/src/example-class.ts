class Automobilis {
    marke: string;
    modelis: string;
    rida: number;
    metai: number;
    arNaudotas: boolean;
    private arVogtas: boolean;

    constructor(marke: string, modelis: string, metai: number) {
        this.marke = marke;
        this.modelis = modelis;
        this.metai = metai;
    }

    public setRida(reiksme: number): void {
        this.rida = reiksme;
    }

    getRida(): number {
        return this.rida;
    }

    private setArVogtas(reiksme: boolean): void {
        this.arVogtas = reiksme;
    }
}

console.log(Automobilis);

const audiAuto = new Automobilis('audi', 'a7', 2020);
console.log(audiAuto);
audiAuto.setRida(116000);

console.log(audiAuto.getRida());
console.log(audiAuto);
// audiAuto.arVogtas
// audiAuto.setArVogtas(false);

console.log(audiAuto);

// console.log(audiAuto.arVogtas);

const bmwAuto = new Automobilis('bmw', 'F10', 2020);
console.log(bmwAuto);

console.log(typeof bmwAuto);
console.log(typeof bmwAuto.marke);
console.log(typeof bmwAuto.metai);
console.log(typeof bmwAuto.rida);
console.log(typeof bmwAuto.getRida)