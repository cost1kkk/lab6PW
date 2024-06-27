
const Movie = require('../models/movie');

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const createMovie = async (req, res, next) => {
  const { title, director, description, image } = req.body;

  try {
    const newMovie = new Movie({ title, director, description, image });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    next(err);
  }
};

const getMovieById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

const updateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { title, director, description, image } = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, { title, director, description, image }, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch (err) {
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
};
