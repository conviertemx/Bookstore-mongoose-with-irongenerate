const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');

/* GET home page */
router.get('/', (req, res, next) => {
  Book.find()
  .then(books => {
    res.render('index', { books });
  })
  .catch(err => {
    res.render('index')
  })
});

router.get('/books/:id', (req, res) => {
  const { id } = req.params;
  Book.findById(id)
  .then(book => {
    res.render('detail', book);
  })
  .catch(err => {
    res.render('detail');
  })
});

module.exports = router;