const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const saucesCtrl = require('../controllers/sauces');

router.get('/', saucesCtrl.getSauceInformation);
// router.get('/:_id', auth, saucesCtrl.getAllSaucesId);
// router.post('/', auth, saucesCtrl.createSauce);
// router.put('/:_id', auth, saucesCtrl.modifySauce);
// router.delete('/:_id', auth, saucesCtrl.deleteSauce);
// router.post('/', auth, saucesCtrl.createSauceLikes);

module.exports = router;

// router.use('/api/sauces', (req, res, next) => {
//     Sauce.find().then(
//       (sauces) => {
//         res.status(200).json(sauces);
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   });
//-----------------------------

// router.post('/api/auth/signup',(req, res, next) => {
//     // .catch(
//     //   (error) => {
//     //     res.status(400).json({
//     //       error: error
//     //     });
//     //   }
//     // );
//   });
  
//   router.post('/api/auth/login',(req, res, next) => {
//    // .catch(
//     //   (error) => {
//     //     res.status(400).json({
//     //       error: error
//     //     });
//     //   }
//     // );
//   });

module.exports = router;