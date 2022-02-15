//imports
const express = require('express');
const router = express.Router();
const indexCtrl = require('./../controllers/indexCtrl');
const spotifyCtrl = require('./../controllers/spotifyCtrl');

//routes
router.get('/', spotifyCtrl.getFeed, indexCtrl.getHome);
router.get('/about', indexCtrl.getAbout);
//exports
module.exports = router;