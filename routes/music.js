//imports
const express = require('express');
const router = express.Router();
const musicCtrl = require('../controllers/musicCtrl');
const spotifyCtrl = require('../controllers/spotifyCtrl');

//routes
router.get('/album/:albumID', spotifyCtrl.getAlbum, musicCtrl.getAlbum);
router.post('/album', musicCtrl.postAlbum);
router.get('/artist/:artistID', spotifyCtrl.getArtist, musicCtrl.getArtist);
router.post('/artist', musicCtrl.postArtist);
//exports
module.exports = router;