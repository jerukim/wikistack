const express = require('express');
const morgan = require('morgan');
// const static = express.static();
const layout = require('./views/layout');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));



app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
