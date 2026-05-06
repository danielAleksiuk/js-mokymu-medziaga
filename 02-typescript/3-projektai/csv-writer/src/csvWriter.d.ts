export declare class CSVWriter<T> {
    private stulpeliai;
    constructor(stulpeliai: (keyof T)[]);
    private csv;
    save(fileName: string): void;
    pridetiEilute(values: T[]): void;
    private formatuotiEilute;
}
//# sourceMappingURL=csvWriter.d.ts.map