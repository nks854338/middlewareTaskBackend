const express = require('express');
const {handleSignIn, handleLogin, getAllUser} = require('../controllers/user');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.route('/').get(getAllUser);

router.route('/signin').post(handleSignIn);

router.route('/login').post(handleLogin);

module.exports = router;