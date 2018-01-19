const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:270127/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to conenct MongoDB server");
    }
    console.log("connected MongoDB server");

    var myDb = db.db('TodoApp');

    // myDb.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a624e33e3a34ea9ee6ed98f')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    myDb.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a625097e3a34ea9ee6eda40')
    }, {
        $set: {
            name: 'Seong Hyun Han'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

});