/**
 * Created by lowdisk on 17/10/15.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test'
var collections={};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('mongo connected')
    collections = {
        shopslist: db.collection('shopslist')

    }





});
module.exports=collections;