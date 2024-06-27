const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  description: { type: String },
  image: { type: String },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

