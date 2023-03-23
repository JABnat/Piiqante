const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

router.get('/', saucesCtrl.getAllSauces);
router.get('/:_id', saucesCtrl.getAllSauces);
router.post('/', stufsaucesCtrlfCtrl.createSauce);
router.put('/:_id', saucesCtrl.modifySauce);
router.delete('/:_id', saucesCtrl.deleteSauce);
router.post('/', saucesCtrl.createSauce);

module.exports = router;
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