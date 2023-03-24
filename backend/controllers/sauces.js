const Sauce = require('../models/sauce');

// signup

// login

exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
    _id: req.body._id,
    userId: req.body.userId,
    name: req.body.userId,
    manufacturer: req.body.userId,
    description: req.body.description,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    imageUrl: req.body.imageUrl,
    mainPepper: req.body.mainPepper,
    usersLiked: req.body.usersLiked,
    usersDisliked: req.body.usersDisliked,
   
  });
  sauce.save().then(
    () => {
      res.status(201).json({
        message: 'Sauce saved successfully!'
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

// get sauce information
exports.getSauceInformation = (req, res, next) => {
  console.log("getSauceInformation")
    const sauce = [
        {
          _id: 'JLHDSHS',  
          userId: 'POSJNDS',
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
          userId: 'user001',
        },
  
      { 
        _id: 'ERTGJHS',
        name: 'Tapatio, Hot Sauce, 32 oz',
        manufacturer: 'Tapatio',
        description: 'Add some zest and bold flavor to a meal with the Tapatio Hot Sauce 32 oz bottle. This salsa picante is ideal for tacos, mixed drinks, dip and much more. Add according to taste, pouring on the heavier side to add a bolder kick and a more authentic Mexican flavor to your dishes. This fat-free sauce is used in restaurants around the country and can now be enjoyed in the comfort of your own home. A simple ingredients list helps you easily see what exactly makes Tapatio sauce so good.',
        heat: 90,
        likes: 12,
        dislikes: 10,
        imageUrl: 'https://i5.walmartimages.com/asr/2466f4bc-14a1-4718-8a3d-56db74cd7505.1a3c7439fdd2b5aa2018f7b6281a543e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        mainPepper: 'Cayanne Pepper',
        usersLiked: 'usersLiked'['me gusta'],
        usersDisliked: 'usersDisliked'['no me gusta'],
        userId: 'user123',
      }
    ];
    res.status(200).json(sauce);
};

// id search sauce
exports.getAllSaucesId = (req, res, next) => {
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

// Create sauce
exports.createSauce = (req, res, next) => {
    console.log(req.body);
    //sauce: String, image: File
    res.status(201).json({
      message: 'Sauce created successfully!'
    });
};

// Find sauce
exports.modifySauce = (req, res, next) => {
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

// Delete
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({_id: req.params.id}).then(
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
  
  // Likes
exports.createSauceLikes = (req, res, next) => {
  
};