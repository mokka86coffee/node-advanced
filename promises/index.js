const fs = require('fs');

const readFileIntoArray = (filename = __filename, cb) => new Promise((res, rej) => {
    fs.readFile(filename, 'utf8', (err, buffer) => {
        if (err) return rej(err);

        const arrayOfLines = buffer.trim().split('\n');

        return res(arrayOfLines);
    });
})

readFileIntoArray().then(console.log);

setTimeout(() => console.log(1), 0);
Promise.resolve(2).then(r => r).then(console.log)
process.nextTick(() => console.log(3));
console.log(4)
