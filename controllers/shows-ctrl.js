const Show = require('../models/shows-md');

exports.goToShows = (req, res) => {
  Show.fetchAll(shows => {
    res.render('shows/shows', {
      shows: shows,
      pageTitle: 'ScreenDeets | Shows',
      path: '/shows'
    });
  });
}

exports.goToDetails = (req, res) => {
  const showId = req.params.showId;
  Show.fetchShow(showId, show => {
    res.render('shows/show-details', {
      show,
      pageTitle: 'ScreenDeets | Shows',
      path: '/shows/show-details'
    });
  }); 
}