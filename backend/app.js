// connection address: mongodb+srv://jabnat:Piiquante_p6@cluster0.b5jcheo.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  mainPepper: { type: String, required: true },
  usersLiked: { type: String, required: true },
  usersDisliked: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/sauces', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Thing created successfully!'
  });
});

app.get('/api/sauces', (req, res, next) => {
    const sauce = [
      {
        _id: '123',
        name: 'Cholula Original Hot Sauce, 5 fl oz',
        manufacturer: 'Cholula',
        description: 'This is where it all started. Cholula Original Hot Sauce is crafted from a generations-old family recipe that features arbol and piquin peppers and a blend of regional spices to deliver authentic Mexican flavor and heat. Taste the best life has to offer with Cholula Original Hot Sauce. With medium heat, the options are endless for this versatile sauce. Try on everything from eggs and rice & beans to beverages and even pizza! We love it on both traditional Mexican enchiladas and tamales as well as new favorites like burrito bowls and fish tacos. From our distinctive wooden cap to the original recipe hot sauce inside, every bottle of Cholula is a celebration of great food, flavor and our Mexican roots.        ',
        heat: 100,
        likes: 23,
        dislikes: 1,
        imageUrl: 'https://i5.walmartimages.com/asr/f0ef9049-d769-46cf-933b-5ce087095968.ae7c30538f20855df0fbbf37d7da80d8.jpeg',
        mainPepper: 'Arbol & Piquin',
        usersLiked: 'usersLiked'['me gusta'],
        usersDisliked: 'usersDisliked'['no me gusta'],
        userId: 'user123',
            },
    ];
    res.status(200).json(sauce);
  });

  mongoose.connect('jabnat:Piiquante_p6@cluster0.b5jcheo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('successfully connected to MongoDB atlas!')
  })
  .catch((error) => {
    console.log('unable to connect to MongoDB Atlas');
    console.error('error');
  });



module.exports = app;