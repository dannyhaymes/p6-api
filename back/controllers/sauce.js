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
    userId: parsedSauce.userId,
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

exports.findAll = (req, res, next) => {
  Sauce.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  );
};

exports.findOne = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
      res.status(200).json(sauce);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.deleteOne = (req, res, next) => {
  Sauce.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
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
exports.modifySauce = (req, res, next) => {
  //TODO Find Sauce to update using ID from User request (look at find one method)
  //TODO Update found sauce with user request info (look at add sauce method)
  let modifiedSauce;
  if (req.file) {
    modifiedSauce = JSON.parse(req.body.sauce);
    const url = req.protocol + '://' + req.get('host');
    modifiedSauce.imageUrl = url + '/images/' + req.file.filename;
  } else {
    modifiedSauce = req.body;
  }
  Sauce.updateOne({ _id: req.params.id }, modifiedSauce).then(
    () => {
      // const update = Sauce({
      //   name: parsedSauce.name,
      //   description: parsedSauce.description,
      //   imageUrl: url + '/images/' + req.file.filename,
      //   userId: parsedSauce.userId,
      //   likes: 0,
      //   dislikes: 0,
      //   usersLiked: [],
      //   usersDisliked: [],
      //   mainPepper: parsedSauce.mainPepper,
      //   heat: parsedSauce.heat,
      //   manufacturer: parsedSauce.manufacturer,
      // });
      res.status(201).json({
        message: 'Sauce updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  )
};