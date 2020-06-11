const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');
const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/parciales')

const port = process.env.PORT || 3000

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
    return palabras.join(' ');
})

app.get('/', (req, res) => {
    res.render('home', { nombre: 'Alberto Cantero' })
})
app.get('/about', (req, res) => { res.render('about') })

app.listen(port, () => {
    console.log(`Servicio a la escucha por el puerto ${port}`);
})