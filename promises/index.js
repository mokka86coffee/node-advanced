const fs = require('fs');

const readFileIntoArray = (filename = __filename, cb) => new Promise((res, rej) => {
    fs.readFile(filename, 'utf8', (err, buffer) => {
        if (err) return rej(err);

        const arrayOfLines = buffer.trim().split('\n');

        return res(arrayOfLines);
    });
})

readFileIntoArray().then(console.log);
