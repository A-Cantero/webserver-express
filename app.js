const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        let salida = {
            nombre: 'Alberto',
            edad: '25',
            url: req.url
        }

        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);

console.log('Escuchando por el puerto 8080');