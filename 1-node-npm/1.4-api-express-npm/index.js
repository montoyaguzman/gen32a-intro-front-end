const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;
// common js (import)
const data = require('./data/songs');

app.get('/', (req, res) => {
    res.send('<html> <body> Hola desde express a todos... </body> </html>');
});

app.get('/songs', (req, res) => {
    res.json(data.songs);
});

app.listen(port, () => {
    console.log(`servidor JOYA en el puerto:${port}`.rainbow);
});
