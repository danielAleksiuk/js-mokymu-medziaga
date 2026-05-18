const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1> labas rytas! </h1>');
    // res.write('<h3>bam bam bam</h3>')

    // fs.readFile('./views/index.html', (error, data) => {
    //     if (error) {
    //         console.log(error);
    //         res.end(); 
    //     } else {
    //         res.end(data);
    //     }
    // });
    console.log('bam');
    console.log('bum');
    let basePath = './views';

    switch(req.url) {
        case '/':
        case '/index.html': 
            basePath += '/index.html'
            break;
        case '/apie': 
            basePath += '/apie.html';
            break;
        case '/about':
            res.statusCode = 301;
            res.setHeader('Location', '/apie');
            res.end();
            break;
        default:
            basePath += '/404.html';
            res.statusCode = 406;
    }

    fs.readFile(basePath, (error, data) => {
        if (error) {
            console.log(error);
            res.end();
        } else {
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('waiting for request');
});

