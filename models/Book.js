const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genre: String,
  year: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }, 
  versionKey: false 
})

module.exports = mongoose.model('Book', bookSchema);