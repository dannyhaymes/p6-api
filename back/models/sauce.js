const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: ['String <userId>'],
    usersDisliked: ['String <userId'],
});

// const express = require('express');
// const router = express.Router();

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

// const stuffCtrl = require('../controllers/stuff');

// router.get('/', auth, stuffCtrl.getAllStuff);
// router.post('/', auth, multer, stuffCtrl.createThing);
// router.get('/:id', auth, stuffCtrl.getOneThing);
// router.put('/:id', auth, multer, stuffCtrl.modifyThing);
// router.delete('/:id', auth, stuffCtrl.deleteThing);

// module.exports = router;

// exports.modifyStuff = (req, res, next) => {
//     let thing = new Thing({ _id: req.params._id });
//     if (req.file) {
//       const url = req.protocol + '://' + req.get('host');
//       req.body.thing = JSON.parse(req.body.thing);
//       thing = {
//         _id: req.params.id,
//         title: req.body.thing.title,
//         description: req.body.thing.description,
//         imageUrl: url + '/images/' + req.file.filename,
//         price: req.body.thing.price,
//         userId: req.body.thing.userId
//       };
//     } else {
//       thing = {
//         _id: req.params.id,
//         title: req.body.title,
//         description: req.body.description,
//         imageUrl: req.body.imageUrl,
//         price: req.body.price,
//         userId: req.body.userId
//       };
//     }
//     stuff.updateOne({_id: req.params.id}, thing).then(
//       () => {
//         res.status(201).json({
//           message: 'Sauce updated successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   };

module.exports = mongoose.model('Sauce', sauceSchema);