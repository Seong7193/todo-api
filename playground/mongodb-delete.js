const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    myDb = db.db("TodoApp");

    // Delete Many
    // myDb.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Delete One
    // myDb.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Find One and Delete
    // myDb.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // myDb.collection('Users').deleteMany({name: 'Seong Hyun Han'}).then((result) => {
    //     console.log(result);
    // });

    myDb.collection('Users').findOneAndDelete({_id: new ObjectID('5a62507ae3a34ea9ee6eda36')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    // db.close();
});