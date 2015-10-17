var express = require('express');
var router = express.Router();
var ShopsListCtrl = require('./../controllers/ShopsList')
var ShopsCategoryCtrl = require('./../controllers/ShopsCategory')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/shopslists/get', ShopsListCtrl);
router.get('/shopscategory/get', ShopsCategoryCtrl);

module.exports = router;
