// const express = require('express');
// const colors = require('colors');
import express from 'express';
import colors from 'colors';

const app = express();
const port = 3000;
// common js (import)
// const data = require('./data/songs');
import * as Data from './data/songs.js';

// ES (import)
import { sum, substract } from './utils/operations.js';
import multiply from './utils/operations2.js';

app.get('/', (req, res) => {
    res.send('<html> <body> Hola desde express a todos... </body> </html>');
});

app.get('/songs', (req, res) => {
    res.json(Data.songs);
});

app.listen(port, () => {
    console.log(`servidor JOYA en el puerto:${port}`.rainbow);
    console.log(sum(4, 5)); // 9
    console.log(substract(10, 7)); // 3
    console.log(multiply(12, 2)); // 24
});
