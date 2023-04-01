const express = require('express');
const router = express.Router();
const multer= require('../middleware/multer-config');

const auth = require('../middleware/auth');

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth , saucesCtrl.getSauceInformation); // done
router.get('/:_id', auth, saucesCtrl.getAllSaucesId); // done
router.post('/', auth, multer, saucesCtrl.createSauce); //done 
router.put('/:_id', auth, multer, saucesCtrl.modifySauce); //done 
router.delete('/:_id', auth, saucesCtrl.deleteSauce); //done 
router.post('/:_id/like', auth, saucesCtrl.sauceLikes); // done

module.exports = router;