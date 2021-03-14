const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const SECRET = 'SECRET sfog,fog,erog,w-1343$@#@$RD';

const r = fs.createReadStream(__dirname + '/file.txt');
const c = crypto.createCipher('aes256', SECRET);
const d = crypto.createDecipher('aes256', SECRET);
const z = zlib.createGzip();
const w = fs.createWriteStream(__dirname + '/file.txt.gz');

r
    .pipe(c)
    .pipe(z)
        .on('data', () => process.stdout.write('\n.'))
    .pipe(w)
        .on('finish', () => process.stdout.write('\ndone\n'));
