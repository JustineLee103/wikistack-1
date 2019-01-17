const express = require('express');
const morgan = require('morgan');

//client?


const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
});



let PORT = 3000;

app.listen(PORT, () => {
    console.log(`App is listening in port ${PORT}`)
});