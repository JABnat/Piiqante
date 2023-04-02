const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config() //library to read environement variable from .env file

const path = require('path');

const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user'); 

// connection to MongoDB Atlas
mongoose.connect(process.env['CONNECTION_INFO'],
{ useNewUrlParser: true,
  useUnifiedTopology: true }) 
.then(() => {
  console.log('successfully connected to MongoDB atlas!')
})
.catch((error) => {
  console.log('unable to connect to MongoDB Atlas');
  console.error(error); 
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes); 

module.exports = app;
