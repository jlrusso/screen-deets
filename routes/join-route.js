const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, '../views', 'join.html'));
  res.render('join', {pageTitle: 'ScreenDeets | Join', path: '/join'});
});

router.get("/create-user", (req, res) => {
  let body = [];
  req.on("data", chunk => {
    body.push(chunk);
  });
  req.on("end", () => {
    let userData = Buffer.concat(body).toString();
    let userObj = {};
    userData.split("&").forEach(input => {
      let propValArr = input.split("=");
      userObj[`${propValArr[0]}`] = propValArr[1];
    });
    fs.readFile("createUsers/users.json", (err, data) => {
      if(err) return console.log(err);
      let users = JSON.parse(data).users.map(user => user);
      users.push(userObj);
      let usersJSON = JSON.stringify({users}, null, 4);
      fs.writeFile("createUsers/users.json", usersJSON, (err) => {
        console.log(err);
      });
      res.redirect("/home");
    });
  });
});

module.exports = router;