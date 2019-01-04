const express = require("express");
const router = express.Router();
const suggestCtrl = require('../controllers/suggest-ctrl');
const errorCtrl = require('../controllers/error-ctrl');

router.get("/", suggestCtrl.goToSuggest);
router.post("/add-content", suggestCtrl.addContent);
router.use(errorCtrl.goToError);

module.exports = router;