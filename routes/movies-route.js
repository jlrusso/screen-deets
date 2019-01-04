const express = require("express");
const router = express.Router();
const moviesCtrl = require('../controllers/movies-ctrl');
const errorCtrl = require('../controllers/error-ctrl');

router.get("/", moviesCtrl.goToMovies);
router.get('/movie-details/:movieId', moviesCtrl.goToDetails);
router.use(errorCtrl.goToError);

module.exports = router;