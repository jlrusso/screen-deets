const express = require("express");
const router = express.Router();
const path = require("path");

const movies = [
  {title: 'Happy Gilmore'},
  {title: 'Remember the Titans'},
  {title: 'Never Back Down'},
  {title: 'Glory'},
  {title: 'The Matrix'},
  {title: 'The Matrix Reloaded'},
  {title: 'The Matrix Revolution'},
  {title: 'Jackass'},
  {title: 'Dumb and Dumber'},
  {title: 'The Dark Knight'},
  {title: 'Superman'},
  {title: 'Spiderman'}
];

router.get("/", (req, res) => {
  res.render('movies', {movies, pageTitle: 'ScreenDeets | Movies', path: '/movies'});
  //res.render('movies', {movs: movies, pageTitle: 'ScreenDeets | Movies', path: '/movies'});
  //res.sendFile(path.join(__dirname, "../views", "movies.html"));
});

module.exports = router;