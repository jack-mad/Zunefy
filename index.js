//imports
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require('./config/db');
const morgan = require('morgan');

//middlewares
require('dotenv').config();
connectDB();
app.use(morgan("dev"));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true}));

//routes
app.use('/',require('./routes/index'));
//app.use('/auth', require('./routes/auth'));

//server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));