var express = require('express');

var router = express.Router();

var apiController = require('../controllers/api/specials');
var specialsController = require('../controllers/specials');

router.get('/specials', apiController.getAllSpecials);
router.get('/specials/:id', apiController.getASpecial);

// Internal API CALLS
router.delete('/specials/:id', specialsController.destroy);

module.exports = router;



