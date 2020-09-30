const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

//Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//Routes
app.use(require('./routes/routes'));


module.exports = app;