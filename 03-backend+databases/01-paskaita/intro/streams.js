const fs = require('fs');

const readStream = fs.createReadStream(
    './pvz.jpg'
);

readStream.on('data', (chunk) => {
    console.log('===== new chunk =====');
    console.log(chunk);
});