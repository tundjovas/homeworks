var express = require('express');
var router = express.Router();

var homeController = require('../controllers/homeController');

router.get('/songs', homeController.index)
router.post('/detectives', homeController.store)

module.exports = router;