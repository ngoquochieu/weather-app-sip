const express = require("express");
const locationController = require('../controller/Location.Controller')
const router = express.Router();

// router.get('/', locationController.test)
router.get('/get-location/:city', locationController.getLocation)
router.get('/', locationController.test)

module.exports = router;