/**
 * Created by lowdisk on 18/10/15.
 */

var mongo=require('./mongoConnector');
var assert = require('assert');

exports.getShops = function(fn) {

    console.log('mongocollection value',mongo)
    mongo.collections.shopslist.find().toArray(function(error,docs){
        assert.equal(null,error);
        console.log(docs);
        fn(docs);

    });

}




