const userCtrl = require('../controllers/user');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
router.post('/signUp', userCtrl.signUp);
router.post('/login', userCtrl.login);
router.post('/', auth, multer, sauceCtrl.addSauce);
module.exports = router;