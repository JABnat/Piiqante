const express = require('express');
const router = express.Router();
const multer= require('../middleware/multer-config');

const auth = require('../middleware/auth');

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth , saucesCtrl.getSauceInformation); // done
router.get('/:_id', auth, saucesCtrl.getAllSaucesId); // (** frontend not displaying individual sauce **)
router.post('/', auth, multer, saucesCtrl.createSauce); //done 
router.put('/:_id', auth, multer, saucesCtrl.modifySauce); //done 
router.delete('/:_id', auth, saucesCtrl.deleteSauce); //done 
router.post('/:_id/like', auth, saucesCtrl.sauceLikes); // ( in progress )

module.exports = router;

// needed to call multer in router to save images during create and modify process (11-12) -multer = registering images