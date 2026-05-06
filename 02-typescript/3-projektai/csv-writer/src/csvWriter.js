import { appendFileSync } from 'fs';
export class CSVWriter {
    stulpeliai;
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    csv;
    save(fileName) {
        appendFileSync(fileName, this.csv);
        this.csv = '\n';
        console.log('file saved to', fileName);
    }
    pridetiEilute(values) {
        let eilutes = values
            .map(v => this.formatuotiEilute(v));
        this.csv += eilutes.join('\n');
        console.log(this.csv);
    }
    formatuotiEilute(m) {
        return this.stulpeliai
            .map(stul => m[stul])
            .join(',');
    }
}
//# sourceMappingURL=csvWriter.js.map