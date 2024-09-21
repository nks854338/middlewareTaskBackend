const express = require('express');
const {handleSignIn, getAllUser} = require('../controllers/user');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.route('/').get(getAllUser);

router.route('/signin').post(handleSignIn);

module.exports = router;