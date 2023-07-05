// app.use('/images', express.static(path.join(__dirname, 'images')));

const sauceCtrl = require('../controllers/sauce');
const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
const multer = require('../middleware/multer-config')
// router.get('/', auth, sauceCtrl.findAll);
router.post('/', auth, multer, sauceCtrl.addSauce);
// router.get('/:id', auth, sauceCtrl.getOneSauce);
// router.put('/:id', auth, multer, sauceCtrl.modifySauce);
// router.delete('/:id', auth, sauceCtrl.deleteOne);


module.exports = router;