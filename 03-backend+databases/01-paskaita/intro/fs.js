// const fs = require('fs');

// fs.readFile('./docs/text.txt', (err, data)=> {
//     if (err) {
//         console.log(err)
//     };

//     console.log(data);
//     console.log(data.toString());
// });

// let newTurinys = 'bla bla 2x bla bla bla';

// fs.writeFile(
//     './docs/text.txt',
//     newTurinys,
//     (eror) => {
//         if (eror) {
//             console.log(eror);
//         }

//         console.log('failo turinys pakeistas')
//     }
// )


// fs.writeFile(
//     './docs/textNew.txt',
//     newTurinys,
//     (eror) => {
//         if (eror) {
//             console.log(eror);
//         }

//         console.log('failo turinys pakeistas')
//     }
// );

// if (fs.existsSync('./docs/pvz')) {
//     console.log('pvz folderis yra sukurtas');

//     fs.rmdir('./docs/pvz', (error) => {
//         if (error) {
//             console.log(error)
//         };
//         console.log('sekmingai pasalinome pvz dir')
//     })
// }

// // fs.mkdir('./docs/pvz', (eror) => {
// //        if (eror) {
// //             console.log(eror);
// //         }

// //         console.log('folderis sukurtas')
// // } )

// if (fs.existsSync('./docs/textNew.txt')) {
//     console.log('failas yra')
//     fs.unlink('./docs/randomas/textNew.txt', (e) => {
//         if (e) {
//             console.log(e);
//         }
//         console.log('failas istrintas');
//     });
// }

// // studentai.js - 5 studentai
// //  masyvas - vardas, pazymiai, kursas, miestas

// // rasykData.js
// // 1. turi gauti duomenys is studentai.js
// // 2. studento_vardas.txt - rezultatai 
// //      vardas, pazymiu-vidurkis, miestas
// // 3. sub-folderiai pagal kursas



let uniqueKursai = [
    { kursas: 'ekonomika'},
    { kursas: 'ekonomika'},
    { kursas: 'informatika'},
    { kursas: 'ekonomika'},
    { kursas: 'matematika'},
    { kursas: 'ekonomika'},
    { kursas: 'matematika'},
]
    .map(item => item.kursas)
    .filter((kursas, index, array) => array.indexOf(kursas) === index)

console.log(uniqueKursai);

uniqueKursai = [
    { kursas: 'ekonomika'},
    { kursas: 'ekonomika'},
    { kursas: 'informatika'},
    { kursas: 'ekonomika'},
    { kursas: 'matematika'},
    { kursas: 'ekonomika'},
    { kursas: 'matematika'},
].reduce((acc, item) => {
    if (!acc.includes(item.kursas)) {
        acc.push(item.kursas);
    }

    return acc;
}, [])

console.log(uniqueKursai);