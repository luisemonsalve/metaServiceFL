const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
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