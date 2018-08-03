const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models');


module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    res.send('this is rout GET 1');
  } catch (error) {next(error)}
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    // name: req.body.name,
    // email: req.body.email,
    title: req.body.title,
    slug: req.body.title.replace(/ /g,'-'),
    content: req.body.content
  })

  try {
    await page.save();
    res.redirect('/');
    console.log(page);
  } catch (error) {next(error)}
});

router.get('/add', async (req, res, next) => {
  try {
    //console.log(require('../views'));
    res.send(addPage());
  } catch (error) {next(error)}
});

