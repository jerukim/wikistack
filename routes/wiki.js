const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');


module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    res.send('this is rout GET 1');
  } catch(error) {next(error)};
});

router.post('/', async (req, res, next) => {
  try {
    res.send('this is rout POST 1');
  } catch(error) {next(error)};
});

router.get('/add', async (req, res, next) => {
  try {
    //console.log(require('../views'));
    res.send(addPage());
  } catch(error) {next(error)};
});

