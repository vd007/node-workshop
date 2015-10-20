/**
 * Created by lowdisk on 18/10/15.
 */

var mongoCollections=require('./mongoConnector');

function shoplist() {
    console.log('mongocollection value',mongoCollections)
    mongoCollections.shopslist.find().toArray(function(error,docs){
        assert.equal(null,error);
        console.log(docs);
    });



}


shoplistobject={
    navneet:shoplist
};
module.exports=shoplistobject;
