import { CSVWriter } from "./csvWriter";



interface Mokejimas {
    id: number;
    suma: number;
    gavejas: string;
    paskirtis: string;
};

interface Darbuotojas {
  id: number
  vardas: string
  pareigos: string
}


const writer = new CSVWriter<Mokejimas>(
  ['id','suma', 'gavejas','paskirtis']
);

writer.pridetiEilute([
  {id: 123, suma: 100, gavejas: 'Jonas', paskirtis: 'dovana'},
  {id: 124, suma: 1000, gavejas: 'Petras', paskirtis: 'uz darba'},
  {id: 125, suma: 10000, gavejas: 'Mindaugas', paskirtis: 'skola'},
]);


writer.save('../data/mokejimai.csv'); 

const workerWrite = new CSVWriter<Darbuotojas>(
   ['id','vardas', 'pareigos']
);

workerWrite.pridetiEilute([
  {id: 123, vardas: 'Jonas', pareigos: 'dovana'},
  {id: 124, vardas: 'Petras', pareigos: 'uz darba'},
  {id: 125, vardas: 'Mindaugas', pareigos: 'skola'},
]);


workerWrite.save('../data/darbuotojai.csv'); 


// 10 filmu - star wars tematika
// movies.csv

interface Movie {
  id: number;
  name: string;
}

const moviesWrite = new CSVWriter<Movie>(
   ['id','name']
);

let duomenys: Movie[] = [];

fetch('url').then(res => res.json()).then(data => duomenys = data);

moviesWrite.pridetiEilute(duomenys);


moviesWrite.save('../data/movies.csv'); 