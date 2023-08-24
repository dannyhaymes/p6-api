const express = require('express')
const app = express()
const mongoose = require('mongoose');
app.use(express.json());
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const Sauce = require('./models/sauce');
const path = require('path');
const sauce = require('./models/sauce');

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@p6-cluster.zbbxrxb.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('successfully connected to mongoDB atlas');
    })
    .catch((error) => {
        console.log('unable to connect');
        console.log(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    app.use('/api/stuff', (req, res, next) => {
        allSauces.find().then(
          (sauces) => {
            res.status(200).json(sauces);
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });
});



app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
module.exports = app;