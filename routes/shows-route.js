const express = require("express");
const router = express.Router();
const path = require("path");

const shows = [
  {title: 'The Office'},
  {title: 'True Detective'},
  {title: 'Weeds'},
  {title: 'Lost'},
  {title: 'Breaking Bad'},
  {title: 'That 70s Show'},
  {title: 'Bates Motel'},
  {title: 'Peaky Blinders'},
  {title: 'Flashpoint'},
  {title: 'Game of Thrones'},
  {title: 'Planet Earth'},
  {title: 'Black Mirror'}
]

router.get("/", (req, res) => {
  res.render('shows', {shows, pageTitle: 'ScreenDeets | Shows', path: '/shows'});
  //res.render('shows', {shows: shows, pageTitle: 'ScreenDeets | Shows', path: '/shows'});
  //res.sendFile(path.join(__dirname, "../views", "shows.html"));
});

module.exports = router;