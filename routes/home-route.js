const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render('index', {pageTitle: 'ScreenDeets | Home', path: '/home'});
  // res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get("/home", (req, res) => {
  res.render('index', {pageTitle: 'ScreenDeets | Home', path: '/home'});
  // res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.use("/", (req, res) => {
  res.status(404).render('error', {pageTitle: 'ScreenDeets | Error', path: '/'});
  // res.sendFile(path.join(__dirname, '../views', 'error.html')); 
});

module.exports = router;