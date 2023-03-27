const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth , saucesCtrl.getSauceInformation);
router.get('/:_id', auth, saucesCtrl.getAllSaucesId);
router.post('/', auth, saucesCtrl.createSauce);
router.put('/:_id', auth, saucesCtrl.modifySauce);
router.delete('/:_id', auth, saucesCtrl.deleteSauce);
router.post('/', auth, saucesCtrl.createSauceLikes);


module.exports = router;