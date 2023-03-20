const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/api/sauces', (req, res, next) => {
    const sauce = [
      {
        _id: '123',
        name: 'Cholula Original Hot Sauce, 5 fl oz        ',
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

module.exports = app;