// removed "const http = require('http');" + added "const path = require('path');" + removed "const Sauce = require('./models/sauce');
//" + added { useNewUrlParser: true, useUnifiedTopology: true }) on line 15 + 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const path = require('path'); // ***** new *****

const sauceRoutes = require('./routes/sauces');
// const userRoutes = require('./routes/user'); // ***** new (commented out)*****

// connection to MongoDB Atlas
mongoose.connect('mongodb+srv://jabnat:Piiquante_p6@cluster0.b5jcheo.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true, // ***** new *****
  useUnifiedTopology: true }) //***** new *****
.then(() => {
  console.log('successfully connected to MongoDB atlas!')
})
.catch((error) => {
  console.log('unable to connect to MongoDB Atlas');
  console.error(error); 
});

// const sauceSchema = mongoose.Schema({
//   _id: {type: String._id, required: true },
//   userId: { type: String, required: true },
//   name: { type: String, required: true },
//   manufacturer: { type: String, required: true },
//   description: { type: String, required: true },
//   heat: { type: Number, required: true },
//   likes: { type: Number, required: true },
//   dislikes: { type: Number, required: true },
//   imageUrl: { type: String, required: true },
//   mainPepper: { type: String, required: true },
//   usersLiked: { type: String.userId, required: true },
//   usersDisliked: { type: String.userId, required: true },
// });

// module.exports = mongoose.model('Sauce', sauceSchema);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/api/sauces', sauceRoutes); //***** new (added '/' before 'api')*****
// app.use('/api/auth', userRoutes); ***** new (commented out)*****


module.exports = app;
