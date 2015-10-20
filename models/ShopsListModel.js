/**
 * Created by lowdisk on 18/10/15.
 */

var mongoCollections=require('./mongoConnector');

function shoplist() {
    db.collection('shopslist').find().toArray(function(error,docs){
        assert.equal(null,error);
        res.send(docs);
    });



};
