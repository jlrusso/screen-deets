const Movie = require('../models/movies-md');

exports.goToMovies = (req, res) => {
  Movie.fetchAll((movies) => {
    res.render('movies/movies', {
      movies: movies, 
      pageTitle: 'ScreenDeets | Movies', 
      path: '/movies'
    });
  });
}

exports.goToDetails = (req, res) => {
  const movieId = req.params.movieId;
  Movie.fetchMovie(movieId, movie => {
    res.render('movies/movie-details', {
      movie,
      pageTitle: 'ScreenDeets | Details',
      path: '/movies/movie-details'
    });
  });
}