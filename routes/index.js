//imports
const express = require('express');
const router = express.Router();
const indexCtrl = require('./../controllers/indexCtrl');
const spotifyCtrl = require('./../controllers/spotifyCtrl');
const myQueueCtrl = require('../controllers/myQueueCtrl');

//routes
router.get('/', spotifyCtrl.getFeed, indexCtrl.getHome);
router.get('/synapsearch', spotifyCtrl.searchTracks, indexCtrl.synapSearch);
router.get('/myneurons', myQueueCtrl.getAllTracks);
router.get('/discover', spotifyCtrl.getFeed, indexCtrl.getHome);
router.get('/myqueue', myQueueCtrl.getLists, indexCtrl.getMyQueue);
router.get('/rand-o-matic', indexCtrl.getRandOmatic);
//exports
module.exports = router;