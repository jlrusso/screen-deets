const express = require('express');
const router = express.Router();
const documsCtrl = require('../controllers/docums-ctrl');
const errorCtrl = require('../controllers/error-ctrl');

router.get('/', documsCtrl.goToDocums);
router.get('/docum-details/:documId', documsCtrl.goToDetails);
router.use(errorCtrl.goToError);

module.exports = router;