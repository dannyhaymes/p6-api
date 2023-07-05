const Sauce = require('../models/sauce');
const fs = require('fs');
//TODO Update to handle request with no file
exports.addSauce = (req, res) => {
  const parsedSauce = JSON.parse(req.body.sauce)
  const url = req.protocol + '://' + req.get('host');
  const sauce = new Sauce({
    name: parsedSauce.name,
    description: parsedSauce.description,
    imageUrl: url + '/images/' + req.file.filename,
    _id: parsedSauce.userId,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
    mainPepper: parsedSauce.mainPepper,
    heat: parsedSauce.heat,
    manufacturer: parsedSauce.manufacturer,
  });
  sauce.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

