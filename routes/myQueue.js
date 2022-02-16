//imports
const express = require('express');
const router = express.Router();
const myQueueCtrl = require('../controllers/myQueueCtrl');

//routes
router.get('/', myQueueCtrl.getLists);
router.get('/view/:id', myQueueCtrl.getViewList);

router.get('/new', myQueueCtrl.getNewList);
router.post('/new', myQueueCtrl.postNewList);

router.get('/edit/:id', myQueueCtrl.getEditList);
router.post('/edit/:id', myQueueCtrl.postEditList);

router.post('/delete/:id', myQueueCtrl.deleteList);

//exports
module.exports = router;