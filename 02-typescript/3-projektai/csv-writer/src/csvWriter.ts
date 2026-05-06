import { appendFileSync } from 'fs';


export class CSVWriter<T> {
    constructor(private stulpeliai: (keyof T)[]) {
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    private csv: string;

    save(fileName: string): void {
        appendFileSync(fileName, this.csv);

        this.csv = '\n';
        console.log('file saved to',fileName);
    }

    pridetiEilute(values: T[]): void {
        let eilutes = values
            .map(v => this.formatuotiEilute(v));

        this.csv += eilutes.join('\n');

        console.log(this.csv);
    }

    private formatuotiEilute(m: T): string {
        return this.stulpeliai
            .map(stul => m[stul])
            .join(',');
    }
}