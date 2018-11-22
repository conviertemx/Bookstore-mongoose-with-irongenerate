const mongoose = require('mongoose');
const Book = require('../models/Book');

const dbName = 'bookstore';
mongoose.connect(`mongodb://localhost/${dbName}`)

const books = [
  {
    "title": "Harry Potter and The Half-Blood Prince",
    "author": "J.K. Rowling",
    "pages": 700,
    "genre": "Fantasy",
    "year": 2010
  },
  {
    "title": "Own the moment",
    "author": "Carl Lentz",
    "pages": 500,
    "genre": "Motivational",
    "year": 2018
  },
  {
    "title": "The catcher in the rye",
    "author": "Bliss",
    "pages": 300,
    "genre": "Drama",
    "year": 2012
  },
  {
    "title": "El Psicoanalista",
    "author": "John K",
    "pages": 100,
    "genre": "Drama",
    "year": 2000
  },
  {
    "title": "Quiubule cun tu cuerpo",
    "author": "Yurdu Rusudu",
    "pages": 200,
    "genre": "Comedy",
    "year": 2000
  }
]

Book.create(books)
.then(books => {
  console.log(`${books.length} books created`);
  mongoose.connection.close();
})
.catch(err => {
  console.log('Something went wrong', err);
})
