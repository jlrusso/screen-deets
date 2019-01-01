const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/existing-user", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if(err) return console.log(err);
      let users = JSON.parse(data).users.map(user => user);
      users.push(userObj);
      let usersJSON = JSON.stringify({users}, null, 4);
      fs.writeFile("createUsers/users.json", usersJSON, err => console.log(err));
      res.redirect("/");
  });
});

router.get("/", (req, res) => {
  res.render('login', {pageTitle: 'ScreenDeets | Login', path: '/login'});
  // res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

module.exports = router;