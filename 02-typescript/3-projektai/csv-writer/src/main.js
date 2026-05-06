import { CSVWriter } from "./csvWriter.js";
;
const writer = new CSVWriter(['id', 'suma', 'gavejas', 'paskirtis']);
writer.pridetiEilute([
    { id: 123, suma: 100, gavejas: 'Jonas', paskirtis: 'dovana' },
    { id: 124, suma: 1000, gavejas: 'Petras', paskirtis: 'uz darba' },
    { id: 125, suma: 10000, gavejas: 'Mindaugas', paskirtis: 'skola' },
]);
writer.save('../data/mokejimai.csv');
const workerWrite = new CSVWriter(['id', 'vardas', 'pareigos']);
workerWrite.pridetiEilute([
    { id: 123, vardas: 'Jonas', pareigos: 'dovana' },
    { id: 124, vardas: 'Petras', pareigos: 'uz darba' },
    { id: 125, vardas: 'Mindaugas', pareigos: 'skola' },
]);
workerWrite.save('../data/darbuotojai.csv');
//# sourceMappingURL=main.js.map