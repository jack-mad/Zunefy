//imports
const express = require('express');
const router = express.Router();
const poolCtrl = require('../controllers/poolCtrl');

//routes

// router.get('/view/:id', poolCtrl.getViewList);

router.get('/', poolCtrl.showPool);
router.post('/', poolCtrl.postAddSong);

// router.get('/edit/:id', poolCtrl.getEditList);
// router.post('/edit/:id', poolCtrl.postEditList);

// router.post('/delete/:id', poolCtrl.deleteList);

//exports
module.exports = router;