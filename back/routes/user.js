const userCtrl = require('../controllers/user');
const express = require('express');
const router = express.Router();
router.post('/signUp', userCtrl.signUp);
module.exports = router;