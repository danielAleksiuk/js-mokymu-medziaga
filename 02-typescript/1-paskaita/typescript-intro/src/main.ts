console.log('main ts veikia');

let manoVardas: string = 'Jonas';

console.log(manoVardas);

let masyvas: number = [1, 2, 3];

let objektas: {vardas: string, amzius: number} = {vardas: 'jonas', amzius:2}

console.log(objektas);

interface Rezultatas {
  taskuSuma: number;
  vardas: string;
  pavarde?: string; // gali nebuti - ? 
  arLaimejo: boolean;
}

let zaidejas: Rezultatas = {taskuSuma: 10, vardas: 'jonas', arLaimejo: false};

function pvz():string {
  return 'abc';
}

function example(skaiciukas: number, arSkaicuoti: boolean): {result: boolean, value:number} {
  return {
    result: true,
    value: 123
  }
}

let rezultatas = 123;

// arba
let manoRezultatas: any = 123;

function pvzVoid(): void {

}


interface ManoTipas {
  reiksme: string;
  amzius: number;
}

type MyType = {
  value: string;
  amzius: number;
};

type NewType = MyType & ManoTipas;

let newTipas: NewType = {value: 'a', reiksme: 'b', amzius: 2};


let reiksme: number | string = 45;

type skaiciuotuvas = (a: number, b: number) => number;

// function sudeti (skaicius1: number, skaicius2: number):skaiciuotuvas {
//   return skaicius1 + skaicius2;
// }

const funckija: boolean = (a: number, result :string) => {
  return false;
}



