const Sauce = require('../models/sauce');

// get sauce information
exports.getSauceInformation = (req, res, next) => {
  Sauce.find().then(
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
};

//create sauce
exports.createSauce = (req, res, next) => {
  let sauceFromFront = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    userId: req.auth.userId,
    name: sauceFromFront.name,
    manufacturer: sauceFromFront.manufacturer,
    description: sauceFromFront.description,
    heat: sauceFromFront.heat,
    likes: 0,
    dislikes: 0,
    imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`, /// practice recreating url of image
    mainPepper: sauceFromFront.mainPepper,
    usersLiked: [],
    usersDisliked: [],
  });
  sauce.save().then(
    () => {
      res.status(201).json({
        message: 'Sauce saved successfully!'
      });
    }
  ).catch(
    (error) => {
      console.log(error);
      res.status(400).json({
        error: error
      });
    }
  );
};

// display sauces by Id
exports.getAllSaucesId = (req, res, next) => {
    Sauce.findOne({
      _id: req.params._id
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

// delete sauce
exports.deleteSauce = (req, res, next) => {
  Sauce.deleteOne({_id: req.params._id})
  .then(() => {
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

// Modify sauce
exports.modifySauce = (req, res, next) => {
  if (req.body.sauce) {
    let sauceFromFront = JSON.parse(req.body.sauce);
    Sauce.findOneAndUpdate({
      _id: req.params.id,
      userId: req.auth.userId,
      name: sauceFromFront.name,
      manufacturer: sauceFromFront.manufacturer,
      description: sauceFromFront.description,
      heat: sauceFromFront.heat,
      likes: 0,
      dislikes: 0,
      imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`, /// practice recreating url of image
      mainPepper: sauceFromFront.mainPepper,
      usersLiked: [],
      usersDisliked: [],
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
    }
    else {
      Sauce.findOneAndUpdate({
        _id: req.params.id,
        userId: req.auth.userId,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        heat: req.body.heat,
        likes: 0,
        dislikes: 0,
        // imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`, /// practice recreating url of image
        mainPepper: req.body.mainPepper,
        usersLiked: [],
        usersDisliked: [],
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
    }
};
  
  // (Likes)
  // User selects like button on sauce page
  // logic in controllers is activated adding one to total quantity
  // Sauce is updated with new value
  // updatedSauce is sent to and saved in MongoDB
  // updatedSauce is returned to client

  exports.sauceLikes = (req, res, next) => {  
    const user = req.body.userId;
    let likes = req.body.like;
    console.log(likes);
    Sauce.findOne({ _id: req.params._id })
      .then((votedSauce) => {  
        if (likes === 1) {
          Sauce.updateOne({ _id:req.params._id }, { $push: { usersLiked: user }, $inc: { likes:1 }})
            .then(() => 
            res.status(201).json({ message: 'You liked this sauce' })
            )
            .catch(
              error => res.status(400).json({ error })
              )
        } else if (likes === -1) {
            Sauce.updateOne({ _id: req.params._id }, { $push: { usersDisliked: user }, $inc: { dislikes: 1 }})
            .then(() => 
              res.status(201).json({ message: 'You disliked this sauce' })
              )
            .catch(
              error => res.status(400).json({ error })
              )
        } else if (likes === 0) {
            if (votedSauce.usersLiked.includes(user)) 
                {
                  Sauce.updateOne({ _id: req.params._id }, { $pull: { usersLiked: user }, $inc: { likes:  -1 } })
                  .then(() => 
                  res.status(201).json(
                    { message:'You un-liked this sauce' }
                    )
                  )
                  .catch(error => res.status(400).json({ error })
                  )
              } else if (votedSauce.usersDisliked.includes(user)) 
                  {
                    Sauce.updateOne({ _id: req.params._id }, { $pull: { usersDisliked: user }, $inc: { dislikes: -1 }})
                  .then(() => 
                  res.status(201).json({ message:'you un-disliked this sauce' })
                  )
                  .catch(
                    error => res.status(400).json({ error })
                    )
              }
        }
      })
      .catch(error => res.status(400).json({ error }))
  };
  
