module.exports=function(req, res, next) {
  
  // GET /api/shopslist/get?lat=90.243285&long=18.246732&cat=hardware
  latitude = req.query.lat;
  longitude = req.query.long;
  category= req.query.cat;
  res.send('latitude ='+latitude +'longitude ='+longitude + category);
  
  
}
