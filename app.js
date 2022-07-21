const express = require('express');
const app = express();
const peopleRoute = require('./routes/people');

app.use(express.json());

app.use('/people', peopleRoute);

app.get('/', (req, res) => {
    res.send('<h1>O servidor está OK!</h1><br> <a href="./people">Ver dados</a>')
})

module.exports = app;