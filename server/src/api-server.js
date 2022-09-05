const express = require('express');
const api = require('./routes/api');
const mongoose = require('mongoose');
const PORT = 4001;
const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const session = require('express-session');
const cors = require('cors');
mongoose.connect('mongodb://localhost/games');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With'
    );

    next();
});
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json());
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: 'supersecret',
        cookie: {
            httpOnly: false,
            secure: false,
        },
    })
);

app.use('/', api);

app.listen(PORT, function () {
    console.log(`The server is listening on port : ${PORT}`);
});
