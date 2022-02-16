//imports
const express = require('express');
const router = express.Router();
const indexCtrl = require('./../controllers/indexCtrl');
const spotifyCtrl = require('./../controllers/spotifyCtrl');

//routes
router.get('/', spotifyCtrl.getFeed, indexCtrl.getHome);
router.get('/about', indexCtrl.getAbout);
router.get('/discover', spotifyCtrl.getFeed, indexCtrl.getHome);
router.get('/myqueue', indexCtrl.getMyQueue);
router.get('/rand-o-matic', indexCtrl.getRandOmatic);
//exports
module.exports = router;