const express = require("express");
const router = express.Router();
const showsCtrl = require('../controllers/shows-ctrl');
const errorCtrl = require('../controllers/error-ctrl');

router.get("/", showsCtrl.goToShows);
router.get('/show-details/:showId', showsCtrl.goToDetails);
router.use(errorCtrl.goToError);

module.exports = router;