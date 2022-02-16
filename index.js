//imports
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require('./config/db');
const morgan = require('morgan');
const SpotifyWebApi = require('spotify-web-api-node');
const sessionManager = require('./config/session');

//middlewares
require('dotenv').config();
sessionManager(app);
connectDB();
app.use(morgan("dev"));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true}));

//routes
app.use((req, res, next) => {
    //console.log(req.session.currentUser)
    res.locals.currentUser = req.session.currentUser //guarda en local 
    //console.log(res.locals);
    next()
})

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/music', require('./routes/music'));
app.use('/myqueue', require('./routes/myQueue'));

//server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));