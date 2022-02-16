//imports
const express = require('express');
const router = express.Router();
const authCtrl = require('./../controllers/authCtrl');

//routes
router.get('/signin', authCtrl.getSignin);
router.post('/signin', authCtrl.postSignin);

router.get('/signup', authCtrl.getSignup);
router.post('/signup', authCtrl.postSignup);

router.get('/user', authCtrl.getUser);
router.get('/signout', authCtrl.signout);
//exports
module.exports = router;