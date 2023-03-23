// connection address: mongodb+srv://jabnat:Piiquante_p6@cluster0.b5jcheo.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sauce = require('./models/sauce');
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const app = express();

const sauceSchema = mongoose.Schema({
  _id: {type: String._id, required: true },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  mainPepper: { type: String, required: true },
  usersLiked: { type: String.userId, required: true },
  usersDisliked: { type: String.userId, required: true },
});

module.exports = mongoose.model('Sauce', sauceSchema);



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('api/sauces', sauceRoutes);
app.use('api/auth', userRoutes);

  // connection to MongoDB Atlas
  mongoose.connect('mongodb+srv://jabnat:Piiquante_p6@cluster0.b5jcheo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('successfully connected to MongoDB atlas!')
  })
  .catch((error) => {
    console.log('unable to connect to MongoDB Atlas');
    console.error(error);
  });

module.exports = app;
