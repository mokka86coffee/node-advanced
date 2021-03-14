const path = require('path');
const fs = require('fs');
const server = require('http').createServer();
const fileName = path.join(__dirname, 'file.txt');

server.on('request', (req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    console.log(req.url)

    if (req.url === '/callback') {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                return console.log(err);
            }

            resp.end(data);
        })
    } else if (req.url === '/stream') {
        const src = fs.createReadStream(fileName);
        src.pipe(resp);
    } else {
        resp.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        resp.end('Данной страницы не существует');
    }
});

server.listen(5000);
