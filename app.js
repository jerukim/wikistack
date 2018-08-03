const express = require('express');
const morgan = require('morgan');
const static = express.static();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

