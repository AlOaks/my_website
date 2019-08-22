const express = require('express');

const app = express();
const port = process.env.PORT;

app.set('views', '../dist');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res) => {
    res.render('index');
});


app.listen(port, () => {});