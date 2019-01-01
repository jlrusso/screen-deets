const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.render('suggest', {pageTitle: 'ScreenDeets | Suggest', path: '/suggest'});
  // res.sendFile(path.join(__dirname, '../views', 'suggest.html'));
});

router.get("/add-content", (req, res) => {
  let body = [];
  req.on("data", chunk => {
    body.push(chunk);
  });
  req.on("end", () => {
    let productString = Buffer.concat(body).toString();
    console.log(productString);
    res.redirect("/home");
  });
});

module.exports = router;