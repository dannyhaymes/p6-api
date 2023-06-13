const userCtrl = require('../controllers/user');
const express = require('express');
const router = express.Router();
router.post('/signUp', userCtrl.signUp);
router.post('/login', userCtrl.login);
module.exports = router;