const Movie = require('../models/movies-md');
const Show = require('../models/shows-md');
const Documentary = require('../models/docums-md');

exports.goToSuggest = (req, res) => {
  res.render('suggest', {
    pageTitle: 'ScreenDeets | Suggest', path: '/suggest'
  });
}

const getFormData = req => ({
  type: req.body.type,
  title: req.body.title,
  date: req.body.date,
  image: req.body.image,
  desc: req.body.desc
});

const addMovieHandler = (res, body) => {
  const movie = new Movie(body.title, body.date, body.image, body.desc);
  movie.checkForDuplicates(body.title);
  res.redirect('/movies');
}

const addShowHandler = (res, body) => {
  const show = new Show(body.title, body.date, body.image, body.desc);
  show.checkForDuplicate(body.title);
  res.redirect('/shows');
}

const addDocumHandler = (res, body) => {
  const documentary = new Documentary(body.title, body.date, body.image, body.desc);
  documentary.addDocumentary();
  res.redirect('/documentaries');
}

exports.addContent = (req, res) => {
  const body = getFormData(req);
  switch(body.type){
    case ('movie'):
      return addMovieHandler(res, body);
    case ('show'):
      return addShowHandler(res, body);
    case ('documentary'):
      return addDocumHandler(res, body);
    default: return;
  }
}