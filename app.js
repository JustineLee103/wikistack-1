const express = require('express');
const morgan = require('morgan');
//const Sequelize = require('Sequelize)'??

const { db } = require('./models');

//const models = require('./models');

db.authenticate().
then (() => {
    console.log('connected to the database')
});

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
});



let PORT = 3000;

//here were are making our SQL tables exist.
const init = async () => {
   let users = await db.User.sync();
   let pages = await db.Page.sync(); 

   app.listen(PORT, () => {
    console.log(`App is listening in port ${PORT}`)
});
}

init();

