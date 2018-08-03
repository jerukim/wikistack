const express = require('express');
const morgan = require('morgan');
const models = require('./models');
const layout = require('./views/layout');
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/stylesheets'));
app.use('/wiki', wikiRoutes);


app.get('/', async (req, res) => {
  //res.send(layout(''));
  res.redirect('/wiki');
});

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})


const PORT = 3000;

const init = async () => {
  await models.db.sync();

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

init();

