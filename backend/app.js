const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/api/sauces', (req, res, next) => {
    const stuff = [
      {
        _id: 'string',
        name: 'string',
        manufacturer: 'string',
        description: 'string',
        heat: 100,
        likes: 23,
        dislikes: 1,
        imageUrl: 'string',
        mainPepper: 'string',
        usersLiked: 'string'[''],
        usersDisliked: 'string'[''],
        userId: 'string',
            },
      {
        _id: 'string',
        name: 'string',
        manufacturer: 'string',
        description: 'string',
        heat: 100,
        likes: 23,
        dislikes: 1,
        imageUrl: 'string',
        mainPepper: 'string',
        usersLiked: 'string'[''],
        usersDisliked: 'string'[''],
        userId: 'string',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;