const express = require('express');

const router = express.Router();
const saucesCtrl = require('../controllers/sauces');

router.get('/', saucesCtrl.getAllSauces);

router.post('/api/auth/signup',(req, res, next) => {
    const sauce = new Sauce({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
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
  });
  
  router.post('/api/auth/login',(req, res, next) => {
  
  });
  
  router.get('/', (req, res, next) => {
    const sauce = [
        {
          userId: '123',
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
        },
  
      { 
        _id: '012',
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
  });
  
  
  router.get('/:id', (req, res, next) => {
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
  });
  
  router.post('/sauces', (req, res, next) => {
    console.log(req.body);
    //sauce: String, image: File
    res.status(201).json({
      message: 'Sauce created successfully!'
    });
  });
  
  router.put('/:id', (req, res, next) => {
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
  });
  
  router.delete('/:id', (req, res, next) => {
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
  });
  
  router.post('/:id/like', (req, res, next) => {
  
  });

module.exports = router;