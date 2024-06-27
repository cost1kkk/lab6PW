const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { verifyToken } = require('../middlewares/auth');

router.get('/', verifyToken, movieController.getAllMovies);
router.post('/', verifyToken, movieController.createMovie);
router.get('/:id', verifyToken, movieController.getMovieById);
router.put('/:id', verifyToken, movieController.updateMovie);
router.delete('/:id', verifyToken, movieController.deleteMovie);

module.exports = router;

