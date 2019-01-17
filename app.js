const express = require('express');
const morgan = require('morgan');
//client?


const app = express();

app.use(morgan('dev'));
app.use(express.static('/public'));
//app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('hello world');
});

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`App is listening in port ${PORT}`)
});