var Shopslistmodel = require('./../models/ShopsListModel')
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;


module.exports=function(req, res, next) {
  // GET /api/shopslist/get?lat=90.243285&long=18.246732&cat=hardware
  latitude = req.query.lat;
  longitude = req.query.long;
  category= req.query.cat;


    Shopslistmodel.getShops(function(shops){ res.send(shops); });


    //res.send('latitude ='+latitude +'longitude ='+longitude + category+'connection sucessful');
    
  
}
